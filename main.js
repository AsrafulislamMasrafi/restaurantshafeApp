const navOpen = document.querySelector(".open");
const navClose = document.querySelector(".close");
const icon = document.querySelector(".icon");
const nav = document.querySelector("nav");

icon.addEventListener("click", function () {
  navOpen.classList.toggle("dn");
  navClose.classList.toggle("dn");
  nav.classList.toggle("activeNav");
});
