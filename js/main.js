'use strict';
var a_view = $(window).width(),
		list_menu = $('.box-main-menu'),
		menu_fijo = $('#js-contenedor-menu'),
		menu_offset = menu_fijo.offset(),
		logo_tablet = $('#js-contenedor-menu #js-logo-nameapp'),
		logo_smartphone = $('#js-contenedor-menu .icono-menu-movil-center');

var menuWebLince = (function ($) {

	 //======= Función para Menú fijo =======
	var	menu_movil_fijo = function(){

		if($(window).scrollTop() > menu_offset.top) {
		  menu_fijo.addClass('menu-fijo');
		} else {
		  menu_fijo.removeClass('menu-fijo');
		}

	},
	//======= Función Menú: Sirve para desplegar o replegar el menú en equipos móviles =======
	toggle_menu = function(){
		$('#js-icono-menu-movil').on('click',function(e){
			e.preventDefault();
			list_menu.slideToggle();                 
		});
	},
	//======= Esta función sirve para mostrar el menú, cuando el usuario repliega el menú con la función toggle_menu =======
	mostrar_menu = function() {
		/*
			Esta condición se cumple cuando la pantalla sea mayor a 768px
			--------
			y es usado solo en el evento resize de la función g_function_nav
		*/
		var w = $(window).width();
		if (w > 768 && list_menu.is(':hidden')) {
			list_menu.removeAttr('style');
		};
	},
	//======= Función creada para agregar o eliminar clases, según sus condiciones internas =======
	cond_nav = function(ancho){
		if(ancho >= 768 && ancho <= 991){

			logo_tablet.addClass('hide-logo');

		}else
		{
			logo_tablet.removeClass('hide-logo');
		}

		if(ancho <= 767){
		
			logo_smartphone.addClass('hide-logo height-menu');

		}else{

			logo_smartphone.removeClass('hide-logo height-menu');
		}
	},
		//======= Función creada para agregar o eliminar clases, según sus condiciones internas y el scrollTop sea mayor a 1px =======
	cond_nav_scroll = function(ancho){
		
			if($(window).scrollTop() > 1){
			if(ancho >= 768 && ancho <= 991){
				logo_tablet.addClass('hide-logo');
			}
			if(ancho <= 767){
				logo_smartphone.addClass('hide-logo height-menu');
			}
			
		}else{
			if(ancho >= 768 && ancho <= 991){
				logo_tablet.removeClass('hide-logo');
			}
			if(ancho <= 767){
				logo_smartphone.removeClass('hide-logo height-menu');
			}
		}
	},
	//======= Función global del menú web =======
	g_function_nav = function(){
		cond_nav(a_view);
		cond_nav_scroll(a_view);

		$(window).on('resize', function(){
			var a_r = $(this).width();

			//======= Mostrar menú web =======
			mostrar_menu();

			if($(window).scrollTop() > 1){
				cond_nav(a_r);
			}

			$(window).on('scroll', function(){
				cond_nav_scroll(a_r);
			});
		});
	},
	//======= Función scroll del menú web =======
	scroll_nav = function(){
		$(window).on('scroll', function() {
			//====== Función cond_nav_scroll =======
			cond_nav_scroll(a_view);

			//======= Función de menú fijo
			menu_movil_fijo();

		});
	},
	// MenuWebLince javascripts inicialización
  init = function () {
    menu_movil_fijo();
    toggle_menu();
		g_function_nav();
		scroll_nav();

  };

  return {
      init: init
  };

})(jQuery);

(function () {
    menuWebLince.init();
})();