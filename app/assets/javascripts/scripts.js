//global stuff
var $bubbles;
var maxWordCount;
var $articleListHeadline;
var articleList = new ArticleList({model: Article});
var ghostfaceKillin = false;
var $lastClickedLead;

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

	function calculateBaseWidth(){
		var adjustedWidths = [];
		$bubbles.each(function(index, bubble){
			var width = bubble.offsetWidth;
			adjustedWidths.push(width);
		})
		return getMaxOfArray(adjustedWidths) + 15; //use 15 to add "padding" for longest word
	}

	function makeCircles() {
		console.log(calculateBaseWidth());
		var baseWidth = calculateBaseWidth();
		$bubbles.each(function(index, bubble) {
			var $bubble = $(bubble);
			var wordCount = $bubble.data('word-count');
			$bubble.css('font-size', ((wordCount/maxWordCount)*50));
			$bubble.width(baseWidth*((wordCount/maxWordCount)));
			$bubble.height(baseWidth*(wordCount/maxWordCount));
			$bubble.css('border-radius', baseWidth*(wordCount/maxWordCount));	
			$bubble.css('vertical-align', 'middle');
			$bubble.css('background-size', baseWidth*(wordCount/maxWordCount))
		});
	}

	// ***** Article List Appear *****

	function letThereBeGhost(){
		// $('.bubble-container').animate({left: '-400px'});
		$('.bubble').each(function(index, bubble){
			setTimeout(function(){
				$(bubble).animate({left: '-400px'});
			}, 50*index)
		})
		$('.ghostface').slideDown(1000, function(){
			ghostfaceKillin = true;
		});
	}

	function ghostfaceHasLeftTheBuilding(){
		// $('.bubble-container').animate({left: '0'});
		$($('.bubble').get().reverse()).each(function(index, bubble){
			setTimeout(function(){
				$(bubble).animate({left: '0'});
			}, 25*index)
		})

		$('.ghostface').slideToggle();
		ghostfaceKillin = false;
	}

	function changeHeadline(newHeadline){
		$articleListHeadline.text(newHeadline);
	};


// ****************** DOCUMENT READY!!! ***************************
$(document).ready(function(){
	console.log(":)");

	// Constants
	$bubbles = $('.bubble');
	maxWordCount = getMaxWordCount();
	$articleListHeadline = $('#keyword-articles');

	// ***** ARTICLES LIST *****
	var listView = new ArticleListView({
		collection: articleList,
		$el: $('.supreme-clientele'),
		modelView: ArticleView,
	});

	$(".ghostface").hide();

	// HAMBURGER HIDE FUNCTION
	$('img').on("click", function() {
		ghostfaceHasLeftTheBuilding();
	});

	$bubbles.on("click", function(){
		var wordId   = $(this).data('word-id');
		var wordText = this.firstElementChild.textContent;
		changeHeadline(wordText);
		articleList.fetch(wordId);
		letThereBeGhost();
	});

	$(document).on("click", function () {
		if (ghostfaceKillin){
			ghostfaceHasLeftTheBuilding();
		}
	});

	$(".ghostface").on("click", function (event) {
		event.stopPropagation();
	});


	// THIS DOESN'T WORK
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

