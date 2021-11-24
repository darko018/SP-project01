const slides = document.querySelectorAll(".js-slide");
const arrowLeft = document.querySelector(".js-arrow-left");
const arrowRight = document.querySelector(".js-arrow-right");

var activeSlide = 0;

const setActiveClass = () => {
  slides.forEach((slide, index) => {
    if (index === activeSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
};

arrowLeft.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setActiveClass();
});

arrowRight.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setActiveClass();
});
