document.addEventListener("DOMContentLoaded", () => {
  const buttonMenuTrigger = document.querySelector(".button_menu_trigger");
  const buttons = document.querySelector(".buttons");
  const buttonFirst = document.querySelector(".button_first");
  const buttonSec = document.querySelector(".button_sec");

  const toggleButtons = () => {
    buttons.classList.toggle("active");
    buttons.classList.toggle("hidden");
    buttonFirst.classList.toggle("hidden");
    buttonSec.classList.toggle("hidden");
  };

  buttonMenuTrigger.addEventListener("click", toggleButtons);
});
