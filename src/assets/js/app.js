document.addEventListener("DOMContentLoaded", function () {
  const btn_burger = document.getElementById("btn_burger");
  const btn_nav_close = document.getElementById("btn_nav_close");
  const header__nav = document.querySelector(".header__nav");
  const btns_menu = document.querySelectorAll(".header__nav__liste__el__a");

  btn_burger.addEventListener("click", function () {
    header__nav.style.left = "0";
  });
  btn_nav_close.addEventListener("click", function () {
    header__nav.style.left = "-100vw";
  });
  btns_menu.forEach((e) => {
    e.addEventListener("click", function () {
      header__nav.style.left = "-100vw";
    });
  });
});
