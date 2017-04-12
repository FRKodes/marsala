<?php
function my_theme_enqueue_styles() {

    $parent_style = 'parent-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/marsala-style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

register_nav_menus( array(
	'footer_menu_acerca_de' => 'Footer Acerca De MARSALA',
	'footer_menu_productos' => 'Footer Productos'
) );

if (  ! function_exists( 'woocommerce_template_loop_product_title' ) ) {

	/**
	 * Show the product title in the product loop. By default this is an H3.
	 */
	function woocommerce_template_loop_product_title() {
		echo '<h3>' . get_the_title() . '</h3> <hr> ';
	}
}

if ( ! function_exists( 'woocommerce_breadcrumb' ) ) {

	/**
	 * Output the WooCommerce Breadcrumb.
	 *
	 * @param array $args
	 */
	function woocommerce_breadcrumb( $args = array() ) {
		$args = wp_parse_args( $args, apply_filters( 'woocommerce_breadcrumb_defaults', array(
			'delimiter'   => '',
			'wrap_before' => '<h1 class="woocommerce-breadcrumb" ' . ( is_single() ? 'itemprop="breadcrumb"' : '' ) . '>',
			'wrap_after'  => '</h1>',
			'before'      => '',
			'after'       => '',
			'home'        => _x( '', 'breadcrumb', 'woocommerce' )
		) ) );

		$breadcrumbs = new WC_Breadcrumb();

		if ( ! empty( $args['home'] ) ) {
			$breadcrumbs->add_crumb( $args['home'], apply_filters( 'woocommerce_breadcrumb_home_url', home_url() ) );
		}

		$args['breadcrumb'] = $breadcrumbs->generate();

		wc_get_template( 'global/breadcrumb.php', $args );
	}

	add_filter( 'woocommerce_breadcrumb_home_url', 'woo_custom_breadrumb_home_url' );
	function woo_custom_breadrumb_home_url() {
	    return '';
	}
}

remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
?>
