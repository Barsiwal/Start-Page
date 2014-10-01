$("document").ready(function () {
	var loader = document.querySelector('.circle');
	var logo = document.querySelector('.logo');
	var header = document.getElementsByTagName('header');
	
	
	
	var length = loader.getTotalLength();
	loader.style.transition = loader.style.WebkitTransition =
		'none';
	loader.style.strokeDasharray = length + ' ' + length;
	loader.style.strokeDashoffset = length;
	loader.getBoundingClientRect();
	loader.style.transition = loader.style.WebkitTransition =
		'stroke-dashoffset 4s ease-in-out';
	loader.style.strokeDashoffset = '0';
});