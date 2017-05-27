<?php
/**
 * The header for MARSALA.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package storefront-child
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet">
<?php wp_head(); ?>
<style>
	.woocommerce-info, .woocommerce-noreviews, p.no-comments{ background-color: #b2b2b2}
	.cart-collaterals .cart_totals{float: none; margin: 0 auto}
</style>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<?php
	do_action( 'storefront_before_header' ); ?>

	<header id="masthead" class="site-header" role="banner" style="<?php storefront_header_styles(); ?>">
		<nav class="navbar navbar-default navbar-fixed-top">
		  <div class="container">
			<div class="navbar-header">
			  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
			  <a class="navbar-brand header-logo" href="/">
			  	<img class="hidden-sm hidden-md hidden-lg" src="<?php echo get_stylesheet_directory_uri()."/assets/images/mmarsala-black.svg"; ?>" alt="mini logo header mmarsala">
			  	<img class="hidden-xs" src="<?php echo get_stylesheet_directory_uri()."/assets/images/logo-marsala-normal.svg"; ?>" alt="logo mmarsala">
			  </a>
			  <span class="hidden-sm hidden-md hidden-lg"><?php storefront_handheld_footer_bar_cart_link(); ?></span>
			</div>

			<!-- <div id="navbar" class="navbar-collapse collapse"> -->
				<?php wp_nav_menu(array('theme_location' => 'primary', 'container_class' => 'primary-navigation' ) ); ?>
				<span class="hidden-xs"><?php storefront_handheld_footer_bar_cart_link(); ?></span>
			<!-- </div>/.nav-collapse  -->
		  </div>
		</nav>
	</header><!-- #masthead -->

	<?php
	/**
	 * Functions hooked in to storefront_before_content
	 *
	 * @hooked storefront_header_widget_region - 10
	 */
	do_action( 'storefront_before_content' ); ?>

	<div id="content" class="site-content" tabindex="-1">
		<div class="container-fluid">

		<?php
		/**
		 * Functions hooked in to storefront_content_top
		 *
		 * @hooked woocommerce_breadcrumb - 10
		 */
		do_action( 'storefront_content_top' );
