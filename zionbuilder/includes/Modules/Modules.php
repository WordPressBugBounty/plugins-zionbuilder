<?php

namespace ZionBuilder\Modules;

use ZionBuilder\Modules\SmoothScroll\SmoothScroll;

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
	return;
}

/**
 * Page Templates
 *
 * Handles all page templates provided by the Zion Builder plugin
 */
class Modules {
    public function __construct() {
        new SmoothScroll();
    }
}