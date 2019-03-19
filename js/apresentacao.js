(function () {
  initSlick();

  function hideLoading() {
    document.querySelector('#loading').style.display = 'none';
    document.querySelector('#slider').style.display = 'block';
  }

  function initSlick() {
    const slider = $('#slider');
    let list;
    const indicatorCurrent = $('#indicatorCurrent');
    const indicatorTotal = $('#indicatorTotal');
    
    slider.on('init', function(event, slick) {
      indicatorTotal.text($(slick.$slides).length);
      list = slider.find('.slick-list');
      adjustImageToViewport();
      hideLoading();
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
      arrows: false,
      dots: false,
      infinite: false,
      mobileFirst: true,
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
          }
        }
      ]
    });

    function adjustImageToViewport() {
      const slide = list.find('.slick-slide')[0];
      const img = list.find('.slick-slide img')[0];

      list.removeClass('viewportWidth');
      list.removeClass('viewportHeight');

      if ((img.offsetHeight + 90) >= slide.offsetHeight) {
        list.addClass('viewportHeight');
      } else {
        list.addClass('viewportWidth');
      }
    }

    adjustImageToViewport();
    window.addEventListener('resize', adjustImageToViewport, false);
  }
})();