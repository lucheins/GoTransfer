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
    var __alloyId27 = [];
    $.__views.starred = Ti.UI.createView({
        id: "starred"
    });
    __alloyId27.push($.__views.starred);
    var __alloyId29 = [];
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        title: "Casa",
        id: "__alloyId30"
    });
    __alloyId29.push($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createTableViewRow({
        title: "Trabajo",
        id: "__alloyId31"
    });
    __alloyId29.push($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        title: "Suegros",
        id: "__alloyId32"
    });
    __alloyId29.push($.__views.__alloyId32);
    $.__views.__alloyId28 = Ti.UI.createTableView({
        data: __alloyId29,
        id: "__alloyId28"
    });
    $.__views.starred.add($.__views.__alloyId28);
    $.__views.air = Ti.UI.createView({
        id: "air"
    });
    __alloyId27.push($.__views.air);
    var __alloyId34 = [];
    $.__views.__alloyId35 = Ti.UI.createTableViewSection({
        headerTitle: "Aeropuertos",
        id: "__alloyId35"
    });
    __alloyId34.push($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        title: "UIO - Quito Mariscal Sucre ",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        title: "GYE - Guayaquil Simon Bolivar",
        id: "__alloyId37"
    });
    $.__views.__alloyId35.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        title: "CUE - Cuenca",
        id: "__alloyId38"
    });
    $.__views.__alloyId35.add($.__views.__alloyId38);
    $.__views.__alloyId33 = Ti.UI.createTableView({
        data: __alloyId34,
        filterAttribute: "title",
        id: "__alloyId33"
    });
    $.__views.air.add($.__views.__alloyId33);
    $.__views.address = Ti.UI.createView({
        id: "address"
    });
    __alloyId27.push($.__views.address);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        text: "Address",
        id: "__alloyId39"
    });
    $.__views.address.add($.__views.__alloyId39);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId27,
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;