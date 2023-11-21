// Código JavaScript para crear el menú hamburguesa

const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelectorAll(".menu-item");

menuBtn.addEventListener("click", () => {
  menuItems.classList.toggle("open");
});
