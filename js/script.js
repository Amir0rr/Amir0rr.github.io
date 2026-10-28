const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelectorAll(".dropdown-link");

const closeMenu = () => {
  dropdown.classList.remove("open");
  dropdownBtn.setAttribute("aria-expanded", "false");
};

dropdownBtn.addEventListener("click", () => {
  const isOpen = dropdown.classList.toggle("open");
  dropdownBtn.setAttribute("aria-expanded", isOpen);
});

dropdownLink.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && dropdown.classList.contains("open")) {
    closeMenu();
    dropdownBtn.focus();
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav") && dropdown.classList.contains("open")) {
    closeMenu();
  }
});
