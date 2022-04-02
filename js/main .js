// Start move text 
AOS.init(
  {duration:1100,
  once:true,}
);
// Emd  move text 

let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".skill span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};