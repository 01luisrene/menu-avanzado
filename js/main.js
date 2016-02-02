$(document).ready(function(){
	//script para colocar el menú estático
  $('#js-contenedor-menu').scrollToFixed();

  $('#js-ico-menu').on('click',function(e){
    e.preventDefault();
    $('.main-menu').slideToggle();                 
  });

	$(window).on('scroll', function() {
		if($(window).scrollTop() > 1) {
			if($( window ).width() >= 768 && $( window ).width() <= 991){
				$('#js-contenedor-menu #js-contenedor-logo').addClass('hide-logo');
			}
			//$('#js-contenedor-menu #js-contenedor-logo').addClass('hide-logo');
			//$('#js-contenedor-ico').addClass('height-contenedor-ico');
			//$('#js-contenedor-ico .ico-menu-center').addClass('hide-logo');
			if($( window ).width() <= 767){
				$('#js-contenedor-menu .ico-menu-center').addClass('hide-logo height-menu');
			}
		} else {
			//$('#js-contenedor-menu #js-contenedor-logo').removeClass('hide-logo');
			//$('#js-contenedor-ico').removeClass('height-contenedor-ico');
			//$('#js-contenedor-ico .ico-menu-center').removeClass('hide-logo');
			if($( window ).width() >= 768 && $( window ).width() <= 991){
				$('#js-contenedor-menu #js-contenedor-logo').removeClass('hide-logo');
			}
			if($( window ).width() <= 767){
				$('#js-contenedor-menu .ico-menu-center').removeClass('hide-logo height-menu');
			}
		}
		
	});
});