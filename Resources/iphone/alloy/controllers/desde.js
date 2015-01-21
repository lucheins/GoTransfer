function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function desdeCasa() {
        Alloy.createController("pickCasa").getView().open();
    }
    function desdeAero() {
        Alloy.createController("pickAero").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "desde";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.desde = Ti.UI.createWindow({
        id: "desde"
    });
    $.__views.desde && $.addTopLevelView($.__views.desde);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Desde?",
        id: "__alloyId1"
    });
    $.__views.desde.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "Direccion a Aeropuerto",
        top: "60dp",
        id: "__alloyId2"
    });
    $.__views.desde.add($.__views.__alloyId2);
    desdeCasa ? $.__views.__alloyId2.addEventListener("click", desdeCasa) : __defers["$.__views.__alloyId2!click!desdeCasa"] = true;
    $.__views.__alloyId3 = Ti.UI.createButton({
        title: "Aeropuerto a Direccion",
        top: "120dp",
        id: "__alloyId3"
    });
    $.__views.desde.add($.__views.__alloyId3);
    desdeAero ? $.__views.__alloyId3.addEventListener("click", desdeAero) : __defers["$.__views.__alloyId3!click!desdeAero"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2!click!desdeCasa"] && $.__views.__alloyId2.addEventListener("click", desdeCasa);
    __defers["$.__views.__alloyId3!click!desdeAero"] && $.__views.__alloyId3.addEventListener("click", desdeAero);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;