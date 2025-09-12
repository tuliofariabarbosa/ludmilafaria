// Menu hamburguer responsivo para index.html

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.header__nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }
  // Fecha o menu ao clicar em um link (mobile/tablet)
  const navLinks = document.querySelectorAll('.header__nav ul li a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
    });
  });
});
