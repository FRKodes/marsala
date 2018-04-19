<?php
/**
 * The Blog template file.
 * @package MARSALA
 */
get_header(); ?>
<div class="container">
	<div id="blog" class="content-area blog">
		<main id="main" class="site-main" role="main">
				<?php $args = array('post_type' => 'post', 'posts_per_page' => 5, 'paged' => 1);
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

				<div class="pagination blog">
				    <?php 
				        echo paginate_links( array(
				            'base'         => str_replace( 999999999, '%#%', esc_url( get_pagenum_link( 999999999 ) ) ),
				            'total'        => $query->max_num_pages,
				            'current'      => max( 1, get_query_var( 'paged' ) ),
				            'format'       => '?paged=%#%',
				            'show_all'     => false,
				            'type'         => 'plain',
				            'end_size'     => 2,
				            'mid_size'     => 1,
				            'prev_next'    => true,
				            'prev_text'    => sprintf( '<i></i> %1$s', __( 'Nuevos Posts', 'text-domain' ) ),
				            'next_text'    => sprintf( '%1$s <i></i>', __( 'Posts Aniguos', 'text-domain' ) ),
				            'add_args'     => false,
				            'add_fragment' => '',
				        ) );
				    ?>
				</div>
				
				<?php wp_reset_postdata(); ?>

		</main><!-- #main -->
	</div><!-- #primary -->
	<div id="secondary-blog">
		<?php get_sidebar(); ?>
	</div>
</div>
<?php
get_footer();