function Controller() {
    function toggle() {
        if (!touchRightStarted && !touchLeftStarted) {
            buttonPressed = true;
            toggleLeftSlider();
        }
    }
    function next() {
        0 == Ti.App.Properties.getString("user_id") ? Alloy.createController("portal").getView().open() : Alloy.createController("bookForm").getView().open();
    }
    function endTouch() {
        buttonPressed && (buttonPressed = false);
        if ($.movableView.left >= 100 && touchRightStarted) {
            direction = "right";
            "iOS" == Titanium.Platform.osname && ($.leftButton.touchEnabled = true);
            $.movableView.animate(animateRight);
            hasSlided = true;
        } else {
            direction = "reset";
            "iOS" == Titanium.Platform.osname && ($.leftButton.touchEnabled = true);
            $.movableView.animate(animateReset);
            hasSlided = false;
        }
        Ti.App.fireEvent("sliderToggled", {
            hasSlided: hasSlided,
            direction: direction
        });
        touchRightStarted = false;
        touchLeftStarted = false;
    }
    function moveTouch(e) {
        var coords = $.movableView.convertPointToView({
            x: e.x,
            y: e.y
        }, $.containerview);
        var newLeft = coords.x - touchStartX;
        if (0 > newLeft) return;
        touchRightStarted && 200 >= newLeft && newLeft >= 0 || touchLeftStarted && 0 >= newLeft && newLeft >= -200 ? $.movableView.left = newLeft : touchRightStarted && 0 > newLeft || touchLeftStarted && newLeft > 0 ? $.movableView.left = 0 : touchRightStarted && newLeft > 200 && ($.movableView.left = 200);
        if (newLeft > 5 && !touchLeftStarted && !touchRightStarted) {
            touchRightStarted = true;
            Ti.App.fireEvent("sliderToggled", {
                hasSlided: false,
                direction: "right"
            });
        } else if (-5 > newLeft && !touchRightStarted && !touchLeftStarted) {
            touchLeftStarted = true;
            Ti.App.fireEvent("sliderToggled", {
                hasSlided: false,
                direction: "left"
            });
        }
    }
    function toggleLeftSlider() {
        if (hasSlided) {
            direction = "reset";
            "iOS" == Titanium.Platform.osname && ($.leftButton.touchEnabled = true);
            $.movableView.animate(animateReset);
            hasSlided = false;
            $.menuLogger.removeEventListener("click", toggleLogin);
            $.menuLogger.removeEventListener("click", toggleLogout);
        } else {
            direction = "right";
            "iOS" == Titanium.Platform.osname && ($.leftButton.touchEnabled = true);
            $.movableView.animate(animateRight);
            hasSlided = true;
            if (0 == Ti.App.Properties.getString("user_id")) {
                $.menuLogger.title = "Iniciar Sesion";
                $.menuLogger.addEventListener("click", toggleLogin);
            }
            if (Ti.App.Properties.getString("user_id") > 0) {
                $.menuLogger.title = "Cerrar Sesion";
                $.menuLogger.addEventListener("click", toggleLogout);
            }
        }
        Ti.App.fireEvent("sliderToggled", {
            hasSlided: hasSlided,
            direction: direction
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.containerview = Ti.UI.createView({
        id: "containerview"
    });
    $.__views.index.add($.__views.containerview);
    $.__views.leftButton = Ti.UI.createButton({
        title: "Menu",
        id: "leftButton",
        top: "10dp"
    });
    $.__views.containerview.add($.__views.leftButton);
    toggle ? $.__views.leftButton.addEventListener("click", toggle) : __defers["$.__views.leftButton!click!toggle"] = true;
    $.__views.leftMenu = Ti.UI.createView({
        height: "100%",
        left: 0,
        top: 40,
        backgroundColor: "#595858",
        backgroundGradient: {
            type: "linear",
            colors: [ "#595858", "#232323" ],
            startPoint: {
                x: 0,
                y: 0
            },
            endPoint: {
                x: 0,
                y: "100%"
            },
            backFillStart: true
        },
        zIndex: 50,
        width: "250dp",
        color: "white",
        id: "leftMenu"
    });
    $.__views.containerview.add($.__views.leftMenu);
    var __alloyId2 = [];
    $.__views.__alloyId3 = Ti.UI.createTableViewSection({
        rowCount: "1",
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        title: "Cuenta",
        height: "24",
        indentionLevel: "0",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.menuLogger = Ti.UI.createTableViewRow({
        height: "46",
        indentionLevel: "1",
        id: "menuLogger"
    });
    $.__views.__alloyId3.add($.__views.menuLogger);
    $.__views.tableMenu = Ti.UI.createTableView({
        data: __alloyId2,
        id: "tableMenu",
        scrollable: "false",
        footerTitle: "",
        left: "0"
    });
    $.__views.leftMenu.add($.__views.tableMenu);
    $.__views.movableView = Ti.UI.createView({
        top: 40,
        zIndex: 100,
        width: "100%",
        id: "movableView",
        backgroundColor: "white"
    });
    $.__views.containerview.add($.__views.movableView);
    $.__views.__alloyId5 = Ti.UI.createButton({
        title: "Pedir Transfer",
        top: "60dp",
        id: "__alloyId5"
    });
    $.__views.movableView.add($.__views.__alloyId5);
    next ? $.__views.__alloyId5.addEventListener("click", next) : __defers["$.__views.__alloyId5!click!next"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.addEventListener("android:back", function() {
        Ti.API.info("Log: The Android back button was pressed - window not closed");
        return false;
    });
    $.index.addEventListener("open", function() {
        var activity = $.index.activity;
        if (Ti.Platform.Android && Alloy.Globals.Android.Api >= 11) {
            activity.actionBar.title = "GoTransfer";
            activity.actionBar.displayHomeAsUp = false;
            activity.actionBar.onHomeIconItemSelected = function() {
                if (!touchRightStarted && !touchLeftStarted) {
                    buttonPressed = true;
                    toggleLeftSlider();
                }
            };
        }
    });
    $.index.open();
    var animateRight = Ti.UI.createAnimation({
        left: 200,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var animateReset = Ti.UI.createAnimation({
        left: 0,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    Ti.UI.createAnimation({
        left: -200,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var touchStartX = 0;
    var touchRightStarted = false;
    var touchLeftStarted = false;
    var buttonPressed = false;
    var hasSlided = false;
    var direction = "reset";
    $.movableView.addEventListener("touchstart", function(e) {
        touchStartX = e.x;
    });
    $.leftMenu.addEventListener("touchstart", function(e) {
        touchStartX = e.x;
    });
    $.movableView.addEventListener("touchend", endTouch);
    $.leftMenu.addEventListener("touchend", endTouch);
    $.movableView.addEventListener("touchmove", moveTouch);
    $.leftMenu.addEventListener("touchmove", moveTouch);
    var toggleLogin = function() {
        $.menuLogger.removeEventListener("click", toggleLogin);
        Alloy.createController("login").getView().open();
    };
    var toggleLogout = function() {
        $.menuLogger.removeEventListener("click", toggleLogout);
        Ti.App.Properties.setString("user_id", "0");
        alert("Sesion cerrada con exito!");
    };
    __defers["$.__views.leftButton!click!toggle"] && $.__views.leftButton.addEventListener("click", toggle);
    __defers["$.__views.__alloyId5!click!next"] && $.__views.__alloyId5.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;