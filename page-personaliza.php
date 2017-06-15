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
							<?php $args = array('post_type'=> 'customize_item', 'sides' => 'left-side');
							$query = new WP_Query( $args );

							if ( $query->have_posts() ) : ?>
							    <?php while ( $query->have_posts() ) : $query->the_post(); ?>
							    	<div class="grid-item grid-item-left"><a href="<?php the_field('link'); ?>" title="Ver <?php the_title(); ?>"><?php the_post_thumbnail(); ?></a></div>
							    <?php endwhile; wp_reset_postdata(); ?>
							<?php else : ?>
							    <!-- show 404 error here -->
							<?php endif; ?>
						</div>
						<div class="right">
							<?php $args = array('post_type'=> 'customize_item', 'sides' => 'right-side');
							$query = new WP_Query( $args );

							if ( $query->have_posts() ) : ?>
							    <?php while ( $query->have_posts() ) : $query->the_post(); ?>
							    	<div class="grid-item grid-item-right"><a href="<?php the_field('link'); ?>" title="Ver <?php the_title(); ?>"><?php the_post_thumbnail(); ?></a></div>
							    <?php endwhile; wp_reset_postdata(); ?>
							<?php else : ?>
							    <!-- show 404 error here -->
							<?php endif; ?>
						</div>
					</div>
				</div>


			<?php endwhile; // End of the loop. ?>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// do_action( 'storefront_sidebar' );
get_footer();