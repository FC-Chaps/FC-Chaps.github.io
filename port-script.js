var main = function(){
	
	$(".proj-img").click(function(){
		$(this).next().next().toggleClass("hidden");
		$(this).next().toggleClass("hidden");
	});
	
	$(".proj-img").mouseover(function(){
		$(this).addClass("active");
	});
	
	$(".proj-img").mouseleave(function(){
		$(this).removeClass("active");
	});
}

$(document).ready(main);

