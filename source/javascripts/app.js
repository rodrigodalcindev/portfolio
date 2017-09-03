$(function() {
  $(".l-nav--trigger").on("click", function(e){
    $("nav").toggleClass("open");
    $("body").toggleClass("nav--open");
  });
})