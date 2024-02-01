// Element Selector
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  if (menu.style.opacity == "0") {
    menu.style.opacity = "1";
    menu.style.transform = "rotatex(0deg)";
    hamburger.style.background = "#20ad96";
    hamburger.style.color = "white";
  } else {
    menu.style.opacity = "0";
    menu.style.transform = "rotatex(90deg)";
    hamburger.style.background = "transparent";
    hamburger.style.color = "#20ad96";
  }
});
