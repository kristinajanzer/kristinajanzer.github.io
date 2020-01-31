$(document).ready(function() {

	// Custom JS
	$('.grid').masonry({
  		// options
  		itemSelector: '.grid-item',
	});

	$('.parallax-window').parallax({imageSrc: 'img/main_photo.png'});
	
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
		};
	});
	
});
