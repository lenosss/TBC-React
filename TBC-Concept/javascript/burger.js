document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger_menu");
  const header = document.querySelector("header");
  const mobileMenu = document.querySelector(".header_menu_mobile_version");

  const showMenu = () => {
    mobileMenu.style.display = "block";
    requestAnimationFrame(() => {
      mobileMenu.classList.add("show");
    });
  };

  const hideMenu = () => {
    mobileMenu.classList.remove("show");
    setTimeout(() => {
      mobileMenu.style.display = "none";
    }, 500);
  };

  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.contains("show");
    burgerMenu.classList.toggle("open");
    header.classList.toggle("header_bg_color");
    isOpen ? hideMenu() : showMenu();
  };

  const resetMenu = () => {
    if (window.innerWidth > 991) {
      mobileMenu.style.display = "none";
      mobileMenu.classList.remove("show");
      burgerMenu.classList.remove("open");
      header.classList.remove("header_bg_color");
    }
  };

  burgerMenu.addEventListener("click", toggleMenu);
  window.addEventListener("resize", resetMenu);
});
