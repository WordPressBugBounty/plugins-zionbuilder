<?php

namespace ZionBuilder;

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
	return;
}

/**
 * Class Templates
 *
 * @package ZionBuilder
 */
class ThemeStyles {
	public function __construct() {
		// Add options to page settings
		// add_action( 'zionbuilder/schema/page_options', array( $this, 'attach_options' ) );

		// add_action( 'zionbuilder/page/save', array( $this, 'on_page_save' ) );
	}

	/**
	 * Saves the theme styles to the database
	 *
	 * @param array $params
	 *
	 * @return void
	 */
	public function on_page_save( $params ) {
		$theme_styles = $params['theme_styles'];

		// Save theme styles
		self::save_styles( $theme_styles );
	}

	/**
	 * Saves the theme styles to the database
	 *
	 * @param array $styles
	 *
	 * @return bool
	 */
	public static function save_styles( $styles ) {
		return update_option( 'zionbuilder_theme_styles', $styles );
	}

	/**
	 * Returns the theme styles from the database
	 *
	 * @return array
	 */
	public static function get_styles() {
		return get_option( 'zionbuilder_theme_styles', array() );
	}


	/**
	 * Attaches the theme styles options to the page settings
	 *
	 * @param \ZionBuilder\OptionsManager $options_manager
	 *
	 * @return void
	 */
	public function attach_options( $options_manager ) {
		$group = $options_manager->add_group(
			'theme_styles',
			array(
				'title' => esc_html__( 'Theme styles', 'zionbuilder' ),
				'type'  => 'accordion_menu',
			)
		);

		$group->add_option(
			'theme_styles',
			array(
				'type' => 'theme_styles',
			)
		);
	}
}
