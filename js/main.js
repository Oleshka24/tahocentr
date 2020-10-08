$('.carousel__list').owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
    dotsClass: "carousel__dots",
    dotClass: "carousel__dot"
});

$('.owl-stage').css("display", "flex");
$('.owl-stage-outer').css("overflow", "hidden");
$('.owl-nav.disabled').css("display", "none");
$('.owl-dots.disabled').css("display", "none");

var maxTopVal = 5;

$(window).on("scroll", function() {
    if ($(window).scrollTop() > maxTopVal) $('.header').addClass('header--fixed');
    else if (!$('.header__burger').hasClass("burger--close")) $('.header').removeClass('header--fixed');
});

$(window).resize(function () {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > maxTopVal) $('.header').addClass('header--fixed');
        else if (!$('.header__burger').hasClass("burger--close")) $('.header').removeClass('header--fixed');
    });
});

$('.burger__btn').click(function(){
    $(this).parent('.header__burger').toggleClass("burger--close");

    if ($('.header__burger').hasClass("burger--close")) {
        $('.header').addClass("header--fixed");
        $('.header__right').addClass("header__right--show");
    }
    else {
        if ($(window).scrollTop() <= maxTopVal) $('.header').removeClass("header--fixed");
        $('.header__right').removeClass("header__right--show");
    }
});

$('.nav__item--dropdown .nav__link').click(function() {
    $(this).siblings($('.nav__subnav')).toggleClass('nav__subnav--show');
})