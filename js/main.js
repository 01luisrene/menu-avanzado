$(document).ready(function(){
	//script para colocar el menú estático
  $('#js-contenedor-menu').scrollToFixed();

  $('#js-ico-menu').on('click',function(e){
    e.preventDefault();
    $('.main-menu').slideToggle();                 
  });

	$(window).on('scroll', function() {
		if($(window).scrollTop() > 1) {
			$('#js-contenedor-logo').addClass('hide-logo');
			$('#js-contenedor-ico').addClass('height-contenedor-ico');
			$('#js-contenedor-ico .ico-menu-center').addClass('hide-logo');
		} else {
			$('#js-contenedor-logo').removeClass('hide-logo');
			$('#js-contenedor-ico').removeClass('height-contenedor-ico');
			$('#js-contenedor-ico .ico-menu-center').removeClass('hide-logo');
		}
	});
});