function Controller() {
    function __alloyId34() {
        $.__views.startWin.removeEventListener("open", __alloyId34);
        if ($.__views.startWin.activity) $.__views.startWin.activity.onCreateOptionsMenu = function(e) {
            var __alloyId29 = {
                title: "All",
                id: "__alloyId28"
            };
            $.__views.__alloyId28 = e.menu.add(_.pick(__alloyId29, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId28.applyProperties(_.omit(__alloyId29, Alloy.Android.menuItemCreateArgs));
            var __alloyId31 = {
                title: "Active",
                id: "__alloyId30"
            };
            $.__views.__alloyId30 = e.menu.add(_.pick(__alloyId31, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId30.applyProperties(_.omit(__alloyId31, Alloy.Android.menuItemCreateArgs));
            var __alloyId33 = {
                title: "Done",
                id: "__alloyId32"
            };
            $.__views.__alloyId32 = e.menu.add(_.pick(__alloyId33, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId32.applyProperties(_.omit(__alloyId33, Alloy.Android.menuItemCreateArgs));
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
    $.__views.__alloyId18 = Ti.UI.createButton({
        title: "Cancel",
        top: "30dp",
        id: "__alloyId18"
    });
    $.__views.startWin.add($.__views.__alloyId18);
    closeWindow ? $.__views.__alloyId18.addEventListener("click", closeWindow) : __defers["$.__views.__alloyId18!click!closeWindow"] = true;
    $.__views.startWin.addEventListener("open", __alloyId34);
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
    __defers["$.__views.__alloyId18!click!closeWindow"] && $.__views.__alloyId18.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;