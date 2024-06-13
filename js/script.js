document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenus = document.querySelectorAll(".hamburger-menu");

  hamburgerMenus.forEach((hamburgerMenu) => {
    hamburgerMenu.addEventListener("click", () => {
      hamburgerMenu.classList.toggle("active");
    });
  });
});
