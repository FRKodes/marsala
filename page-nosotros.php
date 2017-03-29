<?php
/**
 * The Nosotros Page template file.
 * @package MARSALA
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<div class="row">
					<div class="nosotros-banner-container"></div>
				</div>

				<?php get_template_part( 'content', 'page-only-content' );

			endwhile; // End of the loop. ?>
			
			<div class="container">
				<div class="row">
					<div class="nosotros-images-container col-sm-8 col-sm-offset-2">
						<div class="image-container"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/nosotros-01.jpg" alt=""></div>
						<div class="image-container"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/nosotros-02.jpg" alt=""></div>
					</div>
				</div>
			</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// do_action( 'storefront_sidebar' );
get_footer();
