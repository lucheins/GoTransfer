function Controller() {
    function __alloyId17() {
        $.__views.startWin.removeEventListener("open", __alloyId17);
        if ($.__views.startWin.activity) $.__views.startWin.activity.onCreateOptionsMenu = function(e) {
            var __alloyId12 = {
                title: "All",
                id: "__alloyId11"
            };
            $.__views.__alloyId11 = e.menu.add(_.pick(__alloyId12, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId11.applyProperties(_.omit(__alloyId12, Alloy.Android.menuItemCreateArgs));
            var __alloyId14 = {
                title: "Active",
                id: "__alloyId13"
            };
            $.__views.__alloyId13 = e.menu.add(_.pick(__alloyId14, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId13.applyProperties(_.omit(__alloyId14, Alloy.Android.menuItemCreateArgs));
            var __alloyId16 = {
                title: "Done",
                id: "__alloyId15"
            };
            $.__views.__alloyId15 = e.menu.add(_.pick(__alloyId16, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId15.applyProperties(_.omit(__alloyId16, Alloy.Android.menuItemCreateArgs));
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
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Cancel",
        top: "30dp",
        id: "__alloyId1"
    });
    $.__views.startWin.add($.__views.__alloyId1);
    closeWindow ? $.__views.__alloyId1.addEventListener("click", closeWindow) : __defers["$.__views.__alloyId1!click!closeWindow"] = true;
    $.__views.startWin.addEventListener("open", __alloyId17);
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
    __defers["$.__views.__alloyId1!click!closeWindow"] && $.__views.__alloyId1.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;