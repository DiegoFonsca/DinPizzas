const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector("#navbar");

console.log(menuBtn);
console.log(navbar);

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// ANIMAÇÕES FADE IN

const elementosFade = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elementosFade.forEach((elemento) => {
  observer.observe(elemento);
});