document.addEventListener("DOMContentLoaded", () => {
  const acceptAllButton = document.getElementById("acceptAllButton");
  const cookiesWrapper = document.querySelector(".cookies_wrapper");

  const hideCookiesWrapper = () => {
    cookiesWrapper.style.display = "none";
  };

  acceptAllButton.addEventListener("click", hideCookiesWrapper);
});
