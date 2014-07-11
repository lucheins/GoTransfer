function Controller() {
    function searchLoc() {
        Alloy.createController("searchLocation").getView().open();
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
        id: "bookForm"
    });
    $.__views.bookForm && $.addTopLevelView($.__views.bookForm);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.bookForm.add($.__views.__alloyId0);
    $.__views.desde = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        keyboardType: "Titanium.UI.KEYBOARD_DEFAULT",
        returnKeyType: "Titanium.UI.RETURNKEY_DEFAULT",
        color: "#336699",
        hintText: "Desde",
        top: "20%",
        width: "50%",
        height: "10%",
        left: "5%",
        border: 1,
        borderColor: "#c1c1c1",
        paddingLeft: 5,
        id: "desde"
    });
    $.__views.__alloyId0.add($.__views.desde);
    $.__views.pickUp = Ti.UI.createView({
        top: "20%",
        width: "10dp",
        right: "5%",
        height: "10%",
        backgroundColor: "blue",
        id: "pickUp"
    });
    $.__views.__alloyId0.add($.__views.pickUp);
    searchLoc ? $.__views.pickUp.addEventListener("click", searchLoc) : __defers["$.__views.pickUp!click!searchLoc"] = true;
    $.__views.hasta = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        keyboardType: "Titanium.UI.KEYBOARD_DEFAULT",
        returnKeyType: "Titanium.UI.RETURNKEY_DEFAULT",
        color: "#336699",
        hintText: "Hasta",
        top: "40%",
        width: "50%",
        height: "10%",
        left: "5%",
        border: 1,
        borderColor: "#c1c1c1",
        paddingLeft: 5,
        id: "hasta"
    });
    $.__views.__alloyId0.add($.__views.hasta);
    $.__views.dropOff = Ti.UI.createView({
        top: "40%",
        width: "10dp",
        right: "5%",
        height: "10%",
        backgroundColor: "blue",
        id: "dropOff"
    });
    $.__views.__alloyId0.add($.__views.dropOff);
    searchLoc ? $.__views.dropOff.addEventListener("click", searchLoc) : __defers["$.__views.dropOff!click!searchLoc"] = true;
    $.__views.when = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        keyboardType: "Titanium.UI.KEYBOARD_DEFAULT",
        returnKeyType: "Titanium.UI.RETURNKEY_DEFAULT",
        color: "#336699",
        hintText: "Hoy",
        top: "60%",
        width: "50%",
        height: "10%",
        left: "5%",
        border: 1,
        borderColor: "#c1c1c1",
        paddingLeft: 5,
        id: "when"
    });
    $.__views.__alloyId0.add($.__views.when);
    $.__views.howMany = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        keyboardType: "Titanium.UI.KEYBOARD_DEFAULT",
        returnKeyType: "Titanium.UI.RETURNKEY_DEFAULT",
        color: "#336699",
        hintText: "Pasajeros",
        top: "90%",
        width: "50%",
        height: "10%",
        left: "5%",
        border: 1,
        borderColor: "#c1c1c1",
        paddingLeft: 5,
        id: "howMany"
    });
    $.__views.__alloyId0.add($.__views.howMany);
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
                index.open();
            };
        }
    });
    $.bookForm.addEventListener("android:back", function() {
        Ti.API.info("Log: back button from login to home");
        $.bookForm.close();
        $.bookForm = null;
        index.open();
    });
    __defers["$.__views.pickUp!click!searchLoc"] && $.__views.pickUp.addEventListener("click", searchLoc);
    __defers["$.__views.dropOff!click!searchLoc"] && $.__views.dropOff.addEventListener("click", searchLoc);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;