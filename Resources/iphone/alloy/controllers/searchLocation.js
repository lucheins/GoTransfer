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
    $.__views.pickPlace = Ti.UI.createWindow({
        id: "pickPlace"
    });
    $.__views.pickPlace && $.addTopLevelView($.__views.pickPlace);
    row ? $.__views.pickPlace.addEventListener("click", row) : __defers["$.__views.pickPlace!click!row"] = true;
    $.__views.movableView = Ti.UI.createView({
        top: 40,
        zIndex: 100,
        width: "100%",
        id: "movableView",
        backgroundColor: "white"
    });
    $.__views.pickPlace.add($.__views.movableView);
    var __alloyId15 = [];
    $.__views.starred = Ti.UI.createView({
        id: "starred"
    });
    __alloyId15.push($.__views.starred);
    var __alloyId17 = [];
    $.__views.__alloyId18 = Ti.UI.createTableViewRow({
        title: "Casa",
        id: "__alloyId18"
    });
    __alloyId17.push($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        title: "Trabajo",
        id: "__alloyId19"
    });
    __alloyId17.push($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        title: "Suegros",
        id: "__alloyId20"
    });
    __alloyId17.push($.__views.__alloyId20);
    $.__views.__alloyId16 = Ti.UI.createTableView({
        data: __alloyId17,
        id: "__alloyId16"
    });
    $.__views.starred.add($.__views.__alloyId16);
    $.__views.air = Ti.UI.createView({
        id: "air"
    });
    __alloyId15.push($.__views.air);
    var __alloyId22 = [];
    $.__views.__alloyId23 = Ti.UI.createTableViewSection({
        headerTitle: "Aeropuertos",
        id: "__alloyId23"
    });
    __alloyId22.push($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        title: "UIO - Quito Mariscal Sucre ",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        title: "GYE - Guayaquil Simon Bolivar",
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createTableViewRow({
        title: "CUE - Cuenca",
        id: "__alloyId26"
    });
    $.__views.__alloyId23.add($.__views.__alloyId26);
    $.__views.__alloyId21 = Ti.UI.createTableView({
        data: __alloyId22,
        filterAttribute: "title",
        id: "__alloyId21"
    });
    $.__views.air.add($.__views.__alloyId21);
    $.__views.address = Ti.UI.createView({
        id: "address"
    });
    __alloyId15.push($.__views.address);
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
    outputState ? $.__views.basicSwitch.addEventListener("change", outputState) : __defers["$.__views.basicSwitch!change!outputState"] = true;
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId15,
        id: "scrollableView"
    });
    $.__views.movableView.add($.__views.scrollableView);
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
    __defers["$.__views.pickPlace!click!row"] && $.__views.pickPlace.addEventListener("click", row);
    __defers["$.__views.basicSwitch!change!outputState"] && $.__views.basicSwitch.addEventListener("change", outputState);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;