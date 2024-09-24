(function(vue) {
  "use strict";
  const _hoisted_1 = { class: "zb-el-imageBox" };
  const _hoisted_2 = {
    key: 0,
    class: "zb-el-imageBox-imageWrapper"
  };
  const _hoisted_3 = ["src"];
  const _hoisted_4 = /* @__PURE__ */ vue.createElementVNode("span", { class: "zb-el-imageBox-spacer" }, null, -1);
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "ImageBox",
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
      const titleTag = vue.computed(() => {
        return props.options.link && props.options.link.link;
      });
      return (_ctx, _cache) => {
        const _component_RenderValue = vue.resolveComponent("RenderValue");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "start"),
          imageSrc.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
            vue.createElementVNode("img", vue.mergeProps({
              class: "zb-el-imageBox-image",
              src: imageSrc.value
            }, _ctx.api.getAttributesForTag("image_styles"), {
              class: _ctx.api.getStyleClasses("image_styles")
            }), null, 16, _hoisted_3)
          ])) : vue.createCommentVNode("", true),
          _hoisted_4,
          vue.createElementVNode("div", {
            class: "zb-el-imageBox-text",
            style: vue.normalizeStyle({
              "text-align": _ctx.options.align
            })
          }, [
            _ctx.options.title ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(titleTag.value), vue.mergeProps({
              key: 0,
              class: ["zb-el-imageBox-title", _ctx.api.getStyleClasses("title_styles")]
            }, _ctx.api.getAttributesForTag("title_styles"), {
              innerHTML: _ctx.options.title
            }), null, 16, ["class", "innerHTML"])) : vue.createCommentVNode("", true),
            _ctx.options.description ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
              key: 1,
              class: ["zb-el-imageBox-description", _ctx.api.getStyleClasses("description_styles")]
            }, _ctx.api.getAttributesForTag("description_styles")), [
              vue.createVNode(_component_RenderValue, { option: "description" })
            ], 16)) : vue.createCommentVNode("", true)
          ], 4),
          vue.renderSlot(_ctx.$slots, "start")
        ]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "image_box",
    component: _sfc_main
  });
})(zb.vue);
