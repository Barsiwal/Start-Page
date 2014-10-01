$("document").ready(function () {
	var loader = document.querySelector('.circle');
	var logo = document.querySelector('.logo');
	var header = document.getElementsByTagName('header');


	$('.container').addClass('start');
	var length = loader.getTotalLength();
	loader.style.strokeDasharray = length + ' ' + length;
	loader.style.strokeDashoffset = length;

	$('.circle').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function (e) {
			$('.container').removeClass('start');
			$('.container').addClass('end');

		});
});