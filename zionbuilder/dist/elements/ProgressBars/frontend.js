(function() {
  "use strict";
  const main = "";
  window.zbScripts = window.zbScripts || {};
  class ProgressBars {
    constructor(domNode) {
      const bars = domNode.querySelectorAll("li");
      let start = 0;
      bars.forEach((singleBar) => {
        const barProgressElement = singleBar.querySelector(".zb-el-progressBars__barProgress");
        const percentage = barProgressElement.dataset.width;
        start += 0.2;
        barProgressElement.style.transitionDelay = start + "s";
        setTimeout(() => {
          barProgressElement.style.width = percentage + "%";
        });
      });
    }
  }
  document.querySelectorAll(".zb-el-progressBars").forEach((domNode) => {
    new ProgressBars(domNode);
  });
  window.zbScripts.progressBars = ProgressBars;
})();
