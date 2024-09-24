(function(vue) {
  "use strict";
  const _hoisted_1 = ["src"];
  const _hoisted_2 = ["src"];
  const _hoisted_3 = {
    key: 2,
    class: "zb-el-zionImage-caption"
  };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Image",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const imageSrc = vue.computed(() => {
        return (props.options.image || {}).image;
      });
      const hasLink = vue.computed(() => {
        return props.options.link && props.options.link.link;
      });
      const extraAttributes = vue.computed(() => {
        const attributes = window.zb.utils.getLinkAttributes(props.options.link);
        if (props.options.use_modal) {
          attributes.href = imageSrc.value;
          attributes["data-zion-lightbox"] = true;
        }
        return attributes;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.renderSlot(_ctx.$slots, "start"),
          hasLink.value ? (vue.openBlock(), vue.createElementBlock("a", vue.mergeProps({ key: 0 }, _ctx.api.getAttributesForTag("link_styles", extraAttributes.value), {
            class: _ctx.api.getStyleClasses("link_styles")
          }), [
            vue.createElementVNode("img", vue.mergeProps(_ctx.api.getAttributesForTag("image_styles"), {
              src: imageSrc.value,
              class: _ctx.api.getStyleClasses("image_styles")
            }), null, 16, _hoisted_1)
          ], 16)) : imageSrc.value ? (vue.openBlock(), vue.createElementBlock("img", vue.mergeProps({ key: 1 }, _ctx.api.getAttributesForTag("image_styles", extraAttributes.value), {
            src: imageSrc.value,
            class: _ctx.api.getStyleClasses("image_styles")
          }), null, 16, _hoisted_2)) : vue.createCommentVNode("", true),
          _ctx.options.show_caption ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, vue.toDisplayString(_ctx.options.caption_text), 1)) : vue.createCommentVNode("", true),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "zion_image",
    component: _sfc_main
  });
})(zb.vue);
