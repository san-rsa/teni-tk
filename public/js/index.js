

burger = () => {
  document.getElementById("nav").style.width = "50%"
  document.body.style.backgroundColor = "rgba(0,0,0,0.74)";
  document.body.style.transitionDuration = "1s";
};

closeNav = () => {
  document.getElementById("nav").style.width ="0%"
  document.body.style.backgroundColor = "#6A5757";
  document.body.style.transition = "1s";

};

let slideIndex2 = 0;
showSlidesNews();

function showSlidesNews() {
  let i;
  let card = document.getElementsByClassName("card-title");
  let slides = document.getElementsByClassName("car1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.width = "0";
    card[i].style.opacity = "0";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}

  slides[slideIndex2-1].style.width = "100%";
  card[slideIndex2-1].style.opacity = "100%";

  setTimeout(showSlidesNews, 7000); // Change image every 2 seconds   

};


function login() {
  
  input = () => {
     inp = document.getElementById("password");
     label = document.getElementById("hidden");
     inp.style.zIndex = "1"
     label.style.opacity = "revert"
     inp.style.opacity = "revert"
     inp.style.bottom = "0"
     inp.transitionDuration = "2s"
  }

  button = () => {
    btn = document.getElementById("submit")
    reg = document.getElementById("register")
    btn.style.top = "0"
    btn.style.opacity = "revert"
    reg.style.bottom = "0"
  }
  
  button()
   input()
  
  }


function search() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("nav-menu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "flex";
    } else {
      li[i].style.display = "none";
    }
  }
}
