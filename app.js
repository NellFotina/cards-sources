//видео на ютубе к уроку 
// https://www.youtube.com/watch?v=vRdWv2uRgkg&feature=emb_logo 
// https://www.youtube.com/watch?v=RubuSFonJTM


function slidesPlugin(activeSlide=1){
const slides = document.querySelectorAll(".slide");

slides[activeSlide].classList.add("active");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}	
}

slidesPlugin();