const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! (Connect this to backend later)');
});