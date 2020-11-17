// SideNav
function openNav() {
    document.getElementById("myNav").style.height  = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.height  = "0%";
}

// Swiper
var swiper = new Swiper('.swiper-container', {
    lazy: true,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination1',
      clickable: true,
    },
});

/* Back to top */
//Get the button:
mybutton = document.getElementById("myBtn");

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
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 