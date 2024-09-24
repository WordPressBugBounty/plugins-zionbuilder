(function(vue) {
  "use strict";
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Container",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const htmlTag = vue.computed(() => {
        if (props.options.link && props.options.link.link) {
          return "a";
        }
        return props.options.tag && /^[a-z0-9]+$/i.test(props.options.tag) ? props.options.tag : "div";
      });
      const extraAttributes = vue.computed(() => window.zb.utils.getLinkAttributes(props.options.link));
      return (_ctx, _cache) => {
        const _component_SortableContent = vue.resolveComponent("SortableContent");
        return vue.openBlock(), vue.createBlock(_component_SortableContent, vue.mergeProps({
          element: _ctx.element,
          tag: htmlTag.value
        }, extraAttributes.value), {
          start: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "start")
          ]),
          end: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "end")
          ]),
          _: 3
        }, 16, ["element", "tag"]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "container",
    component: _sfc_main
  });
})(zb.vue);
