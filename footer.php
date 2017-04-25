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
		<div class="container-fluid">
			<div class="row">
				<div class="container">
					<div class="first-block">
						<?php wp_nav_menu( array( 'theme_location' => 'footer_menu_acerca_de', 'container_class' => 'footer_about_us_menu' ) ); ?>
						<?php wp_nav_menu( array( 'theme_location' => 'footer_menu_productos', 'container_class' => 'footer_products_menu' ) ); ?>
					</div>
					<div class="second-block">
						<ul class="social">
							<li><a href="https://www.facebook.com/Marsalamarsala3/" class="icon-facebook"></a></li>
							<li><a href="https://www.instagram.com/marsalamarsala/" class="icon-instagram"></a></li>
						</ul>
						<div class="footer-logo"><img src="<?php echo get_stylesheet_directory_uri()."/assets/images/mmarsala.svg"; ?>" alt="logo footer mmarsala"></div>
						<p class="text-center">Copyright &copy; 2017 MARSALA. <br>All right reserved.</p>
					</div>
				</div>
			</div>
		</div><!-- .col-full -->
	</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/js/masonry.js"></script>
<script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/js/z-custom.js"></script>
<?php if (strpos($_SERVER['REQUEST_URI'], 'contact') !== false) { ?>
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQhg9wdqnWZSlPRMZFV7-op85YynGz4PU&callback=initMap"></script>
<?php } ?>
</body>
</html>