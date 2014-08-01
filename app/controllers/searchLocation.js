var args = arguments[0] || {};
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



function getLocation() {
	if(Ti.Geolocation.locationServicesEnabled == true) {
		Titanium.Geolocation.addEventListener('location', function(e){
		if (!e.success || e.error)
    {
        alert("currentPosition error");
    } else {
    	longitude = e.coords.longitude;
    	latitude = e.coords.latitude;
    	
    	Titanium.Yahoo.yql('select * from yahoo.maps.findLocation where q="'+latitude+','+longitude+'" and gflags="R"',function(e) {
		var woeid = e.data.ResultSet.Results.woeid;
		Titanium.API.info(woeid);
		});
    		}//end else
		});	
		}//end if locationservices	
		else {
			alert('location services not enabled');
		}
	} //END getLocation		
