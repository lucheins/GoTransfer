$.pickPlace.addEventListener('open', function(e) {
	var activity = $.pickPlace.activity;
	if (Ti.Platform.Android){ 
	if( Alloy.Globals.Android.Api >= 11 ) {
	        activity.actionBar.title = "Desde";
	        activity.actionBar.displayHomeAsUp = true; 
	        activity.actionBar.onHomeIconItemSelected = function() { 
			$.pickPlace.close();
			$.pickPlace = null;
			
			};
		}
	};
});
function clear(){
	$.searchPlace.hintText = "";
};

function fill(){
	$.searchPlace.hintText = "Busqueda rapida";
}