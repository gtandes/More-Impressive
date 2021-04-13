"use strict";

// Show Menu
var showMenu = function showMenu(toggleId, navId) {
  var toggle = document.getElementById(toggleId);
  var nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu"); // Remove Menu Mobile

var navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // Active link
  navLink.forEach(function (n) {
    return n.classList.remove("active");
  });
  this.classList.add("active"); // Remove menu mobile

  var navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach(function (n) {
  return n.addEventListener("click", linkAction);
});