(function () {

  function hideLoading() {
    document.querySelector('#loading').style.display = 'none';
    document.querySelector('#slider').style.display = 'block';
  }

  function adjustImageToViewport() {
    var list = document.querySelectorAll('#slider .slick-list')[0];
    var img = document.querySelectorAll('#slider img')[0];

    list.classList.remove('viewportWidth');
    list.classList.remove('viewportHeight');

    if (img.offsetHeight >= list.offsetHeight) {
      list.classList.add('viewportHeight');
    } else {
      list.classList.add('viewportWidth');
    }
  }

  function verifyFirstImageLoaded() {
    try {
      var firstImage = document.querySelectorAll('#slider img')[0];

      if (firstImage.offsetHeight === 0 || firstImage === undefined) {
        throw new Error('Cadê a imagem?');
      }

      adjustImageToViewport();

    } catch (err) {
      setTimeout(() => {
        verifyFirstImageLoaded();
      }, 100);
    }
  }

  function init() {
    var slider = $('#slider');
    var indicatorCurrent = $('#indicatorCurrent');
    var indicatorTotal = $('#indicatorTotal');

    slider.on('init', function(event, slick) {
      indicatorTotal.text($(slick.$slides).length);
      list = slider.find('.slick-list');
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
      adjustImageToViewport();
    });

    slider.slick({
      accessibility: true,
      arrows: false,
      dots: false,
      infinite: false,
      mobileFirst: true,
      // lazyLoad: 'progressive',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
          }
        }
      ]
    });

    verifyFirstImageLoaded();
    window.addEventListener('resize', adjustImageToViewport, false);
  }

  init();
})();
