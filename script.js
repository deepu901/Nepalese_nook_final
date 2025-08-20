document.addEventListener('DOMContentLoaded', function() {

  // Smooth scrolling for navbar links
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Order form submission
  const orderForm = document.getElementById('orderForm');
  orderForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default submission

    if (validateForm()) {
      // Redirect to confirmation page if form is valid
      window.location.href = 'confirmation.html';
    }
  });

  // Form validation
  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const quantity = document.getElementById('quantity').value;
    const pickupTime = document.getElementById('pickupTime').value;
    const spiciness = document.querySelector('input[name="spiciness"]:checked');

    if (!name || !quantity || !pickupTime || !spiciness) {
      alert('Please fill out all fields before submitting the form.');
      return false;
    }
    return true;
  }

  // Fade-in animation on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });
  document.querySelectorAll('.fade-element').forEach(element => observer.observe(element));

  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTopBtn");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

});
