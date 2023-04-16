
$(document).ready(function () {


	$('.burgerBtn').click(function () {
		$('.backgroundBurgerMenu').addClass('show');
		setTimeout(function () {
			$('.burgerMenuContainer').addClass('show');
		}, 50);
	})


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

	// -----------------------------------

	$('.playBtn').click(function () {
		$('.videoPlayer').addClass('show');
	});


	$('.videoPlayer__exitBtn').click(function () {
		$('.videoPlayer').removeClass('show');
	});

	$('.exit_video_bg').click(function () {
		$('.videoPlayer').removeClass('show');
		$(".videoPlayer")[0].pause();
		$("#video")[0].pause();
		jQuery("iframe").each(function () {
			jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
		});
	});

	$(document).on('click', '#close_vid', function () {
		jQuery("iframe").each(function () {
			jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
		});
	});

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


});

