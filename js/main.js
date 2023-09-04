document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links
  const navLinks = document.querySelectorAll(".nav-link");

  // Attach a click event listener to each navigation link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Check if the navigation menu is expanded
      const navbarCollapse = document.getElementById("navbar-collapse-toggle");
      if (window.getComputedStyle(navbarCollapse).display !== "none") {
        // If expanded, close the navigation menu
        const togglerButton = document.querySelector(".navbar-toggler");
        togglerButton.click(); // Programmatically click the toggler button
      }
    });
  });
});
