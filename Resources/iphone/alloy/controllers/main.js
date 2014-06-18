function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.main = Ti.UI.createWindow({
        backgroundColor: "blue",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "Logged In!",
        color: "orange",
        top: "10%",
        id: "__alloyId0"
    });
    $.__views.main.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var facebook = Alloy.Globals.Facebook;
    facebook.appid = 0xd90ae712e5e0;
    facebook.permissions = [ "publish_stream" ];
    facebook.addEventListener("login", function(e) {
        e.success && facebook.BUTTON_STYLE_WIDE;
    });
    $.main.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;