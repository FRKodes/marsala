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
					<form class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" action="/sendmail-contact.php" method="POST">
						<div class="form-group"><input type="text" name="nombre" class="form-control" placeholder="*Nombre completo"></div>
						<div class="form-group"><input type="text" name="email" class="form-control" placeholder="*Email"></div>
						<div class="form-group"><input type="text" name="telefono" class="form-control" placeholder="Teléfono"></div>
						<div class="form-group"><input type="text" name="asunto" class="form-control" placeholder="asunto"></div>
						<div class="form-group"><textarea name="mensaje" id="mensaje" cols="30" rows="10" class="form-control" placeholder="*Mensaje"></textarea></div>
						<div class="form-group"><input type="submit" value="Enviar" class="btn btn-primary black"></div>
					</form>
				</div>
			</div>

			<div class="row">
				<div class="shadow"></div>
				<div id="map"></div>
			</div>

			<div class="row">
				<div class="container">
					<div class="shop-item col-sm-4 col-sm-3">
						<div class="shop-title fjala">lorem local</div>
						<div class="shop-info">
							<div class="line-1">
								<p class="address"><span class="icon-"></span> Ottawa #1129 Col. Providencia</p>
								<p class="cp">C.P 44640</p>
							</div>
							<div class="line-2">
								<p class="cel"><span class="icon-cel"></span> Cel. 33 1020 3040 <br></p>
								<p class="office">Office (33) 3111 9004</p>
							</div>
						</div>
					</div>
					<div class="shop-item col-sm-4 col-sm-3">
						<div class="shop-title fjala">lorem local</div>
						<div class="shop-info">
							<div class="line-1">
								<p class="address"><span class="icon-"></span> Ottawa #1129 Col. Providencia</p>
								<p class="cp">C.P 44640</p>
							</div>
							<div class="line-2">
								<p class="cel"><span class="icon-cel"></span> Cel. 33 1020 3040 <br></p>
								<p class="office">Office (33) 3111 9004</p>
							</div>
						</div>
					</div>
					<div class="shop-item col-sm-4 col-sm-3">
						<div class="shop-title fjala">lorem local</div>
						<div class="shop-info">
							<div class="line-1">
								<p class="address"><span class="icon-"></span> Ottawa #1129 Col. Providencia</p>
								<p class="cp">C.P 44640</p>
							</div>
							<div class="line-2">
								<p class="cel"><span class="icon-cel"></span> Cel. 33 1020 3040 <br></p>
								<p class="office">Office (33) 3111 9004</p>
							</div>
						</div>
					</div>
					<div class="shop-item col-sm-4 col-sm-3">
						<div class="shop-title fjala">lorem local</div>
						<div class="shop-info">
							<div class="line-1">
								<p class="address"><span class="icon-"></span> Ottawa #1129 Col. Providencia</p>
								<p class="cp">C.P 44640</p>
							</div>
							<div class="line-2">
								<p class="cel"><span class="icon-cel"></span> Cel. 33 1020 3040 <br></p>
								<p class="office">Office (33) 3111 9004</p>
							</div>
						</div>
					</div>
					<div class="shop-item col-sm-4 col-sm-3">
						<div class="shop-title fjala">lorem local</div>
						<div class="shop-info">
							<div class="line-1">
								<p class="address"><span class="icon-"></span> Ottawa #1129 Col. Providencia</p>
								<p class="cp">C.P 44640</p>
							</div>
							<div class="line-2">
								<p class="cel"><span class="icon-cel"></span> Cel. 33 1020 3040 <br></p>
								<p class="office">Office (33) 3111 9004</p>
							</div>
						</div>
					</div>
					<div class="shop-item col-sm-4 col-sm-3">
						<div class="shop-title fjala">lorem local</div>
						<div class="shop-info">
							<div class="line-1">
								<p class="address"><span class="icon-"></span> Ottawa #1129 Col. Providencia</p>
								<p class="cp">C.P 44640</p>
							</div>
							<div class="line-2">
								<p class="cel"><span class="icon-cel"></span> Cel. 33 1020 3040 <br></p>
								<p class="office">Office (33) 3111 9004</p>
							</div>
						</div>
					</div>
					<div class="shop-item col-sm-4 col-sm-3">
						<div class="shop-title fjala">lorem local</div>
						<div class="shop-info">
							<div class="line-1">
								<p class="address"><span class="icon-"></span> Ottawa #1129 Col. Providencia</p>
								<p class="cp">C.P 44640</p>
							</div>
							<div class="line-2">
								<p class="cel"><span class="icon-cel"></span> Cel. 33 1020 3040 <br></p>
								<p class="office">Office (33) 3111 9004</p>
							</div>
						</div>
					</div>
					<div class="shop-item col-sm-4 col-sm-3">
						<div class="shop-title fjala">lorem local</div>
						<div class="shop-info">
							<div class="line-1">
								<p class="address"><span class="icon-"></span> Ottawa #1129 Col. Providencia</p>
								<p class="cp">C.P 44640</p>
							</div>
							<div class="line-2">
								<p class="cel"><span class="icon-cel"></span> Cel. 33 1020 3040 <br></p>
								<p class="office">Office (33) 3111 9004</p>
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
