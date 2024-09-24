var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
(function() {
  "use strict";
  const intersectionObserverSupport = function() {
    return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype;
  };
  const observe = function(elements, callback, options = {}) {
    const optionsWithDefaults = __spreadValues({}, options);
    const observer = new IntersectionObserver(callback, optionsWithDefaults);
    elements.forEach((element) => {
      observer.observe(element);
    });
    return observer;
  };
  const animateJs = function(options) {
    let elements;
    options = __spreadValues({
      animationClass: "animated",
      selector: "ajs__element",
      watchForChanges: true,
      mode: "css_class",
      once: true
    }, options);
    const selector = options.selector;
    if (typeof selector === "string") {
      elements = document.querySelectorAll(`.${selector}`);
    } else if (typeof selector === "object" && selector[0] && selector[0].nodeType === 1 || selector instanceof Array) {
      elements = [...selector];
    } else if (typeof selector === "object" && selector.nodeType === 1) {
      elements = [selector];
    } else {
      console.warn("You need to specify the selector.");
      return;
    }
    const applyAnimation = function(domNode) {
      if (domNode.dataset.ajsAnimation) {
        domNode.classList.add(domNode.dataset.ajsAnimation, options.animationClass);
      }
    };
    if (!intersectionObserverSupport()) {
      elements.forEach((element) => {
        applyAnimation(element);
      });
    }
    const onElementInViewport = function(entries, observer2) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (options.mode === "css_class" && options.animationClass) {
            applyAnimation(entry.target);
          } else if (options.mode === "event") {
            const event = new Event("inViewport");
            entry.target.dispatchEvent(event);
          }
          if (options.once) {
            observer2.unobserve(entry.target);
          }
        }
      });
    };
    const observer = observe(elements, onElementInViewport);
    const destroy = function() {
      observer.disconnect();
      elements = null;
    };
    return {
      destroy
    };
  };
  window.animateJS = animateJs;
})();
