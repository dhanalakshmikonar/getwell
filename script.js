let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  document.querySelector(".slides").style.transform = `translateX(-${currentSlide * 100}%)`;
}

