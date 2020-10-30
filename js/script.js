
$(document).ready(function () {
  $('.slider__track').slick({
    arrows: true,
    dots: true,
    adaptiveHeigh: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="../images/wedo/icons/ARROW_/next.png" alt="next arrow"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="../images/wedo/icons/ARROW_/prev.png" alt="prew arrow"></button>',
    speed: 2000,
    easing: 'easeOutExpo',
    waitForAnimate: false,
  });
});

