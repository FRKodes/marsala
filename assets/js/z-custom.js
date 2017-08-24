function initMap() {
  var myLatLng = {lat: 20.693821, lng: -103.378236};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: myLatLng,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}

// jQuery('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 160
// });



jQuery('.primary-navigation').addClass('navbar-collapse collapse');
jQuery('#menu-main-menu').addClass('nav navbar-nav');
jQuery('ul.sub-menu').addClass('dropdown-menu');
jQuery('.nav li:has(ul)').addClass('dropdown');
jQuery('.cat-element .sub-menu').addClass('hidden');
jQuery('li.cat-element').on('click', function (e){
  e.stopPropagation();
  jQuery('#' + jQuery(this).attr('id') + ' .dropdown-menu').toggleClass('hidden');
});


// jQuery('li.dropdown').firstChild().addClass('dropdown-toggle');
// jQuery('.#menu-main-menu').addClass('dropdown');

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
  var vertical_position = jQuery('body').scrollTop();
  console.log(vertical_position);
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