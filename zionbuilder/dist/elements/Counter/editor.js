(function(vue) {
  "use strict";
  const _hoisted_1 = { class: "zb-el-counter__number" };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "counter",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const root = vue.ref(null);
      vue.onMounted(() => {
        runScript();
      });
      vue.watch(
        () => [props.options.start, props.options.end, props.options.duration].toString(),
        () => {
          runScript();
        }
      );
      function runScript() {
        if (root.value) {
          new window.zbScripts.counter(root.value);
        }
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "root",
          ref: root,
          class: "zb-el-counter"
        }, [
          vue.renderSlot(_ctx.$slots, "start"),
          _ctx.options.before ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
            key: 0,
            class: "zb-el-counter__before"
          }, _ctx.api.getAttributesForTag("before_text_styles"), {
            class: _ctx.api.getStyleClasses("before_text_styles")
          }), vue.toDisplayString(_ctx.options.before), 17)) : vue.createCommentVNode("", true),
          vue.createElementVNode("div", _hoisted_1, vue.toDisplayString(_ctx.options.start), 1),
          _ctx.options.after ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
            key: 1,
            class: "zb-el-counter__after"
          }, _ctx.api.getAttributesForTag("after_text_styles"), {
            class: _ctx.api.getStyleClasses("after_text_styles")
          }), vue.toDisplayString(_ctx.options.after), 17)) : vue.createCommentVNode("", true),
          vue.renderSlot(_ctx.$slots, "end")
        ], 512);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "counter",
    component: _sfc_main
  });
})(zb.vue);
