<?php
/**
 * The Galeria Page template file.
 * @package MARSALA
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<div class="container">
					<div class="row text-center">
						<?php get_template_part( 'content', 'page-only-content' ); ?>
					</div>
				</div>

				<div class="container customize-photos-container">
					<div class="row">
						<div class="left">
							<div class="grid-item grid-item-left"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/personaliza-marsala-01.jpg" alt="personaliza marsala 01"></div>
							<div class="grid-item grid-item-left"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/personaliza-marsala-05.jpg" alt="personaliza marsala 05"></div>
							<div class="grid-item grid-item-left"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/personaliza-marsala-03.jpg" alt="personaliza marsala 03"></div>
						</div>
						<div class="right">
							<div class="grid-item grid-item-right"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/personaliza-marsala-02.jpg" alt="personaliza marsala 02"></div>
							<div class="grid-item grid-item-right"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/personaliza-marsala-04.jpg" alt="personaliza marsala 04"></div>
							<div class="grid-item grid-item-right"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/personaliza-marsala-06.jpg" alt="personaliza marsala 06"></div>
						</div>
					</div>
				</div>


			<?php endwhile; // End of the loop. ?>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// do_action( 'storefront_sidebar' );
get_footer();