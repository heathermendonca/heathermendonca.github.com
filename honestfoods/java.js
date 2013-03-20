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
});

scrollorama.onBlockChange(function() {
		var i = scrollorama.blockIndex;
		$('#console')
		.css('display','block')
		.text('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
});


//scrollorama target --- my stuff

scrollorama
	//.animate('#example1',{duration:400, property:'opacity'})
	.animate('#textone',{ delay: 100, duration: 100, start:-1400, end:0 })



//
alert('D:<');
//test test test guuurl