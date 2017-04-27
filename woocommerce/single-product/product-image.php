<?php
/**
 * Single Product Image
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/product-image.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.6.3
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $post, $product;
?>
<div class="images marsala">
	<div class="icons-container">
		<a href="<?php echo $_SERVER['REQUEST_URI']. '?add_to_wishlist=' . $product->id; ?>"  rel="nofollow" data-product-id="<?php echo $product->id ?>" data-product-type="<?php echo $product->product_type; ?>" class="icon-favoritos"><span class="hidden-xs">AGREGAR A FAVORITOS</span></a>
		
		<form class="cart" method="post" enctype="multipart/form-data">
			<div class="quantity"><input type="number" step="1" min="1" max="10" name="quantity" value="1" title="Cantidad" class="input-text qty text" size="4" pattern="[0-9]*" inputmode="numeric"></div>
			<input type="hidden" name="add-to-cart" value="<?php echo $product->id; ?>">
			<button type="submit" class="icon-bag"><span class="hidden-xs"> COMPRAR</span></button>
		</form>

		<a href="#" class="icon-personalizar"><span class="hidden-xs">PERSONALIZAR</span></a>
	</div>
	<?php
		if ( has_post_thumbnail() ) {
			$attachment_count = count( $product->get_gallery_attachment_ids() );
			$gallery          = $attachment_count > 0 ? '[product-gallery]' : '';
			$props            = wc_get_product_attachment_props( get_post_thumbnail_id(), $post );
			$image            = get_the_post_thumbnail( $post->ID, apply_filters( 'single_product_large_thumbnail_size', 'shop_single' ), array(
				'title'	 => $props['title'],
				'alt'    => $props['alt'],
			) );
			echo apply_filters(
				'woocommerce_single_product_image_html',
				sprintf(
					'<a href="%s" itemprop="image" class="woocommerce-main-image zoom" title="%s" data-rel="prettyPhoto%s">%s</a>',
					esc_url( $props['url'] ),
					esc_attr( $props['caption'] ),
					$gallery,
					$image
				),
				$post->ID
			);
		} else {
			echo apply_filters( 'woocommerce_single_product_image_html', sprintf( '<img src="%s" alt="%s" />', wc_placeholder_img_src(), __( 'Placeholder', 'woocommerce' ) ), $post->ID );
		}

		do_action( 'woocommerce_product_thumbnails' );
	?>
</div>
