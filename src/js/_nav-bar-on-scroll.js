  document.addEventListener("DOMContentLoaded", function() {
    $('nav a').on('click', function() {
      var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 120;
      $('body,html').animate({
        scrollTop: scrollPoint
      }, 500);
      return false;
    });

    const header = document.querySelector('.header'),
      logo = document.querySelector('.header__logo');
    link = document.querySelectorAll('.header__menu-link');

    window.addEventListener('scroll', function(e) {
      const y = window.pageYOffset;
      if (y >= 50 && $(window).width() >= 991) {
        header.classList.add('fixed-on-scroll');
        header.classList.remove('header');
        logo.src = '/img/logo-dark.png';
        $('.main section').each(function(i) {
          if ($(this).position().top <= y + 120) {
            $('.header__menu-list a.header__menu-link--active').removeClass('header__menu-link--active');
            $('.header__menu-list a').eq(i).addClass('header__menu-link--active');
          }
        });
      } else {
        link[0].classList.add('header__menu-link--active');
        header.classList.add('header');
        header.classList.remove('fixed-on-scroll');
        if ($(window).width() >= 991) {
          logo.src = '/img/logo.png';
        }
      }
    });
    $('.btn--active').on('click', function(e) {
      $('.header__menu-list').toggleClass('active');
    });
    if ($(window).width() <= 991) {
      $('.header__logo').attr('src', '/img/logo-dark.png');
    } else {
      $('.header__logo').attr('src', '/img/logo.png');
    }
  });
