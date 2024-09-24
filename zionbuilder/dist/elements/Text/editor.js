(function(vue) {
  "use strict";
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Text",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_RenderValue = vue.resolveComponent("RenderValue");
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.renderSlot(_ctx.$slots, "start"),
          vue.createVNode(_component_RenderValue, { option: "content" }),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "zion_text",
    component: _sfc_main
  });
})(zb.vue);
