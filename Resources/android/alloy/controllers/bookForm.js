function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "bookForm";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
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
        title: "Aqui va el formulario",
        top: "60dp",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var index = Alloy.createController("index").getView();
    $.bookForm.addEventListener("open", function() {
        var activity = $.bookForm.activity;
        if (Ti.Platform.Android && Alloy.Globals.Android.Api >= 11) {
            activity.actionBar.title = "Datos del Transfer";
            activity.actionBar.displayHomeAsUp = true;
            activity.actionBar.onHomeIconItemSelected = function() {
                $.bookForm.close();
                $.bookForm = null;
                win.open();
            };
        }
    });
    $.bookForm.addEventListener("android:back", function() {
        Ti.API.info("Log: back button from login to home");
        $.bookForm.close();
        $.bookForm = null;
        index.open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;