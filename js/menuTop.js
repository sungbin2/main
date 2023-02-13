//// 탑메뉴
$(document).ready(function(){
	$('#menu_wrap').mouseover(function(){
		$('#header').addClass('over_wh');
		$('.header_bg').addClass('on');
	});
	$('#menu_wrap').mouseout(function(){
		$('#header').removeClass('over_wh');
		$('.header_bg').removeClass('on');
	});

	$('.wrap_depth2').mouseover(function(){
		$('#header').addClass('over_wh');
		$('.header_bg').addClass('on');
	});
	$('.wrap_depth2').mouseout(function(){
		$('#header').removeClass('over_wh');
		$('.header_bg').removeClass('on');
	});
});


















