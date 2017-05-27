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
  console.log(jQuery(this).attr('id'));
  jQuery('#' + jQuery(this).attr('id') + ' .dropdown-menu').toggleClass('hidden');
});


// jQuery('li.dropdown').firstChild().addClass('dropdown-toggle');
// jQuery('.#menu-main-menu').addClass('dropdown');

jQuery('li.dropdown-prods').on('click', function (){
  jQuery('#' + jQuery(this).attr('id')).first('dropdown-menu').toggleClass('show');
  console.log('okokok');
});

jQuery('#masthead .footer-cart-contents').addClass('icon-bag');

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