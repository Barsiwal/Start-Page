$("document").ready(function () {
	var mainnav = $('.container');
	
	$('.l2 a').click(function () {
		if (mainnav.hasClass('move2')) {
			mainnav.removeClass('move2');
		}
		mainnav.addClass('move1');

	});
	$('.l3 a').click(function () {
		mainnav.addClass('move2');
	});
	$('.l1 a').click(function () {
		if (mainnav.hasClass('move2') || mainnav.hasClass('move1')) {
			mainnav.removeClass('move2');
			mainnav.removeClass('move1');
		}

	});

});