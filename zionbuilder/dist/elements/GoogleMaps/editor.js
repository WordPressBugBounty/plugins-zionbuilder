(function(vue) {
  "use strict";
  const _hoisted_1 = ["src"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "googleMaps",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const location = vue.computed(() => {
        return encodeURIComponent(props.options.location || "Chicago");
      });
      const zoom = vue.computed(() => {
        return props.options.zoom || 15;
      });
      const mapType = vue.computed(() => {
        return props.options.map_type === "terrain" ? "k" : "";
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.renderSlot(_ctx.$slots, "start"),
          vue.createElementVNode("iframe", {
            src: `https://www.google.com/maps?api=1&q=${location.value}&z=${zoom.value}&output=embed&t=${mapType.value}`,
            frameborder: "0",
            style: { "border": "0", "margin-bottom": "0" },
            allowfullscreen: "true"
          }, null, 8, _hoisted_1),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "google_maps",
    component: _sfc_main
  });
})(zb.vue);
