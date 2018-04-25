<?php $args = array('post_type'=> 'punto_de_venta');
$query = new WP_Query( $args );
if ( $query->have_posts() ) : ?>
	<?php while ( $query->have_posts() ) : $query->the_post(); ?>
	
	<?php
	$arr[] = ['coordenadas' => get_field('coordenadas'), 'name' => get_the_title()];
	// $json = json_encode($arr);

	endwhile; wp_reset_postdata();

	echo json_encode($arr);
	// wp_send_json( $arr );
	?>
<?php endif; ?>