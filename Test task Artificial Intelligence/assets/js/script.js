import Splide from '@splidejs/splide';
$(document).ready(function () {


	$('.burgerBtn').click(function () {
		$('.backgroundBurgerMenu').addClass('show');
		setTimeout(function () {
			$('.burgerMenuContainer').addClass('show');
		}, 50);
	})

	// $('.burgerBtn').click(function () {
	// 	$('.backgroundBurgerMenu').addClass('show');
	// 	$('.burgerMenuContainer').addClass('show');

	// })

	$('.burgerBtn').click(function () {
		$('.burgerMenu').addClass('show');
	})

	$('.exitBtnBurgerMenu').click(function () {
		$('.burgerMenuContainer').removeClass('show');
		setTimeout(function () {
			$('.backgroundBurgerMenu').removeClass('show');
		}, 80);
	});

	$('.exitBtnBurgerMenu').click(function () {
		$('.burgerMenu').removeClass('show');
	});

	$('.backgroundBurgerMenu').click(function () {
		$('.burgerMenu').removeClass('show');
	});



	$('.selectboxit-container').click(function () {
		$('.languageSwitch__mark').toggleClass('up');
	});



	// ------------------------------------------------------
	const creators = $('.creators');
	creators.click(function () {
		$(this).toggleClass('show');
		$(".creators .item_content").stop().slideUp();
		$(".creators.show .item_content").stop().slideDown();
	})


	$('.artists').click(function () {
		$('.artists').toggleClass('show');
	})

	$('.musicians').click(function () {
		$('.musicians').toggleClass('show');
	})
	// ------------------------------------------------------
	const footer__column = $('.footer__column');
	footer__column.click(function () {
		$(this).toggleClass('show');
		$(".footer__column .footer__link").stop().slideUp();
		$(".footer__column.show .footer__link").stop().slideDown();
	})


	$('.footer__column').click(function () {
		$('.footer__column').$(this).toggleClass('show');
	})



	// ------------------------------------------------------


	new Splide('.splide').mount();



	// не работает
	$(window).resize(function () {
		if (window.innerWidth > 968) {

			if ($('.fourth_indicator').hasClass('itcss__indicator_active')) {
				console.log("Not there in array");
				$('.fourth_indicator').removeClass('itcss__indicator_active');
				$('.itcss__indicator_first').addClass('itcss__indicator_active');
			}
			else

				if ($('#fifth_indicator').hasClass('itcss__indicator_active')) {
					console.log("Not there in array");
					$('#fifth_indicator').removeClass('itcss__indicator_active');
					$('.itcss__indicator_first').addClass('itcss__indicator_active');
				}
		}

	});



	// $('.itc-slider__indicator').click(function () {
	// 	$('.slider__indicator').addClass('itcss__indicator_active');
	// 	this.click
	// })












});