$(function() {
  // Slick Init
  $('.slideshow').each(function (idx, item) {
    var carouselId = 'carousel' + idx;
    this.id = carouselId;
    $(this).slick({
      arrows: false,
      dots: true,
      fade: true
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