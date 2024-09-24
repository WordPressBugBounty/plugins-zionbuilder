(function() {
  "use strict";
  const main = "";
  document.addEventListener("click", function(event) {
    const element = event.target;
    if (element && element.classList.contains("zb-el-alert__closeIcon")) {
      const alert = element.closest(".zb-el-alert");
      alert ? alert.style.display = "none" : null;
    }
  });
})();
