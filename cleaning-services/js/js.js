$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 100) {
    $(".nav-scroll").addClass("custom-navbar");
    $(".nav-link,.navbar-brand").addClass("nav-color");
    $(".navbar-toggler-icon").addClass("navbar-toggler-icon-2");
  } else {
    $(".nav-scroll").removeClass("custom-navbar");
    $(".nav-link,.navbar-brand").removeClass("nav-color");
    $(".navbar-toggler-icon").removeClass("navbar-toggler-icon-2");
  }
});
