(function(vue) {
  "use strict";
  const _hoisted_1 = ["src"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "gallery",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const getImages = vue.computed(() => {
        return props.options.images;
      });
      const getWrapperAttributes = vue.computed(() => {
        if (props.options.use_modal) {
          return {
            "data-zion-lightbox": JSON.stringify({
              selector: ""
            })
          };
        }
        return {};
      });
      function getImageWrapperAttrs(image) {
        if (props.options.use_modal) {
          return {
            "data-src": image.image
          };
        }
        return {};
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", vue.normalizeProps(vue.guardReactiveProps(getWrapperAttributes.value)), [
          vue.renderSlot(_ctx.$slots, "start"),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(getImages.value, (image, index) => {
            return vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
              key: index,
              class: ["zb-el-gallery-item", _ctx.api.getStyleClasses("image_wrapper_styles")]
            }, _ctx.api.getAttributesForTag("image_wrapper_styles", getImageWrapperAttrs(image))), [
              vue.createElementVNode("img", {
                src: image.image
              }, null, 8, _hoisted_1)
            ], 16);
          }), 128)),
          vue.renderSlot(_ctx.$slots, "end")
        ], 16);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "gallery",
    component: _sfc_main
  });
})(zb.vue);
