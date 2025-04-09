const slides = document.querySelectorAll('.sliderProgramas .slide');
const prev = document.querySelector('.sliderProgramas .prev');
const next = document.querySelector('.sliderProgramas .next');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Auto slide
setInterval(nextSlide, 5000);
