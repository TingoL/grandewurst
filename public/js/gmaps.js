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
    strokeWeight: 3
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
    strokeWeight: 3
  });


  var secondReonOneCoordinates = [
    {lat: 44.81469317, lng: 20.44967651},
    {lat: 44.81530204, lng: 20.46478271},
    {lat: 44.81518027, lng: 20.47057629},
    {lat: 44.816261, lng: 20.47699213},
    {lat: 44.81941175, lng: 20.48388004},
    {lat: 44.82578884, lng: 20.48615456}
  ];

  var secondReonOne = new google.maps.Polyline({
    path: secondReonOneCoordinates,
    geodesic: true,
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 3
  });

   var secondReonTwoCoordinates = [
    {lat: 44.80501125, lng: 20.44605017},
    {lat: 44.80537664, lng: 20.46004057},
    {lat: 44.80562023, lng: 20.46501875},
    {lat: 44.80625964, lng: 20.47267914},
    {lat: 44.80820829, lng: 20.48160553},
    {lat: 44.80939572, lng: 20.48400879},
    {lat: 44.8111007, lng: 20.48709869},
    {lat: 44.81204451, lng: 20.4890728},
    {lat: 44.8142974, lng: 20.49199104},
    {lat: 44.81481494, lng: 20.49254894},
    {lat: 44.81612401, lng: 20.49332142},
    {lat: 44.81752437, lng: 20.4943943},
    {lat: 44.82032498, lng: 20.49559593},
    {lat: 44.82239492, lng: 20.4966259},
    {lat: 44.82424409, lng: 20.49676538},
    {lat: 44.82416039, lng: 20.49681902}
  ];

  var secondReonTwo = new google.maps.Polyline({
    path: secondReonTwoCoordinates,
    geodesic: true,
    strokeColor: '#D15F27',
    strokeOpacity: 1.0,
    strokeWeight: 3
  });

 

  firstReonOne.setMap(map);
  firstReonTwo.setMap(map);
  secondReonOne.setMap(map);
  secondReonTwo.setMap(map);
  
   
}
google.maps.event.addDomListener(window, 'load', initialize);

