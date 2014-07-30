var args = arguments[0] || {};

var index = Alloy.createController('index').getView();
    
$.bookForm.addEventListener('open', function(e) {
	var activity = $.bookForm.activity;
	if (Ti.Platform.Android){ 
	if( Alloy.Globals.Android.Api >= 11 ) {
	        activity.actionBar.title = "Datos del Transfer";
	        activity.actionBar.displayHomeAsUp = true; 
	        activity.actionBar.onHomeIconItemSelected = function() {
	        Ti.App.Properties.setString('desde', ''); 
			Ti.App.Properties.setString('hasta', '');
			$.bookForm.close();
			$.bookForm = null;
			index.open();
			};
		}
	};
	//we send the id of the button clicked below in function searchLoc to the next window, then we read it back
	//here. Don so that the same window can be used for 2 different pickers.
	// A string is set with setString in order to preserve the value added to the textfield
	if(args.from == "pickUp" || args.from == "desde"){
		$.desde.value = args.title || '';
		Ti.App.Properties.setString('desde', args.title);
	} else {
		$.desde.value = Ti.App.Properties.getString('desde', args.title);
	}
	if(args.from == "dropOff" || args.from == "hasta"){
		$.hasta.value = args.title || '';
		Ti.App.Properties.setString('hasta', args.title);
	} else {
		$.hasta.value = Ti.App.Properties.getString('hasta', args.title);
	}
});

function next() {
    if(Ti.App.Properties.getString('user_id') == 0){
	Alloy.createController("index").getView().open();
	}
};
var fillText;
function searchLoc(e) {
	var arg = {
        clicked: e.source.id,
    	};
	Alloy.createController("searchLocation", arg).getView().open();
};

$.bookForm.addEventListener('android:back', function(e) {
    Ti.API.info("Log: back button from login to home");
    Ti.App.Properties.setString('desde', ''); 
	Ti.App.Properties.setString('hasta', '');
 	$.bookForm.close();
 	$.bookForm = null;
	index.open();
  });

function NavRules(){
Ti.Geolocation.headingFilter = 10;

//ANDROID NAV
if(Ti.Platform.osname  ==  'android') {

   	Ti.Geolocation.Android.manualMode = true;
   	// modify only the gps
    var gpsProvider = Ti.Geolocation.Android.createLocationProvider({
        name: Ti.Geolocation.PROVIDER_GPS,
        minUpdateDistance: 0.0,
    	minUpdateTime: 0
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
	    accuracy: 10,
	    // Updates should be no older than 30 seconds
	    maxAge: 5000,
	    // But  no more frequent than once per 10 seconds
	    minAge: 3000,
	});
	Ti.Geolocation.Android.addLocationRule(gpsRule);
	
	
	}
	
//IOS NAV
else {
    Ti.Geolocation.distanceFilter    =    10;
    Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
    Ti.Geolocation.accuracy    =    Ti.Geolocation.ACCURACY_BEST;
    Ti.Geolocation.purpose    =    Ti.Locale.getString('gps_purpose');
	}
}//END NavRules

var gpsApagado = Ti.UI.createAlertDialog({
						title: 'GPS Limitada',
						message: 'Activa el GPS para poder utilizar el servicio de mapas',	
					    ok: 'OK'
				});
var gpsLow = Ti.UI.createAlertDialog({
						title: 'Buscando GPS',
						message: 'Utiliza la app en tu auto o sal a un espacio abierto',	
					    ok: 'OK'
				});


NavRules();


var getLocation = function(e)
{
    if (!e.success || e.error)
    {
        return;
    }
 
    var longitude = e.coords.longitude;
    var latitude = e.coords.latitude;
    
    // reverse geo
    Titanium.Geolocation.reverseGeocoder(latitude,longitude,function(evt)
    {
        if (evt.success) {
            var places = evt.places;
            if (places && places.length) {
                //reverseGeo.text = places[0].address;
                var place = places[0].address;
                alert("Current location "+place);
            } else {
                //reverseGeo.text = "No address found";
                alert("No address found");
            }
            //Ti.API.debug("reverse geolocation result = "+JSON.stringify(evt));
        }
        else {              
        }
    });
 
};//END FUNCTION GEOLOCATION

//IF ANDROID

	Ti.Geolocation.addEventListener('location', getLocation);  							
