function Controller() {
    function clear() {
        $.searchPlace.hintText = "";
    }
    function fill() {
        $.searchPlace.hintText = "Busqueda rapida";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "searchLocation";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId17 = [];
    $.__views.__alloyId19 = Ti.UI.createWindow({
        title: "Favoritos",
        id: "__alloyId19"
    });
    var __alloyId21 = [];
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        id: "__alloyId22"
    });
    __alloyId21.push($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        text: "Casa",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        id: "__alloyId24"
    });
    __alloyId21.push($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        text: "Trabajo",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createTableViewRow({
        id: "__alloyId26"
    });
    __alloyId21.push($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        text: "Trabajo 2",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId20 = Ti.UI.createTableView({
        data: __alloyId21,
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId18 = Ti.UI.createTab({
        window: $.__views.__alloyId19,
        title: "Mis Favoritos",
        id: "__alloyId18"
    });
    __alloyId17.push($.__views.__alloyId18);
    $.__views.__alloyId29 = Ti.UI.createWindow({
        title: "Aeropuertos",
        id: "__alloyId29"
    });
    $.__views.searchPlace = Ti.UI.createSearchBar({
        backgroundColor: "white",
        hintText: "Busqueda rapida",
        id: "searchPlace",
        color: "black"
    });
    clear ? $.__views.searchPlace.addEventListener("focus", clear) : __defers["$.__views.searchPlace!focus!clear"] = true;
    fill ? $.__views.searchPlace.addEventListener("blur", fill) : __defers["$.__views.searchPlace!blur!fill"] = true;
    var __alloyId31 = [];
    $.__views.__alloyId32 = Ti.UI.createTableViewSection({
        headerTitle: "Ecuador",
        id: "__alloyId32"
    });
    __alloyId31.push($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        title: "UIO - Quito Mariscal Sucre ",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        title: "GYE - Guayaquil Simon Bolivar",
        id: "__alloyId34"
    });
    $.__views.__alloyId32.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        title: "CUE - Cuenca",
        id: "__alloyId35"
    });
    $.__views.__alloyId32.add($.__views.__alloyId35);
    $.__views.__alloyId30 = Ti.UI.createTableView({
        data: __alloyId31,
        search: $.__views.searchPlace,
        filterAttribute: "title",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId28 = Ti.UI.createTab({
        window: $.__views.__alloyId29,
        title: "Aeropuertos",
        id: "__alloyId28"
    });
    __alloyId17.push($.__views.__alloyId28);
    $.__views.__alloyId37 = Ti.UI.createWindow({
        title: "Direccion",
        backgroundColor: "white",
        id: "__alloyId37"
    });
    $.__views.__alloyId36 = Ti.UI.createTab({
        window: $.__views.__alloyId37,
        title: "Direccion",
        id: "__alloyId36"
    });
    __alloyId17.push($.__views.__alloyId36);
    $.__views.pickPlace = Ti.UI.createTabGroup({
        tabs: __alloyId17,
        id: "pickPlace"
    });
    $.__views.pickPlace && $.addTopLevelView($.__views.pickPlace);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.pickPlace.addEventListener("open", function() {
        var activity = $.pickPlace.activity;
        if (Ti.Platform.Android && Alloy.Globals.Android.Api >= 11) {
            activity.actionBar.title = "Desde";
            activity.actionBar.displayHomeAsUp = true;
            activity.actionBar.onHomeIconItemSelected = function() {
                $.pickPlace.close();
                $.pickPlace = null;
            };
        }
    });
    __defers["$.__views.searchPlace!focus!clear"] && $.__views.searchPlace.addEventListener("focus", clear);
    __defers["$.__views.searchPlace!blur!fill"] && $.__views.searchPlace.addEventListener("blur", fill);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;