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
// jQuery('li.dropdown').firstChild().addClass('dropdown-toggle');
// jQuery('.#menu-main-menu').addClass('dropdown');

jQuery('#masthead .footer-cart-contents').addClass('icon-bag');

jQuery('.navbar-toggle').on('click',function (){
  console.log('clicked!');
  jQuery('.primary-navigation').toggleClass('in');
});

jQuery( window ).scroll(function() {
  var vertical_position = jQuery('body').scrollTop();
  if (vertical_position >=1) {
    jQuery('.navbar').addClass('transparent');
  }else{
    jQuery('.navbar').removeClass('transparent');
  };
});