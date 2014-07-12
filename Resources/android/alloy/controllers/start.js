function Controller() {
    function __alloyId33() {
        $.__views.movableView.removeEventListener("open", __alloyId33);
        if ($.__views.movableView.activity) $.__views.movableView.activity.onCreateOptionsMenu = function(e) {
            var __alloyId28 = {
                title: "All",
                id: "__alloyId27"
            };
            $.__views.__alloyId27 = e.menu.add(_.pick(__alloyId28, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId27.applyProperties(_.omit(__alloyId28, Alloy.Android.menuItemCreateArgs));
            var __alloyId30 = {
                title: "Active",
                id: "__alloyId29"
            };
            $.__views.__alloyId29 = e.menu.add(_.pick(__alloyId30, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId29.applyProperties(_.omit(__alloyId30, Alloy.Android.menuItemCreateArgs));
            var __alloyId32 = {
                title: "Done",
                id: "__alloyId31"
            };
            $.__views.__alloyId31 = e.menu.add(_.pick(__alloyId32, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId31.applyProperties(_.omit(__alloyId32, Alloy.Android.menuItemCreateArgs));
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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
    $.__views.__alloyId17 = Ti.UI.createButton({
        title: "Cancel",
        top: "30dp",
        id: "__alloyId17"
    });
    $.__views.movableView.add($.__views.__alloyId17);
    closeWindow ? $.__views.__alloyId17.addEventListener("click", closeWindow) : __defers["$.__views.__alloyId17!click!closeWindow"] = true;
    $.__views.movableView.addEventListener("open", __alloyId33);
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
    __defers["$.__views.__alloyId17!click!closeWindow"] && $.__views.__alloyId17.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;