var latlngFirst = new google.maps.LatLng(44.810131,20.426845);
var latlngSecond = new google.maps.LatLng(44.8048328,20.4815196);

function initialize() {
	
    var mapOptionsFirst = {
        center: latlngFirst,
        zoom: 13
    };
    var mapOptionsSecond = {
        center: latlngSecond,
        zoom: 13
    };
    var map1 = new google.maps.Map(document.getElementById('map-canvas-first'), mapOptionsFirst);
    var map2 = new google.maps.Map(document.getElementById('map-canvas-second'), mapOptionsSecond);

    var marker1 = new google.maps.Marker({
        position: latlngFirst,
        icon: "public/images/marker.png"
    });

    var marker2 = new google.maps.Marker({
        position: latlngSecond,
        icon: "public/images/marker.png"
    });

    marker1.setMap(map1);
    marker2.setMap(map2)

    var circle1;
    var circle2;

    var circle1 = new google.maps.Circle({
      strokeColor: '#005636',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#006b43',
      fillOpacity: 0.35,
      map: map1,
      center: latlngFirst,
      radius: 900
    });

    var circle2 = new google.maps.Circle({
      strokeColor: '#b26126',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#f58634',
      fillOpacity: 0.35,
      map: map2,
      center: latlngSecond,
      radius: 900
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

