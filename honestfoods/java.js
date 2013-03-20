alert('HEY GUUUURL ITS LOADING');
//test test test guuurl



//circle flipping attempt

$(function() {
  function flipCard() {
  	$(this).toggleClass("flip");
}
  
  $("#big-circle").on("click", flipCard);
});