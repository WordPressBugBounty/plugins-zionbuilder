var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
(function(vue) {
  "use strict";
  const __default__ = {
    name: "ZionSection"
  };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
    props: {
      options: {},
      api: {},
      element: {}
    },
    setup(__props) {
      const props = __props;
      const shapes = vue.computed(() => {
        var _a;
        return ((_a = props.options) == null ? void 0 : _a.shapes) || {};
      });
      const topMask = vue.computed(() => shapes.value.top);
      const bottomMask = vue.computed(() => shapes.value.bottom);
      const htmlTag = vue.computed(() => {
        var _a;
        return ((_a = props.options) == null ? void 0 : _a.tag) || "section";
      });
      return (_ctx, _cache) => {
        const _component_SvgMask = vue.resolveComponent("SvgMask");
        const _component_SortableContent = vue.resolveComponent("SortableContent");
        return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(htmlTag.value), { class: "zb-section" }, {
          default: vue.withCtx(() => [
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
            }, null, 8, ["shape-path", "color", "flip"])) : vue.createCommentVNode("", true),
            vue.createVNode(_component_SortableContent, vue.mergeProps(_ctx.api.getAttributesForTag("inner_content_styles"), {
              element: _ctx.element,
              class: ["zb-section__innerWrapper", _ctx.api.getStyleClasses("inner_content_styles")]
            }), null, 16, ["element", "class"]),
            vue.renderSlot(_ctx.$slots, "end")
          ]),
          _: 3
        });
      };
    }
  }));
  window.zb.editor.registerElementComponent({
    elementType: "zion_section",
    component: _sfc_main
  });
})(zb.vue);
