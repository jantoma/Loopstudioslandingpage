
window.addEventListener("scroll", function () {
  let backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 0) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
document.querySelector(".back-to-top").addEventListener("click", function () {
  scrollToTop(0);
  return false;
});

document.querySelector(".scrolltop-mf").addEventListener("click", function () {
  scrollToTop(50);
});



