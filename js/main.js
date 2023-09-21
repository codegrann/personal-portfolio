document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const togglerButton = document.querySelector("#navbar-toggler");
  const navbarCollapse = document.getElementById("navbar-collapse-toggle");
  const nameAnimation = document.querySelector("#name-anime");
  const name = "I'm a passionate web developer";
  nameAnimation.style.color = "red";
  // nameAnimation.innerHTML = "hey";
  let isTyping = true;
  let charIndex = 0;

  function typeText() {
    if (isTyping) {
      if (charIndex <= name.length) {
        // Use "<=" instead of "<" to include the last character
        nameAnimation.textContent = name.slice(0, charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Typing speed (milliseconds)
      } else {
        isTyping = false;
        setTimeout(typeText, 1000); // Pause before deleting
      }
    } else {
      if (charIndex >= 0) {
        // Use ">=" instead of ">" to include the first character
        nameAnimation.textContent = name.slice(0, charIndex);
        charIndex--;
        setTimeout(typeText, 100); // Deleting speed (milliseconds)
      } else {
        isTyping = true;
        charIndex = 0; // Reset the index for typing
        setTimeout(typeText, 1000); // Pause before typing again
      }
    }
  }
  typeText();
  // window.onload = typeText;

  // console.log(document.querySelector("#projects"));
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
