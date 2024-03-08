const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuBtns = document.querySelectorAll(".mobile-menu-btn");

mobileMenuBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});