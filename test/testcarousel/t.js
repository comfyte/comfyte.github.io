$(document).ready( function() {
    $('#myCarousel').carousel({
		interval:   1000
	});
	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav-link', function() {
			clickEvent = true;
			$('.nav-link').removeClass('active');
			$(this).addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length - 1;
			var current = $('.nav-link.active');
			current.removeClass('active').parent().next().children().addClass('active');
			var id = parseInt(current.parent().data('slide-to'));
			if(count == id) {
				$('.nav-link').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});