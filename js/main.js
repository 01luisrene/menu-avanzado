$(document).ready(function(){
	var menu = $('.box-main-menu');
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
	$('#js-icono-menu-movil').on('click',function(e){
		e.preventDefault();
		menu.slideToggle();                 
	});

	//Esta función sirve para validar cuando el navegador, es cambiado de tamaño manualmente.
	$(window).resize(function() {
		//esta condición sirve para mostrar el menú si esta oculto.
		//cuando la pantalla sea mayor a 768px
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
				$('#js-contenedor-menu .icono-menu-movil-center').addClass('hide-logo height-menu');
			}
		} else{
			if(ancho >= 768 && ancho <= 991){
				$('#js-contenedor-menu #js-contenedor-logo').removeClass('hide-logo');
			}
			if(ancho <= 767){
				$('#js-contenedor-menu .icono-menu-movil-center').removeClass('hide-logo height-menu');
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
		});
	});

	/* No tomar importancia a estos scripts*/

	//https://highlightjs.org/
	 $('pre code').each(function(i, block) {
	    hljs.highlightBlock(block);
	 });
});