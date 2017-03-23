<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package storefront-child
 */

?>

		</div><!-- .col-full -->
	</div><!-- #content -->

	<?php //do_action( 'storefront_before_footer' ); ?>

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="col-full">
			<?php wp_nav_menu( array( 'theme_location' => 'footer_menu_acerca_de', 'container_class' => 'footer_about_us_menu' ) ); ?>
			<?php wp_nav_menu( array( 'theme_location' => 'footer_productos', 'container_class' => 'footer_products_menu' ) ); ?>
		</div><!-- .col-full -->
	</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>