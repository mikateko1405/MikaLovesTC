// Show Gift Box When Page Loads
window.addEventListener('DOMContentLoaded', function() {
  let giftBox = document.getElementById("giftBox");
  let valentinePopup = document.getElementById("valentinePopup");
  let spotifyOpened = false;

  giftBox.style.display = "block";
  giftBox.style.zIndex = "1000"; // Ensure gift box is on top

  giftBox.addEventListener('click', function() {
      giftBox.style.display = "none";
      valentinePopup.style.display = "block";
      generateHearts();

      if (!spotifyOpened) {
          window.open("https://open.spotify.com/track/273QnyCvJB65rScHJ1nPZb?si=5aa00fd626d54e21&autoplay=true", "_blank");
          spotifyOpened = true;
      }
  });
});

// Hearts Animation
function generateHearts() {
  const container = document.getElementById('heartsContainer');
  for (let i = 0; i < 300; i++) { // Increased the number of hearts to 300
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + '%';
      heart.style.top = Math.random() * 100 + '%';
      heart.style.animationDuration = Math.random() * 3 + 3 + 's';
      heart.style.fontSize = Math.random() * 20 + 15 + 'px';
      heart.innerHTML = '❤';
      container.appendChild(heart);
  }
}
  


// Slideshow
let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = "block";
  setTimeout(showSlides, 3000);
}
function changeSlide(n) {
  slideIndex += n - 1;
  showSlides();
}
showSlides();

// Countdown Timer
const countdownDate = new Date("April 26, 2025 00:00:00").getTime();
setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = 
      days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
}, 1000);