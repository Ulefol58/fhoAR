const sliderContainer = document.querySelector("#slider");
const slides = document.querySelectorAll(".slide");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");

let currentSlide = 0;

const showSlide = (slideIndex) => {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");
};

const prevSlide = () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
};

const nextSlide = () => {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
};

prevArrow.addEventListener("click", prevSlide);
nextArrow.addEventListener("click", nextSlide);

showSlide(currentSlide);