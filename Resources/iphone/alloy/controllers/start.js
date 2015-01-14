function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function closeWindow() {
        $.startWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "start";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.startWin = Ti.UI.createWindow({
        id: "startWin",
        backgroundColor: "white"
    });
    $.__views.startWin && $.addTopLevelView($.__views.startWin);
    $.__views.movableView = Ti.UI.createView({
        top: 40,
        zIndex: 100,
        width: "100%",
        id: "movableView",
        backgroundColor: "white"
    });
    $.__views.startWin.add($.__views.movableView);
    $.__views.__alloyId6 = Ti.UI.createButton({
        title: "Cancel",
        top: "30dp",
        id: "__alloyId6"
    });
    $.__views.movableView.add($.__views.__alloyId6);
    closeWindow ? $.__views.__alloyId6.addEventListener("click", closeWindow) : __defers["$.__views.__alloyId6!click!closeWindow"] = true;
    $.__views.footer = Ti.UI.createView({
        id: "footer",
        height: "40dp"
    });
    $.__views.movableView.add($.__views.footer);
    var __alloyId8 = [];
    var __alloyId12 = {
        title: "All"
    };
    __alloyId8.push(__alloyId12);
    var __alloyId13 = {
        title: "Active"
    };
    __alloyId8.push(__alloyId13);
    var __alloyId14 = {
        title: "Done"
    };
    __alloyId8.push(__alloyId14);
    $.__views.tabbedbar = Ti.UI.iOS.createTabbedBar({
        labels: __alloyId8,
        id: "tabbedbar"
    });
    $.__views.footer.add($.__views.tabbedbar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var facebook = Alloy.Globals.Facebook;
    facebook.appid = 0xd90ae712e5e0;
    facebook.addEventListener("login", function(e) {
        e.success || $.startWin.close();
    });
    $.startWin.addEventListener("open", function() {
        var user = Ti.App.Properties.getString("user_id");
        alert(user);
        var activity = $.startWin.activity;
        if (Ti.Platform.Android && Alloy.Globals.Android.Api >= 11) {
            activity.actionBar.title = "GoTransfer";
            activity.actionBar.displayHomeAsUp = true;
            activity.actionBar.onHomeIconItemSelected = function() {
                $.startWin.close();
            };
        }
    });
    __defers["$.__views.__alloyId6!click!closeWindow"] && $.__views.__alloyId6.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;