
var user_id = 0;

$.username.autocorrect = false;
function checkdata(value)  
	{  
	    var testresults = false;  
	    var filter = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s\_\-\.\@\/]+$/;  
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
	        	openWindowsLoginSussess();
	        	// $.activity.hide();
        		// dialog.show();	 
        	// } else {
//         		
        		// var dialog1 = Ti.UI.createAlertDialog({
			         // buttonNames: [ "No Accept", "Accept" ],
			         // message: response['terms'].toString(),
			         // title: "Terms of Service "
			     // });
// 
			// dialog1.addEventListener("click", function(e) 
			// {
		         // if (0 == e.index) {    
		         	// Ti.App.Properties.setString('user_id', null);
					// Ti.App.Properties.setString('username', null);
					// Ti.App.Properties.setString('timezone', null);
					// Ti.App.Properties.setString('name', null);         
		             // $.login.close();
		        // } else {
		        	 // if (1 == e.index) { 
// 		        	
		        	// var client1 = Ti.Network.createHTTPClient();
					// var url1 = Alloy.Globals.DOMAIN + Alloy.Globals.URL_REGISTER_ACCEPT;
					// client1.open('POST',url1);
					// client1.ondatastream = function(e){
					     // $.activity.show(); 
					// };
					// client1.onload = function(){
						// var json = this.responseText;
						// var responses = JSON.parse(json);
					// };
		        	// client1.onerror = function(e){alert('Transmission error: ' + e.error);};
					// var params = {
						// user_id : user_id,
					    // tc: Alloy.Globals.USER_MOBILE.toString(),
					// };
					// client1.send(params); 
					// Ti.App.Properties.setString('user_id', response['user'].id);	  
		        	// Ti.App.Properties.setString('username', response['user'].username);	
		        	// Ti.App.Properties.setString('name', response['user'].name);	
		        	// Ti.App.Properties.setString('timezone', timezone);   
		        	// $.activity.hide();     	
		        	// dialog.show();	
		        	// }
		        // }
		     // });      
        	// dialog1.show();	 
        	// }       	        
	  
	    }
	    else  
	    {  
	        alert('Failed credentials');  
	        // $.activity.hide();
		}; 
		 
	};
	client.onerror = function(e){alert('Transmission error: ' + e.error);};
		
	if ($.username.value != '' && $.password.value != '')  
    {  
    	if (!checkdata($.username.value))  
        {  
             alert("Please enter a valid username");  
        } 
        else  
        {  
	        if (!checkdata($.password.value))  
	        {  
	             alert("Please enter a valid password");  
	        } else
        	{
        		// if(zoneGps == 1)
        		// {
        			// timezone = timezoneGpsUTC;
        		// } else {
        			// timezone = $.pickTimezone.getSelectedRow(0).value;
        		// }        		
        		// if(timezone != 'zone')
        		// {      	
	        		var user1 = Ti.Utils.base64encode($.username.value + '$#$' + $.password.value) ;
	        		var params = {
					    tc: Alloy.Globals.USER_MOBILE.toString(),
					    u:  user1.toString()
					};
					client.send(params);    
        		// } else {
        			// alert("Please select Timezone");  
        		// }
        		  
		    }
	    } 
    }  
    else  
    {  
        alert("Username/Password son requeridos!");  
    } 
		
});


function openWindowsLoginSussess()
{	
   // var args = {       		
	    // author: Ti.App.Properties.getString('user_id'),
	    // authorname: Ti.App.Properties.getString('name'),
	    // view: 'Events'
	// };        	
    // var win = Alloy.createController('start', args).getView();
    var win = Alloy.createController('start').getView();
    win.fullscreen= false;	
	if(Ti.Platform.osname == 'android')
	{
		win.open({
			activityEnterAnimation: Ti.Android.R.anim.fade_in,
			activityExitAnimation: Ti.Android.R.anim.fade_out
		});	
	} else {
		var t = Ti.UI.iPhone.AnimationStyle.CURL_UP;
		win.open({transition:t});
	}	
	$.login.close();     	  
}

