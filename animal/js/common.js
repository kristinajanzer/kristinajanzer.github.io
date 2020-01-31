

$(function() {
	  

	$(".section-items").waypoint(function() {
		$(".s3-item-wrap").each(function(index) {
			var ths = $(this);
			setInterval(function() {
			   ths.addClass("on"); 
			}, 100*index);
		});
	}, {
		offset : "10%"
	});




	// // $('.menu-icon').click(function() {
	// // 	$(this).toggleClass('opened');
	// // 	$('.main-nav').toggleClass('main-nav-active');
	// //   });

	// $(".menu-icon").on("click",function(e){
	// 	$(this).toggleClass("opened");
	// 	$(this).parent().toggleClass("opened");
	//   });

	//   $(".main-nav").clone().appendTo(".offscreen"); // клонируем все что в main-nav в offscreen


	  $(window).scroll(function() {
		/*  var windowsize = $window.width(); */
		if ($(this).scrollTop() > 1 && $(this).width() > 70){  
			$(".head").removeClass("mnu_back");
			$(".head").addClass("sticky");
		
		}
		else{
			$(".head").removeClass("sticky");
			$(".head").addClass("mnu_back");
		}
	});


// 	$('.slid').slick({
// 		infinite: true,
// 		slidesToShow: 3,
// 		slidesToScroll: 1,
// 		responsive: [
// 			{
// 				breakpoint: 1200,
// 				settings: {
// 					slidesToShow: 2,
// 					slidesToScroll: 1
// 				}
// 			},
// 			{
// 				breakpoint: 992,
// 				settings: {
// 					slidesToShow: 2,
// 					slidesToScroll: 1
// 				}
// 			},
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 1
// 				}
// 			}
// 		]
// 		});

// 		$(".slid-content").each(function(i){
// 			$(this).find("a").attr("href", "#work_" + i);
// 			$(this).find(".slid_descr").attr("id", "work_" + i);
// 		});
		

// 		$('.slid').hover(function(){
// 			$(".popup_content").magnificPopup({type:"inline"});
// 		});

// 		$('.mfp-close').click(function() {
// 			$.magnificPopup.close();
// 			});

// });

// ленивая загрузка от Алексея
var lazyLoadInstance = new LazyLoad({
	elements_selector: ".lazy"
});

jQuery(document).ready(
	function ()
	{
		menuMobile ();
	});
	
	function menuMobile ()
	{
		$(".bt-menu-mobile").click(function(){
			$(".wrapper-menu-mobile").css({left:0, opacity:0});
			$(".wrapper-menu-mobile").animate({opacity:1},200);
			$(".wrapper-menu-mobile .wrapper").animate({ right:"0"},500);
			jQuery(document.body).css('overflow', 'hidden');
			return false;
		});
	
		$(".bt-fechar-menu").click(function(){
			closeMenuMobile ();
			return false;
		});
	
		$(".block-menu-mobile").mousedown(function(){
			closeMenuMobile ();
		});
	}

	$(".main-nav").clone().appendTo(".wrapper-menu-mobile .wrapper"); // клонируем все что в main-nav в .wrapper-menu-mobile .wrapper
	
	function closeMenuMobile (){
		$(".wrapper-menu-mobile .wrapper").animate({ right:"-100%"},300,function(){
			$(".wrapper-menu-mobile").animate({opacity:0},200,function(){
				$(".wrapper-menu-mobile").css({left:"100%", opacity:1});
				jQuery(document.body).css('overflow', 'auto');
			});
		});

	}

});


jQuery(function($){
    // ALL SLIDER CALL
    sliderCall.photoGallery();
    // Lightbox Triggers
    lightboxTrigger();
});
       
var sliderCall = {
    photoGallery: function() {
        var slider = $(".gallery-slider");
        slider.slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
				{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '15px'
                    }
                }
            ]
        });
    }
}

function lightboxTrigger() {
    $('.popup-content').magnificPopup({
		delegate: 'li a',
		type: 'inline',
        fixedContentPos: true,
        closeOnBgClick: true,
        alignTop: false,
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});

	$(".slid-content").each(function(i){
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".slid_descr").attr("id", "work_" + i);
	});
	

	$('.slid').hover(function(){
		$(".popup_content").magnificPopup({type:"inline"});
	});

	$('.mfp-close').click(function() {
		$.magnificPopup.close();
		});


		if($(window).width() <= 1139) {
			$('.main-nav').singlePageNav({
				'currentClass' : "active",
				offset : 100
			});
		} else {
			$('.main-nav').singlePageNav({
				'currentClass' : "active",
				offset : 80
			});
		}

		// Handle nav offset upon window resize
		$(window).resize(function(){
			if($(window).width() <= 1139) {
				$('.main-nav').singlePageNav({
					'currentClass' : "active",
					offset : 100
				});
			} else {
				$('.main-nav').singlePageNav({
					'currentClass' : "active",
					offset : 80
				});
			}
		});


	// анимация
		$(".main-text__title").animated("fadeInDown", "fadeOutUp");
		$(".main-text__small").animated("fadeInDown", "fadeOutUp");
		$(".main-text__btn").animated("fadeInDown", "fadeOutUp");

		$(".sect-text__title").animated("fadeInRight", "fadeOutUp");
		$(".sect-text__text").animated("fadeInRight", "fadeOutUp");
		$(".sect-name__title").animated("fadeInRight", "fadeOutUp");
		$(".sect-img").animated("fadeInLeft", "fadeOutUp");
		
		$(".card-wrap").animated("fadeInRight", "fadeOutUp");
		$(".card-info").animated("fadeInRight", "fadeOutUp");

		$(".footer-title").animated("fadeInUp", "fadeOutUp");
		$(".footer-content").animated("fadeInUp", "fadeOutUp");
		$(".footer-img").animated("fadeInUp", "fadeOutUp");
	
}
