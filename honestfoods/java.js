
//For letter sorting

//Am I missing something? 
//Message in Console says: 
//XMLHttpRequest cannot load file:///Users/heathermendonca/Desktop/heathermendonca.github.com/honestfoods/fooddata.json. Origin null is not allowed by Access-Control-Allow-Origin.

//Also, how to connect this to a button?? -_-
//Another Problem, freaking logo! D:<

//


    console.log(myFoods);




//A-H BUTTON (GROUP 1) VVVVV

$(function() {
      $(".a-h-button").click(function()
           {
           
        alert('A-H Clicked!')  
		
		function createFruits(group){
    	
		var i = 0;

		while(i < myFoods.fruit.length) {
		
				
				var theFruit = myFoods.fruit[i];


    			if(group == theFruit.group) {

					

	  				var li = $("<li>");
  					var name = $("<div class=name-p>").text(theFruit.name);
  					var size = $("<div class=size-p>").text(theFruit.size);
  					var img = $("<img>").attr('src',theFruit.picture); 

					
					
					li.append(img).append(name).append(size);
					$("#food-result").append(li);
				
				
				}
			
				
		i++;
		}
    
		}

		$("#food-result").empty();
   		createFruits(1);
   		
   		
});
      
});


//I-P BUTTON (GROUP 2) VVVVV

$(function() {
      $(".i-p-button").click(function()
           {
           
        alert('I-P Clicked!')   
		
		function createFruits(group){
    	
		var i = 0;

		while(i < myFoods.fruit.length) {
  				var theFruit = myFoods.fruit[i];

    			if(group == theFruit.group) {

	  				var li = $("<li>");
  					var name = $("<div class=name-p>").text(theFruit.name);
  					var size = $("<div class=size-p>").text(theFruit.size);
  					var img = $("<img>").attr('src',theFruit.picture); 

					li.append(img).append(name).append(size);
					$("#food-result").append(li);
				}
		i++;
		}
    
		}
		
		$("#food-result").empty();
   		createFruits(2);
           		}
      		);
      
});

//Q-Z BUTTON (GROUP 3) VVVVV

$(function() {
      $(".q-z-button").click(function()
           {
           
        alert('Q-Z Clicked!')   
		
		function createFruits(group){
    	
		var i = 0;

		while(i < myFoods.fruit.length) {
  				var theFruit = myFoods.fruit[i];

    			if(group == theFruit.group) {


					
	  				var li = $("<li>");
  					var name = $("<div class=name-p>").text(theFruit.name);
  					var size = $("<div class=size-p>").text(theFruit.size);
					var img = $("<img>").attr('src',theFruit.picture); 

					li.append(img).append(name).append(size);
					$("#food-result").append(li);
				}
		i++;
		}
    
		}
		
		$("#food-result").empty();
   		createFruits(3);
           		}
      		);
      
});



alert('POOP!');