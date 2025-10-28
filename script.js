// ===============================
// Slide Show Section (if exists)
// ===============================
if (document.querySelector('.slides')) {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
  }
}

// ===============================
// View More / View Less Toggle
// ===============================
const viewMoreLink = document.getElementById('viewMoreLink');
const diseaseList = document.getElementById('diseaseList');

if (viewMoreLink && diseaseList) {
  viewMoreLink.addEventListener('click', (e) => {
    e.preventDefault();
    diseaseList.classList.toggle('show');
    viewMoreLink.textContent = diseaseList.classList.contains('show') ? 'View Less' : 'View More';
  });
}

// ===============================
// About Section Animations (Robust version)
// ===============================

// --- 1. About Image Scale on Scroll ---
const aboutImage = document.querySelector('.about-image img');
if (aboutImage) {
  window.addEventListener('scroll', () => {
    const rect = aboutImage.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let visibleRatio = 1 - rect.top / windowHeight;
    visibleRatio = Math.min(Math.max(visibleRatio, 0), 1);

    const scaleValue = 0.8 + visibleRatio * 0.2;
    aboutImage.style.transform = `scale(${scaleValue})`;
  });
}

// --- 2. About Box Slide from Left ---
const aboutBox = document.querySelector('.about-box');
if (aboutBox) {
  const boxObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutBox.style.transform = 'translateX(0)';
          aboutBox.style.transition = 'transform 0.8s ease-out';
          boxObserver.unobserve(aboutBox);
        }
      });
    },
    { threshold: 0.2 }
  );
  boxObserver.observe(aboutBox);
}

// --- 3. About Bottom Slide + Scale ---
const aboutBottom = document.querySelector('.about-bottom');
if (aboutBottom) {
  const bottomObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutBottom.style.transform = 'translateX(0) scale(1)';
          aboutBottom.style.transition = 'transform 0.8s ease-out';
          bottomObserver.unobserve(aboutBottom);
        }
      });
    },
    { threshold: 0.2 }
  );
  bottomObserver.observe(aboutBottom);
}

// --- 4. Consult Content Slide + Scale ---
const consultContent = document.querySelector('.consult-content');
if (consultContent) {
  const consultObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          consultContent.style.transform = 'translateX(0) scale(1)';
          consultContent.style.transition = 'transform 0.8s ease-out';
          consultObserver.unobserve(consultContent);
        }
      });
    },
    { threshold: 0.2 }
  );
  consultObserver.observe(consultContent);
}


// ===============================
// Gallery Image Reveal Animation
// ===============================
const galleryImages = document.querySelectorAll('.gallery-grid img');

if (galleryImages.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  galleryImages.forEach((img) => observer.observe(img));
}

// ===============================
// Card Reveal Animation
// ===============================
const cards = document.querySelectorAll('.card');

if (cards.length > 0) {
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => cardObserver.observe(card));
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("show");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("show");
    });
  });
});

console.log("✅ script.js loaded successfully");

