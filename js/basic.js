
$(document).ready(function(){
	// Mobile GNB Menu
	mobileMenu();


	
});

$( window ).scroll(function() {	
	var win_scroll_val = $(window).scrollTop();
	if( win_scroll_val >= 80 ) {
		$('#wrap').addClass('scroll-cr');
		if( win_scroll_val >= 180 ) {
			$('#wrap').addClass('on');
		}

	};
	if( win_scroll_val <= 180 ){
		$('#wrap').removeClass('on');
		if( win_scroll_val <= 80 ){
			$('#wrap').removeClass('scroll-cr');
		}
	}
	
});



// Mobile GNB Menu
function mobileMenu(){
	$(".depth2 li a").on("click",function(event){		
		if($(this).next().length != 0){
			event.preventDefault();
			$(".depth2 li a").not(this).removeClass("on").next().slideUp();
			$(this).toggleClass("on").next().slideToggle();	
		}
		event.stopImmediatePropagation();		
	});

	$(".depth1 li a").on("click",function(event){
		if($(this).next().length > 0){
			event.preventDefault();
			$(".depth1 li a").not(this).removeClass("on").next().slideUp();
			$(this).toggleClass("on").next().slideToggle();	
			$(".depth2 li a").not(this).next().slideUp();
		}
	});
};
function toggle_mobile_menu() {
	window.scrollTo(0,0);
	$(".depth2").css('display', 'none');
	$(".block1").css('display', 'block');
	$(".depth3").css('display', 'none');
	$(".block2").css('display', 'block');
	
	$(".depth1 a").removeClass('on');
	
	if($('#navigation_mobile').hasClass('nav_on')){
		$('#navigation_mobile').removeClass('nav_on');
		setTimeout(function() {
			$(".header_fullmenu_m").css('display', 'none');
			$(".navigation_mobile_bg").css('display', 'none');
			$(".m_navi").removeClass('on');
		}, 5);

	}else{
		$(".header_fullmenu_m").css('display', 'block');
		$(".navigation_mobile_bg").css('display', 'block');
		$('#navigation_mobile').addClass('nav_on');
		$(".m_navi").addClass('on');
	};
}

//사이트링크
function toggle_sitelink() {
	if($('.btn_sitelink').hasClass('on')){
		$(".toggle_box").slideUp(500);
		$('.btn_sitelink').removeClass('on');
	}else{
		$(".toggle_box").slideDown(500);
		$('.btn_sitelink').addClass('on');
	}
	
}


//팝업
function popup(url,name,option_c){
	var option = "width = 700, height = 600, top = 100, left = 200, location = no"	
	if(option_c != null){
		var option = option_c
	}
	window.open(url, name, option);
};

//클로스
function s_close(){
	window.close();
};





