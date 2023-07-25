// popup.js
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.querySelector(".popup");
  const closeButton = document.querySelector(".popup-close");

  // Show the popup
  popup.classList.add("popup-show");

  // Close the popup when the close button is clicked
  closeButton.addEventListener("click", function () {
    popup.classList.remove("popup-show");
  });
});
