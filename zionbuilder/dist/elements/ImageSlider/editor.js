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
(function(vue, composables) {
  "use strict";
  const _hoisted_1 = { class: "swiper" };
  const _hoisted_2 = ["data-zion-slider-config"];
  const _hoisted_3 = { class: "swiper-wrapper" };
  const _hoisted_4 = ["src"];
  const _hoisted_5 = /* @__PURE__ */ vue.createElementVNode("div", { class: "swiper-button-prev" }, null, -1);
  const _hoisted_6 = /* @__PURE__ */ vue.createElementVNode("div", { class: "swiper-button-next" }, null, -1);
  const __default__ = {
    name: "ImageSlider"
  };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const { mobileFirstResponsiveDevices } = composables.useResponsiveDevices();
      let slider = null;
      const sliderWrapper = vue.ref(null);
      const pagination = vue.ref(null);
      const elementOptions = vue.computed(() => {
        const config = props.options ? {
          arrows: props.options.arrows,
          pagination: props.options.dots,
          slides_to_show: props.options.slides_to_show,
          slides_to_scroll: props.options.slides_to_scroll,
          rawConfig: {
            observer: true,
            autoplay: props.options.autoplay,
            speed: props.options.speed || 300,
            effect: props.options.effect || "slide"
          }
        } : {};
        if (props.options.autoplay) {
          config.rawConfig.autoplay = {
            delay: props.options.autoplay_delay
          };
        }
        return JSON.stringify(config);
      });
      vue.watch(elementOptions, () => {
        vue.nextTick(() => runScript());
      });
      vue.watch(mobileFirstResponsiveDevices, (newValue) => {
        window.zbFrontendResponsiveDevicesMobileFirst = newValue;
        runScript();
      });
      function runScript() {
        const script = window.zbFrontend.scripts.swiper;
        if (script) {
          const config = script.getConfig(sliderWrapper.value);
          config.on = {
            beforeDestroy: function() {
              if (pagination.value) {
                pagination.value.innerHTML = "";
              }
            }
          };
          if (slider) {
            config.initialSlide = slider.realIndex;
            slider.destroy();
          }
          slider = script.initSlider(sliderWrapper.value, config);
        }
      }
      vue.onMounted(() => {
        runScript();
      });
      vue.onBeforeUnmount(() => {
        if (slider) {
          slider.destroy();
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "start"),
          vue.createElementVNode("div", {
            ref_key: "sliderWrapper",
            ref: sliderWrapper,
            class: "swiper-container",
            "data-zion-slider-config": elementOptions.value
          }, [
            vue.createElementVNode("div", _hoisted_3, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.options.images, (slide, i) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key: i,
                  class: "swiper-slide"
                }, [
                  vue.createElementVNode("img", {
                    src: slide.image
                  }, null, 8, _hoisted_4)
                ]);
              }), 128))
            ]),
            _ctx.options.dots ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              ref_key: "pagination",
              ref: pagination,
              class: "swiper-pagination"
            }, null, 512)) : vue.createCommentVNode("", true),
            _ctx.options.arrows ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              _hoisted_5,
              _hoisted_6
            ], 64)) : vue.createCommentVNode("", true)
          ], 8, _hoisted_2),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  }));
  window.zb.editor.registerElementComponent({
    elementType: "image_slider",
    component: _sfc_main
  });
})(zb.vue, zb.composables);
