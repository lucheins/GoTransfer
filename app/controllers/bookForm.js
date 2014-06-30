//var args = arguments[0] || {};

$.bookForm.addEventListener('open', function(e) {
	var activity = $.bookForm.activity;
	if (Ti.Platform.Android){ 
	if( Alloy.Globals.Android.Api >= 11 ) {
	        activity.actionBar.title = "Datos del Transfer";
	        activity.actionBar.displayHomeAsUp = true; 
	        activity.actionBar.onHomeIconItemSelected = function() { 
			$.bookForm.close();
			$.bookForm = null;
			
			};
		}
	};
});

function logout() {
    Ti.App.Properties.setString('user_id', '0');
    
};

