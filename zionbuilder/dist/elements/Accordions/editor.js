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
  const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("span", { class: "zb-el-accordions-accordionIcon" }, null, -1);
  const _hoisted_2 = ["innerHTML"];
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "accordionItem",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const renderedContent = vue.computed(() => {
        return props.options.content ? props.options.content : "accordion content";
      });
      const activeByDefault = vue.computed(() => {
        return props.options.active_by_default ? props.options.active_by_default : false;
      });
      const accordionApi = vue.inject("accordionsApi", null);
      const titleTag = vue.computed(() => {
        const parentAccordionTitle = accordionApi ? accordionApi.options.value.title_tag : "div";
        return props.options.title_tag || parentAccordionTitle || "div";
      });
      return (_ctx, _cache) => {
        return vue.unref(accordionApi) ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(["zb-el-accordions-accordionWrapper", { "zb-el-accordions--active": activeByDefault.value }])
        }, [
          vue.renderSlot(_ctx.$slots, "start"),
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(titleTag.value), vue.mergeProps({
            class: ["zb-el-accordions-accordionTitle", vue.unref(accordionApi).getStyleClasses("inner_content_styles_title")]
          }, vue.unref(accordionApi).getAttributesForTag("inner_content_styles_title")), {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(_ctx.options.title) + " ", 1),
              _hoisted_1
            ]),
            _: 1
          }, 16, ["class"])),
          vue.createElementVNode("div", vue.mergeProps({
            class: ["zb-el-accordions-accordionContent", vue.unref(accordionApi).getStyleClasses("inner_content_styles_content")]
          }, vue.unref(accordionApi).getAttributesForTag("inner_content_styles_content")), [
            vue.createElementVNode("div", {
              class: "zb-el-accordions-accordionContent__inner",
              innerHTML: renderedContent.value
            }, null, 8, _hoisted_2)
          ], 16),
          vue.renderSlot(_ctx.$slots, "end")
        ], 2)) : vue.createCommentVNode("", true);
      };
    }
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Accordions",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      if (props.element.content.length === 0 && props.options.items) {
        props.element.addChildren(props.options.items);
      }
      const computedOptions = vue.computed(() => props.options);
      vue.provide("accordionsApi", __spreadProps(__spreadValues({}, props.api), {
        options: computedOptions
      }));
      return (_ctx, _cache) => {
        const _component_SortableContent = vue.resolveComponent("SortableContent");
        return vue.openBlock(), vue.createBlock(_component_SortableContent, { element: _ctx.element }, {
          start: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "start")
          ]),
          end: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "end")
          ]),
          _: 3
        }, 8, ["element"]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "accordions",
    component: _sfc_main
  });
  window.zb.editor.registerElementComponent({
    elementType: "accordion_item",
    component: _sfc_main$1
  });
})(zb.vue);
