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

    var flameIcon = L.icon({
      iconUrl: 'fire.png',
      iconSize: [24, 30],
      iconAnchor: [12, 12],
      shadowUrl: null
  });  
  
    var tokiIcon = L.icon({
      iconUrl: 'toki.png',
      iconSize: [35, 90],
      iconAnchor: [12, 39],
      shadowUrl: null
  });  
 
   var katipsIcon = L.icon({
      iconUrl: 'katips.png',
      iconSize: [35, 90],
      iconAnchor: [12, 39],
      shadowUrl: null
  });  
  
   var greenIcon = L.icon({
      iconUrl: 'green.png',
      iconSize: [35, 90],
      iconAnchor: [12, 39],
      shadowUrl: null
  });  

    var bike = L.icon({
      iconUrl: 'bike.png',
      iconSize: [30, 70],
      iconAnchor: [12, 39],
      shadowUrl: null
  });
  
  
  var config = {
      tileUrl : 'http://{s}.tiles.mapbox.com/v4/rukku.map-ynzkstd9/{z}/{x}/{y}.png',
      overlayTileUrl : 'http://{s}.tiles.mapbox.com/v3/intertwine.nyc_bike_overlay/{z}/{x}/{y}.png',
      tileAttrib : 'Map tiles &copy; Development Seed and Data from <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ',
      initLatLng : new L.LatLng(  14.654343736166062,  121.0664176940918), // NYC
      initZoom : 16,
      minZoom : 10,
      maxZoom : 17
  };

  
  var map = L.map('map', {minZoom: config.minZoom, maxZoom: config.maxZoom}),
      routeLines = [
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
[14.6549665247, 121.05871439]]),
      ], 
	  ikotroute = [
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
])],
	 tokiroute = [L.polyline([[14.6478251102, 121.071717739],
[14.6475448464, 121.071438789],
[14.647306103, 121.070837975],
[14.6471711609, 121.069968939],
[14.6471400204, 121.068938971],
[14.6480638531, 121.068938971],
[14.6485724784, 121.068949699],
[14.6489773018, 121.068971157],
[14.6494963051, 121.068735123],
[14.6500360672, 121.068520546],
[14.6504408878, 121.0683918],
[14.6511986271, 121.0683918],
[14.6519044641, 121.06857419],
[14.6524857399, 121.06867075],
[14.6524027006, 121.068359613],
[14.6522885215, 121.067941189],
[14.6521224427, 121.067576408],
[14.6518629444, 121.067125797],
[14.6513335667, 121.066782475],
[14.6508768478, 121.066782475],
[14.6503474678, 121.066803932],
[14.651748765, 121.065194607],
[14.6520290233, 121.06498003],
[14.6524546002, 121.06507659],
[14.6529216958, 121.065140963],
[14.6529632153, 121.064604521],
[14.6529113159, 121.06351018],
[14.6529528354, 121.0625875],
[14.6529216958, 121.062265635],
[14.6576444951, 121.062340736],
[14.6576652544, 121.062930822],
[14.6576341154, 121.063660383],
[14.6575510781, 121.064357758],
[14.6575510781, 121.06479764],
[14.6570528533, 121.064786911],
[14.6564923491, 121.06479764],
[14.6560564003, 121.064776182],
[14.6549561449, 121.064250469],
[14.6537001862, 121.064872742],
[14.6538039847, 121.06857419],
[14.6593571335, 121.068520546],
[14.659419411, 121.072458029],
[14.6592325784, 121.072779894],
[14.6575199391, 121.072704792],
[14.656108299, 121.07272625],
[14.6560771598, 121.068606377],
[14.6537728451, 121.068649292],
[14.6539493025, 121.072747707],
[14.6525376395, 121.07281208],
[14.6521120628, 121.072790623],
[14.6516242056, 121.072286367],
[14.6510948274, 121.071395874],
[14.6508976077, 121.071192026],
[14.6502955677, 121.071234941],
[14.6503474678, 121.072028875],
[14.6505446879, 121.072758436],
[14.6505758279, 121.073713303],
[14.6482922156, 121.073756218],
[14.6482506952, 121.072865725],
[14.6481365139, 121.072318554],
[14.647887391, 121.071825027],
])],
bonfireroute = [L.polyline([[14.6550755125, 121.072254181],
[14.6551040569, 121.072275639],
[14.6550781074, 121.072299778],
])],
katipsroute = [L.polyline([[14.6469531774, 121.074507236],
[14.647731689, 121.074453592],
[14.6505239279, 121.074464321],
[14.6521120628, 121.074464321],
[14.6534614494, 121.074432135],
[14.6547174095, 121.074571609],
[14.6566688042, 121.074517965],
[14.6574680407, 121.074464321],
[14.6575614578, 121.074314117],
[14.6575303187, 121.073681116],
[14.6575406984, 121.072769165],
[14.65919106, 121.072747707],
[14.6594090314, 121.072522402],
[14.659367513, 121.068552732],
[14.6574888001, 121.068563461],
[14.6560875395, 121.068563461],
[14.6561186788, 121.064829826],
[14.6549976641, 121.064304113],
[14.6548004479, 121.064293385],
[14.653710566, 121.064851284],
[14.653918163, 121.072769165],
[14.6544786738, 121.073069572],
[14.6550599428, 121.073133945],
[14.655693109, 121.073101759],
[14.6560979193, 121.072833538],
[14.656149818, 121.072736979],
[14.6575199391, 121.072694063],
[14.6575199391, 121.074239016],
[14.6560564003, 121.074239016],
[14.6541984186, 121.074271202],
[14.6520082635, 121.074314117],
[14.6506692479, 121.074335575],
[14.6491122428, 121.074303389],
[14.6480949934, 121.074314117],
[14.647659028, 121.074260473],
[14.646870136, 121.074303389],
[14.6453961458, 121.074410677],
[14.6445242033, 121.074517965],
[14.6434446507, 121.074614525],
[14.6419602571, 121.074560881],
[14.6403928097, 121.074496508],
[14.6392924756, 121.074453592],
[14.6380987107, 121.07437849],
[14.6367596102, 121.074281931],
[14.6355554508, 121.074271202],
[14.6350467953, 121.0741961],
[14.6347146115, 121.074120998],
[14.633821865, 121.074099541],
[14.6332301589, 121.074088812],
[14.632036361, 121.07401371],
[14.6317145535, 121.074002981],
[14.6318910286, 121.07437849],
[14.6336765338, 121.074410677],
[14.6349637494, 121.074550152],
[14.6360641052, 121.074528694],
[14.6366350423, 121.074528694],
[14.6375692999, 121.074560881],
[14.6393028562, 121.074614525],
[14.6413270512, 121.074700356],
[14.6422509084, 121.074743271],
[14.6431955224, 121.074796915],
[14.6437560607, 121.074818373],
[14.6442127945, 121.074700356],
[14.6454688075, 121.074550152],
[14.6469427972, 121.074421406],
])],
greenroute = [L.polyline([[14.6546758903, 121.057180166],
[14.6547485489, 121.05880022],
[14.6547693085, 121.060720682],
[14.6547900681, 121.062705517],
[14.6548108277, 121.064271927],
[14.6539908219, 121.064679623],
[14.6537417056, 121.064862013],
[14.6537417056, 121.06525898],
[14.6537728451, 121.066224575],
[14.6538143645, 121.068863869],
[14.6538351242, 121.070065498],
[14.6539077832, 121.072329283],
[14.6539596824, 121.072801352],
[14.6545513325, 121.07309103],
[14.6549872843, 121.073133945],
[14.655693109, 121.073112488],
[14.6559318434, 121.072962284],
[14.6561705775, 121.07272625],
[14.6591806804, 121.07272625],
[14.6594090314, 121.072533131],
[14.6593882722, 121.068552732],
[14.6574991797, 121.068552732],
[14.6560771598, 121.068563461],
[14.6561186788, 121.064851284],
[14.6549976641, 121.064293385],
[14.6549976641, 121.063188314],
[14.6549457651, 121.061042547],
[14.6549042459, 121.058875322],
[14.6548938661, 121.05733037], 
])],
ovalroute = [L.polyline([[14.6550339933, 121.064325571],
[14.6551170316, 121.064373851],
[14.6561290585, 121.064840555],
[14.6560875395, 121.068745852],
[14.6561394382, 121.071696281],
[14.6561394382, 121.072736979],
[14.6557553876, 121.073112488],
[14.6549665247, 121.073123217],
[14.654354116, 121.073015928],
[14.6539700622, 121.072779894],
[14.6539077832, 121.072136164],
[14.6539077832, 121.070945263],
[14.6538351242, 121.069153547],
[14.6538039847, 121.067587137],
[14.6538039847, 121.065945625],
[14.653783225, 121.064840555],
[14.6548315873, 121.064261198],
[14.6550080439, 121.064325571],
])]
,
     markers = [bikeIcon, personIcon, flameIcon];
     // markers = [];

  map.addLayer(new L.TileLayer(config.tileUrl, {attribution: config.tileAttrib}));
  map.addLayer(new L.TileLayer(config.overlayTileUrl));
  map.setView(config.initLatLng, config.initZoom);

  
/*
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
    //markers.push(marker);
	markers.push(personIcon);
	markers.push(bikeIcon);
	markers.push(flameIcon);

  };
 */
 
 //Katips
   function drawKatips(i, routeLine) {
    var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: katipsIcon,
      autoStart: true,
	  distance: 500,  // meters
	  interval: 2000, // milliseconds
      onEnd: function() {
	drawKatips(i, routeLine);
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
	markers.push(flameIcon);

  };
 
 	$.each(katipsroute, function(i, routeLine) {
   var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: katipsIcon,
      autoStart: true,
	  distance: 500,  // meters
	  interval: 2000, // milliseconds
      onEnd: function() {
		drawKatips(i, routeLine);
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
	 markers.push(flameIcon);
  });
 
 ///////////////////////////////////////////
    function drawGreen(i, routeLine) {
    var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: greenIcon,
      autoStart: true,
	  distance: 500,  // meters
	  interval: 2000, // milliseconds
      onEnd: function() {
	drawGreen(i, routeLine);
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
	markers.push(flameIcon);

  };
 
 	$.each(greenroute, function(i, routeLine) {
   var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: greenIcon,
      autoStart: true,
	  distance: 500,  // meters
	  interval: 2000, // milliseconds
      onEnd: function() {
		drawGreen(i, routeLine);
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
	 markers.push(flameIcon);
  });
 
 
 //////////////////////////////////////////
 ///////////////////////////////////////////
    function drawIkot(i, routeLine) {
    var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: tokiIcon,
      autoStart: true,
	  distance: 500,  // meters
	  interval: 2000, // milliseconds
      onEnd: function() {
	drawIkot(i, routeLine);
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
	markers.push(flameIcon);

  };
 
 	$.each(ikotroute, function(i, routeLine) {
   var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: tokiIcon,
      autoStart: true,
	  distance: 500,  // meters
	  interval: 2000, // milliseconds
      onEnd: function() {
		drawIkot(i, routeLine);
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
	 markers.push(flameIcon);
  });
 
 
 //////////////////////////////////////////
///////////////////////////////////////////
//Oval
    function drawBike(i, routeLine) {
    var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: bike,
      autoStart: true,
	  distance: 300,  // meters
	  interval: 2000, // milliseconds
      onEnd: function() {
	drawBike(i, routeLine);
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
	markers.push(flameIcon);

  };
 
 	$.each(ovalroute, function(i, routeLine) {
   var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: bike,
      autoStart: true,
	  distance: 300,  // meters
	  interval: 2000, // milliseconds
      onEnd: function() {
		drawBike(i, routeLine);
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
	 markers.push(flameIcon);
  });
 
 
 //////////////////////////////////////////


 
   function drawToki(i, routeLine) {
    var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: tokiIcon,
      autoStart: true,
	  distance: 500,  // meters
	  interval: 2000, // milliseconds
      onEnd: function() {
	drawToki(i, routeLine);
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
	markers.push(flameIcon);

  };
 
    function drawFire(i, routeLine) {
    var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: flameIcon,
      autoStart: true,
	  distance: 500,  // meters
	  interval: 2000, // milliseconds
      onEnd: function() {
	drawFire(i, routeLine);
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
	markers.push(flameIcon);

  };
 
  /*
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
	markers.push(flameIcon);
  });
*/
  
	$.each(tokiroute, function(i, routeLine) {
   var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: tokiIcon,
      autoStart: true,
	  distance: 500,  // meters
	  interval: 2000, // milliseconds
      onEnd: function() {
		drawToki(i, routeLine);
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
	 markers.push(flameIcon);
  });

	$.each(bonfireroute, function(i, routeLine) {
   var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: flameIcon,
      autoStart: true,
	  distance: 500,  // meters
	  interval: 2000, // milliseconds
      onEnd: function() {
		drawFire(i, routeLine);
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
	 markers.push(flameIcon);
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
