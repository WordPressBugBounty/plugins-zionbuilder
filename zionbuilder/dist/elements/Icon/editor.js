(function(vue) {
  "use strict";
  const _hoisted_1 = ["href", "target", "title", "data-znpbiconfam", "data-znpbicon"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Icon",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const hasLink = vue.computed(() => {
        return props.options.link && props.options.link.link && props.options.link.link !== "";
      });
      const iconConfig = vue.computed(() => {
        return props.options.icon || {
          family: "Font Awesome 5 Free Regular",
          name: "star",
          unicode: "uf005"
        };
      });
      const iconUnicode = vue.computed(() => {
        const json = `"\\${iconConfig.value.unicode}"`;
        return JSON.parse(json).trim();
      });
      return (_ctx, _cache) => {
        const _component_ElementIcon = vue.resolveComponent("ElementIcon");
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.renderSlot(_ctx.$slots, "start"),
          hasLink.value ? (vue.openBlock(), vue.createElementBlock("a", vue.mergeProps({
            key: 0,
            href: _ctx.options.link.link ? _ctx.options.link.link : null,
            target: _ctx.options.link.target ? _ctx.options.link.target : null,
            title: _ctx.options.link.title ? _ctx.options.link.title : null,
            class: "zb-el-icon-link zb-el-icon-icon",
            "data-znpbiconfam": iconConfig.value.family,
            "data-znpbicon": iconUnicode.value
          }, _ctx.api.getAttributesForTag("shape")), null, 16, _hoisted_1)) : (vue.openBlock(), vue.createBlock(_component_ElementIcon, vue.mergeProps({
            key: 1,
            class: "zb-el-icon-icon",
            "icon-config": iconConfig.value
          }, _ctx.api.getAttributesForTag("shape")), null, 16, ["icon-config"])),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "icon",
    component: _sfc_main
  });
})(zb.vue);
