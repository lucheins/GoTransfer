function Controller() {
    function logout() {
        Ti.App.Properties.setString("user_id", "0");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "bookForm";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.bookForm = Ti.UI.createWindow({
        id: "bookForm",
        backgroundColor: "white"
    });
    $.__views.bookForm && $.addTopLevelView($.__views.bookForm);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.bookForm.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Logout",
        top: "60dp",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    logout ? $.__views.__alloyId1.addEventListener("click", logout) : __defers["$.__views.__alloyId1!click!logout"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.bookForm.addEventListener("open", function() {
        var activity = $.bookForm.activity;
        if (Ti.Platform.Android && Alloy.Globals.Android.Api >= 11) {
            activity.actionBar.title = "Datos del Transfer";
            activity.actionBar.displayHomeAsUp = true;
            activity.actionBar.onHomeIconItemSelected = function() {
                $.bookForm.close();
                $.bookForm = null;
            };
        }
    });
    __defers["$.__views.__alloyId1!click!logout"] && $.__views.__alloyId1.addEventListener("click", logout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;