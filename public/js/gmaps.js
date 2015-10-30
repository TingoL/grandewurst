var latlngFirst = new google.maps.LatLng(44.81277518,20.42888403);
var latlngSecond = new google.maps.LatLng(44.82204486,20.46421409);
var mapCenter = new google.maps.LatLng(44.81752437, 20.44242382);


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
        icon: "public/images/marker.png",
        map: map
    });

    var marker2 = new google.maps.Marker({
        position: latlngSecond,
        icon: "public/images/marker.png",
        map: map
    });


    var firstReonOneCoordinates = [
    {lat: 44.82534749, lng: 20.42038679},
    {lat: 44.81612401, lng: 20.41193247},
    {lat: 44.80315385, lng: 20.43961287},
    {lat: 44.80531574, lng: 20.44240236},
    {lat: 44.81575869, lng: 20.44244528},
    {lat: 44.82534749, lng: 20.42038679}
  ];

  var firstReonOne = new google.maps.Polygon({
    path: firstReonOneCoordinates,
    geodesic: true,
    strokeOpacity: 0,
    strokeWeight: 2,
    fillColor: 'green',
    fillOpacity: 0.25
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
    {lat: 44.80315385, lng: 20.43961287},
    {lat: 44.81612401, lng: 20.41193247},
    {lat: 44.82534749, lng: 20.42038679}
  ];
  var firstReonTwo = new google.maps.Polygon({
    path: firstReonTwoCoordinates,
    geodesic: true,
    strokeOpacity: 0,
    strokeWeight: 2,
    fillColor: 'yellow',
    fillOpacity: 0.25
  });

  var secondReonOneCoordinates = [
    {lat: 44.81469317, lng: 20.44967651},
    {lat: 44.81530204, lng: 20.46478271},
    {lat: 44.81518027, lng: 20.47057629},
    {lat: 44.816261, lng: 20.47699213},
    {lat: 44.81941175, lng: 20.48388004},
    {lat: 44.82578884, lng: 20.48615456},
    {lat: 44.82988258, lng: 20.46630621},
    {lat: 44.83076521, lng: 20.45982599},
    {lat: 44.83088695, lng: 20.45394659},
    {lat: 44.83079565, lng: 20.45248747},
    {lat: 44.83023259, lng: 20.45022368},
    {lat: 44.82861949, lng: 20.44721961},
    {lat: 44.82711287, lng: 20.44573903},
    {lat: 44.82565187, lng: 20.44518113},
    {lat: 44.82431258, lng: 20.44533134},
    {lat: 44.8223797, lng: 20.44597507},
    {lat: 44.81992925, lng: 20.44784188},
    {lat: 44.8186355, lng: 20.44857144}
  ];

  var secondReonOne = new google.maps.Polygon({
    path: secondReonOneCoordinates,
    geodesic: true,
    strokeOpacity: 0,
    strokeWeight: 2,
    fillColor: 'green',
    fillOpacity: 0.25
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
    {lat: 44.82416039, lng: 20.49681902},
    {lat: 44.82578884, lng: 20.48615456},
    {lat: 44.81941175, lng: 20.48388004},
    {lat: 44.816261, lng: 20.47699213},
    {lat: 44.81518027, lng: 20.47057629},
    {lat: 44.81530204, lng: 20.46478271},
    {lat: 44.81469317, lng: 20.44967651},
    {lat: 44.81087236, lng: 20.44919372},
    {lat: 44.80810173, lng: 20.44818521},
  ];

  var secondReonTwo = new google.maps.Polygon({
    path: secondReonTwoCoordinates,
    geodesic: true,
    strokeOpacity: 0,
    strokeWeight: 2,
    fillColor: 'yellow',
    fillOpacity: 0.25
  });

  firstReonOne.setMap(map);
  firstReonTwo.setMap(map);
  secondReonOne.setMap(map);
  secondReonTwo.setMap(map);

  var labelOneNBG = new MapLabel({
    text: 'Reon 1',
    position: new google.maps.LatLng(44.8221514, 20.42491436),
    map: map,
    align: 'right',
    fontSize: 26,
    fontColor: 'darkgreen',
    strokeColor: 'black',
    strokeWeight: 4,
    minZoom: 14
  });
  
  var labelTwoNBG = new MapLabel({
    text: 'Reon 2',
    position: new google.maps.LatLng(44.81454095, 20.41246891),
    map: map,
    align: 'right',
    fontSize: 26,
    fontColor: 'yellow',
    strokeColor: 'black',
    strokeWeight: 6,
    minZoom: 14
  });

  var labelOneCNT = new MapLabel({
    text: 'Reon 1',
    position: new google.maps.LatLng(44.81947263, 20.46422482),
    map: map,
    align: 'right',
    fontSize: 26,
    fontColor: 'darkgreen',
    strokeColor: 'black',
    strokeWeight: 4,
    minZoom: 14
  });
  
  var labelTwoCNT = new MapLabel({
    text: 'Reon 2',
    position: new google.maps.LatLng(44.80930438, 20.47263622),
    map: map,
    align: 'right',
    fontSize: 26,
    fontColor: 'yellow',
    strokeColor: 'black',
    strokeWeight: 6,
    minZoom: 14
  });
  
   
}
google.maps.event.addDomListener(window, 'load', initialize);

