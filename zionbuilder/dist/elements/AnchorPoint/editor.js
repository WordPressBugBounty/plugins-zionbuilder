(function(vue) {
  "use strict";
  const _hoisted_1 = { class: "zb-anchorPoint" };
  const _hoisted_2 = ["innerHTML"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "anchorPoint",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const getCssID = vue.computed(() => {
        return (props.options._advanced_options || {})._element_id || props.element.uid;
      });
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "start"),
          vue.createElementVNode("span", {
            innerHTML: `#${getCssID.value}`
          }, null, 8, _hoisted_2),
          vue.createVNode(_component_Icon, {
            icon: "element-anchor-point",
            size: 30,
            color: "#B2B2B2"
          }),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  const anchorPoint_vue_vue_type_style_index_0_lang = "";
  window.zb.editor.registerElementComponent({
    elementType: "anchor_point",
    component: _sfc_main
  });
})(zb.vue);
