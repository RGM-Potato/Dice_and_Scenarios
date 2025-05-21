document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("infoToggle");
  const popup = document.getElementById("popupBox");

  toggleButton.addEventListener("click", () => {
    popup.classList.toggle("hidden");
  });
});
