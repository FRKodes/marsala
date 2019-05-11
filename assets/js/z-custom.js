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
 


jQuery('#menu-item-921-es a').attr('href', jQuery('#menu-item-921-es a').attr('href') + '/?wmc-currency=MXN');
jQuery('#menu-item-921-en a').attr('href', jQuery('#menu-item-921-en a').attr('href') + '/?wmc-currency=USD');
jQuery('#menu-item-1036-es a').attr('href', jQuery('#menu-item-1036-es a').attr('href') + '/?wmc-currency=MXN');
jQuery('#menu-item-1036-en a').attr('href', jQuery('#menu-item-1036-en a').attr('href') + '/?wmc-currency=USD');



var texto = jQuery('.wmc-active-title').html();
console.log( texto );

var currency_url = window.location.pathname;

// console.log( 'Current url: ' + currency_url);

if ( currency_url.indexOf('/en/') !== -1 ) {
	var new_currency_url = currency_url.replace('/en', '').replace('gallery', 'galeria').replace('about-us', 'nosotros').replace('customize', 'personaliza').replace('contact', 'contacto').replace('my-account', 'mi-cuenta').replace('shop', 'tienda').replace('bags/women-backpack', 'bolsos/backpack').replace('wallets/card-holder', 'carteras/tarjetero').replace('make-up-bags/travel-make-up-bags', 'cosmetiqueros/cosmetiquero-de-viaje').replace('pouch-en', 'pouch').replace('key-chain', 'llaveros').replace('toiletry-bags/iron-toiletry-bags', 'neceseres/neceseres-hombre').replace('toiletry-bags/serenity-toiletry-bags', 'neceseres/neceseres-mujer').replace('passport-holders/tangerine-passport-holder', 'porta-pasaportes/porta-pasaporte-tangerine').replace('passport-holders/family-passport-holder', 'porta-pasaportes/porta-pasaporte-familiar').replace('tags-en', 'tags').replace('calypso-suitcase', 'maleta-calypso').replace('build-your-kit', 'arma-tu-kit').replace('whishlist', 'lista-de-deseos').replace('wallets', 'carteras').replace('/make-up-bags/', '/cosmetiqueros/').replace('toiletry-bags', 'neceseres').replace('bags', 'bolsos')
	.replace('passport-holders', 'porta-pasaportes')
	.replace('/home', '')
	.replace('flamingo-backpack-black', 'backpack-flamingo-negro')
	.replace('flamingo-backpack-silver-black', 'backpack-flamingo-plata-negro')
	.replace('flamingo-backpack-silver-stars-black', 'backpack-flamingo-plata-estrellas')
	.replace('flamingo-backpack-green-black', 'backpack-flamingo-verde-olivo-negro')
	.replace('backpack-flamingo-nude', 'backpack-flamingo-3')
	.replace('tigerlilly-card-holder-burgundy-dots-gray', 'tarjetero-tigerlilly-tinto-beige')
	.replace('tigerlilly-card-holder-orange-gray', 'tarjetero-tigerlilly-beige-naranja')
	.replace('tigerlilly-card-holder-blue-gray', 'tarjetero-tigerlilly-azul-gris')
	.replace('tigerlilly-card-holder-black-lines-gray', 'tarjetero-tigerlilly-negro-lineas-gris')
	.replace('tigerlilly-card-holder-silver-black-stars', 'tarjetero-tigerlilly-plateado-estrellas-negro')
	.replace('tigerlilly-card-holder-green-and-blue', 'tarjetero-tigerlilly-verde-y-azul')
	.replace('tigerlilly-card-holder-negro-and-azul', 'tarjetero-tigerlilly-negro-y-azul')
	.replace('tigerlilly-card-holder-nude-and-green', 'tarjetero-tigerlilly-nude-y-verde')
	.replace('emerald-make-up-bag-burgundy-white-dots', 'cosmetiquero-emerald-tinto-puntos-blancos')
	.replace('emerald-make-up-bag-silver-stars', 'cosmetiquero-emerald-plata-estrellas')
	.replace('emerald-make-up-bag-4', 'cosmetiquero-emerald-azul-marino-estampado-ojos')
	.replace('emerald-make-up-bag-3', 'cosmetiquero-emerald-negro-lineas')
	.replace('emerald-make-up-bag-2', 'cosmetiquero-emerald-arena-dots')
	.replace('emerald-make-up-bag', 'cosmetiquero-emerald-nude')
	.replace('emerald-make-up-bag-5', 'cosmetiquero-emerald-naranja-lines')
	.replace('mimosa-pouch-sand', 'pouch-mimosa-arena-estampado')
	.replace('mimosa-pouch-2', 'pouch-mimosa-plata-estrellas')
	.replace('mimosa-pouch-black-lines', 'pouch-mimosa-negro-lineas')
	.replace('mimosa-pouch-burgundy-dots', 'pouch-mimosa-tinto-puntos')
	.replace('mimosa-pouch-black-eyes', 'pouch-mimosa-negro-estampado-ojos')
	.replace('mimosa-pouch', 'pouch-mimosa-nude')
	.replace('mimosa-pouch-orange', 'pouch-mimosa-naranja-lines')
	.replace('amber-key-chain-4', 'llavero-amber')
	.replace('amber-key-chain-3', 'llavero-amber-azul')
	.replace('amber-key-chain-2', 'llavero-amber-mostaza')
	.replace('amber-key-chain-gray', 'llavero-amber-gris')
	.replace('amber-key-chain-orange', 'llavero-amber-naranja')
	.replace('amber-key-chain', 'llavero-amber-color-tinto')
	.replace('amber-key-chain-nude', 'llavero-amber-nude')
	.replace('amber-silver-key-chain', 'llavero-amber-plata')
	.replace('iron-toiletry-bag-blue', 'neceser-iron-azul')
	.replace('iron-toiletry-bag-green', 'neceser-iron-verde-olivo')
	.replace('iron-toilet-bag-bordeaux', 'neceser-iron-tinto')
	.replace('iron-toilet-bag', 'neceser-iron-negro')
	.replace('neceser-iron-2', 'neceser-iron')
	.replace('serenity-toiletry-bag-2', 'neceser-serenity-naranja-lineas')
	.replace('serenity-toiletry-bag-black-lines', 'neceser-serenity-negro-estampado-rayas')
	.replace('serenity-toiletry-bag-black-eyes', 'neceser-serenity-negro-estampado-ojos')
	.replace('serenity-toiletry-bag-silver-stars', 'neceser-serenity-plata-estampado-estrellas-negras')
	.replace('serenity-serenity-toiletry-bag-nude', 'neceser-serenity')
	.replace('serenity-toiletry-bag', 'neceser-serenity-arena-puntos')
	.replace('serenity-toiletry-bag-burgundy-dots', 'neceser-serenity-tinto-estampado-puntos-blancos')
	.replace('tangerine-passport-holder-blue-eyes-burgundy', 'porta-pasaporte-tangerine-azul-estampado-ojos')
	.replace('tangerine-passport-holder-gray-bordeaux', 'porta-pasaporte-tangerine-beige-cafe')
	.replace('tangerine-passport-holder-2', 'porta-pasaporte-tangerine-beige-tinto')
	.replace('tangerine-passport-holder-orange-gray', 'porta-pasaporte-tangerine-naranja-beige')
	.replace('tangerine-passport-holder-black-blue', 'porta-pasaporte-tangerine-negro-azul')
	.replace('tangerine-passport-holder-black-lines-gray', 'porta-pasaporte-tangerine-negro-beige-estampado')
	.replace('tangerine-passport-holder-silver-stars-black', 'porta-pasaporte-tangerine-plata-negro-estampado-estrellas')
	.replace('tangerine-passport-holder-burgundy-dots-silver', 'porta-pasaporte-tangerine-tinto-plata')
	.replace('tangerine-passport-holder-green-blue', 'porta-pasaporte-tangerine-verde-olivo-azul')
	.replace('tangerine-passport-holder-gray-rain-nude', 'porta-pasaporte-tangerine-gris-lluvia-nude')
	.replace('tangerine-passport-holder-nude-and-green', 'porta-pasaporte-tangerine-nude-verde')
	.replace('tangerine-passport-holder-nude-burgundy', 'porta-pasaporte-tangerine-nude-tinto')
	.replace('tangerine-passport-holder-burgundy-dots-gray', 'porta-pasaporte-tangerine-tinto-dots-gris')
	.replace('tangerine-passport-holder', 'porta-pasaporte-tangerine-negro-lineas-azul')
	.replace('tangerine-passport-holder-gray-rain-blue', 'porta-pasaporte-tangerine-gris-lluvia-azul')
	.replace('tangerine-passsport-holder-blue-gray', 'porta-pasaporte-tangerine-azul-y-gris')
	.replace('tangerine-passport-holder-gray-rain-mustard', 'porta-pasaporte-tangerine-beige-amarillo')
	.replace('family-passport-holder-black-lines-gray', 'porta-pasaporte-familiar-negro-lineas-gris')
	.replace('family-passport-holder-burgundy-dots-gray', 'porta-pasaporte-familiar-tinto-dots-gris')
	.replace('family-passport-holder-gray-rain-nude', 'porta-pasaporte-familiar-gris-lluvia-nude')
	.replace('family-passport-holder-green-blue', 'porta-pasaporte-familiar-verde-y-azul')
	.replace('buttercup-tag-gray-rain', 'tag-arena')
	.replace('buttercup-tag-bordeaux-gray', 'tag-cafe')
	.replace('buttercup-tag-orange', 'tag-naranja')
	.replace('buttercup-tag-black-lines', 'tag-negro')
	.replace('buttercup-blue-eyes', 'tag-azul-ojos')
	.replace('buttercup-tag-silver-stars-black', 'tag-plata')
	.replace('buttercup-tag-burgundy-dots', 'tag-tinto')
	.replace('buttercup-tag-green-blue', 'tag-verde-olivo-azul')
	.replace('tag-buttercup-nude-and-burgundy-strap', 'tag-buttercup')
	.replace('tag-buttercup-blue-and-black', 'tag-buttercup-2')
	.replace('tag-buttercup-4', 'tag-buttercup-3')
	.replace('calypso-suitcase-2', 'maleta-calypso')
	.replace('suitcase-calypso', 'maleta-calypso-2')
	.replace('calypso-suitcase', 'maleta-calypso-3')
	.replace('maleta-calypso-en', 'maleta-calypso-4')
	.replace('man-kit-blue', 'kit-de-hombre-azul')
	.replace('man-kit-black', 'kit-de-hombre-negro')
	.replace('man-kit-burgundy', 'kit-de-hombre-tinto')
	.replace('man-kit-green', 'kit-de-hombre-verde')
	.replace('woman-kit-sand-color', 'kit-de-mujer-arena')
	.replace('woman-kit-blue', 'kit-de-mujer-azul')
	.replace('woman-kit-orange', 'kit-de-mujer-naranja')
	.replace('woman-kit-black', 'kit-de-mujer-negro')
	.replace('woman-kit-silver', 'kit-de-mujer-plata')
	.replace('woman-kit-burgundy', 'kit-de-mujer-tinto');

	jQuery('.wmc-currency a').attr('href', new_currency_url + '?wmc-currency=MXN');
}

if ( currency_url.indexOf('/en/') === -1 ) {
	var currency_url = currency_url.replace('galeria', 'gallery').replace('nosotros','about-us').replace('personaliza','customize').replace('contacto','contact').replace('mi-cuenta','my-account').replace('tienda','shop').replace('bolsos/backpack','bags/women-backpack').replace('carteras/tarjetero','wallets/card-holder').replace('cosmetiqueros/cosmetiquero-de-viaje','make-up-bags/travel-make-up-bags').replace('pouch','pouch-en').replace('llaveros','key-chain').replace('neceseres/neceseres-hombre','toiletry-bags/iron-toiletry-bags').replace('neceseres/neceseres-mujer','toiletry-bags/serenity-toiletry-bags').replace('porta-pasaportes/porta-pasaporte-tangerine','passport-holders/tangerine-passport-holder').replace('porta-pasaportes/porta-pasaporte-familiar','passport-holders/family-passport-holder').replace('tags','tags-en').replace('maleta-calypso','calypso-suitcase').replace('arma-tu-kit','build-your-kit').replace('lista-de-deseos','whishlist').replace('carteras','wallets').replace('/cosmetiqueros/','/make-up-bags/').replace('neceseres','toiletry-bags').replace('bolsos','bags')
	.replace('porta-pasaportes', 'passport-holders')
	.replace('backpack-flamingo-negro', 'flamingo-backpack-black')
	.replace('backpack-flamingo-plata-negro', 'flamingo-backpack-silver-black')
	.replace('backpack-flamingo-plata-estrellas', 'flamingo-backpack-silver-stars-black')
	.replace('backpack-flamingo-verde-olivo-negro', 'flamingo-backpack-green-black')
	.replace('backpack-flamingo-3', 'backpack-flamingo-nude')
	.replace('tarjetero-tigerlilly-tinto-beige', 'tigerlilly-card-holder-burgundy-dots-gray')
	.replace('tarjetero-tigerlilly-beige-naranja', 'tigerlilly-card-holder-orange-gray')
	.replace('tarjetero-tigerlilly-azul-gris', 'tigerlilly-card-holder-blue-gray')
	.replace('tarjetero-tigerlilly-negro-lineas-gris', 'tigerlilly-card-holder-black-lines-gray')
	.replace('tarjetero-tigerlilly-plateado-estrellas-negro', 'tigerlilly-card-holder-silver-black-stars')
	.replace('tarjetero-tigerlilly-verde-y-azul', 'tigerlilly-card-holder-green-and-blue')
	.replace('tarjetero-tigerlilly-negro-y-azul', 'tigerlilly-card-holder-negro-and-azul')
	.replace('tarjetero-tigerlilly-nude-y-verde', 'tigerlilly-card-holder-nude-and-green')
	.replace('cosmetiquero-emerald-tinto-puntos-blancos', 'emerald-make-up-bag-burgundy-white-dots')
	.replace('cosmetiquero-emerald-plata-estrellas', 'emerald-make-up-bag-silver-stars')
	.replace('cosmetiquero-emerald-azul-marino-estampado-ojos', 'emerald-make-up-bag-4')
	.replace('cosmetiquero-emerald-negro-lineas', 'emerald-make-up-bag-3')
	.replace('cosmetiquero-emerald-arena-dots', 'emerald-make-up-bag-2')
	.replace('cosmetiquero-emerald-nude', 'emerald-make-up-bag')
	.replace('cosmetiquero-emerald-naranja-lines', 'emerald-make-up-bag-5')
	.replace('pouch-mimosa-arena-estampado', 'mimosa-pouch-sand')
	.replace('pouch-mimosa-plata-estrellas', 'mimosa-pouch-2')
	.replace('pouch-mimosa-negro-lineas', 'mimosa-pouch-black-lines')
	.replace('pouch-mimosa-tinto-puntos', 'mimosa-pouch-burgundy-dots')
	.replace('pouch-mimosa-negro-estampado-ojos', 'mimosa-pouch-black-eyes')
	.replace('pouch-mimosa-nude', 'mimosa-pouch')
	.replace('pouch-mimosa-naranja-lines', 'mimosa-pouch-orange')
	.replace('llavero-amber', 'amber-key-chain-4')
	.replace('llavero-amber-azul', 'amber-key-chain-3')
	.replace('llavero-amber-mostaza', 'amber-key-chain-2')
	.replace('llavero-amber-gris', 'amber-key-chain-gray')
	.replace('llavero-amber-naranja', 'amber-key-chain-orange')
	.replace('llavero-amber-color-tinto', 'amber-key-chain')
	.replace('llavero-amber-nude', 'amber-key-chain-nude')
	.replace('llavero-amber-plata', 'amber-silver-key-chain')
	.replace('neceser-iron-azul', 'iron-toiletry-bag-blue')
	.replace('neceser-iron-verde-olivo', 'iron-toiletry-bag-green')
	.replace('neceser-iron-tinto', 'iron-toilet-bag-bordeaux')
	.replace('neceser-iron-negro', 'iron-toilet-bag')
	.replace('neceser-iron', 'neceser-iron-2')
	.replace('neceser-serenity-naranja-lineas', 'serenity-toiletry-bag-2')
	.replace('neceser-serenity-negro-estampado-rayas', 'serenity-toiletry-bag-black-lines')
	.replace('neceser-serenity-negro-estampado-ojos', 'serenity-toiletry-bag-black-eyes')
	.replace('neceser-serenity-plata-estampado-estrellas-negras', 'serenity-toiletry-bag-silver-stars')
	.replace('neceser-serenity', 'serenity-serenity-toiletry-bag-nude')
	.replace('neceser-serenity-arena-puntos', 'serenity-toiletry-bag')
	.replace('neceser-serenity-tinto-estampado-puntos-blancos', 'serenity-toiletry-bag-burgundy-dots')
	.replace('porta-pasaporte-tangerine-azul-estampado-ojos', 'tangerine-passport-holder-blue-eyes-burgundy')
	.replace('porta-pasaporte-tangerine-beige-cafe', 'tangerine-passport-holder-gray-bordeaux')
	.replace('porta-pasaporte-tangerine-beige-tinto', 'tangerine-passport-holder-2')
	.replace('porta-pasaporte-tangerine-naranja-beige', 'tangerine-passport-holder-orange-gray')
	.replace('porta-pasaporte-tangerine-negro-azul', 'tangerine-passport-holder-black-blue')
	.replace('porta-pasaporte-tangerine-negro-beige-estampado', 'tangerine-passport-holder-black-lines-gray')
	.replace('porta-pasaporte-tangerine-plata-negro-estampado-estrellas', 'tangerine-passport-holder-silver-stars-black')
	.replace('porta-pasaporte-tangerine-tinto-plata', 'tangerine-passport-holder-burgundy-dots-silver')
	.replace('porta-pasaporte-tangerine-verde-olivo-azul', 'tangerine-passport-holder-green-blue')
	.replace('porta-pasaporte-tangerine-gris-lluvia-nude', 'tangerine-passport-holder-gray-rain-nude')
	.replace('porta-pasaporte-tangerine-nude-verde', 'tangerine-passport-holder-nude-and-green')
	.replace('porta-pasaporte-tangerine-nude-tinto', 'tangerine-passport-holder-nude-burgundy')
	.replace('porta-pasaporte-tangerine-tinto-dots-gris', 'tangerine-passport-holder-burgundy-dots-gray')
	.replace('porta-pasaporte-tangerine-negro-lineas-azul', 'tangerine-passport-holder')
	.replace('porta-pasaporte-tangerine-gris-lluvia-azul', 'tangerine-passport-holder-gray-rain-blue')
	.replace('porta-pasaporte-tangerine-azul-y-gris', 'tangerine-passsport-holder-blue-gray')
	.replace('porta-pasaporte-tangerine-beige-amarillo', 'tangerine-passport-holder-gray-rain-mustard')
	.replace('porta-pasaporte-familiar-negro-lineas-gris', 'family-passport-holder-black-lines-gray')
	.replace('porta-pasaporte-familiar-tinto-dots-gris', 'family-passport-holder-burgundy-dots-gray')
	.replace('porta-pasaporte-familiar-gris-lluvia-nude', 'family-passport-holder-gray-rain-nude')
	.replace('porta-pasaporte-familiar-verde-y-azul', 'family-passport-holder-green-blue')
	.replace('tag-arena', 'buttercup-tag-gray-rain')
	.replace('tag-cafe', 'buttercup-tag-bordeaux-gray')
	.replace('tag-naranja', 'buttercup-tag-orange')
	.replace('tag-negro', 'buttercup-tag-black-lines')
	.replace('tag-azul-ojos', 'buttercup-blue-eyes')
	.replace('tag-plata', 'buttercup-tag-silver-stars-black')
	.replace('tag-tinto', 'buttercup-tag-burgundy-dots')
	.replace('tag-verde-olivo-azul', 'buttercup-tag-green-blue')
	.replace('tag-buttercup', 'tag-buttercup-nude-and-burgundy-strap')
	.replace('tag-buttercup-2', 'tag-buttercup-blue-and-black')
	.replace('tag-buttercup-3', 'tag-buttercup-4')
	.replace('maleta-calypso', 'calypso-suitcase-2')
	.replace('maleta-calypso-2', 'suitcase-calypso')
	.replace('maleta-calypso-3', 'calypso-suitcase')
	.replace('maleta-calypso-4', 'maleta-calypso-en')
	.replace('kit-de-hombre-azul', 'man-kit-blue')
	.replace('kit-de-hombre-negro', 'man-kit-black')
	.replace('kit-de-hombre-tinto', 'man-kit-burgundy')
	.replace('kit-de-hombre-verde', 'man-kit-green')
	.replace('kit-de-mujer-arena', 'woman-kit-sand-color')
	.replace('kit-de-mujer-azul', 'woman-kit-blue')
	.replace('kit-de-mujer-naranja', 'woman-kit-orange')
	.replace('kit-de-mujer-negro', 'woman-kit-black')
	.replace('kit-de-mujer-plata', 'woman-kit-silver')
	.replace('kit-de-mujer-tinto', 'woman-kit-burgundy');
	
	var new_currency_url = '/en' + currency_url;
	jQuery('.wmc-currency a').attr('href', new_currency_url + '?wmc-currency=USD');
}

// console.log( 'New url: ' + new_currency_url);

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