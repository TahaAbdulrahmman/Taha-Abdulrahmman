/////////////////////////////  Navbar  /////////////////////////////

let toggle = document.getElementById("toggle");
let btnClose = document.getElementById("close");
let header = document.querySelector("header");
let nav = document.querySelector("header nav");
let ul = document.querySelector("header nav ul");
toggle.onclick = function () {
  ul.classList.add("open")
};
btnClose.onclick = function () {
  ul.classList.remove("open")
};

let lis = document.querySelectorAll("header nav ul li a");
lis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    lis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    ul.classList.remove("open")
  };
});
/////////////////////////////  Scroll   /////////////////////////////
window.addEventListener("scroll", function () {
  if (scrollY <= 500) {
    scrolltop.style.display = "none";
  } else {
    scrolltop.style.display = "block";
  }
});
scrolltop.addEventListener("click", function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
/////////////////////////////  Dark-Theme  /////////////////////////////
let icon = document.getElementById("icon");
console.log(icon.src)
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src ="images/sun.webp";
    document.body.style.backgroundColor = "#202124";
    header.style.backgroundColor = "#202124";
  } else {
    icon.src ='images/moon.webp';
    document.body.style.backgroundColor = "#afadad66";
    header.style.backgroundColor = "#dfdede";
  }
};
//////////////////////////////////////////////////////////////////////////////
// Start move text 
AOS.init(
  {duration:1100,
  once:true,}
);
// Emd  move text


let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".skills span");
window.onscroll = function () {
  if ((window.scrollY >= section.offsetTop - 400)) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};


//  Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
