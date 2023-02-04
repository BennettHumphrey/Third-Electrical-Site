let autoNext = 0;
const incrementAutoNext = () => {
  if(autoNext == 6) {
    plusReviewSlides(1)
  }
  return autoNext++
}

setInterval(incrementAutoNext, 1000)




let reviewSlideIndex = 1;
showReviewSlides(reviewSlideIndex);

// Next/previous controls
function plusReviewSlides(n) {
  showReviewSlides(reviewSlideIndex += n);
  autoNext = 0
}

// Thumbnail image controls
function currentReviewSlide(n) {
  showReviewSlides(reviewSlideIndex = n);
  autoNext = 1;
}

function showReviewSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myReviewSlides");
  let dots = document.getElementsByClassName("reviewDot");
  if (n > slides.length) {reviewSlideIndex = 1}
  if (n < 1) {reviewSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeReview", "");
  }
  slides[reviewSlideIndex-1].style.display = "block";
  dots[reviewSlideIndex-1].className += " activeReview";
}