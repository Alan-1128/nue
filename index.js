let btnFlecha = document.querySelector(".menuBtn");
let sidebar = document.querySelector(".navbarLeft");
let container = document.querySelector(".myContainer");


btnFlecha.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
  btnFlecha.classList.toggle("btnFlecha");
});