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
					<form class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" action="/sendmail-contact" method="POST" id="contactForm">
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
				<div class="container">
					<div class="shop-item col-xs-12 col-sm-4 col-sm-3">
						<div class="shop-title fjala">Jota Mas E Barcelona</div>
						<div class="shop-info">
							<div class="line-1">
								<p class="address"><span class="icon-"></span> Av. Américas esq. Valparaíso</p>
								<p class="cp">Plaza Punto Sao Paulo L-J8</p>
							</div>
							<div class="line-2">
								<!-- <p class="cel"><span class="icon-cel"></span>&nbsp;<br></p> -->
								<p class="office">Guadalajara Jalisco. MX <br></p>
							</div>
						</div>
					</div>
					<div class="shop-item col-xs-12 col-sm-4 col-sm-3">
						<div class="shop-title fjala">Maleri Gallery</div>
						<div class="shop-info">
							<div class="line-1">
								<p class="address"><span class="icon-"></span>Pablo Neruda #2584-2 Col. Providencia</p>
								<p class="cp">Guadalajara Jalisco. MX</p>
							</div>
							<div class="line-2">
								<!-- <p class="cel"><span class="icon-cel"></span>&nbsp;</p> -->
								<p class="office">(33) 3817 7745</p>
							</div>
						</div>
					</div>
					<div class="shop-item col-xs-12 col-sm-4 col-sm-3">
						<div class="shop-title fjala">Casa-R</div>
						<div class="shop-info">
							<div class="line-1">
								<p class="address"><span class="icon-"></span>Mesones #83</p>
								<p class="cp">San Miguel de Allende Guanajuato. MX</p>
							</div>
							<div class="line-2">
								<p class="cel"><span class="icon-cel"></span><a href="http://casa-r.com" target="_blank">http://casa-r.com</a> <br></p>
								<p class="office">&nbsp;</p>
							</div>
						</div>
					</div>
					<div class="shop-item col-xs-12 col-sm-4 col-sm-3">
						<div class="shop-title fjala">The Fancy Archive</div>
						<div class="shop-info">
							<div class="line-1">
								<p class="address"><span class="icon-"></span>Paseo de los Tamarindos #99</p>
								<p class="cp">México City. MX</p>
							</div>
							<div class="line-2">
								<!-- <p class="cel"><span class="icon-cel"></span> Cel. 33 1020 3040 <br></p> -->
								<p class="office"><a href="http://thefancyarchive.com/mathieu-matachaga-creative-director" target="_blank">thefancyarchive.com</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
// do_action( 'storefront_sidebar' );
get_footer();
