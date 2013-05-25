$(function(){

	$(document).bind('pagechange', function(){
		if($('.tab-container').length > 0){
			console.log('detected');
			$(".tab_content:first").show();
		}else{
			console.log('not detected');
		}
	});

	$(document).bind('pageinit', function(){
		console.log('works');
	 	$(".tab_content:not(.show)").hide();
	 	$("ul.tabs li").removeClass("active");
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

	  if($('#dashboard').length > 0){
	  	$('.trigger').off('tap');
	  	$('.trigger').on('tap', function(event){
	  		console.log('tap');
	  		$('#dashboard .ui-header').toggleClass('closed');
				// $('#dashboard .ui-content').toggleClass('closed');
				$('#dashboard .ui-header').toggleClass('open');
				// $('#dashboard .ui-content').toggleClass('open');
				
	  	});
	  }

	  // $('#tab-holder').on('swiperight', function(){
	  // 	$('#menu-trigger').trigger('tap');
	  // });

	  $('#menu').on('panelopen', function(){
	  	$('#menu-trigger').addClass('panel-open');
	  	console.log('panel-open');
	  });

	  $('#menu').on('panelclose', function(){
	  	$('#menu-trigger').removeClass('panel-open');
	  	console.log('panel-closed');
	  });

	  $('.dates li:not(.headline)').on('tap', function(){
	  	$('.dates li.current_date').removeClass('current_date');
	  	$(this).addClass('current_date');
	  });

	  if($('.main-navbar li.current').next().length > 0){
	  	$('.main-navbar li.current').next().addClass('border-left');
	  }

	  if($('.main-navbar li.current').prev().length > 0){
	  	$('.main-navbar li.current').prev().addClass('border-right');
	  }

	 if($(".slider").length > 0){
	 		console.log('here');
	  	$('.slider').flexslider({
	  		itemWidth: 320,
	  		touch:"true",
	  		animation:"slide"

	  	});
	  }

	  if($('.overlayed-content').length > 0){
	  	console.log('height: ' + $(window).height());
	  	console.log('width: ' + $(window).width());
	  	$('.overlayed-content').css('height', $(window).height());
	  	$('.overlayed-content').css('width', $(window).width());
	  }

	  // $('.badges .show-badges').on('tap', function(){
	  // 	console.log('tap tap tap');
	  // 	$('li.social-network').slideToggle();
	  // 	$('.badges .hidden-badges').slideToggle();
	  // 	$(this).toggleClass('open');
	  // 	if($(this).hasClass('open')){
	  // 		$(this).text('-');
	  // 	}else{
	  // 		$(this).text('+');
	  // 	}
	  //});

	  // $('#cartelera ul.ui-listview li').on( 'swiperight', function(){
	  // 	var self = $(this);
	  // 	self.addClass('teaser');
	  // });
	  // $('#cartelera ul.ui-listview li').on( 'swipeleft', function(){
	  // 	var self = $(this);
	  // 	self.removeClass('teaser');
	  // });

	  // if($('.tab-container').length > 0){
	  // 	$('.tab-container').css('height', $(window).height() - 112);
	  // }


	  $(window).resize(function(){
	  	// if($('.tab-container').length > 0){
	  	// 	$('.tab-container').css('height', $(window).height() - 112);
	  	// }

	  	if($('.overlayed-content').length > 0){
		  	console.log('height: ' + $(window).height());
		  	console.log('width: ' + $(window).width());
		  	console.log('resized');
		  	$('.overlayed-content').css('height', $(window).height() + 1);
	  		$('.overlayed-content').css('width', $(window).width());

		  }

		  if( $(window).height() < $(window).width()){
		  	$('html').addClass('landscape');
		  }else{
		  	$('html').removeClass('landscape');
		  }

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