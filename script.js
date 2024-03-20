const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Get the current year
// const currentYear = new Date().getFullYear();

// Update the copyright year in the footer
// document.getElementById("copyright-year").textContent = currentYear;
