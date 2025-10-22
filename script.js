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


