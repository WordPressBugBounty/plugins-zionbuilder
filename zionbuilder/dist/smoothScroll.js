(function() {
  "use strict";
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
      if (history.replaceState) {
        history.replaceState(null, "", window.location.pathname);
      } else {
        window.location.hash = "";
      }
    });
  });
})();
