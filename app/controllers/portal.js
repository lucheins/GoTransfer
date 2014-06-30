var args = arguments[0] || {};
	
$.portal.addEventListener('open', function(e) {
	var activity = $.portal.activity;
	if (Ti.Platform.Android){ 
	if( Alloy.Globals.Android.Api >= 11 ) {
	        activity.actionBar.title = "Identificacion";
	        activity.actionBar.displayHomeAsUp = true; 
	        activity.actionBar.onHomeIconItemSelected = function() { 
			$.portal.close();
			$.portal = null;
			
			};
		}
	};
});

function login() {
    // Ti.App.Properties.setString('user_id', '0');
    Alloy.createController("login").getView().open();
};
function register() {
    // Ti.App.Properties.setString('user_id', '0');
    Alloy.createController("register").getView().open();
};

