$(document).ready(function () {
  console.log("Скрипты подъехали")

  $('.banner__slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    prevArrow: $('.banner').find('.arrow__prev'),
    nextArrow: $('.banner').find('.arrow__next'),
  })

  $('.menu_btn').click(function () {
    $(this).toggleClass('open');
    $('.header__menu_wr').toggleClass('show');
    $('.overlay').toggleClass('active');
    $('.header').toggleClass('background');
    $('body').toggleClass('no_scroll')
  });

  $('.header__link-bottom').hover(function () {
    $('.overlay').toggleClass('active')
  })

  $(window).resize(function () {
    if ($(window).width() > 1000) {
      $('.overlay').removeClass('active');
      $('.header__menu_wr').removeClass('show');
      $('.menu_btn').removeClass('open');
      $('.header').removeClass('background');
      $('body').removeClass('no_scroll')
    }
  })

  $('.menu__nav-item-a.with_sublist').click(function (e) {
    e.preventDefault();
    $(this).siblings('.menu-lvl').addClass('show')
  })

  $('.menu_back').click(function () {
    $(this).closest('.menu-lvl').removeClass('show');
    console.log($(this).closest('.menu-lvl-2'))
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.header__menu_wr ').length && !$(e.target).closest('.menu_btn').length) {
      $('.overlay').removeClass('active');
      $('.header__menu_wr').removeClass('show');
      $('.menu_btn').removeClass('open');
      $('.header').removeClass('background');
      $('body').removeClass('no_scroll');
    }

    e.stopPropagation();
  });

});



