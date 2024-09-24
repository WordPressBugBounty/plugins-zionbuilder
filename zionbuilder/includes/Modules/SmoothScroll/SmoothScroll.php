<?php

namespace ZionBuilder\Modules\SmoothScroll;

use ZionBuilder\Plugin;
use ZionBuilder\Settings;

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
	return;
}

/**
 * Page Templates
 *
 * Handles all page templates provided by the Zion Builder plugin
 */
class SmoothScroll {
    public function __construct() {
        // Set the smooth scroll options schema
        add_filter( 'zionbuilder/admin_page/options_schemas', array( $this, 'add_options_schema' ) );

        // Adds the javascript code inline in page
        add_action( 'wp_footer', array( $this, 'add_smooth_scroll_js' ) );

        // Single page options save
        add_action( 'zionbuilder/post/save', [ $this, 'on_page_save' ], 10, 3 );
    }

    /**
     * Add the smooth scroll js
     */
    public function add_smooth_scroll_js() {
        $enable_smooth_scroll = Settings::get_value( 'features.enable_smooth_scroll', true );
        $preserve_history     = Settings::get_value( 'features.preserve_history', true );

        // Get the page settings
        if (is_singular()) {
            $page_smooth_scroll = get_post_meta( get_the_ID(), 'zionbuilder_enable_smooth_scroll', true );
            $page_smooth_scroll_history = get_post_meta( get_the_ID(), 'zionbuilder_preserve_smooth_scroll_history', true );

            $enable_smooth_scroll = $page_smooth_scroll !== '' ? $page_smooth_scroll === '1' : $enable_smooth_scroll;
            $preserve_history = $page_smooth_scroll_history !== '' ? $page_smooth_scroll_history === '1' : $preserve_history;
        }

        if ( $enable_smooth_scroll ) {
            ?>
            <script>
                const links = document.querySelectorAll('a[href^="#"]');

                // Loop through each link and add an event listener to it
                links.forEach(link => {
                    link.addEventListener('click', function (event) {
                        const element = this.getAttribute('href');

                        if (element.length === 0) {
                            return;
                        }

                        // Get the target element based on the hash value of the clicked link
                        const target = document.querySelector(element);

                        if ( ! target) {
                            return;
                        }

                        // Prevent default anchor click behavior
                        event.preventDefault();

                        // Scroll to the target element with smooth behavior
                        target.scrollIntoView({ behavior: 'smooth' });

                        <?php if ( $preserve_history === true ) : ?>
                            history.pushState("", document.title, element);
                        <?php endif ?>
                    });
                });
                </script>
            <?php
        }
    }


    /**
     * Registers the option schema inside the admin panel
     *
     * @param array $schemas
     * @return array
     */
    public function add_options_schema( $schemas ) {
        if (empty( $schemas['features'] )) {
            $schemas['features'] = [];
        }

        $schemas['features']['enable_smooth_scroll'] = [
            'type'        => 'checkbox_switch',
            'title'       => esc_html__( 'Enable smooth scroll', 'zionbuilder' ),
            'description' => esc_html__( 'Enable smooth scroll on the entire website', 'zionbuilder' ),
            'default'     => true,
            'layout'      => 'inline',
        ];

        $schemas['features']['preserve_history'] = [
            'type'        => 'checkbox_switch',
            'title'       => esc_html__( 'Preserve browser history', 'zionbuilder' ),
            'description' => esc_html__( 'When enabled, the link hash will be added to the browser URL.', 'zionbuilder' ),
            'default'     => true,
            'layout'      => 'inline',
        ];

        return $schemas;
    }


    /**
     * Save the page options related to smooth scroll
     *
     * @param [type] $new_post_data
     * @param [type] $page_settings
     * @param [type] $post_id
     * @return void
     */
    public function on_page_save( $new_post_data, $page_settings, $post_id ) {
		if ( isset( $page_settings['enable_smooth_scroll'] ) ) {
			update_post_meta( $post_id, 'zionbuilder_enable_smooth_scroll', $page_settings['enable_smooth_scroll'] );
		} else {
            delete_post_meta($post_id, 'zionbuilder_enable_smooth_scroll');
        }

        if ( isset( $page_settings['preserve_history'] ) ) {
			update_post_meta( $post_id, 'zionbuilder_preserve_smooth_scroll_history', $page_settings['preserve_history'] );
		} else {
            delete_post_meta($post_id, 'zionbuilder_preserve_smooth_scroll_history');
        }
    }
}