/*-------------------------------
  VALIDATE.JS
  A barebones jQuery validation plugin
  @author Todd Francis
  @version 1.0.3
-------------------------------*/
;(function(r,d,l){d.fn.validate=function(m){return this.each(function(){var f=d(this);if(l===f.data("validate")){var j=new d.validate(m,f);f.data("validate",j)}})};d.validate=function(m,f){function j(a,b){-1==d.inArray(a,b)&&b.push(a);return b}function p(a){a=a.slice(a.indexOf("[")+1,-1);return-1!==a.indexOf(",")?a.split(","):[a]}function n(a){for(var b=[],c=0;c<a.length;c++){var g=a[c],d=[],h=g.indexOf("[");-1!==h&&(d=d.concat(p(g)),g=g.slice(0,h));b.push({rule:g,args:d})}return b}var h=d.extend(!0,
{debug:!1,autoDetect:!1,visibleOnly:!0,beforeSubmit:function(){},singleError:function(){},overallError:function(){},singleSuccess:function(){},overallSuccess:function(){},regExp:{alpha:/^[a-zA-Z]*$/,numeric:/^[0-9]*$/,alphanumeric:/^[a-zA-Z0-9]*$/,url:/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,email:/^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/}},
m),c=this,q=["checkGroupRequired","checkGroupMin","checkGroupMax"];c.$form=f;c.version="1.0.0";if(f!==l)f.on("submit",function(a){if(!c.validate()||h.debug)a.stopImmediatePropagation(),a.preventDefault()});c.validate=function(a){a="undefined"===typeof a?c.$form:a;var b=!1,e=d();h.beforeSubmit.call(c);c.fieldsToCheck(a).each(function(){var a=d(this);if((h.visibleOnly&&a.is(":visible")||!h.visibleOnly)&&!c.checkField(a))b=!0,e=e.add(a)});b?h.overallError.call(c,a,e):!1===h.overallSuccess.call(c,a)&&
(b=!0);return!b};c.checkField=function(a){var b=a.data("validate")?a.data("validate").split("|"):[];a.val();var e=[];if(h.autoDetect&&a.is('input:not([type="checkbox"], [type="radio"])')&&"text"!=a.attr("type"))switch(e=a.attr("type"),e){case "number":b=j("numeric",b);break;default:b=j(e,b)}b=n(b);e=c.checkValue(a,b);if(e instanceof Object)return h.singleError.call(c,a,e),!1;h.singleSuccess.call(c,a,b);return!0};c.checkValue=function(a,b){if(!b)return!0;b="string"==typeof b?n(b):b;for(var e=[],g=
0;g<b.length;g++){var f=b[g].rule,k="",j=[a].concat(b[g].args.slice());f.indexOf("[");k="check"+f.charAt(0).toUpperCase()+f.slice(1);"checkRequired"==k&&a.is('input[type="checkbox"]')?k="checkRequiredCheckbox":-1!=d.inArray(k,q)&&(f=d('input[type="checkbox"]',a),f.length||(f=d('input[type="radio"]',a)),j=[f].concat(j.slice(1)));c[k]instanceof Function?c[k].apply(c,j)||e.push(b[g]):h.regExp[b[g].rule]?""!==a.val()&&!c.checkRegExp(a,b[g].rule)&&e.push(b[g]):e.push(b[g])}return 0<e.length?e:!0};c.fieldsToCheck=
function(a){a=d("[data-validate]",a===l?c.$form:a);h.autoDetect&&(a=d("input[required]").add(a));return a};c.checkRequired=function(a){return 0<a.val().length?!0:!1};c.checkRequiredCheckbox=function(a){return a.is(":checked")};c.checkGroupRequired=function(a){return a.filter(":checked").length?!0:!1};c.checkGroupMin=function(a,b){return a.filter(":checked").length>=b};c.checkGroupMax=function(a,b){return a.filter(":checked").length<=b};c.checkCustomRegExp=function(a,b,c){if(""===a.val())return!0;
b=RegExp(b,c);return a.val().match(b)?!0:!1};c.checkRegExp=function(a,b){return a.val().match(h.regExp[b])?!0:!1};c.checkMaxLength=function(a,b){return""===a.val()?!0:a.val().length<=b};c.checkMinLength=function(a,b){return""===a.val()?!0:a.val().length>=b};c.checkMax=function(a,b){return""===a.val()?!0:parseFloat(a.val())<=parseFloat(b)};c.checkMin=function(a,b){return""===a.val()?!0:parseFloat(a.val())>=parseFloat(b)}}})(window,jQuery);

function initMap(pointers) {
	
	var centerLatLng  = {lat: 20.537337, lng: -100.818879};
	var locations = new Array();
	locations = pointers;
	var infowindow = new google.maps.InfoWindow();
	var marker, i, lat, lng;

	locations = JSON.parse(locations);

	// console.log(locations);

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8,
		center: centerLatLng,
		scrollwheel: false
	});

	for (i = 0; i < locations.length; i++) {
		lat = parseFloat(locations[i].coordenadas.split(',')[0]);
		lng = parseFloat(locations[i].coordenadas.split(',')[1]);

		// console.log('Lat: ' + lat + ' - Lng: ' + lng);

		marker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lng),
			map: map
		});

		// console.log(marker);

		// google.maps.event.addListener(marker, 'click', (function(marker, i) {
		// 	return function() {
		// 	infowindow.setContent(locations[i].name);
		// 	infowindow.open(map, marker);
		// 	}
		// })(marker, i));
	}


}

/*
 *
 * class="icon-favoritos"
 */
var url_language = window.location.href;

if (url_language.indexOf('/en/') !== -1) {
	jQuery('a[class="icon-favoritos"] span').html('ADD TO FAVS');
	jQuery('button[class="icon-bag"] span').html('SHOP');
	jQuery('a.icon-personalizar span').html('CUSTOMIZE');

	jQuery('.woocommerce-message.added-to-cart-message').html('Cart updated');
	
}



jQuery('.primary-navigation').addClass('navbar-collapse collapse');
jQuery('#menu-main-menu').addClass('nav navbar-nav');
jQuery('#menu-main-menu-eng').addClass('nav navbar-nav');
jQuery('ul.sub-menu').addClass('dropdown-menu');
jQuery('.nav li:has(ul)').addClass('dropdown');
jQuery('.cat-element .sub-menu').addClass('hidden');
jQuery('li.cat-element').on('click', function (e){
  e.stopPropagation();
  jQuery('#' + jQuery(this).attr('id') + ' .dropdown-menu').toggleClass('hidden');
});

jQuery('li.dropdown-prods').on('click', function (){
  jQuery('#' + jQuery(this).attr('id')).first('dropdown-menu').toggleClass('show');
});

jQuery('#masthead .footer-cart-contents').addClass('icon-bag');

jQuery('.icon-personalizar').on('click', function (){
  jQuery('.customize-it-form').toggleClass('active');
  jQuery('.customize-it-form .form-group').removeClass('opacity_0');
  jQuery('#phrase').focus();
});

jQuery('.ok-btn').on('click', function (){
  jQuery('.customize-it-form .form-group').toggleClass('opacity_0');
});

jQuery('#phrase').keyup(function (){
  jQuery('.custom-phrase').html(jQuery(this).val());
  jQuery('input[name="product-custom-style"]').html(jQuery(this).val() + ' | ' + jQuery('input[name="color_tecnica"]:checked').val());
});

jQuery('.navbar-toggle').on('click',function (){
  jQuery('.primary-navigation').toggleClass('in');
});

jQuery('#one-column, #two-column').on('click',function (){
  jQuery('#one-column, #two-column').toggleClass('alpha_50');
  jQuery('li.product').toggleClass('col-xs-6');
});

jQuery("#go-to-top").click(function() {
	jQuery('html, body').animate({
		scrollTop: jQuery("#masthead").offset().top
	}, 500);
  console.log('clicked!');
});

jQuery('input[type=radio][name=color_tecnica]').change(function() {
  jQuery('input[name="product-custom-style"]').html(jQuery('input[id="phrase"]').val() + ' | ' + jQuery('input[name="color_tecnica"]:checked').val());
  if (this.value == 'Dorado') {
	jQuery('.custom-phrase').removeClass('broquel grabado').addClass('gold');
  }else if (this.value == 'Broquelado') {
	jQuery('.custom-phrase').removeClass('gold grabado').addClass('broquel');
  }else if (this.value == 'Grabado') {
	jQuery('.custom-phrase').removeClass('gold broquel').addClass('grabado');
  }
});


jQuery('select[name=color_tecnica]').change(function() {
  console.log('changed!');
  jQuery('input[name="product-custom-style"]').html(jQuery('input[id="phrase"]').val() + ' | ' + jQuery('select[name="color_tecnica"] option:selected').val());
  if (this.value == 'Dorado') {
	jQuery('.custom-phrase').removeClass('plateado naranja negro holograma').addClass('gold');
  }else if (this.value == 'Plateado') {
	jQuery('.custom-phrase').removeClass('gold naranja negro holograma').addClass('plateado');
  }else if (this.value == 'Naranja') {
	jQuery('.custom-phrase').removeClass('gold plateado negro holograma').addClass('naranja');
  }else if (this.value == 'Negro') {
	jQuery('.custom-phrase').removeClass('gold naranja plateado holograma').addClass('negro');
  }else if (this.value == 'Holograma') {
	jQuery('.custom-phrase').removeClass('gold  naranja negro ').addClass('holograma');
  }
});

if (jQuery('p.stock:contains("Hay existencias")').length > 0) {
	jQuery('p.stock').addClass("hidden");
}

jQuery( window ).scroll(function() {
  var vertical_position = jQuery('html').scrollTop();
  if (vertical_position >=1) {
	jQuery('.navbar').addClass('transparent');
  }else{
	jQuery('.navbar').removeClass('transparent');
  };

  if (vertical_position>=300) {
	jQuery('.go-up-btn').removeClass('hidden');
  } else{
	jQuery('.go-up-btn').addClass('hidden');
  };

});

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});

jQuery('a.zoom').on('click', function (event){
  event.preventDefault();
  var image_url = jQuery(this).attr("href");
  jQuery('.woocommerce-main-image').attr('href', image_url);
  jQuery('.woocommerce-main-image img').attr('src', image_url).attr('srcset', image_url);
  jQuery('.customize-it-form').removeClass('active');
});

jQuery('a.icon-personalizar').on('click', function(){
  var image_url = jQuery('.thumbnails .first').attr('href');
  jQuery('.woocommerce-main-image').attr('href', image_url);
  jQuery('.woocommerce-main-image img').attr('src', image_url).attr('srcset', image_url);
});


jQuery('.banners_promo_container').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

/*validator*/
jQuery(function(){

  var formSettings = {
	singleError : function($field, rules){ 
	  $field.closest('.form-group').removeClass('valid').addClass('error');
	  // jQuery('.text-danger').fadeIn();
	},
	singleSuccess : function($field, rules){ 
	  $field.closest('.form-group').removeClass('error').addClass('valid');
	  // jQuery('.text-danger').fadeOut();
	},
	overallSuccess : function(){
	  var form      = jQuery('#contactForm'),
		nombre      = form.find( "input[name='nombre']").val(),
		email       = form.find( "input[name='email']").val(),
		telefono    = form.find( "input[name='telefono']").val(),
		mensaje     = form.find( "textarea[name='mensaje']").val(),
		action      = form.attr( "action"),
		url         = action;

	  var posting = jQuery.post(
		url, { nombre: nombre, telefono: telefono, email: email, mensaje: mensaje }
	  );
	  posting.done(function( data ){
		console.log('email sent! \n' + data );
		jQuery('#contactForm')[0].reset();
		jQuery('.sent_mail_alert').fadeIn().delay(3000).fadeOut();
	  });
	},
	overallError : function($form, fields){ /*Do nothing, just show the error fields*/ },
	  autoDetect : true, debug : true
	};
  var $validate = jQuery('#contactForm').validate(formSettings).data('validate');
});

jQuery.ajax({
	method: "GET",
	url: "/pines-puntos-de-venta/"
}).done(function( pointers ) {
	initMap(pointers);
});