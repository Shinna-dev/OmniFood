$(document).ready(function() {


	/* -----------------------------------------------------------------*/
	/* ------------------STICKY NAVIGATION------------------------------*/

	$('.js--section-features').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
			$('.js--logo-black').show();
		} else {
			$('nav').removeClass('sticky');
			$('.js--logo-black').hide();

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

	$('.js--wp-1').waypoint(function() {
		$('js--wp-1').addClass('animate__animated animate__bounce')	
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
		$('.js--main-nav').slideToggle(200);
		console.log($('mobile-icon menu').css('display'));
		if ($('.mobile-icon-menu').css('display') != 'none') {
			$('.mobile-icon-close').show();
			$('.mobile-icon-menu').hide();
		} else {
			$('.mobile-icon-menu').show();
			$('.mobile-icon-close').hide();
		}
	});
});