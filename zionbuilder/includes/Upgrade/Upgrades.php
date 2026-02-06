<?php

namespace ZionBuilder\Upgrade;

use ZionBuilder\Plugin;
use ZionBuilder\Settings;
use ZionBuilder\CSSClasses;
use ZionBuilder\Utils;
use ZionBuilder\Assets;

// Prevent direct access
if (! defined('ABSPATH')) {
	return;
}

/**
 * Class Updater
 *
 * @since 1.0.1
 *
 * @package ZionBuilder
 */
class Upgrades
{

	/**
	 * Updates local gradients
	 *
	 * @return void
	 */
	public static function upgrade_v_1_0_1_update_local_gradients()
	{
		$saved_settings = Settings::get_all_values();
		$new_values     = [];

		if (isset($saved_settings['local_gradients']) && is_array($saved_settings['global_gradients'])) {
			foreach ($saved_settings['local_gradients'] as $key => $value) {
				$preset_name  = sprintf('gradientPreset%s', $key);
				$new_values[] = [
					'id'     => $preset_name,
					'name'   => $preset_name,
					'config' => $value,
				];
			}
		}

		if (! empty($new_values)) {
			$saved_settings['local_gradients'] = $new_values;
			Settings::save_settings($saved_settings);
		}
	}

	/**
	 * Updates local gradients
	 *
	 * @return void
	 */
	public static function upgrade_v_2_3_0_update_css_classes()
	{
		$saved_css_classes = CSSClasses::get_classes();
		$new_values        = [];

		if (is_array($saved_css_classes)) {
			foreach ($saved_css_classes as $class_config) {
				if (isset($class_config['style'])) {
					$class_config['styles'] = $class_config['style'];
					unset($class_config['style']);
				}

				$new_values[] = $class_config;
			}
		}

		if (! empty($new_values)) {
			$saved_css_classes = CSSClasses::save_classes($new_values);

			// Clear all cache
			Plugin::instance()->assets->compile_global_css();
		}
	}

	/**
	 * Updates local gradients
	 *
	 * @return void
	 */
	public static function upgrade_v_3_0_0_update_css_classes()
	{
		$saved_css_classes = CSSClasses::get_classes();
		$new_values        = [];

		if (is_array($saved_css_classes)) {
			foreach ($saved_css_classes as $class_config) {
				/** @phpstan-ignore-next-line -- We ignore this error as the upgrade functions adds the UID if it is missing */
				if (! isset($class_config['uid'])) {
					$class_config['uid'] = Utils::generate_uid();
				}

				$new_values[] = $class_config;
			}
		}

		if (! empty($new_values)) {
			$saved_css_classes = CSSClasses::save_classes($new_values);
		}
	}
}
