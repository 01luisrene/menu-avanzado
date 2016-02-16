$(document).ready(function(){
	var list_menu = $('.box-main-menu'),
		menu_fijo = $('#js-contenedor-menu'),
		menu_offset = menu_fijo.offset();
	/*
	Esta función sirve para que cuando el usuario haga click en el botón de Menú Web se despliegue o repliegue.
	----
	Solo se podrá apreciar en pantallas menores a 768px
	*/
	$('#js-icono-menu-movil').on('click',function(e){
		e.preventDefault();
		list_menu.slideToggle();                 
	});

	//resize sirve para validar cuando el navegador es cambiado de tamaño manualmente.
	$(window).resize(function() {
		/*
		esta condición sirve para mostrar el menú si esta oculto.
		---------
		cuando la pantalla sea mayor a 768px
		*/
		var w = $(window).width();
		if (w > 768 && list_menu.is(':hidden')) {
			list_menu.removeAttr('style');
		};
	});


	$(window).on('scroll', function() {
		//========== Menú fijo ===========
		/*
			Cuando el usuario haga scroll automáticamente el menú web se quedara estático
		*/
		if($(window).scrollTop() > menu_offset.top) {
		  menu_fijo.addClass('menu-fijo');
		} else {
		  menu_fijo.removeClass('menu-fijo');
		}

		var ancho = $(window).width();
		scroleo(ancho)

		//resize sirve para validar cuando el navegador es cambiado de tamaño manualmente. 
		$(window).resize(function() {
			var ancho = $(window).width();
			scroleo(ancho);
		});
	});

	var scroleo = function(ancho){
		if($(window).scrollTop() > 1) {
			//Esta condición se cumple si la pantalla es mayor o igual a 768px y menor o igual a 991px
			if(ancho >= 768 && ancho <= 991){
				/**
				Si la condición se cumple agregamos la clase hide-logo
				**/
				$('#js-contenedor-menu #js-contenedor-logo-nameapp').addClass('hide-logo');
			}
			/*
			Esta condición se cumple si el contenedor con la clase contenedor-iconos tiene al lado clase icono-menu-movil-center
			--------
			y la pantalla sea menor o igual a 767
			*/
			if(ancho <= 767){
				/**
				Si la condición se cumple agregamos las clases hide-logo height-menu
				**/
				$('#js-contenedor-menu .icono-menu-movil-center').addClass('hide-logo height-menu');
			}
		} else{
			/**
				Si no se cumple removemos la clase hide-logo
			**/
			if(ancho >= 768 && ancho <= 991){
				$('#js-contenedor-menu #js-contenedor-logo-nameapp').removeClass('hide-logo');
			}

			/**
				Si no se cumple removemos las clases hide-logo y height-menu
			**/
			if(ancho <= 767){
				$('#js-contenedor-menu .icono-menu-movil-center').removeClass('hide-logo height-menu');
			}
		}
	};
});