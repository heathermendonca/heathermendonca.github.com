
//For letter sorting

$(function() {

  var ajax = $.get("fooddata.json",function(data) {
    console.log(data);
  });

});


$(function() {
  
  var ajax = $.get("fooddata.json",function(response) { 
  
  	var i = 0;
  	while(i < response.data.length) {
  	var photo = response.data[i];
//what is photo?  

  	var li = $("<li>");
  	var name = $("<div class=name-p>");
  	var size = $("<div class=size-p''>");
  	var img = $("<img>").attr('src',picture); 

  
	li.append(img).append(name).append(size);
	$("#food-result").append(li);
	i++;
    
    
    }
  });

});;


//how to sort?

alert('POOP!');