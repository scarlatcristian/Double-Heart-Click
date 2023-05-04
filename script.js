"use strict";

const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timeClicked = 0;

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  //   position of pointer when clicked
  const x = e.clientX;
  const y = e.clientY;

  // Values relative to the image instead of viewport
  const leftOffset = e.target.offsetLeft;
  const toptOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - toptOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timeClicked;

  //   Remove the hearts once the opacity is set to 0
  setTimeout(() => heart.remove(), 1000);
};

// Create a double click funtion
// loveMe.addEventListener("click", (e) => {
//   if (clickTime === 0) {
//     clickTime = new Date().getTime();
//     console.log(clickTime);
//   } else {
//     if (new Date().getTime() - clickTime < 800) {
//       createHeart(e);
//       clickTime = 0;
//     } else {
//       clickTime = new Date().getTime();
//     }
//   }
// });

loveMe.addEventListener("dblclick", (e) => {
  createHeart(e);
});
