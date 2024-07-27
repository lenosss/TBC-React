document.addEventListener("DOMContentLoaded", () => {
  const headerMenu = document.querySelector(".header_menu");
  const burgerMenu = document.querySelector(".burger_menu");

  const closeDropdown = (dropdown) => {
    const content = dropdown.querySelector(".true");
    content.style.maxHeight = `${content.scrollHeight}px`;
    setTimeout(() => {
      dropdown.classList.remove("active");
      content.style.maxHeight = "0";
    }, 10);
  };

  const openDropdown = (dropdown) => {
    const content = dropdown.querySelector(".true");
    dropdown.classList.add("active");
    content.style.display = "flex";
    content.style.maxHeight = "0";
    requestAnimationFrame(() => {
      content.style.maxHeight = `${content.scrollHeight}px`;
    });
  };

  const toggleDropdown = (dropdown) => {
    if (dropdown.classList.contains("active")) {
      closeDropdown(dropdown);
    } else {
      openDropdown(dropdown);
    }
  };

  const closeAllDropdowns = (excludeDropdown = null) => {
    document
      .querySelectorAll(".header_menu_dropdown.active")
      .forEach((dropdown) => {
        if (dropdown !== excludeDropdown) {
          closeDropdown(dropdown);
        }
      });
  };

  headerMenu.addEventListener("click", (event) => {
    const item = event.target.closest(".flex_cont");
    if (item) {
      const dropdown = item.closest(".header_menu_dropdown");
      closeAllDropdowns(dropdown);
      toggleDropdown(dropdown);
      event.stopPropagation();
    }
  });

  burgerMenu.addEventListener("click", (event) => {
    if (!burgerMenu.classList.contains("open")) {
      closeAllDropdowns();
    }
    event.stopPropagation();
  });

  window.addEventListener("resize", () => closeAllDropdowns());

  document.addEventListener("click", () => closeAllDropdowns());
});
