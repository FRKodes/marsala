<?php
/**
 * The Galeria Page template file.
 * @package MARSALA
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<div class="container galery-photos-container">
					<div class="row">
						<div class="grid-item grid-item-100"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/B.jpg" alt=""></div>
						<div class="grid-item grid-item-50"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/A.jpg" alt=""></div>
						<div class="grid-item grid-item-50"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/C.jpg" alt=""></div>
						<div class="grid-item grid-item-50"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/D.jpg" alt=""></div>
						<div class="grid-item grid-item-100"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/E.jpg" alt=""></div>
					</div>
				</div>

				<div class="container gallery-banner">
					<h2 class="">#MARSALATRAVELING</h2>
				</div>

				<?php get_template_part( 'content', 'page-only-content' );

			endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// do_action( 'storefront_sidebar' );
get_footer();
