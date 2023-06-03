let switchClass = document.querySelectorAll("header a")
switchClass.forEach((el)=>{
  el.addEventListener("click",function(){
    switchClass.forEach((el1)=>{
      el1.classList.remove("active")
      this.classList.add("active")
    })
  });
});
/////////////////// Btn Scroll ///////////////////
let btnScroll =document.querySelector(".btnscroll");
let homeClass =document.querySelector("nav .home");
let logoClass =document.querySelector("nav #logo");
window.addEventListener("scroll",function(){  
  if(scrollY < 500){
    btnScroll.style.display = "none"
  }else{
    btnScroll.style.display = "block"
  }
})
btnScroll.addEventListener("click",scrollTop0)
homeClass.addEventListener("click",scrollTop0)
logoClass.addEventListener("click",scrollTop0)
function scrollTop0(){
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
  ClassHome();
  btnScroll.style.display ="none"
};
/////////////////// Swithe Active Class OnScroll ///////////////////

var sections = document.querySelectorAll("section");
onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * .25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
    ClassHome()
  });
};
// Add Class active  to Home
function ClassHome(){
  if(scrollY == 0){
    switchClass.forEach((el1)=>{
      el1.classList.remove("active")
      homeClass.classList.add("active")
    })
  }
}
var removeAllActiveClasses = function () {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("active");
  });
};
var addActiveClass = function (id) {
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};
var navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});

/////////////////// Send Data To Email///////////////////
let form =document.querySelector("form")
let nameInput =document.querySelector("form #name")
let emailInput =document.querySelector("form #email")
let messageInput =document.querySelector("form #message")

const btn = document.getElementById('button');
document.getElementById('form')
.addEventListener('submit', function(event) {
  event.preventDefault();
  btn.value = 'Sending...';
  const serviceID = 'default_service';
  const templateID = 'template_6b45tlb';
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
    clearData()
});
function clearData(){
  nameInput.value = "",
  emailInput.value = "",
  messageInput.value = ""
}
let loadPage = document.querySelector(".loading")
let timeload = document.querySelector("iframe")
window.addEventListener("load",function(){
  setTimeout(function cleariframe(){
    scrollTop0()
    document.body.style.overflow = "unset";
    loadPage.remove()
    timeload.remove()
  },1000)
})
