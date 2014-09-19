var main = function(){
	
	$(".proj-img").click(function(){
		$(this).next().next().toggleClass("port-hidden");
		$(this).next().toggleClass("port-hidden");
	});
	
	$(".proj-img").mouseover(function(){
		$(this).addClass("port-active");
	});
	
	$(".proj-img").mouseleave(function(){
		$(this).removeClass("port-active");
	});
}

$(document).ready(main);

