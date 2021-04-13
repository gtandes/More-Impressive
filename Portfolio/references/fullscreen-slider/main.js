let sliderImages = document.querySelectorAll(".slide"),
  arrowRight = document.querySelector("#arrow-right"),
  arrowLeft = document.querySelector("#arrow-left"),
  current = 0;

//   clear all images
function reset() {
  sliderImages.forEach((slide) => {
    slide.style.display = "none";
  });

  //   for (let i = 0; i < sliderImages.length; i++) {
  //     sliderImages[i].style.display = "none";
  //   }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

// Show Previous
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

startSlide();
