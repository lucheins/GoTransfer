function Controller() {
    function next() {
        Alloy.createController("login").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createButton({
        title: "Open",
        top: "60dp",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    next ? $.__views.__alloyId0.addEventListener("click", next) : __defers["$.__views.__alloyId0!click!next"] = true;
    $.__views.fbButton = Alloy.Globals.Facebook.createLoginButton({
        id: "fbButton",
        ns: "Alloy.Globals.Facebook"
    });
    $.__views.index.add($.__views.fbButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.addEventListener("open", function() {
        var activity = $.index.activity;
        if (Ti.Platform.Android && Alloy.Globals.Android.Api >= 11) {
            activity.actionBar.title = "GoTransfer";
            activity.actionBar.displayHomeAsUp = false;
        }
    });
    $.index.open();
    __defers["$.__views.__alloyId0!click!next"] && $.__views.__alloyId0.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;