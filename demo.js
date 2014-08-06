/*globals L $*/

// This demo is based off of cibi.me by OpenPlans and my earlier visualization
// at http://github.com/openplans/cibi_animation

(function(){
  var bikeIcon = L.icon({
      iconUrl: 'marker-bike-green-shadowed.png',
      iconSize: [25, 39],
      iconAnchor: [12, 39],
      shadowUrl: null
  });
  

    var personIcon = L.icon({
      iconUrl: 'active.pitch.large.png',
      iconSize: [35, 90],
      iconAnchor: [12, 39],
      shadowUrl: null
  });
  
  

  
  
  var config = {
      tileUrl : 'http://{s}.tiles.mapbox.com/v3/openplans.map-g4j0dszr/{z}/{x}/{y}.png',
      overlayTileUrl : 'http://{s}.tiles.mapbox.com/v3/intertwine.nyc_bike_overlay/{z}/{x}/{y}.png',
      tileAttrib : 'Routing powered by <a href="http://opentripplanner.org/">OpenTripPlanner</a>, Map tiles &copy; Development Seed and OpenStreetMap ',
      initLatLng : new L.LatLng(  14.654343736166062,  121.0664176940918), // NYC
      initZoom : 16,
      minZoom : 10,
      maxZoom : 17
  };

  
  var map = L.map('map', {minZoom: config.minZoom, maxZoom: config.maxZoom}),
      routeLines = [
        L.polyline([[14.6550288034, 121.073176861],
[14.6555477924, 121.073176861],
[14.6561913369, 121.072769165],
[14.6592637172, 121.072683334],
[14.6593882722, 121.072318554],
[14.659367513, 121.068563461],
[14.657457661, 121.068584919],
[14.6575614578, 121.064829826],
[14.6576860138, 121.062340736],
[14.6527244777, 121.062254906],
[14.647306103, 121.062254906],
[14.6476175074, 121.063392162],
[14.6476797883, 121.064078808],
[14.6476797883, 121.06498003],
[14.6479496717, 121.065773964],
[14.6479289115, 121.06626749],
[14.647659028, 121.067061424],
[14.6472230617, 121.067898273],
[14.6472230617, 121.068649292],
[14.6472230617, 121.068992615],
[14.648053473, 121.068928242],
[14.6485932386, 121.068949699],
[14.6489669217, 121.068949699],
[14.6496312457, 121.068606377],
[14.6503578478, 121.068456173],
[14.6507938078, 121.068348885],
[14.651520406, 121.068477631],
[14.652080923, 121.068606377],
[14.6524338404, 121.06867075],
[14.6524961198, 121.071717739],
[14.6539285428, 121.071653366],
[14.6539493025, 121.072640419],
[14.6542814572, 121.072940826],
[14.6548627267, 121.073133945],
]),
L.polyline([[14.6547381691, 121.058757305],
[14.6548627267, 121.064229012],
[14.6537417056, 121.064829826],
[14.6539493025, 121.072704792],
[14.6545720922, 121.073133945],
[14.6554024756, 121.073176861],
[14.6560460206, 121.072940826],
[14.656149818, 121.07272625],
[14.6592014396, 121.07272625],
[14.6594297905, 121.072490215],
[14.6594505497, 121.068520546],
[14.6560875395, 121.068584919],
[14.656149818, 121.064786911],
[14.6550080439, 121.064293385],
[14.6549665247, 121.05871439]])
      ],
      markers = [bikeIcon, personIcon];

  map.addLayer(new L.TileLayer(config.tileUrl, {attribution: config.tileAttrib}));
  map.addLayer(new L.TileLayer(config.overlayTileUrl));
  map.setView(config.initLatLng, config.initZoom);

  

  function drawLine(i, routeLine) {
    var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: markers.shift(),
      autoStart: true,
	  distance: 500,  // meters
	  interval: 2000, // milliseconds
      onEnd: function() {
	drawLine(i, routeLine);
	  $(this._shadow).fadeOut();
        $(this._icon).fadeOut(100, function(){
          map.removeLayer(this);
		  
        });
      }
    });

    map.addLayer(marker);
//    markers.push(marker);
	markers.push(personIcon);
	markers.push(bikeIcon);
  };
 
   $.each(routeLines, function(i, routeLine) {
   var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: markers.shift(),
      autoStart: true,
	  distance: 500,  // meters
	  interval: 2000, // milliseconds
      onEnd: function() {
		drawLine(i, routeLine);
	  $(this._shadow).fadeOut();
       $(this._icon).fadeOut(100, function(){
         map.removeLayer(this);
        });
      }
    });

    map.addLayer(marker);
    //markers.push(marker);
	markers.push(personIcon);
	markers.push(bikeIcon);

  });
 
  
 $(function() {
  $('#start').click(function() {
    console.log('start');
    $.each(markers, function(i, marker) {
      marker.start();
    });

    $(this).hide();
  });
 });
}());