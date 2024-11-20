// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  // Contact form submission (basic alert example)
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
  });
  
  // JavaScript for Hamburger Menu
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); // Toggles the active class on the <nav> to show/hide the menu
  });
  