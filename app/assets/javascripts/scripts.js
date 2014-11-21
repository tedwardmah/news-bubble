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

});

