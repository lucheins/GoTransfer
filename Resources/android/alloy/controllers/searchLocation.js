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
    $.__views.starred = Ti.UI.createWindow({
        id: "starred"
    });
    row ? $.__views.starred.addEventListener("click", row) : __defers["$.__views.starred!click!row"] = true;
    var __alloyId18 = [];
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        title: "Casa",
        id: "__alloyId19"
    });
    __alloyId18.push($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        title: "Trabajo",
        id: "__alloyId20"
    });
    __alloyId18.push($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createTableViewRow({
        title: "Suegros",
        id: "__alloyId21"
    });
    __alloyId18.push($.__views.__alloyId21);
    $.__views.__alloyId17 = Ti.UI.createTableView({
        data: __alloyId18,
        id: "__alloyId17"
    });
    $.__views.starred.add($.__views.__alloyId17);
    $.__views.__alloyId16 = Ti.UI.createTab({
        window: $.__views.starred,
        title: "Mis Favoritos",
        id: "__alloyId16"
    });
    __alloyId15.push($.__views.__alloyId16);
    $.__views.air = Ti.UI.createWindow({
        id: "air"
    });
    row ? $.__views.air.addEventListener("click", row) : __defers["$.__views.air!click!row"] = true;
    var __alloyId24 = [];
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        title: "UIO - Quito Mariscal Sucre ",
        id: "__alloyId25"
    });
    __alloyId24.push($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createTableViewRow({
        title: "GYE - Guayaquil Simon Bolivar",
        id: "__alloyId26"
    });
    __alloyId24.push($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        title: "CUE - Cuenca",
        id: "__alloyId27"
    });
    __alloyId24.push($.__views.__alloyId27);
    $.__views.__alloyId23 = Ti.UI.createTableView({
        data: __alloyId24,
        id: "__alloyId23"
    });
    $.__views.air.add($.__views.__alloyId23);
    $.__views.__alloyId22 = Ti.UI.createTab({
        window: $.__views.air,
        title: "Aeropuertos",
        id: "__alloyId22"
    });
    __alloyId15.push($.__views.__alloyId22);
    $.__views.address = Ti.UI.createWindow({
        id: "address"
    });
    $.__views.mainSt = Ti.UI.createTextField({
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
    $.__views.basicSwitch = Ti.UI.createSwitch({
        value: true,
        id: "basicSwitch"
    });
    $.__views.address.add($.__views.basicSwitch);
    $.__views.__alloyId28 = Ti.UI.createTab({
        window: $.__views.address,
        title: "Direccion",
        id: "__alloyId28"
    });
    __alloyId15.push($.__views.__alloyId28);
    $.__views.pickPlace = Ti.UI.createTabGroup({
        tabs: __alloyId15,
        id: "pickPlace"
    });
    $.__views.pickPlace && $.addTopLevelView($.__views.pickPlace);
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
    __defers["$.__views.starred!click!row"] && $.__views.starred.addEventListener("click", row);
    __defers["$.__views.air!click!row"] && $.__views.air.addEventListener("click", row);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;