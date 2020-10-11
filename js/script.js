$(document).ready(function () {
   let position = 0;
   const slidesToShow = 1;
   const slidesToScroll = 1;
   const container = document.querySelector('.slider__container');
   const track = document.querySelector('.slider__track');
   // const item = document.querySelector('.slider__item');
   const btnPrev = document.querySelector('.btn__prev');
   const btnNext = document.querySelector('.btn__next');
   const itemCount = item.lenght;
   const itemWidth = container.width() / slidesToShow;
   const movePosition = slidesToScroll * itemWidth;



   item.each(function (index, item) {
      $(item).css({
         minWidth: itemWidth,
      })
   });

   btnPrev.addEventListener('click', function () {
      position += movePosition;

      track.css({
         tranform: `translateX(${position}px)`,
      });
   });

   btnNext.addEventListener('click', function () {
      position -= movePosition;

      track.css({
         tranform: `translateX(${position}px)`,
      });

   });

});









// arrows: true,
// dots: true,
// adaptiveHeigh: true,
// slidesToShow: 3,
// slidesToScroll: 3,
// speed: 2000,
// easing: 'easeOutExpo',
// waitForAnimate: false,
