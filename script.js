"use strict";
const tabBar = document.querySelector(".header__hamburger");
const menuHeader = document.querySelector(".header");

// Toggling of the mobile menu
tabBar.addEventListener("click", toggleMenu);
// Toggle header navigation menu
let openMenu = false;
function toggleMenu() {
  if (!openMenu) {
    menuHeader.classList.add("nav-open");
    openMenu = true;
  } else {
    menuHeader.classList.remove("nav-open");
    openMenu = false;
  }
}

// Intersection observer for the mobile menu to disappear on scroll
function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && openMenu) {
      // Close the menu when it's open and intersects with the viewport
      toggleMenu();
    }
  });
}

// Create an Intersection Observer to watch the menuHeader
const menuObserver = new IntersectionObserver(handleIntersection, {
  threshold: 1, // Adjust the threshold value as needed
  root: null, // Set the root to the viewport
});

// Observe the menuHeader
menuObserver.observe(menuHeader);
