var latlngFirst = new google.maps.LatLng(44.810131,20.426845);
var latlngSecond = new google.maps.LatLng(44.8048328,20.4815196);
var mapCenter = new google.maps.LatLng(44.8087301, 20.4503202)


function initialize() {
	  var mq = window.matchMedia( "(min-width: 768px)" );
    var zoom;
    if (mq.matches) {
      zoom = 13; }
    else {
      zoom = 12;
    }

    var mapOptions= {
        center: mapCenter,
        zoom: zoom
    };

    var map = new google.maps.Map(document.getElementById('gmap'), mapOptions);

    var marker1 = new google.maps.Marker({
        position: latlngFirst,
        icon: "public/images/marker.png"
    });

    var marker2 = new google.maps.Marker({
        position: latlngSecond,
        icon: "public/images/marker.png"
    });

    marker1.setMap(map);
    marker2.setMap(map);

    var circle1;
    var circle2;

    var circle1 = new google.maps.Circle({
      strokeColor: '#005636',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#006b43',
      fillOpacity: 0.35,
      map: map,
      center: latlngFirst,
      radius: 900
    });

    var circle2 = new google.maps.Circle({
      strokeColor: '#b26126',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#f58634',
      fillOpacity: 0.35,
      map: map,
      center: latlngSecond,
      radius: 900
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

