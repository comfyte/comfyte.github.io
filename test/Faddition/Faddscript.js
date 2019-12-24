$(document).ready( function() {
    $('#competitions-carousel').carousel({
		interval:   /*3000*/1000*60*60
	});
	
	var clickEvent = false;
	$('#competitions-carousel').on('click', '.nav-link', function() {
			clickEvent = true;
			$('.nav-link').removeClass('active');
			$(this).addClass('active');
	}).on('slide.bs.carousel', function(e) {
		if(!clickEvent) {
			$('#competitions-carousel .nav-link.active').removeClass('active');
			$('#competitions-carousel .nav-link:eq(' + e.to + ')').addClass('active');
		}
		clickEvent = false;
	});
});

// var resizetimer;
// window.onresize = function() {
// 	clearTimeout(resizetimer);
// 	setTimeout(resized, 1000);
// }

// function resized() {
// 	console.log("Hello, world!");
// }

// $(window).resize(_.debounce(function() {
// 	console.log('Helloworld');
// }, 500));