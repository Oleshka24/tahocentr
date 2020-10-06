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