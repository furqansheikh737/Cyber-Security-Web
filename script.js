document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button');
  
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  
    mobileMenuCloseButton.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
    });
  });