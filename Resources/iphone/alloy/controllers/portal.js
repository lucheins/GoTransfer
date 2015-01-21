function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function login() {
        Alloy.createController("login").getView().open();
    }
    function register() {
        Alloy.createController("register").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "portal";
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
    $.__views.portal = Ti.UI.createWindow({
        id: "portal"
    });
    $.__views.portal && $.addTopLevelView($.__views.portal);
    $.__views.movableView = Ti.UI.createView({
        top: 40,
        zIndex: 100,
        width: "100%",
        id: "movableView",
        backgroundColor: "white"
    });
    $.__views.portal.add($.__views.movableView);
    $.__views.__alloyId8 = Ti.UI.createButton({
        title: "Iniciar Sesion",
        top: "60dp",
        id: "__alloyId8"
    });
    $.__views.movableView.add($.__views.__alloyId8);
    login ? $.__views.__alloyId8.addEventListener("click", login) : __defers["$.__views.__alloyId8!click!login"] = true;
    $.__views.__alloyId9 = Ti.UI.createButton({
        title: "Registrarse",
        top: "120dp",
        id: "__alloyId9"
    });
    $.__views.movableView.add($.__views.__alloyId9);
    register ? $.__views.__alloyId9.addEventListener("click", register) : __defers["$.__views.__alloyId9!click!register"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.portal.addEventListener("open", function() {
        var activity = $.portal.activity;
        if (Ti.Platform.Android && Alloy.Globals.Android.Api >= 11) {
            activity.actionBar.title = "Identificacion";
            activity.actionBar.displayHomeAsUp = true;
            activity.actionBar.onHomeIconItemSelected = function() {
                $.portal.close();
                $.portal = null;
            };
        }
    });
    __defers["$.__views.__alloyId8!click!login"] && $.__views.__alloyId8.addEventListener("click", login);
    __defers["$.__views.__alloyId9!click!register"] && $.__views.__alloyId9.addEventListener("click", register);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;