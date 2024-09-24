(function(vue) {
  "use strict";
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "column",
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
      const extraAttributes = vue.computed(() => {
        return window.zb.utils.getLinkAttributes(props.options.link);
      });
      const topMask = vue.computed(() => {
        var _a;
        return (_a = props.options.shapes) == null ? void 0 : _a.top;
      });
      const bottomMask = vue.computed(() => {
        var _a;
        return (_a = props.options.shapes) == null ? void 0 : _a.bottom;
      });
      return (_ctx, _cache) => {
        const _component_SvgMask = vue.resolveComponent("SvgMask");
        const _component_SortableContent = vue.resolveComponent("SortableContent");
        return vue.openBlock(), vue.createBlock(_component_SortableContent, vue.mergeProps({
          class: "zb-column",
          element: _ctx.element,
          tag: htmlTag.value
        }, extraAttributes.value), {
          start: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "start"),
            topMask.value !== void 0 && topMask.value.shape ? (vue.openBlock(), vue.createBlock(_component_SvgMask, {
              key: 0,
              "shape-path": topMask.value["shape"],
              color: topMask.value["color"],
              flip: topMask.value["flip"],
              position: "top"
            }, null, 8, ["shape-path", "color", "flip"])) : vue.createCommentVNode("", true),
            bottomMask.value !== void 0 && bottomMask.value.shape ? (vue.openBlock(), vue.createBlock(_component_SvgMask, {
              key: 1,
              "shape-path": bottomMask.value["shape"],
              color: bottomMask.value["color"],
              flip: bottomMask.value["flip"],
              position: "bottom"
            }, null, 8, ["shape-path", "color", "flip"])) : vue.createCommentVNode("", true)
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
    elementType: "zion_column",
    component: _sfc_main
  });
})(zb.vue);
