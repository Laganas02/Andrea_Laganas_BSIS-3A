// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Contact form submission with validation
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
      alert('All fields are required!');
  } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address!');
  } else {
      alert(`Thank you, ${name}, for reaching out! I'll get back to you soon.`);
      document.querySelector('form').reset();
  }
});

// JavaScript for Hamburger Menu
document.getElementById('hamburger-menu').addEventListener('click', function () {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
});

// Project hover effects (example for animations)
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('mouseover', () => {
      project.style.transform = 'scale(1.05)';
      project.style.transition = 'transform 0.3s ease';
  });
  project.addEventListener('mouseout', () => {
      project.style.transform = 'scale(1)';
  });
});
