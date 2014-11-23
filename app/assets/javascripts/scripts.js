$(document).ready(function(){

	$(".ghostface").hide();

  console.log(":)");
  var $bubbles = $('.bubble');

	$bubbles.on("click", function() {
		$('.ghostface').slideDown();
	});

	$('img').on("click", function() {
		$('.ghostface').slideToggle();
	});
  
  function makeCircles() {
    $bubbles.each(function(index, bubble) {
      var $bubble = $(bubble);
      var width = bubble.offsetWidth;
      $bubble.height(width);
      $bubble.css('border-radius', width);
      $bubble.css('vertical-align', 'middle');
    });
  }
  makeCircles();



});

	// $(".articles").on("click", function() {
	// 	$(this).next().slideToggle();
	// 	$(this)slide("left");
	// });


	// $(".article").hover(function(){
	//     $(this).animate({ width: "800px", height: "70px" });
	// 		}, function() {
	//     	$(this).animate({ width: "820px", height: "80px" });
	// 	});

	// $(".lead").hide();


	// $(".articles").on("click", function() {
	// 	$(this).next().slideToggle();
	// 	$(this)slide("left");
	// });

	// $(".circles").hover(function(){
	// 	$(this).animate({ width: "250px", height: "250px"})
	// 	}, function() {
	//     	$(this).animate({ width: "200px", height: "200px" });
	// })

	// $(".circles").hide();

	// $(".start-btn").on("click", function() {
	// 	$(".circles").next().slideToggle();
	// 	$(".start").hide();
	// 	return false;
	// });

