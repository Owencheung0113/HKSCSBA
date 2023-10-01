const thumbnails = document.querySelectorAll('.video-thumbnails img');
const video = document.querySelector('.video-youtube iframe');
const videoInfo = document.querySelector('.video-info');

thumbnails.forEach(function(thumbnail) {
 thumbnail.addEventListener('click', function() {
   const videoId = this.getAttribute('data-video-id');
   const thumbnailSrc = this.getAttribute('src');
   const videoTitle = this.getAttribute('alt');
   const videoDescription = this.getAttribute('data-description');
   video.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
   videoInfo.querySelector('h2').textContent = videoTitle;
   videoInfo.querySelector('p').textContent = videoDescription;
   thumbnails.forEach(function(thumbnail) {
     thumbnail.classList.remove('active');
   });
   this.classList.add('active');
 });
});


// Photo Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlide");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}

slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}
