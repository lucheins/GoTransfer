// Use the Alloy.Globals.Facebook namespace to make Facebook module API calls
// var facebook = Alloy.Globals.Facebook;
// facebook.appid = 238640849675744;
// // facebook.permissions = ['publish_stream'];
// 
// facebook.addEventListener('login', function(e) {
    // if (e.success) {
        // Alloy.createController("start").getView().open();
    // }
// });
// 

$.index.addEventListener('android:back', function(e) {
    Ti.API.info("Log: The Android back button was pressed - window not closed");
 // do nothing
 return false;
  });

$.index.addEventListener('open', function(e) {

var activity = $.index.activity;
if (Ti.Platform.Android){ 
if( Alloy.Globals.Android.Api >= 11 ) {
        activity.actionBar.title = "GoTransfer";
        activity.actionBar.displayHomeAsUp = false;
        activity.actionBar.onHomeIconItemSelected = function() {
			if (!touchRightStarted && !touchLeftStarted) {
				buttonPressed = true;
				toggleLeftSlider();
			}
		}; 
	}
};

});
var logger;
$.index.addEventListener('focus', function(e) {
	if (Ti.App.Properties.getString('user_id') == 0){
		logger = 'loggedOut';
	}
	if (Ti.App.Properties.getString('user_id') > 0){
		logger = 'loggedIn';
	}
});
// fin event listener focus
$.index.open();
// IOS MENU BUTTON

function toggle() {
	if (!touchRightStarted && !touchLeftStarted) {
		buttonPressed = true;
		toggleLeftSlider();
	}
}; 


function toggleLogin () {
	 	if (Ti.App.Properties.getString('user_id') == 0){
	    	$.menuLogger.title = 'Iniciar Sesion';
	    	$.menuLogger.addEventListener('click', function (e){
	    		
	    		Alloy.createController("login").getView().open();
	    	});
	    } 
	    if (Ti.App.Properties.getString('user_id') > 0 ){	
	    	$.menuLogger.title = 'Cerrar Sesion';
	    	$.menuLogger.addEventListener('click', function (e){
	    		Ti.App.Properties.setString('user_id', '0');
	    		return;
	   		});
	   	}
	   
	};
function next() {
    if(Alloy.Globals.USERID == 0 || Ti.App.Properties.getString('user_id') == 0){
	Alloy.createController("portal").getView().open();
	} else { 
    Alloy.createController("bookForm").getView().open();
  	};
};
//LOGIN LOGOUT FUNCTIONS



//SLIDER
var animateRight = Ti.UI.createAnimation({
	left : 200,
	curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration : 150
});

var animateReset = Ti.UI.createAnimation({
	left : 0,
	curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration : 150
});

var animateLeft = Ti.UI.createAnimation({
	left : -200,
	curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration : 150
});

var touchStartX = 0;
var touchRightStarted = false;
var touchLeftStarted = false;
var buttonPressed = false;
var hasSlided = false;
var direction = "reset";

$.movableView.addEventListener('touchstart', function(e) {
	touchStartX = e.x;
});
$.leftMenu.addEventListener('touchstart', function(e) {
	touchStartX = e.x;
});

function endTouch(e){
	if (buttonPressed) {
		buttonPressed = false;
		//REMOVED THIS STUPID THING FROM ORIGINA.. IT BREAKS EVRYTHING FOR SOME REASON! --> return;
	}
	if ($.movableView.left >= 100 && touchRightStarted) {
		direction = "right";
		if (Titanium.Platform.osname == "iOS") {
			$.leftButton.touchEnabled = true;	
		}
		$.movableView.animate(animateRight);
		hasSlided = true;
	}
	else {
		direction = "reset";
		if (Titanium.Platform.osname == "iOS") {
			$.leftButton.touchEnabled = true;	
		}
		$.movableView.animate(animateReset);
		hasSlided = false;
	}
	Ti.App.fireEvent("sliderToggled", {
		hasSlided : hasSlided,
		direction : direction
	});
	touchRightStarted = false;
	touchLeftStarted = false;
}

$.movableView.addEventListener('touchend', endTouch);
$.leftMenu.addEventListener('touchend', endTouch);

function moveTouch(e){
	var coords = $.movableView.convertPointToView({
		x : e.x,
		y : e.y
	}, $.containerview);
	var newLeft = coords.x - touchStartX;
	//Prevenir que se pueda hacer slide a la izquierda si no se ha empezado ningun movimiento
	if (newLeft < 0) {
		return;
	}
	if ((touchRightStarted && newLeft <= 200 && newLeft >= 0) || 
		(touchLeftStarted && newLeft <= 0 && newLeft >= -200)) {
		$.movableView.left = newLeft;
	}
	else {
		// Sometimes newLeft goes beyond its bounds so the view gets stuck.
		// This is a hack to fix that.
		if ((touchRightStarted && newLeft < 0) || (touchLeftStarted && newLeft > 0)) {
			$.movableView.left = 0;
		}
		else if (touchRightStarted && newLeft > 200) {
			$.movableView.left = 200;
		}
		
	}
	if (newLeft > 5 && !touchLeftStarted && !touchRightStarted) {
		touchRightStarted = true;
		Ti.App.fireEvent("sliderToggled", {
			hasSlided : false,
			direction : "right"
		});
	}
	else if (newLeft < -5 && !touchRightStarted && !touchLeftStarted) {
		touchLeftStarted = true;
		Ti.App.fireEvent("sliderToggled", {
			hasSlided : false,
			direction : "left"
		});
	}
}
$.movableView.addEventListener('touchmove', moveTouch);
$.leftMenu.addEventListener('touchmove', moveTouch);





function toggleLeftSlider () {
	toggleLogin();
	if (!hasSlided) {
		direction = "right";
		if (Titanium.Platform.osname == "iOS") {
			$.leftButton.touchEnabled = true;	
		}
		$.movableView.animate(animateRight);
		hasSlided = true;
	} else {
		direction = "reset";
		if (Titanium.Platform.osname == "iOS") {
			$.leftButton.touchEnabled = true;	
		}
		$.movableView.animate(animateReset);
		hasSlided = false;
	}
	Ti.App.fireEvent("sliderToggled", {
		hasSlided : hasSlided,
		direction : direction,
	});
};



////
// END SLIDER!!!!
