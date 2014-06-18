var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.Facebook = require("facebook");

Alloy.Globals.Android = {
    Api: Ti.Platform.Android.API_LEVEL
};

Alloy.createController("index");