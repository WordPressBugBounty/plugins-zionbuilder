(function(vue) {
  "use strict";
  const _hoisted_1 = { class: "zb-el-progressBars__barTrack" };
  const _hoisted_2 = ["data-width"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "ProgressBars",
    props: {
      options: {},
      element: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const root = vue.ref(null);
      const bars = vue.computed(() => {
        return props.options.bars ? props.options.bars : [];
      });
      const barsWidth = vue.computed(() => {
        const barsWidth2 = (props.options.bars || []).map((item) => {
          return item.fill_percentage;
        });
        return barsWidth2.join("");
      });
      const resetAnimation = vue.ref(false);
      vue.watch(barsWidth, () => {
        doResetAnimation();
      });
      vue.watch(
        () => props.options.transition_delay,
        () => {
          doResetAnimation();
        }
      );
      vue.onMounted(() => {
        window.requestAnimationFrame(() => {
          runScript();
        });
      });
      function doResetAnimation() {
        resetAnimation.value = true;
        runScript().then(() => {
          resetAnimation.value = false;
        });
      }
      function runScript() {
        return new Promise((resolve) => {
          window.requestAnimationFrame(() => {
            if (root.value) {
              new window.zbScripts.progressBars(root.value);
            }
            resolve(true);
          });
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "ul",
          {
            ref_key: "root",
            ref: root,
            class: vue.normalizeClass({ "znpb-progressBars--resetAnimation": resetAnimation.value })
          },
          [
            vue.renderSlot(_ctx.$slots, "start"),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(bars.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock(
                  "li",
                  vue.mergeProps({
                    key: index,
                    class: ["zb-el-progressBars__singleBar", [`zb-el-progressBars__bar--${index}`]]
                  }, { ref_for: true }, __props.api.getAttributesForTag("single-bar", {}, index)),
                  [
                    item.title ? (vue.openBlock(), vue.createElementBlock(
                      "h5",
                      vue.mergeProps({
                        key: 0,
                        class: ["zb-el-progressBars__barTitle", __props.api.getStyleClasses("title_styles")]
                      }, { ref_for: true }, __props.api.getAttributesForTag("title_styles")),
                      vue.toDisplayString(item.title),
                      17
                      /* TEXT, FULL_PROPS */
                    )) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode("span", _hoisted_1, [
                      vue.createElementVNode("span", {
                        class: "zb-el-progressBars__barProgress",
                        "data-width": item.fill_percentage !== void 0 ? item.fill_percentage : 50
                      }, null, 8, _hoisted_2)
                    ])
                  ],
                  16
                  /* FULL_PROPS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.renderSlot(_ctx.$slots, "end")
          ],
          2
          /* CLASS */
        );
      };
    }
  });
  window.zb.editor.registerElementComponent({
    elementType: "progress_bars",
    component: _sfc_main
  });
})(zb.vue);
