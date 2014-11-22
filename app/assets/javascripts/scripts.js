$( document ).ready(function(){

	$(".articles").hover(function(){
	    $(this).animate({ width: "800px", height: "70px" });
			}, function() {
	    	$(this).animate({ width: "820px", height: "80px" });
		});

	$(".lead").hide();

	$(".articles").on("click", function() {
		$(this).next().slideToggle();
	});

	$(".circles").hover(function(){
		$(this).animate({ width: "250px", height: "250px"})
		}, function() {
	    	$(this).animate({ width: "200px", height: "200px" });
	})

	$(".circles").hide();

	$(".start-btn").on("click", function() {
		$(".circles").next().slideToggle();
		$(".start").hide();
		return false;
	});

	// var el = $(".circles")
	// el.on("click", function(event){
	// 	event.preventDefault();
	// 	$.ajax('/words/:id' {
	// 		type: 'GET',
	// 		data: word_id,
	// 		dataType: 'json',
	// 		success: function() {
	// 			$('.articles').html


	// 		}

	// 	});
	// });



});

