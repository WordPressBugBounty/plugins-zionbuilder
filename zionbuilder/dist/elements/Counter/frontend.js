var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function() {
  "use strict";
  const main = "";
  window.zbScripts = window.zbScripts || {};
  class Counter {
    constructor(domNode) {
      __publicField(this, "domNode");
      __publicField(this, "numberContainer");
      this.domNode = domNode;
      this.numberContainer = this.domNode.querySelector(".zb-el-counter__number");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.init();
            observer.unobserve(this.domNode);
          }
        });
      });
      observer.observe(this.domNode);
    }
    init() {
      const start = this.domNode.dataset.start || "0";
      const end = this.domNode.dataset.end || "100";
      const duration = this.domNode.dataset.duration || "2000";
      this.animate(
        (newValue) => {
          if (this.numberContainer) {
            this.numberContainer.innerHTML = "" + Math.round(newValue);
          }
        },
        parseInt(start),
        parseInt(end),
        parseInt(duration)
      );
    }
    animate(render, from, to, duration) {
      const startTime = performance.now();
      requestAnimationFrame(function step(time) {
        let pTime = (time - startTime) / duration;
        if (pTime > 1)
          pTime = 1;
        render(from + (to - from) * pTime);
        if (pTime < 1) {
          requestAnimationFrame(step);
        }
      });
    }
  }
  document.querySelectorAll(".zb-el-counter").forEach((domNode) => {
    new Counter(domNode);
  });
  window.zbScripts.counter = Counter;
})();
