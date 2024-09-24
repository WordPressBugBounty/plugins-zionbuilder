(function(vue) {
  "use strict";
  const _hoisted_1 = { class: "zb-el-iconBox" };
  const _hoisted_2 = {
    key: 0,
    class: "zb-el-iconBox-iconWrapper"
  };
  const _hoisted_3 = { class: "zb-el-iconBox-text" };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "iconBox",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const titleTag = vue.computed(() => {
        return props.options.title_tag || "h3";
      });
      return (_ctx, _cache) => {
        const _component_ElementIcon = vue.resolveComponent("ElementIcon");
        const _component_RenderValue = vue.resolveComponent("RenderValue");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "start"),
          _ctx.options.icon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
            vue.createVNode(_component_ElementIcon, vue.mergeProps({
              class: ["zb-el-iconBox-icon", _ctx.api.getStyleClasses("icon_styles")],
              "icon-config": _ctx.options.icon
            }, _ctx.api.getAttributesForTag("icon_styles")), null, 16, ["class", "icon-config"])
          ])) : vue.createCommentVNode("", true),
          vue.createElementVNode("span", vue.mergeProps({ class: "zb-el-iconBox-spacer" }, _ctx.api.getAttributesForTag("spacer")), null, 16),
          vue.createElementVNode("div", _hoisted_3, [
            _ctx.options.title ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(titleTag.value), vue.mergeProps({
              key: 0,
              class: ["zb-el-iconBox-title", _ctx.api.getStyleClasses("title_styles")]
            }, _ctx.api.getAttributesForTag("title_styles"), {
              innerHTML: _ctx.options.title
            }), null, 16, ["class", "innerHTML"])) : vue.createCommentVNode("", true),
            _ctx.options.description ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
              key: 1,
              class: ["zb-el-iconBox-description", _ctx.api.getStyleClasses("description_styles")]
            }, _ctx.api.getAttributesForTag("description_styles")), [
              vue.createVNode(_component_RenderValue, { option: "description" })
            ], 16)) : vue.createCommentVNode("", true)
          ]),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "icon_box",
    component: _sfc_main
  });
})(zb.vue);
