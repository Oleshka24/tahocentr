$('.carousel__list').owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
    dotsContainer: $('.carousel__dots')
});

$('.owl-stage').css("display", "flex");
$('.owl-stage-outer').css("overflow", "hidden");
$('.owl-nav.disabled').css("display", "none");
$('.owl-dots.disabled').css("display", "none");

$('.carousel__dot-btn').click(function () {
    $('.carousel__dot').removeClass("carousel__dot--current");
    $(this).parent('.carousel__dot').addClass("carousel__dot--current");
});