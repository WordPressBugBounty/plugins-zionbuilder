(function(vue) {
  "use strict";
  const _hoisted_1 = ["innerHTML"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "customHtml",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.renderSlot(_ctx.$slots, "start"),
          vue.createElementVNode("div", {
            innerHTML: _ctx.options.content
          }, null, 8, _hoisted_1),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "custom_html",
    component: _sfc_main
  });
})(zb.vue);
