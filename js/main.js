$(document).ready(function(){
	var menu = $('.main-menu');
	//script para colocar el menú estático
	$('#js-contenedor-menu').scrollToFixed();

	$('#js-ico-menu').on('click',function(e){
	e.preventDefault();
	menu.slideToggle();                 
	});

	$(window).resize(function(event) {
		var w = $(window).width();
		if (w > 768 && menu.is(':hidden')) {
			menu.removeAttr('style');
		};
	});

	$(window).on('scroll', function() {
		if($(window).scrollTop() > 1) {
			if($( window ).width() >= 768 && $( window ).width() <= 991){
				$('#js-contenedor-menu #js-contenedor-logo').addClass('hide-logo');
			}
			if($( window ).width() <= 767){
				$('#js-contenedor-menu .ico-menu-center').addClass('hide-logo height-menu');
			}
		} else{
			if($( window ).width() >= 768 && $( window ).width() <= 991){
				$('#js-contenedor-menu #js-contenedor-logo').removeClass('hide-logo');
			}
			if($( window ).width() <= 767){
				$('#js-contenedor-menu .ico-menu-center').removeClass('hide-logo height-menu');
			}
		}
		
	});
});