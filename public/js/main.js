$(function(){
	 	$(".tab_content").hide();
	  $("ul.tabs li:first").addClass("active").show();
	  $(".tab_content:first").show();

	  $("ul.tabs li").click(function(){
	    
	   $("ul.tabs li").removeClass("active");
	   $(this).addClass("active");
	   $(".tab_content").hide();

	   var activeTab = $(this).find("a").attr("href");
	   $(activeTab).fadeIn();
	   return false;
	  
	  });

	  var startX, offsetX, el = $("li .ui-btn-inner");
		el[0].addEventListener('touchstart', function(e) {
		  e.preventDefault();
		  offsetX = ($(window).width()-el.outerWidth(true))/2;
		  startX = e.targetTouches[0].pageX - offsetX;
		}, false);
		el[0].addEventListener("touchmove", function(e) {
		  e.preventDefault();
		  var diffX = (e.changedTouches[0].pageX - offsetX) - startX;
		  el.css("-webkit-transform", "translate3d("+diffX+"px, 0, 0)");
		}, false);
		el[0].addEventListener("touchend", function(e) {
		  e.preventDefault();
		  el.css("-webkit-transform", "translate3d(0, 0, 0)");
		}, false);

});