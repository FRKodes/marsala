<?php
/**
 * The Contact Page template file.
 * @package MARSALA
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post();
				get_template_part( 'content', 'page-only-content' );
			endwhile; // End of the loop. ?>
			
			<div class="row">
				<div class="container">
					<form class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" action="/sendmail-contact" method="post" id="contactForm">
						<div class="form-group"><input type="text" name="nombre" class="form-control" placeholder="*Nombre completo" data-validate="required"></div>
						<div class="form-group"><input type="text" name="email" class="form-control" placeholder="*Email" data-validate="required|email"></div>
						<div class="form-group"><input type="text" name="telefono" class="form-control" placeholder="Teléfono"></div>
						<div class="form-group"><textarea name="mensaje" id="mensaje" cols="30" rows="10" class="form-control" placeholder="*Mensaje" data-validate="required"></textarea></div>
						<div class="form-group"><input type="submit" value="Enviar" class="btn btn-primary black"></div>
						<div class="sent_mail_alert">¡Gracias!<br>Tu mensaje ha sido enviado con éxito, en breve nos pondremos en contacto contigo.</div>
					</form>
				</div>
			</div>

			<div class="row">
				<div class="shadow"></div>
				<div id="map"></div>
			</div>

			<div class="row">

				<?php $args = array('post_type'=> 'punto_de_venta');
				$query = new WP_Query( $args );
				if ( $query->have_posts() ) : ?>
				    <?php while ( $query->have_posts() ) : $query->the_post(); ?>
						<div class="shop-item col-xs-12 col-sm-4 col-sm-3">
							<div class="shop-title fjala"><?php the_title() ?></div>
							<div class="shop-info">
								<div class="line-1">
									<p class="address">
										<?php the_content() ?>
									</p>
								</div>
							</div>
						</div>
				    <?php endwhile; wp_reset_postdata(); ?>
				<?php endif; ?>					

			</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// do_action( 'storefront_sidebar' );
get_footer();
