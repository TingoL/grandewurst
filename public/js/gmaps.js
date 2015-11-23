var latlngFirst = new google.maps.LatLng(44.81277518, 20.42888403);
var latlngSecond = new google.maps.LatLng(44.82204486, 20.46421409);
var mapCenter = new google.maps.LatLng(44.81752437, 20.44242382);


function initialize() {
  var mq = window.matchMedia("(min-width: 768px)");
  var zoom;
  if (mq.matches) {
    zoom = 14;
  } else {
    zoom = 13;
  }

  var mapOptions = {
    center: mapCenter,
    zoom: zoom
  };

  var map = new google.maps.Map(document.getElementById('gmap'), mapOptions);

  var marker1 = new google.maps.Marker({
    position: latlngFirst,
    icon: "public/images/marker.png",
    map: map
  });

  var marker2 = new google.maps.Marker({
    position: latlngSecond,
    icon: "public/images/marker.png",
    map: map
  });


}
google.maps.event.addDomListener(window, 'load', initialize);