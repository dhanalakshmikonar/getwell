
// ===============================
// Slide Show Section
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
// About Section Animations
// ===============================
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

const aboutBox = document.querySelector('.about-box');
if (aboutBox) {
  const aboutBoxObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutBox.style.transform = 'translateX(0)';
        aboutBox.style.transition = 'transform 0.8s ease-out';
        aboutBoxObserver.unobserve(aboutBox);
      }
    });
  }, { threshold: 0.2 });
  aboutBoxObserver.observe(aboutBox);
}

const aboutBottom = document.querySelector('.about-bottom');
if (aboutBottom) {
  const aboutBottomObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutBottom.style.transform = 'translateX(0) scale(1)';
        aboutBottom.style.transition = 'transform 0.8s ease-out';
        aboutBottomObserver.unobserve(aboutBottom);
      }
    });
  }, { threshold: 0.2 });
  aboutBottomObserver.observe(aboutBottom);
}

const consultContent = document.querySelector('.consult-content');
if (consultContent) {
  const consultObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        consultContent.style.transform = 'translateX(0) scale(1)';
        consultContent.style.transition = 'transform 0.8s ease-out';
        consultObserver.unobserve(consultContent);
      }
    });
  }, { threshold: 0.2 });
  consultObserver.observe(consultContent);
}

// ===============================
// Gallery Image Reveal Animation
// ===============================
const galleryImages = document.querySelectorAll('.gallery-grid img');
if (galleryImages.length > 0) {
  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        galleryObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  galleryImages.forEach(img => galleryObserver.observe(img));
}

// ===============================
// Card Reveal Animation
// ===============================
const cards = document.querySelectorAll('.card');
if (cards.length > 0) {
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => cardObserver.observe(card));
}

// ===============================
// Hamburger Menu Toggle
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
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
  }
});

// ===============================
// WHY CHOOSE US Section Animation
// ===============================
const whychooseItems = document.querySelectorAll(".whychoose-box, .whychoose-circle");

if (whychooseItems.length > 0) {
  const whychooseObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        whychooseObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  whychooseItems.forEach(item => whychooseObserver.observe(item));
}

// ===============================
// WHY CHOOSE US Box Click Highlight
// ===============================
const chooseBoxes = document.querySelectorAll('.whychoose-box');
if (chooseBoxes.length > 0) {
  chooseBoxes.forEach(box => {
    box.addEventListener('click', () => {
      chooseBoxes.forEach(b => b.classList.remove('active'));
      box.classList.add('active');
    });
  });
}

window.addEventListener("load", () => {
  const whychooseWrapper = document.querySelector(".whychoose-wrapper");
  if (whychooseWrapper) {
    // Add the class after short delay for smooth entry
    setTimeout(() => {
      whychooseWrapper.classList.add("loaded");
    }, 200); // 200ms delay gives a natural “on load” feel
  }
});