// Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll(".fade-element");
window.addEventListener("scroll", () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

// Image Gallery Switcher
const mainImage = document.getElementById("mainMomoImage");
const thumbnails = document.querySelectorAll(".thumbnail-container img");

thumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
    thumbnails.forEach(t => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});

// Floating Order Now Button on Scroll
const heroSection = document.querySelector(".hero");
const orderButton = document.querySelector(".btn-primary");

window.addEventListener("scroll", () => {
  if (window.scrollY > heroSection.offsetHeight) {
    orderButton.classList.add("fixed-bottom", "m-3", "shadow-lg");
  } else {
    orderButton.classList.remove("fixed-bottom", "m-3", "shadow-lg");
  }
});
