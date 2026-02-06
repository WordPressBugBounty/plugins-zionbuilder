(function(vue, i18n) {
  "use strict";
  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      for (const k in e) {
        if (k !== "default") {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }
  const i18n__namespace = /* @__PURE__ */ _interopNamespaceDefault(i18n);
  const _hoisted_1 = { class: "zb-el-pricingBox-content" };
  const _hoisted_2 = { class: "zb-el-pricingBox-heading" };
  const _hoisted_3 = { class: "zb-el-pricingBox-description" };
  const _hoisted_4 = { class: "zb-el-pricingBox-plan-price" };
  const _hoisted_5 = { class: "zb-el-pricingBox-price" };
  const _hoisted_6 = { class: "zb-el-pricingBox-price-dot" };
  const _hoisted_7 = { class: "zb-el-pricingBox-price-float" };
  const _hoisted_8 = { class: "zb-el-pricingBox-period" };
  const _hoisted_9 = ["innerHTML"];
  const _hoisted_10 = ["href", "title", "target"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "PricingBox",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const pricingPrice = vue.computed(() => {
        return props.options.price ? props.options.price.split(".")[0] : null;
      });
      const priceFloat = vue.computed(() => {
        return props.options.price ? props.options.price.split(".")[1] : null;
      });
      return (_ctx, _cache) => {
        const _component_RenderValue = vue.resolveComponent("RenderValue");
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.renderSlot(_ctx.$slots, "start"),
          __props.options.plan_featured === "featured" ? (vue.openBlock(), vue.createElementBlock(
            "span",
            vue.mergeProps({
              key: 0,
              class: ["zb-el-pricingBox-featured", __props.api.getStyleClasses("featured_label_styles")]
            }, __props.api.getAttributesForTag("featured_label_styles")),
            vue.toDisplayString(i18n__namespace.__("featured", "zionbuilder")),
            17
            /* TEXT, FULL_PROPS */
          )) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("div", _hoisted_1, [
            vue.createElementVNode("div", _hoisted_2, [
              vue.createElementVNode(
                "h3",
                vue.mergeProps({
                  class: ["zb-el-pricingBox-title", __props.api.getStyleClasses("title_styles")]
                }, __props.api.getAttributesForTag("title_styles")),
                [
                  vue.createVNode(_component_RenderValue, { option: "plan_title" })
                ],
                16
                /* FULL_PROPS */
              ),
              vue.createElementVNode("p", _hoisted_3, [
                vue.createVNode(_component_RenderValue, { option: "plan_description" })
              ])
            ]),
            vue.createElementVNode("div", _hoisted_4, [
              vue.createElementVNode("span", _hoisted_5, [
                vue.createElementVNode(
                  "span",
                  vue.mergeProps({
                    class: ["zb-el-pricingBox-price-price", __props.api.getStyleClasses("price_styles")]
                  }, __props.api.getAttributesForTag("price_styles")),
                  [
                    vue.createTextVNode(
                      vue.toDisplayString(pricingPrice.value || "$999"),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "span",
                      _hoisted_6,
                      vue.toDisplayString(priceFloat.value ? "." : ""),
                      1
                      /* TEXT */
                    )
                  ],
                  16
                  /* FULL_PROPS */
                ),
                vue.createElementVNode(
                  "span",
                  _hoisted_7,
                  vue.toDisplayString(__props.options.price && __props.options.price.split(".").length > 1 ? priceFloat.value : null),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("span", _hoisted_8, [
                vue.createVNode(_component_RenderValue, { option: "period" })
              ])
            ]),
            __props.options.plan_details ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
              key: 0,
              class: ["zb-el-pricingBox-plan-features", __props.api.getStyleClasses("features_styles")]
            }, __props.api.getAttributesForTag("features_styles"), {
              innerHTML: __props.options.plan_details
            }), null, 16, _hoisted_9)) : vue.createCommentVNode("v-if", true),
            __props.options.button_link && __props.options.button_link.link ? (vue.openBlock(), vue.createElementBlock("a", vue.mergeProps({
              key: 1,
              href: __props.options.button_link.link,
              title: __props.options.button_link.title,
              target: __props.options.button_link.target
            }, __props.api.getAttributesForTag("button_styles"), {
              class: ["zb-el-pricingBox-action zb-el-button", __props.api.getStyleClasses("button_styles")]
            }), [
              vue.createVNode(_component_RenderValue, { option: "button_text" })
            ], 16, _hoisted_10)) : (vue.openBlock(), vue.createElementBlock(
              "div",
              vue.mergeProps({
                key: 2,
                class: ["zb-el-pricingBox-action zb-el-button", __props.api.getStyleClasses("button_styles")]
              }, __props.api.getAttributesForTag("button_styles")),
              [
                vue.createVNode(_component_RenderValue, { option: "button_text" })
              ],
              16
              /* FULL_PROPS */
            ))
          ]),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "pricing_box",
    component: _sfc_main
  });
})(zb.vue, wp.i18n);
