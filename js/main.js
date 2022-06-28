let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".skills span");

window.onscroll = function () {
  if ((window.scrollY >= section.offsetTop - 200)) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
// Stast toggle
let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

toggler.onclick = function () {
  nav.classList.add("open");
};
close.onclick = function () {
  this.parentElement.classList.remove("open");
};
//  End toggle

// Start move text
AOS.init({ duration: 1100, once: true });
// Emd  move text

