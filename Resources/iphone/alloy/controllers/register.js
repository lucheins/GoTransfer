function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "register";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.register = Ti.UI.createWindow({
        id: "register",
        backgroundColor: "white"
    });
    $.__views.register && $.addTopLevelView($.__views.register);
    $.__views.activity = Ti.UI.createActivityIndicator({
        id: "activity"
    });
    $.__views.register.add($.__views.activity);
    $.__views.registerForm = Ti.UI.createView({
        id: "registerForm"
    });
    $.__views.register.add($.__views.registerForm);
    $.__views.user = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        keyboardType: "Titanium.UI.KEYBOARD_DEFAULT",
        returnKeyType: "Titanium.UI.RETURNKEY_DEFAULT",
        color: "#336699",
        hintText: "Username",
        top: "2%",
        width: "80%",
        height: "10%",
        left: "10%",
        border: 1,
        borderColor: "#c1c1c1",
        paddingLeft: 5,
        id: "user"
    });
    $.__views.registerForm.add($.__views.user);
    $.__views.pass = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        keyboardType: "Titanium.UI.KEYBOARD_DEFAULT",
        returnKeyType: "Titanium.UI.RETURNKEY_DEFAULT",
        color: "#336699",
        hintText: "Password",
        passwordMask: "true",
        top: "14%",
        width: "80%",
        height: "10%",
        left: "10%",
        border: 1,
        borderColor: "#c1c1c1",
        paddingLeft: 5,
        id: "pass"
    });
    $.__views.registerForm.add($.__views.pass);
    $.__views.mobile = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        keyboardType: "Titanium.UI.KEYBOARD_DEFAULT",
        returnKeyType: "Titanium.UI.RETURNKEY_DEFAULT",
        color: "#336699",
        hintText: "Password",
        passwordMask: "true",
        top: "26%",
        width: "80%",
        height: "10%",
        left: "10%",
        border: 1,
        borderColor: "#c1c1c1",
        paddingLeft: 5,
        id: "mobile"
    });
    $.__views.registerForm.add($.__views.mobile);
    $.__views.sexLabel = Ti.UI.createLabel({
        top: "38%",
        font: {
            fontSize: "15dp",
            fontWeight: "bold"
        },
        color: "#c9c9c9",
        left: "10%",
        text: "Select your current timezone",
        id: "sexLabel"
    });
    $.__views.registerForm.add($.__views.sexLabel);
    $.__views.pickSex = Ti.UI.createPicker({
        top: "46%",
        width: "80%",
        left: "10%",
        font: {
            fontSize: "10dp"
        },
        id: "pickSex"
    });
    $.__views.registerForm.add($.__views.pickSex);
    var __alloyId1 = [];
    $.__views.__alloyId2 = Ti.UI.createPickerRow({
        value: "masculino",
        title: "Masculino",
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createPickerRow({
        value: "femenino",
        title: "Femenino",
        id: "__alloyId3"
    });
    __alloyId1.push($.__views.__alloyId3);
    $.__views.pickSex.add(__alloyId1);
    $.__views.buttonLogin = Ti.UI.createView({
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        width: "45%",
        borderRadius: 4,
        backgroundColor: "#745DA8",
        color: "white",
        bottom: "5%",
        height: "10%",
        textAlign: "center",
        id: "buttonLogin"
    });
    $.__views.registerForm.add($.__views.buttonLogin);
    $.__views.textBottom = Ti.UI.createLabel({
        text: "Registrarme",
        id: "textBottom"
    });
    $.__views.buttonLogin.add($.__views.textBottom);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;