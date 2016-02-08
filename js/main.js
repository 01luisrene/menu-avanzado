$(document).ready(function(){
	var menu = $('.main-menu');
	/*
	Esta línea de código llama a la función de la libreria scrollToFixed
	----
	Sirve para que el menú se quede fijo
	*/
	$('#js-contenedor-menu').scrollToFixed();

	/*
	Esta función sirve para que cuando el usuario haga click en el botón de menú se despliegue o repliegue.
	----
	Se podra apreciar en pantallas menores a 768px
	*/
	$('#js-ico-menu').on('click',function(e){
		e.preventDefault();
		menu.slideToggle();                 
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
		//Esta función sirve para validar cuando el navegador, es cambiado de tamaño manualmente. 
		$(window).resize(function() {
			var ancho = $(window).width();
			scroleo(ancho);
			//esta condición de cumplira si la pantalla es mayor a 768px y el menú web lince esta oculto
			if (ancho > 768 && menu.is(':hidden')) {
				menu.removeAttr('style');
			};
		});
	});
});