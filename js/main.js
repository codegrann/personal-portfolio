document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const togglerButton = document.querySelector("#navbar-toggler");
  const navbarCollapse = document.getElementById("navbar-collapse-toggle");

  const projects = document.querySelector(".project");
  console.log(typeof projects);
  // Attach a click event listener to each navigation link
  //   if (window.innerWidth < "768px") {
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Check if the navigation menu is expanded
      if (navbarCollapse.style.display !== "none") {
        // If expanded, close the navigation menu
        togglerButton.click();
      }
    });
  });
  //   }
});
