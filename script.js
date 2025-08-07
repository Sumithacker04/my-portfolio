// script.js
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-theme");
  const body = document.body;

  toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Icon change (optional)
    if (body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️";
    } else {
      toggleBtn.textContent = "🌙";
    }
  });
});
