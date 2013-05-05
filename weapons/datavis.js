$(function() {

 function showWeapons(checkWeather) {
	var towns = {}
	
	var i = 0;
    while(i < weapons.data.length) {
      
      var info = weapons.data[i];
      
      var weapon = info[14];
      var weather = info[21].split(" ")[0];
      var area = info[22];
            
      if(weather == checkWeather && weapon != "HANDS"){
      	towns[area] = towns[area] || {};
      	towns[area][weapon] = towns[area][weapon] || 0
      	towns[area][weapon]++;
      }	
      i++;
      
    	  
    }
    
    var neighborhoods = ["CHARLESTOWN", "EAST BOSTON", "ALLSTON", "BACK BAY", "SOUTH BOSTON", "JAMAICA PLAIN", "ROXBURY", "NORTH DORCHESTER", "WEST ROXBURY", "ROSLINDALE", "MATTAPAN", "SOUTH DORCHESTER", "HYDE PARK" ];
    
    var n = 0;
    while(n < neighborhoods.length) {
      var neighborhood = neighborhoods[n];
      var divName = neighborhood.toLowerCase();
      
      //a way to get rid of spaces?
      //omit HANDS from count 
      
      var attacks = towns[neighborhood];
      console.log(attacks);
      
      var maxNum = 0, attack;
       for(var name in attacks) {
         
         if(attacks[name] > maxNum) {
            attack = name;
            maxNum = attacks[name];
         }
      } 

       $("#" + divName.replace(" ","-")).css("background-image","url(img/" + attack.replace(" ","-") + ".png)");
       console.log(attack);    
      n++;
    }


    }    	
	
      $(".clearbutton").click(function(){
      	showWeapons("CLEAR" || "SUNNY");
      	alert('Clear Weapon Forcast!')
      });
           
      $(".cloudybutton").click(function(){
      	showWeapons("CLOUDY");
        alert('Cloudy Weapon Forcast!')   
      });     
    
	  $(".rainbutton").click(function(){
	  	showWeapons("RAIN");
        alert('Rain Weapon Forcast!') 
      });
        
});


//weapon images needed: 
//HANDS-.png
//BLUNT-.png
//HANDGUN.png
//KNIFE.png
//BASEBALL.png
//HANDS/FEET/TEETH.png
//FEET.png
//KNIFE-.png
//TEETH.png
//