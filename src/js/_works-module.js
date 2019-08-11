$(function() {
  $('.works__examples .works__grid a').on('click', function(event) {
    event.preventDefault();
    $('.modal').addClass('modal_active');
  });
  $(".modal .modal__close").on('click', function() {
    $('.modal').removeClass('modal_active');
  });
  $('html').keydown(function(e) {
    if (e.keyCode == 27) {
      $('.modal').removeClass('modal_active');
    }
  });
});
