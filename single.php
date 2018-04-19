<?php
/**
 * The Detail Blog Post template file.
 * @package MARSALA
 */
get_header(); ?>
<div class="container">
	<div id="blog" class="content-area single-blog">
		<main id="main" class="site-main" role="main">
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
				<div class="blog-item">
					<div class="blog-image-header" style="background-image: url(<?php the_post_thumbnail_url() ?>)"></div>
					<?php the_content() ?>
					<?php the_category() ?>
					<?php the_tags() ?>
				</div>
			<?php endwhile; ?>
			<?php endif; ?>	
		</main><!-- #main -->
	</div><!-- #primary -->
	<div id="secondary-blog">
		<?php get_sidebar(); ?>
	</div>
</div>
<?php
get_footer();