document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.getElementById('nav-list');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navList.classList.toggle('show');
    });
  }
// Fecha o menu ao clicar fora
document.addEventListener('click', function (event) {
  if (!menuToggle.contains(event.target) && !navList.contains(event.target)) {
    navList.classList.remove('show');
  }
});
});
