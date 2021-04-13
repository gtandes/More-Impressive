const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

// or;

// const [current, imgs, opacity] = [
//   document.querySelector("#current"),
//   document.querySelectorAll(".imgs img"),
//   0.4,
// ];

// imgs.forEach((img) =>
//   img.addEventListener("click", (e) => (current.src = e.target.src))
// );
// or;

// Set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  // Reset the opacity of all images
  imgs.forEach((img) => (img.style.opacity = 1));

  // Change current image to src of clicked image
  current.src = e.target.src;

  //   Add fade-in class
  current.classList.add("fade-in");

  //   Remove fade-in class after 0.5 seconds
  setTimeout(() => {
    current.classList.remove("fade-in");
  }, 500);

  //  change the opacity to opacity var
  e.target.style.opacity = opacity;
}
