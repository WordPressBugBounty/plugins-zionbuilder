var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
(function(vue, i18n, store, pinia) {
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
  const _hoisted_1 = {
    key: 0,
    class: "notice notice-warning znpb-assetRegenerationNotice"
  };
  const _hoisted_2 = { key: 0 };
  const _hoisted_3 = { key: 1 };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "RegenerateAssetsApp",
    setup(__props) {
      const { Button, Loader } = window.zb.components;
      const showMessage = vue.ref(true);
      const AssetsStore = store.useAssetsStore();
      const EnvironmentStore = store.useEnvironmentStore();
      function regenerateAssets() {
        return __async(this, null, function* () {
          try {
            yield AssetsStore.regenerateCache();
            AssetsStore.finish();
            showMessage.value = false;
          } catch (error) {
            console.error(error);
          }
        });
      }
      return (_ctx, _cache) => {
        return showMessage.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createTextVNode(vue.toDisplayString(i18n__namespace.sprintf(
            i18n__namespace.__(
              /* translators: %s: Plugin name */
              "%s assets needs to be regenerated.",
              "zionbuilder"
            ),
            vue.unref(EnvironmentStore).plugin_name
          )) + " ", 1),
          vue.createVNode(vue.unref(Button), {
            class: vue.normalizeClass({ ["-hasLoading"]: vue.unref(AssetsStore).isLoading }),
            onClick: regenerateAssets
          }, {
            default: vue.withCtx(() => [
              vue.unref(AssetsStore).isLoading ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.createVNode(vue.unref(Loader), { size: 13 }),
                vue.unref(AssetsStore).filesCount > 0 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString(vue.unref(AssetsStore).currentIndex) + "/" + vue.toDisplayString(vue.unref(AssetsStore).filesCount), 1)) : vue.createCommentVNode("", true)
              ], 64)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, vue.toDisplayString(i18n__namespace.__("Regenerate Files", "zionbuilder")), 1))
            ]),
            _: 1
          }, 8, ["class"])
        ])) : vue.createCommentVNode("", true);
      };
    }
  });
  const RegenerateAssetsApp_vue_vue_type_style_index_0_lang = "";
  const index = "";
  const appInstance = vue.createApp(_sfc_main);
  appInstance.use(pinia.createPinia());
  appInstance.mount("#znpb-regenerateAssetsNotice");
})(zb.vue, wp.i18n, zb.store, zb.pinia);
