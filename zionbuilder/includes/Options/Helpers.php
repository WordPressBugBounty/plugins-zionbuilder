<?php

namespace ZionBuilder\Options;

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
class Helpers {
	
    /**
     * Returns a list of animation options that can be used in 
     *
     * @return void
     */
    public static function get_animations() {
        return [
            [
                'name'  => esc_html__( 'none', 'zionbuilder' ),
                'value' => '',
                'class' => 'znpb-no-animation-placeholder',
            ],
            [
                'name'  => esc_html__( 'bounce', 'zionbuilder' ),
                'value' => 'bounce',
                'class' => 'bounce',
            ],
            [
                'name'  => esc_html__( 'flash', 'zionbuilder' ),
                'value' => 'flash',
                'class' => 'flash',
            ],
            [
                'name'  => esc_html__( 'pulse', 'zionbuilder' ),
                'value' => 'pulse',
                'class' => 'pulse',
            ],
            [
                'name'  => esc_html__( 'rubber Band', 'zionbuilder' ),
                'value' => 'rubberBand',
                'class' => 'rubberBand',
            ],
            [
                'name'  => esc_html__( 'shake', 'zionbuilder' ),
                'value' => 'shake',
                'class' => 'shake',
            ],
            [
                'name'  => esc_html__( 'head Shake', 'zionbuilder' ),
                'value' => 'headShake',
                'class' => 'headShake',
            ],
            [
                'name'  => esc_html__( 'swing', 'zionbuilder' ),
                'value' => 'swing',
                'class' => 'swing',
            ],
            [
                'name'  => esc_html__( 'tada', 'zionbuilder' ),
                'value' => 'tada',
                'class' => 'tada',
            ],
            [
                'name'  => esc_html__( 'wobble', 'zionbuilder' ),
                'value' => 'wobble',
                'class' => 'wobble',
            ],
            [
                'name'  => esc_html__( 'jello', 'zionbuilder' ),
                'value' => 'jello',
                'class' => 'jello',
            ],
            [
                'name'  => esc_html__( 'heart Beat', 'zionbuilder' ),
                'value' => 'heartBeat',
                'class' => 'heartBeat',
            ],
            [
                'name'  => esc_html__( 'bounce In', 'zionbuilder' ),
                'value' => 'bounceIn',
                'class' => 'bounceIn',
            ],
            [
                'name'  => esc_html__( 'bounce In Down', 'zionbuilder' ),
                'value' => 'bounceInDown',
                'class' => 'bounceInDown',
            ],
            [
                'name'  => esc_html__( 'bounce In Left', 'zionbuilder' ),
                'value' => 'bounceInLeft',
                'class' => 'bounceInLeft',
            ],
            [
                'name'  => esc_html__( 'bounce In Right', 'zionbuilder' ),
                'value' => 'bounceInRight',
                'class' => 'bounceInRight',
            ],
            [
                'name'  => esc_html__( 'bounce In Up', 'zionbuilder' ),
                'value' => 'bounceInUp',
                'class' => 'bounceInUp',
            ],
            [
                'name'  => esc_html__( 'bounce Out', 'zionbuilder' ),
                'value' => 'bounceOut',
                'class' => 'bounceOut',
            ],
            [
                'name'  => esc_html__( 'bounce Out Down', 'zionbuilder' ),
                'value' => 'bounceOutDown',
                'class' => 'bounceOutDown',
            ],
            [
                'name'  => esc_html__( 'bounce Out Left', 'zionbuilder' ),
                'value' => 'bounceOutLeft',
                'class' => 'bounceOutLeft',
            ],
            [
                'name'  => esc_html__( 'bounce Out Right', 'zionbuilder' ),
                'value' => 'bounceOutRight',
                'class' => 'bounceOutRight',
            ],
            [
                'name'  => esc_html__( 'bounce Out Up', 'zionbuilder' ),
                'value' => 'bounceOutUp',
                'class' => 'bounceOutUp',
            ],
            [
                'name'  => esc_html__( 'fade In', 'zionbuilder' ),
                'value' => 'fadeIn',
                'class' => 'fadeIn',
            ],
            [
                'name'  => esc_html__( 'fade In Down', 'zionbuilder' ),
                'value' => 'fadeInDown',
                'class' => 'fadeInDown',
            ],
            [
                'name'  => esc_html__( 'fade In Down Big', 'zionbuilder' ),
                'value' => 'fadeInDownBig',
                'class' => 'fadeInDownBig',
            ],
            [
                'name'  => esc_html__( 'fade In Left', 'zionbuilder' ),
                'value' => 'fadeInLeft',
                'class' => 'fadeInLeft',
            ],
            [
                'name'  => esc_html__( 'fade In Right', 'zionbuilder' ),
                'value' => 'fadeInRight',
                'class' => 'fadeInRight',
            ],
            [
                'name'  => esc_html__( 'fade In Left Big', 'zionbuilder' ),
                'value' => 'fadeInLeftBig',
                'class' => 'fadeInLeftBig',
            ],
            [
                'name'  => esc_html__( 'fade In Up', 'zionbuilder' ),
                'value' => 'fadeInUp',
                'class' => 'fadeInUp',
            ],
            [
                'name'  => esc_html__( 'fade In Up Big', 'zionbuilder' ),
                'value' => 'fadeInUpBig',
                'class' => 'fadeInUpBig',
            ],
            [
                'name'  => esc_html__( 'fade Out', 'zionbuilder' ),
                'value' => 'fadeOut',
                'class' => 'fadeOut',
            ],
            [
                'name'  => esc_html__( 'fade Out Down', 'zionbuilder' ),
                'value' => 'fadeOutDown',
                'class' => 'fadeOutDown',
            ],
            [
                'name'  => esc_html__( 'fade Out Down Big', 'zionbuilder' ),
                'value' => 'fadeOutDownBig',
                'class' => 'fadeOutDownBig',
            ],
            [
                'name'  => esc_html__( 'fade Out Left', 'zionbuilder' ),
                'value' => 'fadeOutLeft',
                'class' => 'fadeOutLeft',
            ],
            [
                'name'  => esc_html__( 'fade Out Left Big', 'zionbuilder' ),
                'value' => 'fadeOutLeftBig',
                'class' => 'fadeOutLeftBig',
            ],
            [
                'name'  => esc_html__( 'fade Out Right', 'zionbuilder' ),
                'value' => 'fadeOutRight',
                'class' => 'fadeOutRight',
            ],
            [
                'name'  => esc_html__( 'fade Out Right Big', 'zionbuilder' ),
                'value' => 'fadeOutRightBig',
                'class' => 'fadeOutRightBig',
            ],
            [
                'name'  => esc_html__( 'fade Out Up', 'zionbuilder' ),
                'value' => 'fadeOutUp',
                'class' => 'fadeOutUp',
            ],
            [
                'name'  => esc_html__( 'fade Out Up Big', 'zionbuilder' ),
                'value' => 'fadeOutUpBig',
                'class' => 'fadeOutUpBig',
            ],
            [
                'name'  => esc_html__( 'flip', 'zionbuilder' ),
                'value' => 'flip',
                'class' => 'flip',
            ],
            [
                'name'  => esc_html__( 'flip In X', 'zionbuilder' ),
                'value' => 'flipInX',
                'class' => 'flipInX',
            ],
            [
                'name'  => esc_html__( 'flip In Y', 'zionbuilder' ),
                'value' => 'flipInY',
                'class' => 'flipInY',
            ],
            [
                'name'  => esc_html__( 'flip Out X', 'zionbuilder' ),
                'value' => 'flipOutX',
                'class' => 'flipOutX',
            ],
            [
                'name'  => esc_html__( 'flip Out Y', 'zionbuilder' ),
                'value' => 'flipOutY',
                'class' => 'flipOutY',
            ],
            [
                'name'  => esc_html__( 'light Speed In', 'zionbuilder' ),
                'value' => 'lightSpeedIn',
                'class' => 'lightSpeedIn',
            ],
            [
                'name'  => esc_html__( 'light Speed Out', 'zionbuilder' ),
                'value' => 'lightSpeedOut',
                'class' => 'lightSpeedOut',
            ],
            [
                'name'  => esc_html__( 'rotate In', 'zionbuilder' ),
                'value' => 'rotateIn',
                'class' => 'rotateIn',
            ],
            [
                'name'  => esc_html__( 'rotate In Down Left', 'zionbuilder' ),
                'value' => 'rotateInDownLeft',
                'class' => 'rotateInDownLeft',
            ],
            [
                'name'  => esc_html__( 'rotate In Down Right', 'zionbuilder' ),
                'value' => 'rotateInDownRight',
                'class' => 'rotateInDownRight',
            ],
            [
                'name'  => esc_html__( 'rotate In Up Left', 'zionbuilder' ),
                'value' => 'rotateInUpLeft',
                'class' => 'rotateInUpLeft',
            ],
            [
                'name'  => esc_html__( 'rotate In Up Right', 'zionbuilder' ),
                'value' => 'rotateInUpRight',
                'class' => 'rotateInUpRight',
            ],
            [
                'name'  => esc_html__( 'rotate Out', 'zionbuilder' ),
                'value' => 'rotateOut',
                'class' => 'rotateOut',
            ],
            [
                'name'  => esc_html__( 'rotate Out Down Left', 'zionbuilder' ),
                'value' => 'rotateOutDownLeft',
                'class' => 'rotateOutDownLeft',
            ],
            [
                'name'  => esc_html__( 'rotate Out Down Right', 'zionbuilder' ),
                'value' => 'rotateOutDownRight',
                'class' => 'rotateOutDownRight',
            ],
            [
                'name'  => esc_html__( 'rotate Out Up Left', 'zionbuilder' ),
                'value' => 'rotateOutUpLeft',
                'class' => 'rotateOutUpLeft',
            ],
            [
                'name'  => esc_html__( 'rotate Out Up Right', 'zionbuilder' ),
                'value' => 'rotateOutUpRight',
                'class' => 'rotateOutUpRight',
            ],
            [
                'name'  => esc_html__( 'hinge', 'zionbuilder' ),
                'value' => 'hinge',
                'class' => 'hinge',
            ],
            [
                'name'  => esc_html__( 'jack In The Box', 'zionbuilder' ),
                'value' => 'jackInTheBox',
                'class' => 'jackInTheBox',
            ],
            [
                'name'  => esc_html__( 'roll In', 'zionbuilder' ),
                'value' => 'rollIn',
                'class' => 'rollIn',
            ],
            [
                'name'  => esc_html__( 'roll Out', 'zionbuilder' ),
                'value' => 'rollOut',
                'class' => 'rollOut',
            ],
            [
                'name'  => esc_html__( 'zoom In', 'zionbuilder' ),
                'value' => 'zoomIn',
                'class' => 'zoomIn',
            ],
            [
                'name'  => esc_html__( 'zoom In Down', 'zionbuilder' ),
                'value' => 'zoomInDown',
                'class' => 'zoomInDown',
            ],
            [
                'name'  => esc_html__( 'zoom In Left', 'zionbuilder' ),
                'value' => 'zoomInLeft',
                'class' => 'zoomInLeft',
            ],
            [
                'name'  => esc_html__( 'zoom In Right', 'zionbuilder' ),
                'value' => 'zoomInRight',
                'class' => 'zoomInRight',
            ],
            [
                'name'  => esc_html__( 'zoom In Up', 'zionbuilder' ),
                'value' => 'zoomInUp',
                'class' => 'zoomInUp',
            ],
            [
                'name'  => esc_html__( 'zoom Out', 'zionbuilder' ),
                'value' => 'zoomOut',
                'class' => 'zoomOut',
            ],
            [
                'name'  => esc_html__( 'zoom Out Down', 'zionbuilder' ),
                'value' => 'zoomOutDown',
                'class' => 'zoomOutDown',
            ],
            [
                'name'  => esc_html__( 'zoom Out Left', 'zionbuilder' ),
                'value' => 'zoomOutLeft',
                'class' => 'zoomOutLeft',
            ],
            [
                'name'  => esc_html__( 'zoomOutRight', 'zionbuilder' ),
                'value' => 'zoomOutRight',
                'class' => 'zoomOutRight',
            ],
            [
                'name'  => esc_html__( 'zoom Out Up', 'zionbuilder' ),
                'value' => 'zoomOutUp',
                'class' => 'zoomOutUp',
            ],
            [
                'name'  => esc_html__( 'slide In Down', 'zionbuilder' ),
                'value' => 'slideInDown',
                'class' => 'slideInDown',
            ],
            [
                'name'  => esc_html__( 'Slide In Left', 'zionbuilder' ),
                'value' => 'slideInLeft',
                'class' => 'slideInLeft',
            ],
            [
                'name'  => esc_html__( 'slide In Right', 'zionbuilder' ),
                'value' => 'slideInRight',
                'class' => 'slideInRight',
            ],
            [
                'name'  => esc_html__( 'slide In Up', 'zionbuilder' ),
                'value' => 'slideInUp',
                'class' => 'slideInUp',
            ],
            [
                'name'  => esc_html__( 'slide Out Down', 'zionbuilder' ),
                'value' => 'slideOutDown',
                'class' => 'slideOutDown',
            ],
            [
                'name'  => esc_html__( 'slide Out Left', 'zionbuilder' ),
                'value' => 'slideOutLeft',
                'class' => 'slideOutLeft',
            ],
            [
                'name'  => esc_html__( 'slide Out Right', 'zionbuilder' ),
                'value' => 'slideOutRight',
                'class' => 'slideOutRight',
            ],
            [
                'name'  => esc_html__( 'slide Out Up', 'zionbuilder' ),
                'value' => 'slideOutUp',
                'class' => 'slideOutUp',
            ],
        ];
    }
}