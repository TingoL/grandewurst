var latlngFirst = new google.maps.LatLng(44.81277518,20.42888403);
var latlngSecond = new google.maps.LatLng(44.82204486,20.46421409);
var mapCenter = new google.maps.LatLng(44.81874204, 20.4462862)


function initialize() {
	  var mq = window.matchMedia( "(min-width: 768px)" );
    var zoom;
    if (mq.matches) {
      zoom = 14; }
    else {
      zoom = 13;
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


    var firstReonOneCoordinates = [
    {lat: 44.82534749, lng: 20.42038679},
    {lat: 44.81612401, lng: 20.41193247},
    {lat: 44.80315385, lng: 20.43961287},
    {lat: 44.80531574, lng: 20.44240236},
    {lat: 44.81575869, lng: 20.44244528},
    {lat: 44.82534749, lng: 20.42038679}
  ];
  var firstReonOne = new google.maps.Polyline({
    path: firstReonOneCoordinates,
    geodesic: true,
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  var firstReonTwoCoordinates = [
    {lat: 44.82534749, lng: 20.42038679},
    {lat: 44.83125217, lng: 20.41897058},
    {lat: 44.83128261, lng: 20.3998518},
    {lat: 44.81597179, lng: 20.39491653},
    {lat: 44.80458497, lng: 20.39937973},
    {lat: 44.80339744, lng: 20.42242527},
    {lat: 44.80111367, lng: 20.42532206},
    {lat: 44.80147908, lng: 20.43716669},
    {lat: 44.80315385, lng: 20.43961287}
  ];
  var firstReonTwo = new google.maps.Polyline({
    path: firstReonTwoCoordinates,
    geodesic: true,
    strokeColor: '#D15F27',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  firstReonOne.setMap(map);
  firstReonTwo.setMap(map);

   
}
google.maps.event.addDomListener(window, 'load', initialize);

