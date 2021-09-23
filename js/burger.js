const burger = document.querySelector(".humburger-menu");
const menuElem = document.querySelector(".menu");

const toggleMenu = () => {
  burger.classList.toggle("humburger-menu-active");
  menuElem.classList.toggle("menu-active");
};

burger.addEventListener("click", () => toggleMenu());

menuElem.addEventListener("click", (event) => {
  if (event.target.classList.contains("menu-list__link")) {
    toggleMenu();
  }
});
