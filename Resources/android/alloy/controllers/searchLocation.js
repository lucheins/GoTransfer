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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId34 = [];
    $.__views.starred = Ti.UI.createWindow({
        id: "starred"
    });
    row ? $.__views.starred.addEventListener("click", row) : __defers["$.__views.starred!click!row"] = true;
    var __alloyId37 = [];
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        title: "Casa",
        id: "__alloyId38"
    });
    __alloyId37.push($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        title: "Trabajo",
        id: "__alloyId39"
    });
    __alloyId37.push($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        title: "Suegros",
        id: "__alloyId40"
    });
    __alloyId37.push($.__views.__alloyId40);
    $.__views.__alloyId36 = Ti.UI.createTableView({
        data: __alloyId37,
        id: "__alloyId36"
    });
    $.__views.starred.add($.__views.__alloyId36);
    $.__views.__alloyId35 = Ti.UI.createTab({
        window: $.__views.starred,
        title: "Mis Favoritos",
        id: "__alloyId35"
    });
    __alloyId34.push($.__views.__alloyId35);
    $.__views.air = Ti.UI.createWindow({
        id: "air"
    });
    row ? $.__views.air.addEventListener("click", row) : __defers["$.__views.air!click!row"] = true;
    var __alloyId43 = [];
    $.__views.__alloyId44 = Ti.UI.createTableViewRow({
        title: "UIO - Quito Mariscal Sucre ",
        id: "__alloyId44"
    });
    __alloyId43.push($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createTableViewRow({
        title: "GYE - Guayaquil Simon Bolivar",
        id: "__alloyId45"
    });
    __alloyId43.push($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createTableViewRow({
        title: "CUE - Cuenca",
        id: "__alloyId46"
    });
    __alloyId43.push($.__views.__alloyId46);
    $.__views.__alloyId42 = Ti.UI.createTableView({
        data: __alloyId43,
        id: "__alloyId42"
    });
    $.__views.air.add($.__views.__alloyId42);
    $.__views.__alloyId41 = Ti.UI.createTab({
        window: $.__views.air,
        title: "Aeropuertos",
        id: "__alloyId41"
    });
    __alloyId34.push($.__views.__alloyId41);
    $.__views.address = Ti.UI.createWindow({
        id: "address"
    });
    row ? $.__views.address.addEventListener("click", row) : __defers["$.__views.address!click!row"] = true;
    var __alloyId49 = [];
    $.__views.__alloyId50 = Ti.UI.createTableViewRow({
        title: "Casa",
        id: "__alloyId50"
    });
    __alloyId49.push($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createTableViewRow({
        title: "Trabajo",
        id: "__alloyId51"
    });
    __alloyId49.push($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createTableViewRow({
        title: "Suegros",
        id: "__alloyId52"
    });
    __alloyId49.push($.__views.__alloyId52);
    $.__views.__alloyId48 = Ti.UI.createTableView({
        data: __alloyId49,
        id: "__alloyId48"
    });
    $.__views.address.add($.__views.__alloyId48);
    $.__views.__alloyId47 = Ti.UI.createTab({
        window: $.__views.address,
        title: "Direccion",
        id: "__alloyId47"
    });
    __alloyId34.push($.__views.__alloyId47);
    $.__views.pickPlace = Ti.UI.createTabGroup({
        tabs: __alloyId34,
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
    __defers["$.__views.address!click!row"] && $.__views.address.addEventListener("click", row);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;