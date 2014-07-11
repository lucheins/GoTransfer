function Controller() {
    function login() {
        Alloy.createController("login").getView().open();
    }
    function register() {
        Alloy.createController("register").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "portal";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.portal = Ti.UI.createWindow({
        id: "portal",
        backgroundColor: "white"
    });
    $.__views.portal && $.addTopLevelView($.__views.portal);
    $.__views.__alloyId15 = Ti.UI.createButton({
        title: "Iniciar Sesion",
        top: "60dp",
        id: "__alloyId15"
    });
    $.__views.portal.add($.__views.__alloyId15);
    login ? $.__views.__alloyId15.addEventListener("click", login) : __defers["$.__views.__alloyId15!click!login"] = true;
    $.__views.__alloyId16 = Ti.UI.createButton({
        title: "Registrarse",
        top: "120dp",
        id: "__alloyId16"
    });
    $.__views.portal.add($.__views.__alloyId16);
    register ? $.__views.__alloyId16.addEventListener("click", register) : __defers["$.__views.__alloyId16!click!register"] = true;
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
    __defers["$.__views.__alloyId15!click!login"] && $.__views.__alloyId15.addEventListener("click", login);
    __defers["$.__views.__alloyId16!click!register"] && $.__views.__alloyId16.addEventListener("click", register);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;