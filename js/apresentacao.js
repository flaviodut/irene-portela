(function () {
  initSlick();
  audioTopPos();

  function initSlick() {
    const slider = $('.slider');
  
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
  }

  function audioTopPos() {
    const tags = document.querySelectorAll('audio');

    if (tags.length > 0) {
      const tagHeight = tags[0].offsetHeight;

      tags.forEach(tag => {
        tag.style.top = -tagHeight;
      })
    }
  }
})();