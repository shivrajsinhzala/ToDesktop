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
    window.scrollY / 3.14 - 160
  }px)`;
});
window.addEventListener("scroll", () => {
  if (document.getElementById("CompaniesList2") == null || undefined) {
    return;
  }

  document.getElementById("CompaniesList2").style.transform = `translateX(${
    -window.scrollY / 5 - 160
  }px)`;
});
window.addEventListener("scroll", () => {
  if (document.getElementById("CompaniesList3") == null || undefined) {
    return;
  }

  document.getElementById("CompaniesList3").style.transform = `translateX(${
    window.scrollY / 3.14 - 160
  }px)`;

  document.getElementById("line4").style.transform = `translateX(${
    -window.scrollY / 3 + 1500
  }px)`;
});

const dtElements = document.querySelectorAll("dt");

dtElements.forEach((item) => {
  console.log("asda");
  item.addEventListener("click", () => {
    console.log("wasd");
    const ddID = item.getAttribute("aria-controls");
    const ddElement = document.getElementById(ddID);
    const arrowIcon = item.querySelectorAll("i")[0];

    ddElement.classList.toggle("hidden");
    arrowIcon.classList.toggle("-rotate-180");
  });
});
