(function () {
  initSlick();

  function initSlick() {
    const slider = $('#slider');
    const indicatorCurrent = $('#indicatorCurrent');
    const indicatorTotal = $('#indicatorTotal');
    
    slider.on('init', function(event, slick) {
      indicatorTotal.text($(slick.$slides).length);
    });
  
    slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      if (currentSlide !== nextSlide) {
        var audio = $(slick.$slides[currentSlide]).find('audio');
        if (audio.length > 0) {
          audio[0].pause();
        }
      }
    });

    slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
      indicatorCurrent.text(currentSlide + 1);
    });

    slider.slick({
      accessibility: true,
      arrows: true,
      dots: false,
      infinite: false,
      mobileFirst: true,
      lazyLoad: 'ondemand',
    });
  }
})();