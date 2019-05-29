$(document).ready(function () {
  console.log("Скрипты подъехали")

  $('.reviews__slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    infinite: true
  })

  $('.menu_btn').click(function(){
    $(this).toggleClass('open');
    $('.header__menu').toggleClass('show')
	});

  //wow
  $(function () {
    new WOW({
      offset:       200,
      mobile:       false,       
    }).init();
  })
});



