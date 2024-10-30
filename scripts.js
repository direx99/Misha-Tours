// Smooth scroll to sections
function scrollToAbout() {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
}

function scrollToContact() {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-custom");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
