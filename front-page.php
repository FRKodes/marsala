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
					<?php $args = array('post_type'=> 'main_image_home', 'posts_per_page' => 1);
					$query = new WP_Query( $args );
					if ( $query->have_posts() ) : ?>
					    <?php while ( $query->have_posts() ) : $query->the_post(); ?>
							<div class="item" style="background-image: url(<?php the_post_thumbnail_url(); ?>)"></div>
					    <?php endwhile; wp_reset_postdata(); ?>
					<?php endif; ?>
				</div>
			</div>
		
			<div class="container">
				<div class="row">
					<div class="banners_promo_container">
						<?php $args = array('post_type'=> 'banner_promo');
						$query = new WP_Query( $args );
						if ( $query->have_posts() ) : ?>
						    <?php while ( $query->have_posts() ) : $query->the_post(); ?>
								<div class="banner-promo-home">
									<a href="<?php the_field('link_destino') ?>" title="<?php the_title() ?>"><?php the_post_thumbnail(); ?></a>
								</div>
						    <?php endwhile; wp_reset_postdata(); ?>
						<?php endif; ?>
					</div>

						<?php $args = array('post_type'=> 'banner_hashtag_home', 'posts_per_page' => 1);
						$query = new WP_Query( $args );
						if ( $query->have_posts() ) : ?>
						    <?php while ( $query->have_posts() ) : $query->the_post(); ?>
								<div class="banner-hashtag" style="background-image: url(<?php the_post_thumbnail_url(); ?>)">
									<span class="hash"><?php the_field('hashtag') ?></span>
									<span class="world"><?php the_field('texto_banner') ?></span>
								</div>
						    <?php endwhile; wp_reset_postdata(); ?>
						<?php endif; ?>
					</div>
			</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// do_action( 'storefront_sidebar' );
get_footer();