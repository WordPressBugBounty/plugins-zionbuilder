(function(vue) {
  "use strict";
  const _hoisted_1 = {
    key: 1,
    class: "zb-el-button__text"
  };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Button",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const iconConfig = vue.computed(() => {
        return props.options.icon;
      });
      const getTag = vue.computed(() => {
        return props.options.link && props.options.link.link ? "a" : "div";
      });
      const getButtonAttributes = vue.computed(() => {
        const attrs = {};
        if (props.options.link && props.options.link.link) {
          attrs.href = props.options.link.link;
          attrs.target = props.options.link.target;
          attrs.title = props.options.link.title;
        }
        return attrs;
      });
      return (_ctx, _cache) => {
        const _component_ElementIcon = vue.resolveComponent("ElementIcon");
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.renderSlot(_ctx.$slots, "start"),
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(getTag.value), vue.mergeProps(_ctx.api.getAttributesForTag("button_styles", getButtonAttributes.value), {
            ref: "button",
            class: ["zb-el-button", [_ctx.api.getStyleClasses("button_styles"), { "zb-el-button--has-icon": _ctx.options.icon }]]
          }), {
            default: vue.withCtx(() => [
              _ctx.options.icon ? (vue.openBlock(), vue.createBlock(_component_ElementIcon, vue.mergeProps({
                key: 0,
                class: "zb-el-button__icon"
              }, _ctx.api.getAttributesForTag("icon_styles"), {
                "icon-config": iconConfig.value,
                class: _ctx.api.getStyleClasses("icon_styles")
              }), null, 16, ["icon-config", "class"])) : vue.createCommentVNode("", true),
              _ctx.options.button_text ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, vue.toDisplayString(_ctx.options.button_text), 1)) : vue.createCommentVNode("", true)
            ]),
            _: 1
          }, 16, ["class"])),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "zion_button",
    component: _sfc_main
  });
})(zb.vue);
