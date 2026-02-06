<?php

namespace ZionBuilder;

use WP_Styles;
use ZionBuilder\Plugin;
use ZionBuilder\Elements\Style;

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
	return;
}

/**
 * Class Cache
 *
 * @since 3.4.0
 *
 * @package ZionBuilder
 */
class Assets {
	const HEAD_SCRIPTS_PLACEHOLDER   = '<!-- ZIONBUILDER_HEAD_SCRIPTS -->';
	const FOOTER_SCRIPTS_PLACEHOLDER = '<!-- ZIONBUILDER_FOOTER_SCRIPTS -->';

	/**
	 * Holds the name of the directory to use by default for assets config
	 */
	const CACHE_FOLDER_NAME = 'cache';

	/**
	 * Holds the name of the dynamic cache file name
	 */
	const DYNAMIC_CSS_FILENAME            = 'dynamic_css.css';
	const DYNAMIC_CSS_FOR_EDITOR_FILENAME = 'dynamic_css--editor.css';

	/**
	 * Holds the captured scripts
	 *
	 * @var array
	 */
	static $captured_scripts = array();

	/**
	 * Holds the captured styles
	 *
	 * @var array
	 */
	static $captured_styles = array();


	/**
	 * Holds a reference to the cache folder
	 *
	 * @var array{path: string, url: string}
	 */
	private static $cache_directory = null;

	/**
	 * Holds a reference to the element scripts that are already loaded
	 *
	 * @var array
	 */
	private static $loaded_element_assets = array();

	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'on_enqueue_scripts' ) );

		// Manually enqueue post dynamic assets
		add_action( 'wp_head', array( self::class, 'add_header_scripts_placeholder' ), '8.1' );
		add_filter( 'zionbuilder/renderer/page_content', array( self::class, 'add_dynamic_assets_to_page' ) );
		add_action( 'wp_footer', array( self::class, 'add_footer_scripts_placeholder' ), 20 );
		add_action( 'wp_footer', array( $this, 'catch_footer_scripts' ), 19 );

		// Cache file creation and deletion
		add_action( 'save_post', array( $this, 'delete_post_assets' ) );
		add_action( 'delete_post', array( $this, 'delete_post_assets' ) );
		add_action( 'zionbuilder/settings/after_save', array( $this, 'compile_global_css' ) );

		// Generate and set the cache directory
		$relative_cache_path       = trailingslashit( self::CACHE_FOLDER_NAME );
		$zionbuilder_upload_folder = FileSystem::get_zionbuilder_upload_dir();

		self::$cache_directory = array(
			'path' => $zionbuilder_upload_folder['basedir'] . $relative_cache_path,
			'url'  => esc_url( set_url_scheme( $zionbuilder_upload_folder['baseurl'] . $relative_cache_path ) ),
		);

		// Create the cache folder
		wp_mkdir_p( self::$cache_directory['path'] );
	}

	/**
	 * Adds a placeholder that we can replace with actual page assets
	 *
	 * @return void
	 */
	public static function add_header_scripts_placeholder() {
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo self::HEAD_SCRIPTS_PLACEHOLDER;
	}

	/**
	 * Adds a placeholder that we can replace with actual page assets
	 *
	 * @return void
	 */
	public static function add_footer_scripts_placeholder() {
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo self::FOOTER_SCRIPTS_PLACEHOLDER;
	}

	/**
	 * Will catch the footer scripts and styles
	 *
	 * We do this because stylesheets that are enqueued after wp_head will be printed in the footer
	 * We save them so we can place them in their proper location
	 *
	 * @return void
	 */
	public function catch_footer_scripts() {
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		$wp_scripts = wp_scripts();
		$wp_styles  = wp_styles();

		self::$captured_scripts = $wp_scripts->queue;
		self::$captured_styles  = $wp_styles->queue;

		// Reset the queue
		$wp_scripts->queue = array();
		$wp_styles->queue  = array();
	}

	/**
	 * Replaces the placeholder with the actual dynamic assets
	 *
	 * @param string $page_content
	 *
	 * @return string
	 */
	public static function add_dynamic_assets_to_page( $page_content ) {
		$wp_styles  = wp_styles();
		$wp_scripts = wp_scripts();

		$registered_posts     = Plugin::$instance->renderer->get_registered_areas();
		$registered_areas_ids = array_keys( $registered_posts );

		// #1 Load global css
		Plugin::instance()->assets->load_global_css();
		self::$captured_styles[] = 'zionbuilder-global-css';

		// If we have registered areas, just generate the assets based on the areas
		if ( count( $registered_areas_ids ) > 0 ) {
			foreach ( $registered_posts as $post_id => $post_data ) {
				$assets                 = self::enqueue_assets_for_post_id( $post_id );
				self::$captured_styles  = array_merge( self::$captured_styles, $assets['styles'] );
				self::$captured_scripts = array_merge( self::$captured_scripts, $assets['scripts'] );
			}
		}

		ob_start();
		$wp_styles->do_items( self::$captured_styles, 0 );
		$wp_scripts->do_items( self::$captured_scripts, 0 );
		$header_styles_and_scripts = ob_get_clean();

		ob_start();
		$wp_styles->do_items( self::$captured_styles, 1 );
		$wp_scripts->do_items( self::$captured_scripts, 1 );
		$footer_styles_and_scripts = ob_get_clean();

		return str_replace(
			[ self::HEAD_SCRIPTS_PLACEHOLDER, self::FOOTER_SCRIPTS_PLACEHOLDER ],
			[ $header_styles_and_scripts, $footer_styles_and_scripts ],
			$page_content
		);
	}

	/**
	 * Enqueues the assets for a post id
	 *
	 * @param int $post_id
	 *
	 * @return array The handles of the enqueued assets
	 *           [
	 *              'styles' => array,
	 *              'scripts' => array
	 *           ]
	 * @since 3.7.0
	 */
	public static function enqueue_assets_for_post_id( $post_id ) {
		$style_handlers = [];
		$script_handles = [];

		if ( ! Plugin::$instance->editor->preview->is_preview_mode() || get_the_ID() !== $post_id ) {
			$css_file_paths = self::get_asset_file_paths_from_post_id( $post_id, 'css' );
			$js_file_paths  = self::get_asset_file_paths_from_post_id( $post_id, 'js' );

			// Check to see if the css file exists, we check only the css as if the css exists, the js should exist too
			if ( ! file_exists( $css_file_paths['file_path'] ) || Environment::is_debug() || true ) {
				self::generate_post_assets( $post_id );
			}

			// Load css
			if ( file_exists( $css_file_paths['file_path'] ) ) {
				$file_handle      = sprintf( 'zionbuilder-post-%s', $post_id );
				$style_handlers[] = $file_handle;
				wp_enqueue_style( $file_handle, $css_file_paths['file_url'], array(), filemtime( $css_file_paths['file_path'] ) );
			}

			// Load js
			if ( file_exists( $js_file_paths['file_path'] ) ) {
				$file_handle      = sprintf( 'zionbuilder-post-%s', $post_id );
				$script_handles[] = $file_handle;
				wp_enqueue_script( $file_handle, $js_file_paths['file_url'], array(), filemtime( $js_file_paths['file_path'] ), true );
			}

			do_action( 'zionbuilder/assets/enqueue_assets_for_post', $post_id );
		}

		return [
			'styles'  => $style_handlers,
			'scripts' => $script_handles,
		];
	}

	public function on_enqueue_scripts() {
		// #1 register scripts
		$this->register_defaults_scripts();
	}

	public function load_page_content_scripts() {
		$registered_posts = Plugin::$instance->renderer->get_registered_areas();

		foreach ( $registered_posts as $post_id => $template_data ) {
			// Load elements css/js from scripts files
			foreach ( $template_data as $element ) {
				$element_instance = Plugin::$instance->renderer->get_element_instance( $element['uid'] );

				if ( $element_instance ) {
					self::enqueue_external_files_for_element( $element_instance );
				}
			}
		}
	}

	public static function enqueue_scripts_for_elements( $elements = array() ) {
		foreach ( $elements as $element ) {

			$element_instance = Plugin::$instance->renderer->get_element_instance( $element['uid'] );

			if ( $element_instance ) {
				self::enqueue_external_files_for_element( $element_instance );
			}
		}
	}

	public static function enqueue_external_files_for_element( $element_instance ) {
		$element_instance->enqueue_all_extra_scripts();

		// Check for children
		$children = $element_instance->get_children();
		if ( is_array( $children ) ) {
			foreach ( $children as $element ) {
				$child_element = Plugin::$instance->renderer->get_element_instance( $element['uid'] );

				if ( $child_element ) {
					self::enqueue_external_files_for_element( $child_element );
				}
			}
		}
	}

	public static function get_asset_file_paths_from_post_id( $post_id, $type = 'css' ) {
		return [
			'file_path' => self::$cache_directory['path'] . "post-{$post_id}.{$type}",
			'file_url'  => self::$cache_directory['url'] . "post-{$post_id}.{$type}",
		];
	}

	public static function generate_post_assets( $post_id, $use_cache = true ) {
		$post_instance = Plugin::$instance->post_manager->get_post_instance( $post_id );
		$css           = '';
		$js            = '';

		// Clear the loaded element assets
		self::$loaded_element_assets = array();

		if ( ! $post_instance || ! $post_instance->is_built_with_zion() ) {
			return;
		}

		// Get the template data
		$post_template_data = $post_instance->get_template_data();

		foreach ( $post_template_data as $position => $element_data ) {
			$element_instance = Plugin::$instance->renderer->get_element_instance( $element_data['uid'] );

			if ( $element_instance ) {
				$assets = self::extract_element_assets( $element_instance );
				$css   .= $assets['css'];
				$js    .= $assets['js'];
			}
		}

		// TODO: document this
		$css = apply_filters( 'zionbuilder/assets/page/css', $css, $post_id );

		// TODO: document this
		$js = apply_filters( 'zionbuilder/assets/page/js', $js, $post_id );
		// Save the css to file
		if ( ! empty( $css ) ) {
			$file_path = self::$cache_directory['path'] . "post-{$post_id}.css";
			FileSystem::get_file_system()->put_contents( $file_path, self::minify( $css ), 0644 );
		}

		// Save the css to file
		if ( ! empty( $js ) ) {
			$file_path = self::$cache_directory['path'] . "post-{$post_id}.js";
			FileSystem::get_file_system()->put_contents( $file_path, self::minify( self::wrap_legacy_js( $js ) ), 0644 );
		}
	}

	public static function extract_element_assets( $element_instance ) {
		$css = '';
		$js  = '';

		do_action( 'zionbuilder/element/before_element_extract_assets', $element_instance );

		$element_instance->enqueue_all_extra_scripts();
		$element_styles  = $element_instance->get_element_styles();
		$element_scripts = $element_instance->get_element_scripts();

		// #1 Add element css and js files
		if ( empty( self::$loaded_element_assets[$element_instance->get_type()] ) ) {
			foreach ( $element_styles as $style_url ) {
				$style_path = Utils::get_file_path_from_url( $style_url );
				$css       .= FileSystem::get_file_system()->get_contents( $style_path );
			}

			foreach ( $element_scripts as $script_url ) {
				$script_path = Utils::get_file_path_from_url( $script_url );
				$js         .= FileSystem::get_file_system()->get_contents( $script_path );
			}

			// Set a flag so we only load these files once
			self::$loaded_element_assets[$element_instance->get_type()] = true;
		}

		// Setup the data
		$element_instance->options->parse_data();

		// #2 Add css from style tab
		$styles            = $element_instance->options->get_value( '_styles', array() );
		$registered_styles = $element_instance->get_style_elements_for_editor();

		if ( ! empty( $styles ) && is_array( $registered_styles ) ) {
			foreach ( $registered_styles as $id => $style_config ) {
				if ( ! empty( $styles[$id] ) ) {
					$css_selector = $element_instance->get_css_selector();
					$css_selector = str_replace( '{{ELEMENT}}', $css_selector, $style_config['selector'] );
					$css_selector = apply_filters( 'zionbuilder/element/full_css_selector', array( $css_selector ), $element_instance );

					$css .= Style::get_css_from_selector( $css_selector, $styles[$id] );
				}
			}
		}

		// #3 Add css from options
		$css .= $element_instance->custom_css->get_css();

		// #2 Add element dynamic css
		$css .= $element_instance->css();

		// #4 Add custom css
		$css .= $element_instance->get_custom_css();

		// Check for children css
		$children = $element_instance->get_children();
		if ( is_array( $children ) ) {
			foreach ( $children as $element ) {
				$child_element = Plugin::$instance->elements_manager->get_element_instance_with_data( $element );

				if ( $child_element ) {
					$assets = self::extract_element_assets( $child_element );
					$css   .= $assets['css'];
					$js    .= $assets['js'];
				}
			}
		}

		do_action( 'zionbuilder/assets/after_element_extract_assets', $element_instance );

		return array(
			'css' => $css,
			'js'  => $js,
		);
	}

	/**
	 * Will delete the entire cache directory
	 *
	 * @return void
	 */
	public static function delete_all_cache() {
		$glob_pattern = sprintf( '%s*.{css,js}', self::$cache_directory['path'] );
		$cached_files = glob( $glob_pattern, GLOB_BRACE );

		foreach ( $cached_files as $file_path ) {
			FileSystem::get_file_system()->delete( $file_path );
		}
	}

	/**
	 * Deletes the cache for a single post
	 *
	 * @param integer $post_id
	 * @return void
	 */
	public static function delete_post_assets( $post_id ) {
		$post_id      = absint( $post_id );
		$cached_files = self::get_cache_files_for_post( $post_id );

		foreach ( $cached_files as $file_path ) {
			FileSystem::get_file_system()->delete( $file_path );
		}
	}

	/**
	 * Will return all the cache files that matches a post id
	 *
	 * @param int $post_id
	 *
	 * @return array
	 */
	public static function get_cache_files_for_post( $post_id ) {
		$cache_files_found = array();
		$glob_pattern      = sprintf( '%s*.{css,js}', self::$cache_directory['path'] );
		$cached_files      = glob( $glob_pattern, GLOB_BRACE );

		foreach ( $cached_files as $file ) {
			$name = pathinfo( $file, PATHINFO_FILENAME );

			if ( false !== strpos( $name, (string) $post_id ) ) {
				$cache_files_found[] = $file;
			}
		}

		return $cache_files_found;
	}

	public function register_defaults_scripts() {
		// register styles
		wp_register_style( 'swiper', Utils::get_file_url( 'assets/vendors/swiper/swiper.min.css' ), array(), Plugin::instance()->get_version() );

		// Load animations
		wp_register_style( 'zion-frontend-animations', Utils::get_file_url( 'assets/vendors/css/animate.css' ), array(), Plugin::instance()->get_version() );

		// Register scripts
		wp_register_script( 'zb-modal', Plugin::instance()->scripts->get_script_url( 'ModalJS', 'js' ), array(), Plugin::instance()->get_version(), true );

		// Video
		wp_register_script( 'zb-video', Plugin::instance()->scripts->get_script_url( 'ZBVideo', 'js' ), array(), Plugin::instance()->get_version(), true );
		wp_localize_script(
			'zb-video',
			'ZionBuilderVideo',
			array(
				'lazy_load' => Settings::get_value( 'performance.enable_video_lazy_load', false ),
			)
		);

		wp_register_script( 'zb-video-bg', Plugin::instance()->scripts->get_script_url( 'ZBVideo', 'js' ), array(), Plugin::instance()->get_version(), true );

		// Swiper slider
		wp_register_script( 'swiper', Utils::get_file_url( 'assets/vendors/swiper/swiper.min.js' ), array(), Plugin::instance()->get_version(), true );
		wp_register_script( 'zion-builder-slider', Utils::get_file_url( 'dist/elements/ImageSlider/frontend.js' ), [ 'swiper' ], Plugin::instance()->get_version(), true );

		// Animate JS
		wp_register_script( 'zionbuilder-animatejs', Utils::get_file_url( 'dist/animateJS.js' ), [], Plugin::instance()->get_version(), true );
		wp_add_inline_script( 'zionbuilder-animatejs', 'animateJS()' );
	}

	public static function wrap_legacy_js( $js ) {
		if ( ! empty( $js ) ) {
			$js = sprintf(
				'
			(function($) {
				window.ZionBuilderFrontend = {
					scripts: {},
					registerScript: function (scriptId, scriptCallback) {
						this.scripts[scriptId] = scriptCallback;
					},
					getScript(scriptId) {
						return this.scripts[scriptId]
					},
					unregisterScript: function(scriptId) {
						delete this.scripts[scriptId];
					},
					run: function() {
						var that = this;
						var $scope = document;
						Object.keys(this.scripts).forEach(function(scriptId) {
							var scriptObject = that.scripts[scriptId];
							scriptObject.run( $scope );
						})
					}
				};
				%s
				window.ZionBuilderFrontend.run();
			})();
			',
				$js
			);
		}

		return $js;
	}

	public function load_global_css() {
		$dynamic_cache_file     = self::$cache_directory['path'] . self::DYNAMIC_CSS_FILENAME;
		$dynamic_cache_file_url = self::$cache_directory['url'] . self::DYNAMIC_CSS_FILENAME;

		$dynamic_cache_file_for_editor     = self::$cache_directory['path'] . self::DYNAMIC_CSS_FOR_EDITOR_FILENAME;
		$dynamic_cache_file_url_for_editor = self::$cache_directory['url'] . self::DYNAMIC_CSS_FOR_EDITOR_FILENAME;

		// Create the file if it doesn't exists
		if ( ! is_file( $dynamic_cache_file ) || ! is_file( $dynamic_cache_file_for_editor ) || Environment::is_debug() ) {
			self::compile_global_css();
		}

		$version = (string) filemtime( $dynamic_cache_file );

		/**
		 * In editor, the global classes css is generated inline, so we don't need to enqueue it
		 */
		if ( Plugin::instance()->editor->preview->is_preview_mode() ) {
			wp_enqueue_style( 'zionbuilder-global-css', $dynamic_cache_file_url_for_editor, [], $version );
		} else {
			wp_enqueue_style( 'zionbuilder-global-css', $dynamic_cache_file_url, [], $version );
		}
	}


	/**
	 * Compiles the global css from admin dashboard
	 *
	 * @return boolean
	 */
	public static function compile_global_css() {
		$dynamic_cache_file                    = self::$cache_directory['path'] . self::DYNAMIC_CSS_FILENAME;
		$dynamic_cache_file_for_editor_preview = self::$cache_directory['path'] . self::DYNAMIC_CSS_FOR_EDITOR_FILENAME;

		$dynamic_css                    = '';
		$dynamic_css_for_editor_preview = '';

		// #1 Add normalize if necessary
		if ( Settings::get_value( 'performance.disable_normalize_css', false ) === false ) {
			$normalize_css = FileSystem::get_file_system()->get_contents( Utils::get_file_path( 'assets/vendors/css/normalize.css' ) );
			if ( $normalize_css ) {
				$dynamic_css                    .= $normalize_css;
				$dynamic_css_for_editor_preview .= $normalize_css;
			}
		}

		// #2 Add frontend.css
		$frontend_css = FileSystem::get_file_system()->get_contents( Utils::get_file_path( 'dist/frontend.css' ) );

		// Set proper responsive breakpoints
		if ( $frontend_css ) {
			$formatted_css                   = Responsive::replace_devices_in_css( $frontend_css );
			$dynamic_css                    .= $formatted_css;
			$dynamic_css_for_editor_preview .= $formatted_css;
		}

		// #3 Add css classes css
		// TODO: do not load global classes css here and only load where it is used
		$dynamic_css .= CSSClasses::get_css();

		// #4 Allow others to add css to the global css
		$dynamic_css                    = apply_filters( 'zionbuilder/cache/dynamic_css', $dynamic_css );
		$dynamic_css_for_editor_preview = apply_filters( 'zionbuilder/cache/dynamic_css', $dynamic_css_for_editor_preview );

		// Create the file for editor preview. This file doesn't compile the css classes as they are generated with Vue
		FileSystem::get_file_system()->put_contents( $dynamic_cache_file_for_editor_preview, self::minify( $dynamic_css_for_editor_preview ), 0644 );

		return FileSystem::get_file_system()->put_contents( $dynamic_cache_file, self::minify( $dynamic_css ), 0644 );
	}


	/**
	 * Minify
	 *
	 * Will minify css code by removing comments and whitespace
	 *
	 * @param string $css
	 *
	 * @return string The minified css
	 */
	public static function minify( $css ) {
		// Remove comments
		$css = preg_replace( '!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $css );
		// Remove space after colons
		$css = str_replace( ': ', ':', $css );
		// Remove whitespace
		$css = str_replace( array( "\r\n", "\r", "\n", "\t" ), '', $css );

		return $css;
	}
}
