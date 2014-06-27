function Controller() {
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
    $.__views.footer = Ti.UI.createView({
        id: "footer",
        height: "40dp"
    });
    $.__views.startWin.add($.__views.footer);
    var __alloyId3 = [];
    var __alloyId7 = {
        title: "All",
        ns: "Alloy.Abstract"
    };
    __alloyId3.push(__alloyId7);
    var __alloyId8 = {
        title: "Active",
        ns: "Alloy.Abstract"
    };
    __alloyId3.push(__alloyId8);
    var __alloyId9 = {
        title: "Done",
        ns: "Alloy.Abstract"
    };
    __alloyId3.push(__alloyId9);
    $.__views.tabbedbar = Ti.UI.iOS.createTabbedBar({
        labels: __alloyId3,
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
    __defers["$.__views.__alloyId1!click!closeWindow"] && $.__views.__alloyId1.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;