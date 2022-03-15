
// Display dropdown for mobile mode
let btnHamburger = document.getElementById("btnToggleDropDown");
btnHamburger.onclick = function() {displayDropdown()};

function displayDropdown() {
  document.getElementById("mobile-dropdown").classList.toggle("display-dropdown");
}

// Sticky nav 
var navbar = document.querySelector(".header-bottom");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky__nav")
  } else {
    navbar.classList.remove("sticky__nav");
  }
}

// Hover on for teacher social
let socialink = document.getElementById("card__sociallink--teacher");

function displaySocial(){
  socialink.style.display = "block";
}

// Back to top button

//Get the button
var mybutton = document.getElementById("bttButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}