<?php
/**
 * The Front Page template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package MARSALA
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<div class="row">
				<div class="main-banners-container">
					<div class="item"></div>
				</div>
			</div>
		
			<div class="container">
				<div class="row">
					<div class="banner-promo-home">
						<h2 class="text-center">MARSALA SALE</h2>
						<h3 class="text-center gris">¡HASTA EL 50% DE DESCUENTO!</h3>
					</div>
					<div class="banner-hashtag">
						<span class="hash">#MMARSALA</span>
						<span>EN TODO EL MUNDO</span>
					</div>
				</div>
			</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// do_action( 'storefront_sidebar' );
get_footer();
