// $.username.addEventListener('blur',function(e){
	// var client = Ti.Network.createHTTPClient();
	// var url = Alloy.Globals.DOMAIN + Alloy.Globals.URL_REGISTER;
	// client.open('POST',url);
// 
	// client.onload = function(e){
	     // $.activity.show(); 
	     	// var json = this.responseText;
			// var response = JSON.parse(json);
// 			
			// if (response.result == "NICKEXISTS")  
	    	// { 
	    	// alert('Nickname ocupado. Escoja otro nickname!');
	    	// }
	// };
	// var params = {
		// tc: Alloy.Globals.USER_MOBILE.toString(),
		// username: $.username.value,
		// };
	// client.send(params); 
// });

$.register.addEventListener('open', function(e) {
	var activity = $.register.activity;
	if (Ti.Platform.Android){ 
	if( Alloy.Globals.Android.Api >= 11 ) {
	        activity.actionBar.title = "Registro";
	        activity.actionBar.displayHomeAsUp = true; 
	        activity.actionBar.onHomeIconItemSelected = function() { 
			$.register.close();
			$.register = null;	
			};
		}
	};
	Ti.App.Properties.setString('loginFrom', 'register');
});

var campovacio;
var login = Alloy.createController('login').getView();

$.buttonRegister.addEventListener('click',function(e) {
	if($.name.value == ''){ campovacio = 'Por favor, introduzca su nombre'; } else { 
	if($.username.value == ''){ campovacio = 'Por favor, introduzca su nickname'; } else {
	if($.pass1.value == ''){ campovacio = 'Por favor, introduzca su clave de usuario'; } else {
	if($.email.value == ''){ campovacio = 'Por favor, introduzca su e-mail'; } else {
		campovacio ='';	
	}
	}}}
	
	if (campovacio) { 
		$.activity.hide();
		alert (campovacio);
	} else {
	var client = Ti.Network.createHTTPClient();
	var url = Alloy.Globals.DOMAIN + Alloy.Globals.URL_REGISTER;
	client.open('POST',url);
	client.ondatastream = function(e){
	     $.activity.show(); 
	};
	client.onload = function(){	
		var json = this.responseText;
		var response = JSON.parse(json);
		if (response.result == "OK")  
	    { 
	        	//Ti.App.Properties.setString('username', response.username);
	        	$.activity.hide();
	        	//alert('Recibiras un correo con un link de activacion para completar el registro. Ingresa con tu usuario y clave una vez activada la cuenta!');
	        	alert('Tu cuenta ha sido activada con exito. Ya puedes ingresar con tu usuario y cuenta creados!');	
	        	$.register.close();
	        	$.register = null;
	        	login.open();
	    }
	    else  
	    {  
	        if (response.result == "NICKEXISTS")  
		    { 
		    	$.activity.hide();
		    	alert('Nickname ocupado por otro usuario. Por favor escoje otro nickname!');
		    } else {
	    		if (response.result == "EMAILEXISTS")  
			    	{ 
			    	$.activity.hide();
			    	alert('La direccion de e-mail ya esta registrada en el sistema. Por favor intenta con otro e-mail!');
			    	} else {
			    		if (response.result == "INVALIDEMAIL")  
				    	{ 
				    	$.activity.hide();
				    	alert('Por favor intenta con un e-mail valido!');
				    	}
			    	}
	    		}
	        
		}; 
		 
	};
	client.onerror = function(e){alert('Transmission error: ' + e.error);};
		
	// if ($.username.value != '' && $.password.value != '')  
    // {  
    	// if (!checkdata($.username.value))  
        // {  
             // alert("Username invalido");  
        // } 
        // else  
        // {  
	        // if (!checkdata($.password.value))  
	        // {  
	             // alert("Password invalido. (Caracteres no validos: ^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9_-.\@)");  
	        // } else
        	// {
//         		
	        		// var user1 = Ti.Utils.base64encode($.username.value + '$@$' + $.password.value) ;
	        		// var params = {
					    // tc: Alloy.Globals.USER_MOBILE.toString(),
					    // u:  user1.toString()
					// };
					// client.send(params); 
// 					
// 				
		    // }
	    // } 
    // }  
    // else  
    // {  
        // alert("Username/Password son requeridos!");  
    // } 

	var params = {
		tc: Alloy.Globals.USER_MOBILE.toString(),
		name: $.name.value,
		username: $.username.value,
		passwd: $.pass1.value,
		email: $.email.value,
		};
	client.send(params); 
	};	
});