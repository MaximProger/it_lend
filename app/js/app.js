$(document).ready(function () {
  // Закрытие модального окна, по клику на маску
  $(".mask").click(() => {
    $(".mask").fadeOut();
    $(".modals").slideUp();
    $("body").removeClass("fixed");
  });

  // Открытие модального окна
  $(".open__popup").click((evt) => {
    evt.preventDefault();
    $(".mask").fadeIn();
    $(".modals").slideDown();
    $("body").addClass("fixed");
  });

  // Маска
  $("#phone").mask("+ 7 (999)-999-99-99");

  // Wow.js
  new WOW().init();

  // Меню
  $("#nav__toggle").click((evt) => {
    evt.preventDefault();
    $("#nav__toggle").toggleClass("active");
    $("#nav").fadeToggle();
  });
});
