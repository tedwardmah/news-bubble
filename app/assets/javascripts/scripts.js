//global stuff
var $bubbles;
var maxWordCount;

	// ***** CIRCLE MAKING FUN *****
	function getMaxOfArray(numArray) {
		return Math.max.apply(null, numArray);
	}

	function getMaxWordCount() {
		var wordCounts = [];
		$bubbles.each(function(index, bubble){
			wordCounts.push($(bubble).data('word-count'));
		})
		return getMaxOfArray(wordCounts);
	}

	function makeCircles() {
		$bubbles.each(function(index, bubble) {
			var $bubble = $(bubble);
			var wordCount = $bubble.data('word-count');
			$bubble.css('font-size', ((wordCount/maxWordCount)*60));
			var width = bubble.offsetWidth;
			$bubble.height(width);
			$bubble.css('border-radius', width);	
			$bubble.css('vertical-align', 'middle');
		});
	}


// ****************** DOCUMENT READY!!! ***************************
$(document).ready(function(){
	console.log(":)");

	// Constants
	$bubbles = $('.bubble');
	maxWordCount = getMaxWordCount();


	// ***** ARTICLES LIST *****
	$(".ghostface").hide();

	$bubbles.on("click", function() {
		$('.ghostface').slideDown();
		$('.header').animate({right: "25%"});
	});



	$('img').on("click", function() {
		$('.ghostface').slideToggle();
	});

	// $(".headline").on("click", function() {
	// 	$(this).next().slideToggle();
	// });

	$(".headline").hover(function(){
    $(this).animate({ width: "800px", height: "80px" });
		}, function() {
    $(this).animate({ width: "820px", height: "80px" });
	});





	// ***** CALL NECESSARY FUNCTIONS *****
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

