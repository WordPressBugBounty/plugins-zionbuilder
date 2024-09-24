(function(vue) {
  "use strict";
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "TabLink",
    props: {
      title: {},
      active: { type: Boolean }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("li", {
          class: vue.normalizeClass(["zb-el-tabs-nav-title", { "zb-el-tabs-nav--active": _ctx.active }])
        }, vue.toDisplayString(_ctx.title), 3);
      };
    }
  });
  const _hoisted_1$1 = { class: "zb-el-tabs-nav" };
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "Tabs",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const activeTab = vue.ref(null);
      if (props.element.content.length === 0 && props.options.tabs) {
        props.element.addChildren(props.options.tabs);
      }
      const children = vue.computed(() => {
        return props.element.content.map((childUID) => {
          const contentStore = window.zb.editor.useContentStore();
          return contentStore.getElement(childUID);
        });
      });
      const tabs = vue.computed(() => {
        return props.element.content.map((childUID) => {
          const contentStore = window.zb.editor.useContentStore();
          const element = contentStore.getElement(childUID);
          return {
            title: element.options.title,
            uid: element.uid
          };
        });
      });
      vue.provide("TabsElement", {
        changeTab: (uid) => {
          activeTab.value = uid;
        }
      });
      return (_ctx, _cache) => {
        const _component_Element = vue.resolveComponent("Element");
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.renderSlot(_ctx.$slots, "start"),
          vue.createElementVNode("ul", _hoisted_1$1, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(tabs.value, (tab, i) => {
              return vue.openBlock(), vue.createBlock(_sfc_main$2, vue.mergeProps({
                key: tab.uid,
                title: tab.title,
                active: activeTab.value ? tab.uid === activeTab.value : i === 0
              }, _ctx.api.getAttributesForTag("inner_content_styles_title"), {
                class: _ctx.api.getStyleClasses("inner_content_styles_title"),
                onClick: vue.withModifiers(($event) => activeTab.value = tab.uid, ["prevent", "stop"])
              }), null, 16, ["title", "active", "class", "onClick"]);
            }), 128))
          ]),
          vue.createElementVNode("div", vue.mergeProps({ class: "zb-el-tabs-content" }, _ctx.api.getAttributesForTag("inner_content_styles_content"), {
            class: _ctx.api.getStyleClasses("inner_content_styles_content")
          }), [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(children.value, (childElement, i) => {
              return vue.openBlock(), vue.createBlock(_component_Element, {
                key: childElement.uid,
                element: childElement,
                class: vue.normalizeClass({ "zb-el-tabs-nav--active": activeTab.value ? childElement.uid === activeTab.value : i === 0 })
              }, null, 8, ["element", "class"]);
            }), 128))
          ], 16),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  const _hoisted_1 = ["innerHTML"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "TabsItem",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.renderSlot(_ctx.$slots, "start"),
          vue.createElementVNode("div", {
            innerHTML: _ctx.options.content
          }, null, 8, _hoisted_1),
          vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "tabs_item",
    component: _sfc_main
  });
  window.zb.editor.registerElementComponent({
    elementType: "tabs",
    component: _sfc_main$1
  });
})(zb.vue);
