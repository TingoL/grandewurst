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
      {lat: 44.8369128, lng: 20.41788697},
      {lat: 44.83732363, lng: 20.41762948},
      {lat: 44.83872347, lng: 20.41196465},
      {lat: 44.83548248, lng: 20.40962577},
      {lat: 44.83501077, lng: 20.40147185},
      {lat: 44.83012607, lng: 20.39949775},
      {lat: 44.81609356, lng: 20.39506674},
      {lat: 44.81140515, lng: 20.39652586},
      {lat: 44.80409778, lng: 20.39974451},
      {lat: 44.79609858, lng: 20.40089652},
      {lat: 44.79683517, lng: 20.40488631},
      {lat: 44.79696459, lng: 20.40536374},
      {lat: 44.79702169, lng: 20.40571779},
      {lat: 44.79703692, lng: 20.40595919},
      {lat: 44.7970293, lng: 20.40710717},
      {lat: 44.7972577, lng: 20.40781528},
      {lat: 44.7978363, lng: 20.41155964},
      {lat: 44.79796573, lng: 20.41324407},
      {lat: 44.79796573, lng: 20.41324407},
      {lat: 44.79803044, lng: 20.41471392},
      {lat: 44.7980076, lng: 20.41608185},
      {lat: 44.79796192, lng: 20.41752487},
      {lat: 44.79790863, lng: 20.41821688},
      {lat: 44.79781727, lng: 20.41877478},
      {lat: 44.79776398, lng: 20.41918784},
      {lat: 44.79769927, lng: 20.42021781},
      {lat: 44.79768404, lng: 20.42063087},
      {lat: 44.79780585, lng: 20.42223483},
      {lat: 44.79792385, lng: 20.42445034},
      {lat: 44.79822457, lng: 20.42712718},
      {lat: 44.7983578, lng: 20.42788893},
      {lat: 44.79840348, lng: 20.42861849},
      {lat: 44.79843393, lng: 20.42869359},
      {lat: 44.7985291, lng: 20.4288438},
      {lat: 44.80036762, lng: 20.43456227},
      {lat: 44.80061504, lng: 20.43551177},
      {lat: 44.80157424, lng: 20.43735713},
      {lat: 44.80328326, lng: 20.43994278},
      {lat: 44.80433376, lng: 20.43813765},
      {lat: 44.80590949, lng: 20.44020832},
      {lat: 44.8091217, lng: 20.44322312},
      {lat: 44.81028627, lng: 20.44396341},
      {lat: 44.81128337, lng: 20.44425309},
      {lat: 44.81186945, lng: 20.44455349},
      {lat: 44.81323946, lng: 20.44489682},
      {lat: 44.81460945, lng: 20.44488609},
      {lat: 44.81426696, lng: 20.43943584},
      {lat: 44.81573586, lng: 20.43924272},
      {lat: 44.81659587, lng: 20.4388994},
      {lat: 44.81718189, lng: 20.43840587},
      {lat: 44.8176918, lng: 20.43769777},
      {lat: 44.82498223, lng: 20.42134702},
      {lat: 44.82591059, lng: 20.42039752},

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
    {lat: 44.8369128, lng: 20.41788697},
    {lat: 44.83732363, lng: 20.41762948},
    {lat: 44.83872347, lng: 20.41196465},
    {lat: 44.83548248, lng: 20.40962577},
    {lat: 44.83501077, lng: 20.40147185},
    {lat: 44.83012607, lng: 20.39949775},
    {lat: 44.81609356, lng: 20.39506674},
    {lat: 44.81140515, lng: 20.39652586},
    {lat: 44.80409778, lng: 20.39974451},
    {lat: 44.79609858, lng: 20.40089652},
    {lat: 44.79555612, lng: 20.396837},
    {lat: 44.79517545, lng: 20.38951993},
    {lat: 44.79491659, lng: 20.38756728},
    {lat: 44.79405625, lng: 20.38381755},
    {lat: 44.79311215, lng: 20.38113534},
    {lat: 44.79300936, lng: 20.38089126},
    {lat: 44.79265913, lng: 20.38030118},
    {lat: 44.78940412, lng: 20.37471414},
    {lat: 44.79461204, lng: 20.37080884},
    {lat: 44.79551044, lng: 20.36990762},
    {lat: 44.7966829, lng: 20.36919951},
    {lat: 44.80243827, lng: 20.36462903},
    {lat: 44.8099742, lng: 20.36143184},
    {lat: 44.81096369, lng: 20.36085248},
    {lat: 44.8136733, lng: 20.36012292},
    {lat: 44.81559125, lng: 20.36014438},
    {lat: 44.81693074, lng: 20.36031604},
    {lat: 44.82263843, lng: 20.36190391},
    {lat: 44.82183178, lng: 20.36752582},
    {lat: 44.83694323, lng: 20.37154913},
    {lat: 44.83609113, lng: 20.37476778},
    {lat: 44.84318145, lng: 20.37661314},
    {lat: 44.84211643, lng: 20.38459539},
    {lat: 44.84990579, lng: 20.38622618},
    {lat: 44.84963197, lng: 20.39051771},
    {lat: 44.84929729, lng: 20.39167643},
    {lat: 44.85547332, lng: 20.39532423},
    {lat: 44.85459107, lng: 20.39845705},
    {lat: 44.85017962, lng: 20.40991545},
    {lat: 44.84841494, lng: 20.41339159},
    {lat: 44.84716747, lng: 20.4151082},
    {lat: 44.84284673, lng: 20.41849852},
    {lat: 44.83925602, lng: 20.41927099},
    {lat: 44.83712582, lng: 20.41952848},



    
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
    position: new google.maps.LatLng(44.8276303, 20.41579485),
    map: map,
    align: 'right',
    fontSize: 26,
    fontColor: 'darkgreen',
    strokeColor: 'black',
    strokeWeight: 4,
    minZoom: 13
  });
  
  var labelTwoNBG = new MapLabel({
    text: 'Reon 2',
    position: new google.maps.LatLng(44.81033955, 20.3823638),
    map: map,
    align: 'right',
    fontSize: 26,
    fontColor: 'yellow',
    strokeColor: 'black',
    strokeWeight: 6,
    minZoom: 13
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

