function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "leftmenu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.leftMenu = Ti.UI.createView({
        id: "leftMenu"
    });
    $.__views.leftMenu && $.addTopLevelView($.__views.leftMenu);
    var __alloyId5 = [];
    $.__views.__alloyId6 = Ti.UI.createTableViewSection({
        rowCount: "4",
        id: "__alloyId6"
    });
    __alloyId5.push($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        title: "Mis Datos",
        height: "34",
        indentionLevel: "0",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        title: "Usuario",
        height: "46",
        indentionLevel: "1",
        id: "__alloyId8"
    });
    $.__views.__alloyId6.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        title: "Nombre",
        height: "46",
        indentionLevel: "1",
        id: "__alloyId9"
    });
    $.__views.__alloyId6.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        title: "Auto",
        height: "46",
        indentionLevel: "1",
        id: "__alloyId10"
    });
    $.__views.__alloyId6.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createTableViewSection({
        rowCount: "3",
        id: "__alloyId11"
    });
    __alloyId5.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        title: "Opciones de Parqueo",
        height: "34",
        indentionLevel: "0",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        title: "Prepago - Zona Azul",
        height: "46",
        indentionLevel: "1",
        id: "__alloyId13"
    });
    $.__views.__alloyId11.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        title: "Postpago - Parquedero",
        height: "46",
        indentionLevel: "1",
        id: "__alloyId14"
    });
    $.__views.__alloyId11.add($.__views.__alloyId14);
    $.__views.tableMenu = Ti.UI.createTableView({
        data: __alloyId5,
        id: "tableMenu",
        scrollable: "false",
        footerTitle: "",
        left: "0"
    });
    $.__views.leftMenu.add($.__views.tableMenu);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;