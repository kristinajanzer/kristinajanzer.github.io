$(function() {
	
	
	$(".main-menu").clone().appendTo("#navbarNav");
	$("#navbarNav").find(".main-menu").addClass("main-menu-lg");
	
	
		apendPhone();

    $(window).resize(function() {
        apendPhone();
    });



	function apendPhone() {
    if ($(window).width() <= 992) {
        $(".header .main-menu-lg").append($('header .phone'));
    }
    if ($(window).width() >= 992) {
        $("header .text-right").append($('header .phone'));
    }
}

	
	
	$('.popup_content').magnificPopup({type: "inline"});
    
    $('.popup').magnificPopup({type: "image"});
    
    $('.works__item').each(function(i) {
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".hidden__works").attr("id", "work_" + i);
    });
	
	
	
	
	$('.drop-menu').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropeddown').slideToggle(300);
    });
    $('.drop-menu').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropeddown').slideUp(300);
    });
    $('.drop-menu .dropeddown li').click(function () {
        $(this).parents('.drop-menu').find('span').text($(this).text());
        $(this).parents('.drop-menu').find('input').attr('value', $(this).attr('id'));
    });
	
	
	// анимация элементов
	$(".section-1 .head").animated("fadeInUp");
	$(".section-1 .discount").animated("shake");
	$(".section-9 .contacts").animated("shake");
	$(".section-head").animated("slideInRight");
	$(".section-5 .main-form").animated("slideInRight");
	
	
	
	// делает чтоб анимация элементов была по очереди, а не все сразу
	$(".section-3").waypoint(function() {
		$(".section-3 .section-wrap li").each(function(index) {
			var ths = $(this);
			setInterval(function() {
			   ths.addClass("on"); 
			}, 200*index);
		});
	}, {
        offset : "10%"
    });
    // конец
	
	
	// делает чтоб анимация элементов была по очереди, а не все сразу
	$(".section-6").waypoint(function() {
		$(".works").each(function(index) {
			var ths = $(this);
			setInterval(function() {
			   ths.addClass("on"); 
			}, 300*index);
		});
	}, {
        offset : "10%"
    });
    // конец
	
	
	
	// делает чтоб анимация элементов была по очереди, а не все сразу
	$(".section-8").waypoint(function() {
		$(".section-wrap li").each(function(index) {
			var ths = $(this);
			setInterval(function() {
			   ths.addClass("on"); 
			}, 300*index);
		});
	}, {
        offset : "10%"
    });
    // конец
	
	
});
