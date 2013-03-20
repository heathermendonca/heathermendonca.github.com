alert('HEY GUUUURL ITS LOADING');
//test test test guuurl



//circle flipping attempt

/* $(function() {
  function flipCard() {
  	$(this).toggleClass("flip");
}
  
  $("#circle-holder").on("click", flipCard);
});

*/

//scrollorama
//v is that just for html?
$(document).ready(function() {
    var scrollorama = $.scrollorama({
        blocks:'.scrollblock'
    });
    
    scrollorama.onBlockChange(function() {
		var i = scrollorama.blockIndex;
	});
	
	scrollorama
		//.animate('#example1',{duration:400, property:'opacity'})
		.animate('#circle-holder',{ delay: 0, duration: 50, property: 'rotate-y', start:-1400, end:0 })
		.animate('#textone',{ delay: 100, duration: 300, property: 'left', start:-1400, end:0 })
		.animate('#texttwo',{ delay: 150, duration: 300, property: 'left', start:-1400, end:0 })
		.animate('#textthree',{ delay: 200, duration: 300, property: 'left', start:-1400, end:0 })
		.animate('#textfour',{ delay: 250, duration: 300, property: 'left', start:-1400, end:0 })
		.animate('#textfive',{ delay: 300, duration: 300, property: 'left', start:-1400, end:0 });

});


//
alert('D:<');
//test test test guuurl