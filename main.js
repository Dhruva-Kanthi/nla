// main.js
// You can add interactivity here if needed.

let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (!nav) return;
  if (window.scrollY > lastScrollY && window.scrollY > 50) {
    nav.classList.add('hide-menu');
  } else {
    nav.classList.remove('hide-menu');
  }
  lastScrollY = window.scrollY;
});
