$(document).ready(function () {


	$('.burgerBtn').click(function () {
		$('.backgroundBurgerMenu').addClass('show');
		setTimeout(function () {
			$('.burgerMenuContainer').addClass('show');
		}, 50);
	})

	$('.burgerBtn').click(function () {
		$('.backgroundBurgerMenu').addClass('show');
		$('.burgerMenuContainer').addClass('show');

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


	$('.burgerBtn').click(function () {
		$('.burgerMenu').addClass('show');
	})





});