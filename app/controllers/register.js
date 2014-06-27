
$.buttonRegister.addEventListener('click',function(e) {
	var client = Ti.Network.createHTTPClient();
	var url = Alloy.Globals.DOMAIN + Alloy.Globals.URL_REGISTER;
	client.open('POST',url);
	client.ondatastream = function(e){
	     // $.activity.show(); 
	};
	client.onload = function(){	
		var json = this.responseText;
		var response = JSON.parse(json);
		alert(response);
		if (response.result == "OK")  
	    {  
	         
	        	//Ti.App.Properties.setString('username', response.username);
	        	alert('Registrado!');	
	        	
	    }
	    else  
	    {  
	        alert('No Registrado!');
	        // $.activity.hide();
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
});