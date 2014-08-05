 mvar args = arguments[0] || {};
var from = args.clicked || '';
$.pickPlace.addEventListener('open', function(e) {
	var activity = $.pickPlace.activity;
	if (Ti.Platform.Android){ 
	if( Alloy.Globals.Android.Api >= 11 ) {
	        activity.actionBar.title = "Atras";
	        activity.actionBar.displayHomeAsUp = true; 
	        activity.actionBar.onHomeIconItemSelected = function() { 
			$.pickPlace.close();
			$.pickPlace = null;
			
			};
		}
	};
	
});
// function clear(){
	// $.searchPlace.hintText = "";
// };
// 
// function fill(){
	// $.searchPlace.hintText = "Busqueda rapida";
// }


function row(e){
	var arg = {
        title: e.rowData.title,
        from: from,
    	};	
    var desde = Alloy.createController('bookForm', arg).getView();
    $.pickPlace.close();
    desde.open();
};

var longitude;
var latitude;
// // demonstrates manual mode:
// var providerGps = Ti.Geolocation.Android.createLocationProvider({
    // name: Ti.Geolocation.PROVIDER_GPS,
    // minUpdateDistance: 0.0,
    // minUpdateTime: 0
// });
// Ti.Geolocation.Android.addLocationProvider(providerGps);
// Ti.Geolocation.Android.manualMode = true;

function NavRules(){
Ti.Geolocation.headingFilter = 10;

//ANDROID NAV
if(Ti.Platform.osname  ==  'android') {

   	Ti.Geolocation.Android.manualMode = true;
   	// modify only the gps
    var gpsProvider = Ti.Geolocation.Android.createLocationProvider({
        name: Ti.Geolocation.PROVIDER_GPS,
        minUpdateDistance: 30.0,
    	minUpdateTime: 3
    });
    Ti.Geolocation.Android.addLocationProvider(gpsProvider);
 
    //modify network
   	var networkProvider = Ti.Geolocation.Android.createLocationProvider({
	    name: Ti.Geolocation.PROVIDER_NETWORK,
	    minUpdateTime: 3, 
	    minUpdateDistance: 30
	});
	
	Ti.Geolocation.Android.addLocationProvider(networkProvider);
	
	//Declare location rules
	var gpsRule = Ti.Geolocation.Android.createLocationRule({
	    // NO PROVIDER SPECIFIED IN ORDER TO MAKE IT A GENERAL RULE FOR ALL PROVIDERS
	    provider: Ti.Geolocation.PROVIDER_GPS,
	    // Updates should be accurate to 100m
	    accuracy: 100,
	    // Updates should be no older than 30 seconds
	    maxAge: 5000,
	    // But  no more frequent than once per 10 seconds
	    minAge: 3000,
	});
	Ti.Geolocation.Android.addLocationRule(gpsRule);
	}
	
//IOS NAV
else {
    Ti.Geolocation.distanceFilter    =    30;
    Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
    Ti.Geolocation.accuracy    =    Ti.Geolocation.ACCURACY_BEST;
    Ti.Geolocation.purpose    =    'Acceso a ubicacion GPS';
	}
}//END NavRules

var gpsloading;

function gpsWait() {
    var gpsloading = setTimeout(function(){
        $.gps.hide();
    }, 5000);
}

function gpsDone() {
    clearTimeout(gpsloading);
    $.gps.hide();
}
    
function removeLocation() {	
	Titanium.Geolocation.removeEventListener('location', getLocation);
	Ti.API.info('locationservices stopped');
};


function fillLocation (){
	Titanium.Geolocation.addEventListener('location', getLocation);
	$.gps.show();
   	gpsWait();
}


function getLocation() {
	
		Titanium.Geolocation.getCurrentPosition(function(e){
		if (!e.success || e.error)
	    {
	        alert("currentPosition error");
	    } else {
	    	longitude = e.coords.longitude;
	    	latitude = e.coords.latitude;
	    	if (e.success){
	    		Ti.API.info('locationservices started');
	    		removeLocation();
	    	}
    		
    		
		if (Titanium.Platform.Android){
			Titanium.Yahoo.yql('select * from yahoo.maps.findLocation where q="'+latitude+','+longitude+'" and gflags="R"',function(e) {
			
			var casa = e.data.json.ResultSet.Results.house;
			var calle = e.data.json.ResultSet.Results.street;
			var radius = e.data.json.ResultSet.Results.radius;
			var quality = e.data.json.ResultSet.Results.quality;
				alert("Te encuentras en: "+calle+" #"+casa+" La calidad del satelite de tu GPS es de: "+quality+" Margen de error de tu GPS: "+radius+" metros");
			});
		} else {
    	Titanium.Geolocation.reverseGeocoder(latitude,longitude,function(evt)
	    {
	        if (evt.success) {
	            var places = evt.places;
	            if (places && places.length) {
	                //reverseGeo.text = places[0].address;
	                gpsDone();
	                var place = places[0].address;
	                alert("Current location "+place);
	            } else {
	                //reverseGeo.text = "No address found";
	                alert("No address found");
	            }
	            //Ti.API.debug("reverse geolocation result = "+JSON.stringify(evt));
	        }
	    });
	   	} //end else if android
    	}//end else location listener isnt error
    		
		});	//end location

	}; //END getLocation		
