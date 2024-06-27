// Wrap your code in an event listener for when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Select the toggle-ball element when the DOM is ready
  const ball = document.querySelector(".toggle-ball");
  const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .toggle, .sidebar, .left-menu-icon");

  // Add a click event listener to toggle dark mode
  ball.addEventListener("click", function() {
    items.forEach(function(item) {
      item.classList.toggle("active");
    });
    ball.classList.toggle("active");
  });
});