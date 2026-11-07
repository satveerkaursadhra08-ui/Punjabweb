
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Mobile menu
menuBtn.addEventListener("click", function () {
  nav.classList.toggle("show");
});

// Menu close after clicking a link
document.querySelectorAll("#nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
});
