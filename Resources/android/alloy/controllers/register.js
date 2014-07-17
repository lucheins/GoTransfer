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
    $.__views.movableView = Ti.UI.createView({
        top: 0,
        zIndex: 100,
        width: "100%",
        id: "movableView",
        backgroundColor: "white"
    });
    $.__views.register.add($.__views.movableView);
    $.__views.activity = Ti.UI.createActivityIndicator({
        id: "activity"
    });
    $.__views.movableView.add($.__views.activity);
    $.__views.registerForm = Ti.UI.createView({
        id: "registerForm"
    });
    $.__views.movableView.add($.__views.registerForm);
    $.__views.name = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        keyboardType: "Titanium.UI.KEYBOARD_DEFAULT",
        returnKeyType: "Titanium.UI.RETURNKEY_DEFAULT",
        color: "#336699",
        hintText: "Nombre",
        top: "2%",
        width: "80%",
        height: "10%",
        left: "10%",
        border: 1,
        borderColor: "#c1c1c1",
        paddingLeft: 5,
        id: "name"
    });
    $.__views.registerForm.add($.__views.name);
    $.__views.username = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        keyboardType: "Titanium.UI.KEYBOARD_DEFAULT",
        returnKeyType: "Titanium.UI.RETURNKEY_DEFAULT",
        color: "#336699",
        hintText: "Nickname",
        top: "14%",
        width: "80%",
        height: "10%",
        left: "10%",
        border: 1,
        borderColor: "#c1c1c1",
        paddingLeft: 5,
        id: "username",
        autocapitalization: "false"
    });
    $.__views.registerForm.add($.__views.username);
    $.__views.pass1 = Ti.UI.createTextField({
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
        id: "pass1"
    });
    $.__views.registerForm.add($.__views.pass1);
    $.__views.email = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        keyboardType: "Titanium.UI.KEYBOARD_DEFAULT",
        returnKeyType: "Titanium.UI.RETURNKEY_DEFAULT",
        color: "#336699",
        hintText: "E-mail",
        top: "38%",
        width: "80%",
        height: "10%",
        left: "10%",
        border: 1,
        borderColor: "#c1c1c1",
        paddingLeft: 5,
        id: "email",
        autocapitalization: "false"
    });
    $.__views.registerForm.add($.__views.email);
    $.__views.buttonRegister = Ti.UI.createView({
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
        id: "buttonRegister"
    });
    $.__views.registerForm.add($.__views.buttonRegister);
    $.__views.textBottom = Ti.UI.createLabel({
        text: "Registrarme",
        id: "textBottom"
    });
    $.__views.buttonRegister.add($.__views.textBottom);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.username.addEventListener("blur", function() {
        var client = Ti.Network.createHTTPClient();
        var url = Alloy.Globals.DOMAIN + Alloy.Globals.URL_REGISTER;
        client.open("POST", url);
        client.onload = function() {
            var json = this.responseText;
            var response = JSON.parse(json);
            "NICKEXISTS" == response.result && alert("Nickname ocupado. Escoja otro nickname!");
        };
        var params = {
            tc: Alloy.Globals.USER_MOBILE.toString(),
            username: $.username.value
        };
        client.send(params);
    });
    $.buttonRegister.addEventListener("click", function() {
        if ("" == $.pass1.value) alert("Por favor, introduzca su clave de usuario"); else {
            var client = Ti.Network.createHTTPClient();
            var url = Alloy.Globals.DOMAIN + Alloy.Globals.URL_REGISTER;
            client.open("POST", url);
            client.ondatastream = function() {};
            client.onload = function() {
                var json = this.responseText;
                var response = JSON.parse(json);
                "OK" == response.result ? alert("Registrado!") : "NICKEXISTS" == response.result ? alert("Nickname ocupado. Escoja otro nickname!") : alert(response);
            };
            client.onerror = function(e) {
                alert("Transmission error: " + e.error);
            };
            var params = {
                tc: Alloy.Globals.USER_MOBILE.toString(),
                name: $.name.value,
                username: $.username.value,
                passwd: $.pass1.value,
                email: $.email.value
            };
            client.send(params);
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;