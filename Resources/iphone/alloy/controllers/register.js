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
        top: 40,
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
    $.register.addEventListener("open", function() {
        var activity = $.register.activity;
        if (Ti.Platform.Android && Alloy.Globals.Android.Api >= 11) {
            activity.actionBar.title = "Registro";
            activity.actionBar.displayHomeAsUp = true;
            activity.actionBar.onHomeIconItemSelected = function() {
                $.register.close();
                $.register = null;
            };
        }
        Ti.App.Properties.setString("loginFrom", "register");
    });
    var campovacio;
    var login = Alloy.createController("login").getView();
    $.buttonRegister.addEventListener("click", function() {
        campovacio = "" == $.name.value ? "Por favor, introduzca su nombre" : "" == $.username.value ? "Por favor, introduzca su nickname" : "" == $.pass1.value ? "Por favor, introduzca su clave de usuario" : "" == $.email.value ? "Por favor, introduzca su e-mail" : "";
        if (campovacio) {
            $.activity.hide();
            alert(campovacio);
        } else {
            var client = Ti.Network.createHTTPClient();
            var url = Alloy.Globals.DOMAIN + Alloy.Globals.URL_REGISTER;
            client.open("POST", url);
            client.ondatastream = function() {
                $.activity.show();
            };
            client.onload = function() {
                var json = this.responseText;
                var response = JSON.parse(json);
                if ("OK" == response.result) {
                    $.activity.hide();
                    alert("Tu cuenta ha sido activada con exito. Ya puedes ingresar con tu usuario y cuenta creados!");
                    $.register.close();
                    $.register = null;
                    login.open();
                } else if ("NICKEXISTS" == response.result) {
                    $.activity.hide();
                    alert("Nickname ocupado por otro usuario. Por favor escoje otro nickname!");
                } else if ("EMAILEXISTS" == response.result) {
                    $.activity.hide();
                    alert("La direccion de e-mail ya esta registrada en el sistema. Por favor intenta con otro e-mail!");
                } else if ("INVALIDEMAIL" == response.result) {
                    $.activity.hide();
                    alert("Por favor intenta con un e-mail valido!");
                }
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