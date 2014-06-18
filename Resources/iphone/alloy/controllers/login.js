function Controller() {
    function checkdata(value) {
        var testresults = false;
        var filter = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s\_\-\.\@\/]+$/;
        filter.test(value) && (testresults = true);
        return testresults;
    }
    function openWindowsLoginSussess() {
        var win = Alloy.createController("start").getView();
        win.fullscreen = false;
        if ("android" == Ti.Platform.osname) win.open({
            activityEnterAnimation: Ti.Android.R.anim.fade_in,
            activityExitAnimation: Ti.Android.R.anim.fade_out
        }); else {
            var t = Ti.UI.iPhone.AnimationStyle.CURL_UP;
            win.open({
                transition: t
            });
        }
        $.login.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.login = Ti.UI.createWindow({
        id: "login",
        backgroundColor: "white"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.activity = Ti.UI.createActivityIndicator({
        id: "activity"
    });
    $.__views.login.add($.__views.activity);
    $.__views.container = Ti.UI.createView({
        id: "container"
    });
    $.__views.login.add($.__views.container);
    $.__views.username = Ti.UI.createTextField({
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
        id: "username"
    });
    $.__views.container.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
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
        id: "password"
    });
    $.__views.container.add($.__views.password);
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
    $.__views.container.add($.__views.buttonLogin);
    $.__views.textBottom = Ti.UI.createLabel({
        text: "Login",
        id: "textBottom"
    });
    $.__views.buttonLogin.add($.__views.textBottom);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var user_id = 0;
    $.username.autocorrect = false;
    $.buttonLogin.addEventListener("click", function() {
        var client = Ti.Network.createHTTPClient();
        var url = Alloy.Globals.DOMAIN + Alloy.Globals.URL_LOGIN;
        client.open("POST", url);
        client.ondatastream = function() {};
        client.onload = function() {
            var json = this.responseText;
            var response = JSON.parse(json);
            if ("undefined" == typeof response.id) alert("Failed credentials"); else {
                $.username.blur();
                $.password.blur();
                user_id = response.id;
                Ti.App.Properties.setString("user_id", response.id);
                Ti.App.Properties.setString("username", response.username);
                Ti.App.Properties.setString("name", response.name);
                Ti.App.Properties.setString("email", response.email);
                openWindowsLoginSussess();
            }
        };
        client.onerror = function(e) {
            alert("Transmission error: " + e.error);
        };
        if ("" != $.username.value && "" != $.password.value) if (checkdata($.username.value)) if (checkdata($.password.value)) {
            var user1 = Ti.Utils.base64encode($.username.value + "$#$" + $.password.value);
            var params = {
                tc: Alloy.Globals.USER_MOBILE.toString(),
                u: user1.toString()
            };
            client.send(params);
        } else alert("Please enter a valid password"); else alert("Please enter a valid username"); else alert("Username/Password son requeridos!");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;