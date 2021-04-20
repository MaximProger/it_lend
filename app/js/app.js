$(document).ready(function () {
  // Закрытие модального окна
  function closeModal() {
    $(".mask").fadeOut();
    $(".modals").slideUp();
    $("body").removeClass("fixed");
  }

  $(".mask").click(() => {
    closeModal();
  });

  $("#closeModal").click((evt) => {
    evt.preventDefault();
    closeModal();
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
