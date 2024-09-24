(function(vue) {
  "use strict";
  const _hoisted_1 = ["src"];
  const _hoisted_2 = { class: "zb-el-testimonial__user" };
  const _hoisted_3 = ["src"];
  const _hoisted_4 = { class: "zb-el-testimonial__userInfo" };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Testimonial",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const image = vue.computed(() => {
        return props.options && props.options.image ? props.options.image : null;
      });
      const getStar = vue.computed(() => {
        return {
          family: "Font Awesome 5 Free Solid",
          name: "star",
          unicode: "uf005"
        };
      });
      const getEmptyStar = vue.computed(() => {
        return {
          family: "Font Awesome 5 Free Regular",
          name: "star",
          unicode: "uf005"
        };
      });
      const stars = vue.computed(() => {
        return props.options.stars || 5;
      });
      return (_ctx, _cache) => {
        const _component_RenderValue = vue.resolveComponent("RenderValue");
        const _component_ElementIcon = vue.resolveComponent("ElementIcon");
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.renderSlot(_ctx.$slots, "start"),
          image.value && _ctx.options.position !== void 0 && _ctx.options.position === "top" ? (vue.openBlock(), vue.createElementBlock("img", vue.mergeProps({
            key: 0,
            class: ["zb-el-testimonial__userImage", _ctx.api.getStyleClasses("inner_content_styles_image")]
          }, _ctx.api.getAttributesForTag("inner_content_styles_image"), { src: image.value }), null, 16, _hoisted_1)) : vue.createCommentVNode("", true),
          vue.createVNode(_component_RenderValue, vue.mergeProps({
            option: "content",
            class: ["zb-el-testimonial-content", _ctx.api.getStyleClasses("inner_content_styles_misc")]
          }, _ctx.api.getAttributesForTag("inner_content_styles_misc")), null, 16, ["class"]),
          vue.createElementVNode("div", _hoisted_2, [
            image.value && _ctx.options.position !== void 0 && _ctx.options.position !== "top" ? (vue.openBlock(), vue.createElementBlock("img", vue.mergeProps({
              key: 0,
              class: ["zb-el-testimonial__userImage", _ctx.api.getStyleClasses("inner_content_styles_image")]
            }, _ctx.api.getAttributesForTag("inner_content_styles_image"), { src: image.value }), null, 16, _hoisted_3)) : vue.createCommentVNode("", true),
            vue.createElementVNode("div", _hoisted_4, [
              vue.createVNode(_component_RenderValue, vue.mergeProps({
                option: "name",
                class: [_ctx.api.getStyleClasses("inner_content_styles_user"), "zb-el-testimonial__userInfo-name"]
              }, _ctx.api.getAttributesForTag("inner_content_styles_user")), null, 16, ["class"]),
              vue.createVNode(_component_RenderValue, vue.mergeProps({
                option: "description",
                class: [_ctx.api.getStyleClasses("inner_content_styles_description"), "zb-el-testimonial__userInfo-description"]
              }, _ctx.api.getAttributesForTag("inner_content_styles_description")), null, 16, ["class"]),
              stars.value && stars.value !== "no_stars" ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
                key: 0,
                class: ["zb-el-testimonial__stars", _ctx.api.getStyleClasses("inner_content_styles_stars")]
              }, _ctx.api.getAttributesForTag("inner_content_styles_stars")), [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(stars.value, (star, index) => {
                  return vue.openBlock(), vue.createBlock(_component_ElementIcon, {
                    key: index + 10,
                    class: "zb-el-testimonial__stars--full",
                    "icon-config": getStar.value
                  }, null, 8, ["icon-config"]);
                }), 128)),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(5 - stars.value, (star) => {
                  return vue.openBlock(), vue.createBlock(_component_ElementIcon, {
                    key: star,
                    "icon-config": getEmptyStar.value
                  }, null, 8, ["icon-config"]);
                }), 128))
              ], 16)) : vue.createCommentVNode("", true)
            ])
          ]),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "testimonial",
    component: _sfc_main
  });
})(zb.vue);
