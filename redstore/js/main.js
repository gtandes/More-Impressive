// JS for Toggle Menu
var menuItems = document.getElementById("menuItems");
var menuListItems = document.querySelectorAll("nav ul li a");

menuItems.style.maxHeight = "0px";

function menuToggle() {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
    // menuItems.style.maxWidth = "80px";
    // menuItems.style.textAlign = "center";
    // menuItems.style.position ="fixed";
    // menuItems.style.background = "none";
    // menuListItems.style.color = "black";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}

