// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
// Loads the Facebook module, which can be referenced by Alloy.Globals.Facebook
Alloy.Globals.Facebook = require('facebook');
if( OS_ANDROID ) {
    Alloy.Globals.Android = { 
        "Api" : Ti.Platform.Android.API_LEVEL
    };
}
Alloy.Globals.DOMAIN = 'http://www.luca-mobile.com/mundial/';
Alloy.Globals.URL_LOGIN = 'index.php?option=com_mobile&task=startSessionUser';
Alloy.Globals.URL_REGISTER = 'index.php?option=com_mobile&task=register';
Alloy.Globals.USER = 'GoTraLucaMk1981';
Alloy.Globals.PASS = '#TaxiVan+2014';
Alloy.Globals.USER_MOBILE = Ti.Utils.base64encode(Alloy.Globals.USER + '$@$' + Alloy.Globals.PASS);

Alloy.Globals.USERID = Ti.App.Properties.getString('user_id');
Alloy.Globals.USERNAME = Ti.App.Properties.getString('username');


