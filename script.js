const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector("#navbar");

console.log(menuBtn);
console.log(navbar);

menuBtn.addEventListener("click", () => {
  console.log("Cliquei!");
  navbar.classList.toggle("active");
});
