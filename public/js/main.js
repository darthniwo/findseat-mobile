$(function(){

	$(document).bind('pageinit', function(){
		console.log('works');
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

	  if($('.main-navbar li.current').next().length > 0){
	  	$('.main-navbar li.current').next().addClass('border-left');
	  }

	  if($('.main-navbar li.current').prev().length > 0){
	  	$('.main-navbar li.current').prev().addClass('border-right');
	  }
	  // if($('.tab-container').length > 0){
	  // 	$('.tab-container').css('height', $(window).height() - 112);
	  // }


	  $(window).resize(function(){
	  	// if($('.tab-container').length > 0){
	  	// 	$('.tab-container').css('height', $(window).height() - 112);
	  	// }
	  });

	  // var startX, offsetX, els = document.querySelectorAll("li div.ui-btn-inner");
	  // for(var i = 0, len = els.length; i < len; i++ ){
	  // 	console.log(els[i])
	  // 	var el = els[i];
			// el.addEventListener('touchstart', function(e) {
			// 	console.log(this)
			//   e.preventDefault();
			//   offsetX = ($(window).width()-$(this).outerWidth(true))/2;
			//   startX = e.targetTouches[0].pageX - offsetX;
			//   console.log('touchstart');
			// }, false);
			// el.addEventListener("touchmove", function(e) {
			//   e.preventDefault();
			//   var diffX = (e.changedTouches[0].pageX - offsetX) - startX;
			//   // $(this).css("-webkit-transform", "translate3d("+diffX+"px, 0, 0)");
			//   // console.log('touchmove');
			// }, false);
			// el.addEventListener("touchend", function(e) {
			//   e.preventDefault();
			//   // $(this).css("-webkit-transform", "translate3d(0, 0, 0)");
			//   console.log('touchend');
			// }, false);
	  // }
	 });



});