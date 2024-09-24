<?php

namespace ZionBuilder\Integrations;

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
	return;
}

/**
 * Class Gutenberg
 *
 * @package ZionBuilder\Integrations
 */
class Polylang implements IBaseIntegration {
	/**
	 * Retrieve the name of the integration
	 *
	 * @return string
	 */
	public static function get_name() {
		return 'polylang';
	}


	/**
	 * Check if we can load this integration or not
	 *
	 * @return boolean If true, the integration will be loaded
	 */
	public static function can_load() {
		return defined( 'POLYLANG_VERSION' );
	}


	/**
	 * Main class constructor
	 */
	public function __construct() {
		add_filter( 'zionbuilderpro/theme/template_post_id', [ $this, 'change_post_id' ], 10 );
		add_filter( 'zionbuilder/shortcode/post_id', [ $this, 'change_post_id' ], 10 );
		add_filter( 'pll_get_post_types', [ __CLASS__, 'enable_polylang_for_zion_templates' ], 10 );
		add_action( 'zionbuilder/post/after_save', [__CLASS__, 'set_default_language'] );
	}

	public static function set_default_language( $post_id ) {
		if (function_exists('pll_is_translated_post_type') && \pll_is_translated_post_type(get_post_type($post_id))) {
			$lang = \pll_get_post_language( $post_id );
			if ( empty( $lang ) ) {
				\pll_set_post_language( $post_id, pll_default_language() );
			}
		}
	}

	/**
	 * Enables polylang for zion templates
	 * 
	 * @since 3.6.6
	 */
	public static function enable_polylang_for_zion_templates($post_types) {
		$post_types[] = 'zion_template';
		return $post_types;
	}

	/**
	 * Sets the proper post id for polylang translated pages
	 *
	 * @param string $post_id The preview content
	 *
	 * @return string The preview content
	 */
	public function change_post_id( $post_id ) {
		if ( function_exists( 'pll_get_post' ) ) {
			// phpcs:ignore
			$post_id = \pll_get_post( $post_id ) ?: $post_id;
		}

		return $post_id;
	}
}
