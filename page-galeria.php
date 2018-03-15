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
						<?php $args = array('post_type' => 'imagen_galeria', 'orderby' => 'meta_value_num', 'order' => 'ASC');
						$query = new WP_Query( $args );
						if ( $query->have_posts() ) : ?>
						    <?php while ( $query->have_posts() ) : $query->the_post(); ?>
						    	<div class="grid-item <?php the_field('block_class') ?>">
						    		<?php the_post_thumbnail() ?>
						    	</div>
						    <?php endwhile; wp_reset_postdata(); ?>
						<?php endif; ?>
					</div>
				</div>
				

				<?php $args = array('post_type' => 'banner_galeria', 'posts_per_page' => 1);
				$query = new WP_Query( $args );
				if ( $query->have_posts() ) : ?>
				    <?php while ( $query->have_posts() ) : $query->the_post(); ?>
				    	<div class="container gallery-banner" style="background-image: url(<?php the_post_thumbnail_url(); ?>)">
				    		<a target="_blank" href="https://www.instagram.com/explore/tags/<?php the_title() ?>/" title="Ver imágenes con el hashtag #<?php the_title() ?>">
								<h2>#<?php the_title() ?></h2>
				    		</a>
						</div>
				    <?php endwhile; wp_reset_postdata(); ?>
				<?php endif; ?>

				<?php get_template_part( 'content', 'page-only-content' );

			endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// do_action( 'storefront_sidebar' );
get_footer();
