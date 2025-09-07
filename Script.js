function scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
      });
    }
const scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function () {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollTop > 10) {
    scrollBtn.style.display = "block"; // show button
  } else {
    scrollBtn.style.display = "none";  // hide button
  }
};


// Smooth scroll to top
scrollBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
