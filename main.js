const navOpen = document.querySelector(".open");
const navClose = document.querySelector(".close");
const icon = document.querySelector(".icon");
const nav = document.querySelector("nav");
const play = document.querySelector(".play");

icon.addEventListener("click", function () {
  navOpen.classList.toggle("dn");
  navClose.classList.toggle("dn");
  nav.classList.toggle("activeNav");
});

const video1 = document.querySelector("#video1");
play.addEventListener("click", function () {
  play.style.display = "none";
  video1.play()
});
video1.addEventListener("click", function () {
  play.style.display = "block";
  video1.pause()
});
