// main.js

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form submission
  const orderForm = document.getElementById('orderForm');
  const quantity = document.getElementById('quantity');
  const drinkRadios = document.querySelectorAll('input[name="drink"]');
  const totalCostEl = document.getElementById('totalCost');
  const momoPrice = 15; // Price per Mo:Mo

  function updateTotal() {
    const qty = parseInt(quantity.value) || 0;
    let drinkPrice = 0;
    drinkRadios.forEach(radio => { if(radio.checked) drinkPrice = parseFloat(radio.value); });
    const total = (momoPrice * qty) + drinkPrice;
    totalCostEl.textContent = total.toFixed(2);
  }

  quantity.addEventListener('input', updateTotal);
  drinkRadios.forEach(radio => radio.addEventListener('change', updateTotal));
  updateTotal();

  orderForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const pickupTime = document.getElementById('pickupTime').value;
    const spiciness = document.querySelector('input[name="spiciness"]:checked');
    const qty = parseInt(quantity.value) || 0;

    if (!name || !pickupTime || !spiciness || qty <= 0) {
      alert('Please fill out all fields correctly before submitting the form.');
      return;
    }

    // Optional: save order info
    const drinkSelected = Array.from(drinkRadios).find(r => r.checked).nextElementSibling.innerText;
    const orderDetails = {
      name,
      quantity: qty,
      spiciness: spiciness.value,
      drink: drinkSelected,
      pickupTime,
      totalCost: totalCostEl.textContent
    };
    localStorage.setItem('lastOrder', JSON.stringify(orderDetails));

    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
  });

  // Scroll animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });

  document.querySelectorAll('.fade-element').forEach(element => {
    observer.observe(element);
  });

  // Back to top button
  const backToTopBtn = document.getElementById("backToTopBtn");
  window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
