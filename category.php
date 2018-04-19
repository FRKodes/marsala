<?php
/**
 * The Blog category template file.
 * @package MARSALA
 */
get_header(); ?>
<div class="container">
	<div id="blog" class="content-area blog">
		<main id="main" class="site-main" role="main">
				<?php 
				$cat = get_category( get_query_var( 'cat' ) );
				$cat_slug = $cat->slug;


				$args = array(
					'post_type' => 'post',
					'paged' => 1,
					'tax_query' => array(
						array(
							'taxonomy' => 'category',
							'field'    => 'slug',
							'terms'    => $cat_slug
						)
					)
				);
				
				$query = new WP_Query( $args );
				if ( $query->have_posts() ) : ?>
					<?php while ( $query->have_posts() ) : $query->the_post(); ?>
						<div class="blog-item">
							<a href="<?php the_permalink() ?>">
								<div class="blog-image-header" style="background-image: url(<?php the_post_thumbnail_url() ?>)"></div>
								<h2 class="mayus font-400"><?php the_title() ?></h2>
								<?php the_excerpt() ?>
							</a>
						</div>
					<?php endwhile; wp_reset_postdata(); ?>
				<?php endif; ?>
				<?php wp_reset_postdata(); ?>
		</main><!-- #main -->
	</div><!-- #primary -->
	<div id="secondary-blog">
		<?php get_sidebar(); ?>
	</div>
</div>
<?php
get_footer();