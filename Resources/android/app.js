var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.Facebook = require("facebook");

Alloy.Globals.Android = {
    Api: Ti.Platform.Android.API_LEVEL
};

Alloy.Globals.DOMAIN = "http://www.luca-mobile.com/mundial/";

Alloy.Globals.URL_LOGIN = "index.php?option=com_mobile&task=startSessionUser";

Alloy.Globals.URL_REGISTER = "index.php?option=com_mobile&task=register";

Alloy.Globals.USER = "GoTraLucaMk1981";

Alloy.Globals.PASS = "#TaxiVan+2014";

Alloy.Globals.USER_MOBILE = Ti.Utils.base64encode(Alloy.Globals.USER + "$@$" + Alloy.Globals.PASS);

Alloy.Globals.USERID = Ti.App.Properties.getString("user_id");

Alloy.Globals.USERNAME = Ti.App.Properties.getString("username");

Alloy.createController("index");