var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.Facebook = require("facebook");

Alloy.Globals.DOMAIN = "http://www.luca-mobile.com/mundial/";

Alloy.Globals.URL_LOGIN = "index.php?option=com_mobile&task=startSessionUser";

Alloy.Globals.USER = "GoTraLucaMk1981";

Alloy.Globals.PASS = "#TaxiVan+2014";

Alloy.Globals.USER_MOBILE = Ti.Utils.base64encode(Alloy.Globals.USER + "$#$" + Alloy.Globals.PASS);

Alloy.createController("index");