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
		////////// Yaniv Comment //////////
		// JavaScript arrays have a .map function
		// that you can use
	  ///////////////////////////////////
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
			$bubble.css('font-size', ((wordCount/maxWordCount)*50));
			var width = bubble.offsetWidth;
			$bubble.height(width);
			$bubble.css('border-radius', width);
			////////// Yaniv Comment //////////
			// Since the vertical-align isn't dependant on anything
			// we could and should extract it to a CSS file.
			// Keeping it in a CSS file will make it easier to find/use
			// for other people.
		  ///////////////////////////////////
			$bubble.css('vertical-align', 'middle');
		});
	}

	// ***** Article List Appear *****

	function letThereBeGhost(){
		$('.bubble-container').animate({left: '-400px'});
		$('.ghostface').slideDown(400, function(){
			ghostfaceKillin = true;
		});
	}

	function ghostfaceHasLeftTheBuilding(){
		$('.bubble-container').animate({left: '0'});
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

