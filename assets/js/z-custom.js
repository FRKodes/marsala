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
//   columnWidth: 100
// });