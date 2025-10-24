let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  document.querySelector(".slides").style.transform = `translateX(-${currentSlide * 100}%)`;
}

const viewMoreLink = document.getElementById('viewMoreLink');
const diseaseList = document.getElementById('diseaseList');

viewMoreLink.addEventListener('click', function(e) {
  e.preventDefault();
  diseaseList.classList.toggle('show');

  // Toggle button text
  if(diseaseList.classList.contains('show')){
    viewMoreLink.textContent = 'View Less';
  } else {
    viewMoreLink.textContent = 'View More';
  }
});

const img = document.querySelector('.about-image img');

window.addEventListener('scroll', () => {
  const rect = img.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate how much of the image is visible (0 to 1)
  let visibleRatio = 1 - (rect.top / windowHeight);
  visibleRatio = Math.min(Math.max(visibleRatio, 0), 1); // clamp between 0 and 1

  // Scale from 0.8 to 1
  const scaleValue = 0.8 + visibleRatio * 0.2;
  img.style.transform = `scale(${scaleValue})`;
});

const aboutBox = document.querySelector('.about-box');

window.addEventListener('scroll', () => {
  const rect = aboutBox.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate how much of the box is visible (0 to 1)
  let visibleRatio = 1 - (rect.top / windowHeight);
  visibleRatio = Math.min(Math.max(visibleRatio, 0), 1); // clamp between 0 and 1

  // Move from -100px (left) to 0px (final position)
  const translateX = -100 + visibleRatio * 100;
  aboutBox.style.transform = `translateX(${translateX}px)`;
});

const aboutBottom = document.querySelector('.about-bottom');

window.addEventListener('scroll', () => {
  const rect = aboutBottom.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate visibility ratio (0 to 1)
  let visibleRatio = 1 - (rect.top / windowHeight);
  visibleRatio = Math.min(Math.max(visibleRatio, 0), 1);

  // Move from -100px → 0px and scale from 0.95 → 1
  const translateX = -100 + visibleRatio * 100;
  const scaleValue = 0.95 + visibleRatio * 0.05;

  aboutBottom.style.transform = `translateX(${translateX}px) scale(${scaleValue})`;
});

const consultContent = document.querySelector('.consult-content');

window.addEventListener('scroll', () => {
  const rect = consultContent.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate visibility ratio (0 to 1)
  let visibleRatio = 1 - (rect.top / windowHeight);
  visibleRatio = Math.min(Math.max(visibleRatio, 0), 1);

  // Slide from -100px → 0px, scale from 0.95 → 1
  const translateX = -100 + visibleRatio * 100;
  const scaleValue = 0.95 + visibleRatio * 0.05;

  consultContent.style.transform = `translateX(${translateX}px) scale(${scaleValue})`;
});

const galleryImages = document.querySelectorAll('.gallery-grid img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: stop observing after animation triggers once
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2 // triggers when 20% of image is visible
});

// Observe all gallery images
galleryImages.forEach(img => observer.observe(img));

const cards = document.querySelectorAll('.card');

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: reveal only once
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 }); // triggers when 20% of the card is visible

cards.forEach(card => cardObserver.observe(card));

