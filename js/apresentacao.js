$(document).ready(function(){
  var slider = $('.slider');

  slider.slick({
    accessibility: true,
    arrows: false,
    dots: true,
    mobileFirst: true,
  });

  slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    if (currentSlide !== nextSlide) {
      var audio = $(slick.$slides[currentSlide]).find('audio');
      if (audio.length > 0) {
        audio[0].pause();
      }
    }
  });
});