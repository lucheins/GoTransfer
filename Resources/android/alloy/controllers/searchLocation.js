function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function row(e) {
        var arg = {
            title: e.rowData.title,
            from: from
        };
        var desde = Alloy.createController("bookForm", arg).getView();
        $.pickPlace.close();
        desde.open();
    }
    function gpsWait() {
        setTimeout(function() {
            $.gps.hide();
        }, 5e3);
    }
    function gpsDone() {
        clearTimeout(gpsloading);
        $.gps.hide();
    }
    function removeLocation() {
        Titanium.Geolocation.removeEventListener("location", getLocation);
        Ti.API.info("locationservices stopped");
    }
    function fillLocation() {
        Titanium.Geolocation.addEventListener("location", getLocation);
        $.gps.show();
        gpsWait();
    }
    function getLocation() {
        Titanium.Geolocation.getCurrentPosition(function(e) {
            if (!e.success || e.error) alert("currentPosition error"); else {
                longitude = e.coords.longitude;
                latitude = e.coords.latitude;
                if (e.success) {
                    Ti.API.info("locationservices started");
                    removeLocation();
                }
                Titanium.Platform.Android ? Titanium.Yahoo.yql('select * from yahoo.maps.findLocation where q="' + latitude + "," + longitude + '" and gflags="R"', function(e) {
                    var casa = e.data.json.ResultSet.Results.house;
                    var calle = e.data.json.ResultSet.Results.street;
                    var radius = e.data.json.ResultSet.Results.radius;
                    var quality = e.data.json.ResultSet.Results.quality;
                    alert("Te encuentras en: " + calle + " #" + casa + " La calidad del satelite de tu GPS es de: " + quality + " Margen de error de tu GPS: " + radius + " metros");
                }) : Titanium.Geolocation.reverseGeocoder(latitude, longitude, function(evt) {
                    if (evt.success) {
                        var places = evt.places;
                        if (places && places.length) {
                            gpsDone();
                            var place = places[0].address;
                            alert("Current location " + place);
                        } else alert("No address found");
                    }
                });
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "searchLocation";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId15 = [];
    $.__views.address = Ti.UI.createWindow({
        id: "address"
    });
    $.__views.gps = Ti.UI.createActivityIndicator({
        top: 40,
        width: "100%",
        height: 40,
        id: "gps",
        message: "Loading..."
    });
    $.__views.address.add($.__views.gps);
    $.__views.mainSt = Ti.UI.createTextField({
        top: 20,
        width: "100%",
        id: "mainSt"
    });
    $.__views.address.add($.__views.mainSt);
    $.__views.stNumber = Ti.UI.createTextField({
        id: "stNumber"
    });
    $.__views.address.add($.__views.stNumber);
    $.__views.secondSt = Ti.UI.createTextField({
        id: "secondSt"
    });
    $.__views.address.add($.__views.secondSt);
    $.__views.Reference = Ti.UI.createTextField({
        id: "Reference"
    });
    $.__views.address.add($.__views.Reference);
    $.__views.__alloyId16 = Ti.UI.createTab({
        window: $.__views.address,
        title: "Direccion",
        id: "__alloyId16"
    });
    __alloyId15.push($.__views.__alloyId16);
    $.__views.starred = Ti.UI.createWindow({
        id: "starred"
    });
    row ? $.__views.starred.addEventListener("click", row) : __defers["$.__views.starred!click!row"] = true;
    var __alloyId19 = [];
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        title: "Casa",
        id: "__alloyId20"
    });
    __alloyId19.push($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createTableViewRow({
        title: "Trabajo",
        id: "__alloyId21"
    });
    __alloyId19.push($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        title: "Suegros",
        id: "__alloyId22"
    });
    __alloyId19.push($.__views.__alloyId22);
    $.__views.__alloyId18 = Ti.UI.createTableView({
        data: __alloyId19,
        id: "__alloyId18"
    });
    $.__views.starred.add($.__views.__alloyId18);
    $.__views.__alloyId17 = Ti.UI.createTab({
        window: $.__views.starred,
        title: "Mis Favoritos",
        id: "__alloyId17"
    });
    __alloyId15.push($.__views.__alloyId17);
    $.__views.air = Ti.UI.createWindow({
        id: "air"
    });
    row ? $.__views.air.addEventListener("click", row) : __defers["$.__views.air!click!row"] = true;
    var __alloyId25 = [];
    $.__views.__alloyId26 = Ti.UI.createTableViewRow({
        title: "UIO - Quito Mariscal Sucre ",
        id: "__alloyId26"
    });
    __alloyId25.push($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        title: "GYE - Guayaquil Simon Bolivar",
        id: "__alloyId27"
    });
    __alloyId25.push($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        title: "CUE - Cuenca",
        id: "__alloyId28"
    });
    __alloyId25.push($.__views.__alloyId28);
    $.__views.__alloyId24 = Ti.UI.createTableView({
        data: __alloyId25,
        id: "__alloyId24"
    });
    $.__views.air.add($.__views.__alloyId24);
    $.__views.__alloyId23 = Ti.UI.createTab({
        window: $.__views.air,
        title: "Aeropuertos",
        id: "__alloyId23"
    });
    __alloyId15.push($.__views.__alloyId23);
    $.__views.pickPlace = Ti.UI.createTabGroup({
        tabs: __alloyId15,
        id: "pickPlace"
    });
    $.__views.pickPlace && $.addTopLevelView($.__views.pickPlace);
    fillLocation ? $.__views.pickPlace.addEventListener("open", fillLocation) : __defers["$.__views.pickPlace!open!fillLocation"] = true;
    removeLocation ? $.__views.pickPlace.addEventListener("close", removeLocation) : __defers["$.__views.pickPlace!close!removeLocation"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var from = args.clicked || "";
    $.pickPlace.addEventListener("open", function() {
        var activity = $.pickPlace.activity;
        if (Ti.Platform.Android && Alloy.Globals.Android.Api >= 11) {
            activity.actionBar.title = "Atras";
            activity.actionBar.displayHomeAsUp = true;
            activity.actionBar.onHomeIconItemSelected = function() {
                $.pickPlace.close();
                $.pickPlace = null;
            };
        }
    });
    var longitude;
    var latitude;
    var gpsloading;
    __defers["$.__views.starred!click!row"] && $.__views.starred.addEventListener("click", row);
    __defers["$.__views.air!click!row"] && $.__views.air.addEventListener("click", row);
    __defers["$.__views.pickPlace!open!fillLocation"] && $.__views.pickPlace.addEventListener("open", fillLocation);
    __defers["$.__views.pickPlace!close!removeLocation"] && $.__views.pickPlace.addEventListener("close", removeLocation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;