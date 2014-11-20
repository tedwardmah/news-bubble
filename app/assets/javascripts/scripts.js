$( document ).ready(function(){

$(".articles").hover(function(){
    $(this).animate({ width: "800px", height: "70px" });
		}, function() {
    	$(this).animate({ width: "820px", height: "80px" });
	});
});