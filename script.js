"use strict";
const tabBar = document.querySelector(".header__hamburger");
const menuHeader = document.querySelector(".header");

tabBar.addEventListener("click", toggleMenu);
function toggleMenu(){
  console.log("tab is working");
  menuHeader.classList.toggle('nav-open')
}
