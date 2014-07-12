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
