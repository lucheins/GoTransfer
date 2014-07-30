function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function searchLoc(e) {
        var arg = {
            clicked: e.source.id
        };
        Alloy.createController("searchLocation", arg).getView().open();
    }
    function NavRules() {
        Ti.Geolocation.headingFilter = 10;
        Ti.Geolocation.Android.manualMode = true;
        var gpsProvider = Ti.Geolocation.Android.createLocationProvider({
            name: Ti.Geolocation.PROVIDER_GPS,
            minUpdateDistance: 0,
            minUpdateTime: 0
        });
        Ti.Geolocation.Android.addLocationProvider(gpsProvider);
        var networkProvider = Ti.Geolocation.Android.createLocationProvider({
            name: Ti.Geolocation.PROVIDER_NETWORK,
            minUpdateTime: 3,
            minUpdateDistance: 30
        });
        Ti.Geolocation.Android.addLocationProvider(networkProvider);
        var gpsRule = Ti.Geolocation.Android.createLocationRule({
            provider: Ti.Geolocation.PROVIDER_GPS,
            accuracy: 10,
            maxAge: 5e3,
            minAge: 3e3
        });
        Ti.Geolocation.Android.addLocationRule(gpsRule);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "bookForm";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.bookForm = Ti.UI.createWindow({
        id: "bookForm"
    });
    $.__views.bookForm && $.addTopLevelView($.__views.bookForm);
    $.__views.movableView = Ti.UI.createView({
        top: 0,
        zIndex: 100,
        width: "100%",
        id: "movableView",
        backgroundColor: "white"
    });
    $.__views.bookForm.add($.__views.movableView);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.movableView.add($.__views.__alloyId0);
    $.__views.desde = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "#336699",
        hintText: "Desde",
        top: "5%",
        width: "70%",
        height: "10%",
        left: "5%",
        border: 1,
        borderColor: "#c1c1c1",
        paddingLeft: 5,
        id: "desde",
        enabled: "false"
    });
    $.__views.__alloyId0.add($.__views.desde);
    searchLoc ? $.__views.desde.addEventListener("click", searchLoc) : __defers["$.__views.desde!click!searchLoc"] = true;
    $.__views.pickUp = Ti.UI.createView({
        top: "5%",
        width: "15%",
        right: "5%",
        height: "10%",
        backgroundColor: "black",
        id: "pickUp"
    });
    $.__views.__alloyId0.add($.__views.pickUp);
    searchLoc ? $.__views.pickUp.addEventListener("click", searchLoc) : __defers["$.__views.pickUp!click!searchLoc"] = true;
    $.__views.hasta = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "#336699",
        hintText: "Hasta",
        top: "20%",
        width: "70%",
        height: "10%",
        left: "5%",
        border: 1,
        borderColor: "#c1c1c1",
        paddingLeft: 5,
        id: "hasta",
        enabled: "false"
    });
    $.__views.__alloyId0.add($.__views.hasta);
    searchLoc ? $.__views.hasta.addEventListener("click", searchLoc) : __defers["$.__views.hasta!click!searchLoc"] = true;
    $.__views.dropOff = Ti.UI.createView({
        top: "20%",
        width: "15%",
        right: "5%",
        height: "10%",
        backgroundColor: "black",
        id: "dropOff"
    });
    $.__views.__alloyId0.add($.__views.dropOff);
    searchLoc ? $.__views.dropOff.addEventListener("click", searchLoc) : __defers["$.__views.dropOff!click!searchLoc"] = true;
    $.__views.when = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "#336699",
        hintText: "Hoy",
        top: "35%",
        width: "70%",
        height: "10%",
        left: "5%",
        border: 1,
        borderColor: "#c1c1c1",
        paddingLeft: 5,
        id: "when",
        enabled: "false"
    });
    $.__views.__alloyId0.add($.__views.when);
    $.__views.howMany = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "#336699",
        hintText: "Pasajeros",
        top: "50%",
        width: "70%",
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
    var args = arguments[0] || {};
    var index = Alloy.createController("index").getView();
    $.bookForm.addEventListener("open", function() {
        var activity = $.bookForm.activity;
        if (Ti.Platform.Android && Alloy.Globals.Android.Api >= 11) {
            activity.actionBar.title = "Datos del Transfer";
            activity.actionBar.displayHomeAsUp = true;
            activity.actionBar.onHomeIconItemSelected = function() {
                Ti.App.Properties.setString("desde", "");
                Ti.App.Properties.setString("hasta", "");
                $.bookForm.close();
                $.bookForm = null;
                index.open();
            };
        }
        if ("pickUp" == args.from || "desde" == args.from) {
            $.desde.value = args.title || "";
            Ti.App.Properties.setString("desde", args.title);
        } else $.desde.value = Ti.App.Properties.getString("desde", args.title);
        if ("dropOff" == args.from || "hasta" == args.from) {
            $.hasta.value = args.title || "";
            Ti.App.Properties.setString("hasta", args.title);
        } else $.hasta.value = Ti.App.Properties.getString("hasta", args.title);
    });
    $.bookForm.addEventListener("android:back", function() {
        Ti.API.info("Log: back button from login to home");
        Ti.App.Properties.setString("desde", "");
        Ti.App.Properties.setString("hasta", "");
        $.bookForm.close();
        $.bookForm = null;
        index.open();
    });
    Ti.UI.createAlertDialog({
        title: "GPS Limitada",
        message: "Activa el GPS para poder utilizar el servicio de mapas",
        ok: "OK"
    });
    Ti.UI.createAlertDialog({
        title: "Buscando GPS",
        message: "Utiliza la app en tu auto o sal a un espacio abierto",
        ok: "OK"
    });
    NavRules();
    var getLocation = function(e) {
        if (!e.success || e.error) return;
        var longitude = e.coords.longitude;
        var latitude = e.coords.latitude;
        Titanium.Geolocation.reverseGeocoder(latitude, longitude, function(evt) {
            if (evt.success) {
                var places = evt.places;
                if (places && places.length) {
                    var place = places[0].address;
                    alert("Current location " + place);
                } else alert("No address found");
            }
        });
    };
    Ti.Geolocation.addEventListener("location", getLocation);
    __defers["$.__views.desde!click!searchLoc"] && $.__views.desde.addEventListener("click", searchLoc);
    __defers["$.__views.pickUp!click!searchLoc"] && $.__views.pickUp.addEventListener("click", searchLoc);
    __defers["$.__views.hasta!click!searchLoc"] && $.__views.hasta.addEventListener("click", searchLoc);
    __defers["$.__views.dropOff!click!searchLoc"] && $.__views.dropOff.addEventListener("click", searchLoc);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;