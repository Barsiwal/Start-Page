$("document").ready(function(){
	var mainnav=$('.main-nav');
	$('.l2').hover(function(){
		if(mainnav.hasClass('move2')){
			mainnav.removeClass('move2');
		}
		$('.main-nav').addClass('move1');
		
	},function(){
			
		});
	$('.l3').hover(function(){
		$('.main-nav').addClass('move2');
	},function(){
			
		});
	$('.l1').hover(function(){
		if(mainnav.hasClass('move2') || mainnav.hasClass('move1')){
			mainnav.removeClass('move2');
			mainnav.removeClass('move1');
		}
		
	},function(){
			
		});
	
});