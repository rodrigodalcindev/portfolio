$(function() {
  // Slick Init
  $('.slideshow').each(function (idx, item) {
    var carouselId = 'carousel' + idx;
    this.id = carouselId;
    $(this).slick({
      arrows: false,
      dots: true,
      fade: true,
      responsive: [
        {
          breakpoint: 880,
          settings: "unslick"
        }
      ]
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
  });

  // Section Triggers
  /*
  var $sectionTriggers = $('div[class*="section--trigger"]');
  var $header = $('header');

  $sectionTriggers.each(function (idx, item) {
    $(item).on('click', function(e) {
      e.preventDefault();
      $(e.currentTarget.parentElement).toggleClass('is-open');
      $header.toggleClass('is-redux');
    });
  });
  */
});