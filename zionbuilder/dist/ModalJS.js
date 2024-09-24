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
  function applyTrigger$4(instance, options) {
    const optionsWithDefaults = __spreadValues({
      delay: 0
    }, options);
    window.addEventListener("load", onPageLoad);
    function onPageLoad() {
      setTimeout(() => {
        instance.open();
      }, optionsWithDefaults.delay);
    }
  }
  const pageLoad = {
    name: "pageLoad",
    fn: applyTrigger$4
  };
  function applyTrigger$3(instance, options) {
    const optionsWithDefaults = __spreadValues({
      scrollAmmount: 0,
      direction: "down"
    }, options);
    let lastScrollTop = 0;
    let pageHeight = 0;
    let windowHeight = 0;
    window.addEventListener("load", onPageLoad);
    window.addEventListener("scroll", onPageScroll, false);
    function onPageLoad() {
      pageHeight = document.body.clientHeight;
      windowHeight = window.innerHeight;
    }
    function onPageScroll() {
      const scrollPercentage = pageHeight * optionsWithDefaults.scrollAmmount / 100;
      const directionDown = window.scrollY > lastScrollTop;
      if (optionsWithDefaults.direction === "down" && directionDown && window.scrollY + windowHeight >= scrollPercentage) {
        instance.open();
        window.removeEventListener("scroll", onPageScroll, false);
      } else if (optionsWithDefaults.direction === "up" && !directionDown) {
        instance.open();
        window.removeEventListener("scroll", onPageScroll, false);
      }
      lastScrollTop = window.scrollY;
    }
  }
  const pageScroll = {
    name: "pageScroll",
    fn: applyTrigger$3
  };
  function applyTrigger$2(instance, options) {
    const optionsWithDefaults = __spreadValues({
      clicks: 1
    }, options);
    let clicks = 1;
    document.addEventListener("click", onPageLoad);
    function onPageLoad() {
      if (clicks >= optionsWithDefaults.clicks) {
        instance.open();
        document.removeEventListener("click", onPageLoad);
      }
      clicks++;
    }
  }
  const pageClick = {
    name: "click",
    fn: applyTrigger$2
  };
  function isTouchDevice() {
    return /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  function applyTrigger$1(instance) {
    let lastPosition = null, newPosition, timer, delta = 0, lastScrollPosition = 0;
    const delay = 50;
    function clear() {
      lastPosition = null;
      delta = 0;
    }
    if (isTouchDevice()) {
      document.addEventListener("scroll", exitIntentMobile);
    } else {
      document.addEventListener("mouseout", exitIntentDesktop);
    }
    function getScrollSpeed() {
      if (lastPosition != null) {
        delta = newPosition - lastPosition;
      }
      lastPosition = newPosition;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    }
    function exitIntentMobile() {
      const directionDown = window.scrollY > lastScrollPosition;
      newPosition = window.scrollY;
      lastScrollPosition = window.scrollY;
      if (!directionDown && getScrollSpeed() <= -100) {
        instance.open();
        document.removeEventListener("scroll", exitIntentMobile);
      }
    }
    function exitIntentDesktop(e) {
      const shouldShowExitIntent = !e.toElement && !e.relatedTarget && e.clientY < 10;
      if (shouldShowExitIntent) {
        instance.open();
        document.removeEventListener("mouseout", exitIntentDesktop);
      }
    }
  }
  const exitIntent = {
    name: "exitIntent",
    fn: applyTrigger$1
  };
  function applyTrigger(instance, options) {
    const optionsWithDefaults = __spreadValues({
      selector: null
    }, options);
    if (!optionsWithDefaults.selector) {
      return;
    }
    const selectors = document.querySelectorAll(optionsWithDefaults.selector);
    if (selectors.length === 0) {
      return;
    }
    selectors.forEach((selector) => {
      selector.addEventListener("click", instance.open);
    });
  }
  const selectorClick = {
    name: "selector_click",
    fn: applyTrigger
  };
  const modals = [];
  const defaultTriggers = [pageLoad, pageScroll, pageClick, exitIntent, selectorClick];
  function createModal(selector, options = {}) {
    let instance;
    options = __spreadValues({
      triggers: [],
      closeOnBackdropClick: true
    }, options);
    function trigger(eventType) {
      const event = new CustomEvent(eventType, { detail: instance });
      selector.dispatchEvent(event);
    }
    function open() {
      selector.classList.add("zb-modal--open");
      trigger("openModal");
    }
    if (options.closeOnBackdropClick) {
      selector.addEventListener("click", closeOnBackdrop);
    }
    function close() {
      selector.classList.remove("zb-modal--open");
      trigger("closeModal");
    }
    function destroy() {
      if (options.closeOnBackdropClick) {
        selector.removeEventListener("click", closeOnBackdrop);
      }
    }
    function closeOnBackdrop(e) {
      if (e.target === selector) {
        close();
      }
    }
    instance = {
      open,
      close,
      destroy,
      selector
    };
    if (options.triggers) {
      options.triggers.forEach((triggerConfig) => {
        const { type, fn, options: options2 } = triggerConfig;
        if (typeof fn === "function") {
          fn(instance, options2);
        } else {
          const triggerConfig2 = defaultTriggers.find((trigger2) => trigger2.name === type);
          if (triggerConfig2) {
            const { fn: fn2 } = triggerConfig2;
            fn2(instance, options2);
          }
        }
      });
    }
    modals.push(instance);
    return instance;
  }
  function getModalInstance(selector = null) {
    if (null === selector) {
      return modals[modals.length - 1];
    }
    return modals.find((modal) => modal.selector = selector);
  }
  function openModal(selector = null) {
    const modalInstance = getModalInstance(selector);
    if (modalInstance) {
      modalInstance.open();
    }
  }
  function closeModal(selector = null) {
    const modalInstance = getModalInstance(selector);
    if (modalInstance) {
      modalInstance.close();
    }
  }
  window.ModalJS = {
    createModal,
    getModalInstance,
    openModal,
    closeModal
  };
})();
