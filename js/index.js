const menuBtn = document.querySelector(".header-nav__btn");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".header-nav_list");

menuBtn.addEventListener("click", () => {
  menuList.classList.add("header-nav__list--open");
});

menuClose.addEventListener("click", () => {
  menuList.classList.remove("header-nav__list--open");
});
