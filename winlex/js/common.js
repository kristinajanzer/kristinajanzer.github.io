$(function() {

	$('.slid').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
//    
//	$(".main-menu-button").click(function() {
//		$(".navi ul").slideToggle();
//	});
    $(".popup").magnificPopup({type:"image"});
    
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
    
    $(function() {
      $(".scroller").arctic_scroll({
        speed: 1100
      });
    });
    
    
    $('.tab a').on('click', function (e) {
  
      e.preventDefault();

      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');

      target = $(this).attr('href');

      $('.tab-content > div').not(target).hide();

      $(target).fadeIn(600);

    });

});

$(window).scroll(function() {
/*  var windowsize = $window.width(); */
  if ($(this).scrollTop() > 1 && $(this).width() > 70){  
      $(".header_mnu").removeClass("mnu_back");
      $(".header_mnu").addClass("sticky");
 
  }
  else{
      $(".header_mnu").removeClass("sticky");
      $(".header_mnu").addClass("mnu_back");
  }
});
