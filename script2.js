let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  document.querySelector(".slides").style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Auto-slide every 3 seconds
setInterval(() => {
  nextSlide();
}, 3000);

// Adjust slide on window resize
window.addEventListener("resize", () => {
  showSlide(currentIndex);
});
