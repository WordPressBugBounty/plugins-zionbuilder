(function(vue) {
  "use strict";
  const _hoisted_1 = ["innerHTML"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "IconList",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const iconListConfig = vue.computed(() => {
        return props.options.icons ? props.options.icons : [];
      });
      return (_ctx, _cache) => {
        const _component_ElementIcon = vue.resolveComponent("ElementIcon");
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.renderSlot(_ctx.$slots, "start"),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(iconListConfig.value, (item, index) => {
            return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.link && item.link.link ? "a" : "span"), vue.mergeProps({
              key: index,
              class: ["zb-el-iconList__item", [`zb-el-iconList__item--${index} `, _ctx.api.getStyleClasses("item_styles")]]
            }, _ctx.api.getAttributesForTag("item_styles")), {
              default: vue.withCtx(() => [
                vue.createVNode(_component_ElementIcon, vue.mergeProps({
                  class: ["zb-el-iconList__itemIcon", _ctx.api.getStyleClasses("icon_styles")]
                }, _ctx.api.getAttributesForTag("icon_styles"), {
                  "icon-config": item.icon
                }), null, 16, ["class", "icon-config"]),
                item.text ? (vue.openBlock(), vue.createElementBlock("span", vue.mergeProps({
                  key: 0,
                  class: ["zb-el-iconList__itemText", _ctx.api.getStyleClasses("text_styles")]
                }, _ctx.api.getAttributesForTag("text_styles"), {
                  innerHTML: item.text
                }), null, 16, _hoisted_1)) : vue.createCommentVNode("", true)
              ]),
              _: 2
            }, 1040, ["class"]);
          }), 128)),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "icon_list",
    component: _sfc_main
  });
})(zb.vue);
