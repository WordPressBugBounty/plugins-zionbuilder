(function(vue) {
  "use strict";
  const _hoisted_1 = {
    key: 1,
    class: "zb-el-zionSeparator-item-icon zb-el-zionSeparator-item--size"
  };
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
          !__props.options.use_icon ? (vue.openBlock(), vue.createElementBlock(
            "div",
            vue.mergeProps({
              key: 0,
              class: "zb-el-zionSeparator-item zb-el-zionSeparator-item--size"
            }, __props.api.getAttributesForTag("separator_item")),
            null,
            16
            /* FULL_PROPS */
          )) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
            _cache[0] || (_cache[0] = vue.createElementVNode(
              "span",
              { class: "zb-el-zionSeparator-item zb-el-zionSeparator-icon-line zb-el-zionSeparator-icon-line-one" },
              null,
              -1
              /* CACHED */
            )),
            vue.createVNode(_component_ElementIcon, {
              class: "zb-el-zionSeparator-icon",
              "icon-config": iconConfig.value
            }, null, 8, ["icon-config"]),
            _cache[1] || (_cache[1] = vue.createElementVNode(
              "span",
              { class: "zb-el-zionSeparator-item zb-el-zionSeparator-icon-line zb-el-zionSeparator-icon-line-two" },
              null,
              -1
              /* CACHED */
            ))
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
