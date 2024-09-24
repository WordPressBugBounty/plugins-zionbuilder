(function(vue) {
  "use strict";
  const _hoisted_1 = {
    key: 1,
    class: "zb-el-zionSeparator-item-icon zb-el-zionSeparator-item--size"
  };
  const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("span", { class: "zb-el-zionSeparator-item zb-el-zionSeparator-icon-line zb-el-zionSeparator-icon-line-one" }, null, -1);
  const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("span", { class: "zb-el-zionSeparator-item zb-el-zionSeparator-icon-line zb-el-zionSeparator-icon-line-two" }, null, -1);
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Separator",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const iconConfig = vue.computed(() => {
        return props.options.icon || {
          family: "Font Awesome 5 Free Regular",
          name: "star",
          unicode: "uf005"
        };
      });
      return (_ctx, _cache) => {
        const _component_ElementIcon = vue.resolveComponent("ElementIcon");
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.renderSlot(_ctx.$slots, "start"),
          !_ctx.options.use_icon ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
            key: 0,
            class: "zb-el-zionSeparator-item zb-el-zionSeparator-item--size"
          }, _ctx.api.getAttributesForTag("separator_item")), null, 16)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
            _hoisted_2,
            vue.createVNode(_component_ElementIcon, {
              class: "zb-el-zionSeparator-icon",
              "icon-config": iconConfig.value
            }, null, 8, ["icon-config"]),
            _hoisted_3
          ])),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "zion_separator",
    component: _sfc_main
  });
})(zb.vue);
