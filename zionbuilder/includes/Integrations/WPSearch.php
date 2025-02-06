<?php

namespace ZionBuilder\Integrations;

use WP_Post;
use ZionBuilder\Plugin;
use ZionBuilder\Permissions;
use ZionBuilder\Post\BasePostType;

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
	return;
}

/**
 * Class WPSearch
 *
 * @package ZionBuilder\Integrations
 */
class WPSearch implements IBaseIntegration {
	/**
	 * Retrieve the name of the integration
	 *
	 * @return string
	 */
	public static function get_name() {
		return 'wp_search';
	}


	/**
	 * Check if we can load this integration or not
	 *
	 * @return boolean If true, the integration will be loaded
	 */
	public static function can_load() {
		return true;
	}


	/**
	 * Main class constructor
	 */
	public function __construct() {
		/**
		 * Extend the search query to include the Page Builder elements
		 * @since v1.0.0
		 */
		add_action( 'pre_get_posts', [ $this, 'update_search_query' ] );
	}


	/**
	 * Update search query
	 *
	 * @param WP_Query $query The WP_Query instance
	 */
	public function update_search_query( $query ) {
		$canSearch = ( ! is_admin() && $query->is_main_query() && is_search() );
		if ( $canSearch ) {
			add_filter( 'posts_join', [ $this, 'search_join' ] );
			add_filter( 'posts_where', [ $this, 'search_where' ] );
			add_filter( 'posts_distinct', [ $this, 'search_distinct' ] );
		}
		return $query;
	}

	public function search_join( $join ) {
		global $wpdb;

		if ( is_search() ) {
			$join .= ' LEFT JOIN ' . $wpdb->postmeta . ' AS pb_data ON ' . $wpdb->posts . '.ID = pb_data.post_id ';
		}

		return $join;
	}

	# Specifies which meta-fields and values to search for in the WHERE section.
	public function search_where( $where ) {
		global $wpdb;

		if ( is_search() ) {
			$where = preg_replace(
				"/\(\s*$wpdb->posts.post_title\s+LIKE\s*(\'[^\']+\')\s*\)/",
				'(' . $wpdb->posts . '.post_title LIKE $1) OR (pb_data.meta_value LIKE $1)',
				$where
			);
		}

		return $where;
	}

	# Prevents duplicates in the selection.
	public function search_distinct( $where ) {
		return is_search() ? 'DISTINCT' : $where;
	}
}
