// script.js

// mobile nav toggle
const btn = document.querySelector("#menu-btn");
const nav = document.querySelector("#menu");
btn.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});
