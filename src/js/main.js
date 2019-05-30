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
    $('.header__menu').toggleClass('show')
  });

  $('.header__link-bottom').hover(function() {
    $('.overlay').toggleClass('active')
  })

  //wow
  $(function () {
    new WOW({
      offset: 200,
      mobile: false,
    }).init();
  })
});



