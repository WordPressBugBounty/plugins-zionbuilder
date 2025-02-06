<?php

namespace ZionBuilder\Options;

use ZionBuilder\Options\Stack;

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
	return;
}


/**
 * Class Options
 *
 * Will provide an interface to easily manage builder options
 * for elements, page settings, etc
 *
 * @package ZionBuilder
 */
class Option extends Stack {
	/**
	 * Holds a reference to the option config
	 *
	 * @var string The option id
	 */
	public $id = null;

	/**
	 * Holds a reference to the option config
	 *
	 * @var array The option config
	 */
	public $config = [];

	/**
	 * Main class constructor
	 *
	 * @param string $option_id The option ID
	 * @param array $option_config List of options that will be added on class instantiation
	 */
	public function __construct( $option_id, $option_config = [] ) {
		$this->id            = $option_id;
		$option_config['id'] = $option_id;
		$this->config        = $option_config;

		if ( ! empty( $option_config['child_options'] ) && is_array( $option_config['child_options'] ) ) {
			foreach ( $option_config['child_options'] as $option_id => $option_config ) {
				$this->add_option( $option_id, $option_config );
			}
		}
	}

	public function get_type() {
		return $this->config['type'];
	}

	public function get_config() {
		return $this->config;
	}

	/**
	 * Returns the option ID
	 *
	 * @return string The current option ID
	 */
	public function get_option_id() {
		return $this->id;
	}

	public function &get_stack() {
		return $this->config['child_options'];
	}

	public function has_child_options() {
		return ! empty( $this->config['child_options'] );
	}

	public function get_child_options() {
		return isset( $this->config['child_options'] ) ? $this->config['child_options'] : [];
	}

	public function is_layout() {
		return isset( $this->config['is_layout'] ) && $this->config['is_layout'];
	}

	public function has_default_value() {
		return isset( $this->config['default'] );
	}

	public function &get_value( $value_id ) {
		return $this->config[$value_id];
	}

	public function has_dependency() {
		return isset( $this->config['dependency'] );
	}

	public function remove_attribute( $attribute ) {
		unset( $this->config[$attribute] );
	}
}
