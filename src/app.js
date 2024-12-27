function toggleMenu() {
  document.getElementById("menuIcon").classList.toggle("hidden");
  document.getElementById("closeIcon").classList.toggle("hidden");
  document.getElementById("mobileMenu").classList.toggle("hidden");
  document.getElementById("mobileMenu").classList.toggle("flex");
}

// function toggleMenu() {
//   document.getElementById("some").classList.toggle("hidden");
// }

window.addEventListener("scroll", () => {
  document.getElementById("CompaniesList1").style.transform = `translateX(${
    window.scrollY / 3.14 - 384
  }px)`;
});
window.addEventListener("scroll", () => {
  if (document.getElementById("CompaniesList2") == null || undefined) {
    return;
  }

  document.getElementById("CompaniesList2").style.transform = `translateX(${-(
    window.scrollY / 3.14 -
    384
  )}px)`;
});
window.addEventListener("scroll", () => {
  if (document.getElementById("CompaniesList3") == null || undefined) {
    return;
  }

  document.getElementById("CompaniesList3").style.transform = `translateX(${
    window.scrollY / 3.14 - 1000
  }px)`;
});
