//var args = arguments[0] || {};
var index = Alloy.createController('index').getView();
    
$.bookForm.addEventListener('open', function(e) {
	var activity = $.bookForm.activity;
	if (Ti.Platform.Android){ 
	if( Alloy.Globals.Android.Api >= 11 ) {
	        activity.actionBar.title = "Datos del Transfer";
	        activity.actionBar.displayHomeAsUp = true; 
	        activity.actionBar.onHomeIconItemSelected = function() { 
			$.bookForm.close();
			$.bookForm = null;
			index.open();
			};
		}
	};
});

function next() {
    if(Ti.App.Properties.getString('user_id') == 0){
	Alloy.createController("index").getView().open();
	}
};

function searchLoc() {
	Alloy.createController("searchLocation").getView().open();
};

$.bookForm.addEventListener('android:back', function(e) {
    Ti.API.info("Log: back button from login to home");
 	$.bookForm.close();
 	$.bookForm = null;
	index.open();
  });
