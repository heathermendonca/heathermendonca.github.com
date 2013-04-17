$(function(){

//$function thing needed to work properaly

//One Way...
//$("#main").append("<p>my visulaization here</p>");


//Another Way...
$("<p>").text("Crime Incidents per Neighborhood")
	.appendTo("#main");

});
 
 
$(function() {

	var i = 0;
    while(i < data.length) {
      
      var stuff = data[i];
      
      var areaname = stuff.name;
      
      var crimes = stuff.domestic + stuff.incidents;
      
      var maxCrime = 12840;
      
//adding second row for domestic only.
	  
	  var domCrimes = stuff.domestic;
      
      var fraction = crimes / maxCrime;
      var Morefraction = domCrimes / maxCrime;

      
      var crimeWidth = fraction * 600;
      var domWidth = Morefraction * 600;


            								
      var row = $ ("<div>").addClass("row");
      
      var nameDiv = $ ("<div>").addClass("namestyle").text(areaname)
      	.appendTo(row); 	 	
      	
      var crimeDiv = $ ("<div>").addClass("crimestyle").css({ width: crimeWidth})
      	.appendTo(row); 	
      					
      var domDiv = $ ("<div>").addClass("domesticstyle").css({ width: domWidth})
      	.appendTo(row); 					
      									
      
      $("#main").append(row);
      	
      i++;
    
    }
    
    alert(crimes);
    
});

