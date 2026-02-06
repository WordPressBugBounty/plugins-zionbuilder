(function(vue) {
  "use strict";
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Link",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const extraAttributes = vue.computed(() => window.zb.utils.getLinkAttributes(props.options.link));
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "a",
          vue.normalizeProps(vue.guardReactiveProps(extraAttributes.value)),
          [
            vue.renderSlot(_ctx.$slots, "start"),
            vue.createTextVNode(
              " " + vue.toDisplayString(__props.options.content) + " ",
              1
              /* TEXT */
            ),
            vue.renderSlot(_ctx.$slots, "end")
          ],
          16
          /* FULL_PROPS */
        );
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "zion_link",
    component: _sfc_main
  });
})(zb.vue);
