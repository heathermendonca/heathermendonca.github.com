$(function() {

	var i = 0;
    while(i < 300) {
      
      var info = weapons.data[i];
      
      var weapon = info[14];
      var weather = info[21];
      var area = info[22];
      
      //if "clear" selected append background-image X.png to css locations of highest weapon
      
      console.log(weather);
      	
      i++;
    }
    
});