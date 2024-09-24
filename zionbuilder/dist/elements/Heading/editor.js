(function(vue) {
  "use strict";
  const _hoisted_1 = ["href", "title", "target"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Heading",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_RenderValue = vue.resolveComponent("RenderValue");
        return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.options.tag || "h1"), null, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "start"),
            _ctx.options.link && _ctx.options.link.link ? (vue.openBlock(), vue.createElementBlock("a", {
              key: 0,
              href: _ctx.options.link.link,
              title: _ctx.options.link.title,
              target: _ctx.options.link.target,
              onClick: _cache[0] || (_cache[0] = vue.withModifiers(
                (e) => {
                  e.preventDefault();
                },
                ["prevent"]
              ))
            }, [
              vue.createVNode(_component_RenderValue, {
                option: "content",
                "forced-root-node": false
              })
            ], 8, _hoisted_1)) : (vue.openBlock(), vue.createBlock(_component_RenderValue, {
              key: 1,
              option: "content",
              "forced-root-node": false
            })),
            vue.renderSlot(_ctx.$slots, "end")
          ]),
          _: 3
        });
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "zion_heading",
    component: _sfc_main
  });
})(zb.vue);
