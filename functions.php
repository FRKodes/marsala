<?php
function my_theme_enqueue_styles() {

	$parent_style = 'parent-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.

	wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/marsala-style.css', array( $parent_style ), '2.1.0' );
	// wp_get_theme()->get('Version')
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
// remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
function woocommerce_output_related_products() {
	woocommerce_related_products(4,4);
}


add_action( 'woocommerce_process_product_meta', 'wc_custom_save_custom_fields' );
function wc_custom_save_custom_fields( $post_id ) {
	if ( ! empty( $_POST['product-custom-style'] ) ) {
		update_post_meta( $post_id, 'product-custom-style', esc_attr( $_POST['product-custom-style'] ) );
	}
}

add_action( 'init', 'create_costomize_item_post_type' );
function create_costomize_item_post_type() {
	register_post_type( 'customize_item',
	array(
		'labels' => array(
			'name' => __( 'Items Personaliza' ),
			'singular_name' => __( 'Item Personaliza' ),
			'add_new' => __( 'Agregar otro Item Personaliza' )
		),
		'public' => true,
		'has_archive' => false,
		'supports'=> array('title', 'editor', 'thumbnail', 'page-attributes'),
	)
	);
}

//hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_topics_hierarchical_taxonomy', 0 );

//create a custom taxonomy name it topics for your posts

function create_topics_hierarchical_taxonomy() {

// Add new taxonomy, make it hierarchical like categories first do the translations part for GUI
  $labels = array(
    'name' => _x( 'Sides', 'taxonomy general name' ),
    'singular_name' => _x( 'Side', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search by Side' ),
    'all_items' => __( 'All Sides' ),
    'parent_item' => __( 'Parent Side' ),
    'parent_item_colon' => __( 'Parent Side:' ),
    'edit_item' => __( 'Edit Side' ), 
    'update_item' => __( 'Update Side' ),
    'add_new_item' => __( 'Add New Side' ),
    'new_item_name' => __( 'New Side Name' ),
    'menu_name' => __( 'Sides' ),
  ); 	

// Now register the taxonomy

  register_taxonomy('sides',array('customize_item'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'side' ),
  ));

}

add_filter('wc_add_to_cart_message', 'handler_function_name', 10, 2);
function handler_function_name($message, $product_id) {
    return '<p>Este producto fue añadido a tu carrito </p><a href="https://marsalamarsala.com/carrito/" class="button wc-forward">Ver carrito</a>';
}


add_action( 'init', 'create_main_image_home_post_type' );
function create_main_image_home_post_type() {
	register_post_type( 'main_image_home',
	array(
		'labels' => array(
			'name' => __( 'Imagen Principal Home' ),
			'singular_name' => __( 'Imagen principal' ),
			'add_new' => __( 'Agregar otro Imagen Principal Home' )
		),
		'public' => true,
		'has_archive' => false,
		'supports'=> array('title', 'thumbnail', 'page-attributes'),
	)
	);
}

add_action( 'init', 'create_banner_hashtag_home_post_type' );
function create_banner_hashtag_home_post_type() {
	register_post_type( 'banner_hashtag_home',
	array(
		'labels' => array(
			'name' => __( 'Banners Hashtag Home' ),
			'singular_name' => __( 'Banner Hashtag' ),
			'add_new' => __( 'Agregar otro Banner Hashtag' )
		),
		'public' => true,
		'has_archive' => false,
		'supports'=> array('title', 'thumbnail', 'page-attributes'),
	)
	);
}

add_action( 'init', 'create_banner_promo_post_type' );
function create_banner_promo_post_type() {
	register_post_type( 'banner_promo',
	array(
		'labels' => array(
			'name' => __( 'Banners Promo' ),
			'singular_name' => __( 'Banner Promo' ),
			'add_new' => __( 'Agregar otro Banner Promo' )
		),
		'public' => true,
		'has_archive' => false,
		'supports'=> array('title', 'thumbnail', 'page-attributes'),
	)
	);
}

add_action( 'init', 'create_imagen_galeria_post_type' );
function create_imagen_galeria_post_type() {
	register_post_type( 'imagen_galeria',
	array(
		'labels' => array(
			'name' => __( 'Imágenes Galería' ),
			'singular_name' => __( 'Imagen Galería' ),
			'add_new' => __( 'Agregar otra Imagen Galería' )
		),
		'public' => true,
		'has_archive' => false,
		'supports'=> array('title', 'thumbnail', 'page-attributes'),
	)
	);
}

add_action( 'init', 'create_banner_galeria_post_type' );
function create_banner_galeria_post_type() {
	register_post_type( 'banner_galeria',
	array(
		'labels' => array(
			'name' => __( 'Banner Galería' ),
			'singular_name' => __( 'Banner Galería' ),
			'add_new' => __( 'Agregar Banner Galería' )
		),
		'public' => true,
		'has_archive' => false,
		'supports'=> array('title', 'thumbnail', 'page-attributes'),
	)
	);
}

add_action( 'init', 'create_punto_de_venta_post_type' );
function create_punto_de_venta_post_type() {
	register_post_type( 'punto_de_venta',
	array(
		'labels' => array(
			'name' => __( 'Puntos de venta' ),
			'singular_name' => __( 'Punto de venta' ),
			'add_new' => __( 'Agregar Punto de Venta' )
		),
		'public' => true,
		'has_archive' => false,
		'supports'=> array('title', 'editor', 'page-attributes'),
	)
	);
}

?>