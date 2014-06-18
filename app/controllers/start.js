function closeWindow() {
    $.startWin.close();
}

var facebook = Alloy.Globals.Facebook;
facebook.appid = 238640849675744;
// facebook.permissions = ['publish_stream'];

facebook.addEventListener('login', function(e) {
    if (!e.success) {
        $.startWin.close();
    }
});


$.startWin.addEventListener('open', function(e) {
var activity = $.startWin.activity;
if (Ti.Platform.Android){  
    if( Alloy.Globals.Android.Api >= 11 ) {
        activity.actionBar.title = "GoTransfer";
        activity.actionBar.displayHomeAsUp = true; 
        activity.actionBar.onHomeIconItemSelected = function() {
            $.startWin.close();
        }; 
      } 
   }
});


