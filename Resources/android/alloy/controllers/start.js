function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId14() {
        $.__views.movableView.removeEventListener("open", __alloyId14);
        if ($.__views.movableView.activity) $.__views.movableView.activity.onCreateOptionsMenu = function(e) {
            var __alloyId9 = {
                title: "All",
                id: "__alloyId8"
            };
            $.__views.__alloyId8 = e.menu.add(_.pick(__alloyId9, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId8.applyProperties(_.omit(__alloyId9, Alloy.Android.menuItemCreateArgs));
            var __alloyId11 = {
                title: "Active",
                id: "__alloyId10"
            };
            $.__views.__alloyId10 = e.menu.add(_.pick(__alloyId11, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId10.applyProperties(_.omit(__alloyId11, Alloy.Android.menuItemCreateArgs));
            var __alloyId13 = {
                title: "Done",
                id: "__alloyId12"
            };
            $.__views.__alloyId12 = e.menu.add(_.pick(__alloyId13, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId12.applyProperties(_.omit(__alloyId13, Alloy.Android.menuItemCreateArgs));
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function closeWindow() {
        $.startWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "start";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
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
        top: 0,
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
    $.__views.movableView.addEventListener("open", __alloyId14);
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