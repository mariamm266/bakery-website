let navBar = document.querySelector(".navbar");
let navImage = document.querySelector(".navbar-brand img");
let links = document.querySelectorAll(".nav-item a");

function isDesktop() {
  return window.innerWidth >=768;
}
if(isDesktop()){
    navImage.src = "images/bakery-light-1.png";
}
document.addEventListener("scroll", function () {
  if (!isDesktop()) return; 

  if (window.scrollY > 0) {
    navBar.style.backgroundColor = "white";
    navImage.src = "images/bakery-color.png";

    for (let i = 0; i < links.length; i++) {
      links[i].style.color ="black";
    }

  } else {
    navBar.style.backgroundColor = "transparent";
    navImage.src = "images/bakery-light-1.png";

    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "white";
    }
  }
});

