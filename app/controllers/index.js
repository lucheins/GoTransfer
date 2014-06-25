// Use the Alloy.Globals.Facebook namespace to make Facebook module API calls
// var facebook = Alloy.Globals.Facebook;
// facebook.appid = 238640849675744;
// // facebook.permissions = ['publish_stream'];
// 
// facebook.addEventListener('login', function(e) {
    // if (e.success) {
        // Alloy.createController("start").getView().open();
    // }
// });
// 


$.index.addEventListener('open', function(e) {
if(Alloy.Globals.USERID == 0){
	Alloy.createController("login").getView().open();
}; 

var activity = $.index.activity;
if (Ti.Platform.Android){ 
if( Alloy.Globals.Android.Api >= 11 ) {
        activity.actionBar.title = "GoTransfer";
        activity.actionBar.displayHomeAsUp = false;  
}
}
});


$.index.open();

function next() {
    // Ti.App.Properties.setString('user_id', '0');
    Alloy.createController("register").getView().open();
}
