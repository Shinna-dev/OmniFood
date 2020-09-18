$(document).ready(function() {

	/* -----------------------------------------------------------------*/
	/* ------------------STICKY NAVIGATION------------------------------*/

	$('.js--section-features').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px'
	});

	/* -----------------------------------------------------------------*/
	/* ------------------SCROLL ON BUTTONS------------------------------*/

	$('.js--scroll-to-plans').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
	});

	$('.js--scroll-to-start').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
	});

	/* -----------------------------------------------------------------*/
	/* ------------------------ ANIMATIONS------------------------------*/
	
	/* animate features section*/

	/*$('.js--wp-1').waypoint(function(direction) {
		$('js--wp-1').addClass('animate__animated animate__fadeIn')	
	}, {
		offset: '50%'
	});

	/* animate app screen image section-steps*/

	/* $('.js--wp-2').waypoint(function(direction) {
		$('js--wp-2').addClass('animate__animated animate__fadeInUp')	
	}, {
		offset: '50%'
	});

	/* animate section-cities*/

	/* $('.js--wp-3').waypoint(function(direction) {
		$('js--wp-3').addClass('animate__animated animate__fadeIn')	
	}, {
		offset: '50%'
	});

	/* animate first column in section plans*/

	/* $('.js--wp-4').waypoint(function(direction) {
		$('js--wp-4').addClass('animate__animated animate__pulse')	
	}, {
		offset: '50%'
	});

	/*  mobile navigation*/

	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('js--nav-icon span');

		nav.slideToggle(200);

	/*	if (icon.hasClass('menu')) {
			icon.addClass('close');
			icon.removeClass('menu');
		} else {
			icon.addClass('menu');
			icon.removeClass('close');
		}*/
	});
});