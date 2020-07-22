$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><div class="slider__arrow_left"></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="slider__arrow_right"</button>',
      });
  });