var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
(function() {
  "use strict";
  const frontend = "";
  window.zbFrontend = window.zbFrontend || [];
  window.zbFrontend.scripts = window.zbFrontend.scripts || {};
  function useSwiper() {
    function getConfig(sliderEl) {
      const configAttr = sliderEl.dataset.zionSliderConfig;
      const elementConfig = configAttr ? JSON.parse(configAttr) : {};
      const sliderConfig = {
        autoplay: true,
        autoHeight: true
      };
      if (elementConfig.pagination) {
        sliderConfig.pagination = {
          el: ".swiper-pagination"
        };
      }
      if (elementConfig.arrows) {
        sliderConfig.navigation = {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        };
      }
      let slidesPerView = 1;
      const slidesToShow = elementConfig.slides_to_show || 1;
      const breakpoints = {};
      if (typeof slidesToShow === "number") {
        slidesPerView = slidesToShow;
      } else if (typeof slidesToShow === "object") {
        slidesPerView = typeof slidesToShow.default !== "undefined" ? slidesToShow.default : 1;
        let lastValue = false;
        Object.keys(window.zbFrontendResponsiveDevicesMobileFirst).forEach((key) => {
          const value = window.zbFrontendResponsiveDevicesMobileFirst[key];
          if (typeof slidesToShow[key] !== "undefined") {
            breakpoints[value] = {
              slidesPerView: slidesToShow[key]
            };
            lastValue = slidesToShow[key];
          } else if (lastValue !== false) {
            breakpoints[value] = {
              slidesPerView: lastValue
            };
          }
        });
      }
      sliderConfig.slidesPerView = slidesPerView;
      let slidesPerGroup = 1;
      const slidesToScroll = elementConfig.slides_to_scroll || 1;
      if (typeof slidesToScroll === "number") {
        slidesPerGroup = slidesToScroll;
      } else if (typeof slidesToScroll === "object") {
        slidesPerGroup = typeof slidesToScroll.default !== "undefined" ? slidesToScroll.default : 1;
        let lastValue = false;
        Object.keys(window.zbFrontendResponsiveDevicesMobileFirst).forEach((key) => {
          const value = window.zbFrontendResponsiveDevicesMobileFirst[key];
          if (typeof slidesToScroll[key] !== "undefined") {
            breakpoints[value] = __spreadProps(__spreadValues({}, breakpoints[value] || {}), {
              slidesPerGroup: slidesToScroll[key]
            });
            lastValue = slidesToScroll[key];
          } else if (lastValue !== false) {
            breakpoints[value] = __spreadProps(__spreadValues({}, breakpoints[value] || {}), {
              slidesPerGroup: lastValue
            });
          }
        });
      }
      sliderConfig.slidesPerGroup = slidesPerGroup;
      sliderConfig.breakpoints = breakpoints;
      return __spreadProps(__spreadValues(__spreadValues({}, sliderConfig), elementConfig.rawConfig), {
        observer: true,
        observeParents: true
      });
    }
    function initSlider(sliderEl, config) {
      return new window.Swiper(sliderEl, config);
    }
    function runAll(scope = document) {
      const sliders = scope.querySelectorAll(".swiper-container");
      sliders.forEach((sliderEl) => {
        const config = getConfig(sliderEl);
        sliderEl.zbSwiper = initSlider(sliderEl, config);
      });
    }
    return {
      getConfig,
      initSlider,
      runAll
    };
  }
  window.zbFrontend.scripts.swiper = useSwiper();
  window.zbFrontend.scripts.swiper.runAll();
})();
