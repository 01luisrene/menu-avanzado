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

	var scroleo = function(ancho){
		if($(window).scrollTop() > 1) {
			if(ancho >= 768 && ancho <= 991){
				$('#js-contenedor-menu #js-contenedor-logo').addClass('hide-logo');
			}
			if(ancho <= 767){
				$('#js-contenedor-menu .ico-menu-center').addClass('hide-logo height-menu');
			}
		} else{
			if(ancho >= 768 && ancho <= 991){
				$('#js-contenedor-menu #js-contenedor-logo').removeClass('hide-logo');
			}
			if(ancho <= 767){
				$('#js-contenedor-menu .ico-menu-center').removeClass('hide-logo height-menu');
			}
		}
	};
	$(window).on('scroll', function() {
		var ancho = $(window).width();
		scroleo(ancho)
		$(window).resize(function() {
			var ancho = $(window).width();
			scroleo(ancho);
		});
	});
});