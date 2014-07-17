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

