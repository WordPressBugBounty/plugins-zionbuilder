<?php

namespace ZionBuilder\Options\Schemas;

use ZionBuilder\Options\Options;
use ZionBuilder\Options\BaseSchema;
use ZionBuilder\Options\Helpers;

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
	return;
}

/**
 * Class Advanced
 *
 * @package ZionBuilder\Options\Schemas
 */
class Advanced extends BaseSchema {
	/**
	 * @return array
	 */
	public static function get_schema() {
		$advanced_options = new Options( 'zionbuilder/schema/advanced_options' );

		$general_group = $advanced_options->add_group(
			'general-group',
			[
				'type'  => 'panel_accordion',
				'title' => __( 'General options', 'zionbuilder' ),
			]
		);

		$general_group->add_option(
			'_element_name',
			[
				'type'        => 'text',
				'description' => __( 'Set the desired name for this element. Will only appear in edit mode.' ),
				'title'       => __( 'Element name', 'zionbuilder' ),
				'placeholder' => '%%ELEMENT_TYPE%%',
				'save_path'   => 'name',
			]
		);

		$general_group->add_option(
			'_element_id',
			[
				'type'        => 'text',
				'description' => __( 'Set the desired element id. Please note that the id must be unique accross your page' ),
				'title'       => __( 'Element unique id', 'zionbuilder' ),
				'placeholder' => '%%ELEMENT_UID%%',
				'save_path'   => 'uid',
			]
		);

		$general_group->add_option(
			'_element_visibility',
			[
				'type'        => 'custom_selector',
				'description' => __( 'Set the visibility for this element.' ),
				'title'       => __( 'Element visibility', 'zionbuilder' ),
				'default'     => 'all',
				'options'     => [
					[
						'name' => __( 'All', 'zionbuilder' ),
						'id'   => 'all',
					],
					[
						'name' => __( 'Logged in users', 'zionbuilder' ),
						'id'   => 'logged_in',
					],
					[
						'name' => __( 'Logged out users', 'zionbuilder' ),
						'id'   => 'logged_out',
					],
				],
			]
		);

		$animation_group = $advanced_options->add_group(
			'animation-group',
			[
				'type'      => 'panel_accordion',
				'title'     => __( 'Animations options', 'zionbuilder' ),
				'collapsed' => true,
			]
		);

		$animation_group->add_option(
			'_appear_animation',
			[
				'type'             => 'radio_image',
				'description'      => __( 'Set the desired appear animation when the element becomes visible in the viewport.' ),
				'title'            => __( 'Appear animation', 'zionbuilder' ),
				'default'          => '',
				'columns'          => 3,
				'use_search'       => true,
				'search_text'      => __( 'Search animation', 'zionbuilder' ),
				'options'          => Helpers::get_animations(),
				'render_attribute' => [
					[
						'attribute' => 'class',
						'value'     => 'animated {{VALUE}}',
					],
				],
			]
		);

		$animation_group->add_option(
			'_appear_duration',
			[
				'type'        => 'dynamic_slider',
				'description' => esc_html__( 'Set the desired appear animation duration (in milliseconds).' ),
				'title'       => esc_html__( 'Appear duration', 'zionbuilder' ),
				'default'     => '1000ms',
				'content'     => 'ms',
				'dependency'  => [
					[
						'option' => '_appear_animation',
						'type'   => 'not_in',
						'value'  => [ '' ],
					],
				],
				'options'     => [
					[
						'min'        => 0,
						'max'        => 10000,
						'step'       => 1,
						'shift_step' => 5,
						'unit'       => 's',
					],
					[
						'min'        => 0,
						'max'        => 10000,
						'step'       => 10,
						'shift_step' => 100,
						'unit'       => 'ms',
					],
				],
				'sync'        => '_styles.wrapper.styles.%%RESPONSIVE_DEVICE%%.default.animation-duration',
			]
		);

		$animation_group->add_option(
			'_appear_delay',
			[
				'type'        => 'dynamic_slider',
				'description' => esc_html__( 'Set the desired appear animation delay (in milliseconds).', 'zionbuilder' ),
				'title'       => esc_html__( 'Appear delay', 'zionbuilder' ),
				'default'     => '0ms',
				'dependency'  => [
					[
						'option' => '_appear_animation',
						'type'   => 'not_in',
						'value'  => [ '' ],
					],
				],
				'options'     => [
					[
						'min'        => 0,
						'max'        => 100,
						'step'       => 1,
						'shift_step' => 5,
						'unit'       => 's',
					],
					[
						'min'        => 0,
						'max'        => 10000,
						'step'       => 10,
						'shift_step' => 100,
						'unit'       => 'ms',
					],
				],
				'sync'        => '_styles.wrapper.styles.%%RESPONSIVE_DEVICE%%.default.animation-delay',
			]
		);

		$custom_css_group = $advanced_options->add_group(
			'custom-css-group',
			[
				'type'      => 'panel_accordion',
				'title'     => __( 'Custom CSS', 'zionbuilder' ),
				'collapsed' => true,
			]
		);

		$custom_css_group->add_option(
			'_custom_css',
			[
				'type'                => 'upgrade_to_pro',
				'message_title'       => esc_html__( 'Meet Custom CSS', 'zionbuilder' ),
				'message_description' => esc_html__( 'With custom CSS you can fine tune the styling of your elements.', 'zionbuilder' ),
				'info_text'           => esc_html__( 'Click here to learn more about PRO.', 'zionbuilder' ),
			]
		);

		return $advanced_options->get_schema();
	}
}
