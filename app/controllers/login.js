
$.login.addEventListener('open', function(e) {
	var activity = $.login.activity;
	if (Ti.Platform.Android){ 
	if( Alloy.Globals.Android.Api >= 11 ) {
	        activity.actionBar.title = "Ingreso";
	        activity.actionBar.displayHomeAsUp = true; 
	        activity.actionBar.onHomeIconItemSelected = function() { 
			$.login.close();
			$.login = null;	
			};
		}
	};
});


var user_id = 0;

$.username.autocorrect = false;
function checkdata(value)  
	{  
	    var testresults = false;  
	    var filter = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s\_\-\.\@\/]+/;  
	    if (filter.test(value))  
	    {  
	        testresults = true;  
	    }  
	     
	    return (testresults);  
	};

$.buttonLogin.addEventListener('click',function(e) {
	var client = Ti.Network.createHTTPClient();
	var url = Alloy.Globals.DOMAIN + Alloy.Globals.URL_LOGIN;
	client.open('POST',url);
	client.ondatastream = function(e){
	     // $.activity.show(); 
	};
	client.onload = function(){	
		var json = this.responseText;
		var response = JSON.parse(json);
		
		if (!(typeof response.id === "undefined"))  
	    {  
	        $.username.blur();  
        	$.password.blur();  
        	 
        	user_id = response.id;      	
        	
        		Ti.App.Properties.setString('user_id', response.id);	  
	        	Ti.App.Properties.setString('username', response.username);	
	        	Ti.App.Properties.setString('name', response.name);	
	        	Ti.App.Properties.setString('email', response.email); 
	        	
	        	openWindowsLoginSuccess();
	    }
	    else  
	    {  
	        alert('Credenciales invalidas/Usuario no activado. Por favor intenta de nuevo!');  
	        // $.activity.hide();
		}; 
		 
	};
	client.onerror = function(e){alert('Transmission error: ' + e.error);};
		
	if ($.username.value != '' && $.password.value != '')  
    {  
    	if (!checkdata($.username.value))  
        {  
             alert("Username invalido");  
        } 
        else  
        {  
	        if (!checkdata($.password.value))  
	        {  
	             alert("Password invalido. (Caracteres no validos: ^[áéíóúÁÉÍÓÚñÑ_-.\/@)");  
	        } else
        	{
        		
	        		var user1 = Ti.Utils.base64encode($.username.value + '$@$' + $.password.value) ;
	        		var params = {
					    tc: Alloy.Globals.USER_MOBILE.toString(),
					    u:  user1.toString()
					};
					client.send(params); 		
		    }
	    } 
    }  
    else  
    {  
        alert("Username/Password son requeridos!");  
    } 
		
});


function openWindowsLoginSuccess()
{	
   // var args = {       		
	    // author: Ti.App.Properties.getString('user_id'),
	    // authorname: Ti.App.Properties.getString('name'),
	    // view: 'Events'
	// };        	
    // var win = Alloy.createController('start', args).getView();
    
    var win = Alloy.createController('bookForm').getView();
    win.open();
	$.login.close();
	$.login = null;	  
}
$.login.addEventListener('android:back', function(e) {
    Ti.API.info("Log: back button from login to home");
 	Alloy.createController('index').getView();
 	$.login.close();
 	$.login = null;	
  });
