(function(vue) {
  "use strict";
  const _hoisted_1 = {
    key: 0,
    class: "zb-el-alert__closeIcon"
  };
  const _hoisted_2 = ["innerHTML"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Alert",
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
          __props.options.show_dismiss ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1)) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" eslint-disable-next-line vue/no-v-html "),
          __props.options.title ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 1,
            class: "zb-el-alert__title",
            innerHTML: __props.options.title
          }, null, 8, _hoisted_2)) : vue.createCommentVNode("v-if", true),
          __props.options.description ? (vue.openBlock(), vue.createBlock(_component_RenderValue, {
            key: 2,
            "html-tag": "div",
            option: "description",
            class: "zb-el-alert__description"
          })) : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "alert",
    component: _sfc_main
  });
})(zb.vue);
