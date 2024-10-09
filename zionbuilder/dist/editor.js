var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
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
(function(Vue, i18n, utils, pinia, store, components) {
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
  const Vue__namespace = /* @__PURE__ */ _interopNamespaceDefault(Vue);
  const i18n__namespace = /* @__PURE__ */ _interopNamespaceDefault(i18n);
  const index = "";
  const _sfc_main$1E = /* @__PURE__ */ Vue.defineComponent({
    __name: "Label",
    props: {
      text: {},
      type: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("span", {
          class: Vue.normalizeClass(["znpb-label", { [`znpb-label--${_ctx.type}`]: _ctx.type }])
        }, Vue.toDisplayString(_ctx.text), 3);
      };
    }
  });
  const Label_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$1D = /* @__PURE__ */ Vue.defineComponent({
    __name: "AccordionMenu",
    props: {
      child_options: { default: () => ({}) },
      title: {},
      modelValue: { default: () => ({}) },
      homeButtonText: { default: "" },
      add_to_parent_breadcrumbs: { type: Boolean, default: false },
      label: { default: () => ({
        text: "",
        type: ""
      }) }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const slots = Vue.useSlots();
      const root2 = Vue.ref(null);
      const parentAccordion = Vue.inject("parentAccordion", null);
      const showChanges = Vue.inject("showChanges", true);
      const showBreadcrumbs = Vue.ref(parentAccordion === null);
      const expanded = Vue.ref(false);
      const optionsValue = Vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      let breadCrumbConfig = null;
      function onAccordionExpanded() {
        if (parentAccordion !== null) {
          breadCrumbConfig = {
            title: props.title,
            previousCallback: root2.value.closeAccordion
          };
          parentAccordion.addBreadcrumb(breadCrumbConfig);
        }
        expanded.value = true;
      }
      function onAccordionCollapsed() {
        if (parentAccordion !== null && parentAccordion) {
          parentAccordion.removeBreadcrumb(breadCrumbConfig);
        }
        expanded.value = false;
      }
      Vue.onMounted(() => {
      });
      Vue.onBeforeUnmount(() => {
        if (breadCrumbConfig) {
          parentAccordion.removeBreadcrumb(breadCrumbConfig);
        }
      });
      const hasHeaderSlot = Vue.computed(() => !!slots.header);
      const hasTitleSlot = Vue.computed(() => !!slots.title);
      const InputWrapper = Vue.inject("inputWrapper");
      const hasChanges = Vue.computed(() => {
        return InputWrapper.hasChanges.value;
      });
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_ChangesBullet = Vue.resolveComponent("ChangesBullet");
        const _component_OptionsForm = Vue.resolveComponent("OptionsForm");
        const _component_HorizontalAccordion = Vue.resolveComponent("HorizontalAccordion");
        return Vue.openBlock(), Vue.createBlock(_component_HorizontalAccordion, {
          ref_key: "root",
          ref: root2,
          class: "znpb-option-layout__menu",
          title: _ctx.title,
          icon: _ctx.$attrs.icon,
          "show-back-button": true,
          "show-home-button": true,
          "home-button-text": _ctx.homeButtonText || "Options",
          "has-breadcrumbs": showBreadcrumbs.value,
          onExpand: onAccordionExpanded,
          onCollapse: onAccordionCollapsed
        }, Vue.createSlots({
          actions: Vue.withCtx(() => [
            Vue.renderSlot(_ctx.$slots, "actions")
          ]),
          default: Vue.withCtx(() => [
            expanded.value ? (Vue.openBlock(), Vue.createBlock(_component_OptionsForm, {
              key: 0,
              modelValue: optionsValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => optionsValue.value = $event),
              class: "znpb-option-layout__menu-options-form",
              schema: _ctx.child_options,
              "show-changes": Vue.unref(showChanges)
            }, null, 8, ["modelValue", "schema", "show-changes"])) : Vue.createCommentVNode("", true)
          ]),
          _: 2
        }, [
          hasHeaderSlot.value ? {
            name: "header",
            fn: Vue.withCtx(() => [
              Vue.renderSlot(_ctx.$slots, "header")
            ]),
            key: "0"
          } : void 0,
          hasTitleSlot.value ? {
            name: "title",
            fn: Vue.withCtx(() => [
              Vue.renderSlot(_ctx.$slots, "title")
            ]),
            key: "1"
          } : {
            name: "title",
            fn: Vue.withCtx(() => [
              _ctx.$attrs.icon ? (Vue.openBlock(), Vue.createBlock(_component_Icon, {
                key: 0,
                icon: _ctx.$attrs.icon
              }, null, 8, ["icon"])) : Vue.createCommentVNode("", true),
              Vue.createElementVNode("span", { innerHTML: _ctx.title }, null, 8, ["innerHTML"]),
              _ctx.label.text ? (Vue.openBlock(), Vue.createBlock(_sfc_main$1E, {
                key: 1,
                text: _ctx.label.text,
                type: _ctx.label.type
              }, null, 8, ["text", "type"])) : Vue.createCommentVNode("", true),
              Vue.unref(showChanges) && hasChanges.value ? (Vue.openBlock(), Vue.createBlock(_component_ChangesBullet, {
                key: 2,
                onRemoveStyles: _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", null))
              })) : Vue.createCommentVNode("", true)
            ]),
            key: "2"
          }
        ]), 1032, ["title", "icon", "home-button-text", "has-breadcrumbs"]);
      };
    }
  });
  const AccordionMenu_vue_vue_type_style_index_0_lang = "";
  const AccordionMenu$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main$1D
  }, Symbol.toStringTag, { value: "Module" }));
  const AccordionMenu = {
    id: "accordion_menu",
    component: _sfc_main$1D,
    config: {
      // Can be one of the following
      barebone: true
    }
  };
  const _sfc_main$1C = /* @__PURE__ */ Vue.defineComponent({
    __name: "PseudoGroup",
    props: {
      modelValue: { default: () => {
        return {};
      } },
      child_options: {},
      save_to_id: { type: Boolean, default: false }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const { usePseudoSelectors: usePseudoSelectors2 } = window.zb.composables;
      const { activePseudoSelector } = usePseudoSelectors2();
      const valueModel = Vue.computed({
        get() {
          return (props.modelValue || {})[activePseudoSelector.value.id] || {};
        },
        set(newValue) {
          const clonedValue = __spreadValues({}, props.modelValue);
          if (newValue === null && typeof clonedValue[activePseudoSelector.value.id]) {
            delete clonedValue[activePseudoSelector.value.id];
          } else {
            clonedValue[activePseudoSelector.value.id] = newValue;
          }
          emit("update:modelValue", clonedValue);
        }
      });
      return (_ctx, _cache) => {
        const _component_OptionsForm = Vue.resolveComponent("OptionsForm");
        return Vue.openBlock(), Vue.createBlock(_component_OptionsForm, {
          modelValue: valueModel.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => valueModel.value = $event),
          class: "znpb-option--pseudo-group",
          schema: _ctx.child_options
        }, null, 8, ["modelValue", "schema"]);
      };
    }
  });
  const PseudoGroup_vue_vue_type_style_index_0_lang = "";
  const PseudoGroup = {
    id: "pseudo_group",
    component: _sfc_main$1C,
    config: {
      // Don't add input wrappers
      barebone: true
    }
  };
  const _hoisted_1$1c = { class: "znpb-style-background-color" };
  const _sfc_main$1B = /* @__PURE__ */ Vue.defineComponent({
    __name: "BackgroundColor",
    props: {
      modelValue: { default: "" },
      placeholder: { default: null }
    },
    emits: ["update:modelValue", "open", "close"],
    setup(__props, { emit }) {
      const props = __props;
      Vue.ref(false);
      Vue.ref(false);
      Vue.ref(false);
      const colorModel = Vue.computed({
        get() {
          let computedValue = null;
          if (props.modelValue !== void 0) {
            if (typeof props.modelValue === "string") {
              computedValue = props.modelValue;
            } else
              computedValue = props.modelValue.value;
          }
          return computedValue !== null ? computedValue : props.placeholder;
        },
        set(newColor) {
          emit("update:modelValue", newColor);
        }
      });
      const getColorStyle = Vue.computed(() => {
        return {
          "background-color": colorModel.value || props.placeholder
        };
      });
      const deleteColor = () => {
        emit("update:modelValue", null);
      };
      return (_ctx, _cache) => {
        const _component_EmptyList = Vue.resolveComponent("EmptyList");
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_ActionsOverlay = Vue.resolveComponent("ActionsOverlay");
        const _component_Color = Vue.resolveComponent("Color");
        return Vue.openBlock(), Vue.createBlock(_component_Color, {
          modelValue: colorModel.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => colorModel.value = $event),
          onOpen: _cache[1] || (_cache[1] = ($event) => emit("open")),
          onClose: _cache[2] || (_cache[2] = ($event) => emit("close"))
        }, {
          trigger: Vue.withCtx(() => [
            Vue.createElementVNode("div", _hoisted_1$1c, [
              !_ctx.modelValue && !_ctx.placeholder ? (Vue.openBlock(), Vue.createBlock(_component_EmptyList, {
                key: 0,
                class: "znpb-input-background-image__empty",
                "no-margin": true
              }, {
                default: Vue.withCtx(() => [
                  Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("Select background color", "zionbuilder")), 1)
                ]),
                _: 1
              })) : (Vue.openBlock(), Vue.createBlock(_component_ActionsOverlay, { key: 1 }, Vue.createSlots({
                default: Vue.withCtx(() => [
                  Vue.createElementVNode("div", {
                    class: "znpb-style-background-color__holder",
                    style: Vue.normalizeStyle(getColorStyle.value)
                  }, null, 4)
                ]),
                _: 2
              }, [
                _ctx.modelValue ? {
                  name: "actions",
                  fn: Vue.withCtx(() => [
                    Vue.createElementVNode("div", null, [
                      Vue.createVNode(_component_Icon, {
                        rounded: true,
                        icon: "delete",
                        "bg-size": 30,
                        onClick: Vue.withModifiers(deleteColor, ["stop"])
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  key: "0"
                } : void 0
              ]), 1024))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]);
      };
    }
  });
  const BackgroundColor_vue_vue_type_style_index_0_lang = "";
  const BackgroundColor = {
    id: "background_color",
    component: _sfc_main$1B
  };
  const _sfc_main$1A = /* @__PURE__ */ Vue.defineComponent({
    __name: "Background",
    props: {
      modelValue: { default: () => ({}) },
      placeholder: { default: () => ({}) }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const { useResponsiveDevices: useResponsiveDevices2, usePseudoSelectors: usePseudoSelectors2 } = window.zb.composables;
      const bgGradientSchema = {
        id: "background-gradient",
        type: "background_gradient"
      };
      const { activeResponsiveDeviceInfo: activeResponsiveDeviceInfo2 } = useResponsiveDevices2();
      const { activePseudoSelector } = usePseudoSelectors2();
      const valueModel = Vue.computed({
        get() {
          return props.modelValue || {};
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      const canShowBackground = Vue.computed(
        () => activeResponsiveDeviceInfo2.value.id === "default" && activePseudoSelector.value.id === "default"
      );
      Vue.computed(() => {
        return {
          id: "background-color",
          type: "background_color",
          placeholder: props.placeholder ? props.placeholder["background-color"] : null
        };
      });
      function onDeleteOption(optionId) {
        const newValues2 = __spreadValues({}, props.modelValue);
        delete newValues2[optionId];
        valueModel.value = newValues2;
      }
      function onOptionUpdate(optionId, newValue) {
        const clonedValue = __spreadValues({}, props.modelValue);
        if (optionId) {
          if (newValue === null) {
            delete clonedValue[optionId];
          } else {
            clonedValue[optionId] = newValue;
          }
          valueModel.value = clonedValue;
        } else {
          if (newValue === null) {
            emit("update:modelValue", null);
          } else {
            valueModel.value = newValue;
          }
        }
      }
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_Tab = Vue.resolveComponent("Tab");
        const _component_OptionWrapper = Vue.resolveComponent("OptionWrapper");
        const _component_InputBackgroundImage = Vue.resolveComponent("InputBackgroundImage");
        const _component_InputBackgroundVideo = Vue.resolveComponent("InputBackgroundVideo");
        const _component_Tabs = Vue.resolveComponent("Tabs");
        return Vue.openBlock(), Vue.createBlock(_component_Tabs, {
          "tab-style": "group",
          class: "znpb-background-option-tabs",
          "title-position": "center"
        }, {
          default: Vue.withCtx(() => [
            Vue.createVNode(_component_Tab, { name: "background-color" }, {
              title: Vue.withCtx(() => [
                Vue.createVNode(_component_Icon, { icon: "drop" })
              ]),
              default: Vue.withCtx(() => [
                Vue.createVNode(Vue.unref(_sfc_main$1B), {
                  modelValue: valueModel.value["background-color"],
                  "delete-value": onDeleteOption,
                  placeholder: _ctx.placeholder ? _ctx.placeholder["background-color"] : null,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => onOptionUpdate("background-color", $event))
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }),
            Vue.createVNode(_component_Tab, {
              name: "background-gradient",
              "tooltip-title": "Background gradient"
            }, {
              title: Vue.withCtx(() => [
                Vue.createVNode(_component_Icon, { icon: "gradient" })
              ]),
              default: Vue.withCtx(() => [
                Vue.createVNode(_component_OptionWrapper, {
                  schema: bgGradientSchema,
                  "option-id": bgGradientSchema.id,
                  modelValue: valueModel.value["background-gradient"],
                  "delete-value": onDeleteOption,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => onOptionUpdate(...$event))
                }, null, 8, ["option-id", "modelValue"])
              ]),
              _: 1
            }),
            Vue.createVNode(_component_Tab, {
              name: "background-image",
              "tooltip-title": "Background image"
            }, {
              title: Vue.withCtx(() => [
                Vue.createVNode(_component_Icon, { icon: "picture" })
              ]),
              default: Vue.withCtx(() => [
                Vue.createVNode(_component_InputBackgroundImage, {
                  class: "znpb-input__background-image",
                  modelValue: valueModel.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => onOptionUpdate(false, $event))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            canShowBackground.value ? (Vue.openBlock(), Vue.createBlock(_component_Tab, {
              key: 0,
              name: "background-video",
              "tooltip-title": "Background video"
            }, {
              title: Vue.withCtx(() => [
                Vue.createVNode(_component_Icon, { icon: "video" })
              ]),
              default: Vue.withCtx(() => [
                Vue.createVNode(_component_InputBackgroundVideo, {
                  class: "znpb-input__background-video",
                  modelValue: valueModel.value["background-video"],
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => onOptionUpdate("background-video", $event))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })) : Vue.createCommentVNode("", true)
          ]),
          _: 1
        });
      };
    }
  });
  const Background_vue_vue_type_style_index_0_lang = "";
  const Background = {
    id: "background",
    component: _sfc_main$1A
  };
  const _hoisted_1$1b = { class: "znpb-style-background-gradient" };
  const _sfc_main$1z = /* @__PURE__ */ Vue.defineComponent({
    __name: "BackgroundGradient",
    props: {
      modelValue: { default: null },
      hasLibrary: { type: Boolean, default: true }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const showLibrary = Vue.ref(false);
      const gradientModel = Vue.computed({
        get() {
          return props.modelValue || null;
        },
        set(newGradient) {
          emit("update:modelValue", newGradient);
        }
      });
      function addNewGradient() {
        gradientModel.value = utils.getDefaultGradient();
      }
      return (_ctx, _cache) => {
        const _component_EmptyList = Vue.resolveComponent("EmptyList");
        const _component_GradientGenerator = Vue.resolveComponent("GradientGenerator");
        const _component_GradientLibrary = Vue.resolveComponent("GradientLibrary");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$1b, [
          !_ctx.modelValue && !showLibrary.value ? (Vue.openBlock(), Vue.createBlock(_component_EmptyList, {
            key: 0,
            class: "znpb-style-background-gradient__empty",
            "no-margin": true
          }, {
            default: Vue.withCtx(() => [
              Vue.createElementVNode("a", { onClick: addNewGradient }, Vue.toDisplayString(i18n__namespace.__("Add new background gradient", "zionbuilder")), 1),
              _ctx.hasLibrary ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, [
                Vue.createElementVNode("div", null, Vue.toDisplayString(i18n__namespace.__("or", "zionbuilder")), 1),
                Vue.createElementVNode("a", {
                  onClick: _cache[0] || (_cache[0] = ($event) => showLibrary.value = true)
                }, Vue.toDisplayString(i18n__namespace.__("Select from library", "zionbuilder")), 1)
              ], 64)) : Vue.createCommentVNode("", true)
            ]),
            _: 1
          })) : Vue.createCommentVNode("", true),
          _ctx.modelValue ? (Vue.openBlock(), Vue.createBlock(_component_GradientGenerator, {
            key: 1,
            ref: "gradientGenerator",
            modelValue: gradientModel.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => gradientModel.value = $event)
          }, null, 8, ["modelValue"])) : Vue.createCommentVNode("", true),
          showLibrary.value ? (Vue.openBlock(), Vue.createBlock(_component_GradientLibrary, {
            key: 2,
            onCloseLibrary: _cache[2] || (_cache[2] = ($event) => showLibrary.value = false),
            onActivateGradient: _cache[3] || (_cache[3] = ($event) => (gradientModel.value = $event, showLibrary.value = false))
          })) : Vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const BackgroundGradient_vue_vue_type_style_index_0_lang = "";
  const BackgroundGradient = {
    id: "background_gradient",
    component: _sfc_main$1z
  };
  const _sfc_main$1y = /* @__PURE__ */ Vue.defineComponent({
    __name: "Typography",
    props: {
      modelValue: { default: () => {
        return {};
      } },
      placeholder: { default: null }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const { useOptionsSchemas: useOptionsSchemas2 } = window.zb.composables;
      const valueModel = Vue.computed({
        get() {
          return props.modelValue || {};
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      const computedSchema = Vue.computed(() => {
        const { getSchema } = useOptionsSchemas2();
        const schema = getSchema("typography");
        if (props.placeholder) {
          const newSchema = {};
          Object.keys(schema).forEach((optionID) => {
            const childSchema = schema[optionID];
            if (props.placeholder && typeof props.placeholder[optionID] !== "undefined") {
              childSchema.placeholder = props.placeholder[optionID];
            }
            newSchema[optionID] = childSchema;
          });
          return newSchema;
        } else {
          return schema;
        }
      });
      return (_ctx, _cache) => {
        const _component_OptionsForm = Vue.resolveComponent("OptionsForm");
        return Vue.openBlock(), Vue.createBlock(_component_OptionsForm, {
          modelValue: valueModel.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => valueModel.value = $event),
          schema: computedSchema.value,
          class: "znpb-option__typography-wrapper"
        }, null, 8, ["modelValue", "schema"]);
      };
    }
  });
  const Typography_vue_vue_type_style_index_0_lang = "";
  const Typography = {
    id: "typography",
    component: _sfc_main$1y
  };
  const _sfc_main$1x = /* @__PURE__ */ Vue.defineComponent({
    __name: "Group",
    props: {
      modelValue: { default: () => ({}) },
      child_options: { default: () => ({}) },
      optionsLayout: { default: "" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const valueModel = Vue.computed({
        get() {
          return props.modelValue || {};
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      return (_ctx, _cache) => {
        const _component_OptionsForm = Vue.resolveComponent("OptionsForm");
        return _ctx.child_options ? (Vue.openBlock(), Vue.createBlock(_component_OptionsForm, {
          key: 0,
          modelValue: valueModel.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => valueModel.value = $event),
          class: Vue.normalizeClass(["znpb-option__type-option-group", {
            [`znpb-option__type-option-group-layout--${_ctx.optionsLayout}`]: _ctx.optionsLayout.length
          }]),
          schema: _ctx.child_options
        }, null, 8, ["modelValue", "class", "schema"])) : Vue.createCommentVNode("", true);
      };
    }
  });
  const Group_vue_vue_type_style_index_0_lang = "";
  const Group = {
    id: "group",
    component: _sfc_main$1x
  };
  const _hoisted_1$1a = { class: "znpb-panel-accordion" };
  const _hoisted_2$O = { class: "znpb-panel-accordion__header-title" };
  const _hoisted_3$A = ["innerHTML"];
  const _sfc_main$1w = /* @__PURE__ */ Vue.defineComponent({
    __name: "PanelAccordion",
    props: {
      modelValue: { default: () => ({}) },
      child_options: {},
      title: { default: "" },
      collapsed: { type: Boolean, default: false },
      hasChanges: { type: Boolean, default: false }
    },
    emits: ["update:modelValue", "discard-changes"],
    setup(__props, { emit }) {
      const props = __props;
      const expanded = Vue.ref(!props.collapsed);
      const valueModel = Vue.computed({
        get() {
          return props.modelValue || {};
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      function toggle() {
        expanded.value = !expanded.value;
      }
      return (_ctx, _cache) => {
        const _component_ChangesBullet = Vue.resolveComponent("ChangesBullet");
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_OptionsForm = Vue.resolveComponent("OptionsForm");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$1a, [
          Vue.createElementVNode("div", {
            class: "znpb-panel-accordion__header",
            onClick: toggle
          }, [
            Vue.createElementVNode("div", _hoisted_2$O, [
              Vue.createElementVNode("span", { innerHTML: _ctx.title }, null, 8, _hoisted_3$A),
              _ctx.hasChanges ? (Vue.openBlock(), Vue.createBlock(_component_ChangesBullet, {
                key: 0,
                content: i18n__namespace.__("Discard changes", "zionbuilder"),
                onRemoveStyles: _cache[0] || (_cache[0] = ($event) => emit("discard-changes"))
              }, null, 8, ["content"])) : Vue.createCommentVNode("", true)
            ]),
            Vue.createVNode(_component_Icon, {
              class: "znpb-option-group-selector__clone-icon",
              icon: expanded.value ? "minus" : "plus"
            }, null, 8, ["icon"])
          ]),
          _ctx.child_options && expanded.value ? (Vue.openBlock(), Vue.createBlock(_component_OptionsForm, {
            key: 0,
            ref: "accordionOption",
            modelValue: valueModel.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => valueModel.value = $event),
            class: "znpb-option__type-option-accordion",
            schema: _ctx.child_options
          }, null, 8, ["modelValue", "schema"])) : Vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const PanelAccordion_vue_vue_type_style_index_0_lang = "";
  const PanelAccordion = {
    id: "panel_accordion",
    component: _sfc_main$1w,
    config: {
      barebone: true
    }
  };
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  const freeGlobal$1 = freeGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal$1 || freeSelf || Function("return this")();
  const root$1 = root;
  var Symbol$1 = root$1.Symbol;
  const Symbol$2 = Symbol$1;
  var objectProto$f = Object.prototype;
  var hasOwnProperty$c = objectProto$f.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$f.toString;
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty$c.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var objectProto$e = Object.prototype;
  var nativeObjectToString = objectProto$e.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var symbolTag$3 = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
  }
  function arrayMap(array, iteratee) {
    var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index2 < length) {
      result[index2] = iteratee(array[index2], index2, array);
    }
    return result;
  }
  var isArray = Array.isArray;
  const isArray$1 = isArray;
  var INFINITY$3 = 1 / 0;
  var symbolProto$2 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray$1(value)) {
      return arrayMap(value, baseToString) + "";
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY$3 ? "-0" : result;
  }
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index2 = string.length;
    while (index2-- && reWhitespace.test(string.charAt(index2))) {
    }
    return index2;
  }
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var INFINITY$2 = 1 / 0, MAX_INTEGER = 17976931348623157e292;
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY$2 || value === -INFINITY$2) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  function identity(value) {
    return value;
  }
  var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
  }
  var coreJsData = root$1["__core-js_shared__"];
  const coreJsData$1 = coreJsData;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var funcProto$2 = Function.prototype;
  var funcToString$2 = funcProto$2.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$2.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto$1 = Function.prototype, objectProto$d = Object.prototype;
  var funcToString$1 = funcProto$1.toString;
  var hasOwnProperty$b = objectProto$d.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString$1.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  var WeakMap = getNative(root$1, "WeakMap");
  const WeakMap$1 = WeakMap;
  var objectCreate = Object.create;
  var baseCreate = function() {
    function object() {
    }
    return function(proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();
  const baseCreate$1 = baseCreate;
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  function noop() {
  }
  function copyArray(source, array) {
    var index2 = -1, length = source.length;
    array || (array = Array(length));
    while (++index2 < length) {
      array[index2] = source[index2];
    }
    return array;
  }
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  function constant(value) {
    return function() {
      return value;
    };
  }
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  }();
  const defineProperty$1 = defineProperty;
  var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
    return defineProperty$1(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string),
      "writable": true
    });
  };
  const baseSetToString$1 = baseSetToString;
  var setToString = shortOut(baseSetToString$1);
  const setToString$1 = setToString;
  function arrayEach(array, iteratee) {
    var index2 = -1, length = array == null ? 0 : array.length;
    while (++index2 < length) {
      if (iteratee(array[index2], index2, array) === false) {
        break;
      }
    }
    return array;
  }
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
    while (fromRight ? index2-- : ++index2 < length) {
      if (predicate(array[index2], index2, array)) {
        return index2;
      }
    }
    return -1;
  }
  function baseIsNaN(value) {
    return value !== value;
  }
  function strictIndexOf(array, value, fromIndex) {
    var index2 = fromIndex - 1, length = array.length;
    while (++index2 < length) {
      if (array[index2] === value) {
        return index2;
      }
    }
    return -1;
  }
  function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
  }
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty$1) {
      defineProperty$1(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var objectProto$c = Object.prototype;
  var hasOwnProperty$a = objectProto$c.hasOwnProperty;
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$a.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index2 = -1, length = props.length;
    while (++index2 < length) {
      var key = props[index2];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }
  var nativeMax$2 = Math.max;
  function overRest(func, start, transform) {
    start = nativeMax$2(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index2 = -1, length = nativeMax$2(args.length - start, 0), array = Array(length);
      while (++index2 < length) {
        array[index2] = args[start + index2];
      }
      index2 = -1;
      var otherArgs = Array(start + 1);
      while (++index2 < start) {
        otherArgs[index2] = args[index2];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }
  function baseRest(func, start) {
    return setToString$1(overRest(func, start, identity), func + "");
  }
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  function isIterateeCall(value, index2, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index2;
    if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
      return eq(object[index2], value);
    }
    return false;
  }
  function createAssigner(assigner) {
    return baseRest(function(object, sources) {
      var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index2 < length) {
        var source = sources[index2];
        if (source) {
          assigner(object, source, index2, customizer);
        }
      }
      return object;
    });
  }
  var objectProto$b = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$b;
    return value === proto;
  }
  function baseTimes(n, iteratee) {
    var index2 = -1, result = Array(n);
    while (++index2 < n) {
      result[index2] = iteratee(index2);
    }
    return result;
  }
  var argsTag$3 = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag$3;
  }
  var objectProto$a = Object.prototype;
  var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
  var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;
  var isArguments = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty$9.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
  };
  const isArguments$1 = isArguments;
  function stubFalse() {
    return false;
  }
  var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
  var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
  var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse;
  const isBuffer$1 = isBuffer;
  var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
  var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
  typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
  var freeProcess = moduleExports$1 && freeGlobal$1.process;
  var nodeUtil = function() {
    try {
      var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  const nodeUtil$1 = nodeUtil;
  var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  const isTypedArray$1 = isTypedArray;
  var objectProto$9 = Object.prototype;
  var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty$8.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var nativeKeys = overArg(Object.keys, Object);
  const nativeKeys$1 = nativeKeys;
  var objectProto$8 = Object.prototype;
  var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys$1(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$7.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  var objectProto$7 = Object.prototype;
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty$6.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
  function isKey(value, object) {
    if (isArray$1(value)) {
      return false;
    }
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  var nativeCreate = getNative(Object, "create");
  const nativeCreate$1 = nativeCreate;
  function hashClear() {
    this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
  var objectProto$6 = Object.prototype;
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate$1) {
      var result = data[key];
      return result === HASH_UNDEFINED$2 ? void 0 : result;
    }
    return hasOwnProperty$5.call(data, key) ? data[key] : void 0;
  }
  var objectProto$5 = Object.prototype;
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$4.call(data, key);
  }
  var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
    return this;
  }
  function Hash(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var arrayProto$1 = Array.prototype;
  var splice$1 = arrayProto$1.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    if (index2 < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index2 == lastIndex) {
      data.pop();
    } else {
      splice$1.call(data, index2, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    return index2 < 0 ? void 0 : data[index2][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    if (index2 < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index2][1] = value;
    }
    return this;
  }
  function ListCache(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  var Map = getNative(root$1, "Map");
  const Map$1 = Map;
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map$1 || ListCache)(),
      "string": new Hash()
    };
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  function MapCache(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  var FUNC_ERROR_TEXT$1 = "Expected a function";
  function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    var memoized = function() {
      var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
      if (cache2.has(key)) {
        return cache2.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache2.set(key, result) || cache2;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  }
  memoize.Cache = MapCache;
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache2.size === MAX_MEMOIZE_SIZE) {
        cache2.clear();
      }
      return key;
    });
    var cache2 = result.cache;
    return result;
  }
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
  });
  const stringToPath$1 = stringToPath;
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  function castPath(value, object) {
    if (isArray$1(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath$1(toString(value));
  }
  var INFINITY$1 = 1 / 0;
  function toKey(value) {
    if (typeof value == "string" || isSymbol(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
  }
  function baseGet(object, path) {
    path = castPath(path, object);
    var index2 = 0, length = path.length;
    while (object != null && index2 < length) {
      object = object[toKey(path[index2++])];
    }
    return index2 && index2 == length ? object : void 0;
  }
  function get(object, path, defaultValue) {
    var result = object == null ? void 0 : baseGet(object, path);
    return result === void 0 ? defaultValue : result;
  }
  function arrayPush(array, values) {
    var index2 = -1, length = values.length, offset = array.length;
    while (++index2 < length) {
      array[offset + index2] = values[index2];
    }
    return array;
  }
  var getPrototype = overArg(Object.getPrototypeOf, Object);
  const getPrototype$1 = getPrototype;
  var objectTag$3 = "[object Object]";
  var funcProto = Function.prototype, objectProto$4 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
      return false;
    }
    var proto = getPrototype$1(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$3.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  function baseSlice(array, start, end) {
    var index2 = -1, length = array.length;
    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while (++index2 < length) {
      result[index2] = array[index2 + start];
    }
    return result;
  }
  function castSlice(array, start, end) {
    var length = array.length;
    end = end === void 0 ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
  }
  var rsAstralRange$2 = "\\ud800-\\udfff", rsComboMarksRange$3 = "\\u0300-\\u036f", reComboHalfMarksRange$3 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$3 = "\\u20d0-\\u20ff", rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3, rsVarRange$2 = "\\ufe0e\\ufe0f";
  var rsZWJ$2 = "\\u200d";
  var reHasUnicode = RegExp("[" + rsZWJ$2 + rsAstralRange$2 + rsComboRange$3 + rsVarRange$2 + "]");
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  function asciiToArray(string) {
    return string.split("");
  }
  var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$2 = "\\u0300-\\u036f", reComboHalfMarksRange$2 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$2 = "\\u20d0-\\u20ff", rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2, rsVarRange$1 = "\\ufe0e\\ufe0f";
  var rsAstral = "[" + rsAstralRange$1 + "]", rsCombo$2 = "[" + rsComboRange$2 + "]", rsFitz$1 = "\\ud83c[\\udffb-\\udfff]", rsModifier$1 = "(?:" + rsCombo$2 + "|" + rsFitz$1 + ")", rsNonAstral$1 = "[^" + rsAstralRange$1 + "]", rsRegional$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair$1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ$1 = "\\u200d";
  var reOptMod$1 = rsModifier$1 + "?", rsOptVar$1 = "[" + rsVarRange$1 + "]?", rsOptJoin$1 = "(?:" + rsZWJ$1 + "(?:" + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsOptVar$1 + reOptMod$1 + ")*", rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1, rsSymbol = "(?:" + [rsNonAstral$1 + rsCombo$2 + "?", rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join("|") + ")";
  var reUnicode = RegExp(rsFitz$1 + "(?=" + rsFitz$1 + ")|" + rsSymbol + rsSeq$1, "g");
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  function createCaseFirst(methodName) {
    return function(string) {
      string = toString(string);
      var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
      var chr = strSymbols ? strSymbols[0] : string.charAt(0);
      var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
      return chr[methodName]() + trailing;
    };
  }
  var upperFirst = createCaseFirst("toUpperCase");
  const upperFirst$1 = upperFirst;
  function capitalize(string) {
    return upperFirst$1(toString(string).toLowerCase());
  }
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index2 = -1, length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[++index2];
    }
    while (++index2 < length) {
      accumulator = iteratee(accumulator, array[index2], index2, array);
    }
    return accumulator;
  }
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? void 0 : object[key];
    };
  }
  var deburredLetters = {
    // Latin-1 Supplement block.
    "À": "A",
    "Á": "A",
    "Â": "A",
    "Ã": "A",
    "Ä": "A",
    "Å": "A",
    "à": "a",
    "á": "a",
    "â": "a",
    "ã": "a",
    "ä": "a",
    "å": "a",
    "Ç": "C",
    "ç": "c",
    "Ð": "D",
    "ð": "d",
    "È": "E",
    "É": "E",
    "Ê": "E",
    "Ë": "E",
    "è": "e",
    "é": "e",
    "ê": "e",
    "ë": "e",
    "Ì": "I",
    "Í": "I",
    "Î": "I",
    "Ï": "I",
    "ì": "i",
    "í": "i",
    "î": "i",
    "ï": "i",
    "Ñ": "N",
    "ñ": "n",
    "Ò": "O",
    "Ó": "O",
    "Ô": "O",
    "Õ": "O",
    "Ö": "O",
    "Ø": "O",
    "ò": "o",
    "ó": "o",
    "ô": "o",
    "õ": "o",
    "ö": "o",
    "ø": "o",
    "Ù": "U",
    "Ú": "U",
    "Û": "U",
    "Ü": "U",
    "ù": "u",
    "ú": "u",
    "û": "u",
    "ü": "u",
    "Ý": "Y",
    "ý": "y",
    "ÿ": "y",
    "Æ": "Ae",
    "æ": "ae",
    "Þ": "Th",
    "þ": "th",
    "ß": "ss",
    // Latin Extended-A block.
    "Ā": "A",
    "Ă": "A",
    "Ą": "A",
    "ā": "a",
    "ă": "a",
    "ą": "a",
    "Ć": "C",
    "Ĉ": "C",
    "Ċ": "C",
    "Č": "C",
    "ć": "c",
    "ĉ": "c",
    "ċ": "c",
    "č": "c",
    "Ď": "D",
    "Đ": "D",
    "ď": "d",
    "đ": "d",
    "Ē": "E",
    "Ĕ": "E",
    "Ė": "E",
    "Ę": "E",
    "Ě": "E",
    "ē": "e",
    "ĕ": "e",
    "ė": "e",
    "ę": "e",
    "ě": "e",
    "Ĝ": "G",
    "Ğ": "G",
    "Ġ": "G",
    "Ģ": "G",
    "ĝ": "g",
    "ğ": "g",
    "ġ": "g",
    "ģ": "g",
    "Ĥ": "H",
    "Ħ": "H",
    "ĥ": "h",
    "ħ": "h",
    "Ĩ": "I",
    "Ī": "I",
    "Ĭ": "I",
    "Į": "I",
    "İ": "I",
    "ĩ": "i",
    "ī": "i",
    "ĭ": "i",
    "į": "i",
    "ı": "i",
    "Ĵ": "J",
    "ĵ": "j",
    "Ķ": "K",
    "ķ": "k",
    "ĸ": "k",
    "Ĺ": "L",
    "Ļ": "L",
    "Ľ": "L",
    "Ŀ": "L",
    "Ł": "L",
    "ĺ": "l",
    "ļ": "l",
    "ľ": "l",
    "ŀ": "l",
    "ł": "l",
    "Ń": "N",
    "Ņ": "N",
    "Ň": "N",
    "Ŋ": "N",
    "ń": "n",
    "ņ": "n",
    "ň": "n",
    "ŋ": "n",
    "Ō": "O",
    "Ŏ": "O",
    "Ő": "O",
    "ō": "o",
    "ŏ": "o",
    "ő": "o",
    "Ŕ": "R",
    "Ŗ": "R",
    "Ř": "R",
    "ŕ": "r",
    "ŗ": "r",
    "ř": "r",
    "Ś": "S",
    "Ŝ": "S",
    "Ş": "S",
    "Š": "S",
    "ś": "s",
    "ŝ": "s",
    "ş": "s",
    "š": "s",
    "Ţ": "T",
    "Ť": "T",
    "Ŧ": "T",
    "ţ": "t",
    "ť": "t",
    "ŧ": "t",
    "Ũ": "U",
    "Ū": "U",
    "Ŭ": "U",
    "Ů": "U",
    "Ű": "U",
    "Ų": "U",
    "ũ": "u",
    "ū": "u",
    "ŭ": "u",
    "ů": "u",
    "ű": "u",
    "ų": "u",
    "Ŵ": "W",
    "ŵ": "w",
    "Ŷ": "Y",
    "ŷ": "y",
    "Ÿ": "Y",
    "Ź": "Z",
    "Ż": "Z",
    "Ž": "Z",
    "ź": "z",
    "ż": "z",
    "ž": "z",
    "Ĳ": "IJ",
    "ĳ": "ij",
    "Œ": "Oe",
    "œ": "oe",
    "ŉ": "'n",
    "ſ": "s"
  };
  var deburrLetter = basePropertyOf(deburredLetters);
  const deburrLetter$1 = deburrLetter;
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
  var rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
  var rsCombo$1 = "[" + rsComboRange$1 + "]";
  var reComboMark = RegExp(rsCombo$1, "g");
  function deburr(string) {
    string = toString(string);
    return string && string.replace(reLatin, deburrLetter$1).replace(reComboMark, "");
  }
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }
  var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
  var rsApos$1 = "['’]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
  var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos$1 + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos$1 + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
  var reUnicodeWord = RegExp([
    rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
    rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
    rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
    rsUpper + "+" + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join("|"), "g");
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }
  function words(string, pattern, guard) {
    string = toString(string);
    pattern = guard ? void 0 : pattern;
    if (pattern === void 0) {
      return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    }
    return string.match(pattern) || [];
  }
  var rsApos = "['’]";
  var reApos = RegExp(rsApos, "g");
  function createCompounder(callback) {
    return function(string) {
      return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
    };
  }
  var camelCase = createCompounder(function(result, word, index2) {
    word = word.toLowerCase();
    return result + (index2 ? capitalize(word) : word);
  });
  const camelCase$1 = camelCase;
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  var LARGE_ARRAY_SIZE$1 = 200;
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }
  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
  }
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  function arrayFilter(array, predicate) {
    var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index2 < length) {
      var value = array[index2];
      if (predicate(value, index2, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  function stubArray() {
    return [];
  }
  var objectProto$3 = Object.prototype;
  var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  const getSymbols$1 = getSymbols;
  function copySymbols(source, object) {
    return copyObject(source, getSymbols$1(source), object);
  }
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush(result, getSymbols$1(object));
      object = getPrototype$1(object);
    }
    return result;
  };
  const getSymbolsIn$1 = getSymbolsIn;
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn$1(source), object);
  }
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols$1);
  }
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn$1);
  }
  var DataView = getNative(root$1, "DataView");
  const DataView$1 = DataView;
  var Promise$1 = getNative(root$1, "Promise");
  const Promise$2 = Promise$1;
  var Set = getNative(root$1, "Set");
  const Set$1 = Set;
  var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
  var dataViewTag$3 = "[object DataView]";
  var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
  var getTag = baseGetTag;
  if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag(new Map$1()) != mapTag$4 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
    getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$3;
          case mapCtorString:
            return mapTag$4;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag$4;
          case weakMapCtorString:
            return weakMapTag$1;
        }
      }
      return result;
    };
  }
  const getTag$1 = getTag;
  var objectProto$2 = Object.prototype;
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
  function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty$2.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  var Uint8Array$1 = root$1.Uint8Array;
  const Uint8Array$2 = Uint8Array$1;
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array$2(result).set(new Uint8Array$2(arrayBuffer));
    return result;
  }
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  var reFlags = /\w*$/;
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
  function cloneSymbol(symbol) {
    return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
  }
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
  var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$2:
        return cloneArrayBuffer(object);
      case boolTag$2:
      case dateTag$2:
        return new Ctor(+object);
      case dataViewTag$2:
        return cloneDataView(object, isDeep);
      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return cloneTypedArray(object, isDeep);
      case mapTag$3:
        return new Ctor();
      case numberTag$2:
      case stringTag$2:
        return new Ctor(object);
      case regexpTag$2:
        return cloneRegExp(object);
      case setTag$3:
        return new Ctor();
      case symbolTag$2:
        return cloneSymbol(object);
    }
  }
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
  }
  var mapTag$2 = "[object Map]";
  function baseIsMap(value) {
    return isObjectLike(value) && getTag$1(value) == mapTag$2;
  }
  var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
  const isMap$1 = isMap;
  var setTag$2 = "[object Set]";
  function baseIsSet(value) {
    return isObjectLike(value) && getTag$1(value) == setTag$2;
  }
  var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
  const isSet$1 = isSet;
  var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
  var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var cloneableTags = {};
  cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray$1(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag$1(value), isFunc = tag == funcTag || tag == genTag;
      if (isBuffer$1(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (isSet$1(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap$1(value)) {
      value.forEach(function(subValue, key2) {
        result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
    }
    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? void 0 : keysFunc(value);
    arrayEach(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
    return result;
  }
  var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
  function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
  }
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  function SetCache(values) {
    var index2 = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index2 < length) {
      this.add(values[index2]);
    }
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  function arraySome(array, predicate) {
    var index2 = -1, length = array == null ? 0 : array.length;
    while (++index2 < length) {
      if (predicate(array[index2], index2, array)) {
        return true;
      }
    }
    return false;
  }
  function cacheHas(cache2, key) {
    return cache2.has(key);
  }
  var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index2 = -1, result = true, seen2 = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index2 < arrLength) {
      var arrValue = array[index2], othValue = other[index2];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen2) {
        if (!arraySome(other, function(othValue2, othIndex) {
          if (!cacheHas(seen2, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen2.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  function mapToArray(map) {
    var index2 = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index2] = [key, value];
    });
    return result;
  }
  function setToArray(set2) {
    var index2 = -1, result = Array(set2.size);
    set2.forEach(function(value) {
      result[++index2] = value;
    });
    return result;
  }
  var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
  var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
  var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$2(object), new Uint8Array$2(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
      case numberTag:
        return eq(+object, +other);
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case regexpTag:
      case stringTag:
        return object == other + "";
      case mapTag:
        var convert = mapToArray;
      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
        convert || (convert = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG$2;
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  var COMPARE_PARTIAL_FLAG$3 = 1;
  var objectProto$1 = Object.prototype;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index2 = objLength;
    while (index2--) {
      var key = objProps[index2];
      if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
        return false;
      }
    }
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index2 < objLength) {
      key = objProps[index2];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  var COMPARE_PARTIAL_FLAG$2 = 1;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer$1(object)) {
      if (!isBuffer$1(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
  function baseIsMatch(object, source, matchData, customizer) {
    var index2 = matchData.length, length = index2, noCustomizer = !customizer;
    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index2--) {
      var data = matchData[index2];
      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }
    while (++index2 < length) {
      data = matchData[index2];
      var key = data[0], objValue = object[key], srcValue = data[1];
      if (noCustomizer && data[2]) {
        if (objValue === void 0 && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack();
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
          return false;
        }
      }
    }
    return true;
  }
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }
  function getMatchData(object) {
    var result = keys(object), length = result.length;
    while (length--) {
      var key = result[length], value = object[key];
      result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
  }
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
    };
  }
  function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }
  function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index2 = -1, length = path.length, result = false;
    while (++index2 < length) {
      var key = toKey(path[index2]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index2 != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object) || isArguments$1(object));
  }
  function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue);
    }
    return function(object) {
      var objValue = get(object, path);
      return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
  }
  function baseProperty(key) {
    return function(object) {
      return object == null ? void 0 : object[key];
    };
  }
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }
  function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }
  function baseIteratee(value) {
    if (typeof value == "function") {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (typeof value == "object") {
      return isArray$1(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    }
    return property(value);
  }
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index2];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  var baseFor = createBaseFor();
  const baseFor$1 = baseFor;
  function baseForOwn(object, iteratee) {
    return object && baseFor$1(object, iteratee, keys);
  }
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
      while (fromRight ? index2-- : ++index2 < length) {
        if (iteratee(iterable[index2], index2, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }
  var baseEach = createBaseEach(baseForOwn);
  const baseEach$1 = baseEach;
  var now = function() {
    return root$1.Date.now();
  };
  const now$1 = now;
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax$1 = Math.max, nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax$1(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now$1();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now$1());
    }
    function debounced() {
      var time = now$1(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  function assignMergeValue(object, key, value) {
    if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray$1(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray$1(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments$1(srcValue)) {
        newValue = objValue;
        if (isArguments$1(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject(objValue) || isFunction(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor$1(source, function(srcValue, key) {
      stack || (stack = new Stack());
      if (isObject(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }
  var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
    baseMerge(object, source, srcIndex, customizer);
  });
  const mergeWith$1 = mergeWith;
  function arrayIncludesWith(array, value, comparator) {
    var index2 = -1, length = array == null ? 0 : array.length;
    while (++index2 < length) {
      if (comparator(value, array[index2])) {
        return true;
      }
    }
    return false;
  }
  function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : void 0;
  }
  function castFunction(value) {
    return typeof value == "function" ? value : identity;
  }
  function forEach(collection, iteratee) {
    var func = isArray$1(collection) ? arrayEach : baseEach$1;
    return func(collection, castFunction(iteratee));
  }
  var htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  var escapeHtmlChar = basePropertyOf(htmlEscapes);
  const escapeHtmlChar$1 = escapeHtmlChar;
  var reUnescapedHtml = /[&<>"']/g, reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
  function escape$1(string) {
    string = toString(string);
    return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar$1) : string;
  }
  function baseFilter(collection, predicate) {
    var result = [];
    baseEach$1(collection, function(value, index2, collection2) {
      if (predicate(value, index2, collection2)) {
        result.push(value);
      }
    });
    return result;
  }
  function filter(collection, predicate) {
    var func = isArray$1(collection) ? arrayFilter : baseFilter;
    return func(collection, baseIteratee(predicate));
  }
  function createFind(findIndexFunc) {
    return function(collection, predicate, fromIndex) {
      var iterable = Object(collection);
      if (!isArrayLike(collection)) {
        var iteratee = baseIteratee(predicate);
        collection = keys(collection);
        predicate = function(key) {
          return iteratee(iterable[key], key, iterable);
        };
      }
      var index2 = findIndexFunc(collection, predicate, fromIndex);
      return index2 > -1 ? iterable[iteratee ? collection[index2] : index2] : void 0;
    };
  }
  var nativeMax = Math.max;
  function findIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
    if (index2 < 0) {
      index2 = nativeMax(length + index2, 0);
    }
    return baseFindIndex(array, baseIteratee(predicate), index2);
  }
  var find = createFind(findIndex);
  const find$1 = find;
  function parent(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
  }
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }
  var merge = createAssigner(function(object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });
  const merge$1 = merge;
  function baseUnset(object, path) {
    path = castPath(path, object);
    object = parent(object, path);
    return object == null || delete object[toKey(last(path))];
  }
  function baseSet(object, path, value, customizer) {
    if (!isObject(object)) {
      return object;
    }
    path = castPath(path, object);
    var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
    while (nested != null && ++index2 < length) {
      var key = toKey(path[index2]), newValue = value;
      if (key === "__proto__" || key === "constructor" || key === "prototype") {
        return object;
      }
      if (index2 != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : void 0;
        if (newValue === void 0) {
          newValue = isObject(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
        }
      }
      assignValue(nested, key, newValue);
      nested = nested[key];
    }
    return object;
  }
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index2 = fromIndex - 1, length = array.length;
    while (++index2 < length) {
      if (comparator(array[index2], value)) {
        return index2;
      }
    }
    return -1;
  }
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function basePullAll(array, values, iteratee, comparator) {
    var indexOf = comparator ? baseIndexOfWith : baseIndexOf, index2 = -1, length = values.length, seen2 = array;
    if (array === values) {
      values = copyArray(values);
    }
    if (iteratee) {
      seen2 = arrayMap(array, baseUnary(iteratee));
    }
    while (++index2 < length) {
      var fromIndex = 0, value = values[index2], computed = iteratee ? iteratee(value) : value;
      while ((fromIndex = indexOf(seen2, computed, fromIndex, comparator)) > -1) {
        if (seen2 !== array) {
          splice.call(seen2, fromIndex, 1);
        }
        splice.call(array, fromIndex, 1);
      }
    }
    return array;
  }
  function pullAll(array, values) {
    return array && array.length && values && values.length ? basePullAll(array, values) : array;
  }
  var pull = baseRest(pullAll);
  const pull$1 = pull;
  function set(object, path, value) {
    return object == null ? object : baseSet(object, path, value);
  }
  var INFINITY = 1 / 0;
  var createSet = !(Set$1 && 1 / setToArray(new Set$1([, -0]))[1] == INFINITY) ? noop : function(values) {
    return new Set$1(values);
  };
  const createSet$1 = createSet;
  var LARGE_ARRAY_SIZE = 200;
  function baseUniq(array, iteratee, comparator) {
    var index2 = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen2 = result;
    if (comparator) {
      isCommon = false;
      includes = arrayIncludesWith;
    } else if (length >= LARGE_ARRAY_SIZE) {
      var set2 = iteratee ? null : createSet$1(array);
      if (set2) {
        return setToArray(set2);
      }
      isCommon = false;
      includes = cacheHas;
      seen2 = new SetCache();
    } else {
      seen2 = iteratee ? [] : result;
    }
    outer:
      while (++index2 < length) {
        var value = array[index2], computed = iteratee ? iteratee(value) : value;
        value = comparator || value !== 0 ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen2.length;
          while (seenIndex--) {
            if (seen2[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen2.push(computed);
          }
          result.push(value);
        } else if (!includes(seen2, computed, comparator)) {
          if (seen2 !== result) {
            seen2.push(computed);
          }
          result.push(value);
        }
      }
    return result;
  }
  function uniq(array) {
    return array && array.length ? baseUniq(array) : [];
  }
  function unset(object, path) {
    return object == null ? true : baseUnset(object, path);
  }
  function baseUpdate(object, path, updater, customizer) {
    return baseSet(object, path, updater(baseGet(object, path)), customizer);
  }
  function update(object, path, updater) {
    return object == null ? object : baseUpdate(object, path, castFunction(updater));
  }
  const _sfc_main$1v = /* @__PURE__ */ Vue.defineComponent({
    __name: "ResponsiveGroup",
    props: {
      modelValue: {},
      child_options: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const { useResponsiveDevices: useResponsiveDevices2, usePseudoSelectors: usePseudoSelectors2 } = window.zb.composables;
      const {
        activeResponsiveDeviceInfo: activeResponsiveDeviceInfo2,
        setActiveResponsiveOptions,
        removeActiveResponsiveOptions,
        orderedResponsiveDevices
      } = useResponsiveDevices2();
      const { activePseudoSelector } = usePseudoSelectors2();
      const computedChildOptionsSchema = Vue.computed(() => {
        if (activeResponsiveDeviceInfo2.value.id !== "default") {
          return applyPlaceholders(JSON.parse(JSON.stringify(props.child_options)));
        } else {
          return props.child_options;
        }
      });
      function applyPlaceholders(schema, existingPath = "") {
        const newSchema = {};
        Object.keys(schema).forEach((singleOptionId) => {
          const singleOptionSchema = schema[singleOptionId];
          let newPath = existingPath;
          if (singleOptionSchema.child_options) {
            singleOptionSchema.child_options = applyPlaceholders(singleOptionSchema.child_options, newPath);
          }
          if (!singleOptionSchema.is_layout) {
            newPath = existingPath ? existingPath + "." + singleOptionSchema.id : singleOptionId;
            const higherValue = getHigherResponsiveDeviceValue(newPath);
            if (higherValue !== null) {
              singleOptionSchema.placeholder = higherValue;
            }
          } else {
            const higherValue = getHigherResponsiveDeviceValue(existingPath, true);
            if (higherValue !== null) {
              singleOptionSchema.placeholder = higherValue;
            }
          }
          newSchema[singleOptionId] = singleOptionSchema;
        });
        return newSchema;
      }
      function getHigherResponsiveDeviceValue(schemaPath, isLayout = false) {
        let newValue = null;
        let oldValue = {};
        Object.keys(orderedResponsiveDevices.value).forEach((index2) => {
          const deviceInfo = orderedResponsiveDevices.value[index2];
          let fullPath;
          if (schemaPath.length > 0) {
            fullPath = `${deviceInfo.id}.${activePseudoSelector.value.id}.${schemaPath}`;
          } else {
            fullPath = `${deviceInfo.id}.${activePseudoSelector.value.id}`;
          }
          if (deviceInfo.id === "default" || deviceInfo.width > activeResponsiveDeviceInfo2.value.width) {
            const tempNewValue = get(props.modelValue, fullPath, null);
            if (tempNewValue !== null) {
              if (isLayout) {
                newValue = Object.assign({}, oldValue, tempNewValue || {});
              } else {
                newValue = tempNewValue;
              }
            }
            oldValue = newValue;
          }
        });
        return newValue;
      }
      const computedModelValue = Vue.computed({
        get() {
          return (props.modelValue || {})[activeResponsiveDeviceInfo2.value.id] || {};
        },
        set(newValue) {
          const clonedValue = __spreadValues({}, props.modelValue);
          if (newValue === null && typeof clonedValue[activeResponsiveDeviceInfo2.value.id]) {
            delete clonedValue[activeResponsiveDeviceInfo2.value.id];
          } else {
            clonedValue[activeResponsiveDeviceInfo2.value.id] = newValue;
          }
          emit("update:modelValue", clonedValue);
        }
      });
      function removeDeviceStyles(deviceID) {
        const clonedValues = __spreadValues({}, props.modelValue);
        delete clonedValues[deviceID];
        emit("update:modelValue", clonedValues);
      }
      const computedAllModelValue = Vue.computed(() => props.modelValue);
      Vue.onMounted(
        () => setActiveResponsiveOptions({
          modelValue: computedAllModelValue,
          removeDeviceStyles
        })
      );
      Vue.onBeforeUnmount(() => removeActiveResponsiveOptions());
      return (_ctx, _cache) => {
        const _component_OptionsForm = Vue.resolveComponent("OptionsForm");
        return Vue.openBlock(), Vue.createBlock(_component_OptionsForm, {
          modelValue: computedModelValue.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedModelValue.value = $event),
          class: "znpb-option--responsive-group",
          schema: computedChildOptionsSchema.value
        }, null, 8, ["modelValue", "schema"]);
      };
    }
  });
  const ResponsiveGroup_vue_vue_type_style_index_0_lang = "";
  const ResponsiveGroup = {
    id: "responsive_group",
    component: _sfc_main$1v,
    config: {
      // Can be one of the following
      barebone: true
    }
  };
  const _hoisted_1$19 = { class: "znpb-column-size" };
  const _hoisted_2$N = { class: "znpb-column-size-options" };
  const _hoisted_3$z = ["onClick"];
  const _sfc_main$1u = /* @__PURE__ */ Vue.defineComponent({
    __name: "ColumnSize",
    props: {
      options: {},
      modelValue: { default: "" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const valueModel = Vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$19, [
          Vue.createElementVNode("div", _hoisted_2$N, [
            (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.options, (option, index2) => {
              return Vue.openBlock(), Vue.createElementBlock("div", {
                key: index2,
                class: Vue.normalizeClass(["znpb-column-size__option", {
                  "znpb-column-size__option--active": option.id === valueModel.value
                }]),
                style: Vue.normalizeStyle({ flex: option.name === "auto" ? `0 0 ${100}%` : 1 }),
                onClick: ($event) => valueModel.value = option.id
              }, Vue.toDisplayString(option.name), 15, _hoisted_3$z);
            }), 128))
          ])
        ]);
      };
    }
  });
  const ColumnSize_vue_vue_type_style_index_0_lang = "";
  const ColumnSize = {
    id: "column_size",
    component: _sfc_main$1u
  };
  var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var inherits = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  var possibleConstructorReturn = function(self2, call) {
    if (!self2) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self2;
  };
  var TypeRegistry = function() {
    function TypeRegistry2() {
      var initial = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      classCallCheck(this, TypeRegistry2);
      this.registeredTypes = initial;
    }
    createClass(TypeRegistry2, [{
      key: "get",
      value: function get2(type) {
        if (typeof this.registeredTypes[type] !== "undefined") {
          return this.registeredTypes[type];
        } else {
          return this.registeredTypes["default"];
        }
      }
    }, {
      key: "register",
      value: function register(type, item) {
        if (typeof this.registeredTypes[type] === "undefined") {
          this.registeredTypes[type] = item;
        }
      }
    }, {
      key: "registerDefault",
      value: function registerDefault(item) {
        this.register("default", item);
      }
    }]);
    return TypeRegistry2;
  }();
  var KeyExtractors = function(_TypeRegistry) {
    inherits(KeyExtractors2, _TypeRegistry);
    function KeyExtractors2(options) {
      classCallCheck(this, KeyExtractors2);
      var _this = possibleConstructorReturn(this, (KeyExtractors2.__proto__ || Object.getPrototypeOf(KeyExtractors2)).call(this, options));
      _this.registerDefault(function(el) {
        return el.getAttribute("name") || "";
      });
      return _this;
    }
    return KeyExtractors2;
  }(TypeRegistry);
  var InputReaders = function(_TypeRegistry) {
    inherits(InputReaders2, _TypeRegistry);
    function InputReaders2(options) {
      classCallCheck(this, InputReaders2);
      var _this = possibleConstructorReturn(this, (InputReaders2.__proto__ || Object.getPrototypeOf(InputReaders2)).call(this, options));
      _this.registerDefault(function(el) {
        return el.value;
      });
      _this.register("checkbox", function(el) {
        return el.getAttribute("value") !== null ? el.checked ? el.getAttribute("value") : null : el.checked;
      });
      _this.register("select", function(el) {
        return getSelectValue(el);
      });
      return _this;
    }
    return InputReaders2;
  }(TypeRegistry);
  function getSelectValue(elem) {
    var value, option, i;
    var options = elem.options;
    var index2 = elem.selectedIndex;
    var one = elem.type === "select-one";
    var values = one ? null : [];
    var max = one ? index2 + 1 : options.length;
    if (index2 < 0) {
      i = max;
    } else {
      i = one ? index2 : 0;
    }
    for (; i < max; i++) {
      option = options[i];
      if ((option.selected || i === index2) && // Don't return options that are disabled or in a disabled optgroup
      !option.disabled && !(option.parentNode.disabled && option.parentNode.tagName.toLowerCase() === "optgroup")) {
        value = option.value;
        if (one) {
          return value;
        }
        values.push(value);
      }
    }
    return values;
  }
  var KeyAssignmentValidators = function(_TypeRegistry) {
    inherits(KeyAssignmentValidators2, _TypeRegistry);
    function KeyAssignmentValidators2(options) {
      classCallCheck(this, KeyAssignmentValidators2);
      var _this = possibleConstructorReturn(this, (KeyAssignmentValidators2.__proto__ || Object.getPrototypeOf(KeyAssignmentValidators2)).call(this, options));
      _this.registerDefault(function() {
        return true;
      });
      _this.register("radio", function(el) {
        return el.checked;
      });
      return _this;
    }
    return KeyAssignmentValidators2;
  }(TypeRegistry);
  function keySplitter(key) {
    var matches = key.match(/[^[\]]+/g);
    var lastKey = void 0;
    if (key.length > 1 && key.indexOf("[]") === key.length - 2) {
      lastKey = matches.pop();
      matches.push([lastKey]);
    }
    return matches;
  }
  function getElementType(el) {
    var typeAttr = void 0;
    var tagName = el.tagName;
    var type = tagName;
    if (tagName.toLowerCase() === "input") {
      typeAttr = el.getAttribute("type");
      if (typeAttr) {
        type = typeAttr;
      } else {
        type = "text";
      }
    }
    return type.toLowerCase();
  }
  function getInputElements(element, options) {
    return Array.prototype.filter.call(element.querySelectorAll("input,select,textarea"), function(el) {
      if (el.tagName.toLowerCase() === "input" && (el.type === "submit" || el.type === "reset")) {
        return false;
      }
      var myType = getElementType(el);
      var extractor = options.keyExtractors.get(myType);
      var identifier = extractor(el);
      var foundInInclude = (options.include || []).indexOf(identifier) !== -1;
      var foundInExclude = (options.exclude || []).indexOf(identifier) !== -1;
      var foundInIgnored = false;
      var reject = false;
      if (options.ignoredTypes) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = void 0;
        try {
          for (var _iterator = options.ignoredTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var selector = _step.value;
            if (el.matches(selector)) {
              foundInIgnored = true;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      if (foundInInclude) {
        reject = false;
      } else {
        if (options.include) {
          reject = true;
        } else {
          reject = foundInExclude || foundInIgnored;
        }
      }
      return !reject;
    });
  }
  function assignKeyValue(obj, keychain, value) {
    if (!keychain) {
      return obj;
    }
    var key = keychain.shift();
    if (!obj[key]) {
      obj[key] = Array.isArray(key) ? [] : {};
    }
    if (keychain.length === 0) {
      if (!Array.isArray(obj[key])) {
        obj[key] = value;
      } else if (value !== null) {
        obj[key].push(value);
      }
    }
    if (keychain.length > 0) {
      assignKeyValue(obj[key], keychain, value);
    }
    return obj;
  }
  function serialize(element) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var data = {};
    options.keySplitter = options.keySplitter || keySplitter;
    options.keyExtractors = new KeyExtractors(options.keyExtractors || {});
    options.inputReaders = new InputReaders(options.inputReaders || {});
    options.keyAssignmentValidators = new KeyAssignmentValidators(options.keyAssignmentValidators || {});
    Array.prototype.forEach.call(getInputElements(element, options), function(el) {
      var type = getElementType(el);
      var keyExtractor = options.keyExtractors.get(type);
      var key = keyExtractor(el);
      var inputReader = options.inputReaders.get(type);
      var value = inputReader(el);
      var validKeyAssignment = options.keyAssignmentValidators.get(type);
      if (validKeyAssignment(el, key, value)) {
        var keychain = options.keySplitter(key);
        data = assignKeyValue(data, keychain, value);
      }
    });
    return data;
  }
  (function(_TypeRegistry) {
    inherits(InputWriters, _TypeRegistry);
    function InputWriters(options) {
      classCallCheck(this, InputWriters);
      var _this = possibleConstructorReturn(this, (InputWriters.__proto__ || Object.getPrototypeOf(InputWriters)).call(this, options));
      _this.registerDefault(function(el, value) {
        el.value = value;
      });
      _this.register("checkbox", function(el, value) {
        if (value === null) {
          el.indeterminate = true;
        } else {
          el.checked = Array.isArray(value) ? value.indexOf(el.value) !== -1 : value;
        }
      });
      _this.register("radio", function(el, value) {
        if (value !== void 0) {
          el.checked = el.value === value.toString();
        }
      });
      _this.register("select", setSelectValue);
      return _this;
    }
    return InputWriters;
  })(TypeRegistry);
  function makeArray(arr) {
    var ret = [];
    if (arr !== null) {
      if (Array.isArray(arr)) {
        ret.push.apply(ret, arr);
      } else {
        ret.push(arr);
      }
    }
    return ret;
  }
  function setSelectValue(elem, value) {
    var optionSet, option;
    var options = elem.options;
    var values = makeArray(value);
    var i = options.length;
    while (i--) {
      option = options[i];
      if (values.indexOf(option.value) > -1) {
        option.setAttribute("selected", true);
        optionSet = true;
      }
    }
    if (!optionSet) {
      elem.selectedIndex = -1;
    }
  }
  const editorData$1 = Vue.ref(window.ZnPbInitialData);
  const useEditorData = () => {
    return {
      editorData: editorData$1
    };
  };
  const { editorData } = useEditorData();
  const { saveUserData } = window.zb.api;
  const userDataValues = Vue.reactive(__spreadValues({
    favorite_elements: []
  }, editorData.value.user_data));
  function useUserData() {
    function getUserData(key = null, defaultValue = null) {
      if (key !== null) {
        return userDataValues[key] || defaultValue;
      }
      return userDataValues;
    }
    function updateUserData(newData) {
      const dataToSave = __spreadValues(__spreadValues({}, userDataValues.value), newData);
      Object.assign(userDataValues, dataToSave);
      saveUserData(dataToSave).then((response) => {
        Object.assign(userDataValues, response.data);
      });
    }
    return {
      getUserData,
      updateUserData
    };
  }
  class ElementType {
    constructor(config) {
      __publicField(this, "element_type", "");
      __publicField(this, "name", "");
      __publicField(this, "component", null);
      __publicField(this, "category", "");
      __publicField(this, "deprecated", false);
      __publicField(this, "icon", "");
      __publicField(this, "thumb", "");
      __publicField(this, "is_child", false);
      __publicField(this, "keywords", []);
      __publicField(this, "label", "");
      __publicField(this, "options", {});
      __publicField(this, "scripts", {});
      __publicField(this, "styles", {});
      __publicField(this, "show_in_ui", true);
      __publicField(this, "style_elements", {});
      __publicField(this, "wrapper", false);
      __publicField(this, "content_orientation", "horizontal");
      Object.assign(this, config);
    }
    getComponent() {
      return this.component;
    }
    registerComponent(component) {
      this.component = Vue.markRaw(component);
    }
    resetComponent() {
      this.component = null;
    }
  }
  const useElementDefinitionsStore = pinia.defineStore("elementDefinitions", {
    state: () => {
      return {
        elementsDefinition: [
          new ElementType({
            element_type: "contentRoot",
            wrapper: true,
            show_in_ui: false,
            name: i18n__namespace.__("Root", "zionbuilder")
          })
        ],
        categories: []
      };
    },
    getters: {
      getVisibleElements: (state) => state.elementsDefinition.filter((element) => element.show_in_ui),
      getElementDefinition: (state) => (elementType) => find$1(state.elementsDefinition, { element_type: elementType }) || new ElementType({
        element_type: "invalid",
        name: i18n__namespace.__("Invalid Element", "zionbuilder")
      }),
      getElementIcon() {
        return (elementType) => {
          const element = this.getElementDefinition(elementType);
          return element.icon ? element.icon : null;
        };
      },
      getElementImage() {
        return (elementType) => {
          const element = this.getElementDefinition(elementType);
          return element.thumb ? element.thumb : null;
        };
      },
      getElementTypeCategory: (state) => (id) => find$1(state.categories, { id })
    },
    actions: {
      setCategories(categories) {
        this.categories = categories;
      },
      addElements(elements) {
        elements.forEach((elementConfig) => {
          this.addElement(elementConfig);
        });
      },
      addElement(config) {
        this.elementsDefinition.push(new ElementType(config));
      },
      registerElementComponent({ elementType, component }) {
        const element = this.getElementDefinition(elementType);
        if (!element) {
          console.warn(`element with ${elementType} could not be found.`);
          return;
        }
        element.component = Vue.markRaw(component);
      }
    }
  });
  const { generateUID: generateUID$2 } = window.zb.utils;
  const regenerateUIDs = (element) => {
    const uid = generateUID$2();
    element.uid = uid;
    if (Array.isArray(element.content)) {
      element.content = element.content.map((element2) => {
        return regenerateUIDs(element2);
      });
    }
    return element;
  };
  const removeElementID = (element) => {
    unset(element, "options._advanced_options._element_id");
    if (Array.isArray(element.content)) {
      element.content = element.content.map((element2) => {
        return removeElementID(element2);
      });
    }
    return element;
  };
  const regenerateUIDsForContent = (elements) => {
    return elements.map((element) => regenerateUIDs(element));
  };
  const { useResponsiveDevices: useResponsiveDevices$4 } = window.zb.composables;
  function getCssFromSelector(selectors, styleConfig, args = {}) {
    let css = "";
    if (styleConfig.styles) {
      css += getStyles$1(selectors.join(","), styleConfig.styles, args);
    }
    if (styleConfig.child_styles) {
      styleConfig.child_styles.forEach((childConfig) => {
        const { states = ["default"], selector } = childConfig;
        const childSelectors = [];
        selectors.forEach((mainSelector) => {
          states.forEach((state) => {
            if (state === "default") {
              childSelectors.push(`${mainSelector} ${selector}`);
            } else {
              childSelectors.push(`${mainSelector}${state} ${selector}`);
            }
          });
        });
        css += getCssFromSelector(childSelectors, childConfig, args);
      });
    }
    return css;
  }
  function getStyles$1(cssSelector, styleValues = {}, args) {
    let compiledStyles = "";
    const { responsiveDevicesAsIdWidth } = useResponsiveDevices$4();
    Object.keys(responsiveDevicesAsIdWidth.value).forEach((deviceId) => {
      const pseudoStyleValue = styleValues[deviceId];
      if (pseudoStyleValue) {
        const pseudoStyles = getPseudoStyles(cssSelector, pseudoStyleValue, args);
        compiledStyles += getResponsiveDeviceStyles(deviceId, pseudoStyles);
        if (typeof pseudoStyleValue["custom_css"] === "string") {
          const customCSS = pseudoStyleValue["custom_css"].replaceAll("[ELEMENT]", cssSelector);
          compiledStyles += getResponsiveDeviceStyles(deviceId, customCSS);
        }
      }
    });
    return compiledStyles;
  }
  function getPseudoStyles(cssSelector, pseudoSelectors = {}, args) {
    let combinedStyles = "";
    if (args.forcehoverState) {
      if (typeof pseudoSelectors[":hover"] !== "undefined") {
        const pseudoStyleValues = pseudoSelectors[":hover"];
        combinedStyles += compilePseudoStyle(cssSelector, "default", pseudoStyleValues);
      }
    } else {
      Object.keys(pseudoSelectors).forEach((pseudoSelectorId) => {
        const pseudoStyleValues = pseudoSelectors[pseudoSelectorId];
        combinedStyles += compilePseudoStyle(cssSelector, pseudoSelectorId, pseudoStyleValues);
      });
    }
    return combinedStyles;
  }
  function compilePseudoStyle(cssSelector, pseudoSelector, styleValues) {
    const append = pseudoSelector !== "default" ? `${pseudoSelector}` : "";
    const compiledStyles = compileStyleTabs(styleValues);
    const content = styleValues.content;
    const contentStyle = content && content.length > 0 ? `content: '${content}';` : "";
    if (contentStyle || compiledStyles.length > 0) {
      return `${cssSelector}${append} { ${contentStyle}${compiledStyles} }`;
    }
    return "";
  }
  function getResponsiveDeviceStyles(deviceId, styles) {
    if (!deviceId || !styles) {
      return "";
    }
    const { responsiveDevicesAsIdWidth } = useResponsiveDevices$4();
    const responsiveWidthValue = responsiveDevicesAsIdWidth.value[deviceId];
    const start = deviceId !== "default" ? `@media (max-width: ${responsiveWidthValue}px ) {` : "";
    const end = deviceId !== "default" ? `}` : "";
    return `${start}${styles}${end}`;
  }
  function compileStyleTabs(styleValues) {
    let combineStyles = "";
    let filtersGroup = "";
    const backgroundImageConfig = [];
    const _a = styleValues, {
      // Background Image
      "background-gradient": backgroundGradient,
      "background-image": backgroundImage,
      "background-size": backgroundSize,
      "background-size-units": backgroundSizeUnits = {},
      "background-position-x": backgroundPositionX = "",
      "background-position-y": backgroundPositionY = "",
      // Typography
      "text-decoration": textDecoration,
      "text-shadow": textShadow = {},
      "box-shadow": boxShadow = {},
      border: border = {},
      "border-radius": borderRadius = {},
      transform = [],
      // Transitions
      "transition-property": transitionProperty = "all",
      "transition-duration": transitionDuration = 0,
      "transition-timing-function": transitionTimingFunction = "linear",
      "transition-delay": transitionDelay = 0,
      // Special styles that we don't want to print
      "flex-reverse": flexReverse = false,
      "custom-order": customFlexOrder = null,
      order: flexOrder = null,
      transform_origin_x_axis: transformOriginX,
      transform_origin_y_axis: transformOriginY,
      transform_origin_z_axis: transformOriginZ,
      custom_css: customCSS
    } = _a, keyValueStyles = __objRest(_a, [
      "background-gradient",
      "background-image",
      "background-size",
      "background-size-units",
      "background-position-x",
      "background-position-y",
      "text-decoration",
      "text-shadow",
      "box-shadow",
      // Borders
      "border",
      "border-radius",
      "transform",
      "transition-property",
      "transition-duration",
      "transition-timing-function",
      "transition-delay",
      "flex-reverse",
      "custom-order",
      "order",
      "transform_origin_x_axis",
      "transform_origin_y_axis",
      "transform_origin_z_axis",
      "custom_css"
    ]);
    const filterProperties = [
      "grayscale",
      "sepia",
      "blur",
      "brightness",
      "saturate",
      "opacity",
      "contrast",
      "hue-rotate",
      "invert"
    ];
    const specialValues = {
      "flex-direction": (value) => {
        if (!flexReverse) {
          return value === "row" ? `-webkit-box-orient: horizontal; -webkit-box-direction:normal;  -ms-flex-direction: ${value}; flex-direction: ${value};` : `-webkit-box-orient: vertical; -webkit-box-direction:normal;  -ms-flex-direction: ${value}; flex-direction: ${value};`;
        } else {
          return value === "row" ? `-webkit-box-orient: horizontal; -webkit-box-direction:reverse; -ms-flex-direction: row-reverse; flex-direction: row-reverse;` : `-webkit-box-orient: vertical; -webkit-box-direction:reverse; -ms-flex-direction: column-reverse; flex-direction: column-reverse;`;
        }
      },
      "custom-order": (value) => {
        return `-ms-flex-order: ${value}; order: ${value};`;
      },
      order: (value) => {
        return `-ms-flex-order: ${value}; order: ${value};`;
      },
      "align-items": (value) => {
        const todelete = /flex-/gi;
        const cleanValue = value.replace(todelete, "");
        return `-webkit-box-align: ${cleanValue}; -ms-flex-align: ${cleanValue}; align-items: ${value};`;
      },
      "justify-content": (value) => {
        if (value === "space-around") {
          return `-ms-flex-pack: distribute; justify-content: space-around;`;
        } else if (value === "space-between") {
          return `-webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between;`;
        } else {
          const todelete = /flex-/gi;
          const cleanValue = value.replace(todelete, "");
          return `-webkit-box-pack: ${cleanValue}; -ms-flex-pack: ${cleanValue}; justify-content: ${value};`;
        }
      },
      "flex-wrap": (value) => {
        return `-ms-flex-wrap: ${value}; flex-wrap: ${value};`;
      },
      "align-content": (value) => {
        if (value === "space-around") {
          return `-ms-flex-line-pack: distribute; align-content: space-around;`;
        } else if (value === "space-between") {
          return `-ms-flex-line-pack: justify; align-content: space-between;`;
        } else {
          const todelete = /flex-/gi;
          const cleanValue = value.replace(todelete, "");
          return `-ms-flex-line-pack: ${cleanValue}; align-content: ${value};`;
        }
      },
      "flex-grow": (value) => {
        return `-webkit-box-flex: ${value}; -ms-flex-positive: ${value}; flex-grow: ${value};`;
      },
      "flex-shrink": (value) => {
        return `-ms-flex-negative: ${value};flex-shrink: ${value};`;
      },
      "flex-basis": (value) => {
        return `-ms-flex-preferred-size: ${value}; flex-basis: ${value};`;
      },
      "align-self": (value) => {
        const todelete = /flex-/gi;
        const cleanValue = value.replace(todelete, "");
        return `-ms-flex-item-align: ${cleanValue}; align-self:${value};`;
      },
      perspective: (value) => {
        return `perspective: ${value};`;
      },
      transform_style: (value) => {
        return `-ms-transform-style: ${value}; -webkit-transform-style: ${value}; transform-style: ${value};`;
      }
    };
    if (flexOrder || customFlexOrder) {
      const orderValue = customFlexOrder || flexOrder;
      combineStyles += `-ms-flex-order: ${orderValue}; order: ${orderValue};`;
    }
    Object.keys(keyValueStyles).forEach((property2) => {
      const value = keyValueStyles[property2];
      const ignoredProperties = ["background-video", "__dynamic_content__"];
      if (!ignoredProperties.includes(property2) && (value || value === 0)) {
        if (filterProperties.includes(property2)) {
          if (property2 === "hue-rotate") {
            filtersGroup += `${property2}(${value}deg) `;
          } else if (property2 === "blur") {
            filtersGroup += `${property2}(${value}px) `;
          } else
            filtersGroup += `${property2}(${value}%) `;
        } else if (typeof specialValues[property2] === "function") {
          combineStyles += specialValues[property2](value);
        } else {
          combineStyles += `${property2}: ${value};`;
        }
      }
    });
    if (transform.length) {
      let transformStyleString = "";
      let originStyleString = "";
      const perspectiveOrigin = {};
      transform.forEach((transformProperty) => {
        const property2 = transformProperty.property || "translate";
        const currentPropertyValues = transformProperty[property2];
        for (const propertyName in currentPropertyValues) {
          if (property2 === "transform-origin") {
            originStyleString += `${currentPropertyValues[propertyName]} `;
          } else if (property2 === "perspective") {
            if (propertyName === "perspective_value") {
              transformStyleString += `perspective(${currentPropertyValues[propertyName]}) `;
            }
            if (propertyName === "perspective_origin_x_axis") {
              perspectiveOrigin.x = `${currentPropertyValues[propertyName]}`;
            }
            if (propertyName === "perspective_origin_y_axis") {
              perspectiveOrigin.y = `${currentPropertyValues[propertyName]}`;
            }
          } else {
            transformStyleString += `${propertyName}(${currentPropertyValues[propertyName]}) `;
          }
        }
      });
      if (transformStyleString) {
        combineStyles += `-webkit-transform: ${transformStyleString};-ms-transform: ${transformStyleString};transform: ${transformStyleString};`;
      }
      if (originStyleString) {
        combineStyles += `-webkit-transform-origin: ${originStyleString}; transform-origin: ${originStyleString};`;
      }
      if (perspectiveOrigin.y !== void 0 || perspectiveOrigin.x !== void 0) {
        const xAxis = perspectiveOrigin.x !== void 0 ? perspectiveOrigin.x : "50%";
        const yAxis = perspectiveOrigin.y !== void 0 ? perspectiveOrigin.y : "50%";
        combineStyles += `-ms-perspective-origin: ${xAxis} ${yAxis}; -moz-perspective-origin: ${xAxis} ${yAxis}; -webkit-perspective-origin: ${xAxis} ${yAxis}; perspective-origin: ${xAxis} ${yAxis};`;
      }
    }
    if (transformOriginX || transformOriginY || transformOriginZ) {
      const originX = transformOriginX || "50%";
      const originY = transformOriginY || "50%";
      const originZ = transformOriginZ || "0";
      combineStyles += `transform-origin: ${originX} ${originY} ${originZ};-webkit-transform-origin: ${originX} ${originY} ${originZ};`;
    }
    if (backgroundGradient) {
      const gradientConfig = getGradientCss(backgroundGradient);
      if (gradientConfig) {
        backgroundImageConfig.push(gradientConfig);
      }
    }
    if (backgroundImage) {
      backgroundImageConfig.push(`url(${backgroundImage})`);
    }
    if (backgroundPositionX || backgroundPositionY) {
      const xPosition = backgroundPositionX || "50%";
      const yPosition = backgroundPositionY || "50%";
      combineStyles += `background-position: ${xPosition} ${yPosition};`;
    }
    if (backgroundImageConfig.length > 0) {
      combineStyles += `background-image: ${backgroundImageConfig.join(", ")};`;
    }
    if (backgroundSize && backgroundSize !== "custom") {
      combineStyles += `background-size: ${backgroundSize};`;
    } else if (backgroundSize === "custom") {
      const { x, y } = backgroundSizeUnits;
      if (x || y) {
        const { x: x2 = "auto", y: y2 = "auto" } = backgroundSizeUnits;
        combineStyles += `background-size: ${x2} ${y2};`;
      }
    }
    if (textDecoration) {
      const textDecorationValue = [];
      if (textDecoration.includes("underline")) {
        textDecorationValue.push("underline");
      }
      if (textDecoration.includes("line-through")) {
        textDecorationValue.push("line-through");
      }
      if (textDecorationValue.length > 0) {
        const textDecorationValueString = textDecorationValue.join(" ");
        combineStyles += `text-decoration: ${textDecorationValueString};`;
      }
      if (textDecoration.includes("italic")) {
        combineStyles += `font-style: italic;`;
      }
    }
    const shadow = compileShadow(textShadow);
    if (shadow) {
      combineStyles += `text-shadow: ${shadow};`;
    }
    const borderStyles = compileBorder(border);
    if (borderStyles) {
      combineStyles += borderStyles;
    }
    const borderRadiusStyles = compileBorderRadius(borderRadius);
    if (borderRadiusStyles) {
      combineStyles += borderRadiusStyles;
    }
    const transformGroup = {};
    if (filtersGroup.length) {
      combineStyles += `-webkit-filter: ${filtersGroup};filter: ${filtersGroup};`;
    }
    if (transformGroup["x"] !== void 0 || transformGroup["y"] !== void 0 || transformGroup["z"] !== void 0) {
      const xAxis = transformGroup["x"] !== void 0 ? transformGroup["x"] : "50%";
      const yAxis = transformGroup["y"] !== void 0 ? transformGroup["y"] : "50%";
      const zAxis = transformGroup["z"] !== void 0 ? transformGroup["z"] : "";
      combineStyles += `-webkit-transform-origin: ${xAxis} ${yAxis} ${zAxis}; transform-origin: ${xAxis} ${yAxis} ${zAxis};`;
    }
    if (boxShadow) {
      const shadow2 = compileShadow(boxShadow);
      if (shadow2) {
        combineStyles += `box-shadow: ${shadow2};`;
      }
    }
    if (transitionDuration) {
      const delayCompiled = transitionDelay !== 0 ? `${transitionDelay}ms` : "";
      combineStyles += `transition: ${transitionProperty} ${transitionDuration}ms ${transitionTimingFunction} ${delayCompiled};`;
    }
    return combineStyles;
  }
  function getGradientCss(config) {
    const gradient = [];
    let position;
    config.forEach((element) => {
      const colors = [];
      const colorsCopy = [...element.colors].sort((a, b) => {
        return a.position > b.position ? 1 : -1;
      });
      colorsCopy.forEach((color) => {
        colors.push(`${color.color} ${color.position}%`);
      });
      if (element.type === "radial") {
        const { x, y } = element.position || {
          x: 50,
          y: 50
        };
        position = `circle at ${x}% ${y}%`;
      } else {
        position = `${element.angle}deg`;
      }
      gradient.push(`${element.type}-gradient(${position}, ${colors.join(", ")})`);
    });
    gradient.reverse();
    return gradient.join(", ");
  }
  function compileShadow(textShadowValue) {
    let { "offset-x": offsetX, "offset-y": offsetY } = textShadowValue;
    const { blur, spread, color, inset } = textShadowValue;
    if (offsetX || offsetY || blur || spread || color || inset) {
      offsetX = offsetX || 0;
      offsetY = offsetY || 0;
      const shadowList = [offsetX, offsetY];
      if (blur) {
        shadowList.push(blur);
      }
      if (spread) {
        shadowList.push(spread);
      }
      if (color) {
        shadowList.push(color);
      }
      if (inset) {
        shadowList.push("inset");
      }
      return shadowList.join(" ");
    }
    return null;
  }
  function compileFontTab(styleValues) {
    let css = "";
    const _a = styleValues, {
      "font-display": fontDisplayGroup = {},
      "font-style": fontStyleGroup = {},
      "font-typography": fontTypography,
      "text-shadow": textShadow
    } = _a, dynamicValues = __objRest(_a, [
      "font-display",
      "font-style",
      "font-typography",
      "text-shadow"
    ]);
    const _b = fontStyleGroup, { "text-decoration": textDecoration } = _b, remainingFontStyleGroup = __objRest(_b, ["text-decoration"]);
    const keyValueProperties = __spreadValues(__spreadValues({}, dynamicValues), remainingFontStyleGroup);
    const { "line-height": lineHeight, "letter-spacing": letterSpacing } = fontDisplayGroup;
    if (fontTypography) {
      const { "font-family": fontFamily, "font-settings": fontSettings } = fontTypography;
      if (fontFamily) {
        css += `font-family: ${fontFamily};`;
      }
      if (fontSettings) {
        const _c = fontSettings, { "font-size": fontSize } = _c, remainingProperties = __objRest(_c, ["font-size"]);
        if (fontSize) {
          css += `font-size: ${fontSize};`;
        }
        Object.keys(remainingProperties).forEach((cssProperty) => {
          if (remainingProperties[cssProperty]) {
            css += `${cssProperty}: ${remainingProperties[cssProperty]};`;
          }
        });
      }
    }
    if (lineHeight) {
      css += `line-height: ${lineHeight};`;
    }
    if (letterSpacing) {
      css += `letter-spacing: ${letterSpacing};`;
    }
    if (textDecoration) {
      const textDecorationValue = [];
      if (textDecoration.includes("underline")) {
        textDecorationValue.push("underline");
      }
      if (textDecoration.includes("strikethrough")) {
        textDecorationValue.push("line-through");
      }
      if (textDecorationValue.length > 0) {
        const textDecorationValueString = textDecorationValue.join(" ");
        css += `text-decoration: ${textDecorationValueString};`;
      }
      if (textDecoration.includes("italic")) {
        css += `font-style: italic;`;
      }
    }
    if (textShadow) {
      const shadow = compileShadow(textShadow);
      if (shadow) {
        css += `text-shadow: ${shadow};`;
      }
    }
    Object.keys(keyValueProperties).forEach((cssProperty) => {
      if (keyValueProperties[cssProperty]) {
        css += `${cssProperty}: ${keyValueProperties[cssProperty]};`;
      }
    });
    return css;
  }
  function compileBorder(borderValue) {
    let css = "";
    Object.keys(borderValue).forEach((borderPosition) => {
      const allBorders = borderPosition === "all";
      if (!borderValue[borderPosition]) {
        return;
      }
      const { width, color, style } = borderValue[borderPosition];
      if (!width) {
        return;
      }
      if (typeof width !== "undefined") {
        const styleValue = style || "solid";
        const colorValue = color || "";
        if (!allBorders) {
          css += `border-${borderPosition}: ${width} ${styleValue} ${colorValue};`;
        } else {
          css += `border: ${width} ${styleValue} ${colorValue};`;
        }
      }
    });
    return css;
  }
  function compileBorderRadius(borderRadiusValue) {
    let css = "";
    if (borderRadiusValue && Object.keys(borderRadiusValue).length === 0) {
      return css;
    }
    const borderTopLeft = typeof borderRadiusValue["border-top-left-radius"] !== "undefined" ? borderRadiusValue["border-top-left-radius"] : 0;
    const borderTopRight = typeof borderRadiusValue["border-top-right-radius"] !== "undefined" ? borderRadiusValue["border-top-right-radius"] : 0;
    const borderBottomLeft = typeof borderRadiusValue["border-bottom-left-radius"] !== "undefined" ? borderRadiusValue["border-bottom-left-radius"] : 0;
    const borderBottomRight = typeof borderRadiusValue["border-bottom-right-radius"] !== "undefined" ? borderRadiusValue["border-bottom-right-radius"] : 0;
    const bordersArray = [borderTopLeft, borderTopRight, borderBottomLeft, borderBottomRight];
    const equalBorders = bordersArray.every((v) => v === bordersArray[0]);
    if (equalBorders) {
      css += `border-radius: ${borderTopLeft};`;
    } else {
      css += `border-radius: ${borderTopLeft} ${borderTopRight} ${borderBottomRight} ${borderBottomLeft};`;
    }
    return css;
  }
  const UTILS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    compileFontTab,
    compileStyleTabs,
    getCssFromSelector,
    getGradientCss,
    getPseudoStyles,
    getResponsiveDeviceStyles,
    getStyles: getStyles$1,
    regenerateUIDs,
    regenerateUIDsForContent,
    removeElementID
  }, Symbol.toStringTag, { value: "Module" }));
  const { ServerRequest } = window.zb.utils;
  const serverRequest = new ServerRequest();
  const API = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    serverRequest
  }, Symbol.toStringTag, { value: "Module" }));
  const { applyFilters: applyFilters$4 } = window.zb.hooks;
  const { generateUID: generateUID$1 } = window.zb.utils;
  class ZionElement {
    constructor(elementData, parent2) {
      // Element data for DB
      __publicField(this, "element_type", "");
      __publicField(this, "content", []);
      __publicField(this, "uid", "");
      // Make it ref so we can watch it
      __publicField(this, "options", {});
      // Helpers
      __publicField(this, "renderAttributes");
      __publicField(this, "parentUID", "");
      __publicField(this, "elementDefinition");
      __publicField(this, "isHighlighted", false);
      __publicField(this, "activeElementRename", false);
      __publicField(this, "scrollTo", false);
      __publicField(this, "isCut", false);
      __publicField(this, "widgetID", "");
      __publicField(this, "loading", false);
      __publicField(this, "serverRequester", null);
      __publicField(this, "addedTime", 0);
      __publicField(this, "isWrapper", false);
      __publicField(this, "callbacks", {});
      const contentStore = useContentStore();
      const elementDefinitionStore = useElementDefinitionsStore();
      this.elementDefinition = elementDefinitionStore.getElementDefinition(elementData.element_type);
      this.isWrapper = this.elementDefinition.wrapper;
      const parsedElement = Object.assign(
        {},
        {
          uid: generateUID$1(),
          content: [],
          options: {}
        },
        elementData
      );
      const options = isPlainObject(parsedElement.options) ? parsedElement.options : {};
      if (typeof options._advanced_options !== "undefined" && !isPlainObject(parsedElement.options._advanced_options)) {
        options._advanced_options = {};
      }
      this.uid = parsedElement.uid;
      this.element_type = parsedElement.element_type;
      this.options = options;
      this.parentUID = parent2;
      this.addedTime = Date.now();
      const content = [];
      if (Array.isArray(elementData.content)) {
        elementData.content.forEach((el) => {
          const childElement = contentStore.registerElement(el, elementData.uid);
          content.push(childElement.uid);
        });
      }
      this.content = content;
      if (elementData.widget_id) {
        this.widgetID = elementData.widget_id;
      }
      this.serverRequester = this.createRequester();
    }
    get isRepeaterProvider() {
      return !!this.getOptionValue("_advanced_options.is_repeater_provider", false);
    }
    get isRepeaterConsumer() {
      return !!this.getOptionValue("_advanced_options.is_repeater_consumer", false);
    }
    get parent() {
      const contentStore = useContentStore();
      return contentStore.getElement(this.parentUID);
    }
    get name() {
      return get(this.options, "_advanced_options._element_name", this.elementDefinition.name);
    }
    set name(newName) {
      window.zb.run("editor/elements/rename", {
        elementUID: this.uid,
        newName
      });
    }
    get elementCssId() {
      let cssID = this.getOptionValue("_advanced_options._element_id", this.uid);
      cssID = applyFilters$4("zionbuilder/element/css_id", cssID, this);
      return cssID;
    }
    createRequester() {
      const request = (data, successCallback, failCallback) => {
        const parsedData = JSON.parse(
          JSON.stringify(__spreadProps(__spreadValues(__spreadValues({}, applyFilters$4("zionbuilder/server_request/element_requester_data", {}, this)), data), {
            useCache: true
          }))
        );
        return serverRequest.request(parsedData, successCallback, failCallback);
      };
      return {
        request
      };
    }
    setName(newName) {
      this.updateOptionValue("_advanced_options._element_name", newName);
    }
    getOptionValue(path, defaultValue = null) {
      return get(this.options, path, defaultValue);
    }
    updateOptionValue(path, newValue) {
      if (path) {
        update(this.options, path, () => newValue);
      } else {
        update(this, "options", () => newValue);
      }
      return this.options;
    }
    highlight() {
      const UIStore = useUIStore();
      UIStore.highlightElement(this);
    }
    unHighlight() {
      const UIStore = useUIStore();
      UIStore.unHighlightElement(this);
    }
    // Element visibility
    get isVisible() {
      return get(this.options, "_isVisible", true);
    }
    set isVisible(isVisible) {
      window.zb.run("editor/elements/set_visibility", {
        elementUID: this.uid,
        isVisible
      });
    }
    setVisibility(isVisible) {
      update(this.options, "_isVisible", () => isVisible);
    }
    get indexInParent() {
      if (this.parent) {
        return this.parent.content.indexOf(this.uid);
      }
      return 0;
    }
    delete() {
      window.zb.run("editor/elements/delete", {
        elementUID: this.uid
      });
    }
    duplicate() {
      return window.zb.run("editor/elements/duplicate", {
        element: this
      });
    }
    toJSON() {
      const contentStore = useContentStore();
      const content = this.content.map((child) => {
        const element = contentStore.getElement(child);
        return element.toJSON();
      });
      const elementData = {
        uid: this.uid,
        content,
        element_type: this.element_type,
        options: this.options
      };
      if (this.widgetID) {
        elementData.widget_id = this.widgetID;
      }
      return JSON.parse(JSON.stringify(elementData));
    }
    wrapIn(wrapperType = "container") {
      window.zb.run("editor/elements/wrap_element", {
        wrapperType,
        element: this
      });
    }
    replaceChild(oldElement, newElement) {
      var _a;
      const index2 = this.content.indexOf(oldElement.uid);
      if (newElement.parent) {
        pull$1((_a = newElement.parent) == null ? void 0 : _a.content, newElement.uid);
      }
      newElement.parentUID = this.uid;
      this.content.splice(index2, 1, newElement.uid);
    }
    addChild(element, index2 = -1) {
      let elementInstance = null;
      if (element instanceof ZionElement) {
        elementInstance = element;
      } else {
        const contentStore = useContentStore();
        elementInstance = contentStore.registerElement(element, this.uid);
      }
      index2 = index2 === -1 ? this.content.length : index2;
      elementInstance.parentUID = this.uid;
      this.content.splice(index2, 0, elementInstance.uid);
      return elementInstance;
    }
    move(newParent, index2 = -1) {
      if (!this.parent) {
        return;
      }
      this.parent.removeChild(this);
      newParent.addChild(this, index2);
    }
    addChildren(elements, index2 = -1) {
      const addedElements = [];
      forEach(elements, (element) => {
        addedElements.push(this.addChild(element, index2));
        index2 = index2 !== -1 ? index2 + 1 : index2;
      });
      return addedElements;
    }
    removeChild(element) {
      const index2 = this.content.indexOf(element.uid);
      this.content.splice(index2, 1);
    }
    getClone() {
      const elementAsJson = this.toJSON();
      let clonedElement = regenerateUIDs(elementAsJson);
      clonedElement = removeElementID(clonedElement);
      return clonedElement;
    }
    // Element API
    trigger(type, ...data) {
      const callbacks = this.callbacks[type] || [];
      callbacks.forEach((calback) => {
        calback(...data);
      });
    }
    on(type, callback) {
      this.callbacks[type] = this.callbacks[type] || [];
      this.callbacks[type].push(callback);
    }
    off(type, callback) {
      const callbacks = this.callbacks[type] || [];
      const callbackIndex = callbacks.indexOf(callback);
      if (callbackIndex !== -1) {
        this.callbacks[type].splice(callbackIndex, 1);
      }
    }
  }
  const useContentStore = pinia.defineStore("content", {
    state: () => {
      return {
        areas: [],
        elements: []
      };
    },
    getters: {
      contentRootElement: (state) => state.elements.find((element) => element.uid === window.ZnPbInitialData.page_id),
      getArea: (state) => (areaID) => state.areas.find((area) => area.id === areaID),
      getAreaContentAsJSON(state) {
        return (areaID) => {
          const area = state.areas.find((area2) => area2.id === areaID);
          if (area) {
            return area.element.content.map((childUID) => {
              const element = this.getElement(childUID);
              return element.toJSON();
            });
          }
          return [];
        };
      },
      getElement: (state) => (elementUID) => state.elements.find((element) => element.uid === elementUID) || null,
      getElementName() {
        return (element) => {
          const elementName = get(element.options, "_advanced_options._element_name");
          if (elementName) {
            return elementName;
          } else {
            const elementsDefinitionStore = useElementDefinitionsStore();
            const elementDefinition = elementsDefinitionStore.getElementDefinition(element.element_type);
            return elementDefinition.name;
          }
        };
      },
      getElementIndexInParent() {
        return (element) => {
          var _a;
          return (_a = element.parent) == null ? void 0 : _a.content.indexOf(element.uid);
        };
      }
    },
    actions: {
      registerArea(areaConfig, areaContent) {
        const rootElement = {
          uid: areaConfig.id,
          element_type: "contentRoot",
          content: areaContent,
          options: {}
        };
        areaConfig.element = this.registerElement(rootElement);
        const existingAreaIndex = this.areas.findIndex((area) => area.id === areaConfig.id);
        if (existingAreaIndex >= 0) {
          this.areas.splice(existingAreaIndex, 1, areaConfig);
        } else {
          this.areas.push(areaConfig);
        }
      },
      registerElement(elementConfig, parentUID = "") {
        const newElement = new ZionElement(elementConfig, parentUID);
        const existingElementIndex = this.elements.findIndex((element) => element.uid === newElement.uid);
        if (existingElementIndex >= 0) {
          this.elements.splice(existingElementIndex, 1, newElement);
        } else {
          this.elements.push(newElement);
        }
        return newElement;
      },
      clearAreaContent(areaID) {
        const areaElement = this.getElement(areaID);
        if (areaElement) {
          [...areaElement.content].forEach((elementUID) => {
            this.deleteElement(elementUID);
          });
          areaElement.content = [];
        }
      },
      deleteElement(elementUID) {
        const element = this.getElement(elementUID);
        if (element) {
          if (element.parent) {
            pull$1(element.parent.content, element.uid);
          }
          if (element.content) {
            [...element.content].forEach((childUID) => this.deleteElement(childUID));
          }
          const UIStore = useUIStore();
          if (UIStore.editedElementUID === element.uid) {
            UIStore.unEditElement();
            UIStore.unHighlightElement(element);
          }
          pull$1(this.elements, element);
        } else {
          console.log("element with uid not found");
        }
      },
      getElementValue(elementUID, path, defaultValue = null) {
        const element = this.getElement(elementUID);
        if (element) {
          return get(element, path, defaultValue);
        }
        return defaultValue;
      },
      updateElement(elementUID, path, newValue) {
        const element = this.getElement(elementUID);
        if (element) {
          set(element, path, newValue);
        }
      },
      duplicateElement(element) {
        if (!element.parent) {
          return;
        }
        const elementClone = element.getClone();
        const newElement = this.addElement(elementClone, element.parentUID, element.indexInParent + 1);
        return newElement;
      },
      addElement(elementConfig, parentUID, index2) {
        const parent2 = this.getElement(parentUID);
        if (!parent2) {
          return null;
        }
        const newElement = this.registerElement(elementConfig, parentUID);
        parent2.content.splice(index2, 0, newElement.uid);
        return newElement;
      },
      addElements(elements, parent2, index2 = -1) {
        const addedElementsUIDs = [];
        elements.forEach((element) => {
          addedElementsUIDs.push(this.addElement(element, parent2, index2));
          index2 = index2 !== -1 ? index2 + 1 : index2;
        });
        return addedElementsUIDs;
      }
    }
  });
  const { useResponsiveDevices: useResponsiveDevices$3 } = window.zb.composables;
  const useUIStore = pinia.defineStore("ui", {
    state: () => {
      const { getUserData } = useUserData();
      const UIUserData = getUserData();
      function getPanelData(panelID, extraData) {
        return Object.assign(
          {},
          {
            id: panelID,
            position: "relative",
            isDetached: false,
            isDragging: false,
            isExpanded: false,
            isActive: false,
            width: 360,
            height: null,
            group: null,
            saveOpenState: true,
            offsets: {
              posX: null,
              posY: null
            }
          },
          extraData,
          get(UIUserData, `panels.${panelID}`, {})
        );
      }
      const panels = [
        getPanelData("panel-element-options", {
          saveOpenState: false
        }),
        getPanelData("panel-global-settings", {
          saveOpenState: false
        }),
        getPanelData("preview-iframe", {
          isActive: true
        }),
        getPanelData("panel-history", {}),
        getPanelData("panel-tree", {})
      ];
      return {
        panelsOrder: get(UIUserData, "panelsOrder", [
          "panel-element-options",
          "panel-global-settings",
          "preview-iframe",
          "panel-history",
          "panel-tree"
        ]),
        panelPlaceholder: {},
        panels,
        mainBar: __spreadValues({
          position: "left",
          pointerEvents: false,
          draggingPosition: null
        }, UIUserData.mainBar || {}),
        mainBarDraggingPlaceholder: {
          top: null,
          left: null
        },
        iFrame: {
          pointerEvents: false
        },
        isLibraryOpen: false,
        isPreviewMode: false,
        loadTimestamp: 0,
        contentTimestamp: 0,
        isPreviewLoading: true,
        editedElementUID: null,
        activeElementMenu: null,
        isElementDragging: false,
        isToolboxDragging: false,
        activeAddElementPopup: null,
        libraryInsertConfig: {},
        highlightedElement: null
      };
    },
    getters: {
      openPanels: (state) => filter(state.panels, { isActive: true }) || [],
      isAnyPanelDragging: (state) => filter(state.panels, { isDragging: true }).length > 0,
      editedElement: (state) => {
        const contentStore = useContentStore();
        if (state.editedElementUID) {
          return contentStore.getElement(state.editedElementUID);
        }
        return null;
      },
      openPanelsIDs() {
        return this.openPanels.map((panel) => panel.id);
      },
      getPanel: (state) => {
        return (panelId) => state.panels.find((panel) => panel.id === panelId);
      },
      getPanelPlacement: (state) => {
        return function(panelID) {
          const iframeIndex = state.panelsOrder.indexOf("preview-iframe");
          const panelIndex = state.panelsOrder.indexOf(panelID);
          return panelIndex < iframeIndex ? "left" : "right";
        };
      },
      getPanelOrder: (state) => {
        return function(panelID) {
          const panelIndex = state.panelsOrder.indexOf(panelID);
          return panelIndex != -1 ? panelIndex * 10 : 10;
        };
      },
      getPanelIndex: (state) => {
        return function(panelID) {
          return state.panelsOrder.indexOf(panelID);
        };
      }
    },
    actions: {
      highlightElement(element) {
        if (this.editedElement === element) {
          return;
        }
        this.highlightedElement = element;
      },
      unHighlightElement(element) {
        if (this.highlightedElement === element) {
          this.highlightedElement = null;
        }
      },
      // Element dragging
      setElementDragging(newValue) {
        this.isElementDragging = newValue;
      },
      // Preview loading
      setPreviewLoading(state) {
        this.isPreviewLoading = state;
      },
      setLoadTimestamp() {
        this.loadTimestamp = Date.now();
      },
      setContentTimestamp() {
        this.contentTimestamp = Date.now();
      },
      // Element menu
      showElementMenu(element, selector, actions = {}) {
        if (this.isPreviewMode) {
          return;
        }
        this.activeElementMenu = {
          element,
          selector,
          actions,
          rand: (/* @__PURE__ */ new Date()).getMilliseconds()
        };
      },
      showElementMenuFromEvent(element, event) {
        let leftOffset = 0;
        let topOffset = 0;
        let scale = 1;
        if (event.view !== window) {
          const iframe = window.document.getElementById("znpb-editor-iframe");
          if (iframe) {
            const { left, top } = iframe.getBoundingClientRect();
            const { scaleValue } = useResponsiveDevices$3();
            scale = scaleValue.value / 100;
            leftOffset = left;
            topOffset = top;
          }
        }
        this.showElementMenu(element, {
          ownerDocument: window.document,
          getBoundingClientRect() {
            return {
              width: 0,
              height: 0,
              top: event.clientY * scale + topOffset,
              left: event.clientX * scale + leftOffset
            };
          }
        });
      },
      hideElementMenu() {
        this.activeElementMenu = null;
      },
      // Element
      editElement(element) {
        this.editedElementUID = element.uid;
        this.openPanel("panel-element-options");
      },
      unEditElement() {
        this.closePanel("panel-element-options");
        this.editedElementUID = null;
      },
      // Panels
      openPanel(panelId) {
        const panelToOpen = this.getPanel(panelId);
        if (panelToOpen) {
          if (panelToOpen.group !== null) {
            this.openPanels.forEach((panel) => {
              if (panel.group !== null && panel.group === panelToOpen.group) {
                this.closePanel(panel.id);
              }
            });
          }
          panelToOpen.isActive = true;
          if (panelToOpen.saveOpenState) {
            this.saveUI();
          }
        }
      },
      closePanel(panelId) {
        const panel = this.getPanel(panelId);
        if (panel) {
          panel.isActive = false;
          if (panel.saveOpenState) {
            this.saveUI();
          }
        }
      },
      togglePanel(panelId) {
        const panel = this.getPanel(panelId);
        if (panel) {
          panel.isActive ? this.closePanel(panel.id) : this.openPanel(panel.id);
        }
      },
      updatePanel(panelId, key, value) {
        const panel = this.getPanel(panelId);
        if (panel) {
          panel[key] = value;
        }
      },
      setPanelPlaceholder(newValue) {
        this.panelPlaceholder = newValue;
      },
      // Main bar
      setMainBarPosition(position) {
        this.mainBar.position = position;
        this.saveUI();
      },
      setIframePointerEvents(status) {
        this.iFrame.pointerEvents = status;
      },
      // Library
      openLibrary(libraryInsertConfig = {}) {
        this.isLibraryOpen = true;
        this.libraryInsertConfig = libraryInsertConfig;
      },
      closeLibrary() {
        this.isLibraryOpen = false;
        this.libraryInsertConfig = {};
      },
      toggleLibrary() {
        this.isLibraryOpen = !this.isLibraryOpen;
      },
      saveUI() {
        const { updateUserData } = useUserData();
        const uiData = {
          mainBar: {
            position: this.mainBar.position
          },
          panels: {},
          panelsOrder: this.panelsOrder
        };
        this.panels.forEach((panel) => {
          const dataToReturn = {
            isDetached: panel.isDetached,
            offsets: panel.offsets,
            width: panel.width,
            height: panel.height,
            isActive: false
          };
          if (panel.saveOpenState) {
            dataToReturn.isActive = panel.isActive;
          }
          uiData.panels[panel.id] = dataToReturn;
        });
        updateUserData(uiData);
      },
      setPreviewMode(state) {
        this.isPreviewMode = state;
      },
      showAddElementsPopup(element, event, placement = "inside") {
        if (this.activeAddElementPopup && this.activeAddElementPopup.element === element) {
          this.hideAddElementsPopup();
          return;
        }
        let leftOffset = 0;
        let topOffset = 0;
        let scale = 1;
        if (event.view !== window) {
          const iframe = window.document.getElementById("znpb-editor-iframe");
          if (iframe) {
            const { left, top } = iframe.getBoundingClientRect();
            const { scaleValue } = useResponsiveDevices$3();
            scale = scaleValue.value / 100;
            leftOffset = left;
            topOffset = top;
          }
        }
        let index2 = -1;
        if (placement === "next" && element.parent) {
          const elementUID = element.uid;
          index2 = element.parent.content.indexOf(elementUID) + 1;
          element = element.parent;
        }
        this.activeAddElementPopup = {
          element,
          selector: {
            ownerDocument: window.document,
            getBoundingClientRect() {
              return {
                width: 0,
                height: 0,
                top: event.clientY * scale + topOffset,
                left: event.clientX * scale + leftOffset
              };
            }
          },
          index: index2,
          key: Math.random()
        };
      },
      hideAddElementsPopup() {
        this.activeAddElementPopup = null;
      }
    }
  });
  const usePageSettingsStore = pinia.defineStore("pageSettings", {
    state: () => {
      return {
        settings: {}
      };
    },
    actions: {
      updatePageSettings(newValues2) {
        this.settings = newValues2;
      },
      unsetPageSettings() {
        this.settings = {};
      }
    }
  });
  const { generateUID } = window.zb.utils;
  const useCSSClassesStore = pinia.defineStore("CSSClasses", {
    state: () => {
      return {
        CSSClasses: [],
        copiedStyles: null,
        staticClasses: []
      };
    },
    getters: {
      getClassesByFilter: (state) => {
        return (keyword) => {
          const keyToLower = keyword.toLowerCase();
          return state.CSSClasses.filter(
            (cssClass) => cssClass.name.toLowerCase().indexOf(keyToLower) !== -1 || cssClass.id.toLowerCase().indexOf(keyToLower) !== -1
          );
        };
      },
      getStaticClassesByFilter: (state) => {
        return (keyword) => {
          const keyToLower = keyword.toLowerCase();
          return state.staticClasses.filter(
            (cssClass) => cssClass.toLowerCase().indexOf(keyToLower) !== -1 || cssClass.toLowerCase().indexOf(keyToLower) !== -1
          );
        };
      },
      getClassConfig: (state) => {
        return (classId) => state.CSSClasses.find((classConfig) => classConfig.uid === classId || classConfig.id === classId);
      },
      getSelectorName() {
        return (class_uid_or_selector) => {
          const config = this.getClassConfig(class_uid_or_selector);
          if (config) {
            return config.id;
          }
          return null;
        };
      },
      getStylesConfig() {
        return (classId) => {
          const config = this.getClassConfig(classId);
          if (!config) {
            alert(`class with id ${classId} not found`);
          }
          return config.styles || {};
        };
      }
    },
    actions: {
      addCSSClass(config) {
        const classToAdd = __spreadValues({}, config);
        classToAdd.uid = config.uid || generateUID();
        this.CSSClasses.push(classToAdd);
        return classToAdd;
      },
      removeCSSClass(cssClass) {
        const cssClassIndex = this.CSSClasses.indexOf(cssClass);
        this.CSSClasses.splice(cssClassIndex, 1);
      },
      updateCSSClass(classId, newValues2) {
        const editedClass = this.getClassConfig(classId);
        if (!editedClass) {
          console.warn("could not find class with config ", { classId, newValues: newValues2 });
          return;
        }
        const cssClassIndex = this.CSSClasses.indexOf(editedClass);
        this.CSSClasses[cssClassIndex] = newValues2;
      },
      removeAllCssClasses() {
        this.CSSClasses = [];
      },
      setCSSClasses(newValue) {
        this.CSSClasses = newValue;
      },
      setStaticClasses(classes) {
        this.staticClasses = classes;
      },
      copyClassStyles(styles) {
        this.copiedStyles = cloneDeep(styles);
      },
      pasteClassStyles(classId) {
        const oldStyles = this.getStylesConfig(classId);
        const mergedStyles = merge$1(oldStyles || {}, cloneDeep(this.copiedStyles));
        const editedClass = this.getClassConfig(classId);
        if (!editedClass) {
          console.warn("could not find class with config ", { classId, newValues });
          return;
        }
        const cssClassIndex = this.CSSClasses.indexOf(editedClass);
        const updatedValues = __spreadProps(__spreadValues({}, editedClass), {
          styles: mergedStyles
        });
        this.CSSClasses[cssClassIndex] = updatedValues;
      }
    }
  });
  const useUserStore = pinia.defineStore("user", {
    state: () => {
      return {
        lockedUserInfo: null,
        permissions: window.ZnPbInitialData.user_permissions
      };
    },
    getters: {
      isPostLocked: (state) => state.lockedUserInfo && !!state.lockedUserInfo.message,
      userCanEditContent: (state) => !state.permissions.only_content
    },
    actions: {
      setPostLock(lockData) {
        this.lockedUserInfo = lockData;
      },
      takeOverPost() {
        this.lockedUserInfo = {};
      }
    }
  });
  const useHistoryStore = pinia.defineStore("history", {
    state: () => {
      return {
        state: [],
        activeHistoryIndex: -1,
        isDirty: false
      };
    },
    getters: {
      canUndo: (state) => {
        return state.activeHistoryIndex > 0;
      },
      canRedo: (state) => {
        return state.activeHistoryIndex < state.state.length - 1;
      }
    },
    actions: {
      addHistoryItem(item) {
        if (this.state.length === 0) {
          this.state.push({
            title: i18n__namespace.__("Editing started", "zionbuilder")
          });
          this.activeHistoryIndex++;
        }
        this.activeHistoryIndex += 1;
        if (this.activeHistoryIndex !== this.state.length) {
          const itemsToRemove = this.state.length - this.activeHistoryIndex;
          this.state.splice(this.activeHistoryIndex, itemsToRemove, item);
        } else {
          this.state.push(item);
        }
        this.isDirty = true;
      },
      addHistoryItemDebounced: debounce(function(item) {
        this.addHistoryItem(item);
      }, 800),
      undo() {
        if (this.activeHistoryIndex - 1 >= 0) {
          const newHistoryIndex = this.activeHistoryIndex - 1;
          this.restoreHistoryToIndex(newHistoryIndex);
          this.isDirty = true;
        }
      },
      redo() {
        const newHistoryIndex = this.activeHistoryIndex + 1;
        if (newHistoryIndex < this.state.length) {
          this.restoreHistoryToIndex(newHistoryIndex);
          this.isDirty = true;
        }
      },
      restoreHistoryToIndex(newHistoryIndex) {
        if (newHistoryIndex === this.activeHistoryIndex) {
          return;
        }
        if (newHistoryIndex < this.activeHistoryIndex) {
          for (let i = this.activeHistoryIndex; i > newHistoryIndex; i--) {
            const historyItem = this.state[i];
            if (historyItem.undo) {
              historyItem.undo(historyItem);
            }
          }
        } else if (newHistoryIndex > this.activeHistoryIndex) {
          const historyForRestore = this.state.slice(this.activeHistoryIndex + 1, newHistoryIndex + 1);
          historyForRestore.forEach((historyItem) => {
            if (historyItem.redo) {
              historyItem.redo(historyItem);
            }
          });
        }
        this.activeHistoryIndex = newHistoryIndex;
        this.isDirty = true;
      }
    }
  });
  const STORE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    useCSSClassesStore,
    useContentStore,
    useElementDefinitionsStore,
    useHistoryStore,
    usePageSettingsStore,
    useUIStore,
    useUserStore
  }, Symbol.toStringTag, { value: "Module" }));
  const _hoisted_1$18 = { class: "znpb-element-form__wp_widget" };
  const _hoisted_2$M = {
    key: 0,
    class: "znpb-element-form__wp_widget-loading"
  };
  const _hoisted_3$y = ["innerHTML"];
  const _sfc_main$1t = /* @__PURE__ */ Vue.defineComponent({
    __name: "WPWidget",
    props: {
      value: { default: () => {
        return {};
      } },
      element_type: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const { getOptionsForm } = window.zb.api;
      const UIStore = useUIStore();
      const form = Vue.ref(null);
      const loading = Vue.ref(true);
      const optionsFormContent = Vue.ref("");
      Vue.watch(
        () => UIStore.editedElement,
        () => {
          refreshOptionsForm();
        }
      );
      function refreshOptionsForm() {
        getOptionsForm(UIStore.editedElement).then((response) => {
          optionsFormContent.value = response.data.form;
          loading.value = false;
          const wp2 = window.wp;
          const jQuery = window.jQuery;
          Vue.nextTick(() => {
            if (wp2.textWidgets) {
              const widgetContainer = jQuery(form.value);
              const event = new jQuery.Event("widget-added");
              widgetContainer.addClass("open");
              wp2.textWidgets.handleWidgetAdded(event, widgetContainer);
              wp2.mediaWidgets.handleWidgetAdded(event, widgetContainer);
              if (wp2.customHtmlWidgets) {
                wp2.customHtmlWidgets.handleWidgetAdded(event, widgetContainer);
              }
              jQuery(":input", jQuery(form.value)).on("input", onInputChange);
              jQuery(":input", jQuery(form.value)).on("change", onInputChange);
            }
          });
        });
      }
      refreshOptionsForm();
      function onInputChange() {
        const widgetId = `widget-${props.element_type}`;
        const formData = serialize(form.value);
        emit("update:modelValue", formData[widgetId]["ZION_BUILDER_PLACEHOLDER_ID"]);
      }
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$18, [
          loading.value ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_2$M, Vue.toDisplayString(i18n__namespace.__("Loading", "zionbuilder")), 1)) : (Vue.openBlock(), Vue.createElementBlock("form", {
            key: 1,
            ref_key: "form",
            ref: form,
            innerHTML: optionsFormContent.value
          }, null, 8, _hoisted_3$y))
        ]);
      };
    }
  });
  const WPWidget_vue_vue_type_style_index_0_lang = "";
  const WPWidget = {
    id: "wp_widget",
    component: _sfc_main$1t
  };
  const _sfc_main$1s = /* @__PURE__ */ Vue.defineComponent({
    __name: "TabGroup",
    props: {
      modelValue: { default: () => {
        return {};
      } },
      child_options: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const activeTab = Vue.ref("");
      const keys2 = Object.keys(props.child_options);
      activeTab.value = keys2[0];
      const valueModel = Vue.computed({
        get: () => {
          return typeof (props.modelValue || {})[activeTab.value] !== "undefined" ? (props.modelValue || {})[activeTab.value] || {} : {};
        },
        set: (newValue) => {
          const newValues2 = __spreadProps(__spreadValues({}, props.modelValue), {
            [activeTab.value]: newValue
          });
          if (null === newValue) {
            delete newValues2[activeTab.value];
          }
          emit("update:modelValue", newValues2);
        }
      });
      return (_ctx, _cache) => {
        const _component_OptionsForm = Vue.resolveComponent("OptionsForm");
        const _component_Tab = Vue.resolveComponent("Tab");
        const _component_Tabs = Vue.resolveComponent("Tabs");
        return Vue.openBlock(), Vue.createBlock(_component_Tabs, {
          activeTab: activeTab.value,
          "onUpdate:activeTab": _cache[1] || (_cache[1] = ($event) => activeTab.value = $event),
          "tab-style": "group",
          class: "znpb-options__tab"
        }, {
          default: Vue.withCtx(() => [
            (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.child_options, (tabConfig, tabId2) => {
              return Vue.openBlock(), Vue.createBlock(_component_Tab, {
                id: tabId2,
                key: tabId2,
                name: tabConfig.title
              }, {
                default: Vue.withCtx(() => [
                  Vue.createVNode(_component_OptionsForm, {
                    modelValue: valueModel.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => valueModel.value = $event),
                    schema: _ctx.child_options[tabId2].child_options
                  }, null, 8, ["modelValue", "schema"])
                ]),
                _: 2
              }, 1032, ["id", "name"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["activeTab"]);
      };
    }
  });
  const TabGroup_vue_vue_type_style_index_0_lang = "";
  const TabGroup = {
    id: "tabs",
    component: _sfc_main$1s,
    config: {
      // Can be one of the following
      barebone: true
    }
  };
  const _hoisted_1$17 = ["onClick"];
  const _hoisted_2$L = { class: "znpb-element-options__pseudo-actions" };
  const _sfc_main$1r = /* @__PURE__ */ Vue.defineComponent({
    __name: "PseudoDropdownItem",
    props: {
      selector: {},
      selectorsModel: { default: () => ({}) },
      clearable: { type: Boolean, default: false }
    },
    emits: ["delete-selector", "selector-selected", "remove-styles"],
    setup(__props, { emit }) {
      const props = __props;
      const selectorsModelComputed = Vue.computed(() => props.selectorsModel || {});
      const hasChanges = Vue.computed(() => Object.keys(selectorsModelComputed.value[props.selector.id] || {}).length > 0);
      function onDeleteSelector() {
        emit("delete-selector", props.selector);
        emit("selector-selected", null);
      }
      function onSelectorSelected() {
        emit("selector-selected", props.selector);
      }
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_Tooltip = Vue.resolveComponent("Tooltip");
        const _component_ChangesBullet = Vue.resolveComponent("ChangesBullet");
        return Vue.openBlock(), Vue.createElementBlock("div", {
          class: "znpb-element-options__media-class-pseudo-selector",
          onClick: Vue.withModifiers(onSelectorSelected, ["stop"])
        }, [
          Vue.createTextVNode(Vue.toDisplayString(_ctx.selector.name) + " ", 1),
          Vue.createElementVNode("div", _hoisted_2$L, [
            _ctx.clearable ? (Vue.openBlock(), Vue.createBlock(_component_Tooltip, {
              key: 0,
              content: "Delete Pseudo Selector",
              tag: "span"
            }, {
              default: Vue.withCtx(() => [
                Vue.createVNode(_component_Icon, {
                  icon: "delete",
                  onClick: Vue.withModifiers(onDeleteSelector, ["stop"])
                }, null, 8, ["onClick"])
              ]),
              _: 1
            })) : Vue.createCommentVNode("", true),
            hasChanges.value ? (Vue.openBlock(), Vue.createBlock(_component_ChangesBullet, {
              key: 1,
              onRemoveStyles: _cache[0] || (_cache[0] = ($event) => emit("remove-styles", _ctx.selector.id))
            })) : Vue.createCommentVNode("", true)
          ]),
          _ctx.selector.label ? (Vue.openBlock(), Vue.createBlock(_sfc_main$1E, {
            key: 0,
            text: _ctx.selector.label.text,
            type: _ctx.selector.label.type,
            class: "znpb-label--pro"
          }, null, 8, ["text", "type"])) : Vue.createCommentVNode("", true)
        ], 8, _hoisted_1$17);
      };
    }
  });
  const PseudoDropdownItem_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$16 = { class: "znpb-element-options__media-class-pseudo-name" };
  const _hoisted_2$K = { class: "znpb-element-options__media-class-pseudo-selector-list hg-popper-list" };
  const _sfc_main$1q = /* @__PURE__ */ Vue.defineComponent({
    __name: "PseudoSelectors",
    props: {
      modelValue: {
        type: [Object, Array],
        required: false,
        default: {}
      }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const { useResponsiveDevices: useResponsiveDevices2, usePseudoSelectors: usePseudoSelectors2 } = window.zb.composables;
      const { activeResponsiveDeviceInfo: activeResponsiveDeviceInfo2 } = useResponsiveDevices2();
      const { pseudoSelectors, activePseudoSelector, setActivePseudoSelector, deleteCustomSelector, addCustomSelector } = usePseudoSelectors2();
      const root2 = Vue.ref(null);
      const pseudoNameInputRef = Vue.ref(null);
      const pseudoContentInput = Vue.ref(null);
      const contentOpen = Vue.ref(false);
      const selectorIsOpen = Vue.ref(false);
      const showContentTooltip = Vue.ref(false);
      const newPseudoName = Vue.ref(false);
      const customPseudoName = Vue.ref("");
      const hasContent = Vue.computed(
        () => activePseudoSelector.value.id === ":before" || activePseudoSelector.value.id === ":after"
      );
      const activePseudoSelectors = Vue.computed(() => (props.modelValue || {})[activeResponsiveDeviceInfo2.value.id] || {});
      const pseudoStyles = Vue.computed(() => (activePseudoSelectors.value || {})[activePseudoSelector.value.id] || {});
      const pseudoContentModel = Vue.computed({
        get() {
          return pseudoStyles.value.content || "";
        },
        set(newValue) {
          const cloneModelValue = cloneDeep(props.modelValue);
          const newValues2 = set(
            cloneModelValue,
            `${activeResponsiveDeviceInfo2.value.id}.${activePseudoSelector.value.id}.content`,
            newValue
          );
          emit("update:modelValue", newValues2);
        }
      });
      const computedPseudoSelectors = Vue.computed(() => {
        const savedSelectors = Object.keys(activePseudoSelectors.value);
        const customSelectors = savedSelectors.filter((selector) => {
          return !find$1(pseudoSelectors.value, ["id", selector]);
        });
        return [
          ...pseudoSelectors.value,
          ...customSelectors.map((selector) => {
            return {
              name: selector,
              id: selector,
              canBeDeleted: true
            };
          })
        ];
      });
      function onPseudoSelectorSelected(pseudoConfig) {
        selectorIsOpen.value = false;
        setActivePseudoSelector(pseudoConfig || pseudoSelectors.value[0]);
        if (activePseudoSelector.value.id === "custom") {
          newPseudoName.value = true;
        }
        if (pseudoContentModel.value === "" && (activePseudoSelector.value.id === "before" || activePseudoSelector.value.id === "after")) {
          showContentTooltip.value = false;
          contentOpen.value = true;
        }
      }
      function createNewPseudoSelector() {
        newPseudoName.value = false;
        const newSel = {
          id: customPseudoName.value,
          name: customPseudoName.value,
          canBeDeleted: true
        };
        addCustomSelector(newSel);
        setActivePseudoSelector(newSel);
      }
      function closePanel(event) {
        if (!root2.value.contains(event.target)) {
          contentOpen.value = false;
          selectorIsOpen.value = false;
          newPseudoName.value = false;
        }
      }
      function deleteConfigForPseudoSelector(pseudoSelectorId) {
        const newValues2 = __spreadProps(__spreadValues({}, props.modelValue), {
          [activeResponsiveDeviceInfo2.value.id]: __spreadValues({}, props.modelValue[activeResponsiveDeviceInfo2.value.id])
        });
        delete newValues2[activeResponsiveDeviceInfo2.value.id][pseudoSelectorId];
        if (Object.keys(newValues2[activeResponsiveDeviceInfo2.value.id] || {}).length === 0) {
          delete newValues2[activeResponsiveDeviceInfo2.value.id];
        }
        emit("update:modelValue", newValues2);
      }
      function deletePseudoSelectorAndStyles(selector) {
        deleteConfigForPseudoSelector(selector.id);
        deleteCustomSelector(selector);
      }
      Vue.onBeforeUnmount(() => {
        setActivePseudoSelector(null);
      });
      const newPseudoModel = Vue.computed({
        get() {
          return customPseudoName.value;
        },
        set(newVal) {
          customPseudoName.value = newVal.split(" ").join("").toLowerCase();
        }
      });
      Vue.watch(hasContent, (newValue) => {
        if (newValue) {
          showContentTooltip.value = true;
          setTimeout(() => {
            showContentTooltip.value = false;
          }, 2e3);
        }
      });
      Vue.watch(selectorIsOpen, (newValue) => {
        if (newValue) {
          document.addEventListener("click", closePanel);
        } else {
          document.removeEventListener("click", closePanel);
        }
      });
      Vue.watch(contentOpen, (newValue) => {
        if (!pseudoContentInput.value) {
          return;
        }
        if (newValue) {
          Vue.nextTick(() => pseudoContentInput.value.focus());
          document.addEventListener("click", closePanel);
        } else {
          pseudoContentInput.value.blur();
          document.removeEventListener("click", closePanel);
        }
      });
      Vue.watch(pseudoNameInputRef, (newValue) => {
        if (!pseudoNameInputRef.value) {
          return;
        }
        if (newValue) {
          Vue.nextTick(() => pseudoNameInputRef.value.focus());
          document.addEventListener("click", closePanel);
        } else {
          pseudoNameInputRef.value.blur();
          document.removeEventListener("click", closePanel);
        }
      });
      Vue.onBeforeUnmount(() => {
        document.removeEventListener("click", closePanel);
      });
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_Tooltip = Vue.resolveComponent("Tooltip");
        const _component_BaseInput = Vue.resolveComponent("BaseInput");
        const _directive_znpb_tooltip = Vue.resolveDirective("znpb-tooltip");
        return Vue.openBlock(), Vue.createElementBlock("div", {
          ref_key: "root",
          ref: root2,
          class: "znpb-element-options__media-class-pseudo-holder",
          onClick: _cache[6] || (_cache[6] = ($event) => (selectorIsOpen.value = !selectorIsOpen.value, contentOpen.value = false, newPseudoName.value = false))
        }, [
          Vue.createElementVNode("span", _hoisted_1$16, Vue.toDisplayString(Vue.unref(activePseudoSelector).name), 1),
          hasContent.value ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(_component_Icon, {
            key: 0,
            icon: "edit",
            size: 12,
            class: "znpb-pseudo-selector__edit",
            onClick: _cache[0] || (_cache[0] = Vue.withModifiers(($event) => (contentOpen.value = !contentOpen.value, selectorIsOpen.value = false), ["stop"]))
          }, null, 512)), [
            [_directive_znpb_tooltip, i18n__namespace.__("Click to add content for pseudo selector.", "zionbuilder")]
          ]) : Vue.createCommentVNode("", true),
          Vue.createVNode(_component_Tooltip, {
            "show-arrows": false,
            show: selectorIsOpen.value,
            trigger: null,
            "append-to": "element",
            placement: "bottom-end",
            "tooltip-class": "hg-popper--no-padding znpb-element-options__media-class-pseudo-selector-dropdown"
          }, {
            content: Vue.withCtx(() => [
              Vue.createElementVNode("div", _hoisted_2$K, [
                (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(computedPseudoSelectors.value, (selectorConfig, index2) => {
                  return Vue.openBlock(), Vue.createBlock(_sfc_main$1r, {
                    key: index2,
                    selector: selectorConfig,
                    "selectors-model": activePseudoSelectors.value,
                    clearable: selectorConfig.canBeDeleted,
                    class: "hg-popper-list__item",
                    onRemoveStyles: deleteConfigForPseudoSelector,
                    onSelectorSelected: onPseudoSelectorSelected,
                    onDeleteSelector: deletePseudoSelectorAndStyles
                  }, null, 8, ["selector", "selectors-model", "clearable"]);
                }), 128))
              ])
            ]),
            default: Vue.withCtx(() => [
              Vue.createElementVNode("div", {
                class: Vue.normalizeClass(["znpb-element-options__media-class-pseudo-title", {
                  "znpb-element-options__media-class-pseudo-title--has-edit": Vue.unref(activePseudoSelector).id === ":before" || Vue.unref(activePseudoSelector).id === ":after"
                }])
              }, [
                Vue.createVNode(_component_Icon, {
                  icon: "select",
                  rotate: selectorIsOpen.value ? 180 : null
                }, null, 8, ["rotate"])
              ], 2)
            ]),
            _: 1
          }, 8, ["show"]),
          contentOpen.value ? (Vue.openBlock(), Vue.createElementBlock("div", {
            key: 1,
            class: "znpb-element-options__media-class-pseudo-title__before-after-content",
            onClick: _cache[3] || (_cache[3] = Vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            Vue.createVNode(_component_BaseInput, {
              ref_key: "pseudoContentInput",
              ref: pseudoContentInput,
              modelValue: pseudoContentModel.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => pseudoContentModel.value = $event),
              clearable: true,
              placeholder: `Insert text ${Vue.unref(activePseudoSelector).id} content`,
              onKeypress: _cache[2] || (_cache[2] = Vue.withKeys(($event) => contentOpen.value = false, ["enter"]))
            }, null, 8, ["modelValue", "placeholder"])
          ])) : Vue.createCommentVNode("", true),
          newPseudoName.value ? (Vue.openBlock(), Vue.createElementBlock("div", {
            key: 2,
            class: "znpb-element-options__media-class-pseudo-title__before-after-content",
            onClick: _cache[5] || (_cache[5] = Vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            Vue.createVNode(_component_BaseInput, {
              ref_key: "pseudoNameInputRef",
              ref: pseudoNameInputRef,
              modelValue: newPseudoModel.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => newPseudoModel.value = $event),
              clearable: true,
              placeholder: i18n__namespace.__("Add new pseudo-selector ex: :hover::before ", "zionbuilder"),
              onKeypress: Vue.withKeys(createNewPseudoSelector, ["enter"])
            }, null, 8, ["modelValue", "placeholder", "onKeypress"])
          ])) : Vue.createCommentVNode("", true)
        ], 512);
      };
    }
  });
  const PseudoSelectors_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$15 = { class: "znpb-element-styles__wrapper" };
  const _hoisted_2$J = {
    key: 0,
    class: "znpb-elementStylesStateWrapper"
  };
  const _hoisted_3$x = { class: "znpb-elementStylesStateTitle" };
  const _sfc_main$1p = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementStyles",
    props: {
      modelValue: { default: () => ({}) },
      allow_class_assignments: { type: Boolean, default: true },
      elementStyleId: { default: "" },
      showPseudoSelector: { type: Boolean, default: false },
      title: { default: "" },
      selector: { default: "" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const { useOptionsSchemas: useOptionsSchemas2 } = window.zb.composables;
      const computedStyles = Vue.computed({
        get() {
          return props.modelValue.styles;
        },
        set(newValue) {
          updateValues("styles", newValue);
        }
      });
      const { getSchema } = useOptionsSchemas2();
      function updateValues(type, newValue) {
        const clonedValue = __spreadValues({}, props.modelValue);
        if (newValue === null && typeof clonedValue[type]) {
          delete clonedValue[type];
        } else {
          clonedValue[type] = newValue;
        }
        emit("update:modelValue", clonedValue);
      }
      const ElementOptionsPanelAPI = Vue.inject("ElementOptionsPanelAPI", null);
      Vue.onMounted(() => {
        if (ElementOptionsPanelAPI && props.elementStyleId) {
          ElementOptionsPanelAPI.setActiveStyleElementId(props.elementStyleId);
        }
      });
      Vue.onBeforeUnmount(() => {
        if (ElementOptionsPanelAPI && props.elementStyleId) {
          ElementOptionsPanelAPI.resetActiveSelectorConfig();
        }
      });
      return (_ctx, _cache) => {
        const _component_OptionsForm = Vue.resolveComponent("OptionsForm");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$15, [
          _ctx.showPseudoSelector ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_2$J, [
            Vue.createElementVNode("span", _hoisted_3$x, Vue.toDisplayString(i18n__namespace.__("State:", "zionbuilder")), 1),
            Vue.createVNode(_sfc_main$1q, {
              modelValue: computedStyles.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedStyles.value = $event)
            }, null, 8, ["modelValue"])
          ])) : Vue.createCommentVNode("", true),
          Vue.createVNode(_component_OptionsForm, {
            modelValue: computedStyles.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => computedStyles.value = $event),
            schema: Vue.unref(getSchema)("element_styles"),
            class: "znpb-element-styles-option__options-wrapper"
          }, null, 8, ["modelValue", "schema"])
        ]);
      };
    }
  });
  const ElementStyles_vue_vue_type_style_index_0_lang = "";
  const ElementStyles = {
    id: "element_styles",
    component: _sfc_main$1p,
    config: {
      barebone: true
    }
  };
  const scriptRel = "modulepreload";
  const assetsURL = function(dep) {
    return "/" + dep;
  };
  const seen = {};
  const __vitePreload = function preload(baseModule, deps, importerUrl) {
    if (true) {
      return baseModule();
    }
    const links = document.getElementsByTagName("link");
    return Promise.all(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      const isBaseRelative = !!importerUrl;
      if (isBaseRelative) {
        for (let i = links.length - 1; i >= 0; i--) {
          const link2 = links[i];
          if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
            return;
          }
        }
      } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    })).then(() => baseModule()).catch((err) => {
      const e = new Event("vite:preloadError", { cancelable: true });
      e.payload = err;
      window.dispatchEvent(e);
      if (!e.defaultPrevented) {
        throw err;
      }
    });
  };
  const _hoisted_1$14 = { class: "znpb-option-cssSelectorChildActions" };
  const _sfc_main$1o = /* @__PURE__ */ Vue.defineComponent({
    __name: "AddSelector",
    props: {
      type: { default: "selector" }
    },
    emits: ["add-selector"],
    setup(__props, { emit }) {
      const props = __props;
      const showAddModal = Vue.ref(false);
      const hasError = Vue.ref(false);
      const schema = Vue.computed(() => {
        return {
          title: {
            type: "text",
            title: props.type === "selector" ? i18n__namespace.__("Selector nice name", "zionbuilder") : i18n__namespace.__("CSS class nice name", "zionbuilder"),
            description: props.type === "selector" ? i18n__namespace.__("Enter a name that will help you recognize this CSS class", "zionbuilder") : i18n__namespace.__("Enter a name that will help you recognize this CSS class", "zionbuilder")
          },
          selector: {
            type: "text",
            title: props.type === "selector" ? i18n__namespace.__("CSS selector", "zionbuilder") : i18n__namespace.__("CSS class", "zionbuilder"),
            description: props.type === "selector" ? i18n__namespace.__("Enter the css selector you want to style", "zionbuilder") : i18n__namespace.__("Enter the CSS class name without the leading dot", "zionbuilder"),
            placeholder: props.type === "selector" ? i18n__namespace.__(".my-selector", "zionbuilder") : i18n__namespace.__("my-class-name", "zionbuilder"),
            error: props.type === "class" && hasError.value ? true : false
          }
        };
      });
      const buttonTitle = Vue.computed(() => {
        return props.type == "selector" ? i18n__namespace.__("Add child selector", "zionbuilder") : i18n__namespace.__("Add CSS class", "zionbuilder");
      });
      const formModel = Vue.ref({});
      const computedFormModel = Vue.computed({
        get() {
          return formModel.value;
        },
        set(newValue) {
          if (null === newValue) {
            formModel.value = {};
          } else {
            formModel.value = newValue;
          }
        }
      });
      const canSave = Vue.computed(() => {
        return formModel.value.title && formModel.value.title.length > 0 && formModel.value.selector && formModel.value.selector.length > 0;
      });
      const buttonType = Vue.computed(() => {
        if (!canSave.value) {
          return "disabled";
        }
        return "";
      });
      function openModal() {
        showAddModal.value = true;
      }
      function closeModal() {
        showAddModal.value = false;
      }
      function toggleModal() {
        showAddModal.value = !showAddModal.value;
      }
      function onFormClose() {
        showAddModal.value = false;
        formModel.value = {};
      }
      function add() {
        if (!canSave.value) {
          return;
        }
        if (props.type === "class") {
          if (!/^[a-z_-][a-z\d_-]*$/i.test(formModel.value.selector) || formModel.value.selector.split("")[0] === "-") {
            hasError.value = true;
            setTimeout(() => {
              hasError.value = false;
            }, 500);
            return;
          }
        }
        emit("add-selector", formModel.value);
        showAddModal.value = false;
        formModel.value = {};
      }
      return (_ctx, _cache) => {
        const _component_OptionsForm = Vue.resolveComponent("OptionsForm");
        const _component_Button = Vue.resolveComponent("Button");
        const _component_Tooltip = Vue.resolveComponent("Tooltip");
        return Vue.openBlock(), Vue.createBlock(_component_Tooltip, {
          show: showAddModal.value,
          "onUpdate:show": _cache[2] || (_cache[2] = ($event) => showAddModal.value = $event),
          trigger: null,
          placement: "bottom",
          "append-to": "element",
          strategy: "fixed",
          "tooltip-class": "znpb-option-cssSelectorChildActionAddTooltip",
          "close-on-outside-click": true,
          onHide: onFormClose
        }, {
          content: Vue.withCtx(() => [
            Vue.createElementVNode("div", {
              onClick: _cache[1] || (_cache[1] = Vue.withModifiers(() => {
              }, ["stop"]))
            }, [
              Vue.createVNode(_component_OptionsForm, {
                modelValue: computedFormModel.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedFormModel.value = $event),
                class: "znpb-option-cssSelectorChildActionAddForm",
                schema: schema.value
              }, null, 8, ["modelValue", "schema"]),
              Vue.createVNode(_component_Button, {
                class: "znpb-button--line znpb-option-cssSelectorChildActionAddButton",
                type: buttonType.value,
                onClick: add
              }, {
                default: Vue.withCtx(() => [
                  Vue.createTextVNode(Vue.toDisplayString(buttonTitle.value), 1)
                ]),
                _: 1
              }, 8, ["type"])
            ])
          ]),
          default: Vue.withCtx(() => [
            Vue.createElementVNode("div", _hoisted_1$14, [
              Vue.renderSlot(_ctx.$slots, "default", {
                actions: {
                  openModal,
                  closeModal,
                  toggleModal
                }
              })
            ])
          ]),
          _: 3
        }, 8, ["show"]);
      };
    }
  });
  const AddSelector_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$13 = { class: "znpb-option-cssSelectorChildActions" };
  const _sfc_main$1n = /* @__PURE__ */ Vue.defineComponent({
    __name: "AddChildActions",
    props: {
      childSelectors: { default: () => [] }
    },
    emits: ["toggle-view-children"],
    setup(__props, { emit }) {
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _directive_znpb_tooltip = Vue.resolveDirective("znpb-tooltip");
        return Vue.openBlock(), Vue.createBlock(_sfc_main$1o, null, {
          default: Vue.withCtx(({ actions }) => [
            Vue.createElementVNode("div", _hoisted_1$13, [
              _ctx.childSelectors.length === 0 ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(_component_Icon, {
                key: 0,
                icon: "child-add",
                onClick: Vue.withModifiers(actions.toggleModal, ["stop"])
              }, null, 8, ["onClick"])), [
                [_directive_znpb_tooltip, "Add new inner selector"]
              ]) : (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 1 }, [
                Vue.createElementVNode("span", {
                  class: "znpb-option-cssSelectorChildActionsChildNumber",
                  onClick: _cache[0] || (_cache[0] = Vue.withModifiers(($event) => (_ctx.showChilds = !_ctx.showChilds, emit("toggle-view-children")), ["stop"]))
                }, [
                  Vue.createVNode(_component_Icon, { icon: "child" }),
                  Vue.createTextVNode(" " + Vue.toDisplayString(_ctx.childSelectors.length), 1)
                ]),
                Vue.withDirectives(Vue.createVNode(_component_Icon, {
                  icon: "plus",
                  onClick: Vue.withModifiers(actions.toggleModal, ["stop"])
                }, null, 8, ["onClick"]), [
                  [_directive_znpb_tooltip, "Add new inner selector"]
                ])
              ], 64))
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const _hoisted_1$12 = { class: "znpb-option-cssChildSelectorPseudoSelectorListWrapper" };
  const _hoisted_2$I = { class: "znpb-option-cssChildSelectorPseudoSelectorList" };
  const _hoisted_3$w = /* @__PURE__ */ Vue.createElementVNode("li", { class: "znpb-option-cssChildSelectorPseudoSelectorListTitle" }, "Active states:", -1);
  const _hoisted_4$g = ["onClick"];
  const _hoisted_5$e = { class: "znpb-option-cssChildSelectorPseudoSelectorList" };
  const _hoisted_6$c = /* @__PURE__ */ Vue.createElementVNode("li", { class: "znpb-option-cssChildSelectorPseudoSelectorListTitle" }, "Available states:", -1);
  const _hoisted_7$b = ["onClick"];
  const _sfc_main$1m = /* @__PURE__ */ Vue.defineComponent({
    __name: "PseudoSelector",
    props: {
      states: { default: () => [] }
    },
    emits: ["update:states"],
    setup(__props, { emit }) {
      const props = __props;
      const { usePseudoSelectors: usePseudoSelectors2 } = window.zb.composables;
      const { pseudoSelectors } = usePseudoSelectors2();
      const allPseudoSelectors = Vue.computed(() => {
        const disabledStates = ["custom", ":before", ":after"];
        return pseudoSelectors.value.filter((state) => !disabledStates.includes(state.id));
      });
      const computedStates = Vue.computed({
        get() {
          return props.states || [];
        },
        set(newStates) {
          emit("update:states", newStates);
        }
      });
      const activePseudo = Vue.computed(() => {
        return computedStates.value.map((state) => allPseudoSelectors.value.find((stateConfig) => stateConfig.id === state));
      });
      const remainingPseudo = Vue.computed(() => {
        return allPseudoSelectors.value.filter((state) => !computedStates.value.includes(state.id));
      });
      function removeState(state) {
        const value = computedStates.value.slice();
        if (value.length === 1) {
          return;
        }
        if (value.includes(state.id)) {
          const index2 = value.indexOf(state.id);
          value.splice(index2, 1);
          computedStates.value = value;
        }
      }
      function addState(state) {
        const value = computedStates.value.slice();
        value.push(state.id);
        computedStates.value = value;
      }
      return (_ctx, _cache) => {
        const _component_Tooltip = Vue.resolveComponent("Tooltip");
        return Vue.openBlock(), Vue.createBlock(_component_Tooltip, {
          "tooltip-class": "hg-popper--no-padding",
          trigger: "click",
          placement: "bottom",
          "append-to": "body",
          strategy: "fixed",
          "close-on-outside-click": true,
          class: "znpb-option-cssChildSelectorPseudoSelector",
          onHide: _cache[0] || (_cache[0] = ($event) => _ctx.showAddModal = false)
        }, {
          content: Vue.withCtx(() => [
            Vue.createElementVNode("div", _hoisted_1$12, [
              Vue.createElementVNode("ul", _hoisted_2$I, [
                _hoisted_3$w,
                (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(activePseudo.value, (state) => {
                  return Vue.openBlock(), Vue.createElementBlock("li", {
                    key: state.id,
                    onClick: ($event) => removeState(state)
                  }, Vue.toDisplayString(state.name), 9, _hoisted_4$g);
                }), 128))
              ]),
              Vue.createElementVNode("ul", _hoisted_5$e, [
                _hoisted_6$c,
                (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(remainingPseudo.value, (state) => {
                  return Vue.openBlock(), Vue.createElementBlock("li", {
                    key: state.id,
                    onClick: ($event) => addState(state)
                  }, Vue.toDisplayString(state.name), 9, _hoisted_7$b);
                }), 128))
              ])
            ])
          ]),
          default: Vue.withCtx(() => [
            _ctx.states.length === 1 ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, [
              Vue.createTextVNode(Vue.toDisplayString(_ctx.states[0]), 1)
            ], 64)) : Vue.createCommentVNode("", true),
            _ctx.states.length > 1 ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 1 }, [
              Vue.createTextVNode(Vue.toDisplayString(_ctx.states.length) + " states ", 1)
            ], 64)) : Vue.createCommentVNode("", true)
          ]),
          _: 1
        });
      };
    }
  });
  const PseudoSelector_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$11 = { class: "znpb-option-cssSelectorWrapper" };
  const _hoisted_2$H = ["title"];
  const _hoisted_3$v = { key: 0 };
  const _sfc_main$1l = /* @__PURE__ */ Vue.defineComponent({
    __name: "CSSSelector",
    props: {
      modelValue: { default: () => ({}) },
      allow_delete: { type: Boolean, default: true },
      allow_childs: { type: Boolean, default: true },
      isChild: { type: Boolean, default: false },
      allow_class_assignments: { type: Boolean, default: true },
      allow_custom_attributes: { type: Boolean, default: true },
      selector: { default: "" },
      name: { default: "" },
      show_breadcrumbs: { type: Boolean, default: false },
      show_changes: { type: Boolean, default: true },
      allowRename: { type: Boolean, default: true },
      elementStyleId: { default: "" },
      showPseudoSelector: { type: Boolean, default: false }
    },
    emits: [
      "update:modelValue",
      "delete",
      "rename",
      "add-selector",
      "update-selector",
      "toggle-view-children"
    ],
    setup(__props, { emit }) {
      const props = __props;
      const { generateUID: generateUID2 } = window.zb.utils;
      const { applyFilters: applyFilters2 } = window.zb.hooks;
      const AccordionMenu2 = Vue.defineAsyncComponent(() => __vitePreload(() => Promise.resolve().then(() => AccordionMenu$1), false ? "__VITE_PRELOAD__" : void 0));
      const cssClassesStore = useCSSClassesStore();
      const showChildren = Vue.ref(false);
      const uid = generateUID2();
      const classActions = Vue.computed(() => {
        return [
          {
            title: i18n__namespace.__("Copy styles", "zionbuilder"),
            action: () => {
              cssClassesStore.copyClassStyles(value.value.styles);
            },
            icon: "copy"
          },
          {
            title: i18n__namespace.__("Paste styles", "zionbuilder"),
            action: () => {
              const clonedCopiedStyles = cloneDeep(cssClassesStore.copiedStyles);
              if (!value.value.styles) {
                value.value.styles = clonedCopiedStyles;
              } else {
                value.value.styles = merge$1(value.value.styles, clonedCopiedStyles);
              }
            },
            show: !!cssClassesStore.copiedStyles,
            icon: "paste"
          },
          {
            title: i18n__namespace.__("Delete selector", "zionbuilder"),
            action: deleteItem,
            icon: "delete"
          }
        ];
      });
      const title = Vue.computed({
        get() {
          return props.name || props.modelValue.name || props.modelValue.title || props.modelValue.id || props.selector || "New item";
        },
        set(newValue) {
          value.value = __spreadProps(__spreadValues({}, value.value), {
            name: newValue
          });
        }
      });
      const selector = Vue.computed(() => {
        if (props.selector) {
          return props.selector;
        } else if (props.modelValue.id) {
          return `.${props.modelValue.id}`;
        } else if (props.modelValue.selector) {
          return props.modelValue.selector;
        }
      });
      function onMouseOver() {
        const iframe = window.document.getElementById("znpb-editor-iframe");
        if (!iframe) {
          return;
        }
        try {
          const domElements = iframe.contentWindow.document.querySelectorAll(selector.value);
          if (domElements.length) {
            domElements.forEach((element) => {
              element.style.outline = "2px solid #14ae5c";
            });
          }
        } catch (error) {
        }
      }
      function onMouseOut() {
        const iframe = window.document.getElementById("znpb-editor-iframe");
        if (!iframe) {
          return;
        }
        try {
          const domElements = iframe.contentWindow.document.querySelectorAll(selector.value);
          if (domElements.length) {
            domElements.forEach((element) => {
              element.style.outline = null;
            });
          }
        } catch (error) {
        }
      }
      Vue.onBeforeUnmount(() => onMouseOut());
      const childSelectors = Vue.computed({
        get() {
          return props.modelValue.child_styles || [];
        },
        set(newValue) {
          if (null === newValue || newValue.length === 0) {
            delete value.value.child_styles;
          } else {
            value.value = __spreadProps(__spreadValues({}, value.value), {
              child_styles: newValue
            });
          }
        }
      });
      const pseudoState = Vue.computed({
        get() {
          return value.value.states || ["default"];
        },
        set(newStateValue) {
          value.value.states = newStateValue;
        }
      });
      const schema = Vue.computed(() => {
        const schema2 = {
          styles: {
            type: "element_styles",
            id: "styles",
            is_layout: true,
            selector: selector.value,
            title: title.value,
            allow_class_assignments: props.allow_class_assignments,
            elementStyleId: props.elementStyleId,
            showPseudoSelector: props.showPseudoSelector
          }
        };
        if (props.allow_custom_attributes) {
          schema2.attributes = applyFilters2("zionbuilder/options/attributes", {
            type: "accordion_menu",
            title: i18n__namespace.__("Custom attributes", "zionbuilder"),
            icon: "tags-attributes",
            is_layout: true,
            label: {
              type: i18n__namespace.__("pro", "zionbuilder"),
              text: i18n__namespace.__("pro", "zionbuilder")
            },
            show_title: false,
            child_options: {
              upgrade_message: {
                type: "upgrade_to_pro",
                message_title: i18n__namespace.__("Meet custom attributes", "zionbuilder"),
                message_description: i18n__namespace.__("Generate custom attributes to every inner parts of the element", "zionbuilder"),
                info_text: i18n__namespace.__("Click here to learn more about PRO.", "zionbuilder")
              }
            }
          });
        }
        return schema2;
      });
      const hasChanges = Vue.computed(
        () => Object.keys(value.value.styles || {}).length > 0 || Object.keys(value.value.attributes || {}).length > 0
      );
      const value = Vue.computed({
        get() {
          return props.modelValue || {};
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      function onChildAdded(childData) {
        childSelectors.value = [...childSelectors.value, childData];
        showChildren.value = true;
      }
      function onChildUpdate(child, newValue) {
        const value2 = childSelectors.value.slice();
        const childIndex = childSelectors.value.indexOf(child);
        if (newValue === null) {
          value2.splice(childIndex, 1);
        } else {
          value2.splice(childIndex, 1, newValue);
        }
        childSelectors.value = value2;
      }
      function deleteItem() {
        emit("update:modelValue", null);
      }
      function resetChanges() {
        const clonedValue = cloneDeep(value.value);
        delete clonedValue.styles;
        if (Object.keys(clonedValue).length === 0) {
          emit("update:modelValue", null);
        } else {
          emit("update:modelValue", clonedValue);
        }
      }
      function onRenameItemClick(event) {
        if (props.allowRename) {
          event.stopPropagation();
        }
      }
      return (_ctx, _cache) => {
        const _component_InlineEdit = Vue.resolveComponent("InlineEdit");
        const _component_ChangesBullet = Vue.resolveComponent("ChangesBullet");
        const _component_HiddenMenu = Vue.resolveComponent("HiddenMenu");
        const _component_OptionsForm = Vue.resolveComponent("OptionsForm");
        const _component_CSSSelector = Vue.resolveComponent("CSSSelector", true);
        const _component_Sortable = Vue.resolveComponent("Sortable");
        return Vue.openBlock(), Vue.createElementBlock("div", {
          class: Vue.normalizeClass(["znpb-option-cssSelectoritem", { "znpb-option-cssSelectoritem--child": _ctx.isChild }])
        }, [
          Vue.createElementVNode("div", _hoisted_1$11, [
            _ctx.isChild ? (Vue.openBlock(), Vue.createBlock(_sfc_main$1m, {
              key: 0,
              states: pseudoState.value,
              "onUpdate:states": _cache[0] || (_cache[0] = ($event) => pseudoState.value = $event)
            }, null, 8, ["states"])) : Vue.createCommentVNode("", true),
            Vue.createVNode(Vue.unref(AccordionMenu2), {
              modelValue: value.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => value.value = $event),
              "show-trigger-arrow": true,
              "has-breadcrumbs": _ctx.show_breadcrumbs,
              title: title.value,
              child_options: schema.value,
              class: "znpb-option-cssSelectorAccordion"
            }, {
              title: Vue.withCtx(() => [
                Vue.createElementVNode("div", {
                  onMouseenter: onMouseOver,
                  onMouseleave: onMouseOut
                }, [
                  Vue.createVNode(_component_InlineEdit, {
                    modelValue: title.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => title.value = $event),
                    class: Vue.normalizeClass(["znpb-option-cssSelectorTitle", {
                      "znpb-option-cssSelectorTitle--allowRename": _ctx.allowRename
                    }]),
                    enabled: _ctx.allowRename,
                    onClick: onRenameItemClick
                  }, null, 8, ["modelValue", "class", "enabled"]),
                  Vue.createElementVNode("div", {
                    class: "znpb-option-cssSelector",
                    title: selector.value
                  }, Vue.toDisplayString(selector.value), 9, _hoisted_2$H)
                ], 32)
              ]),
              actions: Vue.withCtx(() => [
                _ctx.allow_childs ? (Vue.openBlock(), Vue.createBlock(_sfc_main$1n, {
                  key: 0,
                  "child-selectors": childSelectors.value,
                  onAddSelector: onChildAdded,
                  onToggleViewChildren: _cache[2] || (_cache[2] = ($event) => showChildren.value = !showChildren.value)
                }, null, 8, ["child-selectors"])) : Vue.createCommentVNode("", true),
                _ctx.show_changes && hasChanges.value ? (Vue.openBlock(), Vue.createBlock(_component_ChangesBullet, {
                  key: 1,
                  content: i18n__namespace.__("Discard changes", "zionbuilder"),
                  onRemoveStyles: resetChanges
                }, null, 8, ["content"])) : Vue.createCommentVNode("", true),
                Vue.createVNode(_component_HiddenMenu, { actions: classActions.value }, null, 8, ["actions"])
              ]),
              default: Vue.withCtx(() => [
                Vue.createVNode(_component_OptionsForm, {
                  modelValue: value.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value.value = $event),
                  schema: schema.value,
                  class: "znpb-option-cssSelectorForm"
                }, null, 8, ["modelValue", "schema"])
              ]),
              _: 1
            }, 8, ["modelValue", "has-breadcrumbs", "title", "child_options"])
          ]),
          showChildren.value && childSelectors.value.length > 0 ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_3$v, [
            Vue.createVNode(_component_Sortable, {
              modelValue: childSelectors.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => childSelectors.value = $event),
              class: "znpb-admin-colors__container",
              handle: ".znpb-option-cssSelectorAccordion > .znpb-horizontal-accordion__header",
              "drag-delay": 0,
              "drag-treshold": 10,
              disabled: false,
              revert: true,
              axis: "vertical",
              group: Vue.unref(uid)
            }, {
              default: Vue.withCtx(() => [
                (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(childSelectors.value, (childSelector, index2) => {
                  return Vue.openBlock(), Vue.createBlock(_component_CSSSelector, {
                    key: childSelector.title + childSelector.selector + index2,
                    class: "znpb-option-cssChildSelectorStyles",
                    "model-value": childSelector,
                    "is-child": true,
                    allow_class_assignments: false,
                    allow_custom_attributes: false,
                    show_breadcrumbs: _ctx.show_breadcrumbs,
                    "onUpdate:modelValue": ($event) => onChildUpdate(childSelector, $event)
                  }, null, 8, ["model-value", "show_breadcrumbs", "onUpdate:modelValue"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["modelValue", "group"])
          ])) : Vue.createCommentVNode("", true)
        ], 2);
      };
    }
  });
  const CSSSelector_vue_vue_type_style_index_0_lang = "";
  const CSSSelector = {
    id: "css_selector",
    component: _sfc_main$1l
  };
  const _hoisted_1$10 = { class: "znpb-option__image-gallery" };
  const _hoisted_2$G = ["onClick"];
  const _sfc_main$1k = /* @__PURE__ */ Vue.defineComponent({
    __name: "Gallery",
    props: {
      modelValue: { default() {
        return [];
      } },
      title: { default: "" },
      type: { default: "image" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const { wp: wp2 } = window;
      const { getImageIds } = window.zb.api;
      const sortableModel = Vue.computed({
        get() {
          return props.modelValue || [];
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      let mediaModal = null;
      function openMediaModal() {
        if (mediaModal === null) {
          const args = {
            frame: "select",
            state: "zion-media",
            library: {
              type: "image"
            },
            multiple: true,
            selection: []
          };
          mediaModal = new wp2.media.view.MediaFrame.ZionBuilderFrame(args);
          mediaModal.on("select update insert", selectMedia);
          mediaModal.on("open", setMediaModalSelection);
        }
        mediaModal.open();
      }
      function setMediaModalSelection() {
        if (typeof props.modelValue === "undefined")
          return;
        let imagesUrls = props.modelValue.map((image) => image.image);
        getImageIds({
          images: imagesUrls
        }).then((response) => {
          const imageIds = Object.keys(response.data).map((image) => {
            return response.data[image];
          });
          const selection = mediaModal.state().get("selection");
          imageIds.forEach((imageId) => {
            var attachment = wp2.media.attachment(imageId);
            selection.add(attachment ? [attachment] : []);
          });
        });
      }
      function selectMedia(e) {
        let selection = mediaModal.state().get("selection").toJSON();
        if (typeof e !== "undefined") {
          selection = e;
        }
        const values = selection.map((selectedItem) => {
          return { image: selectedItem.url };
        });
        emit("update:modelValue", values);
      }
      function deleteImage(index2) {
        const values = [...props.modelValue];
        values.splice(index2, 1);
        emit("update:modelValue", values);
      }
      return (_ctx, _cache) => {
        const _component_EmptyList = Vue.resolveComponent("EmptyList");
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_Sortable = Vue.resolveComponent("Sortable");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$10, [
          !sortableModel.value.length ? (Vue.openBlock(), Vue.createBlock(_component_EmptyList, {
            key: 0,
            onClick: openMediaModal
          }, {
            default: Vue.withCtx(() => [
              Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("No images selected", "zionbuilder")), 1)
            ]),
            _: 1
          })) : (Vue.openBlock(), Vue.createBlock(_component_Sortable, {
            key: 1,
            modelValue: sortableModel.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sortableModel.value = $event),
            class: "znpb-option__image-gallery__images-wrapper"
          }, {
            end: Vue.withCtx(() => [
              Vue.createElementVNode("div", {
                class: "znpb-option__image-gallery__images-item--add",
                onClick: openMediaModal
              }, "+")
            ]),
            default: Vue.withCtx(() => [
              (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.modelValue, (image, index2) => {
                return Vue.openBlock(), Vue.createElementBlock("div", {
                  key: index2,
                  class: "znpb-option__image-gallery__images-item",
                  style: Vue.normalizeStyle({
                    "background-image": `url(${image.image})`,
                    "background-size": "cover",
                    "border-radius": "3px"
                  })
                }, [
                  Vue.createElementVNode("span", {
                    class: "znpb-option__image-gallery__images-item--delete",
                    onClick: ($event) => deleteImage(index2)
                  }, [
                    Vue.createVNode(_component_Icon, {
                      rounded: true,
                      icon: "delete",
                      "bg-size": 30,
                      "bg-color": "#fff"
                    })
                  ], 8, _hoisted_2$G)
                ], 4);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue"]))
        ]);
      };
    }
  });
  const Gallery_vue_vue_type_style_index_0_lang = "";
  const Gallery = {
    id: "image_gallery",
    component: _sfc_main$1k
  };
  const _hoisted_1$$ = { class: "znpb-global-css-classes__wrapper" };
  const _hoisted_2$F = { class: "znpb-global-css-classes__search" };
  const _hoisted_3$u = {
    key: 1,
    class: "znpb-class-selector-noclass"
  };
  const _sfc_main$1j = /* @__PURE__ */ Vue.defineComponent({
    __name: "GlobalClasses",
    setup(__props) {
      const cssClasses = useCSSClassesStore();
      const keyword = Vue.ref("");
      const activeClass = Vue.ref(null);
      const breadCrumbConfig = Vue.ref({
        title: null,
        previousCallback: closeAccordion
      });
      const horizontalAccordion = Vue.ref([]);
      const parentAccordion = Vue.inject("parentAccordion");
      const filteredClasses = Vue.computed(() => {
        if (keyword.value.length === 0) {
          return cssClasses.CSSClasses;
        } else {
          return cssClasses.getClassesByFilter(keyword.value);
        }
      });
      const schema = Vue.computed(() => {
        const schema2 = {};
        const selectors = filteredClasses.value || [];
        selectors.forEach((cssClassConfig) => {
          const { uid, title } = cssClassConfig;
          schema2[uid] = {
            type: "css_selector",
            title,
            allow_class_assignments: false,
            allow_custom_attributes: false,
            show_changes: false,
            showPseudoSelector: true
          };
        });
        return schema2;
      });
      const value = Vue.computed({
        get() {
          const modelValue = {};
          const existingCSSClasses = cssClasses.CSSClasses;
          existingCSSClasses.forEach((cssClassConfig) => {
            const { uid } = cssClassConfig;
            modelValue[uid] = cssClassConfig;
          });
          return modelValue;
        },
        set(newValue) {
          if (null === newValue) {
            cssClasses.removeAllCssClasses();
          } else {
            const classes = [];
            Object.keys(newValue).forEach((selectorId) => {
              const selectorValue = newValue[selectorId];
              classes.push(selectorValue);
            });
            cssClasses.setCSSClasses(classes);
          }
        }
      });
      function closeAccordion() {
        const activeAccordion = horizontalAccordion.value.find((accordion) => {
          return accordion.localCollapsed;
        });
        if (activeAccordion) {
          activeAccordion.closeAccordion();
        }
      }
      function onSelectorAdd(config) {
        cssClasses.addCSSClass({
          id: config.selector,
          name: config.title
        });
      }
      Vue.onBeforeUnmount(() => {
        if (activeClass.value) {
          parentAccordion.removeBreadcrumb(breadCrumbConfig.value);
        }
      });
      return (_ctx, _cache) => {
        const _component_Button = Vue.resolveComponent("Button");
        const _component_BaseInput = Vue.resolveComponent("BaseInput");
        const _component_OptionsForm = Vue.resolveComponent("OptionsForm");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$$, [
          Vue.createVNode(_sfc_main$1o, {
            type: "class",
            onAddSelector: onSelectorAdd
          }, {
            default: Vue.withCtx(({ actions }) => [
              Vue.createVNode(_component_Button, {
                type: "line",
                class: "znpb-class-selectorAddButton",
                onClick: ($event) => actions.toggleModal()
              }, {
                default: Vue.withCtx(() => [
                  Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("Add CSS class", "zionbuilder")), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]),
            _: 1
          }),
          Vue.createElementVNode("div", _hoisted_2$F, [
            Vue.createVNode(_component_BaseInput, {
              ref: "input",
              modelValue: keyword.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => keyword.value = $event),
              filterable: true,
              icon: "search",
              clearable: true,
              placeholder: "Search for a class"
            }, null, 8, ["modelValue"])
          ]),
          filteredClasses.value.length ? (Vue.openBlock(), Vue.createBlock(_component_OptionsForm, {
            key: 0,
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
            schema: schema.value,
            class: "znpb-globalCSSClassesOptionsForm"
          }, null, 8, ["modelValue", "schema"])) : (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_3$u, Vue.toDisplayString(i18n__namespace.__("No class found", "zionbuilder")), 1))
        ]);
      };
    }
  });
  const GlobalClasses_vue_vue_type_style_index_0_lang = "";
  const GlobalClasses = {
    id: "global_css_classes",
    component: _sfc_main$1j
  };
  const _hoisted_1$_ = { class: "znpb-options-children__element-inner" };
  const _hoisted_2$E = { class: "znpb-options-children__element-title" };
  const _hoisted_3$t = { class: "znpb-options-children__element-action" };
  const _sfc_main$1i = /* @__PURE__ */ Vue.defineComponent({
    __name: "SingleChild",
    props: {
      element: {},
      itemOptionName: { default: "" },
      showDelete: { type: Boolean }
    },
    setup(__props) {
      const props = __props;
      const UIStore = useUIStore();
      function onDelete() {
        if (props.showDelete) {
          props.element.delete();
        }
      }
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _directive_znpb_tooltip = Vue.resolveDirective("znpb-tooltip");
        return Vue.openBlock(), Vue.createElementBlock("div", {
          class: "znpb-options-children__element",
          onClick: _cache[2] || (_cache[2] = Vue.withModifiers(($event) => Vue.unref(UIStore).editElement(_ctx.element), ["stop"]))
        }, [
          Vue.createElementVNode("div", _hoisted_1$_, [
            Vue.createElementVNode("div", _hoisted_2$E, Vue.toDisplayString(_ctx.element.options[_ctx.itemOptionName] || "ITEM"), 1),
            Vue.createElementVNode("div", _hoisted_3$t, [
              Vue.withDirectives(Vue.createVNode(_component_Icon, {
                icon: "copy",
                onClick: _cache[0] || (_cache[0] = Vue.withModifiers(($event) => _ctx.element.duplicate(), ["stop"]))
              }, null, 512), [
                [_directive_znpb_tooltip, i18n__namespace.__("duplicate", "zionbuilder ")]
              ]),
              Vue.withDirectives(Vue.createVNode(_component_Icon, {
                icon: "delete",
                class: Vue.normalizeClass({ "znpb-options-children__element-actionDeleteInactive": !_ctx.showDelete }),
                onClick: Vue.withModifiers(onDelete, ["stop"])
              }, null, 8, ["class", "onClick"]), [
                [_directive_znpb_tooltip, i18n__namespace.__("delete", "zionbuilder ")]
              ]),
              Vue.withDirectives(Vue.createVNode(_component_Icon, {
                icon: "edit",
                onClick: _cache[1] || (_cache[1] = Vue.withModifiers(($event) => Vue.unref(UIStore).editElement(_ctx.element), ["stop"]))
              }, null, 512), [
                [_directive_znpb_tooltip, i18n__namespace.__("edit", "zionbuilder ")]
              ])
            ])
          ])
        ]);
      };
    }
  });
  const SingleChild_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$Z = { class: "znpb-options-children__wrapper" };
  const __default__ = {
    name: "ChildAdder"
  };
  const _sfc_main$1h = /* @__PURE__ */ Vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
    props: {
      modelValue: {},
      child_type: {},
      item_name: {},
      min: {},
      add_template: {}
    },
    setup(__props) {
      const props = __props;
      const element = Vue.inject("elementInfo");
      const contentStore = useContentStore();
      const canShowDeleteButton = Vue.computed(() => {
        if (props.min && element.value.content.length === props.min) {
          return false;
        }
        return true;
      });
      const elementChildren = Vue.computed(() => {
        return element.value.content.map((elementUID) => {
          return contentStore.getElement(elementUID);
        });
      });
      if (element.value.content.length === 0 && props.modelValue) {
        element.value.addChildren(props.modelValue);
      }
      function addChild() {
        const config = props.add_template ? props.add_template : {
          element_type: props.child_type
        };
        window.zb.run("editor/elements/add", {
          element: config,
          parentUID: element.value.uid,
          index: -1
        });
      }
      return (_ctx, _cache) => {
        const _component_Sortable = Vue.resolveComponent("Sortable");
        const _component_Button = Vue.resolveComponent("Button");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$Z, [
          Vue.createVNode(_component_Sortable, {
            modelValue: Vue.unref(element).content,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => Vue.unref(element).content = $event),
            class: "znpb-options-children__items-wrapper"
          }, {
            default: Vue.withCtx(() => [
              (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(elementChildren.value, (childElement) => {
                return Vue.openBlock(), Vue.createBlock(_sfc_main$1i, {
                  key: childElement.uid,
                  element: childElement,
                  "item-option-name": _ctx.item_name,
                  "show-delete": canShowDeleteButton.value,
                  onDelete: childElement.delete,
                  onClone: childElement.duplicate
                }, null, 8, ["element", "item-option-name", "show-delete", "onDelete", "onClone"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue"]),
          Vue.createVNode(_component_Button, {
            class: "znpb-option-repeater__add-button",
            type: "line",
            onClick: addChild
          }, {
            default: Vue.withCtx(() => [
              Vue.createTextVNode(" ADD ")
            ]),
            _: 1
          })
        ]);
      };
    }
  }));
  const ChildAdder = {
    id: "child_adder",
    component: _sfc_main$1h
  };
  const { useNotificationsStore } = window.zb.store;
  const { useResponsiveDevices: useResponsiveDevices$2 } = window.zb.composables;
  const { savePage: savePageREST } = window.zb.api;
  const isSavePageLoading = Vue.ref(false);
  let previewWindow = null;
  function useSavePage() {
    const save = (status = "publish") => {
      const contentStore = useContentStore();
      const notificationsStore = useNotificationsStore();
      const pageSettings = usePageSettingsStore();
      const cssClasses = useCSSClassesStore();
      const { editorData: editorData2 } = useEditorData();
      const historyStore = useHistoryStore();
      const { responsiveDevices } = useResponsiveDevices$2();
      const pageData = {
        page_id: editorData2.value.page_id,
        template_data: contentStore.getAreaContentAsJSON(editorData2.value.page_id),
        page_settings: pageSettings.settings,
        css_classes: cssClasses.CSSClasses,
        breakpoints: responsiveDevices.value
      };
      if (status) {
        pageData.status = status;
      }
      if (status !== "autosave") {
        isSavePageLoading.value = true;
      }
      return new Promise((resolve, reject) => {
        savePageREST(pageData).then((response) => {
          refreshPreviewWindow();
          historyStore.isDirty = false;
          return Promise.resolve(response);
        }).catch((error) => {
          notificationsStore.add({
            message: error.message,
            type: "error",
            delayClose: 5e3
          });
          reject(error);
        }).finally(() => {
          isSavePageLoading.value = false;
          resolve();
        });
      });
    };
    const savePage = () => {
      return save();
    };
    const saveDraft = () => {
      return save("draft");
    };
    const saveAutosave = () => {
      return save("autosave");
    };
    function openPreviewPage(event) {
      return __async(this, null, function* () {
        const { editorData: editorData2 } = useEditorData();
        yield saveDraft();
        previewWindow = window.open(editorData2.value.urls.preview_url, `zion-preview-${editorData2.value.page_id}`);
        event.preventDefault();
      });
    }
    function refreshPreviewWindow() {
      if (previewWindow) {
        try {
          previewWindow.location.reload();
        } catch (error) {
        }
      }
    }
    return {
      savePage,
      saveDraft,
      saveAutosave,
      isSavePageLoading,
      previewWindow,
      openPreviewPage,
      refreshPreviewWindow
    };
  }
  const { isEditable, Environment } = window.zb.utils;
  const useKeyBindings = () => {
    const UIStore = useUIStore();
    const userStore = useUserStore();
    const { savePage, isSavePageLoading: isSavePageLoading2 } = useSavePage();
    const { copyElement, pasteElement, resetCopiedElement, copyElementStyles, pasteElementStyles } = useElementActions();
    const controlKey = Environment.isMac ? "metaKey" : "ctrlKey";
    const applyShortcuts = (e) => {
      if (e.which === 83 && e[controlKey] && !e.shiftKey) {
        e.preventDefault();
        if (!isSavePageLoading2.value) {
          savePage();
        }
      }
      if (e.which === 80 && e[controlKey]) {
        UIStore.setPreviewMode(!UIStore.isPreviewMode);
        e.preventDefault();
      }
      if (isEditable()) {
        return;
      }
      if (UIStore.isPreviewMode) {
        return;
      }
      if (UIStore.editedElement && !userStore.permissions.only_content) {
        const activeElementFocus = UIStore.editedElement;
        if (e.which === 68 && e[controlKey] && !e.shiftKey) {
          activeElementFocus.duplicate();
          e.preventDefault();
        }
        if (e.which === 67 && e[controlKey] && !e.shiftKey) {
          copyElement(activeElementFocus);
        }
        if (e.which === 86 && e[controlKey] && !e.shiftKey) {
          pasteElement(activeElementFocus);
        }
        if (e.which === 88 && e[controlKey]) {
          copyElement(activeElementFocus, "cut");
        }
        if (e.code === "Escape") {
          resetCopiedElement();
        }
        if (e.which === 46 || Environment.isMac && e.which === 8) {
          activeElementFocus.delete();
        }
        if (e[controlKey] && e.shiftKey && e.which === 67) {
          copyElementStyles(activeElementFocus);
          e.preventDefault();
        }
        if (e[controlKey] && e.shiftKey && e.which === 86) {
          pasteElementStyles(activeElementFocus);
          e.preventDefault();
        }
        if (e.which === 72 && e[controlKey]) {
          if (activeElementFocus) {
            activeElementFocus.setVisibility(!activeElementFocus.isVisible);
            e.preventDefault();
          }
        }
      }
      if (e.which === 90 && e[controlKey] && !e.shiftKey) {
        const historyStore = useHistoryStore();
        if (historyStore.canUndo) {
          historyStore.undo();
        }
        e.preventDefault();
      }
      if (e.code === "KeyD" && e[controlKey] && e.shiftKey) {
        window.open(window.ZnPbInitialData.urls.edit_page, "_blank");
      }
      if (e.which === 90 && e[controlKey] && e.shiftKey || e[controlKey] && e.which === 89) {
        const historyStore = useHistoryStore();
        if (historyStore.canRedo) {
          historyStore.redo();
        }
        e.preventDefault();
      }
      if (e.shiftKey && e.code === "KeyT") {
        UIStore.togglePanel("panel-tree");
        e.preventDefault();
      }
      if (e.shiftKey && e.code === "KeyL") {
        UIStore.toggleLibrary();
        e.preventDefault();
      }
      if (e.shiftKey && e.code === "KeyO") {
        UIStore.togglePanel("panel-global-settings");
        e.preventDefault();
      }
    };
    return {
      applyShortcuts
    };
  };
  const useElementProvide = () => {
    const provideElement = (element) => {
      Vue.provide("ZionElement", element);
    };
    const injectElement = () => {
      const element = Vue.inject("ZionElement");
      if (!element) {
        console.error("No element was provided");
      }
      return element;
    };
    return {
      provideElement,
      injectElement
    };
  };
  const windows = {
    main: window
  };
  const useWindows = () => {
    const getWindows = (windowID = null) => {
      return windowID ? windows[windowID] : windows;
    };
    const addWindow = (id, document2) => {
      windows[id] = document2;
    };
    const addEventListener = (type, callback, options) => {
      forEach(windows, (doc) => {
        doc.addEventListener(type, callback, options);
      });
    };
    const removeWindow = (id) => {
      delete windows[id];
    };
    const removeEventListener = (type, callback, options) => {
      forEach(windows, (doc) => {
        doc.removeEventListener(type, callback, options);
      });
    };
    return {
      getWindows,
      addWindow,
      removeWindow,
      addEventListener,
      removeEventListener
    };
  };
  const activeSaveElement = Vue.ref({});
  const useSaveTemplate = () => {
    const showSaveElement = (element, type = "template") => {
      activeSaveElement.value = {
        element,
        type
      };
    };
    const hideSaveElement = () => {
      activeSaveElement.value = {};
    };
    return {
      activeSaveElement,
      showSaveElement,
      hideSaveElement
    };
  };
  const localStorageKey = "zionbuilder";
  function useLocalStorage() {
    function getStorageData() {
      const savedData = localStorage.getItem(localStorageKey);
      return savedData !== null ? JSON.parse(savedData) : {};
    }
    function addData(path, value) {
      const storageData = getStorageData();
      set(storageData, path, value);
      localStorage.setItem(localStorageKey, JSON.stringify(storageData));
    }
    function getData(path, defaultValue = null) {
      const storageData = getStorageData();
      return get(storageData, path, defaultValue);
    }
    function removeData(path) {
      const storageData = getStorageData();
      unset(storageData, path);
      localStorage.setItem(localStorageKey, JSON.stringify(storageData));
    }
    return {
      addData,
      getData,
      removeData
    };
  }
  const copiedElement = Vue.ref({});
  const copiedElementStyles = Vue.ref(null);
  function useElementActions() {
    const { addData, getData, removeData } = useLocalStorage();
    const copyElement = (element, action = "copy") => {
      copiedElement.value = {
        element,
        action
      };
      if (action === "cut") {
        element.isCut = true;
        removeData("copiedElement");
      } else if (action === "copy") {
        copyElementStyles(element);
        copyElementClasses(element);
        addData("copiedElement", element.toJSON());
      }
    };
    const pasteElement = (element) => {
      let insertElement = element;
      let index2 = -1;
      const elementForPaste = copiedElement.value.element ? copiedElement.value.element.getClone() : getData("copiedElement");
      if (!elementForPaste) {
        return;
      }
      if (element.parent && (!element.isWrapper || elementForPaste.uid === element.uid)) {
        insertElement = element.parent;
        index2 = element.indexInParent + 1;
      }
      if (copiedElement.value.action === "cut" && copiedElement.value.element) {
        if (copiedElement.value.element === element) {
          copiedElement.value.element.isCut = false;
          copiedElement.value = {};
        } else {
          copiedElement.value.element.isCut = false;
          window.zb.run("editor/elements/move", {
            newParent: insertElement,
            element: copiedElement.value.element,
            index: index2
          });
        }
        copiedElement.value = {};
      } else {
        window.zb.run("editor/elements/copy", {
          parent: insertElement,
          copiedElement: elementForPaste,
          index: index2
        });
      }
    };
    const resetCopiedElement = () => {
      if (copiedElement.value && copiedElement.value.element && copiedElement.value.action === "cut") {
        copiedElement.value.element.isCut = false;
      }
      copiedElement.value = {};
    };
    const copyElementStyles = (element) => {
      const dataForSave = {
        styles: cloneDeep(element.options._styles),
        custom_css: get(element, "options._advanced_options._custom_css", "")
      };
      copiedElementStyles.value = dataForSave;
      addData("copiedElementStyles", dataForSave);
    };
    const pasteElementStyles = (element) => {
      const styles = getData("copiedElementStyles");
      if (!styles) {
        return;
      }
      window.zb.run("editor/elements/paste-styles", {
        element,
        styles
      });
    };
    const copyElementClasses = (element) => {
      const dataToSave = cloneDeep(get(element.options, "_styles.wrapper.classes", null));
      addData("copiedElementClasses", dataToSave);
    };
    const pasteElementClasses = (element) => {
      const classes = getData("copiedElementClasses");
      if (classes) {
        window.zb.run("editor/elements/paste-css-classes", {
          element,
          classes
        });
      }
    };
    return {
      copyElement,
      pasteElement,
      resetCopiedElement,
      copiedElement,
      copyElementStyles,
      pasteElementStyles,
      copiedElementStyles,
      // Copy element classes
      copyElementClasses,
      pasteElementClasses
    };
  }
  const COMPOSABLES = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    useEditorData,
    useElementActions,
    useElementProvide,
    useKeyBindings,
    useLocalStorage,
    useSavePage,
    useSaveTemplate,
    useUserData,
    useWindows
  }, Symbol.toStringTag, { value: "Module" }));
  const _sfc_main$1g = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementEventButton",
    props: {
      event: {},
      button_text: {}
    },
    setup(__props) {
      const props = __props;
      const { injectElement } = useElementProvide();
      const element = injectElement();
      function onClick() {
        element.trigger(props.event);
      }
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", {
          class: "znpb-option__elementEvent",
          onClick
        }, Vue.toDisplayString(_ctx.button_text), 1);
      };
    }
  });
  const ElementEventButton_vue_vue_type_style_index_0_lang = "";
  const ElementEventButton = {
    id: "element_event_button",
    component: _sfc_main$1g
  };
  const _hoisted_1$Y = { class: "znpb-option-element-selector" };
  const _sfc_main$1f = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementSelector",
    props: {
      modelValue: { default: "" },
      use_preview: { type: Boolean, default: true }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      let activeDoc = document;
      let lastElement = null;
      const valueModel = Vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      function activateSelectorMode() {
        if (props.use_preview) {
          const iframeElement = document.getElementById("znpb-editor-iframe");
          if (!iframeElement || !iframeElement.contentWindow) {
            console.error("The iframe preview is missing");
            return;
          }
          activeDoc = iframeElement.contentWindow.document;
        }
        activeDoc.addEventListener("mousemove", onMouseMove);
        activeDoc.body.classList.add("znpb-element-selector--active");
      }
      function onMouseMove(event) {
        const { clientX, clientY } = event;
        if (lastElement) {
          lastElement.classList.remove("znpb-element-selector--element-hovered");
        }
        lastElement = activeDoc.elementFromPoint(clientX, clientY);
        if (lastElement) {
          lastElement.classList.add("znpb-element-selector--element-hovered");
        }
      }
      return (_ctx, _cache) => {
        const _component_BaseInput = Vue.resolveComponent("BaseInput");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$Y, [
          Vue.createVNode(_component_BaseInput, {
            modelValue: valueModel.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => valueModel.value = $event)
          }, {
            append: Vue.withCtx(() => [
              Vue.createElementVNode("span", { onClick: activateSelectorMode }, "Select")
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]);
      };
    }
  });
  const ElementSelector_vue_vue_type_style_index_0_lang = "";
  const ElementSelector = {
    id: "element_selector",
    component: _sfc_main$1f
  };
  const { useOptions } = window.zb.composables;
  const registerEditorOptions = () => {
    const { registerOption } = useOptions();
    registerOption(AccordionMenu);
    registerOption(PseudoGroup);
    registerOption(Background);
    registerOption(BackgroundColor);
    registerOption(BackgroundGradient);
    registerOption(Typography);
    registerOption(Group);
    registerOption(PanelAccordion);
    registerOption(ResponsiveGroup);
    registerOption(ColumnSize);
    registerOption(WPWidget);
    registerOption(TabGroup);
    registerOption(ElementStyles);
    registerOption(CSSSelector);
    registerOption(Gallery);
    registerOption(GlobalClasses);
    registerOption(ChildAdder);
    registerOption(ElementEventButton);
    registerOption(ElementSelector);
  };
  const cache$1 = {};
  const _sfc_main$1e = {
    name: "ElementListItemSVG",
    props: ["svg"],
    setup(props) {
      const iconMarkup = Vue.ref("");
      if (cache$1[props.svg]) {
        iconMarkup.value = cache$1[props.svg];
      } else {
        fetch(props.svg).then((response) => response.text()).then((data) => {
          iconMarkup.value = data;
          cache$1[props.svg] = data;
        });
      }
      return () => Vue.h("span", {
        class: "znpb-editor-icon-wrapper znpb-editor-icon-wrapper--isSVG",
        innerHTML: iconMarkup.value
      });
    }
  };
  const ElementListItemSVG_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$X = ["src"];
  const _sfc_main$1d = /* @__PURE__ */ Vue.defineComponent({
    __name: "UIElementIcon",
    props: {
      element: {},
      size: { default: 36 }
    },
    setup(__props) {
      const props = __props;
      const get_element_image = props.element.thumb ? props.element.thumb : null;
      const isSVG = get_element_image ? get_element_image.indexOf(".svg") !== -1 : false;
      const get_element_icon = props.element.icon ? props.element.icon : "element-default";
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        return Vue.unref(isSVG) ? (Vue.openBlock(), Vue.createBlock(_sfc_main$1e, {
          key: 0,
          svg: Vue.unref(get_element_image)
        }, null, 8, ["svg"])) : Vue.unref(get_element_image) ? (Vue.openBlock(), Vue.createElementBlock("img", {
          key: 1,
          src: Vue.unref(get_element_image),
          class: "znpb-element-box__image"
        }, null, 8, _hoisted_1$X)) : (Vue.openBlock(), Vue.createBlock(_component_Icon, {
          key: 2,
          icon: Vue.unref(get_element_icon),
          size: _ctx.size
        }, null, 8, ["icon", "size"]));
      };
    }
  });
  const _sfc_main$1c = /* @__PURE__ */ Vue.defineComponent({
    __name: "AddElementIcon",
    props: {
      element: {},
      placement: { default: "next" },
      position: { default: null },
      index: { default: -1 }
    },
    setup(__props) {
      const props = __props;
      const root2 = Vue.ref(null);
      const stylePosition = Vue.ref({});
      const UIStore = useUIStore();
      const userStore = useUserStore();
      const positionString = props.placement === "inside" ? i18n__namespace.__("Insert inside", "zionbuilder") : i18n__namespace.__("Insert after", "zionbuilder");
      function onIconClick(event) {
        event.stopPropagation();
        UIStore.showAddElementsPopup(props.element, event, props.placement);
      }
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _directive_znpb_tooltip = Vue.resolveDirective("znpb-tooltip");
        return !Vue.unref(userStore).permissions.only_content ? Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", {
          key: 0,
          ref_key: "root",
          ref: root2,
          style: Vue.normalizeStyle(stylePosition.value),
          class: Vue.normalizeClass(["znpb-element-toolbox__add-element-button", {
            [`znpb-element-toolbox__add-element-button--${_ctx.position}`]: _ctx.position,
            [`znpb-element-toolbox__add-element-button--${_ctx.placement}`]: _ctx.placement
          }]),
          onClick: onIconClick
        }, [
          Vue.createVNode(_component_Icon, {
            icon: "plus",
            rounded: true
          })
        ], 6)), [
          [_directive_znpb_tooltip, Vue.unref(positionString) + " " + _ctx.element.name]
        ]) : Vue.createCommentVNode("", true);
      };
    }
  });
  const AddElementIcon_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$W = { class: "znpb-empty-placeholder" };
  const _sfc_main$1b = /* @__PURE__ */ Vue.defineComponent({
    __name: "EmptySortablePlaceholder",
    props: {
      element: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$W, [
          Vue.createVNode(_sfc_main$1c, {
            element: _ctx.element,
            placement: "inside",
            position: "middle"
          }, null, 8, ["element"])
        ]);
      };
    }
  });
  const EmptySortablePlaceholder_vue_vue_type_style_index_0_lang = "";
  const SortableHelper_vue_vue_type_style_index_0_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$1a = {};
  function _sfc_render$4(_ctx, _cache) {
    const _component_Icon = Vue.resolveComponent("Icon");
    return Vue.openBlock(), Vue.createBlock(_component_Icon, {
      icon: "plus",
      "bg-size": 40,
      rounded: true,
      color: "#fff"
    });
  }
  const SortableHelper = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["render", _sfc_render$4]]);
  const SortablePlaceholder_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$19 = {};
  const _hoisted_1$V = { class: "znpb-sortable__placeholder-element" };
  function _sfc_render$3(_ctx, _cache) {
    return Vue.openBlock(), Vue.createElementBlock("span", _hoisted_1$V);
  }
  const SortablePlaceholder = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["render", _sfc_render$3]]);
  const _hoisted_1$U = ["innerHTML"];
  const _hoisted_2$D = ["src"];
  const _sfc_main$18 = /* @__PURE__ */ Vue.defineComponent({
    __name: "RenderValue",
    props: {
      option: {},
      htmlTag: { default: "span" }
    },
    setup(__props) {
      const props = __props;
      const elementInfo = Vue.inject("elementInfo");
      const elementOptions = Vue.inject("elementOptions");
      const elementOptionsSchema = Vue.computed(() => {
        return elementInfo.elementDefinition.options;
      });
      const optionType = Vue.computed(() => {
        return getOptionSchemaFromPath.value.type;
      });
      const getOptionSchemaFromPath = Vue.computed(() => {
        const paths = props.option.split(".");
        let currentSchema = elementOptionsSchema.value;
        const pathLength = paths.length;
        let returnSchema = null;
        paths.forEach((path, i) => {
          if (i + 1 === pathLength) {
            returnSchema = currentSchema[path];
          } else if (currentSchema[path]) {
            currentSchema = currentSchema[path];
          } else {
            console.error(`schema could not be found for ${this.option}`);
          }
        });
        return returnSchema;
      });
      const isValueDynamic = Vue.computed(() => {
        const paths = props.option.split(".");
        let currentModel = elementInfo.options;
        const pathLength = paths.length;
        let isDynamic = false;
        paths.forEach((path, i) => {
          if (i === pathLength - 1) {
            if (typeof currentModel.__dynamic_content__ === "object") {
              const finalOptionId = paths[paths.length - 1];
              isDynamic = currentModel.__dynamic_content__[finalOptionId];
            }
          } else if (currentModel[path]) {
            currentModel = currentModel[path];
          } else {
            console.error(`model could not be found for ${props.option}`);
          }
        });
        return isDynamic;
      });
      const renderType = Vue.computed(() => {
        if (optionType.value === "editor" && !isValueDynamic.value) {
          if (elementInfo.isDisabled) {
            return "dynamic_html";
          } else {
            return "editor";
          }
        } else if (isValueDynamic.value) {
          return "dynamic_html";
        } else if (optionType.value === "icon_library") {
          return "icon";
        } else if (optionType.value === "image") {
          return "image";
        } else {
          return "default";
        }
      });
      const optionValue2 = Vue.computed({
        get() {
          const schema = getOptionSchemaFromPath.value;
          return get(elementOptions.value, props.option, schema.default);
        },
        set(newValue) {
          window.zb.run("editor/elements/update-element-options", {
            elementUID: elementInfo.uid,
            newValues: newValue,
            path: props.option
          });
        }
      });
      return (_ctx, _cache) => {
        const _component_InlineEditor = Vue.resolveComponent("InlineEditor");
        const _component_ElementIcon = Vue.resolveComponent("ElementIcon");
        return renderType.value === "editor" ? (Vue.openBlock(), Vue.createBlock(_component_InlineEditor, Vue.mergeProps({
          key: 0,
          modelValue: optionValue2.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => optionValue2.value = $event)
        }, _ctx.$attrs), null, 16, ["modelValue"])) : renderType.value === "dynamic_html" ? (Vue.openBlock(), Vue.createElementBlock("span", Vue.mergeProps({ key: 1 }, _ctx.$attrs, { innerHTML: optionValue2.value }), null, 16, _hoisted_1$U)) : renderType.value === "icon" ? (Vue.openBlock(), Vue.createBlock(_component_ElementIcon, Vue.mergeProps({
          key: 2,
          "icon-config": optionValue2.value
        }, _ctx.$attrs), null, 16, ["icon-config"])) : renderType.value === "image" ? (Vue.openBlock(), Vue.createElementBlock("img", Vue.mergeProps({
          key: 3,
          src: optionValue2.value
        }, _ctx.$attrs), null, 16, _hoisted_2$D)) : (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(_ctx.htmlTag), Vue.normalizeProps(Vue.mergeProps({ key: 4 }, _ctx.$attrs)), {
          default: Vue.withCtx(() => [
            Vue.createTextVNode(Vue.toDisplayString(optionValue2.value), 1)
          ]),
          _: 1
        }, 16));
      };
    }
  });
  const _hoisted_1$T = ["data-znpbiconfam", "data-znpbicon"];
  const _sfc_main$17 = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementIcon",
    props: {
      iconConfig: { default: () => {
        return {
          family: "Font Awesome 5 Brands Regular",
          name: "wordpress-simple",
          unicode: "uf411"
        };
      } }
    },
    setup(__props) {
      const props = __props;
      const iconUnicode = Vue.computed(() => {
        return JSON.parse(`"\\${props.iconConfig.unicode}"`).trim();
      });
      return (_ctx, _cache) => {
        return _ctx.iconConfig ? (Vue.openBlock(), Vue.createElementBlock("span", {
          key: 0,
          "data-znpbiconfam": _ctx.iconConfig.family,
          "data-znpbicon": iconUnicode.value
        }, null, 8, _hoisted_1$T)) : Vue.createCommentVNode("", true);
      };
    }
  });
  const _sfc_main$16 = /* @__PURE__ */ Vue.defineComponent({
    __name: "Button",
    props: {
      formatter: { default: () => ({}) },
      icon: { default: "" },
      buttontext: { default: "" },
      formatterValue: { default: "" }
    },
    setup(__props) {
      const props = __props;
      const editor = Vue.inject("ZionInlineEditor");
      const isActive = Vue.ref(false);
      const classes = Vue.computed(() => {
        const classes2 = [];
        if (isActive.value) {
          classes2.push("zion-inline-editor-button--active");
        }
        return classes2.join(" ");
      });
      function checkIsActive() {
        isActive.value = editor.editor.formatter.match(...getFormatterArguments());
      }
      function getFormatterArguments() {
        const formatterArguments = [props.formatter];
        if (props.formatterValue) {
          formatterArguments.push({
            value: props.formatterValue
          });
        }
        return formatterArguments;
      }
      function toggleFormatter(event) {
        event.preventDefault();
        console.log(editor.editor.formatter.match(...getFormatterArguments()));
        console.log(editor.editor.formatter.canApply(...getFormatterArguments()));
        editor.editor.formatter.toggle(...getFormatterArguments());
      }
      function onNodeChange() {
        checkIsActive();
      }
      Vue.onMounted(() => {
        checkIsActive();
        editor.editor.on("SelectionChange", onNodeChange);
      });
      Vue.onBeforeUnmount(() => {
        editor.editor.off("SelectionChange", onNodeChange);
      });
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        return _ctx.icon ? (Vue.openBlock(), Vue.createBlock(_component_Icon, {
          key: 0,
          icon: _ctx.icon,
          class: Vue.normalizeClass(classes.value),
          onMousedown: toggleFormatter
        }, null, 8, ["icon", "class"])) : (Vue.openBlock(), Vue.createElementBlock("span", {
          key: 1,
          class: Vue.normalizeClass(["zion-inline-editor-button", classes.value]),
          onMousedownCapture: toggleFormatter
        }, Vue.toDisplayString(_ctx.buttontext), 35));
      };
    }
  });
  const _hoisted_1$S = { class: "zion-inline-editor-panel-color" };
  const _hoisted_2$C = { class: "zion-inline-editor-button" };
  const _sfc_main$15 = /* @__PURE__ */ Vue.defineComponent({
    __name: "ColorPicker",
    emits: ["open-color-picker", "close-color-picker"],
    setup(__props, { emit }) {
      const editor = Vue.inject("ZionInlineEditor");
      const color = Vue.ref(null);
      let justChangeColor = false;
      let changeTimeout = null;
      function onColorChange(newValue) {
        color.value = newValue;
        editor.editor.formatter.apply("forecolor", { value: newValue });
        clearTimeout(changeTimeout);
        changeTimeout = setTimeout(() => {
          justChangeColor = false;
        }, 500);
        justChangeColor = true;
      }
      function onNodeChange() {
        if (!justChangeColor) {
          getActiveColor();
        }
      }
      function getActiveColor() {
        color.value = editor.editor.queryCommandValue("forecolor");
      }
      Vue.onMounted(() => {
        getActiveColor();
        editor.editor.on("NodeChange", onNodeChange);
      });
      Vue.onBeforeUnmount(() => {
        editor.editor.off("NodeChange", onNodeChange);
      });
      return (_ctx, _cache) => {
        const _component_InputColorPicker = Vue.resolveComponent("InputColorPicker");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$S, [
          Vue.createElementVNode("div", _hoisted_2$C, [
            Vue.createVNode(_component_InputColorPicker, {
              modelValue: color.value,
              "show-library": false,
              display: "simple",
              "onUpdate:modelValue": onColorChange,
              onOpen: _cache[0] || (_cache[0] = ($event) => emit("open-color-picker", true)),
              onClose: _cache[1] || (_cache[1] = ($event) => emit("close-color-picker", false))
            }, null, 8, ["modelValue"])
          ])
        ]);
      };
    }
  });
  const ColorPicker_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$14 = /* @__PURE__ */ Vue.defineComponent({
    __name: "PopOver",
    props: {
      icon: { default: "" },
      isActive: { type: Boolean, default: false },
      fullSize: { type: Boolean, default: false }
    },
    setup(__props) {
      const props = __props;
      const iconElementRef = Vue.ref(null);
      const popperRef = Vue.ref({
        x: 0,
        y: 0,
        left: 0
      });
      const buttonClasses = Vue.computed(() => {
        const classes = [];
        if (typeof props.icon !== "undefined") {
          classes.push("zn_pb_icon");
          classes.push(props.icon);
        }
        if (props.isActive) {
          classes.push("zion-inline-editor-button--active");
        }
        return classes.join(" ");
      });
      const modifiers = [
        {
          name: "flip",
          options: {
            fallbackPlacements: ["top", "bottom"]
          }
        }
      ];
      if (props.fullSize) {
        modifiers.push({
          name: "test",
          enabled: true,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn({ state, instance }) {
            const popperSize = state.rects.popper.width;
            const referenceSize = state.rects.reference.width;
            if (popperSize >= referenceSize)
              return;
            state.styles.popper.width = `${referenceSize}px`;
            instance.update();
          }
        });
      }
      Vue.onMounted(() => {
        const InlineEditor = window.document.getElementsByClassName("zion-inline-editor-container")[0];
        popperRef.value = props.fullSize ? InlineEditor : iconElementRef.value.$el;
      });
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_Tooltip = Vue.resolveComponent("Tooltip");
        return Vue.openBlock(), Vue.createBlock(_component_Tooltip, {
          class: "zion-inline-editor-popover-wrapper",
          "tooltip-class": "zion-inline-editor-dropdown hg-popper--no-padding",
          trigger: "click",
          placement: "top",
          "append-to": "element",
          "close-on-outside-click": true,
          "popper-ref": popperRef.value,
          modifiers,
          "show-arrows": false
        }, {
          content: Vue.withCtx(() => [
            Vue.renderSlot(_ctx.$slots, "default")
          ]),
          default: Vue.withCtx(() => [
            Vue.createVNode(_component_Icon, {
              ref_key: "iconElementRef",
              ref: iconElementRef,
              icon: _ctx.icon,
              class: Vue.normalizeClass(buttonClasses.value)
            }, null, 8, ["icon", "class"])
          ]),
          _: 3
        }, 8, ["popper-ref"]);
      };
    }
  });
  const PopOver_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$13 = /* @__PURE__ */ Vue.defineComponent({
    __name: "FontWeight",
    setup(__props) {
      const editor = Vue.inject("ZionInlineEditor");
      const isActive = Vue.ref(false);
      const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
      function checkIfActive() {
        isActive.value = fontWeights.some((fontWeight) => {
          return editor.editor.formatter.match("fontWeight", { value: fontWeight });
        });
      }
      Vue.onBeforeMount(() => {
        checkIfActive();
        editor.editor.on("NodeChange", checkIfActive);
      });
      Vue.onBeforeUnmount(() => {
        editor.editor.off("NodeChange", checkIfActive);
      });
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createBlock(_sfc_main$14, {
          icon: "ite-weight",
          "is-active": isActive.value,
          "full-size": true
        }, {
          default: Vue.withCtx(() => [
            (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(fontWeights, (fontWeight) => {
              return Vue.createVNode(_sfc_main$16, {
                key: fontWeight,
                formatter: "fontWeight",
                "formatter-value": fontWeight,
                buttontext: fontWeight
              }, null, 8, ["formatter-value", "buttontext"]);
            }), 64))
          ]),
          _: 1
        }, 8, ["is-active"]);
      };
    }
  });
  const FontWeight_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$R = { class: "zion-inline-editor-link-wrapper" };
  const _hoisted_2$B = { class: "zion-inline-editor-popover__link-title" };
  const _sfc_main$12 = /* @__PURE__ */ Vue.defineComponent({
    __name: "PanelLink",
    props: {
      fullWidth: { type: Boolean, default: false },
      direction: { default: "bottom" },
      visible: { type: Boolean, default: false }
    },
    setup(__props) {
      const editor = Vue.inject("ZionInlineEditor");
      const isPopOverVisible = Vue.ref(false);
      Vue.ref(false);
      const linkTarget = Vue.ref("_self");
      const linkUrl = Vue.ref("");
      const linkTitle = Vue.ref("");
      const selectOptions = [
        {
          id: "_self",
          name: "Self"
        },
        {
          id: "_blank",
          name: "New Window"
        }
      ];
      const hasLink = Vue.ref(false);
      Vue.computed(() => {
        const classes = [];
        if (hasLink.value) {
          classes.push("zion-inline-editor-button--active");
        }
        return classes.join(" ");
      });
      function onNodeChange(node) {
        if (node.selectionChange) {
          getLink();
        }
      }
      function getLink() {
        const link = editor.editor.dom.getParent(editor.editor.selection.getStart(), "a[href]");
        if (link) {
          linkTarget.value = link.target || "_self";
          linkUrl.value = link.getAttribute("href");
          linkTitle.value = link.getAttribute("title");
          hasLink.value = true;
        } else {
          linkUrl.value = null;
          linkTitle.value = "";
          hasLink.value = false;
        }
      }
      function addLink(closePopper = true) {
        if (linkUrl.value) {
          editor.editor.formatter.apply("link", {
            href: linkUrl.value,
            target: linkTarget.value,
            title: linkTitle.value
          });
        } else {
          editor.editor.formatter.remove("link");
        }
        if (closePopper) {
          isPopOverVisible.value = false;
        }
      }
      Vue.onMounted(() => {
        getLink();
        editor.editor.on("NodeChange", onNodeChange);
      });
      Vue.onBeforeUnmount(() => {
        editor.editor.off("NodeChange", onNodeChange);
      });
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_BaseInput = Vue.resolveComponent("BaseInput");
        const _component_InputWrapper = Vue.resolveComponent("InputWrapper");
        const _component_InputSelect = Vue.resolveComponent("InputSelect");
        return Vue.openBlock(), Vue.createBlock(_sfc_main$14, {
          icon: "ite-link",
          "full-size": true
        }, {
          default: Vue.withCtx(() => [
            Vue.createElementVNode("div", _hoisted_1$R, [
              Vue.createVNode(_component_InputWrapper, {
                title: i18n__namespace.__("Add a link", "zionbuilder")
              }, {
                default: Vue.withCtx(() => [
                  Vue.createVNode(_component_BaseInput, {
                    modelValue: linkUrl.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => linkUrl.value = $event),
                    clearable: true,
                    placeholder: "www.address.com",
                    onKeyup: Vue.withKeys(addLink, ["enter"])
                  }, {
                    prepend: Vue.withCtx(() => [
                      Vue.createVNode(_component_Icon, { icon: "link" })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onKeyup"])
                ]),
                _: 1
              }, 8, ["title"]),
              Vue.createElementVNode("div", _hoisted_2$B, [
                Vue.createVNode(_component_InputWrapper, {
                  title: i18n__namespace.__("Target", "zionbuilder")
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createVNode(_component_InputSelect, {
                      modelValue: linkTarget.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => linkTarget.value = $event),
                      options: selectOptions,
                      placeholder: i18n__namespace.__("Select target", "zionbuilder")
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["title"]),
                Vue.createVNode(_component_InputWrapper, {
                  title: i18n__namespace.__("Title", "zionbuilder")
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createVNode(_component_BaseInput, {
                      modelValue: linkTitle.value,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => linkTitle.value = $event),
                      placeholder: "link_title",
                      clearable: true,
                      onKeyup: Vue.withKeys(addLink, ["enter"])
                    }, null, 8, ["modelValue", "onKeyup"])
                  ]),
                  _: 1
                }, 8, ["title"])
              ])
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const PanelLink_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$11 = /* @__PURE__ */ Vue.defineComponent({
    __name: "TextAlign",
    setup(__props) {
      const editor = Vue.inject("ZionInlineEditor");
      const isActive = Vue.ref(false);
      const buttons = [
        {
          formatter: "alignleft",
          icon: "align--left"
        },
        {
          formatter: "aligncenter",
          icon: "align--center"
        },
        {
          formatter: "alignright",
          icon: "align--right"
        },
        {
          formatter: "alignjustify",
          icon: "align--justify"
        }
      ];
      function checkIfActive() {
        isActive.value = editor.editor.formatter.matchAll(["alignleft", "aligncenter", "alignright", "alignjustify"]).length > 0;
      }
      Vue.onBeforeMount(() => {
        checkIfActive();
        editor.editor.on("NodeChange", checkIfActive);
      });
      Vue.onBeforeUnmount(() => {
        editor.editor.off("NodeChange", checkIfActive);
      });
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createBlock(_sfc_main$14, {
          icon: "ite-alignment",
          "is-active": isActive.value
        }, {
          default: Vue.withCtx(() => [
            (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(buttons, (button) => {
              return Vue.createVNode(_sfc_main$16, {
                key: button.formatter,
                formatter: button.formatter,
                icon: button.icon
              }, null, 8, ["formatter", "icon"]);
            }), 64))
          ]),
          _: 1
        }, 8, ["is-active"]);
      };
    }
  });
  const _hoisted_1$Q = { class: "zion-inline-editor-slider-area" };
  const _sfc_main$10 = /* @__PURE__ */ Vue.defineComponent({
    __name: "FontSize",
    emits: ["started-dragging"],
    setup(__props, { emit }) {
      const editor = Vue.inject("ZionInlineEditor");
      const sliderValue = Vue.ref(null);
      const inputRangeDynamicRef = Vue.ref(null);
      let changeTimeout = null;
      let isCurrentChange = false;
      const options = [
        {
          unit: "px",
          min: 6,
          max: 300,
          step: 1,
          shiftStep: 5
        },
        {
          unit: "%",
          min: 1,
          max: 100,
          step: 1,
          shiftStep: 5
        },
        {
          unit: "rem",
          min: 1,
          max: 6,
          step: 1,
          shiftStep: 1
        },
        {
          unit: "pt",
          min: 1,
          max: 60,
          step: 1,
          shiftStep: 1
        },
        {
          unit: "vh",
          min: 1,
          max: 100,
          step: 5,
          shiftStep: 1
        }
      ];
      function onFontChange(newValue) {
        editor.editor.formatter.apply("fontsize", { value: newValue });
        sliderValue.value = newValue;
        emit("started-dragging");
        clearTimeout(changeTimeout);
        changeTimeout = setTimeout(() => {
          isCurrentChange = false;
        }, 100);
        isCurrentChange = true;
      }
      function onNodeChange() {
        if (!isCurrentChange) {
          getFontSize();
        }
      }
      function getFontSize() {
        sliderValue.value = editor.editor.queryCommandValue("FontSize");
      }
      Vue.onMounted(() => {
        getFontSize();
        editor.editor.on("SelectionChange", onNodeChange);
      });
      Vue.onBeforeUnmount(() => {
        editor.editor.off("SelectionChange", onNodeChange);
      });
      return (_ctx, _cache) => {
        const _component_InputRangeDynamic = Vue.resolveComponent("InputRangeDynamic");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$Q, [
          Vue.createVNode(_component_InputRangeDynamic, {
            ref_key: "inputRangeDynamicRef",
            ref: inputRangeDynamicRef,
            modelValue: sliderValue.value,
            options,
            class: "zion-inline-editor-slider-area--slider",
            "onUpdate:modelValue": onFontChange
          }, null, 8, ["modelValue"])
        ]);
      };
    }
  });
  const FontSize_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$P = { class: "zion-inline-editor-slider-area" };
  const _sfc_main$$ = /* @__PURE__ */ Vue.defineComponent({
    __name: "LineHeight",
    setup(__props) {
      const editor = Vue.inject("ZionInlineEditor");
      const sliderValue = Vue.ref("");
      const inputRangeDynamicRef = Vue.ref(null);
      let changeTimeout = null;
      let isCurrentChange = false;
      const options = [
        {
          unit: "px",
          min: 1,
          max: 400,
          step: 1,
          shiftStep: 5
        },
        {
          unit: "em",
          min: 1,
          max: 100,
          step: 1,
          shiftStep: 5
        },
        {
          unit: "%",
          min: 1,
          max: 100,
          step: 1,
          shiftStep: 5
        },
        {
          unit: "normal",
          min: null,
          max: null,
          step: null,
          shiftStep: null
        }
      ];
      function onHeightChange(newValue) {
        editor.editor.formatter.apply("lineHeight", { value: newValue });
        sliderValue.value = newValue;
        clearTimeout(changeTimeout);
        changeTimeout = setTimeout(() => {
          isCurrentChange = false;
        }, 100);
        isCurrentChange = true;
      }
      function onNodeChange() {
        if (!isCurrentChange) {
          getLineHeight();
        }
      }
      function getLineHeight() {
        sliderValue.value = window.getComputedStyle(editor.editor.selection.getNode()).getPropertyValue("line-height");
      }
      Vue.onMounted(() => {
        getLineHeight();
        editor.editor.on("SelectionChange", onNodeChange);
      });
      Vue.onBeforeUnmount(() => {
        editor.editor.off("SelectionChange", onNodeChange);
      });
      return (_ctx, _cache) => {
        const _component_InputRangeDynamic = Vue.resolveComponent("InputRangeDynamic");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$P, [
          Vue.createVNode(_component_InputRangeDynamic, {
            ref_key: "inputRangeDynamicRef",
            ref: inputRangeDynamicRef,
            modelValue: sliderValue.value,
            options,
            class: "zion-inline-editor-slider-area--slider",
            "onUpdate:modelValue": onHeightChange
          }, null, 8, ["modelValue"])
        ]);
      };
    }
  });
  const LineHeight_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$O = { class: "zion-inline-editor-slider-area" };
  const _sfc_main$_ = /* @__PURE__ */ Vue.defineComponent({
    __name: "LetterSpacing",
    emits: ["started-dragging"],
    setup(__props, { emit }) {
      const editor = Vue.inject("ZionInlineEditor");
      const sliderValue = Vue.ref(null);
      const inputRangeDynamicRef = Vue.ref(null);
      let isCurrentChange = false;
      let changeTimeout = null;
      const options = [
        {
          unit: "px",
          min: 0,
          max: 300,
          step: 1,
          shiftStep: 5
        },
        {
          unit: "rem",
          min: 1,
          max: 10,
          step: 1,
          shiftStep: 1
        },
        {
          unit: "normal",
          min: null,
          max: null,
          step: null,
          shiftStep: null
        }
      ];
      function onLetterChange(newValue) {
        editor.editor.formatter.apply("letterSpacing", { value: newValue });
        sliderValue.value = newValue;
        emit("started-dragging");
        clearTimeout(changeTimeout);
        changeTimeout = setTimeout(() => {
          isCurrentChange = false;
        }, 100);
        isCurrentChange = true;
      }
      function onNodeChange() {
        if (!isCurrentChange) {
          getLetterSpacing();
        }
      }
      function getLetterSpacing() {
        const letterSpacing = window.getComputedStyle(editor.editor.selection.getNode()).getPropertyValue("letter-spacing");
        sliderValue.value = letterSpacing;
      }
      Vue.onMounted(() => {
        editor.editor.formatter.register("letterSpacing", {
          selector: "span,p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img",
          styles: { "letter-spacing": "%value" }
        });
        getLetterSpacing();
        editor.editor.on("SelectionChange", onNodeChange);
      });
      Vue.onBeforeUnmount(() => {
        editor.editor.off("SelectionChange", onNodeChange);
      });
      return (_ctx, _cache) => {
        const _component_InputRangeDynamic = Vue.resolveComponent("InputRangeDynamic");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$O, [
          Vue.createVNode(_component_InputRangeDynamic, {
            ref_key: "inputRangeDynamicRef",
            ref: inputRangeDynamicRef,
            modelValue: sliderValue.value,
            options,
            class: "zion-inline-editor-slider-area--slider",
            "onUpdate:modelValue": onLetterChange
          }, null, 8, ["modelValue"])
        ]);
      };
    }
  });
  const LetterSpacing_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$N = { class: "" };
  const _hoisted_2$A = { class: "zion-inline-editor__font-panel znpb-fancy-scrollbar" };
  const _hoisted_3$s = ["onClick"];
  const _sfc_main$Z = /* @__PURE__ */ Vue.defineComponent({
    __name: "FontsList",
    setup(__props) {
      const { useDataSetsStore } = window.zb.store;
      const editor = Vue.inject("ZionInlineEditor");
      const { fontsListForOption } = useDataSetsStore();
      const activeFont = Vue.ref("");
      function isActive(fontName) {
        return activeFont.value === fontName ? "zion-inline-editor__font-list-item--active" : "";
      }
      function onNodeChange() {
        getFontName();
      }
      function changeFont(font) {
        activeFont.value = font;
        editor.editor.formatter.toggle("fontname", {
          value: font
        });
      }
      function getFontName() {
        activeFont.value = editor.editor.queryCommandValue("fontname");
      }
      Vue.onMounted(() => {
        getFontName();
        editor.editor.on("SelectionChange", onNodeChange);
      });
      Vue.onBeforeUnmount(() => {
        editor.editor.off("SelectionChange", onNodeChange);
      });
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$N, [
          Vue.createElementVNode("ul", _hoisted_2$A, [
            (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(fontsListForOption), (font, i) => {
              return Vue.openBlock(), Vue.createElementBlock("li", {
                key: i,
                class: Vue.normalizeClass(["zion-inline-editor__font-list-item", { "zion-inline-editor__font-list-item--active": isActive(font.id) }]),
                onClick: ($event) => changeFont(font.id)
              }, Vue.toDisplayString(font.name), 11, _hoisted_3$s);
            }), 128))
          ])
        ]);
      };
    }
  });
  const FontsList_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$M = { class: "zion-inline-editor-group" };
  const _sfc_main$Y = /* @__PURE__ */ Vue.defineComponent({
    __name: "FontStyles",
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_Tab = Vue.resolveComponent("Tab");
        const _component_Tabs = Vue.resolveComponent("Tabs");
        return Vue.openBlock(), Vue.createBlock(_sfc_main$14, {
          icon: "ite-font",
          "full-size": true
        }, {
          default: Vue.withCtx(() => [
            Vue.createElementVNode("div", _hoisted_1$M, [
              Vue.createVNode(_component_Tabs, { "tab-style": "minimal" }, {
                default: Vue.withCtx(() => [
                  Vue.createVNode(_component_Tab, {
                    name: i18n__namespace.__("family", "zionbuilder")
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(_sfc_main$Z)
                    ]),
                    _: 1
                  }, 8, ["name"]),
                  Vue.createVNode(_component_Tab, {
                    name: i18n__namespace.__("Heading", "zionbuilder"),
                    class: "zion-inline-editor-group__heading"
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createElementVNode("div", null, [
                        Vue.createVNode(_sfc_main$16, {
                          formatter: "h1",
                          buttontext: "H1"
                        }),
                        Vue.createVNode(_sfc_main$16, {
                          formatter: "h2",
                          buttontext: "H2"
                        }),
                        Vue.createVNode(_sfc_main$16, {
                          formatter: "h3",
                          buttontext: "H3"
                        }),
                        Vue.createVNode(_sfc_main$16, {
                          formatter: "h4",
                          buttontext: "H4"
                        }),
                        Vue.createVNode(_sfc_main$16, {
                          formatter: "h5",
                          buttontext: "H5"
                        }),
                        Vue.createVNode(_sfc_main$16, {
                          formatter: "h6",
                          buttontext: "H6"
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["name"]),
                  Vue.createVNode(_component_Tab, {
                    name: i18n__namespace.__("Size", "zionbuilder")
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(_sfc_main$10)
                    ]),
                    _: 1
                  }, 8, ["name"]),
                  Vue.createVNode(_component_Tab, {
                    name: i18n__namespace.__("Height", "zionbuilder")
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(_sfc_main$$)
                    ]),
                    _: 1
                  }, 8, ["name"]),
                  Vue.createVNode(_component_Tab, {
                    name: i18n__namespace.__("Spacing", "zionbuilder")
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(_sfc_main$_)
                    ]),
                    _: 1
                  }, 8, ["name"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const FontStyles_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$L = ["onMousedown"];
  const _hoisted_2$z = ["onMousedown"];
  const _hoisted_3$r = ["contenteditable"];
  const _sfc_main$X = /* @__PURE__ */ Vue.defineComponent({
    __name: "InlineEditor",
    props: {
      modelValue: { default: "" },
      forcedRootNode: { type: [Boolean, String], default: "" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const TinyMCEEditor = {
        editor: null
      };
      const UIStore = useUIStore();
      const { modelValue } = Vue.toRefs(props);
      const inlineEditorRef = Vue.ref(null);
      const tooltipContentRef = Vue.ref(null);
      const tinyMceReady = Vue.ref(false);
      const showEditor = Vue.ref(false);
      const isDragging = Vue.ref(false);
      const dragButtonOnScreen = Vue.ref(true);
      const initialPosition = Vue.ref({});
      const lastPositionX = Vue.ref(0);
      const lastPositionY = Vue.ref(0);
      const yOffset = Vue.ref(0);
      let windowObject = null;
      const position = Vue.ref({
        offsetY: 75,
        offsetX: 0,
        posX: 0,
        posY: 0
      });
      Vue.provide("ZionInlineEditor", TinyMCEEditor);
      const barStyles = Vue.computed(() => {
        return {
          transform: `translate(${position.value.posX}px, ${position.value.posY}px)`
        };
      });
      function saveContent() {
        emit("update:modelValue", TinyMCEEditor.editor.getContent());
      }
      function initWatcher() {
        Vue.watch(modelValue, (newValue, oldValue) => {
          if (TinyMCEEditor.editor && typeof newValue === "string" && newValue !== oldValue && newValue !== TinyMCEEditor.editor.getContent()) {
            TinyMCEEditor.editor.setContent(newValue);
          }
        });
      }
      function getConfig() {
        return {
          target: inlineEditorRef.value,
          entity_encoding: "raw",
          toolbar: false,
          menubar: false,
          selection_toolbar: false,
          inline: true,
          object_resizing: false,
          setup: (editor) => {
            editor.on("init", () => {
              tinyMceReady.value = true;
              TinyMCEEditor.editor = editor;
              editor.setContent(props.modelValue);
              initWatcher();
            });
            editor.on("change input undo redo", saveContent);
          },
          forced_root_block: "",
          formats: {
            fontSize: {
              selector: "span,p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img",
              classes: "znpb-fontsize",
              styles: { fontSize: "%value" }
            },
            fontWeight: {
              inline: "span",
              selector: "span,p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img",
              classes: "znpb-fontweight",
              styles: { fontWeight: "%value" }
            },
            uppercase: {
              inline: "span",
              selector: "span,p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img",
              styles: { textTransform: "uppercase" }
            },
            blockquote: {
              block: "blockquote",
              wrapper: true,
              classes: "znpb-blockquote",
              exact: true
            },
            italic: { inline: "i", exact: true },
            lineHeight: {
              selector: "span,p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img",
              styles: { "line-height": "%value" }
            }
          }
        };
      }
      function onColorPickerOpen() {
        inlineEditorRef.value.classList.add("mce-content-body--selection-transparent");
      }
      function onColorPickerClose() {
        inlineEditorRef.value.classList.remove("mce-content-body--selection-transparent");
      }
      function startDrag(event) {
        windowObject.addEventListener("mouseup", stopDrag);
        windowObject.addEventListener("mousemove", onDragMove);
        document.body.style.userSelect = "none";
        initialPosition.value = {
          posX: event.clientX,
          posY: event.clientY
        };
        isDragging.value = true;
        yOffset.value = windowObject.pageYOffset;
      }
      function onDragMove(event) {
        position.value = {
          posX: lastPositionX.value + event.pageX - initialPosition.value.posX,
          posY: lastPositionY.value + event.pageY - initialPosition.value.posY - yOffset.value
        };
      }
      function stopDrag() {
        lastPositionX.value = position.value.posX;
        lastPositionY.value = position.value.posY;
        checkDragButtonOnScreen();
        document.body.style.removeProperty("user-select");
        windowObject.removeEventListener("mouseup", stopDrag);
        windowObject.removeEventListener("mousemove", onDragMove);
        isDragging.value = false;
      }
      function checkDragButtonOnScreen() {
        dragButtonOnScreen.value = !isDragButtonOutOfBounds();
      }
      function isDragButtonOutOfBounds() {
        const inlineEditorPosition = getInlineEditorRect();
        if (inlineEditorPosition) {
          return inlineEditorPosition.x < 40;
        }
      }
      function getInlineEditorRect() {
        if (tooltipContentRef.value) {
          return tooltipContentRef.value.getBoundingClientRect();
        }
      }
      function hideEditorOnEscapeKey(event) {
        if (event.keyCode === 27) {
          hideEditor();
          event.stopImmediatePropagation();
        }
      }
      function hideEditor() {
        showEditor.value = false;
      }
      Vue.watch(showEditor, (newValue) => {
        if (newValue) {
          setTimeout(() => {
            document.addEventListener("keydown", hideEditorOnEscapeKey, true);
            document.addEventListener("scroll", hideEditor);
          }, 10);
        } else {
          document.removeEventListener("keydown", hideEditorOnEscapeKey, true);
          document.removeEventListener("scroll", hideEditor, true);
        }
      });
      function checkTextSelection(e) {
        if (!e.view) {
          return;
        }
        const selection = e.view.getSelection();
        if (selection && selection.toString().length > 0) {
          showEditor.value = true;
        }
      }
      Vue.onMounted(() => {
        windowObject = inlineEditorRef.value.ownerDocument.defaultView;
        if (typeof windowObject.tinyMCE !== "undefined") {
          windowObject.tinyMCE.init(getConfig());
        }
      });
      Vue.onBeforeUnmount(() => {
        if (windowObject && typeof windowObject.tinyMCE !== "undefined" && TinyMCEEditor.editor) {
          windowObject.tinyMCE.remove(TinyMCEEditor.editor);
        }
      });
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_Tooltip = Vue.resolveComponent("Tooltip");
        return Vue.openBlock(), Vue.createBlock(_component_Tooltip, {
          ref: "inlineEditorWrapper",
          class: "znpb-inline-editor__wrapper_all",
          "tooltip-class": "znpb-inline-editor__wrapper hg-popper--no-padding hg-popper--no-bg",
          trigger: null,
          placement: "top",
          "append-to": "body",
          "show-arrows": false,
          show: showEditor.value,
          strategy: "fixed",
          "close-on-outside-click": true,
          "hide-on-escape": true,
          onHide: _cache[1] || (_cache[1] = ($event) => showEditor.value = false)
        }, {
          content: Vue.withCtx(() => [
            !Vue.unref(UIStore).isPreviewMode && tinyMceReady.value ? (Vue.openBlock(), Vue.createElementBlock("div", {
              key: 0,
              ref_key: "tooltipContentRef",
              ref: tooltipContentRef,
              class: Vue.normalizeClass(["zion-inline-editor zion-inline-editor-container", { "zion-inline-editor--dragging": isDragging.value }]),
              style: Vue.normalizeStyle(barStyles.value),
              onMousedown: _cache[0] || (_cache[0] = (e) => e.preventDefault())
            }, [
              dragButtonOnScreen.value ? (Vue.openBlock(), Vue.createElementBlock("div", {
                key: 0,
                ref: "dragButton",
                class: "zion-inline-editor-dragButton",
                onMousedown: Vue.withModifiers(startDrag, ["stop"])
              }, [
                Vue.createVNode(_component_Icon, { icon: "ite-move" })
              ], 40, _hoisted_1$L)) : Vue.createCommentVNode("", true),
              Vue.createVNode(_sfc_main$Y),
              Vue.createVNode(_sfc_main$13),
              Vue.createVNode(_sfc_main$16, {
                formatter: "italic",
                icon: "ite-italic"
              }),
              Vue.createVNode(_sfc_main$16, {
                formatter: "underline",
                icon: "ite-underline"
              }),
              Vue.createVNode(_sfc_main$16, {
                formatter: "uppercase",
                icon: "ite-uppercase"
              }),
              Vue.createVNode(_sfc_main$12),
              Vue.createVNode(_sfc_main$16, {
                formatter: "blockquote",
                icon: "ite-quote"
              }),
              Vue.createVNode(_sfc_main$15, {
                onCloseColorPicker: onColorPickerClose,
                onOpenColorPicker: onColorPickerOpen
              }),
              Vue.createVNode(_sfc_main$11),
              !dragButtonOnScreen.value ? (Vue.openBlock(), Vue.createElementBlock("div", {
                key: 1,
                class: "zion-inline-editor-dragButton",
                onMousedown: Vue.withModifiers(startDrag, ["stop"])
              }, [
                Vue.createVNode(_component_Icon, {
                  icon: "more",
                  rotate: 90
                })
              ], 40, _hoisted_2$z)) : Vue.createCommentVNode("", true)
            ], 38)) : Vue.createCommentVNode("", true)
          ]),
          default: Vue.withCtx(() => [
            Vue.createElementVNode("div", {
              ref_key: "inlineEditorRef",
              ref: inlineEditorRef,
              class: Vue.normalizeClass(["znpb-inline-text-editor", { "znpb-inline-text-editor--preview": Vue.unref(UIStore).isPreviewMode }]),
              contenteditable: !Vue.unref(UIStore).isPreviewMode,
              onMouseup: checkTextSelection
            }, null, 42, _hoisted_3$r)
          ]),
          _: 1
        }, 8, ["show"]);
      };
    }
  });
  const InlineEditor_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$K = { class: "znpb-element-toolbox__titleWrapper" };
  const _hoisted_2$y = ["onClick", "onContextmenu"];
  const _hoisted_3$q = { class: "znpb-element-toolbox__title" };
  const _hoisted_4$f = { key: 0 };
  const _hoisted_5$d = { key: 1 };
  const _sfc_main$W = /* @__PURE__ */ Vue.defineComponent({
    __name: "ToolboxTitle",
    props: {
      element: {}
    },
    setup(__props) {
      const props = __props;
      const root2 = Vue.ref(null);
      const UIStore = useUIStore();
      const parents = Vue.computed(() => {
        const parents2 = [];
        let activeElement = props.element;
        while (activeElement) {
          parents2.push(activeElement);
          activeElement = activeElement.parent && activeElement.parent.element_type !== "contentRoot" ? activeElement.parent : null;
        }
        return parents2.reverse();
      });
      function editElement(element) {
        UIStore.editElement(element);
      }
      const exitsTop = Vue.ref(false);
      const exitsRight = Vue.ref(false);
      Vue.watch(
        () => props.element,
        () => {
          Vue.nextTick(() => {
            preventElementExit();
          });
        }
      );
      function preventElementExit() {
        const element = root2.value;
        if (!element) {
          return;
        }
        const boundingClientRect = element.getBoundingClientRect();
        exitsTop.value = boundingClientRect.top + window.scrollY < 0;
        exitsRight.value = boundingClientRect.right > (window.innerWidth || document.documentElement.clientWidth);
      }
      Vue.onMounted(() => {
        preventElementExit();
      });
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        return Vue.openBlock(), Vue.createElementBlock("div", {
          ref_key: "root",
          ref: root2,
          class: Vue.normalizeClass(["znpb-element-toolbox__titleFakeWrapper", {
            "znpb-element-toolbox__titleFakeWrapper--bottom": exitsTop.value,
            "znpb-element-toolbox__titleFakeWrapper--left": exitsRight.value
          }])
        }, [
          Vue.createElementVNode("div", _hoisted_1$K, [
            (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(parents.value, (parent2) => {
              return Vue.openBlock(), Vue.createElementBlock("span", {
                key: parent2.uid,
                class: Vue.normalizeClass(["znpb-element-toolbox__titleContainer", { "znpb-element-toolbox__titleContainer--active": parent2 === Vue.unref(UIStore).editedElement }]),
                onClick: Vue.withModifiers(($event) => editElement(parent2), ["stop"]),
                onContextmenu: Vue.withModifiers(($event) => Vue.unref(UIStore).showElementMenuFromEvent(parent2, $event), ["stop", "prevent"])
              }, [
                Vue.createVNode(_component_Icon, {
                  icon: "select",
                  class: "znpb-element-toolbox__icon",
                  size: 9
                }),
                Vue.createElementVNode("span", _hoisted_3$q, [
                  parent2.isRepeaterProvider ? (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_4$f, "P")) : Vue.createCommentVNode("", true),
                  parent2.isRepeaterConsumer ? (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_5$d, "C")) : Vue.createCommentVNode("", true),
                  Vue.createTextVNode(" " + Vue.toDisplayString(parent2.name), 1)
                ])
              ], 42, _hoisted_2$y);
            }), 128))
          ])
        ], 2);
      };
    }
  });
  const ToolboxTitle_vue_vue_type_style_index_0_lang = "";
  var rafSchd = function rafSchd2(fn) {
    var lastArgs = [];
    var frameId = null;
    var wrapperFn = function wrapperFn2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      lastArgs = args;
      if (frameId) {
        return;
      }
      frameId = requestAnimationFrame(function() {
        frameId = null;
        fn.apply(void 0, lastArgs);
      });
    };
    wrapperFn.cancel = function() {
      if (!frameId) {
        return;
      }
      cancelAnimationFrame(frameId);
      frameId = null;
    };
    return wrapperFn;
  };
  const rafSchd$1 = rafSchd;
  const _hoisted_1$J = ["onMousedown"];
  const _sfc_main$V = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementToolboxResizer",
    props: {
      modelValue: {},
      styleValue: {},
      type: {},
      position: {},
      dragInfo: {}
    },
    emits: ["update:modelValue", "update:dragInfo", "start-dragging", "stop-dragging"],
    setup(__props, { emit }) {
      const props = __props;
      const { Environment: Environment2 } = window.zb.utils;
      const { addEventListener, removeEventListener } = window.zb.editor.useWindows();
      const isDragging = Vue.ref(false);
      const onMouseMoveDebounced = rafSchd$1(onMouseMove);
      const helperStyles = Vue.computed(() => {
        const styleProperty = props.position === "top" || props.position === "bottom" ? "height" : "width";
        return {
          [`${styleProperty}`]: Math.abs(parseInt(props.styleValue)) + "px"
        };
      });
      let initialUnit = "";
      let initialValue = 0;
      let startClientX = 0;
      let startClientY = 0;
      function startSpacingDrag(event) {
        const { clientX, clientY } = event;
        document.body.style.userSelect = "none";
        startClientX = clientX;
        startClientY = clientY;
        isDragging.value = true;
        emit("update:dragInfo", {
          type: props.type,
          position: props.position
        });
        emit("start-dragging");
        const match = typeof props.modelValue === "string" && props.modelValue ? props.modelValue.match(/^([+-]?[0-9]+([.][0-9]*)?|[.][0-9]+)(\D+)$/) : null;
        initialValue = match && match[1] ? parseInt(match[1]) : 0;
        initialUnit = match ? match[3] : "";
        addEventListener("mousemove", onMouseMoveDebounced);
        addEventListener("mouseup", onMouseUp);
      }
      function onMouseMove(event) {
        const controlKey = Environment2.isMac ? "metaKey" : "ctrlKey";
        let distance = ["top", "bottom"].indexOf(props.position) !== -1 ? startClientY - event.clientY : startClientX - event.clientX;
        if (props.position === "left" || props.position === "top") {
          distance = distance * -1;
        }
        if (props.type === "margin" && props.position === "bottom") {
          distance = distance * -1;
        }
        if (props.type === "padding" && props.position === "bottom") {
          distance = distance * -1;
        }
        let updatedValue = initialUnit === "%" ? initialValue + distance * 0.1 : initialValue + distance;
        if (event.shiftKey) {
          updatedValue = Math.round(updatedValue / 5) * 5;
        }
        if (props.type === "padding") {
          updatedValue = Math.max(updatedValue, 0);
        }
        updatedValue = Math.round(updatedValue * 10) / 10;
        if (initialValue === updatedValue) {
          return;
        }
        emit("update:modelValue", {
          type: props.type,
          position: props.position,
          newValue: `${updatedValue}${initialUnit}`,
          isOpposite: event[controlKey]
        });
        emit("update:dragInfo", {
          type: props.type,
          position: props.position,
          isOpposite: event[controlKey]
        });
      }
      function onMouseUp() {
        onMouseMoveDebounced.cancel();
        removeEventListener("mousemove", onMouseMoveDebounced);
        removeEventListener("mouseup", onMouseUp);
        isDragging.value = false;
        emit("update:dragInfo", null);
        emit("stop-dragging");
        document.body.style.userSelect = "";
      }
      Vue.onBeforeUnmount(() => {
        removeEventListener("mousemove", onMouseMoveDebounced);
        removeEventListener("mouseup", onMouseUp);
      });
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", {
          class: Vue.normalizeClass({
            [`znpb-element-toolbox__resize`]: true,
            [`znpb-element-toolbox__resize-${_ctx.type}`]: true,
            [`znpb-element-toolbox__resize--${_ctx.type}-${_ctx.position}`]: true
          }),
          onMousedown: Vue.withModifiers(startSpacingDrag, ["left", "stop"])
        }, [
          Vue.createElementVNode("div", {
            class: "znpb-element-toolbox__resize-value",
            style: Vue.normalizeStyle(helperStyles.value)
          }, [
            Vue.createElementVNode("span", null, Vue.toDisplayString(_ctx.modelValue), 1)
          ], 4)
        ], 42, _hoisted_1$J);
      };
    }
  });
  const ElementToolboxResizer_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$I = ["onMousedown"];
  const _hoisted_2$x = /* @__PURE__ */ Vue.createElementVNode("span", { class: "znpb-element-toolbox__resize-width-bg" }, null, -1);
  const _hoisted_3$p = [
    _hoisted_2$x
  ];
  const _sfc_main$U = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementWidthHeightResizer",
    props: {
      modelValue: {},
      type: {},
      position: {}
    },
    emits: ["update:modelValue", "update:dragInfo", "start-dragging", "stop-dragging"],
    setup(__props, { emit }) {
      const props = __props;
      const { Environment: Environment2 } = window.zb.utils;
      const { addEventListener, removeEventListener } = window.zb.editor.useWindows();
      const isDragging = Vue.ref(false);
      const onMouseMoveDebounced = rafSchd$1(onMouseMove);
      let initialUnit = "";
      let initialValue = 0;
      let startClientX = 0;
      let startClientY = 0;
      function startSpacingDrag(event) {
        const { clientX, clientY } = event;
        document.body.style.userSelect = "none";
        startClientX = clientX;
        startClientY = clientY;
        isDragging.value = true;
        emit("update:dragInfo", {
          type: props.type,
          position: props.position
        });
        emit("start-dragging");
        const match = typeof props.modelValue === "string" && props.modelValue ? props.modelValue.match(/^([+-]?[0-9]+([.][0-9]*)?|[.][0-9]+)(\D+)$/) : null;
        initialValue = match && match[1] ? parseInt(match[1]) : 0;
        initialUnit = match ? match[3] : "";
        addEventListener("mousemove", onMouseMoveDebounced);
        addEventListener("mouseup", onMouseUp);
      }
      function onMouseMove(event) {
        const controlKey = Environment2.isMac ? "metaKey" : "ctrlKey";
        let distance = ["top", "bottom"].indexOf(props.position) !== -1 ? event.clientY - startClientY : event.clientX - startClientX;
        if (props.position === "left") {
          distance = distance * -1;
        }
        let updatedValue = initialUnit === "%" ? initialValue + distance * 0.1 : initialValue + distance;
        if (event.shiftKey) {
          updatedValue = Math.round(updatedValue / 5) * 5;
        }
        updatedValue = Math.round(updatedValue * 10) / 10;
        if (initialValue === updatedValue) {
          return;
        }
        emit("update:modelValue", {
          type: props.type,
          position: props.position,
          newValue: `${updatedValue}${initialUnit}`,
          isOpposite: event[controlKey]
        });
        emit("update:dragInfo", {
          type: props.type,
          position: props.position,
          isOpposite: event[controlKey]
        });
      }
      function onMouseUp() {
        onMouseMoveDebounced.cancel();
        removeEventListener("mousemove", onMouseMoveDebounced);
        removeEventListener("mouseup", onMouseUp);
        isDragging.value = false;
        emit("update:dragInfo", null);
        emit("stop-dragging");
        document.body.style.userSelect = "";
      }
      Vue.onBeforeUnmount(() => {
        removeEventListener("mousemove", onMouseMoveDebounced);
        removeEventListener("mouseup", onMouseUp);
      });
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", {
          class: Vue.normalizeClass(["znpb-element-toolbox__resize-width znpb-element-toolbox__resize-dimensions", {
            [`znpb-element-toolbox__resize-width--${_ctx.position}`]: true,
            [`znpb-element-toolbox__resize-dimensions--${_ctx.position === "top" || _ctx.position === "bottom" ? "height" : "width"}`]: true
          }]),
          onMousedown: Vue.withModifiers(startSpacingDrag, ["left", "stop"])
        }, _hoisted_3$p, 42, _hoisted_1$I);
      };
    }
  });
  const ElementWidthHeightResizer_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$T = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementToolbox",
    props: {
      element: {}
    },
    setup(__props) {
      var _a;
      const props = __props;
      const { useResponsiveDevices: useResponsiveDevices2 } = window.zb.composables;
      const UIStore = useUIStore();
      const { activeResponsiveDeviceInfo: activeResponsiveDeviceInfo2 } = useResponsiveDevices2();
      const dimensionPositionsMap = {
        width: ["left", "right"],
        height: ["top", "bottom"]
      };
      const rectangle = Vue.ref(null);
      const canvas = (_a = window.document.getElementById("znpb-editor-iframe")) == null ? void 0 : _a.contentWindow;
      const dragInfo = Vue.ref(null);
      let observer = null;
      const toolboxClasses = Vue.computed(() => {
        const classes = {};
        classes["znpb-element-toolbox--dragging"] = isAnyDragging.value;
        classes["znpb-element-toolbox--loopProvider"] = props.element.isRepeaterProvider;
        classes["znpb-element-toolbox--loopConsumer"] = props.element.isRepeaterConsumer;
        if (dragInfo.value !== null) {
          classes[`znpb-element-toolbox__resize-${dragInfo.value.type}-${dragInfo.value.position}--dragging`] = true;
          if (dragInfo.value.isOpposite) {
            const reversedPosition = getReversedPosition(dragInfo.value.position);
            classes[`znpb-element-toolbox__resize-${dragInfo.value.type}-${reversedPosition}--dragging`] = true;
          }
        }
        return classes;
      });
      const canShowToolbox = Vue.computed(() => {
        if (UIStore.isPreviewMode) {
          return false;
        }
        if (!props.element) {
          return false;
        }
        if (!props.element.isVisible) {
          return false;
        }
        if (props.element.elementDefinition.is_child) {
          return false;
        }
        return true;
      });
      const toolboxStyles = Vue.ref(null);
      function repositionToolbox() {
        const domElement = canvas.document.getElementById(props.element.uid);
        if (!domElement) {
          return;
        }
        const { top, left, width, height } = domElement.getBoundingClientRect();
        toolboxStyles.value = {
          width: `${width}px`,
          height: `${height}px`,
          top: `${top + canvas.scrollY}px`,
          left: `${left + (canvas == null ? void 0 : canvas.scrollX)}px`
        };
      }
      const isAnyDragging = Vue.computed(() => {
        return UIStore.isElementDragging || !!dragInfo.value;
      });
      const spacingPositions = ["top", "bottom", "left", "right"];
      const spacingTypes = ["padding", "margin"];
      function updateElementStyle(dragInfo2) {
        const { type, position, newValue, isOpposite } = dragInfo2;
        if (!props.element) {
          return;
        }
        window.zb.run("editor/elements/update-element-options", {
          elementUID: props.element.uid,
          newValues: `${newValue}`,
          path: `_styles.wrapper.styles.${activeResponsiveDeviceInfo2.value.id}.default.${type}-${position}`
        });
        if (isOpposite) {
          const reversedPosition = getReversedPosition(position);
          window.zb.run("editor/elements/update-element-options", {
            elementUID: props.element.uid,
            newValues: `${newValue}`,
            path: `_styles.wrapper.styles.${activeResponsiveDeviceInfo2.value.id}.default.${type}-${reversedPosition}`
          });
        }
      }
      function updateElementSize(dragInfo2) {
        const { type, newValue } = dragInfo2;
        window.zb.run("editor/elements/update-element-options", {
          elementUID: props.element.uid,
          newValues: `${newValue}`,
          path: `_styles.wrapper.styles.${activeResponsiveDeviceInfo2.value.id}.default.${type}`
        });
      }
      function getReversedPosition(position) {
        let reversePositionLocation;
        switch (position) {
          case "top":
            reversePositionLocation = "bottom";
            break;
          case "bottom":
            reversePositionLocation = "top";
            break;
          case "left":
            reversePositionLocation = "right";
            break;
          case "right":
            reversePositionLocation = "left";
            break;
        }
        return reversePositionLocation;
      }
      const savedModel = Vue.computed(() => {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X;
        const activeDevice = activeResponsiveDeviceInfo2.value.id;
        return {
          ["padding-right"]: (_e = (_d = (_c = (_b = (_a2 = props.element.options) == null ? void 0 : _a2._styles) == null ? void 0 : _b.wrapper) == null ? void 0 : _c.styles) == null ? void 0 : _d[activeDevice]) == null ? void 0 : _e.default["padding-right"],
          ["padding-left"]: (_j = (_i = (_h = (_g = (_f = props.element.options) == null ? void 0 : _f._styles) == null ? void 0 : _g.wrapper) == null ? void 0 : _h.styles) == null ? void 0 : _i[activeDevice]) == null ? void 0 : _j.default["padding-left"],
          ["padding-top"]: (_o = (_n = (_m = (_l = (_k = props.element.options) == null ? void 0 : _k._styles) == null ? void 0 : _l.wrapper) == null ? void 0 : _m.styles) == null ? void 0 : _n[activeDevice]) == null ? void 0 : _o.default["padding-top"],
          ["padding-bottom"]: (_t = (_s = (_r = (_q = (_p = props.element.options) == null ? void 0 : _p._styles) == null ? void 0 : _q.wrapper) == null ? void 0 : _r.styles) == null ? void 0 : _s[activeDevice]) == null ? void 0 : _t.default["padding-bottom"],
          ["margin-right"]: (_y = (_x = (_w = (_v = (_u = props.element.options) == null ? void 0 : _u._styles) == null ? void 0 : _v.wrapper) == null ? void 0 : _w.styles) == null ? void 0 : _x[activeDevice]) == null ? void 0 : _y.default["margin-right"],
          ["margin-left"]: (_D = (_C = (_B = (_A = (_z = props.element.options) == null ? void 0 : _z._styles) == null ? void 0 : _A.wrapper) == null ? void 0 : _B.styles) == null ? void 0 : _C[activeDevice]) == null ? void 0 : _D.default["margin-left"],
          ["margin-top"]: (_I = (_H = (_G = (_F = (_E = props.element.options) == null ? void 0 : _E._styles) == null ? void 0 : _F.wrapper) == null ? void 0 : _G.styles) == null ? void 0 : _H[activeDevice]) == null ? void 0 : _I.default["margin-top"],
          ["margin-bottom"]: (_N = (_M = (_L = (_K = (_J = props.element.options) == null ? void 0 : _J._styles) == null ? void 0 : _K.wrapper) == null ? void 0 : _L.styles) == null ? void 0 : _M[activeDevice]) == null ? void 0 : _N.default["margin-bottom"],
          ["width"]: (_S = (_R = (_Q = (_P = (_O = props.element.options) == null ? void 0 : _O._styles) == null ? void 0 : _P.wrapper) == null ? void 0 : _Q.styles) == null ? void 0 : _R[activeDevice]) == null ? void 0 : _S.default["width"],
          ["height"]: (_X = (_W = (_V = (_U = (_T = props.element.options) == null ? void 0 : _T._styles) == null ? void 0 : _U.wrapper) == null ? void 0 : _V.styles) == null ? void 0 : _W[activeDevice]) == null ? void 0 : _X.default["height"]
        };
      });
      const elementSizeAndSpacing = Vue.ref(null);
      Vue.watch(
        savedModel,
        (newValue, oldValue) => {
          const savedValues = savedModel.value;
          if (isEqual(newValue, oldValue)) {
            return;
          }
          Vue.nextTick(() => {
            if (!props.element || !savedValues) {
              return null;
            }
            const domElement = canvas.document.getElementById(props.element.uid);
            if (!domElement) {
              return null;
            }
            const computedStyles = window.getComputedStyle(domElement);
            elementSizeAndSpacing.value = {
              width: {
                value: typeof savedValues["width"] !== "undefined" ? savedValues["width"] : computedStyles.width,
                styleValue: computedStyles.width
              },
              height: {
                value: typeof savedValues["height"] !== "undefined" ? savedValues["height"] : computedStyles.height,
                styleValue: computedStyles.height
              },
              "padding-top": {
                value: typeof savedValues["padding-top"] !== "undefined" ? savedValues["padding-top"] : computedStyles.paddingTop,
                styleValue: computedStyles.paddingTop
              },
              "padding-bottom": {
                value: typeof savedValues["padding-bottom"] !== "undefined" ? savedValues["padding-bottom"] : computedStyles.paddingBottom,
                styleValue: computedStyles.paddingBottom
              },
              "padding-left": {
                value: typeof savedValues["padding-left"] !== "undefined" ? savedValues["padding-left"] : computedStyles.paddingLeft,
                styleValue: computedStyles.paddingLeft
              },
              "padding-right": {
                value: typeof savedValues["padding-right"] !== "undefined" ? savedValues["padding-right"] : computedStyles.paddingRight,
                styleValue: computedStyles.paddingRight
              },
              "margin-top": {
                value: typeof savedValues["margin-top"] !== "undefined" ? savedValues["margin-top"] : computedStyles.marginTop,
                styleValue: computedStyles.marginTop
              },
              "margin-bottom": {
                value: typeof savedValues["margin-bottom"] !== "undefined" ? savedValues["margin-bottom"] : computedStyles.marginBottom,
                styleValue: computedStyles.marginBottom
              },
              "margin-left": {
                value: typeof savedValues["margin-left"] !== "undefined" ? savedValues["margin-left"] : computedStyles.marginLeft,
                styleValue: computedStyles.marginLeft
              },
              "margin-right": {
                value: typeof savedValues["margin-right"] !== "undefined" ? savedValues["margin-right"] : computedStyles.marginRight,
                styleValue: computedStyles.marginRight
              }
            };
          });
        },
        {
          immediate: true
        }
      );
      Vue.watch(savedModel, () => {
        Vue.nextTick(() => {
          repositionToolbox();
        });
      });
      function createObserver() {
        if (!props.element) {
          return null;
        }
        const target = canvas.document.getElementById(props.element.uid);
        if (!target) {
          return null;
        }
        const callback = (mutationList) => {
          mutationList.forEach(() => {
            repositionToolbox();
          });
        };
        const observer2 = new ResizeObserver(callback);
        observer2.observe(target, { box: "border-box" });
        return observer2;
      }
      Vue.onMounted(() => {
        window.addEventListener("resize", () => {
          repositionToolbox();
        });
        observer = createObserver();
      });
      Vue.onBeforeUnmount(() => {
        if (observer !== null) {
          observer.disconnect();
        }
        window.removeEventListener("resize", repositionToolbox);
      });
      return (_ctx, _cache) => {
        const _component_AddElementIcon = Vue.resolveComponent("AddElementIcon");
        return _ctx.element && canShowToolbox.value ? Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", {
          key: 0,
          ref_key: "rectangle",
          ref: rectangle,
          class: Vue.normalizeClass(["znpb-element-toolbox", toolboxClasses.value]),
          style: Vue.normalizeStyle(toolboxStyles.value ? toolboxStyles.value : {}),
          onContextmenu: _cache[6] || (_cache[6] = Vue.withModifiers(($event) => Vue.unref(UIStore).showElementMenuFromEvent(_ctx.element, $event), ["stop", "prevent"]))
        }, [
          toolboxStyles.value ? (Vue.openBlock(), Vue.createBlock(_sfc_main$W, {
            key: 0,
            element: _ctx.element
          }, null, 8, ["element"])) : Vue.createCommentVNode("", true),
          elementSizeAndSpacing.value ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 1 }, [
            (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(dimensionPositionsMap, (positions, type) => {
              return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: type }, [
                (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(positions, (position) => {
                  return Vue.openBlock(), Vue.createBlock(_sfc_main$U, {
                    key: `${type}-${position}`,
                    dragInfo: dragInfo.value,
                    "onUpdate:dragInfo": _cache[0] || (_cache[0] = ($event) => dragInfo.value = $event),
                    type,
                    position,
                    "model-value": elementSizeAndSpacing.value[type].value,
                    "style-value": elementSizeAndSpacing.value[type].styleValue,
                    "onUpdate:modelValue": updateElementSize,
                    onStartDragging: _cache[1] || (_cache[1] = ($event) => Vue.unref(UIStore).isToolboxDragging = true),
                    onStopDragging: _cache[2] || (_cache[2] = ($event) => Vue.unref(UIStore).isToolboxDragging = false)
                  }, null, 8, ["dragInfo", "type", "position", "model-value", "style-value"]);
                }), 128))
              ], 64);
            }), 64)),
            (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(spacingTypes, (type, index2) => {
              return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
                (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(spacingPositions, (position) => {
                  return Vue.createVNode(_sfc_main$V, {
                    key: `${type}-${position}-${index2}`,
                    dragInfo: dragInfo.value,
                    "onUpdate:dragInfo": _cache[3] || (_cache[3] = ($event) => dragInfo.value = $event),
                    type,
                    position,
                    "model-value": elementSizeAndSpacing.value[`${type}-${position}`].value,
                    "style-value": elementSizeAndSpacing.value[`${type}-${position}`].styleValue,
                    "onUpdate:modelValue": updateElementStyle,
                    onStartDragging: _cache[4] || (_cache[4] = ($event) => Vue.unref(UIStore).isToolboxDragging = true),
                    onStopDragging: _cache[5] || (_cache[5] = ($event) => Vue.unref(UIStore).isToolboxDragging = false)
                  }, null, 8, ["dragInfo", "type", "position", "model-value", "style-value"]);
                }), 64))
              ], 64);
            }), 64))
          ], 64)) : Vue.createCommentVNode("", true),
          Vue.createVNode(_component_AddElementIcon, {
            element: _ctx.element,
            placement: "next",
            position: "middle"
          }, null, 8, ["element"])
        ], 38)), [
          [Vue.vShow, toolboxStyles.value]
        ]) : Vue.createCommentVNode("", true);
      };
    }
  });
  const ElementToolbox_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$S = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementStyles",
    props: {
      styles: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return _ctx.styles && _ctx.styles.length ? (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent("style"), { key: 0 }, {
          default: Vue.withCtx(() => [
            Vue.createTextVNode(Vue.toDisplayString(_ctx.styles), 1)
          ]),
          _: 1
        })) : Vue.createCommentVNode("", true);
      };
    }
  });
  const _hoisted_1$H = { class: "znpb-preview__element-loading" };
  const _hoisted_2$w = ["src"];
  const _sfc_main$R = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementLoading",
    setup(__props) {
      const imageSrc = window.ZnPbInitialData.urls.loader;
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$H, [
          Vue.createElementVNode("img", { src: Vue.unref(imageSrc) }, null, 8, _hoisted_2$w)
        ]);
      };
    }
  });
  const ElementLoading_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$G = ["data-zion-video-background"];
  const _sfc_main$Q = /* @__PURE__ */ Vue.defineComponent({
    __name: "VideoBackground",
    props: {
      videoConfig: { default: () => ({}) }
    },
    setup(__props) {
      const props = __props;
      const elementRef = Vue.ref(null);
      const videoInstance = Vue.ref(null);
      const getVideoSettings = Vue.computed(() => JSON.stringify(props.videoConfig));
      const hasVideoSource = Vue.computed(() => {
        const videoSource = props.videoConfig && props.videoConfig.videoSource ? props.videoConfig.videoSource : "local";
        if (videoSource === "youtube" && props.videoConfig.youtubeURL) {
          return true;
        } else if (videoSource === "vimeo" && props.videoConfig.vimeoURL) {
          return true;
        } else if (videoSource === "local" && props.videoConfig.mp4) {
          return true;
        }
        return false;
      });
      Vue.watch(
        () => props.videoConfig,
        (newValue, oldValue) => {
          if (!isEqual(newValue, oldValue)) {
            Vue.nextTick(() => {
              initVideo();
            });
          }
        }
      );
      function initVideo() {
        var _a, _b;
        if (!hasVideoSource.value) {
          return;
        }
        if (videoInstance.value) {
          videoInstance.value.destroy();
        }
        const script = (_b = (_a = window.document.getElementById("znpb-editor-iframe")) == null ? void 0 : _a.contentWindow) == null ? void 0 : _b.zbScripts.video;
        if (script) {
          videoInstance.value = new script(elementRef.value, __spreadProps(__spreadValues({}, props.videoConfig), {
            isBackgroundVideo: true
          }));
        } else {
          console.error("video script not found");
        }
      }
      Vue.onMounted(() => {
        initVideo();
      });
      return (_ctx, _cache) => {
        return hasVideoSource.value ? (Vue.openBlock(), Vue.createElementBlock("div", {
          key: 0,
          ref_key: "elementRef",
          ref: elementRef,
          class: "zb__videoBackground-wrapper zbjs_video_background hg-video-bg__wrapper",
          "data-zion-video-background": getVideoSettings.value
        }, null, 8, _hoisted_1$G)) : Vue.createCommentVNode("", true);
      };
    }
  });
  let scripts = {};
  let loaded = false;
  let loadedScripts;
  let loadedStyles;
  const ScriptsLoader = (window2) => {
    const getAvailableScripts = () => {
      const allScripts = window2.document.getElementsByTagName("script");
      Array.from(allScripts).forEach((domNode) => {
        if (domNode.src) {
          scripts[domNode.src] = "done";
        }
      });
      return scripts;
    };
    function reset() {
      scripts = {};
      loaded = false;
      loadedScripts = {};
      loadedStyles = {};
    }
    const getAvailableStyles = () => {
      const styles = {};
      const allStyles = window2.document.getElementsByTagName("link");
      Array.from(allStyles).forEach((domNode) => {
        if (domNode.rel === "stylesheet") {
          styles[domNode.href] = "done";
        }
      });
      return styles;
    };
    if (!loaded) {
      loadedScripts = getAvailableScripts();
      loadedStyles = getAvailableStyles();
      loaded = true;
    }
    const loadScript = (scriptConfig) => {
      const scriptType = scriptConfig.src.indexOf(".js") !== -1 || scriptConfig.src.indexOf(".ts") !== -1 ? "javascript" : scriptConfig.src.indexOf(".css") !== -1 ? "css" : false;
      if (scriptType === "javascript") {
        if (scriptConfig.data) {
          addInlineJavascript(scriptConfig.data);
        }
        if (scriptConfig.before) {
          addInlineJavascript(scriptConfig.before);
        }
        return loadJavaScriptFile(scriptConfig.src).then(() => {
          if (scriptConfig.after) {
            addInlineJavascript(scriptConfig.after);
          }
        }).catch((err) => console.error(err));
      } else if (scriptType === "css") {
        return loadCssFile(scriptConfig.src).catch((err) => console.error(err));
      }
    };
    const addInlineJavascript = (code) => {
      const javascriptTag = window2.document.createElement("script");
      javascriptTag.type = "text/javascript";
      const inlineScript = window2.document.createTextNode(code);
      javascriptTag.appendChild(inlineScript);
      window2.document.body.appendChild(javascriptTag);
    };
    const loadJavaScriptFile = (url) => {
      if (typeof loadedScripts[url] === "object") {
        return loadedScripts[url];
      } else if (loadedScripts[url] === "done") {
        return Promise.resolve(url);
      } else if (loadedScripts[url] === "error") {
        return Promise.reject(url);
      }
      const promise = new Promise((resolve, reject) => {
        const javascriptTag = window2.document.createElement("script");
        javascriptTag.src = url;
        if (url.indexOf("//127.0.0.1") === 0) {
          javascriptTag.type = "module";
        }
        javascriptTag.onload = () => {
          loadedScripts[url] = "done";
          resolve(window2.document);
        };
        javascriptTag.onerror = () => {
          loadedScripts[url] = "error";
          reject(window2.document);
        };
        window2.document.body.appendChild(javascriptTag);
      });
      loadedScripts[url] = promise;
      return promise;
    };
    const loadCssFile = (url) => {
      if (typeof loadedStyles[url] === "object") {
        return loadedStyles[url];
      } else if (loadedStyles[url] === "done") {
        return Promise.resolve(url);
      } else if (loadedStyles[url] === "error") {
        return Promise.reject(url);
      }
      const promise = new Promise((resolve, reject) => {
        const styleLink = window2.document.createElement("link");
        styleLink.type = "text/css";
        styleLink.rel = "stylesheet";
        styleLink.href = url;
        styleLink.onload = () => {
          loadedStyles[url] = "done";
          resolve(window2.document);
        };
        styleLink.onerror = () => {
          reject(window2.document);
          loadedStyles[url] = "error";
        };
        window2.document.getElementsByTagName("head")[0].appendChild(styleLink);
      });
      loadedStyles[url] = promise;
      return promise;
    };
    return {
      getAvailableScripts,
      getAvailableStyles,
      loadScript,
      addInlineJavascript,
      loadJavaScriptFile,
      loadCssFile,
      reset,
      scripts,
      loadedScripts,
      loadedStyles
    };
  };
  const _hoisted_1$F = {
    key: 0,
    class: "znpb__server-element--empty"
  };
  const _hoisted_2$v = ["src"];
  const _hoisted_3$o = {
    key: 1,
    class: "znpb__server-element-loader--loading"
  };
  const _sfc_main$P = /* @__PURE__ */ Vue.defineComponent({
    __name: "ServerComponent",
    props: {
      element: {},
      options: {},
      api: {}
    },
    setup(__props) {
      const props = __props;
      const { applyFilters: applyFilters2, addAction: addAction2, removeAction: removeAction2, doAction } = window.zb.hooks;
      const logoUrl = window.ZBCommonData.environment.urls.logo;
      const elementContentRef = Vue.ref(null);
      const elementContent = Vue.ref("");
      const loading = Vue.ref(true);
      const elementNotSelectable = Vue.ref(false);
      const elementDataForRender = Vue.computed(() => {
        const elementOptions = props.element.elementDefinition.options;
        if (!elementOptions) {
          return {};
        }
        const _a = props.options, { _styles: newMedia, _advanced_options: newAdvanced } = _a, remainingNewProperties = __objRest(_a, ["_styles", "_advanced_options"]);
        const optionsThatRequireServerRequest = {};
        Object.keys(remainingNewProperties).forEach((optionID) => {
          const optionSchema = elementOptions[optionID];
          if (typeof optionSchema !== "undefined") {
            if (!optionSchema.css_style || optionSchema.rerender) {
              optionsThatRequireServerRequest[optionID] = remainingNewProperties[optionID];
            }
          } else {
            optionsThatRequireServerRequest[optionID] = remainingNewProperties[optionID];
          }
        });
        return JSON.stringify(optionsThatRequireServerRequest);
      });
      Vue.watch(elementDataForRender, (newValue, oldValue) => {
        if (newValue !== oldValue) {
          debouncedGetElementFromServer();
        }
      });
      function setInnerHTML(content) {
        const elm = elementContentRef.value;
        elm.innerHTML = content;
        Array.from(elm.querySelectorAll("script")).forEach((oldScript) => {
          var _a;
          const newScript = document.createElement("script");
          Array.from(oldScript.attributes).forEach((attr) => newScript.setAttribute(attr.name, attr.value));
          newScript.appendChild(document.createTextNode(oldScript.innerHTML));
          (_a = oldScript.parentNode) == null ? void 0 : _a.replaceChild(newScript, oldScript);
        });
        elm.addEventListener("load", checkElementHeight);
      }
      const serverComponentRenderData = applyFilters2("zionbuilder/server_component/data", {
        element_data: props.element
      });
      function loadScripts(scripts2) {
        const { loadScript } = ScriptsLoader(
          window.document.getElementById("znpb-editor-iframe").contentWindow
        );
        return new Promise((resolve) => {
          Object.keys(scripts2).map((scriptHandle) => {
            const scriptConfig = scripts2[scriptHandle];
            scriptConfig.handle = scriptConfig.handle ? scriptConfig.handle : scriptHandle;
            if (scriptConfig.src) {
              return loadScript(scriptConfig);
            }
          });
          resolve(true);
        });
      }
      function getElementFromServer() {
        loading.value = true;
        props.element.serverRequester.request(
          {
            type: "render_element",
            config: serverComponentRenderData
          },
          (response) => {
            elementContent.value = response.data.element;
            doAction("zionbuilder/server_component/before_rendered", elementContentRef.value, props.element, props.options);
            setInnerHTML(response.data.element);
            setBodyClasses(response.data.body_classes);
            loadScripts(response.data.scripts).then(() => {
              loading.value = false;
              Vue.nextTick(() => {
                setTimeout(() => {
                  checkForContentHeight();
                  doAction("zionbuilder/server_component/rendered", elementContentRef.value, props.element, props.options);
                }, 20);
              });
            });
          },
          function(message) {
            loading.value = false;
            console.log("server Request fail", message);
          }
        );
      }
      const debouncedGetElementFromServer = debounce(function() {
        getElementFromServer();
      }, 500);
      function setBodyClasses(classes) {
        var _a, _b, _c;
        const body = (_c = (_b = (_a = window.document.getElementById("znpb-editor-iframe")) == null ? void 0 : _a.contentWindow) == null ? void 0 : _b.document) == null ? void 0 : _c.body;
        if (body) {
          classes.forEach((cssClass) => {
            body.classList.add(cssClass);
          });
        }
      }
      function checkForContentHeight() {
        if (!elementContentRef.value) {
          return;
        }
        const loadableElements = elementContentRef.value.querySelectorAll("img, iframe, video");
        let loadableElementsCount = loadableElements.length;
        const loadCallback = () => {
          loadableElementsCount--;
          if (loadableElementsCount === 0) {
            checkElementHeight();
          }
        };
        if (loadableElementsCount > 0) {
          loadableElements.forEach((element) => {
            element.addEventListener("load", loadCallback);
            element.addEventListener("error", loadCallback);
          });
        } else {
          checkElementHeight();
        }
      }
      function checkElementHeight() {
        if (elementContentRef.value) {
          const { height } = elementContentRef.value.getBoundingClientRect();
          elementNotSelectable.value = height < 2;
        }
      }
      Vue.onMounted(() => {
        getElementFromServer();
      });
      addAction2("zionbuilder/server_component/refresh", debouncedGetElementFromServer);
      Vue.onBeforeUnmount(() => {
        removeAction2("zionbuilder/server_component/refresh", debouncedGetElementFromServer);
      });
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", null, [
          Vue.renderSlot(_ctx.$slots, "start"),
          Vue.createElementVNode("div", {
            ref_key: "elementContentRef",
            ref: elementContentRef,
            class: Vue.normalizeClass({ "znpb__server-element--loading": loading.value })
          }, null, 2),
          !loading.value && elementContent.value.length === 0 ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$F, [
            Vue.createElementVNode("img", { src: Vue.unref(logoUrl) }, null, 8, _hoisted_2$v)
          ])) : Vue.createCommentVNode("", true),
          loading.value ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_3$o)) : Vue.createCommentVNode("", true),
          Vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  const ServerComponent_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$E = { class: "znpb-element--not-found" };
  const _sfc_main$O = /* @__PURE__ */ Vue.defineComponent({
    __name: "InvalidElement",
    setup(__props) {
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$E, [
          Vue.renderSlot(_ctx.$slots, "start"),
          Vue.createTextVNode(" " + Vue.toDisplayString(i18n__namespace.__("element not found", "zionbuilder")) + " ", 1),
          Vue.renderSlot(_ctx.$slots, "end")
        ]);
      };
    }
  });
  const InvalidElement_vue_vue_type_style_index_0_lang = "";
  const { applyFilters: applyFilters$3 } = window.zb.hooks;
  function useElementComponent(element) {
    const elementComponent = Vue.shallowRef(null);
    const elementsDefinitionStore = useElementDefinitionsStore();
    const elementType = elementsDefinitionStore.getElementDefinition(element.element_type);
    const fetchElementComponent = () => {
      loadElementAssets().then(() => {
        let component;
        if (elementType.element_type === "invalid") {
          component = _sfc_main$O;
        } else if (elementType.component) {
          component = elementType.component;
        } else {
          component = _sfc_main$P;
        }
        elementComponent.value = applyFilters$3("zionbuilder/element/component", component, element);
      });
    };
    const loadElementAssets = () => {
      const { loadScript } = ScriptsLoader(
        window.document.getElementById("znpb-editor-iframe").contentWindow
      );
      return Promise.all([
        ...Object.keys(elementType.scripts).map((scriptHandle) => {
          const scriptConfig = elementType.scripts[scriptHandle];
          scriptConfig.handle = scriptConfig.handle ? scriptConfig.handle : scriptHandle;
          if (scriptConfig.src) {
            return loadScript(scriptConfig);
          }
        }),
        ...Object.keys(elementType.styles).map((scriptHandle) => {
          const scriptConfig = elementType.styles[scriptHandle];
          scriptConfig.handle = scriptConfig.handle ? scriptConfig.handle : scriptHandle;
          if (scriptConfig.src) {
            return loadScript(scriptConfig);
          }
        })
      ]);
    };
    return {
      elementComponent,
      fetchElementComponent
    };
  }
  const { getImage } = window.zb.utils;
  const { applyFilters: applyFilters$2 } = window.zb.hooks;
  const { useResponsiveDevices: useResponsiveDevices$1 } = window.zb.composables;
  class Options {
    constructor(schema, model, selector, options, element = null) {
      this.model = JSON.parse(JSON.stringify(model));
      this.schema = schema;
      this.selector = selector;
      this.options = options || {};
      this.element = element;
      this.serverRequester = element ? element.serverRequester : window.zb.editor.serverRequest;
      const { responsiveDevicesAsIdWidth } = useResponsiveDevices$1();
      const devices = {};
      Object.keys(responsiveDevicesAsIdWidth.value).forEach((device) => {
        devices[device] = {};
      });
      this.customCSS = devices;
      this.renderAttributes = {};
    }
    startLoading() {
      if (typeof this.options.onLoadingStart === "function") {
        this.options.onLoadingStart();
      }
    }
    endLoading() {
      if (typeof this.options.onLoadingEnd === "function") {
        this.options.onLoadingEnd();
      }
    }
    parseData() {
      const options = this.model;
      this.parseOptions(this.schema, options);
      return {
        options: applyFilters$2("zionbuilder/options/model", options, this),
        renderAttributes: this.renderAttributes,
        customCSS: this.getCustomCSS()
      };
    }
    parseOptions(schema, model, index2 = null) {
      model = null === model ? {} : model;
      Object.keys(schema).forEach((optionId) => {
        const singleOptionSchema = schema[optionId];
        const dependencyPassed = this.checkDependency(singleOptionSchema, model);
        if (!dependencyPassed) {
          return false;
        }
        if (typeof singleOptionSchema.is_layout !== "undefined" && singleOptionSchema.is_layout) {
          if (singleOptionSchema.child_options) {
            this.parseOptions(singleOptionSchema.child_options, model);
          }
        } else {
          if (typeof model[optionId] !== "undefined") {
            this.setProperImage(optionId, singleOptionSchema, model);
            this.setRenderAttributes(singleOptionSchema, model[optionId], index2);
            this.setCustomCSS(singleOptionSchema, model[optionId], index2);
          } else if (typeof singleOptionSchema.default !== "undefined") {
            model[optionId] = cloneDeep(singleOptionSchema.default);
          }
          if (singleOptionSchema.child_options) {
            if (singleOptionSchema.type === "repeater") {
              if (typeof model[optionId] !== "undefined" && Array.isArray(model[optionId])) {
                model[optionId].forEach((optionValue2, index22) => {
                  this.parseOptions(singleOptionSchema.child_options, optionValue2, index22);
                });
              }
            } else {
              const savedValue = typeof model[optionId] !== "undefined" && model[optionId] !== null ? model[optionId] : {};
              this.parseOptions(singleOptionSchema.child_options, savedValue);
              if (Object.keys(savedValue).length > 0) {
                model[optionId] = savedValue;
              }
            }
          }
        }
      });
      return model;
    }
    setProperImage(optionId, schema, model) {
      if (schema.type === "image" && schema.show_size === true && model[optionId]) {
        const imageConfig = model[optionId];
        if (imageConfig && imageConfig.image && imageConfig.image_size && imageConfig.image_size !== "full") {
          this.startLoading();
          getImage(model[optionId], this.serverRequester).then((image) => {
            if (image) {
              this.setImage(model, optionId, image);
            }
          }).finally(() => {
            this.endLoading();
          });
        }
      }
    }
    setImage(optionsModel, optionId, newValue) {
      const oldImage = (optionsModel[optionId] || {}).image;
      if (oldImage === newValue) {
        return;
      }
      const newValues2 = __spreadProps(__spreadValues({}, optionsModel[optionId]), {
        image: newValue
      });
      optionsModel[optionId] = newValues2;
    }
    addRenderAttribute(tagId, attribute, value, replace = false) {
      if (!this.renderAttributes[tagId]) {
        this.renderAttributes[tagId] = {};
      }
      const currentAttributes = this.renderAttributes[tagId];
      if (!currentAttributes[attribute]) {
        currentAttributes[attribute] = [];
      }
      if (replace) {
        currentAttributes[attribute] = [value];
      } else {
        currentAttributes[attribute].push(value);
      }
    }
    setRenderAttributes(schema, model, index2 = null) {
      const CSSDeviceMap = {
        default: "",
        laptop: "--lg",
        tablet: "--md",
        mobile: "--sm"
      };
      if (schema.render_attribute) {
        schema.render_attribute.forEach((config) => {
          let tagId = config.tag_id || "wrapper";
          tagId = index2 === null ? tagId : `${tagId}${index2}`;
          const attribute = config.attribute || "class";
          let attributeValue = config.value || "";
          if (schema.responsive_options && model !== null) {
            if (model && typeof model !== "object") {
              model = {
                default: model
              };
            }
            Object.keys(model).forEach((deviceId) => {
              if (!model[deviceId] || typeof CSSDeviceMap[deviceId] === "undefined") {
                return;
              }
              const deviceSavedValue = model[deviceId];
              attributeValue = config.value || "";
              attributeValue = attributeValue.replace("{{RESPONSIVE_DEVICE_CSS}}", CSSDeviceMap[deviceId]);
              attributeValue = attributeValue.replace("{{VALUE}}", deviceSavedValue) || deviceSavedValue;
              this.addRenderAttribute(tagId, attribute, attributeValue);
            });
          } else {
            if (!model) {
              return;
            }
            attributeValue = attributeValue.replace("{{VALUE}}", model) || model;
            this.addRenderAttribute(tagId, attribute, attributeValue);
          }
        });
      }
    }
    setCustomCSS(schema, model, index2 = null) {
      if (schema.css_style && Array.isArray(schema.css_style)) {
        schema.css_style.forEach((cssStyleConfig) => {
          if (schema.responsive_options && typeof model === "object" && model !== null) {
            this.extractResponsiveCSSRules(schema.type, cssStyleConfig, model, index2);
          } else {
            this.extractCSSRule("default", schema.type, cssStyleConfig, model, index2);
          }
        });
      } else {
        if (schema.type === "shape_dividers") {
          if (typeof model === "object") {
            forEach(model, (maskConfig, position) => {
              let { shape, height } = maskConfig;
              if (shape && height) {
                const selector = `zb-mask-pos--${position}`;
                if (typeof height === "string") {
                  height = {
                    default: height
                  };
                }
                this.extractResponsiveCSSRules(
                  schema.type,
                  {
                    selector: `${this.selector} .${selector}`,
                    value: "height: {{VALUE}}"
                  },
                  height,
                  index2
                );
              }
            });
          }
        }
      }
    }
    extractResponsiveCSSRules(optionType, cssStyleConfig, model, index2) {
      if (typeof model !== "object" || model === null) {
        return "";
      }
      Object.keys(model).forEach((device) => {
        const deviceValue = model[device];
        this.extractCSSRule(device, optionType, cssStyleConfig, deviceValue, index2);
      });
    }
    extractCSSRule(device, optionType, cssStyleConfig, model, index2) {
      let { selector, value } = cssStyleConfig;
      if (!selector || !value) {
        return;
      }
      selector = selector.replace("{{ELEMENT}}", this.selector);
      value = value.replace("{{VALUE}}", model);
      if (index2 !== null) {
        selector = selector.replace("{{INDEX}}", index2);
      }
      if (optionType === "element_styles") {
        const mediaStyles = optionValue.styles || {};
        const styles = getStyles(formattedSelector, mediaStyles);
        if (styles) {
          this.addCustomCSS(device, selector, styles);
        }
      } else {
        if (model !== false) {
          this.addCustomCSS(device, selector, value);
        }
      }
    }
    addCustomCSS(device, selector, css) {
      if (typeof this.customCSS[device] === "undefined") {
        return;
      }
      this.customCSS[device][selector] = this.customCSS[device][selector] || [];
      this.customCSS[device][selector].push(css);
    }
    getCustomCSS() {
      const { responsiveDevicesAsIdWidth } = useResponsiveDevices$1();
      let returnedCSS = "";
      Object.keys(this.customCSS).forEach((device) => {
        const deviceSelectors = this.customCSS[device];
        const extractedCSS = this.extractStyles(deviceSelectors);
        if (extractedCSS.length === 0) {
          return;
        }
        if (device === "default") {
          returnedCSS += extractedCSS;
        } else {
          if (!responsiveDevicesAsIdWidth.value[device]) {
            return;
          }
          const deviceWidth = responsiveDevicesAsIdWidth.value[device];
          returnedCSS += `@media(max-width: ${deviceWidth}px) { ${extractedCSS} } `;
        }
      });
      return returnedCSS;
    }
    extractStyles(stylesData) {
      let returnedStyles = "";
      if (typeof stylesData === "object" && stylesData !== null) {
        Object.keys(stylesData).forEach((selector) => {
          const styleCSSArray = stylesData[selector];
          returnedStyles += `${selector} { ${styleCSSArray.join(";")} } `;
        });
      }
      return returnedStyles;
    }
    checkDependency(optionSchema, model) {
      let passedDependency = true;
      if (optionSchema.dependency) {
        optionSchema.dependency.forEach((dependencyConfig) => {
          if (!passedDependency) {
            return;
          }
          passedDependency = this.checkSingleDependency(dependencyConfig, model);
        });
      }
      return passedDependency;
    }
    checkSingleDependency(dependencyConfig, model) {
      const { type = "includes", option, option_path: optionPath, value: searchValue } = dependencyConfig;
      let optionValue2 = null;
      if (option) {
        optionValue2 = typeof model[option] !== "undefined" ? model[option] : null;
      } else if (optionPath) {
        optionValue2 = get(this.model, optionPath);
      }
      if (type === "includes" && searchValue.includes(optionValue2)) {
        return true;
      } else if (type === "not_in" && !searchValue.includes(optionValue2)) {
        return true;
      }
      return false;
    }
    getValue(optionPath, defaultValue) {
      return get(this.model, optionPath, defaultValue);
    }
  }
  const ElementWrapper_vue_vue_type_style_index_0_lang = "";
  const { applyFilters: applyFilters$1 } = window.zb.hooks;
  const { useOptionsSchemas, usePseudoSelectors } = window.zb.composables;
  let clickHandled = false;
  const _sfc_main$N = {
    name: "ElementWrapper",
    components: {
      ElementToolbox: _sfc_main$T,
      VideoBackground: _sfc_main$Q,
      ElementLoading: _sfc_main$R,
      ElementStyles: _sfc_main$S
    },
    props: ["element"],
    setup(props) {
      const CSSClassesStore = useCSSClassesStore();
      const root2 = Vue.ref(null);
      const UIStore = useUIStore();
      const { elementComponent, fetchElementComponent } = useElementComponent(props.element);
      const { getSchema } = useOptionsSchemas();
      const { activePseudoSelector } = usePseudoSelectors();
      const isVisible = Vue.computed(() => get(props.element.options, "_isVisible", true));
      const toolboxWatcher = null;
      let optionsInstance = null;
      const localLoading = Vue.ref(false);
      const loading = Vue.computed(() => props.element.loading || localLoading.value);
      const showToolbox = Vue.ref(false);
      const registeredEvents = Vue.ref({});
      const isElementEdited = Vue.ref(false);
      const isHoverState = Vue.ref(false);
      const advancedSchema = {
        _advanced_options: {
          type: "group",
          child_options: getSchema("element_advanced")
        }
      };
      const elementOptionsSchema = Object.assign({}, props.element.elementDefinition.options || {}, advancedSchema);
      const parsedData = Vue.ref({
        options: props.element.options,
        renderAttributes: {},
        customCSS: ""
      });
      Vue.computed(() => {
        console.log("calc 1");
        const savedValues = get(
          props.element.options,
          `_styles.wrapper.styles.${activeResponsiveDeviceInfo.value.id}.default`,
          {}
        );
        console.log({ elementOptions: props.element });
        return savedValues;
      });
      Vue.watch(
        () => props.element.options,
        () => {
          const cssSelector = `#${props.element.elementCssId}`;
          optionsInstance = new Options(
            elementOptionsSchema,
            props.element.options,
            cssSelector,
            {
              onLoadingStart: () => localLoading.value = true,
              onLoadingEnd: () => localLoading.value = false
            },
            props.element
          );
          parsedData.value = optionsInstance.parseData();
        },
        {
          immediate: true,
          deep: true
        }
      );
      const options = Vue.computed(() => Vue.readonly(parsedData.value.options || {}));
      Vue.watch(
        () => UIStore.editedElement,
        (newValue, oldValue) => {
          if (newValue === props.element) {
            isElementEdited.value = true;
          } else if (oldValue === props.element) {
            isElementEdited.value = false;
          }
        }
      );
      Vue.watch(activePseudoSelector, (newValue) => {
        if (newValue.id === ":hover") {
          isHoverState.value = true;
        } else {
          isHoverState.value = false;
        }
      });
      const shouldGenerateHoverStyles = Vue.computed(() => {
        return isElementEdited.value && isHoverState.value;
      });
      const customCSS = Vue.computed(() => {
        let customCSS2 = "";
        const elementStyleConfig = props.element.elementDefinition.style_elements || {};
        Object.keys(elementStyleConfig).forEach((styleId) => {
          if (options.value._styles && options.value._styles[styleId]) {
            const styleConfig = elementStyleConfig[styleId];
            const cssSelector = applyFilters$1(
              "zionbuilder/element/css_selector",
              `#${props.element.elementCssId}`,
              optionsInstance,
              props.element
            );
            const formattedSelector2 = styleConfig.selector.replace("{{ELEMENT}}", cssSelector);
            const stylesSavedValues = applyFilters$1(
              "zionbuilder/element/styles_model",
              options.value._styles[styleId],
              optionsInstance,
              props.element
            );
            customCSS2 += window.zb.editor.getCssFromSelector([formattedSelector2], stylesSavedValues);
            if (shouldGenerateHoverStyles.value) {
              customCSS2 += window.zb.editor.getCssFromSelector([formattedSelector2], stylesSavedValues, {
                forcehoverState: true
              });
            }
          }
        });
        customCSS2 += parsedData.value.customCSS;
        customCSS2 = applyFilters$1("zionbuilder/element/custom_css", customCSS2, optionsInstance, props.element);
        return customCSS2;
      });
      const stylesConfig = Vue.computed(() => options.value._styles || {});
      const canShowElement = Vue.computed(() => UIStore.isPreviewMode ? !(options.value._isVisible === false) : true);
      const videoConfig = Vue.computed(
        () => get(options.value, "_styles.wrapper.styles.default.default.background-video", {})
      );
      const renderAttributes = Vue.computed(() => {
        const optionsAttributes = parsedData.value.renderAttributes;
        const additionalAttributes = {};
        if (stylesConfig.value) {
          forEach(stylesConfig.value, (styleData, styleID) => {
            if (styleData.attributes) {
              forEach(styleData.attributes, (attributeValue) => {
                if (attributeValue.attribute_name) {
                  additionalAttributes[styleID] = additionalAttributes[styleID] || {};
                  const cleanAttrName = attributeValue.attribute_name;
                  const cleanAttrValue = escape$1(attributeValue.attribute_value);
                  additionalAttributes[styleID][cleanAttrName] = cleanAttrValue;
                }
              });
            }
          });
        }
        const elementStyleConfig = props.element.elementDefinition.style_elements;
        if (elementStyleConfig) {
          Object.keys(elementStyleConfig).forEach((styleId) => {
            if (options.value._styles && options.value._styles[styleId] && options.value._styles[styleId].classes) {
              const styleConfig = elementStyleConfig[styleId];
              const renderTag = styleConfig.render_tag;
              if (renderTag) {
                options.value._styles[styleId].classes.forEach((cssClass) => {
                  if (!additionalAttributes[renderTag]) {
                    additionalAttributes[renderTag] = {};
                  }
                  const cssClassSelector = CSSClassesStore.getSelectorName(cssClass);
                  if (cssClassSelector) {
                    additionalAttributes[renderTag]["class"] = [
                      ...additionalAttributes[renderTag]["class"] || [],
                      cssClassSelector
                    ];
                  }
                });
                const staticClasses = get(options.value, `_styles.${styleId}.static_classes`, []);
                staticClasses.forEach((cssClass) => {
                  if (!additionalAttributes[renderTag]) {
                    additionalAttributes[renderTag] = {};
                  }
                  additionalAttributes[renderTag]["class"] = [
                    ...additionalAttributes[renderTag]["class"] || [],
                    cssClass
                  ];
                });
              }
            }
          });
        }
        return mergeWith$1({}, optionsAttributes, additionalAttributes, (a, b) => {
          if (isArray$1(a)) {
            return b.concat(a);
          }
        });
      });
      const getExtraAttributes = Vue.computed(() => {
        const wrapperAttributes = renderAttributes.value.wrapper || {};
        const elementClass = camelCase$1(props.element.element_type);
        const classes = applyFilters$1(
          "zionbuilder/element/css_classes",
          {
            [`zb-el-${elementClass}`]: true,
            "znpb-element__wrapper--cutted": props.element.isCut,
            "znpb-element--loading": loading.value,
            "znpb-element--isHighlighted": props.element.isHighlighted
          },
          optionsInstance,
          props.element
        );
        if (stylesConfig.value.wrapper) {
          const wrapperConfig = stylesConfig.value.wrapper;
          if (wrapperConfig.classes) {
            wrapperConfig.classes.forEach((classSelector) => {
              const cssClass = CSSClassesStore.getSelectorName(classSelector);
              if (cssClass) {
                classes[cssClass] = true;
              }
            });
          }
        }
        const wrapperClasses = typeof wrapperAttributes.class !== "undefined" ? wrapperAttributes.class : [];
        wrapperClasses.forEach((cssClass) => {
          classes[cssClass] = true;
        });
        return __spreadProps(__spreadValues({}, wrapperAttributes), {
          class: classes,
          api: {
            getStyleClasses,
            getAttributesForTag
          }
        });
      });
      fetchElementComponent();
      function getAttributesForTag(tagID, extraArgs = {}, index2 = null) {
        tagID = index2 !== null ? `${tagID}${index2}` : tagID;
        return Object.assign(renderAttributes.value[tagID] || {}, extraArgs);
      }
      const showElementMenu = function(event) {
        event.preventDefault();
        event.stopPropagation();
        UIStore.showElementMenuFromEvent(props.element, event);
      };
      const onElementClick = () => {
        if (clickHandled) {
          return;
        }
        if (!UIStore.isPreviewMode) {
          UIStore.editElement(props.element);
        }
        clickHandled = true;
        setTimeout(() => {
          clickHandled = false;
        }, 50);
      };
      const getStyleClasses = (styleId, extraClasses = {}) => {
        const classes = {};
        if (stylesConfig.value[styleId]) {
          const elementStylesClasses = stylesConfig.value[styleId];
          if (elementStylesClasses.classes) {
            elementStylesClasses.classes.forEach((classSelector) => {
              classes[classSelector] = true;
            });
          }
        }
        return classes;
      };
      Vue.provide("elementInfo", props.element);
      Vue.provide("elementOptions", options);
      Vue.watch(
        () => props.element.scrollTo,
        (newValue) => {
          var _a;
          const iframe = (_a = window.document.getElementById("znpb-editor-iframe")) == null ? void 0 : _a.contentWindow;
          if (!iframe) {
            return;
          }
          const domNode = iframe.document.getElementById(props.element.elementCssId);
          if (newValue && domNode) {
            if (typeof domNode.scrollIntoView === "function") {
              domNode.scrollIntoView({
                behavior: "smooth",
                block: "center"
              });
            }
            setTimeout(() => {
              props.element.scrollTo = false;
            }, 1e3);
          }
        }
      );
      return {
        root: root2,
        // Computed
        stylesConfig,
        canShowElement,
        videoConfig,
        getExtraAttributes,
        // Data
        elementComponent,
        showElementMenu,
        onElementClick,
        options,
        customCSS,
        loading,
        toolboxWatcher,
        registeredEvents,
        showToolbox,
        // Stores
        UIStore,
        isVisible
      };
    },
    methods: {
      debounceUpdate: debounce(function() {
        this.$nextTick(() => {
          this.trigger("updated");
        });
      }),
      /**
       * Register an event for an action
       */
      on(eventType, callback) {
        if (typeof this.registeredEvents[eventType] === "undefined") {
          this.registeredEvents[eventType] = [];
        }
        this.registeredEvents[eventType].push(callback);
      },
      /**
       * Remove an event listener
       */
      off(eventType, callback) {
        if (typeof this.registeredEvents[eventType] === "undefined" && this.registeredEvents[eventType].includes(callback)) {
          const callbackIndex = this.registeredEvents[eventType].indexOf(callback);
          if (callbackIndex !== -1) {
            this.registeredEvents[eventType].splice(callbackIndex, 1);
          }
        }
      },
      /**
       * Remove all events
       */
      offAll() {
        this.registeredEvents = {};
      },
      getDefaultEventResponse() {
        return {
          elementType: this.element.element_type,
          element: this.$el,
          options: this.options || {},
          elementUid: this.element.uid,
          // Actions that the user can subscribe to
          on: this.on,
          off: this.off,
          offAll: this.offAll
        };
      },
      trigger(eventType, data) {
        const defaultData = this.getDefaultEventResponse();
        if (typeof this.registeredEvents[eventType] !== "undefined") {
          this.registeredEvents[eventType].forEach((callbackFunction) => {
            callbackFunction(__spreadValues(__spreadValues({}, defaultData), data));
          });
        }
      }
    }
  };
  const _hoisted_1$D = {
    key: 0,
    class: "znpb-hidden-element-container"
  };
  const _hoisted_2$u = { class: "znpb-hidden-element-placeholder" };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ElementLoading = Vue.resolveComponent("ElementLoading");
    const _component_VideoBackground = Vue.resolveComponent("VideoBackground");
    const _component_ElementStyles = Vue.resolveComponent("ElementStyles");
    const _component_Icon = Vue.resolveComponent("Icon");
    return $setup.loading ? (Vue.openBlock(), Vue.createBlock(_component_ElementLoading, { key: 0 })) : $setup.elementComponent && !($props.element.isVisible === false && $setup.UIStore.isPreviewMode) ? (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent($setup.elementComponent), Vue.mergeProps({
      key: 1,
      id: `${$props.element.elementCssId}`,
      ref: "root",
      class: "znpb-element__wrapper zb-element",
      element: $props.element,
      options: $setup.options
    }, $setup.getExtraAttributes, {
      onMouseover: _cache[1] || (_cache[1] = Vue.withModifiers(($event) => $props.element.highlight(), ["stop"])),
      onMouseleave: _cache[2] || (_cache[2] = ($event) => $props.element.unHighlight()),
      onClick: $setup.onElementClick,
      onContextmenu: $setup.showElementMenu
    }), {
      start: Vue.withCtx(() => [
        $setup.videoConfig ? (Vue.openBlock(), Vue.createBlock(_component_VideoBackground, {
          key: 0,
          "video-config": $setup.videoConfig
        }, null, 8, ["video-config"])) : Vue.createCommentVNode("", true),
        Vue.createVNode(_component_ElementStyles, { styles: $setup.customCSS }, null, 8, ["styles"])
      ]),
      end: Vue.withCtx(() => [
        !$setup.isVisible ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$D, [
          Vue.createElementVNode("div", _hoisted_2$u, [
            Vue.createVNode(_component_Icon, {
              icon: "eye",
              onClick: _cache[0] || (_cache[0] = Vue.withModifiers(($event) => $props.element.setVisibility(!$props.element.isVisible), ["stop"]))
            })
          ])
        ])) : Vue.createCommentVNode("", true)
      ]),
      _: 1
    }, 16, ["id", "element", "options", "onClick", "onContextmenu"])) : Vue.createCommentVNode("", true);
  }
  const ElementWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$2]]);
  const _sfc_main$M = /* @__PURE__ */ Vue.defineComponent({
    __name: "Element",
    props: {
      element: {}
    },
    setup(__props) {
      const props = __props;
      const { doAction, applyFilters: applyFilters2 } = window.zb.hooks;
      doAction("zionbuilder/preview/element/setup", props.element);
      const elementWrapperComponent = Vue.computed(() => {
        return applyFilters2("zionbuilder/preview/element/wrapper_component", "ElementWrapper", props.element);
      });
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(elementWrapperComponent.value), { element: _ctx.element }, null, 8, ["element"]);
      };
    }
  });
  const _sfc_main$L = /* @__PURE__ */ Vue.defineComponent({
    __name: "SortableContent",
    props: {
      element: {},
      group: { default: () => {
        return {};
      } },
      allowElementsAdd: { type: Boolean, default: true },
      emptyPlaceholderText: { default: "" },
      disabled: { type: Boolean, default: false }
    },
    setup(__props) {
      const props = __props;
      const UIStore = useUIStore();
      const contentStore = useContentStore();
      const UserStore = useUserStore();
      const children = Vue.computed(() => props.element.content.map((childUID) => contentStore.getElement(childUID)));
      const defaultSortableGroup = {
        name: "elements"
      };
      const isDisabled = Vue.computed(() => {
        return UIStore.isPreviewMode || props.disabled || !UserStore.userCanEditContent;
      });
      const groupInfo = Vue.computed(() => props.group || defaultSortableGroup);
      const getSortableAxis = Vue.computed(() => {
        let orientation = "horizontal";
        if (props.element.element_type === "contentRoot") {
          return "vertical";
        }
        orientation = props.element.elementDefinition.content_orientation;
        if (props.element.options.inner_content_layout) {
          orientation = props.element.options.inner_content_layout;
        }
        const mediaOrientation = get(props.element.options, "_styles.wrapper.styles.default.default.flex-direction");
        if (mediaOrientation) {
          orientation = mediaOrientation === "row" ? "horizontal" : "vertical";
        }
        return orientation;
      });
      function onSortableStart() {
        UIStore.hideAddElementsPopup();
        UIStore.setElementDragging(true);
      }
      function onSortableEnd() {
        UIStore.setElementDragging(false);
      }
      function onSortableDrop(event) {
        const { item, to, newIndex, duplicateItem, placeBefore } = event.data;
        const movedElement = contentStore.getElement(item.dataset.zionElementUid);
        if (duplicateItem) {
          const elementForInsert = movedElement.getClone();
          window.zb.run("editor/elements/add", {
            parentUID: to.dataset.zionElementUid,
            element: elementForInsert,
            index: placeBefore ? newIndex : newIndex + 1
          });
        } else {
          window.zb.run("editor/elements/move", {
            newParent: contentStore.getElement(to.dataset.zionElementUid),
            element: contentStore.getElement(item.dataset.zionElementUid),
            index: newIndex
          });
        }
      }
      return (_ctx, _cache) => {
        const _component_Sortable = Vue.resolveComponent("Sortable");
        return Vue.openBlock(), Vue.createBlock(_component_Sortable, Vue.mergeProps({
          "model-value": children.value,
          group: groupInfo.value,
          disabled: isDisabled.value,
          "allow-duplicate": true
        }, _ctx.$attrs, {
          class: {
            [`znpb__sortable-container--${getSortableAxis.value}`]: Vue.unref(UIStore).isElementDragging,
            [`znpb__sortable-container--disabled`]: isDisabled.value
          },
          axis: getSortableAxis.value,
          "data-zion-element-uid": _ctx.element.uid,
          onStart: onSortableStart,
          onEnd: onSortableEnd,
          onDrop: onSortableDrop
        }), {
          start: Vue.withCtx(() => [
            Vue.renderSlot(_ctx.$slots, "start")
          ]),
          helper: Vue.withCtx(() => [
            Vue.createVNode(SortableHelper)
          ]),
          placeholder: Vue.withCtx(() => [
            Vue.createVNode(SortablePlaceholder)
          ]),
          end: Vue.withCtx(() => [
            _ctx.element.content.length === 0 && _ctx.allowElementsAdd && !Vue.unref(UIStore).isPreviewMode ? (Vue.openBlock(), Vue.createBlock(_sfc_main$1b, {
              key: 0,
              element: _ctx.element
            }, null, 8, ["element"])) : Vue.createCommentVNode("", true),
            Vue.renderSlot(_ctx.$slots, "end")
          ]),
          default: Vue.withCtx(() => [
            (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(children.value, (childElement) => {
              return Vue.openBlock(), Vue.createBlock(_sfc_main$M, {
                key: childElement.uid,
                element: childElement,
                "data-zion-element-uid": childElement.uid
              }, null, 8, ["element", "data-zion-element-uid"]);
            }), 128))
          ]),
          _: 3
        }, 16, ["model-value", "group", "disabled", "class", "axis", "data-zion-element-uid"]);
      };
    }
  });
  const SortableContent_vue_vue_type_style_index_0_lang = "";
  class HeartBeat {
    constructor() {
      const userStore = useUserStore();
      window.jQuery(document).on({
        "heartbeat-tick.refresh-lock": (event, response) => {
          if (!userStore.isPostLocked && response["wp-refresh-post-lock"]) {
            const { lock_error: LockError } = response["wp-refresh-post-lock"];
            if (LockError) {
              userStore.setPostLock({
                message: LockError.text,
                avatar: LockError.avatar_src
              });
            }
          }
        }
      });
      window.jQuery(document).on({
        "heartbeat-send": (event, data) => {
          data["wp-refresh-post-lock"] = {
            post_id: window.ZnPbInitialData.page_id
          };
        }
      });
      window.jQuery(document).on({
        "heartbeat-tick.wp-refresh-nonces": (event, response) => {
          const { rest_nonce: restNonce, heartbeat_nonce: heartbeatNonce } = response;
          if (restNonce) {
            window.ZBCommonData.rest.nonce = restNonce;
          }
          if (heartbeatNonce) {
            window.heartbeatSettings.nonce = heartbeatNonce;
          }
        }
      });
    }
  }
  function resolveUrl(url, baseUrl) {
    if (url.match(/^[a-z]+:\/\//i)) {
      return url;
    }
    if (url.match(/^\/\//)) {
      return window.location.protocol + url;
    }
    if (url.match(/^[a-z]+:/i)) {
      return url;
    }
    const doc = document.implementation.createHTMLDocument();
    const base = doc.createElement("base");
    const a = doc.createElement("a");
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) {
      base.href = baseUrl;
    }
    a.href = url;
    return a.href;
  }
  const uuid = (() => {
    let counter = 0;
    const random = () => (
      // eslint-disable-next-line no-bitwise
      `0000${(Math.random() * __pow(36, 4) << 0).toString(36)}`.slice(-4)
    );
    return () => {
      counter += 1;
      return `u${random()}${counter}`;
    };
  })();
  function toArray(arrayLike) {
    const arr = [];
    for (let i = 0, l = arrayLike.length; i < l; i++) {
      arr.push(arrayLike[i]);
    }
    return arr;
  }
  function px(node, styleProperty) {
    const win = node.ownerDocument.defaultView || window;
    const val = win.getComputedStyle(node).getPropertyValue(styleProperty);
    return val ? parseFloat(val.replace("px", "")) : 0;
  }
  function getNodeWidth(node) {
    const leftBorder = px(node, "border-left-width");
    const rightBorder = px(node, "border-right-width");
    return node.clientWidth + leftBorder + rightBorder;
  }
  function getNodeHeight(node) {
    const topBorder = px(node, "border-top-width");
    const bottomBorder = px(node, "border-bottom-width");
    return node.clientHeight + topBorder + bottomBorder;
  }
  function getImageSize(targetNode, options = {}) {
    const width = options.width || getNodeWidth(targetNode);
    const height = options.height || getNodeHeight(targetNode);
    return { width, height };
  }
  function getPixelRatio() {
    let ratio;
    let FINAL_PROCESS;
    try {
      FINAL_PROCESS = process;
    } catch (e) {
    }
    const val = FINAL_PROCESS && FINAL_PROCESS.env ? FINAL_PROCESS.env.devicePixelRatio : null;
    if (val) {
      ratio = parseInt(val, 10);
      if (Number.isNaN(ratio)) {
        ratio = 1;
      }
    }
    return ratio || window.devicePixelRatio || 1;
  }
  const canvasDimensionLimit = 16384;
  function checkCanvasDimensions(canvas) {
    if (canvas.width > canvasDimensionLimit || canvas.height > canvasDimensionLimit) {
      if (canvas.width > canvasDimensionLimit && canvas.height > canvasDimensionLimit) {
        if (canvas.width > canvas.height) {
          canvas.height *= canvasDimensionLimit / canvas.width;
          canvas.width = canvasDimensionLimit;
        } else {
          canvas.width *= canvasDimensionLimit / canvas.height;
          canvas.height = canvasDimensionLimit;
        }
      } else if (canvas.width > canvasDimensionLimit) {
        canvas.height *= canvasDimensionLimit / canvas.width;
        canvas.width = canvasDimensionLimit;
      } else {
        canvas.width *= canvasDimensionLimit / canvas.height;
        canvas.height = canvasDimensionLimit;
      }
    }
  }
  function createImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.decode = () => resolve(img);
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.crossOrigin = "anonymous";
      img.decoding = "async";
      img.src = url;
    });
  }
  function svgToDataURL(svg) {
    return __async(this, null, function* () {
      return Promise.resolve().then(() => new XMLSerializer().serializeToString(svg)).then(encodeURIComponent).then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
    });
  }
  function nodeToDataURL(node, width, height) {
    return __async(this, null, function* () {
      const xmlns = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(xmlns, "svg");
      const foreignObject = document.createElementNS(xmlns, "foreignObject");
      svg.setAttribute("width", `${width}`);
      svg.setAttribute("height", `${height}`);
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      foreignObject.setAttribute("width", "100%");
      foreignObject.setAttribute("height", "100%");
      foreignObject.setAttribute("x", "0");
      foreignObject.setAttribute("y", "0");
      foreignObject.setAttribute("externalResourcesRequired", "true");
      svg.appendChild(foreignObject);
      foreignObject.appendChild(node);
      return svgToDataURL(svg);
    });
  }
  const isInstanceOfElement = (node, instance) => {
    if (node instanceof instance)
      return true;
    const nodePrototype = Object.getPrototypeOf(node);
    if (nodePrototype === null)
      return false;
    return nodePrototype.constructor.name === instance.name || isInstanceOfElement(nodePrototype, instance);
  };
  function formatCSSText(style) {
    const content = style.getPropertyValue("content");
    return `${style.cssText} content: '${content.replace(/'|"/g, "")}';`;
  }
  function formatCSSProperties(style) {
    return toArray(style).map((name) => {
      const value = style.getPropertyValue(name);
      const priority = style.getPropertyPriority(name);
      return `${name}: ${value}${priority ? " !important" : ""};`;
    }).join(" ");
  }
  function getPseudoElementStyle(className, pseudo, style) {
    const selector = `.${className}:${pseudo}`;
    const cssText = style.cssText ? formatCSSText(style) : formatCSSProperties(style);
    return document.createTextNode(`${selector}{${cssText}}`);
  }
  function clonePseudoElement(nativeNode, clonedNode, pseudo) {
    const style = window.getComputedStyle(nativeNode, pseudo);
    const content = style.getPropertyValue("content");
    if (content === "" || content === "none") {
      return;
    }
    const className = uuid();
    try {
      clonedNode.className = `${clonedNode.className} ${className}`;
    } catch (err) {
      return;
    }
    const styleElement = document.createElement("style");
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));
    clonedNode.appendChild(styleElement);
  }
  function clonePseudoElements(nativeNode, clonedNode) {
    clonePseudoElement(nativeNode, clonedNode, ":before");
    clonePseudoElement(nativeNode, clonedNode, ":after");
  }
  const WOFF = "application/font-woff";
  const JPEG = "image/jpeg";
  const mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: "application/font-truetype",
    eot: "application/vnd.ms-fontobject",
    png: "image/png",
    jpg: JPEG,
    jpeg: JPEG,
    gif: "image/gif",
    tiff: "image/tiff",
    svg: "image/svg+xml",
    webp: "image/webp"
  };
  function getExtension(url) {
    const match = /\.([^./]*?)$/g.exec(url);
    return match ? match[1] : "";
  }
  function getMimeType(url) {
    const extension = getExtension(url).toLowerCase();
    return mimes[extension] || "";
  }
  function getContentFromDataUrl(dataURL) {
    return dataURL.split(/,/)[1];
  }
  function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
  }
  function makeDataUrl(content, mimeType) {
    return `data:${mimeType};base64,${content}`;
  }
  function fetchAsDataURL(url, init, process2) {
    return __async(this, null, function* () {
      const res = yield fetch(url, init);
      if (res.status === 404) {
        throw new Error(`Resource "${res.url}" not found`);
      }
      const blob = yield res.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = () => {
          try {
            resolve(process2({ res, result: reader.result }));
          } catch (error) {
            reject(error);
          }
        };
        reader.readAsDataURL(blob);
      });
    });
  }
  const cache = {};
  function getCacheKey(url, contentType, includeQueryParams) {
    let key = url.replace(/\?.*/, "");
    if (includeQueryParams) {
      key = url;
    }
    if (/ttf|otf|eot|woff2?/i.test(key)) {
      key = key.replace(/.*\//, "");
    }
    return contentType ? `[${contentType}]${key}` : key;
  }
  function resourceToDataURL(resourceUrl, contentType, options) {
    return __async(this, null, function* () {
      const cacheKey = getCacheKey(resourceUrl, contentType, options.includeQueryParams);
      if (cache[cacheKey] != null) {
        return cache[cacheKey];
      }
      if (options.cacheBust) {
        resourceUrl += (/\?/.test(resourceUrl) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime();
      }
      let dataURL;
      try {
        const content = yield fetchAsDataURL(resourceUrl, options.fetchRequestInit, ({ res, result }) => {
          if (!contentType) {
            contentType = res.headers.get("Content-Type") || "";
          }
          return getContentFromDataUrl(result);
        });
        dataURL = makeDataUrl(content, contentType);
      } catch (error) {
        dataURL = options.imagePlaceholder || "";
        let msg = `Failed to fetch resource: ${resourceUrl}`;
        if (error) {
          msg = typeof error === "string" ? error : error.message;
        }
        if (msg) {
          console.warn(msg);
        }
      }
      cache[cacheKey] = dataURL;
      return dataURL;
    });
  }
  function cloneCanvasElement(canvas) {
    return __async(this, null, function* () {
      const dataURL = canvas.toDataURL();
      if (dataURL === "data:,") {
        return canvas.cloneNode(false);
      }
      return createImage(dataURL);
    });
  }
  function cloneVideoElement(video, options) {
    return __async(this, null, function* () {
      if (video.currentSrc) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = video.clientWidth;
        canvas.height = video.clientHeight;
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL2 = canvas.toDataURL();
        return createImage(dataURL2);
      }
      const poster = video.poster;
      const contentType = getMimeType(poster);
      const dataURL = yield resourceToDataURL(poster, contentType, options);
      return createImage(dataURL);
    });
  }
  function cloneIFrameElement(iframe) {
    return __async(this, null, function* () {
      var _a;
      try {
        if ((_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.body) {
          return yield cloneNode(iframe.contentDocument.body, {}, true);
        }
      } catch (_b) {
      }
      return iframe.cloneNode(false);
    });
  }
  function cloneSingleNode(node, options) {
    return __async(this, null, function* () {
      if (isInstanceOfElement(node, HTMLCanvasElement)) {
        return cloneCanvasElement(node);
      }
      if (isInstanceOfElement(node, HTMLVideoElement)) {
        return cloneVideoElement(node, options);
      }
      if (isInstanceOfElement(node, HTMLIFrameElement)) {
        return cloneIFrameElement(node);
      }
      return node.cloneNode(false);
    });
  }
  const isSlotElement = (node) => node.tagName != null && node.tagName.toUpperCase() === "SLOT";
  function cloneChildren(nativeNode, clonedNode, options) {
    return __async(this, null, function* () {
      var _a, _b;
      let children = [];
      if (isSlotElement(nativeNode) && nativeNode.assignedNodes) {
        children = toArray(nativeNode.assignedNodes());
      } else if (isInstanceOfElement(nativeNode, HTMLIFrameElement) && ((_a = nativeNode.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) {
        children = toArray(nativeNode.contentDocument.body.childNodes);
      } else {
        children = toArray(((_b = nativeNode.shadowRoot) !== null && _b !== void 0 ? _b : nativeNode).childNodes);
      }
      if (children.length === 0 || isInstanceOfElement(nativeNode, HTMLVideoElement)) {
        return clonedNode;
      }
      yield children.reduce((deferred, child) => deferred.then(() => cloneNode(child, options)).then((clonedChild) => {
        if (clonedChild) {
          clonedNode.appendChild(clonedChild);
        }
      }), Promise.resolve());
      return clonedNode;
    });
  }
  function cloneCSSStyle(nativeNode, clonedNode) {
    const targetStyle = clonedNode.style;
    if (!targetStyle) {
      return;
    }
    const sourceStyle = window.getComputedStyle(nativeNode);
    if (sourceStyle.cssText) {
      targetStyle.cssText = sourceStyle.cssText;
      targetStyle.transformOrigin = sourceStyle.transformOrigin;
    } else {
      toArray(sourceStyle).forEach((name) => {
        let value = sourceStyle.getPropertyValue(name);
        if (name === "font-size" && value.endsWith("px")) {
          const reducedFont = Math.floor(parseFloat(value.substring(0, value.length - 2))) - 0.1;
          value = `${reducedFont}px`;
        }
        if (isInstanceOfElement(nativeNode, HTMLIFrameElement) && name === "display" && value === "inline") {
          value = "block";
        }
        if (name === "d" && clonedNode.getAttribute("d")) {
          value = `path(${clonedNode.getAttribute("d")})`;
        }
        targetStyle.setProperty(name, value, sourceStyle.getPropertyPriority(name));
      });
    }
  }
  function cloneInputValue(nativeNode, clonedNode) {
    if (isInstanceOfElement(nativeNode, HTMLTextAreaElement)) {
      clonedNode.innerHTML = nativeNode.value;
    }
    if (isInstanceOfElement(nativeNode, HTMLInputElement)) {
      clonedNode.setAttribute("value", nativeNode.value);
    }
  }
  function cloneSelectValue(nativeNode, clonedNode) {
    if (isInstanceOfElement(nativeNode, HTMLSelectElement)) {
      const clonedSelect = clonedNode;
      const selectedOption = Array.from(clonedSelect.children).find((child) => nativeNode.value === child.getAttribute("value"));
      if (selectedOption) {
        selectedOption.setAttribute("selected", "");
      }
    }
  }
  function decorate(nativeNode, clonedNode) {
    if (isInstanceOfElement(clonedNode, Element)) {
      cloneCSSStyle(nativeNode, clonedNode);
      clonePseudoElements(nativeNode, clonedNode);
      cloneInputValue(nativeNode, clonedNode);
      cloneSelectValue(nativeNode, clonedNode);
    }
    return clonedNode;
  }
  function ensureSVGSymbols(clone, options) {
    return __async(this, null, function* () {
      const uses = clone.querySelectorAll ? clone.querySelectorAll("use") : [];
      if (uses.length === 0) {
        return clone;
      }
      const processedDefs = {};
      for (let i = 0; i < uses.length; i++) {
        const use = uses[i];
        const id = use.getAttribute("xlink:href");
        if (id) {
          const exist = clone.querySelector(id);
          const definition = document.querySelector(id);
          if (!exist && definition && !processedDefs[id]) {
            processedDefs[id] = yield cloneNode(definition, options, true);
          }
        }
      }
      const nodes = Object.values(processedDefs);
      if (nodes.length) {
        const ns = "http://www.w3.org/1999/xhtml";
        const svg = document.createElementNS(ns, "svg");
        svg.setAttribute("xmlns", ns);
        svg.style.position = "absolute";
        svg.style.width = "0";
        svg.style.height = "0";
        svg.style.overflow = "hidden";
        svg.style.display = "none";
        const defs = document.createElementNS(ns, "defs");
        svg.appendChild(defs);
        for (let i = 0; i < nodes.length; i++) {
          defs.appendChild(nodes[i]);
        }
        clone.appendChild(svg);
      }
      return clone;
    });
  }
  function cloneNode(node, options, isRoot) {
    return __async(this, null, function* () {
      if (!isRoot && options.filter && !options.filter(node)) {
        return null;
      }
      return Promise.resolve(node).then((clonedNode) => cloneSingleNode(clonedNode, options)).then((clonedNode) => cloneChildren(node, clonedNode, options)).then((clonedNode) => decorate(node, clonedNode)).then((clonedNode) => ensureSVGSymbols(clonedNode, options));
    });
  }
  const URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
  const URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
  const FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
  function toRegex(url) {
    const escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`, "g");
  }
  function parseURLs(cssText) {
    const urls = [];
    cssText.replace(URL_REGEX, (raw, quotation, url) => {
      urls.push(url);
      return raw;
    });
    return urls.filter((url) => !isDataUrl(url));
  }
  function embed(cssText, resourceURL, baseURL, options, getContentFromUrl) {
    return __async(this, null, function* () {
      try {
        const resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
        const contentType = getMimeType(resourceURL);
        let dataURL;
        if (getContentFromUrl) {
          const content = yield getContentFromUrl(resolvedURL);
          dataURL = makeDataUrl(content, contentType);
        } else {
          dataURL = yield resourceToDataURL(resolvedURL, contentType, options);
        }
        return cssText.replace(toRegex(resourceURL), `$1${dataURL}$3`);
      } catch (error) {
      }
      return cssText;
    });
  }
  function filterPreferredFontFormat(str, { preferredFontFormat }) {
    return !preferredFontFormat ? str : str.replace(FONT_SRC_REGEX, (match) => {
      while (true) {
        const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
        if (!format) {
          return "";
        }
        if (format === preferredFontFormat) {
          return `src: ${src};`;
        }
      }
    });
  }
  function shouldEmbed(url) {
    return url.search(URL_REGEX) !== -1;
  }
  function embedResources(cssText, baseUrl, options) {
    return __async(this, null, function* () {
      if (!shouldEmbed(cssText)) {
        return cssText;
      }
      const filteredCSSText = filterPreferredFontFormat(cssText, options);
      const urls = parseURLs(filteredCSSText);
      return urls.reduce((deferred, url) => deferred.then((css) => embed(css, url, baseUrl, options)), Promise.resolve(filteredCSSText));
    });
  }
  function embedProp(propName, node, options) {
    return __async(this, null, function* () {
      var _a;
      const propValue = (_a = node.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue(propName);
      if (propValue) {
        const cssString = yield embedResources(propValue, null, options);
        node.style.setProperty(propName, cssString, node.style.getPropertyPriority(propName));
        return true;
      }
      return false;
    });
  }
  function embedBackground(clonedNode, options) {
    return __async(this, null, function* () {
      if (!(yield embedProp("background", clonedNode, options))) {
        yield embedProp("background-image", clonedNode, options);
      }
      if (!(yield embedProp("mask", clonedNode, options))) {
        yield embedProp("mask-image", clonedNode, options);
      }
    });
  }
  function embedImageNode(clonedNode, options) {
    return __async(this, null, function* () {
      const isImageElement = isInstanceOfElement(clonedNode, HTMLImageElement);
      if (!(isImageElement && !isDataUrl(clonedNode.src)) && !(isInstanceOfElement(clonedNode, SVGImageElement) && !isDataUrl(clonedNode.href.baseVal))) {
        return;
      }
      const url = isImageElement ? clonedNode.src : clonedNode.href.baseVal;
      const dataURL = yield resourceToDataURL(url, getMimeType(url), options);
      yield new Promise((resolve, reject) => {
        clonedNode.onload = resolve;
        clonedNode.onerror = reject;
        const image = clonedNode;
        if (image.decode) {
          image.decode = resolve;
        }
        if (image.loading === "lazy") {
          image.loading = "eager";
        }
        if (isImageElement) {
          clonedNode.srcset = "";
          clonedNode.src = dataURL;
        } else {
          clonedNode.href.baseVal = dataURL;
        }
      });
    });
  }
  function embedChildren(clonedNode, options) {
    return __async(this, null, function* () {
      const children = toArray(clonedNode.childNodes);
      const deferreds = children.map((child) => embedImages(child, options));
      yield Promise.all(deferreds).then(() => clonedNode);
    });
  }
  function embedImages(clonedNode, options) {
    return __async(this, null, function* () {
      if (isInstanceOfElement(clonedNode, Element)) {
        yield embedBackground(clonedNode, options);
        yield embedImageNode(clonedNode, options);
        yield embedChildren(clonedNode, options);
      }
    });
  }
  function applyStyle(node, options) {
    const { style } = node;
    if (options.backgroundColor) {
      style.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
      style.width = `${options.width}px`;
    }
    if (options.height) {
      style.height = `${options.height}px`;
    }
    const manual = options.style;
    if (manual != null) {
      Object.keys(manual).forEach((key) => {
        style[key] = manual[key];
      });
    }
    return node;
  }
  const cssFetchCache = {};
  function fetchCSS(url) {
    return __async(this, null, function* () {
      let cache2 = cssFetchCache[url];
      if (cache2 != null) {
        return cache2;
      }
      const res = yield fetch(url);
      const cssText = yield res.text();
      cache2 = { url, cssText };
      cssFetchCache[url] = cache2;
      return cache2;
    });
  }
  function embedFonts(data, options) {
    return __async(this, null, function* () {
      let cssText = data.cssText;
      const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
      const fontLocs = cssText.match(/url\([^)]+\)/g) || [];
      const loadFonts = fontLocs.map((loc) => __async(this, null, function* () {
        let url = loc.replace(regexUrl, "$1");
        if (!url.startsWith("https://")) {
          url = new URL(url, data.url).href;
        }
        return fetchAsDataURL(url, options.fetchRequestInit, ({ result }) => {
          cssText = cssText.replace(loc, `url(${result})`);
          return [loc, result];
        });
      }));
      return Promise.all(loadFonts).then(() => cssText);
    });
  }
  function parseCSS(source) {
    if (source == null) {
      return [];
    }
    const result = [];
    const commentsRegex = /(\/\*[\s\S]*?\*\/)/gi;
    let cssText = source.replace(commentsRegex, "");
    const keyframesRegex = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
    while (true) {
      const matches = keyframesRegex.exec(cssText);
      if (matches === null) {
        break;
      }
      result.push(matches[0]);
    }
    cssText = cssText.replace(keyframesRegex, "");
    const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
    const combinedCSSRegex = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})";
    const unifiedRegex = new RegExp(combinedCSSRegex, "gi");
    while (true) {
      let matches = importRegex.exec(cssText);
      if (matches === null) {
        matches = unifiedRegex.exec(cssText);
        if (matches === null) {
          break;
        } else {
          importRegex.lastIndex = unifiedRegex.lastIndex;
        }
      } else {
        unifiedRegex.lastIndex = importRegex.lastIndex;
      }
      result.push(matches[0]);
    }
    return result;
  }
  function getCSSRules(styleSheets, options) {
    return __async(this, null, function* () {
      const ret = [];
      const deferreds = [];
      styleSheets.forEach((sheet) => {
        if ("cssRules" in sheet) {
          try {
            toArray(sheet.cssRules || []).forEach((item, index2) => {
              if (item.type === CSSRule.IMPORT_RULE) {
                let importIndex = index2 + 1;
                const url = item.href;
                const deferred = fetchCSS(url).then((metadata) => embedFonts(metadata, options)).then((cssText) => parseCSS(cssText).forEach((rule) => {
                  try {
                    sheet.insertRule(rule, rule.startsWith("@import") ? importIndex += 1 : sheet.cssRules.length);
                  } catch (error) {
                    console.error("Error inserting rule from remote css", {
                      rule,
                      error
                    });
                  }
                })).catch((e) => {
                  console.error("Error loading remote css", e.toString());
                });
                deferreds.push(deferred);
              }
            });
          } catch (e) {
            const inline = styleSheets.find((a) => a.href == null) || document.styleSheets[0];
            if (sheet.href != null) {
              deferreds.push(fetchCSS(sheet.href).then((metadata) => embedFonts(metadata, options)).then((cssText) => parseCSS(cssText).forEach((rule) => {
                inline.insertRule(rule, sheet.cssRules.length);
              })).catch((err) => {
                console.error("Error loading remote stylesheet", err);
              }));
            }
            console.error("Error inlining remote css file", e);
          }
        }
      });
      return Promise.all(deferreds).then(() => {
        styleSheets.forEach((sheet) => {
          if ("cssRules" in sheet) {
            try {
              toArray(sheet.cssRules || []).forEach((item) => {
                ret.push(item);
              });
            } catch (e) {
              console.error(`Error while reading CSS rules from ${sheet.href}`, e);
            }
          }
        });
        return ret;
      });
    });
  }
  function getWebFontRules(cssRules) {
    return cssRules.filter((rule) => rule.type === CSSRule.FONT_FACE_RULE).filter((rule) => shouldEmbed(rule.style.getPropertyValue("src")));
  }
  function parseWebFontRules(node, options) {
    return __async(this, null, function* () {
      if (node.ownerDocument == null) {
        throw new Error("Provided element is not within a Document");
      }
      const styleSheets = toArray(node.ownerDocument.styleSheets);
      const cssRules = yield getCSSRules(styleSheets, options);
      return getWebFontRules(cssRules);
    });
  }
  function getWebFontCSS(node, options) {
    return __async(this, null, function* () {
      const rules = yield parseWebFontRules(node, options);
      const cssTexts = yield Promise.all(rules.map((rule) => {
        const baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
        return embedResources(rule.cssText, baseUrl, options);
      }));
      return cssTexts.join("\n");
    });
  }
  function embedWebFonts(clonedNode, options) {
    return __async(this, null, function* () {
      const cssText = options.fontEmbedCSS != null ? options.fontEmbedCSS : options.skipFonts ? null : yield getWebFontCSS(clonedNode, options);
      if (cssText) {
        const styleNode = document.createElement("style");
        const sytleContent = document.createTextNode(cssText);
        styleNode.appendChild(sytleContent);
        if (clonedNode.firstChild) {
          clonedNode.insertBefore(styleNode, clonedNode.firstChild);
        } else {
          clonedNode.appendChild(styleNode);
        }
      }
    });
  }
  function toSvg(_0) {
    return __async(this, arguments, function* (node, options = {}) {
      const { width, height } = getImageSize(node, options);
      const clonedNode = yield cloneNode(node, options, true);
      yield embedWebFonts(clonedNode, options);
      yield embedImages(clonedNode, options);
      applyStyle(clonedNode, options);
      const datauri = yield nodeToDataURL(clonedNode, width, height);
      return datauri;
    });
  }
  function toCanvas(_0) {
    return __async(this, arguments, function* (node, options = {}) {
      const { width, height } = getImageSize(node, options);
      const svg = yield toSvg(node, options);
      const img = yield createImage(svg);
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const ratio = options.pixelRatio || getPixelRatio();
      const canvasWidth = options.canvasWidth || width;
      const canvasHeight = options.canvasHeight || height;
      canvas.width = canvasWidth * ratio;
      canvas.height = canvasHeight * ratio;
      if (!options.skipAutoScale) {
        checkCanvasDimensions(canvas);
      }
      canvas.style.width = `${canvasWidth}`;
      canvas.style.height = `${canvasHeight}`;
      if (options.backgroundColor) {
        context.fillStyle = options.backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
      return canvas;
    });
  }
  function toPng(_0) {
    return __async(this, arguments, function* (node, options = {}) {
      const canvas = yield toCanvas(node, options);
      return canvas.toDataURL();
    });
  }
  function useTreeViewItem(element) {
    const UIStore = useUIStore();
    const elementOptionsRef = Vue.ref(null);
    const isActiveItem = Vue.computed(() => UIStore.editedElement === element);
    const elementsDefinitionStore = useElementDefinitionsStore();
    const elementModel = elementsDefinitionStore.getElementDefinition(element);
    const showElementMenu = function() {
      var _a;
      if (((_a = UIStore.activeElementMenu) == null ? void 0 : _a.element.uid) === element.uid) {
        UIStore.hideElementMenu();
      } else {
        UIStore.showElementMenu(element, elementOptionsRef.value);
      }
    };
    function editElement() {
      element.scrollTo = true;
      UIStore.editElement(element);
    }
    const elementHasCustomCSS = Vue.computed(() => {
      var _a, _b, _c, _d;
      return ((_b = (_a = element.options) == null ? void 0 : _a._advanced_options) == null ? void 0 : _b._custom_css) && ((_d = (_c = element.options) == null ? void 0 : _c._advanced_options) == null ? void 0 : _d._custom_css.trim()) !== "";
    });
    return {
      elementOptionsRef,
      isActiveItem,
      elementModel,
      showElementMenu,
      elementHasCustomCSS,
      editElement
    };
  }
  const _hoisted_1$C = {
    key: 0,
    class: "znpb-tree-view__itemLooperIcon"
  };
  const _hoisted_2$t = {
    key: 1,
    class: "znpb-tree-view__itemLooperIcon"
  };
  const _hoisted_3$n = {
    key: 2,
    class: "znpb-tree-view__itemHasCustomCSS"
  };
  const _sfc_main$K = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementHeader",
    props: {
      element: {}
    },
    setup(__props) {
      const props = __props;
      const { showElementMenu, elementOptionsRef, editElement, isActiveItem, elementHasCustomCSS } = useTreeViewItem(
        props.element
      );
      const elementName = Vue.computed({
        get: () => props.element.name,
        set(newValue) {
          props.element.name = newValue;
        }
      });
      return (_ctx, _cache) => {
        const _component_UIElementIcon = Vue.resolveComponent("UIElementIcon");
        const _component_InlineEdit = Vue.resolveComponent("InlineEdit");
        const _component_Icon = Vue.resolveComponent("Icon");
        const _directive_znpb_tooltip = Vue.resolveDirective("znpb-tooltip");
        return Vue.openBlock(), Vue.createElementBlock("div", {
          class: Vue.normalizeClass(["znpb-tree-view__itemHeader", {
            "znpb-panel-item--active": Vue.unref(isActiveItem),
            "znpb-tree-view__item--loopProvider": _ctx.element.isRepeaterProvider,
            "znpb-tree-view__item--loopConsumer": _ctx.element.isRepeaterConsumer
          }]),
          onContextmenu: _cache[3] || (_cache[3] = Vue.withModifiers(
            //@ts-ignore
            (...args) => Vue.unref(showElementMenu) && Vue.unref(showElementMenu)(...args),
            ["stop", "prevent"]
          )),
          onMouseover: _cache[4] || (_cache[4] = Vue.withModifiers(
            //@ts-ignore
            (...args) => _ctx.element.highlight && _ctx.element.highlight(...args),
            ["stop"]
          )),
          onMouseout: _cache[5] || (_cache[5] = Vue.withModifiers(
            //@ts-ignore
            (...args) => _ctx.element.unHighlight && _ctx.element.unHighlight(...args),
            ["stop"]
          )),
          onClick: _cache[6] || (_cache[6] = Vue.withModifiers(
            //@ts-ignore
            (...args) => Vue.unref(editElement) && Vue.unref(editElement)(...args),
            ["stop", "left"]
          ))
        }, [
          Vue.renderSlot(_ctx.$slots, "start"),
          Vue.createVNode(_component_UIElementIcon, {
            element: _ctx.element.elementDefinition,
            class: "znpb-tree-view__itemIcon znpb-utility__cursor--move",
            size: 24
          }, null, 8, ["element"]),
          _ctx.element.isRepeaterProvider ? Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("span", _hoisted_1$C, [
            Vue.createTextVNode("P")
          ])), [
            [_directive_znpb_tooltip, i18n__namespace.__("repeater provider", "zionbuilder")]
          ]) : Vue.createCommentVNode("", true),
          _ctx.element.isRepeaterConsumer ? Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("span", _hoisted_2$t, [
            Vue.createTextVNode("C")
          ])), [
            [_directive_znpb_tooltip, i18n__namespace.__("repeater consumer", "zionbuilder")]
          ]) : Vue.createCommentVNode("", true),
          Vue.unref(elementHasCustomCSS) ? Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("span", _hoisted_3$n, [
            Vue.createTextVNode("CSS")
          ])), [
            [_directive_znpb_tooltip, i18n__namespace.__("custom css", "zionbuilder")]
          ]) : Vue.createCommentVNode("", true),
          Vue.createVNode(_component_InlineEdit, {
            modelValue: elementName.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => elementName.value = $event),
            class: "znpb-tree-view__item-header-item znpb-tree-view__item-header-rename"
          }, null, 8, ["modelValue"]),
          !_ctx.element.isVisible ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(_component_Icon, {
            key: 3,
            icon: "visibility-hidden",
            class: "znpb-editor-icon-wrapper--show-element znpb-tree-view__item-enable-visible",
            onClick: _cache[1] || (_cache[1] = Vue.withModifiers(($event) => _ctx.element.isVisible = !_ctx.element.isVisible, ["stop"]))
          }, null, 512)), [
            [_directive_znpb_tooltip, i18n__namespace.__("The element is hidden. Click to enable it.", "zionbuilder")]
          ]) : Vue.createCommentVNode("", true),
          Vue.createElementVNode("div", {
            ref_key: "elementOptionsRef",
            ref: elementOptionsRef,
            class: "znpb-element-options__container",
            onClick: _cache[2] || (_cache[2] = Vue.withModifiers(
              //@ts-ignore
              (...args) => Vue.unref(showElementMenu) && Vue.unref(showElementMenu)(...args),
              ["stop"]
            ))
          }, [
            Vue.createVNode(_component_Icon, {
              class: "znpb-element-options__dropdown-icon znpb-utility__cursor--pointer",
              icon: "more"
            })
          ], 512),
          Vue.renderSlot(_ctx.$slots, "end")
        ], 34);
      };
    }
  });
  const ElementHeader_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$B = { key: 0 };
  const _hoisted_2$s = { key: 0 };
  const _hoisted_3$m = ["src"];
  const _sfc_main$J = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementSectionView",
    props: {
      element: {}
    },
    setup(__props) {
      const props = __props;
      const { showElementMenu, editElement } = useTreeViewItem(props.element);
      const imageSrc = Vue.ref(null);
      const error = Vue.ref(null);
      const loading = Vue.ref(true);
      Vue.onMounted(() => {
        setTimeout(() => {
          var _a, _b, _c;
          const domElement = (_c = (_b = (_a = window.document.getElementById("znpb-editor-iframe")) == null ? void 0 : _a.contentWindow) == null ? void 0 : _b.document) == null ? void 0 : _c.getElementById(props.element.elementCssId);
          if (!domElement) {
            console.warn(`Element with id "${props.element.elementCssId}" could not be found in page`);
            return;
          }
          function filter2(node) {
            if (node && node.classList) {
              if (node.classList.contains("znpb-empty-placeholder")) {
                return false;
              }
              if (node.classList.contains("znpb-element-toolbox")) {
                return false;
              }
            }
            return true;
          }
          toPng(domElement, {
            style: {
              width: "100%",
              margin: 0
            },
            filter: filter2
          }).then((dataUrl) => {
            imageSrc.value = dataUrl;
          }).catch((error2) => {
            error2 = true;
            console.error(i18n__namespace.__("oops, something went wrong!", "zionbuilder"), error2);
          }).finally(() => {
            loading.value = false;
          });
        }, 100);
      });
      return (_ctx, _cache) => {
        const _component_Loader = Vue.resolveComponent("Loader");
        return Vue.openBlock(), Vue.createElementBlock("li", {
          class: Vue.normalizeClass(["znpb-section-view-item", {
            "znpb-section-view-item--hidden": !_ctx.element.isVisible,
            "znpb-section-view-item--loopProvider": _ctx.element.isRepeaterProvider,
            "znpb-section-view-item--loopConsumer": _ctx.element.isRepeaterConsumer
          }]),
          onContextmenu: _cache[0] || (_cache[0] = Vue.withModifiers(
            //@ts-ignore
            (...args) => Vue.unref(showElementMenu) && Vue.unref(showElementMenu)(...args),
            ["stop", "prevent"]
          )),
          onMouseover: _cache[1] || (_cache[1] = Vue.withModifiers(
            //@ts-ignore
            (...args) => _ctx.element.highlight && _ctx.element.highlight(...args),
            ["stop"]
          )),
          onMouseout: _cache[2] || (_cache[2] = Vue.withModifiers(
            //@ts-ignore
            (...args) => _ctx.element.unHighlight && _ctx.element.unHighlight(...args),
            ["stop"]
          )),
          onClick: _cache[3] || (_cache[3] = Vue.withModifiers(
            //@ts-ignore
            (...args) => Vue.unref(editElement) && Vue.unref(editElement)(...args),
            ["stop", "left"]
          ))
        }, [
          loading.value || error.value ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$B, [
            Vue.createVNode(_component_Loader, { size: 16 }),
            error.value ? (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_2$s, Vue.toDisplayString(i18n__namespace.__("Preview not available", "zionbuilder")), 1)) : Vue.createCommentVNode("", true)
          ])) : Vue.createCommentVNode("", true),
          Vue.createElementVNode("img", { src: imageSrc.value }, null, 8, _hoisted_3$m),
          Vue.createVNode(_sfc_main$K, {
            class: "znpb-section-view__item__header",
            element: _ctx.element
          }, null, 8, ["element"])
        ], 34);
      };
    }
  });
  const ElementSectionView_vue_vue_type_style_index_0_lang = "";
  function useTreeViewList() {
    const elementOptionsRef = Vue.ref(null);
    const UIStore = useUIStore();
    const contentStore = useContentStore();
    function sortableStart() {
      UIStore.setElementDragging(true);
    }
    function sortableEnd() {
      UIStore.setElementDragging(false);
    }
    function onSortableDrop(event) {
      const { item, to, newIndex, duplicateItem, placeBefore } = event.data;
      const movedElement = contentStore.getElement(item.dataset.zionElementUid);
      if (duplicateItem) {
        const elementForInsert = movedElement.getClone();
        window.zb.run("editor/elements/add", {
          parentUID: to.dataset.zionElementUid,
          element: elementForInsert,
          index: placeBefore ? newIndex : newIndex + 1
        });
      } else {
        window.zb.run("editor/elements/move", {
          newParent: contentStore.getElement(to.dataset.zionElementUid),
          element: contentStore.getElement(item.dataset.zionElementUid),
          index: newIndex
        });
      }
    }
    return {
      elementOptionsRef,
      sortableStart,
      sortableEnd,
      onSortableDrop
    };
  }
  const _hoisted_1$A = {
    id: "znpb-section-view",
    class: "znpb-tree-view-container znpb-fancy-scrollbar znpb-panel-view-wrapper"
  };
  const _hoisted_2$r = {
    key: 0,
    class: "znpb-tree-view__view__ListAddButtonInside"
  };
  const _sfc_main$I = /* @__PURE__ */ Vue.defineComponent({
    __name: "SectionViewPanel",
    props: {
      element: {}
    },
    setup(__props) {
      const props = __props;
      const { sortableStart, sortableEnd, onSortableDrop } = useTreeViewList();
      const contentStore = useContentStore();
      const children = Vue.computed(() => {
        return props.element.content.map((childUID) => contentStore.getElement(childUID));
      });
      return (_ctx, _cache) => {
        const _component_AddElementIcon = Vue.resolveComponent("AddElementIcon");
        const _component_Sortable = Vue.resolveComponent("Sortable");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$A, [
          Vue.createVNode(_component_Sortable, {
            modelValue: children.value,
            class: "znpb-section-view-wrapper",
            tag: "ul",
            group: "pagebuilder-sectionview-elements",
            "data-zion-element-uid": _ctx.element.uid,
            onStart: Vue.unref(sortableStart),
            onEnd: Vue.unref(sortableEnd),
            onDrop: Vue.unref(onSortableDrop)
          }, {
            helper: Vue.withCtx(() => [
              Vue.createVNode(SortableHelper)
            ]),
            placeholder: Vue.withCtx(() => [
              Vue.createVNode(SortablePlaceholder)
            ]),
            end: Vue.withCtx(() => [
              children.value.length === 0 ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_2$r, [
                Vue.createVNode(_component_AddElementIcon, {
                  element: _ctx.element,
                  placement: "inside"
                }, null, 8, ["element"])
              ])) : Vue.createCommentVNode("", true)
            ]),
            default: Vue.withCtx(() => [
              (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(children.value, (childElement) => {
                return Vue.openBlock(), Vue.createBlock(_sfc_main$J, {
                  key: childElement.uid,
                  element: childElement,
                  "data-zion-element-uid": childElement.uid
                }, null, 8, ["element", "data-zion-element-uid"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "data-zion-element-uid", "onStart", "onEnd", "onDrop"])
        ]);
      };
    }
  });
  const SectionViewPanel_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$z = ["id"];
  const _sfc_main$H = /* @__PURE__ */ Vue.defineComponent({
    __name: "TreeViewListItem",
    props: {
      element: {}
    },
    setup(__props) {
      const props = __props;
      const UIStore = useUIStore();
      const listItem = Vue.ref(null);
      const justAdded = Vue.ref(false);
      const { showElementMenu, editElement } = useTreeViewItem(props.element);
      if (UIStore.contentTimestamp) {
        justAdded.value = props.element.addedTime > UIStore.contentTimestamp ? Date.now() - props.element.addedTime < 1e3 : false;
        if (justAdded.value) {
          setTimeout(() => {
            justAdded.value = false;
          }, 1e3);
        }
      }
      Vue.watch(
        () => UIStore.editedElement,
        (newValue, oldValue) => {
          if (newValue !== oldValue && newValue === props.element) {
            if (listItem.value) {
              listItem.value.scrollIntoView({
                behavior: "smooth",
                block: "center"
              });
            }
          }
        }
      );
      const expandedItems = Vue.inject("treeViewExpandedItems", Vue.ref([]));
      const treeViewExpandStatus = Vue.inject("treeViewExpandStatus", Vue.ref(false));
      const expanded = Vue.ref(treeViewExpandStatus.value || expandedItems.value.includes(props.element.uid) || false);
      Vue.watch(treeViewExpandStatus, (newValue) => {
        expanded.value = newValue;
      });
      Vue.watch(expandedItems, () => {
        if (expandedItems.value.includes(props.element.uid)) {
          expanded.value = true;
        }
      });
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_AddElementIcon = Vue.resolveComponent("AddElementIcon");
        return Vue.openBlock(), Vue.createElementBlock("li", {
          id: _ctx.element.uid,
          ref_key: "listItem",
          ref: listItem,
          class: Vue.normalizeClass(["znpb-tree-view__item", {
            "znpb-tree-view__item--hidden": !_ctx.element.isVisible,
            "znpb-tree-view__item--justAdded": justAdded.value
          }]),
          onMouseenter: _cache[1] || (_cache[1] = Vue.withModifiers(
            //@ts-ignore
            (...args) => _ctx.element.highlight && _ctx.element.highlight(...args),
            ["stop"]
          )),
          onMouseleave: _cache[2] || (_cache[2] = Vue.withModifiers(
            //@ts-ignore
            (...args) => _ctx.element.unHighlight && _ctx.element.unHighlight(...args),
            ["stop"]
          )),
          onClick: _cache[3] || (_cache[3] = Vue.withModifiers(
            //@ts-ignore
            (...args) => Vue.unref(editElement) && Vue.unref(editElement)(...args),
            ["stop", "left"]
          )),
          onContextmenu: _cache[4] || (_cache[4] = Vue.withModifiers(
            //@ts-ignore
            (...args) => Vue.unref(showElementMenu) && Vue.unref(showElementMenu)(...args),
            ["stop", "prevent"]
          ))
        }, [
          Vue.createVNode(_sfc_main$K, { element: _ctx.element }, {
            start: Vue.withCtx(() => [
              _ctx.element.isWrapper ? (Vue.openBlock(), Vue.createBlock(_component_Icon, {
                key: 0,
                icon: "select",
                class: Vue.normalizeClass(["znpb-tree-view__item-header-item znpb-tree-view__item-header-expand", {
                  "znpb-tree-view__item-header-expand--expanded": expanded.value
                }]),
                onClick: _cache[0] || (_cache[0] = Vue.withModifiers(($event) => expanded.value = !expanded.value, ["stop"]))
              }, null, 8, ["class"])) : Vue.createCommentVNode("", true)
            ]),
            end: Vue.withCtx(() => [
              Vue.createVNode(_component_AddElementIcon, {
                element: _ctx.element,
                class: "znpb-tree-view__itemAddButton",
                position: "centered-bottom"
              }, null, 8, ["element"])
            ]),
            _: 1
          }, 8, ["element"]),
          expanded.value ? (Vue.openBlock(), Vue.createBlock(_sfc_main$G, {
            key: 0,
            element: _ctx.element
          }, null, 8, ["element"])) : Vue.createCommentVNode("", true)
        ], 42, _hoisted_1$z);
      };
    }
  });
  const TreeViewListItem_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$y = {
    key: 0,
    class: "znpb-tree-view__view__ListAddButtonInside"
  };
  const _sfc_main$G = /* @__PURE__ */ Vue.defineComponent({
    __name: "TreeViewList",
    props: {
      element: {}
    },
    setup(__props) {
      const props = __props;
      const contentStore = useContentStore();
      const children = Vue.computed(() => {
        return props.element.content.map((childUID) => contentStore.getElement(childUID));
      });
      const { sortableStart, sortableEnd, onSortableDrop } = useTreeViewList();
      return (_ctx, _cache) => {
        const _component_AddElementIcon = Vue.resolveComponent("AddElementIcon");
        const _component_Sortable = Vue.resolveComponent("Sortable");
        return Vue.openBlock(), Vue.createBlock(_component_Sortable, {
          modelValue: children.value,
          tag: "ul",
          class: "znpb-tree-view-wrapper",
          group: "pagebuilder-treview-elements",
          handle: ".znpb-tree-view__item-header",
          "data-zion-element-uid": _ctx.element.uid,
          onStart: Vue.unref(sortableStart),
          onEnd: Vue.unref(sortableEnd),
          onDrop: Vue.unref(onSortableDrop)
        }, {
          end: Vue.withCtx(() => [
            children.value.length === 0 && _ctx.element.isWrapper ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$y, [
              Vue.createVNode(_component_AddElementIcon, {
                element: _ctx.element,
                placement: "inside",
                index: -1
              }, null, 8, ["element"])
            ])) : Vue.createCommentVNode("", true)
          ]),
          helper: Vue.withCtx(() => [
            Vue.createVNode(SortableHelper)
          ]),
          placeholder: Vue.withCtx(() => [
            Vue.createVNode(SortablePlaceholder)
          ]),
          default: Vue.withCtx(() => [
            (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(children.value, (childElement) => {
              return Vue.openBlock(), Vue.createBlock(_sfc_main$H, {
                key: childElement.uid,
                element: childElement,
                "data-zion-element-uid": childElement.uid
              }, null, 8, ["element", "data-zion-element-uid"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "data-zion-element-uid", "onStart", "onEnd", "onDrop"]);
      };
    }
  });
  const TreeViewList_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$x = { class: "znpb-tree-viewWrapper" };
  const _hoisted_2$q = { class: "znpb-tree-viewExpandContainer" };
  const _hoisted_3$l = { class: "znpb-tree-view znpb-fancy-scrollbar znpb-panel-view-wrapper" };
  const _sfc_main$F = /* @__PURE__ */ Vue.defineComponent({
    __name: "TreeViewPanel",
    props: {
      element: {}
    },
    setup(__props) {
      const props = __props;
      const UIStore = useUIStore();
      const userStore = useUserStore();
      const treeViewExpanded = Vue.ref(false);
      const showModalConfirm = Vue.ref(false);
      const expandedItems = Vue.ref([]);
      const canRemove = Vue.computed(() => {
        return props.element.content.length === 0;
      });
      Vue.provide("treeViewExpandStatus", treeViewExpanded);
      Vue.watch(
        () => UIStore.editedElement,
        (newElement, oldElement) => {
          if (newElement && newElement !== oldElement) {
            const parentUIDS = [newElement.uid];
            while (newElement.parent && newElement.parent.element_type !== "contentRoot") {
              parentUIDS.push(newElement.parent.uid);
              newElement = newElement.parent;
            }
            expandedItems.value = parentUIDS;
          }
        }
      );
      function removeAllElements() {
        window.zb.run("editor/elements/remove_all", {
          areaID: props.element.uid
        });
        showModalConfirm.value = false;
      }
      Vue.provide("treeViewExpandedItems", expandedItems);
      return (_ctx, _cache) => {
        const _component_ModalConfirm = Vue.resolveComponent("ModalConfirm");
        const _component_Icon = Vue.resolveComponent("Icon");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$x, [
          Vue.createElementVNode("div", _hoisted_2$q, [
            showModalConfirm.value ? (Vue.openBlock(), Vue.createBlock(_component_ModalConfirm, {
              key: 0,
              width: 530,
              "confirm-text": i18n__namespace.__("Yes, delete elements", "zionbuilder"),
              "cancel-text": i18n__namespace.__("Cancel", "zionbuilder"),
              onConfirm: removeAllElements,
              onCancel: _cache[0] || (_cache[0] = ($event) => showModalConfirm.value = false)
            }, {
              default: Vue.withCtx(() => [
                Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("Are you sure you want to remove all elements from page?", "zionbuilder")), 1)
              ]),
              _: 1
            }, 8, ["confirm-text", "cancel-text"])) : Vue.createCommentVNode("", true),
            !Vue.unref(userStore).permissions.only_content ? (Vue.openBlock(), Vue.createElementBlock("a", {
              key: 1,
              href: "#",
              class: Vue.normalizeClass(["znpb-tree-viewRemoveButton", {
                "znpb-tree-viewRemoveButton--disabled": canRemove.value
              }]),
              onClick: _cache[1] || (_cache[1] = ($event) => showModalConfirm.value = true)
            }, [
              Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("Remove all", "zionbuilder")) + " ", 1),
              Vue.createVNode(_component_Icon, {
                icon: "delete",
                size: 10
              })
            ], 2)) : Vue.createCommentVNode("", true),
            Vue.createElementVNode("a", {
              href: "#",
              onClick: _cache[2] || (_cache[2] = ($event) => (treeViewExpanded.value = !treeViewExpanded.value, expandedItems.value = []))
            }, [
              !treeViewExpanded.value ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, [
                Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("Expand all", "zionbuilder")) + " ", 1),
                Vue.createVNode(_component_Icon, {
                  icon: "long-arrow-down",
                  size: 10
                })
              ], 64)) : (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 1 }, [
                Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("Collapse all", "zionbuilder")) + " ", 1),
                Vue.createVNode(_component_Icon, {
                  icon: "long-arrow-up",
                  size: 10
                })
              ], 64))
            ])
          ]),
          Vue.createElementVNode("div", _hoisted_3$l, [
            Vue.createVNode(_sfc_main$G, { element: _ctx.element }, null, 8, ["element"])
          ])
        ]);
      };
    }
  });
  const TreeViewPanel_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$E = /* @__PURE__ */ Vue.defineComponent({
    __name: "WireframeListItem",
    props: {
      element: {}
    },
    setup(__props) {
      const props = __props;
      const expanded = Vue.ref(true);
      const { showElementMenu } = useTreeViewItem(props.element);
      const columnSize = Vue.computed(() => props.element.options.column_size);
      const hasFlexDirection = Vue.computed(() => {
        let orientation = "column";
        let mediaOrientation = get(props.element.options, "_styles.wrapper.styles.default.default.flex-direction");
        if (props.element.element_type === "zion_section") {
          mediaOrientation = get(
            props.element.options,
            "_styles.inner_content_styles.styles.default.default.flex-direction",
            "row"
          );
        }
        if (mediaOrientation) {
          orientation = mediaOrientation;
        }
        return orientation;
      });
      const getClasses = Vue.computed(() => {
        const cssClass = {
          [`znpb-wireframe-item--item--hidden`]: !props.element.isVisible,
          [`znpb-wireframe-item--${props.element.element_type}`]: props.element.element_type,
          [`znpb-wireframe-item__empty`]: !props.element.content.length,
          "znpb-wireframe-item--loopProvider": props.element.isRepeaterProvider,
          "znpb-wireframe-item--loopConsumer": props.element.isRepeaterConsumer
        };
        if (columnSize.value) {
          Object.keys(columnSize.value).forEach((key) => {
            const responsivePrefix = getColumnResponsivePrefix(key);
            cssClass[`zb-column--${responsivePrefix}${columnSize.value[key]}`] = !!columnSize.value[key];
          });
        }
        return cssClass;
      });
      function getColumnResponsivePrefix(responsiveMediaId) {
        const devices = {
          default: "",
          laptop: "lg--",
          tablet: "md--",
          mobile: "sm--"
        };
        return devices[responsiveMediaId];
      }
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        return Vue.openBlock(), Vue.createElementBlock("li", {
          class: Vue.normalizeClass(["znpb-wireframe-item", getClasses.value]),
          onClick: _cache[1] || (_cache[1] = Vue.withModifiers(
            //@ts-ignore
            (...args) => _ctx.element.focus && _ctx.element.focus(...args),
            ["stop"]
          )),
          onContextmenu: _cache[2] || (_cache[2] = Vue.withModifiers(
            //@ts-ignore
            (...args) => Vue.unref(showElementMenu) && Vue.unref(showElementMenu)(...args),
            ["stop", "prevent"]
          ))
        }, [
          Vue.createVNode(_sfc_main$K, { element: _ctx.element }, {
            start: Vue.withCtx(() => [
              _ctx.element.isWrapper ? (Vue.openBlock(), Vue.createBlock(_component_Icon, {
                key: 0,
                icon: "select",
                class: Vue.normalizeClass(["znpb-tree-view__item-header-item znpb-tree-view__item-header-expand", {
                  "znpb-tree-view__item-header-expand--expanded": expanded.value
                }]),
                onClick: _cache[0] || (_cache[0] = Vue.withModifiers(($event) => expanded.value = !expanded.value, ["stop"]))
              }, null, 8, ["class"])) : Vue.createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["element"]),
          expanded.value && _ctx.element.isWrapper ? (Vue.openBlock(), Vue.createBlock(_sfc_main$D, {
            key: 0,
            element: _ctx.element,
            class: Vue.normalizeClass(["znpb-wireframe-item__content", { [`znpb-flex--${hasFlexDirection.value}`]: hasFlexDirection.value }])
          }, null, 8, ["element", "class"])) : Vue.createCommentVNode("", true)
        ], 34);
      };
    }
  });
  const WireframeListItem_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$D = /* @__PURE__ */ Vue.defineComponent({
    __name: "WireframeList",
    props: {
      element: {},
      showAdd: { type: Boolean, default: true }
    },
    setup(__props) {
      const props = __props;
      const UIStore = useUIStore();
      const contentStore = useContentStore();
      const children = Vue.computed(() => {
        return props.element.content.map((childUID) => contentStore.getElement(childUID));
      });
      const { sortableStart, sortableEnd, onSortableDrop } = useTreeViewList();
      const getSortableAxis = Vue.computed(() => {
        if (props.element.element_type === "contentRoot") {
          return "vertical";
        }
        let orientation = props.element.element_type === "zion_column" ? "vertical" : "horizontal";
        if (props.element.options.inner_content_layout) {
          orientation = props.element.options.inner_content_layout;
        }
        const mediaOrientation = get(props.element.options, "_styles.wrapper.styles.default.default.flex-direction");
        if (mediaOrientation) {
          orientation = mediaOrientation === "row" ? "horizontal" : "vertical";
        }
        return orientation;
      });
      return (_ctx, _cache) => {
        const _component_AddElementIcon = Vue.resolveComponent("AddElementIcon");
        const _component_Sortable = Vue.resolveComponent("Sortable");
        return Vue.openBlock(), Vue.createBlock(_component_Sortable, {
          modelValue: children.value,
          tag: "ul",
          class: Vue.normalizeClass(["znpb-wireframe-view-wrapper", {
            [`znpb__sortable-container--${getSortableAxis.value}`]: Vue.unref(UIStore).isElementDragging
          }]),
          group: "pagebuilder-wireframe-elements",
          axis: getSortableAxis.value,
          "allow-duplicate": true,
          "data-zion-element-uid": _ctx.element.uid,
          onStart: Vue.unref(sortableStart),
          onEnd: Vue.unref(sortableEnd),
          onDrop: Vue.unref(onSortableDrop)
        }, {
          helper: Vue.withCtx(() => [
            Vue.createVNode(SortableHelper)
          ]),
          placeholder: Vue.withCtx(() => [
            Vue.createVNode(SortablePlaceholder)
          ]),
          end: Vue.withCtx(() => [
            !_ctx.element.content.length && _ctx.element.isWrapper ? (Vue.openBlock(), Vue.createBlock(_sfc_main$1b, {
              key: 0,
              element: _ctx.element
            }, null, 8, ["element"])) : Vue.createCommentVNode("", true),
            Vue.createVNode(_component_AddElementIcon, {
              element: _ctx.element,
              class: "znpb-tree-view__ListAddButton",
              placement: "next"
            }, null, 8, ["element"])
          ]),
          default: Vue.withCtx(() => [
            (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(children.value, (childElement) => {
              return Vue.openBlock(), Vue.createBlock(_sfc_main$E, {
                key: childElement.uid,
                element: childElement,
                "data-zion-element-uid": childElement.uid
              }, null, 8, ["element", "data-zion-element-uid"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "class", "axis", "data-zion-element-uid", "onStart", "onEnd", "onDrop"]);
      };
    }
  });
  const _hoisted_1$w = {
    id: "znpb-wireframe-panel",
    class: "znpb-tree-view-bar znpb-wireframe-container znpb-fancy-scrollbar znpb-panel-view-wrapper"
  };
  const _sfc_main$C = /* @__PURE__ */ Vue.defineComponent({
    __name: "WireframePanel",
    props: {
      element: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$w, [
          Vue.createVNode(_sfc_main$D, {
            element: _ctx.element,
            "show-add": false
          }, null, 8, ["element"])
        ]);
      };
    }
  });
  const WireframePanel_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$v = ["id"];
  const _hoisted_2$p = {
    key: 0,
    class: "znpb-panel__header-name"
  };
  const _hoisted_3$k = { class: "znpb-panel__content_wrapper" };
  const _sfc_main$B = /* @__PURE__ */ Vue.defineComponent({
    __name: "BasePanel",
    props: {
      cssClass: { default: "" },
      panelName: { default: "" },
      panelId: {},
      expanded: { type: Boolean, default: false },
      showHeader: { type: Boolean, default: true },
      showClose: { type: Boolean, default: true },
      allowHorizontalResize: { type: Boolean, default: true },
      allowVerticalResize: { type: Boolean, default: true },
      closeOnEscape: { type: Boolean, default: true },
      panel: {}
    },
    emits: ["close-panel"],
    setup(__props, { expose: __expose, emit }) {
      const props = __props;
      const slots = Vue.useSlots();
      const UIStore = useUIStore();
      const { addEventListener, removeEventListener } = useWindows();
      let boundingClientRect = null;
      const root2 = Vue.ref(null);
      const panelOffset = Vue.ref(null);
      const initialPosition = Vue.ref({
        posY: 0,
        posX: 0
      });
      const dragginMoved = Vue.ref({
        x: null,
        y: null
      });
      const getCssClass = Vue.computed(() => {
        let classes = "";
        classes += props.panel.isDetached ? " znpb-editor-panel--detached" : " znpb-editor-panel--attached";
        classes += props.cssClass ? props.cssClass : "";
        classes += props.panel.isDragging ? " znpb-editor-panel--dragging" : "";
        if (!props.panel.isDetached) {
          classes += UIStore.getPanelPlacement(props.panel.id) === "right" ? " znpb-editor-panel--right" : " znpb-editor-panel--left";
        }
        return classes;
      });
      const panelStyles = Vue.computed(() => {
        const windowHeight = window.innerHeight;
        const maxPanelHeight = props.panel.height ? Math.min(props.panel.height, windowHeight) + "px" : "90%";
        const maxTopOffset = Math.max(props.panel.offsets.posY, 0);
        const maxLeftOffset = Math.max(props.panel.offsets.posX, 0);
        const cssStyles = {
          width: props.panel.width + "px",
          height: props.panel.isDetached ? maxPanelHeight : "100%",
          order: UIStore.getPanelOrder(props.panel.id),
          // Positions for detached
          top: !props.panel.isDragging && props.panel.isDetached && maxTopOffset !== 0 ? maxTopOffset + "px" : null,
          left: !props.panel.isDragging && props.panel.isDetached ? maxLeftOffset + "px" : null,
          position: props.panel.isDetached ? "fixed" : "relative",
          // Dragging transform
          transform: props.panel.isDragging ? `translate3d(${dragginMoved.value.x}px, ${dragginMoved.value.y}px, 0)` : null,
          zIndex: props.panel.isDragging ? 99 : null
        };
        return cssStyles;
      });
      const hasHeaderSlot = Vue.computed(() => {
        return !!slots.header;
      });
      let initialMovePosition = {
        posX: null,
        posY: null
      };
      let availableStickElements = [];
      let oldIndex = null;
      let newIndex = null;
      function onMouseDown(event) {
        UIStore.setIframePointerEvents(true);
        document.body.style.userSelect = "none";
        const { clientX, clientY } = event;
        oldIndex = UIStore.getPanelIndex(props.panel.id);
        boundingClientRect = root2.value.getBoundingClientRect();
        const parentClientRect = root2.value.parentNode.getBoundingClientRect();
        initialMovePosition = {
          posX: clientX,
          posY: clientY,
          startPanelRect: boundingClientRect,
          parentClientRect,
          oldTop: boundingClientRect.top,
          oldLeft: boundingClientRect.left
        };
        dragginMoved.value = {
          x: boundingClientRect.left - parentClientRect.left,
          y: boundingClientRect.top - parentClientRect.top
        };
        window.addEventListener("mousemove", rafMovePanel);
        window.addEventListener("mouseup", onMouseUp);
      }
      function movePanel(event) {
        const { posX, posY, oldTop, oldLeft, parentClientRect } = initialMovePosition;
        const { height: parentHeight, width: parentWidth } = parentClientRect;
        const { clientY, clientX } = event;
        if (!props.panel.isDragging) {
          const xMoved = Math.abs(posX - clientX);
          const yMoved = Math.abs(posY - clientY);
          const dragThreshold = 5;
          if (xMoved > dragThreshold || yMoved > dragThreshold) {
            UIStore.updatePanel(props.panel.id, "isDetached", true);
            UIStore.updatePanel(props.panel.id, "isDragging", true);
            Vue.nextTick(() => {
              boundingClientRect = root2.value.getBoundingClientRect();
              UIStore.openPanels.forEach((panel) => {
                if (panel.isDetached || panel.id === props.panel.id) {
                  return;
                }
                const boundingClient = document.getElementById(panel.id).getBoundingClientRect();
                availableStickElements.push({
                  panel,
                  boundingClient
                });
              });
            });
          }
        } else {
          if (!boundingClientRect) {
            return;
          }
          const maxBottom = parentHeight - boundingClientRect.height;
          const newPositionY = oldTop + clientY - posY - parentClientRect.top;
          const newTop = newPositionY < 0 ? 0 : newPositionY;
          const MinMaxTop = newTop > maxBottom ? maxBottom : newTop;
          const movedAmmount = oldLeft + clientX - posX;
          const MinMaxLeft = movedAmmount - parentClientRect.left;
          dragginMoved.value = {
            x: MinMaxLeft,
            y: MinMaxTop
          };
          availableStickElements.forEach((availableStickLocation) => {
            const { boundingClient, panel: possibleHoverPanel } = availableStickLocation;
            const realLeft = boundingClient.left;
            const realRight = boundingClient.left + boundingClient.width;
            if (MinMaxLeft >= boundingClient.left && MinMaxLeft <= boundingClient.left + boundingClient.width) {
              if (MinMaxLeft < realLeft + 50) {
                UIStore.setPanelPlaceholder({
                  visibility: true,
                  left: realLeft,
                  placeBefore: true,
                  panel: possibleHoverPanel
                });
                newIndex = UIStore.getPanelIndex(possibleHoverPanel.id);
              } else if (movedAmmount + boundingClientRect.width > boundingClient.left + boundingClient.width - 50) {
                const left = boundingClient.left + boundingClient.width >= window.innerWidth ? boundingClient.left + boundingClient.width - 5 : realRight;
                UIStore.setPanelPlaceholder({
                  visibility: true,
                  left,
                  placeBefore: false,
                  panel: possibleHoverPanel
                });
                newIndex = UIStore.getPanelIndex(possibleHoverPanel.id) + 1;
              } else {
                UIStore.setPanelPlaceholder({
                  visibility: false,
                  left: null,
                  placeBefore: null,
                  panel: null
                });
                newIndex = null;
              }
            }
          });
        }
      }
      const rafMovePanel = rafSchd$1(movePanel);
      function updatePosition(oldIndex2, newIndex2) {
        const list = [...UIStore.panelsOrder];
        if (oldIndex2 >= newIndex2) {
          list.splice(newIndex2, 0, list.splice(oldIndex2, 1)[0]);
        } else {
          list.splice(newIndex2 - 1, 0, list.splice(oldIndex2, 1)[0]);
        }
        UIStore.panelsOrder = list;
      }
      function onMouseUp() {
        document.body.style.userSelect = null;
        UIStore.setIframePointerEvents(false);
        availableStickElements = [];
        rafMovePanel.cancel();
        props.panel.isDragging = false;
        dragginMoved.value = {
          x: null,
          y: null
        };
        window.removeEventListener("mousemove", rafMovePanel);
        window.removeEventListener("mouseup", onMouseUp);
        panelOffset.value = root2.value.getBoundingClientRect();
        props.panel.offsets = {
          posX: panelOffset.value.left,
          posY: panelOffset.value.top
        };
        initialPosition.value = {
          posX: panelOffset.value.left,
          posY: panelOffset.value.top
        };
        if (null !== oldIndex && null !== newIndex) {
          UIStore.updatePanel(props.panel.id, "isDetached", false);
          updatePosition(oldIndex, newIndex);
        }
        UIStore.saveUI();
        UIStore.setPanelPlaceholder({
          visibility: false,
          panel: null
        });
      }
      const rafResizeHorizontal = rafSchd$1(resizeHorizontal);
      let initialHMouseX = null;
      let initialWidth = null;
      function activateHorizontalResize(event) {
        UIStore.setIframePointerEvents(true);
        document.body.style.userSelect = "none";
        document.body.style.cursor = "w-resize";
        initialHMouseX = event.clientX;
        initialWidth = props.panel.width;
        window.addEventListener("mousemove", rafResizeHorizontal);
        window.addEventListener("mouseup", deactivateHorizontal);
      }
      function resizeHorizontal(event) {
        const draggedHorizontal = event.clientX - initialHMouseX;
        const width = UIStore.getPanelPlacement(props.panel.id) === "left" || props.panel.isDetached ? draggedHorizontal + initialWidth : -draggedHorizontal + initialWidth;
        UIStore.updatePanel(props.panel.id, "width", width < 360 ? 360 : width);
      }
      function deactivateHorizontal() {
        UIStore.setIframePointerEvents(false);
        document.body.style.userSelect = null;
        document.body.style.cursor = null;
        window.removeEventListener("mousemove", rafResizeHorizontal);
        window.removeEventListener("mouseup", deactivateHorizontal);
        UIStore.saveUI();
      }
      const rafResizeVertical = rafSchd$1(resizeVertical);
      let initialVMouseY = null;
      let initialHeight = null;
      function activateVerticalResize(event) {
        UIStore.setIframePointerEvents(true);
        document.body.style.userSelect = "none";
        document.body.style.cursor = "n-resize";
        initialHeight = root2.value.clientHeight;
        initialVMouseY = event.clientY;
        window.addEventListener("mousemove", rafResizeVertical);
        window.addEventListener("mouseup", deactivateVertical);
      }
      function resizeVertical(event) {
        UIStore.updatePanel(props.panel.id, "isDetached", true);
        const draggedVertical = event.clientY - initialVMouseY;
        const newHeightValue = initialHeight + draggedVertical;
        if (event.clientY < window.innerHeight) {
          UIStore.updatePanel(
            props.panel.id,
            "height",
            newHeightValue > root2.value.parentNode.clientHeight ? root2.value.parentNode.clientHeight : newHeightValue
          );
        }
      }
      function deactivateVertical() {
        UIStore.setIframePointerEvents(false);
        document.body.style.userSelect = null;
        document.body.style.cursor = null;
        window.removeEventListener("mousemove", rafResizeVertical);
        window.removeEventListener("mouseup", deactivateVertical);
        UIStore.saveUI();
      }
      function onKeyDown(event) {
        if (event.which === 27) {
          closePanel();
          event.stopImmediatePropagation();
        }
      }
      Vue.onMounted(() => {
        if (props.closeOnEscape) {
          addEventListener("keydown", onKeyDown);
        }
        panelOffset.value = root2.value.getBoundingClientRect();
        props.panel.offsets = {
          posX: panelOffset.value.left,
          posY: panelOffset.value.top
        };
        initialPosition.value = {
          posX: panelOffset.value.left,
          posY: panelOffset.value.top
        };
      });
      function closePanel() {
        UIStore.closePanel(props.panel.id);
        emit("close-panel");
      }
      Vue.onBeforeUnmount(() => {
        window.removeEventListener("mousemove", rafResizeHorizontal);
        window.removeEventListener("mouseup", deactivateHorizontal);
        window.removeEventListener("mousemove", rafResizeVertical);
        window.removeEventListener("mouseup", deactivateVertical);
        removeEventListener("keydown", onKeyDown);
        document.body.style.cursor = null;
        document.body.style.userSelect = null;
      });
      __expose({
        panel: props.panel
      });
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        return Vue.openBlock(), Vue.createElementBlock("div", {
          id: _ctx.panelId,
          ref_key: "root",
          ref: root2,
          class: Vue.normalizeClass([getCssClass.value, "znpb-editor-panel"]),
          style: Vue.normalizeStyle(panelStyles.value)
        }, [
          Vue.renderSlot(_ctx.$slots, "before-header"),
          _ctx.showHeader ? (Vue.openBlock(), Vue.createElementBlock("div", {
            key: 0,
            ref: "panelHeader",
            class: "znpb-panel__header",
            onMousedown: onMouseDown
          }, [
            !hasHeaderSlot.value ? (Vue.openBlock(), Vue.createElementBlock("h4", _hoisted_2$p, Vue.toDisplayString(_ctx.panelName), 1)) : Vue.createCommentVNode("", true),
            Vue.renderSlot(_ctx.$slots, "header"),
            _ctx.showClose ? (Vue.openBlock(), Vue.createBlock(_component_Icon, {
              key: 1,
              icon: "close",
              size: 14,
              class: "znpb-panel__header-icon-close",
              onClick: Vue.withModifiers(closePanel, ["stop"])
            }, null, 8, ["onClick"])) : Vue.createCommentVNode("", true),
            Vue.renderSlot(_ctx.$slots, "header-suffix")
          ], 544)) : Vue.createCommentVNode("", true),
          Vue.renderSlot(_ctx.$slots, "after-header"),
          Vue.createElementVNode("div", _hoisted_3$k, [
            Vue.renderSlot(_ctx.$slots, "default")
          ]),
          !Vue.unref(UIStore).isAnyPanelDragging && _ctx.allowHorizontalResize ? (Vue.openBlock(), Vue.createElementBlock("div", {
            key: 1,
            class: "znpb-editor-panel__resize znpb-editor-panel__resize--horizontal",
            onMousedown: activateHorizontalResize
          }, null, 32)) : Vue.createCommentVNode("", true),
          _ctx.panel.isDetached && !Vue.unref(UIStore).isAnyPanelDragging && _ctx.allowVerticalResize ? (Vue.openBlock(), Vue.createElementBlock("div", {
            key: 2,
            class: "znpb-editor-panel__resize znpb-editor-panel__resize--vertical",
            onMousedown: activateVerticalResize
          }, null, 32)) : Vue.createCommentVNode("", true)
        ], 14, _hoisted_1$v);
      };
    }
  });
  const BasePanel_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$u = { class: "znpb-tree-view__header-icon" };
  const _hoisted_2$o = {
    key: 0,
    class: "znpb-tree-view__type_wrapper"
  };
  const _sfc_main$A = /* @__PURE__ */ Vue.defineComponent({
    __name: "PanelTree",
    props: {
      panel: {}
    },
    setup(__props) {
      const props = __props;
      const UIStore = useUIStore();
      const contentStore = useContentStore();
      const element = Vue.computed(() => contentStore.getElement(window.ZnPbInitialData.page_id));
      const treeViewTypes = [
        {
          name: i18n__namespace.__("Tree view", "zionbuilder"),
          id: "TreeView",
          component: _sfc_main$F,
          icon: "treeview"
        },
        {
          name: i18n__namespace.__("Section view", "zionbuilder"),
          id: "SectionView",
          component: _sfc_main$I,
          icon: "structure"
        },
        {
          name: i18n__namespace.__("Wireframe", "zionbuilder"),
          id: "WireframeView",
          component: _sfc_main$C,
          icon: "layout",
          basePanelCssClass: " znpb-editor-panel__container--wireframe",
          expandMainPanel: true,
          showBasePanelHeader: false
        }
      ];
      const activeTreeViewId = Vue.ref(treeViewTypes[0].id);
      const activeTreeViewPanel = Vue.computed(
        () => treeViewTypes.find((treeType) => treeType.id === activeTreeViewId.value) || treeViewTypes[0]
      );
      const basePanel = Vue.ref(null);
      const panelDetachedState = Vue.ref(null);
      Vue.watch(activeTreeViewId, (newValue) => {
        if (newValue === "WireframeView") {
          if (basePanel.value) {
            panelDetachedState.value = basePanel.value.panel.isDetached;
            UIStore.updatePanel(props.panel.id, "isDetached", false);
          }
        } else {
          if (panelDetachedState.value) {
            UIStore.updatePanel(props.panel.id, "isDetached", panelDetachedState.value);
            panelDetachedState.value = null;
          }
        }
      });
      const closeWireframe = () => {
        UIStore.closePanel(props.panel.id);
      };
      return (_ctx, _cache) => {
        const _component_Loader = Vue.resolveComponent("Loader");
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_Tab = Vue.resolveComponent("Tab");
        const _component_Tabs = Vue.resolveComponent("Tabs");
        const _directive_znpb_tooltip = Vue.resolveDirective("znpb-tooltip");
        return Vue.openBlock(), Vue.createBlock(_sfc_main$B, {
          ref_key: "basePanel",
          ref: basePanel,
          "panel-name": i18n__namespace.__("Tree view panel", "zionbuilder"),
          "panel-id": "panel-tree",
          "css-class": activeTreeViewPanel.value.basePanelCssClass,
          expanded: activeTreeViewPanel.value.expandMainPanel,
          "show-header": activeTreeViewPanel.value.showBasePanelHeader,
          "show-expand": false,
          panel: _ctx.panel
        }, {
          default: Vue.withCtx(() => [
            Vue.unref(UIStore).isPreviewLoading ? (Vue.openBlock(), Vue.createBlock(_component_Loader, { key: 0 })) : (Vue.openBlock(), Vue.createBlock(_component_Tabs, {
              key: 1,
              activeTab: activeTreeViewId.value,
              "onUpdate:activeTab": _cache[0] || (_cache[0] = ($event) => activeTreeViewId.value = $event),
              "tab-style": "panel",
              class: "znpb-tree-view__tabs"
            }, {
              default: Vue.withCtx(() => [
                (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(treeViewTypes, (treeType) => {
                  return Vue.createVNode(_component_Tab, {
                    id: treeType.id,
                    key: treeType.id
                  }, {
                    title: Vue.withCtx(() => [
                      Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$u, [
                        Vue.createVNode(_component_Icon, {
                          class: "znpb-tree-view__header-menu-item-icon",
                          icon: treeType.icon,
                          size: 16
                        }, null, 8, ["icon"])
                      ])), [
                        [_directive_znpb_tooltip, treeType.name]
                      ])
                    ]),
                    default: Vue.withCtx(() => [
                      activeTreeViewId.value === treeType.id ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_2$o, [
                        (Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(treeType.component), { element: element.value }, null, 8, ["element"]))
                      ])) : Vue.createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["id"]);
                }), 64))
              ]),
              _: 1
            }, 8, ["activeTab"])),
            activeTreeViewId.value === "WireframeView" ? (Vue.openBlock(), Vue.createBlock(_component_Icon, {
              key: 2,
              class: "znpb-tree-view__header-menu-close-icon",
              icon: "close",
              onClick: closeWireframe
            })) : Vue.createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["panel-name", "css-class", "expanded", "show-header", "panel"]);
      };
    }
  });
  const PanelTree_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$t = { class: "znpb-accordions-wrapper znpb-fancy-scrollbar" };
  const _sfc_main$z = /* @__PURE__ */ Vue.defineComponent({
    __name: "PanelGlobalSettings",
    setup(__props) {
      useUIStore();
      const pageSettings = usePageSettingsStore();
      const savedValues = Vue.computed({
        get() {
          return pageSettings.settings;
        },
        set(newValues2) {
          pageSettings.updatePageSettings(newValues2);
        }
      });
      const cssClassesSchema = {
        global_css: {
          type: "accordion_menu",
          title: i18n__namespace.__("Global CSS classes", "zionbuilder"),
          child_options: {
            global_css_classes: {
              type: "global_css_classes"
            }
          }
        }
      };
      const optionsSchema = Object.assign({}, window.ZnPbInitialData.page_settings.schema, cssClassesSchema);
      return (_ctx, _cache) => {
        const _component_OptionsForm = Vue.resolveComponent("OptionsForm");
        return Vue.openBlock(), Vue.createBlock(_sfc_main$B, {
          "panel-name": i18n__namespace.__("Options", "zionbuilder"),
          "panel-id": "panel-global-settings",
          class: "znpb-general-options-panel-wrapper"
        }, {
          default: Vue.withCtx(() => [
            Vue.createElementVNode("div", _hoisted_1$t, [
              Vue.createVNode(_component_OptionsForm, {
                modelValue: savedValues.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => savedValues.value = $event),
                schema: Vue.unref(optionsSchema),
                "show-changes": false
              }, null, 8, ["modelValue", "schema"])
            ])
          ]),
          _: 1
        }, 8, ["panel-name"]);
      };
    }
  });
  const PanelGlobalSettings_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$s = { class: "znpb-panel__history_panel_wrapper" };
  const _hoisted_2$n = {
    key: 0,
    class: "znpb-panel__history_panel_wrapper--noItemsContainer"
  };
  const _hoisted_3$j = /* @__PURE__ */ Vue.createElementVNode("svg", {
    viewBox: "0 0 72 72",
    fill: "black",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ Vue.createElementVNode("path", { d: "M43.7 40.9L36.35 48.25L32.15 44.05L37.7 38.5V25.9H43.7V40.9ZM38 13C31.1 13 24.8 16 20.3 20.8L16.4 16.9L14 31.9L29.15 29.5L24.65 25C27.95 21.25 32.75 19 38 19C47.9 19 56 27.1 56 37C56 46.9 47.9 55 38 55C32.75 55 27.95 52.75 24.65 49L20.15 53.05C24.65 57.85 30.95 61 38 61C51.2 61 62 50.2 62 37C62 23.8 51.2 13 38 13Z" }),
    /* @__PURE__ */ Vue.createElementVNode("path", {
      d: "M72 15C72 16.6569 70.6569 18 69 18C67.3431 18 66 16.6569 66 15C66 13.3431 67.3431 12 69 12C70.6569 12 72 13.3431 72 15Z",
      opacity: "0.6"
    }),
    /* @__PURE__ */ Vue.createElementVNode("path", {
      d: "M4 51.5C4 52.3284 3.32843 53 2.5 53C1.67157 53 1 52.3284 1 51.5C1 50.6716 1.67157 50 2.5 50C3.32843 50 4 50.6716 4 51.5Z",
      opacity: "0.6"
    }),
    /* @__PURE__ */ Vue.createElementVNode("path", {
      d: "M4.99683 16.1946C4.27812 16.002 3.53938 16.4285 3.3468 17.1472L3.17241 17.798L2.52177 17.6237C1.80306 17.4311 1.06432 17.8576 0.871741 18.5763C0.679164 19.2951 1.10568 20.0338 1.82439 20.2264L2.47503 20.4007L2.30072 21.0512C2.10815 21.7699 2.53466 22.5087 3.25337 22.7012C3.97208 22.8938 4.71082 22.4673 4.9034 21.7486L5.0777 21.0981L5.7284 21.2725C6.44711 21.465 7.18586 21.0385 7.37843 20.3198C7.57101 19.6011 7.1445 18.8624 6.42579 18.6698L5.77509 18.4954L5.94948 17.8446C6.14206 17.1259 5.71554 16.3871 4.99683 16.1946Z",
      opacity: "0.6"
    }),
    /* @__PURE__ */ Vue.createElementVNode("path", {
      d: "M65.7664 52.8525C66.1566 52.9231 66.5302 52.6641 66.6008 52.2738L66.6648 51.9206L67.018 51.9845C67.4083 52.0552 67.7819 51.7961 67.8525 51.4058C67.9231 51.0156 67.664 50.642 67.2738 50.5714L66.9205 50.5075L66.9844 50.1541C67.055 49.7639 66.7959 49.3903 66.4057 49.3197C66.0155 49.2491 65.6419 49.5082 65.5713 49.8984L65.5073 50.2518L65.1541 50.1878C64.7638 50.1172 64.3903 50.3763 64.3196 50.7665C64.249 51.1568 64.5081 51.5303 64.8983 51.601L65.2516 51.6649L65.1877 52.0181C65.1171 52.4083 65.3762 52.7819 65.7664 52.8525Z",
      opacity: "0.6"
    })
  ], -1);
  const _hoisted_4$e = { class: "znpb-panel__history_panel-emptyTitle" };
  const _hoisted_5$c = { class: "znpb-panel__history_panel-emptyDesc" };
  const _hoisted_6$b = {
    key: 1,
    class: "znpb-history-actions"
  };
  const _hoisted_7$a = ["title", "onClick"];
  const _hoisted_8$8 = { class: "znpb-action-element" };
  const _hoisted_9$6 = { class: "znpb-action-subtitle" };
  const _hoisted_10$5 = { class: "znpb-action-name" };
  const _hoisted_11$4 = {
    key: 0,
    class: "znpb-action-active"
  };
  const _hoisted_12$3 = { class: "znpb-history__action-wrapper" };
  const _sfc_main$y = /* @__PURE__ */ Vue.defineComponent({
    __name: "PanelHistory",
    props: {
      panel: {}
    },
    setup(__props) {
      const historyPanelWrapper = Vue.ref(null);
      const historyStore = useHistoryStore();
      Vue.watch(historyStore.state, (newValue) => {
        Vue.nextTick(() => {
          historyPanelWrapper.value.scrollTop = 0;
        });
      });
      function doUndo() {
        if (historyStore.canUndo) {
          historyStore.undo();
        }
      }
      function doRedo() {
        if (historyStore.canRedo) {
          historyStore.redo();
        }
      }
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        return Vue.openBlock(), Vue.createBlock(_sfc_main$B, {
          "panel-name": i18n__namespace.__("History", "zionbuilder"),
          "panel-id": "panel-history",
          "show-expand": false,
          panel: _ctx.panel
        }, {
          default: Vue.withCtx(() => [
            Vue.createElementVNode("div", _hoisted_1$s, [
              Vue.createElementVNode("div", {
                ref_key: "historyPanelWrapper",
                ref: historyPanelWrapper,
                class: "znpb-history-wrapper znpb-fancy-scrollbar"
              }, [
                Vue.unref(historyStore).state.length === 0 ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_2$n, [
                  _hoisted_3$j,
                  Vue.createElementVNode("div", _hoisted_4$e, Vue.toDisplayString(i18n__namespace.__("Your history is empty", "zionbuilder")), 1),
                  Vue.createElementVNode("div", _hoisted_5$c, Vue.toDisplayString(i18n__namespace.__("Modify your page and your changes will appear here", "zionbuilder")), 1)
                ])) : (Vue.openBlock(), Vue.createElementBlock("ul", _hoisted_6$b, [
                  (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(historyStore).state, (item, index2) => {
                    return Vue.openBlock(), Vue.createElementBlock("li", {
                      key: index2,
                      title: item.title,
                      class: Vue.normalizeClass({ "znpb-history-action--active": Vue.unref(historyStore).activeHistoryIndex === index2 }),
                      onClick: ($event) => Vue.unref(historyStore).restoreHistoryToIndex(index2)
                    }, [
                      Vue.createElementVNode("span", _hoisted_8$8, Vue.toDisplayString(item.title), 1),
                      Vue.createElementVNode("span", _hoisted_9$6, Vue.toDisplayString(item.subtitle), 1),
                      Vue.createElementVNode("span", _hoisted_10$5, Vue.toDisplayString(item.action), 1),
                      Vue.unref(historyStore).activeHistoryIndex === index2 ? (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_11$4, Vue.toDisplayString(i18n__namespace.__("Now", "zionbuilder")), 1)) : (Vue.openBlock(), Vue.createBlock(_component_Icon, {
                        key: 1,
                        icon: "history"
                      }))
                    ], 10, _hoisted_7$a);
                  }), 128))
                ]))
              ], 512),
              Vue.createElementVNode("div", _hoisted_12$3, [
                Vue.createElementVNode("div", {
                  class: Vue.normalizeClass(["znpb-history__action", { "znpb-history__action--inactive": !Vue.unref(historyStore).canUndo }]),
                  onClick: doUndo
                }, [
                  Vue.createVNode(_component_Icon, { icon: "undo" })
                ], 2),
                Vue.createElementVNode("div", {
                  class: Vue.normalizeClass(["znpb-history__action", { "znpb-history__action--inactive": !Vue.unref(historyStore).canRedo }]),
                  onClick: doRedo
                }, [
                  Vue.createVNode(_component_Icon, { icon: "redo" })
                ], 2)
              ])
            ])
          ]),
          _: 1
        }, 8, ["panel-name", "panel"]);
      };
    }
  });
  const PanelHistory_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$r = { class: "znpb-key-shortcuts-wrapper" };
  const _hoisted_2$m = { class: "znpb-key-shortcuts" };
  const _hoisted_3$i = { class: "znpb-key-shortcuts__keys-wrapper" };
  const _hoisted_4$d = { class: "znpb-key-shortcuts__key-item" };
  const _hoisted_5$b = /* @__PURE__ */ Vue.createElementVNode("span", { class: "znpb-key-shortcuts__plus" }, "+", -1);
  const _hoisted_6$a = /* @__PURE__ */ Vue.createElementVNode("span", { class: "znpb-key-shortcuts__separator" }, null, -1);
  const _hoisted_7$9 = { class: "znpb-key-shortcuts__description" };
  const _sfc_main$x = /* @__PURE__ */ Vue.defineComponent({
    __name: "keyShortcutsItem",
    props: {
      shortcutKey: {},
      description: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$r, [
          Vue.renderSlot(_ctx.$slots, "default"),
          Vue.createElementVNode("div", _hoisted_2$m, [
            Vue.createElementVNode("div", _hoisted_3$i, [
              (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.shortcutKey, (key, index2) => {
                return Vue.openBlock(), Vue.createElementBlock("div", {
                  key: index2,
                  class: "znpb-key-shortcuts__key"
                }, [
                  Vue.createElementVNode("div", _hoisted_4$d, Vue.toDisplayString(key), 1),
                  _hoisted_5$b
                ]);
              }), 128))
            ]),
            _hoisted_6$a,
            Vue.createElementVNode("div", _hoisted_7$9, Vue.toDisplayString(_ctx.description), 1)
          ])
        ]);
      };
    }
  });
  const keyShortcutsItem_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$q = { class: "znpb-key-shortcuts-modal znpb-fancy-scrollbar" };
  const _hoisted_2$l = { class: "znpb-key-shortcuts-modal__content" };
  const _hoisted_3$h = {
    key: 0,
    class: "znpb-key-shortcuts-modal__item-details"
  };
  const _sfc_main$w = /* @__PURE__ */ Vue.defineComponent({
    __name: "keyShortcuts",
    setup(__props) {
      const { Environment: Environment2 } = window.zb.utils;
      const controlKey = Environment2.isMac ? "⌘" : "⌃";
      const schemaDescriptionFirst = [
        {
          shortcutKey: [controlKey, "S"],
          description: i18n__namespace.__("Save changes", "zionbuilder")
        },
        {
          shortcutKey: [controlKey, "C"],
          description: i18n__namespace.__("Copy", "zionbuilder")
        },
        {
          shortcutKey: [controlKey, "V"],
          description: i18n__namespace.__("Paste", "zionbuilder")
        },
        {
          shortcutKey: [controlKey, "X"],
          description: i18n__namespace.__("Cut", "zionbuilder")
        },
        {
          shortcutKey: [controlKey, "D"],
          description: i18n__namespace.__("Duplicate", "zionbuilder")
        },
        {
          shortcutKey: [controlKey, "⇧", "C"],
          description: i18n__namespace.__("Copy styles", "zionbuilder")
        },
        {
          shortcutKey: [controlKey, "⇧", "V"],
          description: i18n__namespace.__("Paste styles", "zionbuilder")
        },
        {
          shortcutKey: [controlKey, "Z"],
          description: i18n__namespace.__("Undo", "zionbuilder")
        },
        {
          shortcutKey: [controlKey, "Y"],
          description: i18n__namespace.__("Redo", "zionbuilder")
        },
        {
          shortcutKey: [controlKey, "⇧", "Y"],
          description: i18n__namespace.__("Redo", "zionbuilder")
        },
        {
          shortcutKey: [controlKey, "H"],
          description: i18n__namespace.__("Hide element", "zionbuilder")
        },
        {
          shortcutKey: [controlKey, "P"],
          description: i18n__namespace.__("Toggle preview mode", "zionbuilder")
        },
        {
          shortcutKey: ["⇧", "T"],
          description: i18n__namespace.__("Toggle Tree View Panel", "zionbuilder")
        },
        {
          shortcutKey: ["⇧", "L"],
          description: i18n__namespace.__("Toggle Library Panel", "zionbuilder")
        },
        {
          shortcutKey: ["⇧", "O"],
          description: i18n__namespace.__("Toggle page options", "zionbuilder")
        },
        {
          shortcutKey: ["DRAG", controlKey],
          description: i18n__namespace.__("Duplicate element in place", "zionbuilder"),
          details: i18n__namespace.__("When dragging element", "zionbuilder")
        },
        {
          shortcutKey: [controlKey, "DRAG"],
          description: i18n__namespace.__("Set even values", "zionbuilder"),
          details: i18n__namespace.__("When dragging toolbox", "zionbuilder")
        },
        {
          shortcutKey: [controlKey, "⇧", "DRAG"],
          description: i18n__namespace.__("Set even incremental value", "zionbuilder")
        },
        {
          shortcutKey: [controlKey, "⇧", "D"],
          description: i18n__namespace.__("Back to WP dashboard", "zionbuilder")
        },
        {
          shortcutKey: ["⇧", "DRAG"],
          description: i18n__namespace.__("Set incremental value", "zionbuilder"),
          details: i18n__namespace.__("On input of type number", "zionbuilder")
        },
        {
          shortcutKey: ["⇧", "ARROWS"],
          description: i18n__namespace.__("Set incremental value", "zionbuilder")
        },
        {
          shortcutKey: ["ALT"],
          description: "Toggle Link",
          details: i18n__namespace.__("On input of type number with link option available", "zionbuilder")
        }
      ];
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$q, [
          Vue.createElementVNode("div", _hoisted_2$l, [
            (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(schemaDescriptionFirst, (schema, i) => {
              return Vue.createVNode(_sfc_main$x, {
                key: i + schema.description,
                "shortcut-key": schema.shortcutKey,
                description: schema.description
              }, {
                default: Vue.withCtx(() => [
                  schema.details ? (Vue.openBlock(), Vue.createElementBlock("pre", _hoisted_3$h, Vue.toDisplayString(schema.details), 1)) : Vue.createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["shortcut-key", "description"]);
            }), 64))
          ])
        ]);
      };
    }
  });
  const keyShortcuts_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$p = ["onClick"];
  const _hoisted_2$k = { class: "znpb-device__item-content" };
  const _hoisted_3$g = { class: "znpb-device__item-name" };
  const _hoisted_4$c = { class: "znpb-device__itemValue" };
  const _hoisted_5$a = {
    key: 0,
    class: "znpb-device__itemValue-inner"
  };
  const _hoisted_6$9 = ["value", "onKeydown"];
  const _hoisted_7$8 = {
    key: 1,
    class: "znpb-device__item-actions"
  };
  const _sfc_main$v = /* @__PURE__ */ Vue.defineComponent({
    __name: "DeviceElement",
    props: {
      deviceConfig: {},
      allowEdit: { type: Boolean },
      editedBreakpoint: { default: () => {
        return null;
      } }
    },
    emits: ["edit-breakpoint"],
    setup(__props, { emit }) {
      const props = __props;
      const { useResponsiveDevices: useResponsiveDevices2 } = window.zb.composables;
      const { doAction } = window.zb.hooks;
      const {
        activeResponsiveDeviceInfo: activeResponsiveDeviceInfo2,
        setActiveResponsiveDeviceId,
        getActiveResponsiveOptions,
        deleteBreakpoint,
        updateBreakpoint
      } = useResponsiveDevices2();
      const isEdited = Vue.computed(() => {
        return props.editedBreakpoint === props.deviceConfig;
      });
      const widthInput = Vue.ref(null);
      const discardChangesTitle = Vue.computed(() => {
        return i18n__namespace.__("Discard changes for", "zionbuilder") + " " + props.deviceConfig.name;
      });
      const isActiveDevice = Vue.computed(() => {
        return props.deviceConfig.id === activeResponsiveDeviceInfo2.value.id;
      });
      const hasChanges = Vue.computed(() => {
        const activeDeviceConfig = getActiveResponsiveOptions();
        if (!activeDeviceConfig) {
          return false;
        }
        const modelValue = activeDeviceConfig.modelValue;
        return modelValue && modelValue && modelValue[props.deviceConfig.id] || false;
      });
      function changeDevice() {
        if (activeResponsiveDeviceInfo2.value.id !== props.deviceConfig.id) {
          setActiveResponsiveDeviceId(props.deviceConfig.id);
        }
      }
      function removeStylesGroup() {
        const activeDeviceConfig = getActiveResponsiveOptions();
        if (activeDeviceConfig) {
          activeDeviceConfig.removeDeviceStyles(props.deviceConfig.id);
        }
      }
      Vue.watch(isEdited, (newValue) => {
        if (newValue) {
          Vue.nextTick(() => {
            if (widthInput.value) {
              widthInput.value.focus();
              widthInput.value.select();
            }
          });
        }
      });
      function updateWidth() {
        const oldValue = props.deviceConfig.width;
        if (!widthInput.value) {
          return;
        }
        const newValue = parseInt(widthInput.value.value) < 240 ? 240 : parseInt(widthInput.value.value);
        updateBreakpoint(props.deviceConfig, newValue);
        emit("edit-breakpoint", null);
        doAction("zionbuilder/responsive/change_device_width", props.deviceConfig, newValue, oldValue);
      }
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_ChangesBullet = Vue.resolveComponent("ChangesBullet");
        const _directive_znpb_tooltip = Vue.resolveDirective("znpb-tooltip");
        return Vue.openBlock(), Vue.createElementBlock("a", {
          class: Vue.normalizeClass(["znpb-device__item", { "znpb-device__item--active": isActiveDevice.value }]),
          onClick: Vue.withModifiers(changeDevice, ["stop"]),
          onMousedown: _cache[3] || (_cache[3] = Vue.withModifiers(() => {
          }, ["stop"]))
        }, [
          Vue.createElementVNode("div", _hoisted_2$k, [
            Vue.createVNode(_component_Icon, {
              icon: _ctx.deviceConfig.icon,
              class: "znpb-device__item-icon"
            }, null, 8, ["icon"]),
            Vue.createElementVNode("span", _hoisted_3$g, [
              _ctx.deviceConfig.name ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, [
                Vue.createTextVNode(Vue.toDisplayString(_ctx.deviceConfig.name) + " - ", 1)
              ], 64)) : Vue.createCommentVNode("", true),
              _ctx.deviceConfig.id === "default" ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 1 }, [
                Vue.createTextVNode(" (" + Vue.toDisplayString(i18n__namespace.__("all devices", "zionbuilder")) + ") ", 1)
              ], 64)) : (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 2 }, [
                Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("max", "zionbuilder")) + " ", 1),
                Vue.createElementVNode("span", _hoisted_4$c, [
                  isEdited.value ? (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_5$a, [
                    Vue.createElementVNode("input", {
                      ref_key: "widthInput",
                      ref: widthInput,
                      type: "number",
                      class: "znpb-device__itemValueInput",
                      value: _ctx.deviceConfig.width,
                      onKeydown: Vue.withKeys(updateWidth, ["enter"]),
                      onBlur: updateWidth
                    }, null, 40, _hoisted_6$9),
                    Vue.createTextVNode(" px ")
                  ])) : (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 1 }, [
                    Vue.createTextVNode(Vue.toDisplayString(_ctx.deviceConfig.width) + "px ", 1)
                  ], 64))
                ])
              ], 64))
            ]),
            hasChanges.value && !_ctx.allowEdit ? (Vue.openBlock(), Vue.createBlock(_component_ChangesBullet, {
              key: 0,
              "discard-changes-title": discardChangesTitle.value,
              onRemoveStyles: removeStylesGroup
            }, null, 8, ["discard-changes-title"])) : Vue.createCommentVNode("", true),
            _ctx.allowEdit ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_7$8, [
              isEdited.value ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, [
                Vue.withDirectives(Vue.createVNode(_component_Icon, {
                  icon: "check",
                  class: "znpb-device__item-action",
                  onClick: Vue.withModifiers(updateWidth, ["stop"])
                }, null, 8, ["onClick"]), [
                  [_directive_znpb_tooltip, i18n__namespace.__("Save", "zionbuilder")]
                ]),
                Vue.withDirectives(Vue.createVNode(_component_Icon, {
                  icon: "close",
                  class: "znpb-device__item-action",
                  onClick: _cache[0] || (_cache[0] = Vue.withModifiers(($event) => emit("edit-breakpoint", null), ["stop"]))
                }, null, 512), [
                  [_directive_znpb_tooltip, i18n__namespace.__("Cancel", "zionbuilder")]
                ])
              ], 64)) : (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 1 }, [
                !_ctx.deviceConfig.isDefault ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(_component_Icon, {
                  key: 0,
                  icon: "edit",
                  class: "znpb-device__item-action",
                  onClick: _cache[1] || (_cache[1] = Vue.withModifiers(($event) => emit("edit-breakpoint", _ctx.deviceConfig), ["stop"]))
                }, null, 512)), [
                  [_directive_znpb_tooltip, i18n__namespace.__("Edit breakpoint", "zionbuilder")]
                ]) : Vue.createCommentVNode("", true),
                !_ctx.deviceConfig.builtIn ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(_component_Icon, {
                  key: 1,
                  icon: "delete",
                  class: "znpb-device__item-action",
                  onClick: _cache[2] || (_cache[2] = Vue.withModifiers(($event) => Vue.unref(deleteBreakpoint)(_ctx.deviceConfig.id), ["stop"]))
                }, null, 512)), [
                  [_directive_znpb_tooltip, i18n__namespace.__("Delete breakpoint", "zionbuilder")]
                ]) : Vue.createCommentVNode("", true)
              ], 64))
            ])) : Vue.createCommentVNode("", true)
          ])
        ], 42, _hoisted_1$p);
      };
    }
  });
  const DeviceElement_vue_vue_type_style_index_0_lang = "";
  const FlyoutWrapper_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$o = ["onMouseover", "onMouseleave"];
  const _hoisted_2$j = { class: "znpb-editor-header__menu_button" };
  const _sfc_main$u = {
    __name: "FlyoutWrapper",
    props: {
      items: {
        type: Array,
        required: false,
        default() {
          return [];
        }
      },
      preventClose: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    emits: ["show", "hide"],
    setup(__props, { emit }) {
      const props = __props;
      const showflyout = Vue.ref(false);
      const listContainer = Vue.ref(null);
      const negativeMargin = Vue.ref(0);
      const root2 = Vue.ref(null);
      const computedStyles = Vue.computed(() => {
        let styles = {};
        if (negativeMargin.value !== 0) {
          styles.transform = `translateY(${negativeMargin.value}px)`;
        }
        return styles;
      });
      function onMouseOver() {
        showflyout.value = true;
      }
      function onMouseOut() {
        if (!props.preventClose) {
          showflyout.value = false;
        }
      }
      Vue.watch(showflyout, (newValue) => {
        if (newValue) {
          Vue.nextTick(() => {
            positionDropdown();
            resizeObserver.observe(listContainer.value);
          });
          emit("show");
        } else {
          negativeMargin.value = 0;
          resizeObserver.unobserve(listContainer.value);
          emit("hide");
        }
      });
      Vue.watch(
        () => props.preventClose,
        (newValue) => {
          if (newValue) {
            window.addEventListener("click", onOutsideClick);
          }
        }
      );
      Vue.onBeforeUnmount(() => {
        window.removeEventListener("click", onOutsideClick);
      });
      function onOutsideClick(event) {
        if (!root2.value.contains(event.target)) {
          showflyout.value = false;
        }
      }
      function positionDropdown() {
        negativeMargin.value = 0;
        Vue.nextTick(() => {
          const { bottom } = listContainer.value.getBoundingClientRect();
          if (bottom > window.innerHeight) {
            negativeMargin.value = (bottom - window.innerHeight) * -1;
          }
        });
      }
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          Vue.nextTick(() => {
            positionDropdown();
          });
        }
      });
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", {
          ref_key: "root",
          ref: root2,
          class: "znpb-editor-header-flyout",
          onMouseover: Vue.withModifiers(onMouseOver, ["stop"]),
          onMouseleave: Vue.withModifiers(onMouseOut, ["stop"])
        }, [
          Vue.createElementVNode("div", _hoisted_2$j, [
            Vue.renderSlot(_ctx.$slots, "panel-icon")
          ]),
          showflyout.value ? (Vue.openBlock(), Vue.createElementBlock("ul", {
            key: 0,
            ref_key: "listContainer",
            ref: listContainer,
            class: "znpb-editor-header-flyout-hidden-items znpb-editor-header__menu-list",
            style: Vue.normalizeStyle(computedStyles.value)
          }, [
            Vue.renderSlot(_ctx.$slots, "default")
          ], 4)) : Vue.createCommentVNode("", true)
        ], 40, _hoisted_1$o);
      };
    }
  };
  const _sfc_main$t = {};
  const _hoisted_1$n = { name: "menu-items" };
  function _sfc_render$1(_ctx, _cache) {
    return Vue.openBlock(), Vue.createElementBlock("li", _hoisted_1$n, [
      Vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const FlyoutMenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$1]]);
  const _hoisted_1$m = { class: "znpb-responsiveDeviceHeader" };
  const _hoisted_2$i = { class: "znpb-responsiveDeviceHeader__item" };
  const _hoisted_3$f = {
    for: "znpb-responsive__iframeWidth",
    class: "znpb-responsiveDeviceHeader__iconIndicator"
  };
  const _hoisted_4$b = ["value", "onKeydown"];
  const _hoisted_5$9 = { class: "znpb-responsiveDeviceHeader__item" };
  const _hoisted_6$8 = {
    for: "znpb-responsive__iframeScale",
    class: "znpb-responsiveDeviceHeader__iconIndicator"
  };
  const _hoisted_7$7 = ["value", "disabled", "onKeydown"];
  const _hoisted_8$7 = {
    key: 0,
    class: "menu-items znpb-device__addBreakpointForm"
  };
  const _hoisted_9$5 = { class: "znpb-device__item" };
  const _hoisted_10$4 = { class: "znpb-device__item-content" };
  const _hoisted_11$3 = { class: "znpb-device__item-name" };
  const _hoisted_12$2 = { class: "znpb-device__itemValue" };
  const _hoisted_13$2 = { class: "znpb-device__itemValue-inner" };
  const _hoisted_14$1 = ["onKeydown"];
  const _hoisted_15 = { class: "znpb-device__item-actions" };
  const _hoisted_16 = {
    key: 1,
    class: "znpb-device__addBreakpointWrapper"
  };
  const _hoisted_17 = {
    key: 2,
    class: "znpb-responsiveDeviceFooter"
  };
  const _sfc_main$s = /* @__PURE__ */ Vue.defineComponent({
    __name: "ResponsiveDevices",
    setup(__props) {
      const { useResponsiveDevices: useResponsiveDevices2 } = window.zb.composables;
      const {
        activeResponsiveDeviceInfo: activeResponsiveDeviceInfo2,
        orderedResponsiveDevices,
        iframeWidth,
        setCustomIframeWidth,
        scaleValue,
        setCustomScale,
        autoScaleActive,
        setAutoScale,
        deviceSizesConfig,
        addCustomBreakpoint
      } = useResponsiveDevices2();
      const userStore = useUserStore();
      const preventClose = Vue.ref(false);
      const enabledAddBreakpoint = Vue.ref(false);
      const newBreakpointValue = Vue.ref(500);
      const devicesList = Vue.ref(null);
      const widthInput = Vue.ref(null);
      const addBreakpointDeviceIcon = Vue.computed(() => {
        let deviceIcon2 = "desktop";
        const currentValue = newBreakpointValue.value;
        deviceSizesConfig.forEach((device) => {
          if (currentValue < device.width) {
            deviceIcon2 = device.icon;
          }
        });
        return deviceIcon2;
      });
      function disableEditBreakpoints() {
        preventClose.value = true;
        setTimeout(() => {
          preventClose.value = false;
        }, 30);
        editBreakpoints.value = !editBreakpoints.value;
      }
      function enableAddNewDevice() {
        enabledAddBreakpoint.value = true;
        Vue.nextTick(() => {
          widthInput.value.focus();
          widthInput.value.select();
        });
      }
      function addNewBreakpoint() {
        const newValue = newBreakpointValue.value < 240 ? 240 : newBreakpointValue.value;
        const addedDevice = addCustomBreakpoint({
          width: newValue,
          icon: addBreakpointDeviceIcon.value
        });
        cancelNewBreakpointAdd();
        const { id } = addedDevice;
        Vue.nextTick(() => {
          const addedDevice2 = document.querySelector(`.znpb-deviceItem--${id}`);
          if (addedDevice2) {
            addedDevice2.scrollIntoView({ block: "nearest", inline: "nearest" });
            addedDevice2.classList.add("znpb-deviceItem--new");
            setTimeout(() => {
              addedDevice2.classList.remove("znpb-deviceItem--new");
            }, 300);
          }
        });
      }
      function cancelNewBreakpointAdd() {
        enabledAddBreakpoint.value = false;
        newBreakpointValue.value = 500;
      }
      const deviceIcon = Vue.computed(() => {
        return activeResponsiveDeviceInfo2.value.icon;
      });
      const editBreakpoints = Vue.ref(false);
      const editedBreakpoint = Vue.ref(null);
      function onWidthKeyDown(event) {
        setCustomIframeWidth(event.target.value, true);
        preventClose.value = false;
      }
      function onScaleKeyDown(event) {
        setCustomScale(event.target.value);
        preventClose.value = false;
      }
      Vue.watch([editedBreakpoint, enabledAddBreakpoint], ([newValue, newValue2]) => {
        if (newValue || newValue2) {
          preventClose.value = true;
        } else if (!newValue && !newValue2) {
          preventClose.value = false;
        }
      });
      function onFlyoutHide() {
        cancelNewBreakpointAdd();
        editBreakpoints.value = false;
        editedBreakpoint.value = null;
      }
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _directive_znpb_tooltip = Vue.resolveDirective("znpb-tooltip");
        return Vue.openBlock(), Vue.createBlock(_sfc_main$u, {
          "prevent-close": preventClose.value,
          onMousedown: _cache[5] || (_cache[5] = Vue.withModifiers(() => {
          }, ["stop"])),
          onHide: onFlyoutHide
        }, {
          "panel-icon": Vue.withCtx(() => [
            Vue.createVNode(_component_Icon, { icon: deviceIcon.value }, null, 8, ["icon"])
          ]),
          default: Vue.withCtx(() => [
            Vue.createElementVNode("div", _hoisted_1$m, [
              Vue.createElementVNode("div", _hoisted_2$i, [
                Vue.createElementVNode("label", _hoisted_3$f, [
                  Vue.createVNode(_component_Icon, { icon: "width" })
                ]),
                Vue.withDirectives(Vue.createElementVNode("input", {
                  id: "znpb-responsive__iframeWidth",
                  type: "number",
                  value: Vue.unref(iframeWidth),
                  onKeydown: Vue.withKeys(onWidthKeyDown, ["enter"]),
                  onBlur: onWidthKeyDown,
                  onFocus: _cache[0] || (_cache[0] = ($event) => preventClose.value = true)
                }, null, 40, _hoisted_4$b), [
                  [_directive_znpb_tooltip, i18n__namespace.__("Preview width", "zionbuilder")]
                ])
              ]),
              Vue.createElementVNode("div", _hoisted_5$9, [
                Vue.createElementVNode("label", _hoisted_6$8, [
                  Vue.createVNode(_component_Icon, { icon: "zoom" })
                ]),
                Vue.withDirectives(Vue.createElementVNode("input", {
                  id: "znpb-responsive__iframeScale",
                  type: "number",
                  value: Math.round(Vue.unref(scaleValue)),
                  disabled: Vue.unref(autoScaleActive),
                  onKeydown: Vue.withKeys(onScaleKeyDown, ["enter"]),
                  onBlur: onScaleKeyDown,
                  onFocus: _cache[1] || (_cache[1] = ($event) => preventClose.value = true)
                }, null, 40, _hoisted_7$7), [
                  [_directive_znpb_tooltip, i18n__namespace.__("Preview scale", "zionbuilder")]
                ]),
                Vue.withDirectives(Vue.createVNode(_component_Icon, {
                  icon: Vue.unref(autoScaleActive) ? "lock" : "unlock",
                  class: Vue.normalizeClass(["znpb-responsiveDeviceHeader__iconLock", {
                    "znpb-responsiveDeviceHeader__iconLock--locked": Vue.unref(autoScaleActive)
                  }]),
                  onClick: _cache[2] || (_cache[2] = Vue.withModifiers(($event) => Vue.unref(setAutoScale)(!Vue.unref(autoScaleActive)), ["stop"]))
                }, null, 8, ["icon", "class"]), [
                  [
                    _directive_znpb_tooltip,
                    Vue.unref(autoScaleActive) ? i18n__namespace.__("Disable auto-scale", "zionbuilder") : i18n__namespace.__("Enable auto-scale", "zionbuilder")
                  ]
                ])
              ])
            ]),
            Vue.createElementVNode("div", {
              ref_key: "devicesList",
              ref: devicesList,
              class: "znpb-fancy-scrollbar znpb-responsiveDevicesWrapper"
            }, [
              (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(orderedResponsiveDevices), (deviceConfig, i) => {
                return Vue.openBlock(), Vue.createBlock(FlyoutMenuItem, {
                  key: i,
                  class: Vue.normalizeClass({
                    [`znpb-deviceItem--${deviceConfig.id}`]: deviceConfig.id
                  })
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createVNode(_sfc_main$v, {
                      "device-config": deviceConfig,
                      "allow-edit": editBreakpoints.value,
                      "edited-breakpoint": editedBreakpoint.value,
                      onEditBreakpoint: _cache[3] || (_cache[3] = (breakpoint) => editedBreakpoint.value = breakpoint)
                    }, null, 8, ["device-config", "allow-edit", "edited-breakpoint"])
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
            ], 512),
            enabledAddBreakpoint.value && editBreakpoints.value ? (Vue.openBlock(), Vue.createElementBlock("li", _hoisted_8$7, [
              Vue.createElementVNode("a", _hoisted_9$5, [
                Vue.createElementVNode("div", _hoisted_10$4, [
                  Vue.createVNode(_component_Icon, {
                    icon: addBreakpointDeviceIcon.value,
                    class: "znpb-device__item-icon"
                  }, null, 8, ["icon"]),
                  Vue.createElementVNode("span", _hoisted_11$3, [
                    Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("max", "zionbuilder")) + " ", 1),
                    Vue.createElementVNode("span", _hoisted_12$2, [
                      Vue.createElementVNode("span", _hoisted_13$2, [
                        Vue.withDirectives(Vue.createElementVNode("input", {
                          ref_key: "widthInput",
                          ref: widthInput,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => newBreakpointValue.value = $event),
                          type: "number",
                          class: "znpb-device__itemValueInput",
                          min: "240",
                          onKeydown: Vue.withKeys(addNewBreakpoint, ["enter"])
                        }, null, 40, _hoisted_14$1), [
                          [Vue.vModelText, newBreakpointValue.value]
                        ]),
                        Vue.createTextVNode(" px ")
                      ])
                    ])
                  ]),
                  Vue.createElementVNode("div", _hoisted_15, [
                    Vue.withDirectives(Vue.createVNode(_component_Icon, {
                      icon: "check",
                      class: "znpb-device__item-action",
                      onClick: Vue.withModifiers(addNewBreakpoint, ["stop"])
                    }, null, 8, ["onClick"]), [
                      [_directive_znpb_tooltip, i18n__namespace.__("Save", "zionbuilder")]
                    ]),
                    Vue.withDirectives(Vue.createVNode(_component_Icon, {
                      icon: "close",
                      class: "znpb-device__item-action",
                      onClick: cancelNewBreakpointAdd
                    }, null, 512), [
                      [_directive_znpb_tooltip, i18n__namespace.__("Cancel", "zionbuilder")]
                    ])
                  ])
                ])
              ])
            ])) : Vue.createCommentVNode("", true),
            editBreakpoints.value ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_16, [
              Vue.createElementVNode("div", {
                class: "znpb-device__addBreakpoint",
                onClick: enableAddNewDevice
              }, [
                Vue.createVNode(_component_Icon, { icon: "plus" }),
                Vue.createTextVNode(" " + Vue.toDisplayString(i18n__namespace.__("Add breakpoint", "zionbuilder")), 1)
              ])
            ])) : Vue.createCommentVNode("", true),
            !Vue.unref(userStore).permissions.only_content ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_17, [
              Vue.createElementVNode("div", {
                class: "znpb-responsiveDeviceEditButton",
                onClick: disableEditBreakpoints
              }, [
                !editBreakpoints.value ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, [
                  Vue.createVNode(_component_Icon, { icon: "edit" }),
                  Vue.createTextVNode(" " + Vue.toDisplayString(i18n__namespace.__("Edit breakpoints", "zionbuilder")), 1)
                ], 64)) : (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 1 }, [
                  Vue.createVNode(_component_Icon, { icon: "close" }),
                  Vue.createTextVNode(" " + Vue.toDisplayString(i18n__namespace.__("Disable edit breakpoints", "zionbuilder")), 1)
                ], 64))
              ])
            ])) : Vue.createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["prevent-close"]);
      };
    }
  });
  const ResponsiveDevices_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$l = ["onMousedown"];
  const _hoisted_2$h = { class: "znpb-editor-header__first" };
  const _hoisted_3$e = { class: "znpb-editor-header__last" };
  const _hoisted_4$a = ["href", "target", "onMousedown"];
  const _hoisted_5$8 = ["src"];
  const _hoisted_6$7 = ["onMousedown"];
  const _sfc_main$r = /* @__PURE__ */ Vue.defineComponent({
    __name: "main-panel",
    setup(__props) {
      const UIStore = useUIStore();
      const userStore = useUserStore();
      const { saveDraft, savePage, isSavePageLoading: isSavePageLoading2, openPreviewPage } = useSavePage();
      const { editorData: editorData2 } = useEditorData();
      const { showSaveElement } = useSaveTemplate();
      const editorHeaderRef = Vue.ref(null);
      const showGettingStartedVideo = Vue.ref(false);
      const shortcutsModalVisibility = Vue.ref(false);
      const top = Vue.ref(null);
      const left = Vue.ref(null);
      const draggingPosition = Vue.ref(null);
      const userSel = Vue.ref(null);
      const gettingStartedVideoURL = window.ZnPbInitialData.urls.getting_started_video;
      const tooltipsPosition = Vue.computed(() => {
        if (UIStore.mainBar.position === "top") {
          return "bottom";
        } else if (UIStore.mainBar.position === "left") {
          return "right";
        } else if (UIStore.mainBar.position === "right") {
          return "left";
        } else if (UIStore.mainBar.position === "bottom") {
          return "top";
        }
        return "top";
      });
      const helpMenuItems = Vue.computed(() => {
        const helpArray = [
          {
            title: i18n__namespace.__("Key shortcuts", "zionbuilder"),
            action: () => shortcutsModalVisibility.value = true
          },
          {
            title: i18n__namespace.__("Go to WordPress dashboard", "zionbuilder"),
            url: editorData2.value.urls.wp_admin
          },
          {
            title: i18n__namespace.__("Builder settings", "zionbuilder"),
            url: editorData2.value.urls.zion_admin
          },
          {
            title: i18n__namespace.__("Edit in WordPress", "zionbuilder"),
            url: editorData2.value.urls.edit_page
          },
          {
            title: i18n__namespace.__("Preview post", "zionbuilder"),
            action: openPreviewPage
          }
        ];
        return helpArray.filter((item) => item.canShow !== false);
      });
      const panelStyles = Vue.computed(() => {
        return {
          userSelect: userSel.value,
          pointerEvents: UIStore.mainBar.isDragging || UIStore.mainBar.pointerEvents ? "none" : null
        };
      });
      function saveTemplate() {
        showSaveElement(null);
      }
      const saveActions = [
        {
          icon: "save-template",
          title: i18n__namespace.__("Save Template", "zionbuilder"),
          action: saveTemplate
        },
        {
          icon: "save-draft",
          title: i18n__namespace.__("Save Page", "zionbuilder"),
          action: saveDraft
        },
        {
          icon: "save-page",
          title: i18n__namespace.__("Save & Publish Page", "zionbuilder"),
          action: savePage
        }
      ];
      if (null === localStorage.getItem("zion_builder_guided_tour_done")) {
        doShowGettingStartedVideo();
      }
      function doShowGettingStartedVideo() {
        showGettingStartedVideo.value = true;
        localStorage.setItem("zion_builder_guided_tour_done", true);
      }
      function startBarDrag() {
        window.addEventListener("mousemove", movePanel);
        window.addEventListener("mouseup", disablePanelMove);
      }
      function movePanel(event) {
        document.body.style.cursor = "grabbing";
        let newLeft = event.clientX - 30;
        const newTop = event.clientY;
        UIStore.mainBarDraggingPlaceholder.top = event.clientY;
        UIStore.mainBarDraggingPlaceholder.left = event.clientX;
        if (!UIStore.mainBar.isDragging) {
          UIStore.mainBar.isDragging = true;
        }
        UIStore.setIframePointerEvents(true);
        userSel.value = "none";
        const maxLeft = window.innerWidth - 60;
        newLeft = newLeft <= 0 ? 0 : newLeft;
        left.value = newLeft > maxLeft ? maxLeft : newLeft;
        top.value = newTop;
        const positions = {
          top: window.innerHeight * 30 / 100 - event.clientY,
          right: event.clientX - window.innerWidth * 70 / 100,
          bottom: event.clientY - window.innerHeight * 70 / 100,
          left: window.innerWidth * 30 / 100 - event.clientX
        };
        const availablePositions = Object.keys(positions).filter((position) => {
          return positions[position] > 0;
        });
        if (availablePositions.length === 0) {
          return;
        }
        const closestPosition = availablePositions.reduce((highest, current) => {
          return positions[highest] > positions[current] ? highest : current;
        });
        if (closestPosition) {
          draggingPosition.value = closestPosition;
          UIStore.mainBar.draggingPosition = closestPosition;
        }
      }
      function disablePanelMove() {
        window.removeEventListener("mousemove", movePanel);
        window.removeEventListener("mouseup", disablePanelMove);
        if (draggingPosition.value) {
          UIStore.setMainBarPosition(draggingPosition.value);
          draggingPosition.value = null;
        }
        UIStore.setIframePointerEvents(false);
        userSel.value = null;
        document.body.style.cursor = null;
        UIStore.mainBar.isDragging = false;
      }
      Vue.onBeforeUnmount(() => {
        window.removeEventListener("mousemove", movePanel);
        window.removeEventListener("mouseup", disablePanelMove);
      });
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_Modal = Vue.resolveComponent("Modal");
        const _component_Loader = Vue.resolveComponent("Loader");
        const _directive_znpb_tooltip = Vue.resolveDirective("znpb-tooltip");
        return Vue.openBlock(), Vue.createElementBlock("div", {
          ref_key: "editorHeaderRef",
          ref: editorHeaderRef,
          class: Vue.normalizeClass(["znpb-editor-header", {
            "znpb-editor-panel__container--dragging": Vue.unref(UIStore).mainBar.isDragging,
            [`znpb-editor-header--${Vue.unref(UIStore).mainBar.position}`]: Vue.unref(UIStore).mainBar.position,
            [`znpb-editor-header--hide-${Vue.unref(UIStore).mainBar.position}`]: Vue.unref(UIStore).isPreviewMode
          }]),
          style: Vue.normalizeStyle(panelStyles.value),
          onMousedown: Vue.withModifiers(startBarDrag, ["stop"])
        }, [
          Vue.createElementVNode("div", _hoisted_2$h, [
            Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", {
              class: Vue.normalizeClass(["znpb-editor-header__menu_button znpb-editor-header__menu_button--treeview", {
                active: Vue.unref(UIStore).openPanelsIDs.includes("panel-tree")
              }]),
              onMousedown: _cache[0] || (_cache[0] = Vue.withModifiers(($event) => Vue.unref(UIStore).togglePanel("panel-tree"), ["stop", "prevent"]))
            }, [
              Vue.createVNode(_component_Icon, { icon: "layout" })
            ], 34)), [
              [_directive_znpb_tooltip, i18n__namespace.__("Tree view", "zionbuilder"), tooltipsPosition.value]
            ]),
            !Vue.unref(userStore).permissions.only_content ? Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", {
              key: 0,
              class: Vue.normalizeClass([{
                active: Vue.unref(UIStore).isLibraryOpen
              }, "znpb-editor-header__menu_button"]),
              onMousedown: _cache[1] || (_cache[1] = Vue.withModifiers(
                //@ts-ignore
                (...args) => Vue.unref(UIStore).toggleLibrary && Vue.unref(UIStore).toggleLibrary(...args),
                ["stop"]
              ))
            }, [
              Vue.createVNode(_component_Icon, { icon: "lib" })
            ], 34)), [
              [_directive_znpb_tooltip, i18n__namespace.__("Library", "zionbuilder"), tooltipsPosition.value]
            ]) : Vue.createCommentVNode("", true),
            Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", {
              class: Vue.normalizeClass(["znpb-editor-header__menu_button znpb-editor-header__menu_button--history", {
                active: Vue.unref(UIStore).openPanelsIDs.includes("panel-history")
              }]),
              onMousedown: _cache[2] || (_cache[2] = Vue.withModifiers(($event) => Vue.unref(UIStore).togglePanel("panel-history"), ["stop", "prevent"]))
            }, [
              Vue.createVNode(_component_Icon, { icon: "history" })
            ], 34)), [
              [_directive_znpb_tooltip, i18n__namespace.__("History", "zionbuilder"), tooltipsPosition.value]
            ])
          ]),
          Vue.createElementVNode("div", _hoisted_3$e, [
            Vue.createVNode(Vue.unref(_sfc_main$s)),
            !Vue.unref(userStore).permissions.only_content ? Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", {
              key: 0,
              class: Vue.normalizeClass(["znpb-editor-header__menu_button", {
                active: Vue.unref(UIStore).openPanelsIDs.includes("panel-global-settings")
              }]),
              onMousedown: _cache[3] || (_cache[3] = Vue.withModifiers(($event) => Vue.unref(UIStore).togglePanel("panel-global-settings"), ["stop"]))
            }, [
              Vue.createVNode(_component_Icon, { icon: "sliders" })
            ], 34)), [
              [_directive_znpb_tooltip, i18n__namespace.__("Page options", "zionbuilder"), tooltipsPosition.value]
            ]) : Vue.createCommentVNode("", true),
            Vue.createVNode(Vue.unref(_sfc_main$u), { class: "znpb-editor-header__page-save-wrapper" }, {
              "panel-icon": Vue.withCtx(() => [
                Vue.createVNode(_component_Icon, { icon: "info" })
              ]),
              default: Vue.withCtx(() => [
                (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(helpMenuItems.value, (menuItem, i) => {
                  return Vue.openBlock(), Vue.createBlock(Vue.unref(FlyoutMenuItem), { key: i }, {
                    default: Vue.withCtx(() => [
                      Vue.createElementVNode("a", {
                        href: menuItem.url,
                        target: menuItem.target,
                        onMousedown: Vue.withModifiers(($event) => menuItem.action ? menuItem.action($event) : null, ["prevent", "stop"])
                      }, [
                        Vue.createElementVNode("span", null, Vue.toDisplayString(menuItem.title), 1)
                      ], 40, _hoisted_4$a)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            }),
            showGettingStartedVideo.value && Vue.unref(gettingStartedVideoURL) ? (Vue.openBlock(), Vue.createBlock(_component_Modal, {
              key: 1,
              show: showGettingStartedVideo.value,
              "onUpdate:show": _cache[4] || (_cache[4] = ($event) => showGettingStartedVideo.value = $event),
              width: 840,
              title: i18n__namespace.__("Getting started", "zionbuilder"),
              "append-to": "#znpb-main-wrapper",
              class: "znpb-helpmodal-wrapper"
            }, {
              default: Vue.withCtx(() => [
                Vue.createElementVNode("iframe", {
                  width: "840",
                  height: "100%",
                  src: Vue.unref(gettingStartedVideoURL),
                  frameborder: "0",
                  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowfullscreen: ""
                }, null, 8, _hoisted_5$8)
              ]),
              _: 1
            }, 8, ["show", "title"])) : Vue.createCommentVNode("", true),
            shortcutsModalVisibility.value ? (Vue.openBlock(), Vue.createBlock(_component_Modal, {
              key: 2,
              show: shortcutsModalVisibility.value,
              "onUpdate:show": _cache[5] || (_cache[5] = ($event) => shortcutsModalVisibility.value = $event),
              width: 560,
              title: i18n__namespace.__("Key shortcuts", "zionbuilder"),
              "append-to": "#znpb-main-wrapper"
            }, {
              default: Vue.withCtx(() => [
                Vue.createVNode(_sfc_main$w)
              ]),
              _: 1
            }, 8, ["show", "title"])) : Vue.createCommentVNode("", true),
            Vue.createVNode(Vue.unref(_sfc_main$u), {
              class: "znpb-editor-header__page-save-wrapper znpb-editor-header__page-save-wrapper--save",
              onMousedown: Vue.unref(savePage)
            }, {
              "panel-icon": Vue.withCtx(() => [
                !Vue.unref(isSavePageLoading2) ? (Vue.openBlock(), Vue.createBlock(_component_Icon, {
                  key: 0,
                  icon: "check",
                  onMousedown: Vue.withModifiers(Vue.unref(savePage), ["stop"])
                }, null, 8, ["onMousedown"])) : (Vue.openBlock(), Vue.createBlock(_component_Loader, {
                  key: 1,
                  size: 12
                }))
              ]),
              default: Vue.withCtx(() => [
                (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(saveActions, (menuItem, i) => {
                  return Vue.createVNode(Vue.unref(FlyoutMenuItem), { key: i }, {
                    default: Vue.withCtx(() => [
                      Vue.createElementVNode("a", {
                        href: "#",
                        onMousedown: Vue.withModifiers(menuItem.action, ["stop"])
                      }, [
                        Vue.createElementVNode("span", null, Vue.toDisplayString(menuItem.title), 1)
                      ], 40, _hoisted_6$7)
                    ]),
                    _: 2
                  }, 1024);
                }), 64))
              ]),
              _: 1
            }, 8, ["onMousedown"])
          ])
        ], 46, _hoisted_1$l);
      };
    }
  });
  const mainPanel_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$q = /* @__PURE__ */ Vue.defineComponent({
    __name: "PageStyles",
    props: {
      cssClasses: {},
      pageSettingsModel: {},
      pageSettingsSchema: {}
    },
    setup(__props) {
      const props = __props;
      const { usePseudoSelectors: usePseudoSelectors2, useOptionsSchemas: useOptionsSchemas2 } = window.zb.composables;
      const { getSchema } = useOptionsSchemas2();
      const optionsSchema = getSchema("styles");
      const templateRender = () => {
        const { activePseudoSelector } = usePseudoSelectors2();
        const returnVnodes = [];
        const createVnode = function(styles) {
          return Vue.h(_sfc_main$S, {
            styles
          });
        };
        const pageSettingsOptionsInstance = new Options(props.pageSettingsSchema, props.pageSettingsModel);
        const { customCSS: pageSettingsCustomCSS } = pageSettingsOptionsInstance.parseData();
        returnVnodes.push(createVnode(pageSettingsCustomCSS));
        if (typeof props.cssClasses === "object" && props.cssClasses !== null) {
          Object.keys(props.cssClasses).forEach((cssClassId) => {
            const styleData = props.cssClasses[cssClassId];
            const optionsInstance = new Options(optionsSchema, styleData, [`.zb .${styleData.id}`]);
            const parsedOptions = optionsInstance.parseData();
            let customCSS = window.zb.editor.getCssFromSelector([`.zb .${styleData.id}`], parsedOptions.options);
            if (activePseudoSelector.value && activePseudoSelector.value.id === ":hover") {
              const optionsInstance2 = new Options(optionsSchema, styleData, [`.zb .${styleData.id}`]);
              const parsedOptions2 = optionsInstance2.parseData();
              customCSS += window.zb.editor.getCssFromSelector([`.zb .${styleData.id}`], parsedOptions2.options, {
                forcehoverState: true
              });
            }
            returnVnodes.push(createVnode(customCSS));
          });
        }
        return returnVnodes;
      };
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createBlock(templateRender);
      };
    }
  });
  const _sfc_main$p = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementHighlight",
    props: {
      element: {}
    },
    setup(__props) {
      var _a;
      const props = __props;
      const UIStore = useUIStore();
      const canvas = (_a = window.document.getElementById("znpb-editor-iframe")) == null ? void 0 : _a.contentWindow;
      const toolboxClasses = Vue.computed(() => {
        const classes = {};
        classes["znpb-element-toolbox--loopProvider"] = props.element.isRepeaterProvider;
        classes["znpb-element-toolbox--loopConsumer"] = props.element.isRepeaterConsumer;
        return classes;
      });
      const canShowToolbox = Vue.computed(() => {
        if (UIStore.isPreviewMode) {
          return false;
        }
        if (!props.element) {
          return false;
        }
        if (!props.element.isVisible) {
          return false;
        }
        if (props.element.elementDefinition.is_child) {
          return false;
        }
        return true;
      });
      const toolboxStyles = Vue.ref(null);
      function repositionToolbox() {
        const domElement = canvas.document.getElementById(props.element.uid);
        const elementWindow = domElement == null ? void 0 : domElement.ownerDocument.defaultView;
        if (!domElement || !elementWindow) {
          return;
        }
        const { top, left, width, height } = domElement.getBoundingClientRect();
        toolboxStyles.value = {
          width: `${width}px`,
          height: `${height}px`,
          top: `${top + canvas.scrollY}px`,
          left: `${left + (canvas == null ? void 0 : canvas.scrollX)}px`
        };
      }
      Vue.computed(() => {
        return UIStore.isElementDragging;
      });
      Vue.onMounted(() => {
        repositionToolbox();
      });
      return (_ctx, _cache) => {
        const _component_AddElementIcon = Vue.resolveComponent("AddElementIcon");
        return _ctx.element && canShowToolbox.value ? Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("div", {
          key: 0,
          ref: "rectangle",
          class: Vue.normalizeClass(["znpb-element-toolbox", toolboxClasses.value]),
          style: Vue.normalizeStyle(toolboxStyles.value ? toolboxStyles.value : {}),
          onContextmenu: _cache[0] || (_cache[0] = Vue.withModifiers(($event) => Vue.unref(UIStore).showElementMenuFromEvent(_ctx.element, $event), ["stop", "prevent"])),
          onMouseenter: _cache[1] || (_cache[1] = ($event) => Vue.unref(UIStore).highlightElement(_ctx.element))
        }, [
          toolboxStyles.value ? (Vue.openBlock(), Vue.createBlock(_sfc_main$W, {
            key: 0,
            element: _ctx.element
          }, null, 8, ["element"])) : Vue.createCommentVNode("", true),
          Vue.createVNode(_component_AddElementIcon, {
            element: _ctx.element,
            placement: "next",
            position: "middle"
          }, null, 8, ["element"])
        ], 38)), [
          [Vue.vShow, toolboxStyles.value]
        ]) : Vue.createCommentVNode("", true);
      };
    }
  });
  const _sfc_main$o = /* @__PURE__ */ Vue.defineComponent({
    __name: "PreviewApp",
    setup(__props) {
      const { useOptionsSchemas: useOptionsSchemas2 } = window.zb.composables;
      const { doAction, applyFilters: applyFilters2 } = window.zb.hooks;
      const { getSchema } = useOptionsSchemas2();
      const cssClasses = useCSSClassesStore();
      const UIStore = useUIStore();
      const elementsStore = useContentStore();
      const pageSettings = usePageSettingsStore();
      const element = Vue.computed(() => {
        return elementsStore.getElement(window.ZnPbInitialData.page_id);
      });
      Vue.watch(
        () => UIStore.isPreviewMode,
        (newValue) => {
          if (newValue) {
            window.document.body.classList.add("znpb-editor-preview--active");
          } else {
            window.document.body.classList.remove("znpb-editor-preview--active");
          }
        }
      );
      doAction("zionbuilder/preview/app/setup");
      const previewAppClasses = Vue.computed(() => {
        var _a;
        return applyFilters2("zionbuilder/preview/app/css_classes", (_a = window.ZnPbInitialData) == null ? void 0 : _a.preview_app_css_classes);
      });
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", {
          class: Vue.normalizeClass(["zb", previewAppClasses.value])
        }, [
          element.value ? (Vue.openBlock(), Vue.createBlock(_sfc_main$L, {
            key: 0,
            class: "znpb-preview-page-wrapper",
            element: element.value
          }, null, 8, ["element"])) : Vue.createCommentVNode("", true),
          Vue.createVNode(_sfc_main$q, {
            "css-classes": Vue.unref(cssClasses).CSSClasses,
            "page-settings-model": Vue.unref(pageSettings).settings,
            "page-settings-schema": Vue.unref(getSchema)("pageSettingsSchema")
          }, null, 8, ["css-classes", "page-settings-model", "page-settings-schema"]),
          Vue.unref(UIStore).editedElement ? (Vue.openBlock(), Vue.createBlock(_sfc_main$T, {
            key: Vue.unref(UIStore).editedElement.uid,
            element: Vue.unref(UIStore).editedElement
          }, null, 8, ["element"])) : Vue.createCommentVNode("", true),
          Vue.unref(UIStore).highlightedElement && !Vue.unref(UIStore).isToolboxDragging ? (Vue.openBlock(), Vue.createBlock(_sfc_main$p, {
            key: Vue.unref(UIStore).highlightedElement.uid,
            element: Vue.unref(UIStore).highlightedElement
          }, null, 8, ["element"])) : Vue.createCommentVNode("", true),
          Vue.createVNode(_sfc_main$S, {
            styles: Vue.unref(pageSettings).settings._custom_css || ""
          }, null, 8, ["styles"])
        ], 2);
      };
    }
  });
  const PreviewApp_vue_vue_type_style_index_0_lang = "";
  const PreviewIframe_vue_vue_type_style_index_0_lang = "";
  const { useResponsiveDevices } = window.zb.composables;
  const { addAction, removeAction } = window.zb.hooks;
  const _sfc_main$n = {
    name: "PreviewIframe",
    components: {
      PreviewApp: _sfc_main$o
    },
    setup() {
      const {
        activeResponsiveDeviceInfo: activeResponsiveDeviceInfo2,
        iframeWidth,
        setCustomIframeWidth,
        scaleValue,
        autoScaleActive,
        activeResponsiveDeviceId,
        ignoreWidthChangeFlag,
        setCustomScale
      } = useResponsiveDevices();
      const { applyShortcuts } = useKeyBindings();
      const { saveAutosave } = useSavePage();
      const { editorData: editorData2 } = useEditorData();
      const UIStore = useUIStore();
      const contentStore = useContentStore();
      const elementsDefinitionsStore = useElementDefinitionsStore();
      const { addWindow, addEventListener, removeEventListener, getWindows, removeWindow } = useWindows();
      const iframeAPP = Vue.ref(null);
      const root2 = Vue.ref(null);
      const iframe = Vue.ref(null);
      const containerSize = Vue.ref({
        width: 0,
        height: 0
      });
      const iframeSize = Vue.ref({
        width: 0,
        height: 0
      });
      const getWrapperClasses = Vue.computed(() => {
        const { width: containerWidth } = containerSize.value;
        const { width: iframeWidth2 } = iframeSize.value;
        return {
          [`znpb-editor-iframe-wrapper--${activeResponsiveDeviceInfo2.value.id}`]: true,
          "znpb-editor-iframe--isAutoscale": autoScaleActive.value,
          "znpb-editor-iframe--alignStart": Math.round(scaleValue.value / 100 * iframeWidth2) > containerWidth,
          "znpb-editor-iframe--hideOverflow": Math.round(scaleValue.value / 100 * iframeWidth2) <= containerWidth
        };
      });
      const deviceStyle = Vue.computed(() => {
        const styles = {};
        return styles;
      });
      addAction("zionbuilder/responsive/change_device_width", (device, newValue, oldValue) => {
        if (device.id === activeResponsiveDeviceId.value && newValue !== oldValue) {
          setCustomIframeWidth(newValue);
        }
      });
      const iframeStyles = Vue.computed(() => {
        const styles = {};
        if (root2.value) {
          const { height: containerHeight } = containerSize.value;
          let height = 0;
          if (activeResponsiveDeviceInfo2.value && activeResponsiveDeviceInfo2.value.height) {
            height = activeResponsiveDeviceInfo2.value.height;
          } else {
            height = containerHeight;
          }
          if (iframeWidth.value) {
            styles.width = `${iframeWidth.value}px`;
          }
          const scale = scaleValue.value / 100;
          styles.transform = `scale(${scale})`;
          styles.height = `${100 / scaleValue.value * height}px`;
          styles.maxHeight = `${100 / scaleValue.value * containerHeight}px`;
        }
        return styles;
      });
      Vue.watch(
        () => UIStore.isPreviewMode,
        (newValue) => {
          if (newValue && activeResponsiveDeviceInfo2.value.id === "default") {
            Vue.nextTick(() => {
              iframeWidth.value = null;
            });
          }
        }
      );
      Vue.watch([containerSize, iframeSize], ([containerNewSize, iframeNewSize]) => {
        if (autoScaleActive.value) {
          let scale = containerNewSize.width / iframeNewSize.width * 100;
          scale = scale > 100 ? 100 : scale;
          setCustomScale(scale);
        }
      });
      const containerResizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentBoxSize) {
            const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
            containerSize.value = {
              width: contentBoxSize.inlineSize,
              height: contentBoxSize.blockSize
            };
          } else {
            containerSize.value = {
              width: entry.contentRect.width,
              height: entry.contentRect.width
            };
          }
        }
      });
      const iframeResizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentBoxSize) {
            const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
            iframeSize.value = {
              width: contentBoxSize.inlineSize,
              height: contentBoxSize.blockSize
            };
          } else {
            iframeSize.value = {
              width: entry.contentRect.width,
              height: entry.contentRect.width
            };
          }
        }
      });
      Vue.watch(activeResponsiveDeviceId, () => {
        if (ignoreWidthChangeFlag.value) {
          ignoreWidthChangeFlag.value = false;
          return;
        }
        if (activeResponsiveDeviceInfo2.value.width) {
          setCustomIframeWidth(activeResponsiveDeviceInfo2.value.width);
        } else if (activeResponsiveDeviceInfo2.value.id === "default") {
          setCustomIframeWidth(containerSize.value.width < 1200 ? 1200 : containerSize.value.width);
        }
      });
      Vue.watch(autoScaleActive, (newValue) => {
        if (newValue) {
          root2.value.scrollLeft = 0;
        } else {
          setCustomScale(100);
        }
      });
      Vue.onMounted(() => {
        const { width, height } = root2.value.getBoundingClientRect();
        containerSize.value = {
          width,
          height
        };
        const { width: iframeWidth2 } = iframe.value.getBoundingClientRect();
        iframeSize.value = {
          width,
          height
        };
        setCustomIframeWidth(iframeWidth2 < 1200 ? 1200 : iframeWidth2);
        containerResizeObserver.observe(root2.value);
        iframeResizeObserver.observe(iframe.value);
      });
      Vue.onBeforeUnmount(() => {
        containerResizeObserver.unobserve(root2.value);
        containerResizeObserver.observe(iframe.value);
      });
      const pointerEvents = Vue.computed(() => {
        const style = {};
        if (UIStore.iFrame.pointerEvents) {
          style.pointerEvents = "none";
        }
        style.order = UIStore.getPanelOrder("preview-iframe");
        return style;
      });
      return {
        iframeAPP,
        activeResponsiveDeviceInfo: activeResponsiveDeviceInfo2,
        applyShortcuts,
        saveAutosave,
        pageId: editorData2.value.page_id,
        urls: editorData2.value.urls,
        addWindow,
        getWindows,
        addEventListener,
        removeEventListener,
        removeWindow,
        // Dom refs
        root: root2,
        iframe,
        // computed
        deviceStyle,
        getWrapperClasses,
        iframeStyles,
        pointerEvents,
        // Iframe size tooltip
        iframeWidth,
        // Stores
        contentStore,
        UIStore,
        elementsDefinitionsStore
      };
    },
    data() {
      return {
        ignoreNextReload: false,
        localStoragePageData: {},
        iframeLoaded: false
      };
    },
    // end checkMousePosition
    beforeUnmount() {
      if (this.getWindows("preview")) {
        this.getWindows("preview").removeEventListener("keydown", this.applyShortcuts);
        this.getWindows("preview").removeEventListener("click", this.preventClicks, true);
        this.getWindows("preview").removeEventListener("beforeunload", this.onBeforeUnloadIframe);
        this.getWindows("preview").removeEventListener("click", this.onIframeClick, true);
      }
      removeAction("refreshIframe", this.refreshIframe);
    },
    mounted() {
      addAction("refreshIframe", this.refreshIframe);
    },
    methods: {
      setPageContent(areas) {
        forEach(areas, (areaContent, id) => {
          this.contentStore.registerArea(
            {
              name: id,
              id
            },
            areaContent
          );
        });
        this.UIStore.setContentTimestamp();
      },
      onIframeClick(event) {
        this.root.click();
      },
      onIframeLoaded() {
        this.iframeLoaded = true;
        const iframeWindow = this.$refs.iframe.contentWindow;
        const elementDefinitionsStore2 = useElementDefinitionsStore();
        elementDefinitionsStore2.setCategories(iframeWindow.ZnPbInitialData.elements_categories);
        elementDefinitionsStore2.addElements(iframeWindow.ZnPbInitialData.elements_data);
        this.addWindow("preview", iframeWindow);
        this.attachIframeEvents();
        iframeWindow.zb = window.zb;
        const renderElement = iframeWindow.document.getElementById(`znpb-preview-${window.ZnPbInitialData.page_id}-area`);
        if (renderElement) {
          this.iframeAPP = iframeWindow.document.getElementById(`znpb-preview-${window.ZnPbInitialData.page_id}-area`);
        } else {
          console.log("preview element not found");
        }
        if (!this.ignoreNextReload) {
          this.setPageContent(iframeWindow.ZnPbInitialData.page_content);
        }
        this.ignoreNextReload = false;
        this.UIStore.setPreviewLoading(false);
        this.UIStore.setLoadTimestamp();
      },
      attachIframeEvents() {
        this.getWindows("preview").addEventListener("click", this.preventClicks, true);
        this.getWindows("preview").addEventListener("keydown", this.applyShortcuts);
        this.getWindows("preview").addEventListener("beforeunload", this.onBeforeUnloadIframe, { capture: true });
        this.getWindows("preview").addEventListener("click", this.onIframeClick, true);
      },
      preventClicks(event) {
        const e = window.e || event;
        if (e.target.tagName === "a" || !e.target.classList.contains("znpb-allow-click")) {
          e.preventDefault();
        }
      },
      onBeforeUnloadIframe(event) {
        const historyStore = useHistoryStore();
        if (historyStore.isDirty) {
          event.preventDefault();
          event.returnValue = "Do you want to leave this site? Changes you made may not be saved.";
        } else {
          this.UIStore.setPreviewLoading(true);
        }
      },
      refreshIframe() {
        this.saveAutosave().then(() => {
          window.location.reload();
        });
      },
      checkIframeLoading() {
        if (this.$refs.iframe && this.$refs.iframe.contentDocument) {
          if (this.$refs.iframe.contentDocument.readyState === "complete") {
            this.onIframeLoaded();
          } else {
            setTimeout(this.checkIframeLoading, 100);
          }
        } else {
          setTimeout(this.checkIframeLoading, 100);
        }
      }
    }
  };
  const _hoisted_1$k = ["src"];
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_PreviewApp = Vue.resolveComponent("PreviewApp");
    return Vue.openBlock(), Vue.createElementBlock("div", {
      id: "preview-iframe",
      ref: "root",
      class: Vue.normalizeClass(["znpb-editor-iframe-wrapper", $setup.getWrapperClasses]),
      style: Vue.normalizeStyle($setup.pointerEvents)
    }, [
      $setup.urls.preview_frame_url ? (Vue.openBlock(), Vue.createElementBlock("iframe", {
        key: 0,
        id: "znpb-editor-iframe",
        ref: "iframe",
        src: $setup.urls.preview_frame_url,
        style: Vue.normalizeStyle($setup.iframeStyles),
        onLoad: _cache[0] || (_cache[0] = (...args) => $options.checkIframeLoading && $options.checkIframeLoading(...args))
      }, null, 44, _hoisted_1$k)) : Vue.createCommentVNode("", true),
      $setup.iframeAPP ? (Vue.openBlock(), Vue.createBlock(Vue.Teleport, {
        key: 1,
        to: $setup.iframeAPP
      }, [
        Vue.createVNode(_component_PreviewApp)
      ], 8, ["to"])) : Vue.createCommentVNode("", true)
    ], 6);
  }
  const PreviewIframe = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render]]);
  const _sfc_main$m = /* @__PURE__ */ Vue.defineComponent({
    __name: "BreadcrumbsItem",
    props: {
      item: {}
    },
    setup(__props) {
      const UIStore = useUIStore();
      const contentStore = useContentStore();
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", {
          class: Vue.normalizeClass(["znpb-element-options__vertical-breadcrumbs-item", { "znpb-element-options__vertical-breadcrumbs-item--active": _ctx.item.active }]),
          onMouseenter: _cache[0] || (_cache[0] = Vue.withModifiers(
            //@ts-ignore
            (...args) => _ctx.item.element.highlight && _ctx.item.element.highlight(...args),
            ["stop"]
          )),
          onMouseleave: _cache[1] || (_cache[1] = Vue.withModifiers(
            //@ts-ignore
            (...args) => _ctx.item.element.unHighlight && _ctx.item.element.unHighlight(...args),
            ["stop"]
          )),
          onClick: _cache[2] || (_cache[2] = Vue.withModifiers(($event) => Vue.unref(UIStore).editElement(_ctx.item.element), ["stop"]))
        }, [
          Vue.createElementVNode("span", null, Vue.toDisplayString(Vue.unref(contentStore).getElementName(_ctx.item.element)), 1),
          _ctx.item.children.length > 0 ? (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, { key: 0 }, Vue.renderList(_ctx.item.children, (child) => {
            return Vue.openBlock(), Vue.createBlock(_sfc_main$l, {
              key: child.element.uid,
              class: "znpb-element-options__vertical-breadcrumbs-wrapper--inner",
              item: child
            }, null, 8, ["item"]);
          }), 128)) : Vue.createCommentVNode("", true)
        ], 34);
      };
    }
  });
  const _hoisted_1$j = { class: "znpb-element-options__vertical-breadcrumbs-wrapper" };
  const _sfc_main$l = /* @__PURE__ */ Vue.defineComponent({
    __name: "Breadcrumbs",
    props: {
      item: {}
    },
    setup(__props) {
      const UIStore = useUIStore();
      const contentStore = useContentStore();
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$j, [
          Vue.createElementVNode("div", {
            class: Vue.normalizeClass(["znpb-element-options__vertical-breadcrumbs-item znpb-element-options__vertical-breadcrumbs-item--first", { "znpb-element-options__vertical-breadcrumbs-item--active": _ctx.item.active }]),
            onMouseenter: _cache[0] || (_cache[0] = Vue.withModifiers(
              //@ts-ignore
              (...args) => _ctx.item.element.highlight && _ctx.item.element.highlight(...args),
              ["stop"]
            )),
            onMouseleave: _cache[1] || (_cache[1] = Vue.withModifiers(
              //@ts-ignore
              (...args) => _ctx.item.element.unHighlight && _ctx.item.element.unHighlight(...args),
              ["stop"]
            )),
            onClick: _cache[2] || (_cache[2] = Vue.withModifiers(($event) => Vue.unref(UIStore).editElement(_ctx.item.element), ["stop"]))
          }, [
            Vue.createElementVNode("span", null, Vue.toDisplayString(Vue.unref(contentStore).getElementName(_ctx.item.element)), 1)
          ], 34),
          _ctx.item.children.length > 0 ? (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, { key: 0 }, Vue.renderList(_ctx.item.children, (child) => {
            return Vue.openBlock(), Vue.createBlock(_sfc_main$m, {
              key: child.element.uid,
              item: child
            }, null, 8, ["item"]);
          }), 128)) : Vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const Breadcrumbs_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$i = { class: "znpb-element-options__breadcrumbs znpb-fancy-scrollbar" };
  const _hoisted_2$g = { key: 1 };
  const _sfc_main$k = /* @__PURE__ */ Vue.defineComponent({
    __name: "BreadcrumbsWrapper",
    props: {
      element: {}
    },
    setup(__props) {
      const props = __props;
      const contentStore = useContentStore();
      const getChildren = function(element) {
        const children = {
          element,
          children: [],
          active: props.element.uid === element.uid
        };
        if (element.content) {
          element.content.forEach((childElementUID) => {
            const childElement = contentStore.getElement(childElementUID);
            children.children.push(getChildren(childElement));
          });
        }
        return children;
      };
      const breadcrumbsItem = Vue.computed(() => {
        let parentStructure = getChildren(props.element);
        let element = props.element;
        while (element.parent && element.parent.elementDefinition.element_type !== "contentRoot") {
          parentStructure = {
            element: element.parent,
            children: [parentStructure],
            active: props.element === element.parent
          };
          element = element.parent;
        }
        return parentStructure;
      });
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$i, [
          breadcrumbsItem.value.children.length > 0 ? (Vue.openBlock(), Vue.createBlock(_sfc_main$l, {
            key: 0,
            item: breadcrumbsItem.value
          }, null, 8, ["item"])) : (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_2$g, "This element has no children"))
        ]);
      };
    }
  });
  const _hoisted_1$h = { class: "znpb-css-class-selector__item-content" };
  const _hoisted_2$f = { class: "znpb-css-class-selector__item-name" };
  const _hoisted_3$d = ["title"];
  const _sfc_main$j = /* @__PURE__ */ Vue.defineComponent({
    __name: "CssSelector",
    props: {
      name: {},
      type: {},
      isSelected: { type: Boolean, default: false },
      showDelete: { type: Boolean, default: false },
      showCopyPaste: { type: Boolean, default: true },
      showActions: { type: Boolean, default: true }
    },
    emits: ["remove-class", "copy-styles", "paste-styles", "remove-extra-classes"],
    setup(__props, { emit }) {
      const cssClasses = useCSSClassesStore();
      const namedTypes = {
        id: i18n__namespace.__("ID", "zionbuilder"),
        class: i18n__namespace.__("class", "zionbuilder"),
        static_class: i18n__namespace.__("external", "zionbuilder")
      };
      function getNameFromType(type) {
        return namedTypes[type] || type;
      }
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _directive_znpb_tooltip = Vue.resolveDirective("znpb-tooltip");
        return Vue.openBlock(), Vue.createElementBlock("div", {
          class: Vue.normalizeClass(["znpb-css-class-selector__item", { "znpb-css-class-selector__item--selected": _ctx.isSelected }])
        }, [
          Vue.createElementVNode("div", _hoisted_1$h, [
            Vue.createElementVNode("span", {
              class: Vue.normalizeClass(["znpb-css-class-selector__item-type", { [`znpb-css-class-selector__item-type--${_ctx.type}`]: _ctx.type }])
            }, Vue.toDisplayString(getNameFromType(_ctx.type)), 3),
            Vue.createElementVNode("span", _hoisted_2$f, [
              Vue.createElementVNode("span", { title: _ctx.name }, Vue.toDisplayString(_ctx.name), 9, _hoisted_3$d)
            ])
          ]),
          _ctx.showActions && _ctx.showCopyPaste ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(_component_Icon, {
            key: 0,
            icon: "copy",
            class: "znpb-css-class-selector__item-copy",
            onClick: _cache[0] || (_cache[0] = Vue.withModifiers(($event) => emit("copy-styles"), ["stop"]))
          }, null, 512)), [
            [_directive_znpb_tooltip, i18n__namespace.__("Copy styles", "zionbuilder")]
          ]) : Vue.createCommentVNode("", true),
          _ctx.showActions && _ctx.showCopyPaste ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(_component_Icon, {
            key: 1,
            icon: "paste",
            class: Vue.normalizeClass(["znpb-css-class-selector__item-paste", {
              "znpb-css-class-selector__item-paste--disabled": !Vue.unref(cssClasses).copiedStyles
            }]),
            onClick: _cache[1] || (_cache[1] = Vue.withModifiers(($event) => emit("paste-styles"), ["stop"]))
          }, null, 8, ["class"])), [
            [_directive_znpb_tooltip, i18n__namespace.__("Paste styles", "zionbuilder")]
          ]) : Vue.createCommentVNode("", true),
          _ctx.showActions ? Vue.withDirectives((Vue.openBlock(), Vue.createBlock(_component_Icon, {
            key: 2,
            icon: "close",
            class: Vue.normalizeClass(["znpb-css-class-selector__item-close", {
              "znpb-css-class-selector__item-close--disabled": !_ctx.showDelete
            }]),
            onClick: _cache[2] || (_cache[2] = Vue.withModifiers(($event) => emit("remove-class"), ["stop"]))
          }, null, 8, ["class"])), [
            [_directive_znpb_tooltip, i18n__namespace.__("Remove class from element.", "zionbuilder")]
          ]) : Vue.createCommentVNode("", true)
        ], 2);
      };
    }
  });
  const CssSelector_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$g = { key: 0 };
  const _hoisted_2$e = ["onKeydown"];
  const _hoisted_3$c = { class: "znpb-search-wrapper" };
  const _hoisted_4$9 = {
    key: 1,
    class: "znpb-class-selector-noClass"
  };
  const _hoisted_5$7 = {
    key: 2,
    class: "znpb-class-selector-validator"
  };
  const _sfc_main$i = /* @__PURE__ */ Vue.defineComponent({
    __name: "ClassSelectorDropdown",
    props: {
      element: {},
      activeGlobalClass: {},
      name: {},
      allowClassAssignment: { type: Boolean, default: true },
      assignedClasses: {},
      assignedStaticClasses: {},
      activeStyleElementId: {}
    },
    emits: [
      "update:activeClass",
      "remove-class",
      "add-class",
      "update:activeGlobalClass",
      "paste-styles",
      "add-static-class",
      "remove-static-class"
    ],
    setup(__props, { emit }) {
      const props = __props;
      const cssClasses = useCSSClassesStore();
      const errorMessage = Vue.ref("");
      const invalidClass = Vue.ref(false);
      const focusClassIndex = Vue.ref(0);
      const root2 = Vue.ref(null);
      const inputRef = Vue.ref(null);
      const dropDownWrapperRef = Vue.ref(null);
      const dropdownState = Vue.ref(false);
      const keyword = Vue.ref("");
      const filteredClasses = Vue.computed(() => {
        if (keyword.value.length === 0) {
          const extraClasses = [
            {
              type: "id",
              name: props.activeStyleElementId,
              deletable: false,
              id: props.activeStyleElementId,
              selected: props.activeGlobalClass === null,
              uid: props.activeStyleElementId
            }
          ];
          props.assignedClasses.forEach((cssClass) => {
            const classConfig = cssClasses.getClassConfig(cssClass);
            if (classConfig) {
              extraClasses.push({
                type: "class",
                name: classConfig.name,
                id: classConfig.id,
                deletable: true,
                selected: props.activeGlobalClass === classConfig.id,
                uid: classConfig.uid
              });
            }
          });
          props.assignedStaticClasses.forEach((cssClassName) => {
            extraClasses.push({
              type: "static_class",
              name: cssClassName,
              id: cssClassName,
              deletable: true,
              selected: false,
              uid: cssClassName
            });
          });
          return extraClasses;
        } else {
          const foundClasses = [];
          cssClasses.getClassesByFilter(keyword.value).map((selectorConfig) => {
            foundClasses.push({
              type: "class",
              name: selectorConfig.name,
              id: selectorConfig.id,
              deletable: false,
              selected: false,
              uid: selectorConfig.uid
            });
          });
          cssClasses.getStaticClassesByFilter(keyword.value).map((cssClassName) => {
            foundClasses.push({
              type: "static_class",
              name: cssClassName,
              id: cssClassName,
              deletable: true,
              selected: false,
              uid: cssClassName
            });
          });
          return foundClasses;
        }
      });
      function removeClass(selectorConfig) {
        if (selectorConfig.type === "class") {
          emit("remove-class", selectorConfig.uid);
        } else if (selectorConfig.type === "static_class") {
          emit("remove-static-class", selectorConfig.uid);
        }
        keyword.value = "";
        errorMessage.value = "";
      }
      function selectClass(selectorConfig) {
        if (selectorConfig.type === "id") {
          emit("update:activeGlobalClass", null);
        } else if (selectorConfig.type === "class") {
          emit("add-class", selectorConfig.uid);
        } else if (selectorConfig.type === "static_class") {
          emit("add-static-class", selectorConfig.uid);
        }
        Vue.nextTick(() => {
          focusClassIndex.value = filteredClasses.value.findIndex((item) => item.id === selectorConfig.id);
        });
      }
      function addNewCssClass() {
        if (!invalidClass.value && keyword.value.length) {
          dropdownState.value = false;
          const existingClass = cssClasses.getClassConfig(keyword.value);
          if (existingClass) {
            emit("add-class", existingClass.uid);
          } else {
            const newClass = cssClasses.addCSSClass({
              id: keyword.value,
              name: keyword.value
            });
            emit("add-class", newClass.uid);
          }
          keyword.value = "";
        }
      }
      function handleClassInput(newCssClass) {
        keyword.value = newCssClass;
        if (!/-?[_a-zA-Z]+[_a-zA-Z0-9-]*/i.test(keyword.value)) {
          errorMessage.value = "Invalid class name, classes must not start with numbers and cannot contain spaces";
          invalidClass.value = true;
        } else {
          invalidClass.value = false;
          errorMessage.value = "";
        }
        if (!keyword.value.length) {
          errorMessage.value = "";
          invalidClass.value = false;
        }
      }
      function onCopyStyles(selectorConfig) {
        if (selectorConfig.type === "class") {
          const stylesConfig = cssClasses.getStylesConfig(selectorConfig.uid);
          cssClasses.copyClassStyles(stylesConfig);
        } else {
          cssClasses.copyClassStyles(props.element.getOptionValue(`_styles.${props.activeStyleElementId}.styles`, {}));
        }
      }
      function onPasteStyles(selectorConfig) {
        if (selectorConfig.type === "class") {
          cssClasses.pasteClassStyles(selectorConfig.uid);
        } else {
          emit("paste-styles", selectorConfig);
        }
      }
      Vue.watch(dropdownState, (newState) => {
        if (newState) {
          document.addEventListener("click", closePanel);
          Vue.nextTick(() => {
            if (inputRef.value) {
              inputRef.value.focus();
            }
          });
          keyword.value = "";
        } else {
          document.removeEventListener("click", closePanel);
          errorMessage.value = "";
          focusClassIndex.value = 0;
        }
      });
      Vue.onBeforeUnmount(() => {
        document.removeEventListener("click", closePanel);
      });
      function onKeyDown() {
        let nextClass;
        if (filteredClasses.value.length > 0) {
          if (dropDownWrapperRef.value) {
            dropDownWrapperRef.value.focus();
          }
          if (filteredClasses.value[focusClassIndex.value + 1]) {
            nextClass = filteredClasses.value[focusClassIndex.value + 1];
            selectClass(nextClass);
            focusClassIndex.value = focusClassIndex.value + 1;
          }
        }
      }
      function onKeyUp() {
        let previousClass;
        if (filteredClasses.value.length > 0) {
          if (dropDownWrapperRef.value) {
            dropDownWrapperRef.value.focus();
          }
          if (filteredClasses.value[focusClassIndex.value - 1]) {
            previousClass = filteredClasses.value[focusClassIndex.value - 1];
            selectClass(previousClass);
            focusClassIndex.value = focusClassIndex.value - 1;
          }
        }
      }
      function onKeyEnter() {
        dropdownState.value = false;
      }
      function closePanel(event) {
        if (event.target === document) {
          dropdownState.value = false;
          return;
        }
        if (root2.value && event.target instanceof Element) {
          if (!root2.value.contains(event.target) && event.target.tagName !== "INPUT" && !event.target.classList.contains("znpb-class-selector__add-class-button")) {
            dropdownState.value = false;
          }
        }
      }
      return (_ctx, _cache) => {
        const _component_BaseInput = Vue.resolveComponent("BaseInput");
        const _component_Button = Vue.resolveComponent("Button");
        return Vue.openBlock(), Vue.createElementBlock("div", {
          ref_key: "root",
          ref: root2,
          class: "znpb-class-selector"
        }, [
          Vue.createElementVNode("div", null, [
            Vue.createVNode(_sfc_main$j, {
              class: "znpb-class-selector-trigger",
              "show-delete": false,
              "show-actions": false,
              name: _ctx.name,
              type: _ctx.activeGlobalClass ? "class" : "id",
              onClick: _cache[0] || (_cache[0] = ($event) => dropdownState.value = !dropdownState.value),
              onCopyStyles,
              onPasteStyles
            }, null, 8, ["name", "type"])
          ]),
          dropdownState.value ? (Vue.openBlock(), Vue.createElementBlock("div", {
            key: 0,
            ref_key: "dropDownWrapperRef",
            ref: dropDownWrapperRef,
            class: "hg-popper znpb-class-selector__popper"
          }, [
            !_ctx.allowClassAssignment ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$g, Vue.toDisplayString(i18n__namespace.__("Class assignments not allowed", "zionbuilder")), 1)) : (Vue.openBlock(), Vue.createElementBlock("div", {
              key: 1,
              ref: "dropDownWrapper",
              class: "znpb-class-selector-body",
              tabindex: "0",
              onKeydown: [
                Vue.withKeys(onKeyDown, ["down"]),
                Vue.withKeys(onKeyUp, ["up"]),
                Vue.withKeys(onKeyEnter, ["enter"]),
                _cache[2] || (_cache[2] = Vue.withKeys(Vue.withModifiers(($event) => dropdownState.value = false, ["stop"]), ["esc"]))
              ]
            }, [
              Vue.createElementVNode("div", _hoisted_3$c, [
                Vue.createVNode(_component_BaseInput, {
                  ref_key: "inputRef",
                  ref: inputRef,
                  modelValue: keyword.value,
                  filterable: true,
                  clearable: true,
                  placeholder: i18n__namespace.__("Enter class name", "zionbuilder"),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => handleClassInput($event)),
                  onKeydown: Vue.withKeys(Vue.withModifiers(addNewCssClass, ["stop"]), ["enter"])
                }, null, 8, ["modelValue", "placeholder", "onKeydown"]),
                Vue.createVNode(_component_Button, {
                  type: "line",
                  class: "znpb-class-selector__add-class-button",
                  onClick: addNewCssClass
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("Add Class", "zionbuilder")), 1)
                  ]),
                  _: 1
                })
              ]),
              filteredClasses.value.length > 0 ? (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, { key: 0 }, Vue.renderList(filteredClasses.value, (cssClassItem) => {
                return Vue.openBlock(), Vue.createBlock(_sfc_main$j, {
                  key: cssClassItem.name,
                  name: cssClassItem.name,
                  type: cssClassItem.type,
                  "show-delete": cssClassItem.deletable,
                  "show-copy-paste": cssClassItem.type !== "static_class",
                  "is-selected": cssClassItem.selected,
                  onRemoveClass: ($event) => removeClass(cssClassItem),
                  onClick: ($event) => (selectClass(cssClassItem), dropdownState.value = false),
                  onCopyStyles: ($event) => onCopyStyles(cssClassItem),
                  onPasteStyles: ($event) => onPasteStyles(cssClassItem)
                }, null, 8, ["name", "type", "show-delete", "show-copy-paste", "is-selected", "onRemoveClass", "onClick", "onCopyStyles", "onPasteStyles"]);
              }), 128)) : Vue.createCommentVNode("", true),
              errorMessage.value.length === 0 && filteredClasses.value.length === 0 ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_4$9, Vue.toDisplayString(i18n__namespace.__(
                'No class found. Press "Add class" to create a new class and assign it to the element.',
                "zionbuilder"
              )), 1)) : Vue.createCommentVNode("", true),
              invalidClass.value ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_5$7, Vue.toDisplayString(errorMessage.value), 1)) : Vue.createCommentVNode("", true)
            ], 40, _hoisted_2$e))
          ], 512)) : Vue.createCommentVNode("", true)
        ], 512);
      };
    }
  });
  const ClassSelectorDropdown_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$f = { class: "znpb-element-styles__media-wrapper" };
  const _hoisted_2$d = { class: "znpb-element-styles__mediaInner" };
  const _hoisted_3$b = {
    key: 0,
    class: "znpb-element-styles__mediaActiveClasses"
  };
  const _hoisted_4$8 = ["onClick"];
  const _sfc_main$h = /* @__PURE__ */ Vue.defineComponent({
    __name: "SelectorAndPseudo",
    props: {
      element: {},
      activeStyleElementId: {},
      activeGlobalClass: {}
    },
    emits: ["update:active-global-class"],
    setup(__props, { emit }) {
      const props = __props;
      const cssClasses = useCSSClassesStore();
      const computedActiveGlobalClass = Vue.computed({
        get() {
          return props.activeGlobalClass;
        },
        set(newValue) {
          emit("update:active-global-class", newValue);
        }
      });
      const computedClasses = Vue.computed({
        get() {
          return props.element.getOptionValue(`_styles.${props.activeStyleElementId}.classes`, []);
        },
        set(newValue) {
          props.element.updateOptionValue(`_styles.${props.activeStyleElementId}.classes`, newValue);
        }
      });
      const computedAssignedClasses = Vue.computed(() => {
        const assignedClasses = [];
        computedClasses.value.forEach((cssClass) => {
          const classConfig = cssClasses.getClassConfig(cssClass);
          if (classConfig) {
            assignedClasses.push({
              type: "class",
              selector: classConfig.id,
              uid: classConfig.uid,
              onRemove: () => {
                onRemoveClass(classConfig.uid);
              }
            });
          }
        });
        computedStaticClasses.value.forEach((cssClass) => {
          assignedClasses.push({
            type: "static_class",
            selector: cssClass,
            uid: cssClass,
            onRemove: () => {
              removeStaticClass(cssClass);
            }
          });
        });
        return assignedClasses;
      });
      const computedStaticClasses = Vue.computed({
        get() {
          return props.element.getOptionValue(`_styles.${props.activeStyleElementId}.static_classes`, []);
        },
        set(newValue) {
          props.element.updateOptionValue(`_styles.${props.activeStyleElementId}.static_classes`, newValue);
        }
      });
      function toggleClass(cssClass) {
        if (computedActiveGlobalClass.value === cssClass) {
          computedActiveGlobalClass.value = null;
        } else {
          computedActiveGlobalClass.value = cssClass;
        }
      }
      function onRemoveClass(cssClass) {
        const existingClasses = [...computedClasses.value];
        let classIndex = existingClasses.indexOf(cssClass);
        if (classIndex === -1) {
          const classConfig = cssClasses.getClassConfig(cssClass);
          if (classConfig) {
            classIndex = existingClasses.indexOf(classConfig.id);
          }
        }
        if (classIndex === -1) {
          return;
        }
        existingClasses.splice(classIndex, 1);
        if (computedActiveGlobalClass.value === cssClass) {
          computedActiveGlobalClass.value = null;
        }
        computedClasses.value = existingClasses;
      }
      function removeStaticClass(cssClass) {
        const existingClasses = [...computedStaticClasses.value];
        const classIndex = existingClasses.indexOf(cssClass);
        if (classIndex === -1) {
          return;
        }
        existingClasses.splice(classIndex, 1);
        computedStaticClasses.value = existingClasses;
      }
      const allowClassAssignment = Vue.computed(() => {
        return props.element.elementDefinition.style_elements[props.activeStyleElementId].allow_class_assignment;
      });
      const computedStyles = Vue.computed({
        get() {
          if (computedActiveGlobalClass.value) {
            const activeClassConfig = cssClasses.getClassConfig(computedActiveGlobalClass.value);
            if (activeClassConfig) {
              return activeClassConfig.styles;
            }
            console.warn(`Class with id ${computedActiveGlobalClass.value} not found`);
            return {};
          } else {
            return props.element.getOptionValue(`_styles.${props.activeStyleElementId}.styles`, {});
          }
        },
        set(newValue) {
          if (computedActiveGlobalClass.value) {
            const activeClassConfig = cssClasses.getClassConfig(computedActiveGlobalClass.value);
            if (activeClassConfig) {
              activeClassConfig.styles = newValue;
            }
          } else {
            props.element.updateOptionValue(`_styles.${props.activeStyleElementId}.styles`, newValue);
          }
        }
      });
      const computedTitle = Vue.computed(() => {
        if (computedActiveGlobalClass.value) {
          const activeClassConfig = cssClasses.getClassConfig(computedActiveGlobalClass.value);
          if (activeClassConfig) {
            return activeClassConfig.name;
          }
          console.warn(`Class with id ${computedActiveGlobalClass.value} not found`);
          return "";
        } else {
          return props.element.elementDefinition.style_elements[props.activeStyleElementId].title;
        }
      });
      function onAddClass(cssClass) {
        if (computedClasses.value.includes(cssClass)) {
          computedActiveGlobalClass.value = cssClass;
          return;
        } else {
          const existingClasses = [...computedClasses.value];
          existingClasses.push(cssClass);
          computedClasses.value = existingClasses;
          computedActiveGlobalClass.value = cssClass;
        }
      }
      function onAddStaticClass(cssClass) {
        if (computedStaticClasses.value.includes(cssClass)) {
          return;
        } else {
          const existingClasses = [...computedStaticClasses.value];
          existingClasses.push(cssClass);
          computedStaticClasses.value = existingClasses;
        }
      }
      function onPasteStyles() {
        const copiedStyles = cssClasses.copiedStyles;
        if (copiedStyles) {
          computedStyles.value = merge$1(computedStyles.value || {}, copiedStyles);
        }
      }
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _directive_znpb_tooltip = Vue.resolveDirective("znpb-tooltip");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$f, [
          Vue.createElementVNode("div", _hoisted_2$d, [
            Vue.createVNode(_sfc_main$i, {
              "active-global-class": computedActiveGlobalClass.value,
              "onUpdate:activeGlobalClass": _cache[0] || (_cache[0] = ($event) => computedActiveGlobalClass.value = $event),
              name: computedTitle.value,
              element: _ctx.element,
              "allow-class-assignment": allowClassAssignment.value,
              "assigned-classes": computedClasses.value,
              "assigned-static-classes": computedStaticClasses.value,
              "active-style-element-id": _ctx.activeStyleElementId,
              onAddClass,
              onRemoveClass,
              onRemoveStaticClass: removeStaticClass,
              onPasteStyles,
              onAddStaticClass
            }, null, 8, ["active-global-class", "name", "element", "allow-class-assignment", "assigned-classes", "assigned-static-classes", "active-style-element-id"]),
            Vue.createVNode(_sfc_main$1q, {
              modelValue: computedStyles.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => computedStyles.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          computedClasses.value.length || computedStaticClasses.value.length ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_3$b, [
            (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(computedAssignedClasses.value, (cssClass) => {
              return Vue.openBlock(), Vue.createElementBlock("span", {
                key: cssClass.selector,
                class: Vue.normalizeClass(["znpb-element-styles__mediaActiveClass", {
                  "znpb-element-styles__mediaActiveClass--active": cssClass.uid === computedActiveGlobalClass.value,
                  "znpb-element-styles__mediaActiveClass--static": cssClass.type === "static_class"
                }]),
                onClick: Vue.withModifiers(($event) => cssClass.type !== "static_class" && toggleClass(cssClass.uid), ["prevent"])
              }, [
                Vue.createTextVNode(" ." + Vue.toDisplayString(cssClass.selector) + " ", 1),
                Vue.withDirectives(Vue.createVNode(_component_Icon, {
                  class: "znpb-element-styles__mediaActiveClassRemove",
                  icon: "close",
                  onClick: Vue.withModifiers(($event) => cssClass.onRemove(cssClass.uid), ["stop", "prevent"])
                }, null, 8, ["onClick"]), [
                  [_directive_znpb_tooltip, i18n__namespace.__("Remove class", "zionbuilder")]
                ])
              ], 10, _hoisted_4$8);
            }), 128))
          ])) : Vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const SelectorAndPseudo_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$e = { class: "znpb-element-options__header" };
  const _hoisted_2$c = {
    key: 1,
    class: "znpb-panelElementOptionsGlobalClassForm"
  };
  const _hoisted_3$a = { class: "znpb-classEditBackName" };
  const _hoisted_4$7 = { class: "znpb-element-options-content-wrapper" };
  const _hoisted_5$6 = {
    key: 1,
    class: "znpb-element-options-no-option-message"
  };
  const _hoisted_6$6 = ["onClick"];
  const _hoisted_7$6 = {
    key: 0,
    class: "znpb-element-options-default-message"
  };
  const _hoisted_8$6 = {
    key: 1,
    class: "znpb-element-options-no-option-message"
  };
  const _sfc_main$g = /* @__PURE__ */ Vue.defineComponent({
    __name: "PanelElementOptions",
    props: {
      panel: {}
    },
    setup(__props) {
      const props = __props;
      const { useOptionsSchemas: useOptionsSchemas2 } = window.zb.composables;
      const { addAction: addAction2, removeAction: removeAction2 } = window.zb.hooks;
      const UIStore = useUIStore();
      const contentStore = useContentStore();
      const UserStore = useUserStore();
      const isPanelHidden = Vue.ref(false);
      const searchInput = Vue.ref(null);
      const showBreadcrumbs = Vue.ref(false);
      const lastTab = Vue.ref(null);
      const defaultMessage = Vue.ref(
        i18n__namespace.__("Start typing in the search field and the found options will appear here", "zionbuilder")
      );
      const { provideElement } = useElementProvide();
      const { getSchema } = useOptionsSchemas2();
      const activeKeyTab = Vue.ref(null);
      const searchActive = Vue.ref(false);
      const optionsFilterKeyword = Vue.ref("");
      const panelStyles = Vue.computed(() => {
        return {
          "--optionsPanelWidth": `-${props.panel.width}px`
        };
      });
      const elementOptions = Vue.computed({
        get() {
          return UIStore.editedElement ? UIStore.editedElement.options : {};
        },
        set(newValues2) {
          if (UIStore.editedElement) {
            window.zb.run("editor/elements/update-element-options", {
              elementUID: UIStore.editedElement.uid,
              newValues: newValues2 === null ? {} : newValues2
            });
          }
        }
      });
      const advancedOptionsModel = Vue.computed({
        get() {
          return elementOptions.value._advanced_options || {};
        },
        set(newValues2) {
          if (newValues2 === null) {
            const oldValues = __spreadValues({}, elementOptions.value);
            delete oldValues._advanced_options;
            elementOptions.value = oldValues;
          } else {
            elementOptions.value = __spreadProps(__spreadValues({}, elementOptions.value), {
              _advanced_options: newValues2
            });
          }
        }
      });
      const searchIcon = Vue.computed(() => {
        return searchActive.value ? "close" : "search";
      });
      provideElement(UIStore.editedElement);
      Vue.provide(
        "elementInfo",
        Vue.computed(() => UIStore.editedElement)
      );
      Vue.provide("OptionsFormTopModelValue", elementOptions);
      const computedStyleOptionsSchema = Vue.computed(() => {
        const schema = {};
        const styledElements = UIStore.editedElement.elementDefinition.style_elements;
        const elementHTMLID = UIStore.editedElement.elementCssId;
        Object.keys(styledElements).forEach((styleId) => {
          const config = styledElements[styleId];
          schema[styleId] = {
            type: "css_selector",
            name: config.title,
            icon: "brush",
            allow_class_assignments: typeof config.allow_class_assignments !== "undefined" ? config.allow_class_assignments : true,
            selector: config.selector.replace("{{ELEMENT}}", `#${elementHTMLID}`),
            allow_delete: false,
            show_breadcrumbs: true,
            allow_custom_attributes: typeof config.allow_custom_attributes === "undefined" || config.allow_custom_attributes === true,
            allowRename: false,
            elementStyleId: styleId
          };
        });
        return {
          _styles: {
            id: "styles",
            child_options: schema,
            optionsLayout: "full",
            type: "group"
          }
        };
      });
      const allOptionsSchema = Vue.computed(() => {
        var _a;
        const elementOptionsSchema = ((_a = UIStore.editedElement) == null ? void 0 : _a.elementDefinition.options) ? UIStore.editedElement.elementDefinition.options : {};
        const optionsSchema = __spreadValues(__spreadValues(__spreadValues({}, elementOptionsSchema), computedStyleOptionsSchema.value), getSchema("element_advanced"));
        return optionsSchema;
      });
      const computedStyleOptions = Vue.computed({
        get() {
          return elementOptions.value || {};
        },
        set(newValue) {
          if (newValue === null) {
            const oldValues = __spreadValues({}, elementOptions.value);
            delete oldValues._styles;
            elementOptions.value = oldValues;
          } else {
            elementOptions.value = newValue;
          }
        }
      });
      const filteredOptions = Vue.computed(() => {
        const keyword = optionsFilterKeyword.value;
        if (keyword.length > 2) {
          return filterOptions(keyword, allOptionsSchema.value);
        }
        return {};
      });
      Vue.watch(searchActive, (newValue) => {
        if (newValue) {
          Vue.nextTick(() => {
            if (searchInput.value) {
              searchInput.value.focus();
            }
          });
        }
      });
      addAction2("change-tab-styling", changeTabByEvent());
      Vue.onBeforeUnmount(() => {
        removeAction2("change-tab-styling", changeTab());
      });
      const optionsReplacements = [
        {
          search: /%%ELEMENT_TYPE%%/g,
          replacement: () => {
            var _a;
            const elementsDefinitionsStore = useElementDefinitionsStore();
            return elementsDefinitionsStore.getElementDefinition((_a = UIStore.editedElement) == null ? void 0 : _a.element_type).name;
          }
        },
        {
          search: /%%ELEMENT_UID%%/g,
          replacement: () => {
            return UIStore.editedElement.elementCssId;
          }
        }
      ];
      function onBackButtonClick() {
        if (UIStore.editedElement.parent && UIStore.editedElement.parent.elementDefinition.element_type !== "contentRoot") {
          UIStore.editElement(UIStore.editedElement.parent);
        }
      }
      function changeTabByEvent(event) {
        if (event !== void 0) {
          if (tabId !== "search") {
            lastTab.value = activeKeyTab.value;
            optionsFilterKeyword.value = "";
          }
          activeKeyTab.value.value = event.detail;
        }
      }
      function filterOptions(keyword, optionsSchema, currentId, currentName) {
        const lowercaseKeyword = keyword.toLowerCase();
        let foundOptions = {};
        Object.keys(optionsSchema).forEach((optionId) => {
          const optionConfig = optionsSchema[optionId];
          const syncValue = [];
          const syncValueName = [];
          if (!optionConfig.sync) {
            if (currentId) {
              syncValue.push(...currentId);
            }
            if (currentName) {
              const name = getInnerStyleName(currentName[currentName.length - 1]);
              currentName[currentName.length - 1] = name;
              syncValueName.push(...currentName);
            }
            if (optionId === "animation-group" || optionId === "custom-css-group" || optionId === "general-group") {
              syncValueName.push(i18n__namespace.__("Advanced", "zionbuilder"));
            }
            if (!optionConfig.is_layout) {
              syncValue.push(optionId);
            }
            if (optionConfig.type === "element_styles" || optionConfig.type === "css_selector") {
              syncValue.push("styles");
              syncValueName.push(i18n__namespace.__("Styles", "zionbuilder"), optionConfig.name);
            }
            if (optionConfig.type === "responsive_group") {
              syncValue.push("%%RESPONSIVE_DEVICE%%");
            }
            if (optionConfig.type === "pseudo_group") {
              syncValue.push("%%PSEUDO_SELECTOR%%");
            }
            syncValueName.push(optionId);
          }
          const searchOptions = optionConfig.search_tags ? [...optionConfig.search_tags] : [];
          if (optionConfig.title) {
            searchOptions.push(optionConfig.title);
          }
          if (optionConfig.id) {
            searchOptions.push(optionConfig.id);
          }
          if (optionConfig.description) {
            searchOptions.push(optionConfig.description);
          }
          if (optionConfig.label) {
            searchOptions.push(optionConfig.label);
          }
          if (optionConfig.type !== "accordion_menu" && optionConfig.type !== "element_styles") {
            if (searchOptions.join(" ").toLowerCase().indexOf(lowercaseKeyword) !== -1) {
              let filteredBreadcrumbs = [];
              if (currentName) {
                filteredBreadcrumbs = currentName.filter(function(value) {
                  return value !== void 0;
                });
              }
              foundOptions[syncValue.join(".")] = __spreadProps(__spreadValues({}, optionConfig), {
                id: syncValue.join("."),
                sync: optionConfig.sync || syncValue.join("."),
                breadcrumbs: filteredBreadcrumbs
              });
            }
          }
          if (optionConfig.type === "repeater") {
            return;
          }
          if (optionConfig.type === "element_styles" || optionConfig.type === "css_selector") {
            const childOptions = filterOptions(keyword, getSchema("element_styles"), syncValue, syncValueName);
            foundOptions = __spreadValues(__spreadValues({}, foundOptions), childOptions);
          }
          if (optionConfig.child_options && Object.keys(optionConfig.child_options).length > 0) {
            const childOptions = filterOptions(keyword, optionConfig.child_options, syncValue, syncValueName);
            foundOptions = __spreadValues(__spreadValues({}, foundOptions), childOptions);
          }
        });
        return foundOptions;
      }
      function getInnerStyleName(id) {
        if (id === "pseudo_selectors") {
          return void 0;
        }
        return computedStyleOptionsSchema.value._styles.child_options[id] !== void 0 ? computedStyleOptionsSchema.value._styles.child_options[id].title : allOptionsSchema.value[id] !== void 0 ? allOptionsSchema.value[id].title : void 0;
      }
      function toggleSearchIcon() {
        searchActive.value = !searchActive.value;
        if (!searchActive.value) {
          changeTab("general");
        } else {
          changeTab("search");
        }
        optionsFilterKeyword.value = "";
      }
      function changeTab(tabId2) {
        activeKeyTab.value = tabId2;
        if (tabId2 !== "search") {
          lastTab.value = activeKeyTab.value;
          optionsFilterKeyword.value = "";
        }
      }
      function closeOptionsPanel() {
        UIStore.closePanel(props.panel.id);
        UIStore.unEditElement();
      }
      const cssClasses = useCSSClassesStore();
      const activeStyleElementId = Vue.ref("wrapper");
      const activeGlobalClass = Vue.ref(null);
      Vue.provide("ElementOptionsPanelAPI", {
        setActiveStyleElementId: (id) => {
          activeStyleElementId.value = id;
        },
        resetActiveSelectorConfig: () => {
          activeStyleElementId.value = "wrapper";
        }
      });
      const activeClassStyles = Vue.computed({
        get() {
          return cssClasses.getClassConfig(activeGlobalClass.value);
        },
        set(newValue) {
          cssClasses.updateCSSClass(activeGlobalClass.value, newValue);
        }
      });
      const activeClassSchema = Vue.computed(() => {
        return {
          globalClass: {
            type: "element_styles",
            allow_class_assignments: false,
            is_layout: true
          }
        };
      });
      Vue.watch(
        () => UIStore.editedElement,
        () => {
          activeStyleElementId.value = "wrapper";
          activeGlobalClass.value = null;
        }
      );
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_OptionsForm = Vue.resolveComponent("OptionsForm");
        const _component_Tab = Vue.resolveComponent("Tab");
        const _component_BaseInput = Vue.resolveComponent("BaseInput");
        const _component_Tabs = Vue.resolveComponent("Tabs");
        return Vue.unref(UIStore).editedElement ? (Vue.openBlock(), Vue.createBlock(_sfc_main$B, {
          key: 0,
          class: Vue.normalizeClass(["znpb-element-options__panel-wrapper", {
            "znpb-element-options__panel-wrapper--hidden": isPanelHidden.value
          }]),
          "panel-id": _ctx.panel.id,
          "show-expand": false,
          "allow-horizontal-resize": !isPanelHidden.value,
          "allow-vertical-resize": !isPanelHidden.value,
          panel: _ctx.panel,
          style: Vue.normalizeStyle(panelStyles.value),
          onClosePanel: closeOptionsPanel
        }, {
          "before-header": Vue.withCtx(() => [
            Vue.createElementVNode("div", {
              class: "znpb-element-options__hide",
              onClick: _cache[0] || (_cache[0] = Vue.withModifiers(($event) => isPanelHidden.value = !isPanelHidden.value, ["stop"]))
            }, [
              Vue.createVNode(_component_Icon, {
                icon: "select",
                class: Vue.normalizeClass(["znpb-element-options__hideIcon", {
                  "znpb-element-options__hide--hidden": isPanelHidden.value
                }])
              }, null, 8, ["class"])
            ])
          ]),
          header: Vue.withCtx(() => {
            var _a;
            return [
              Vue.createElementVNode("div", _hoisted_1$e, [
                ((_a = Vue.unref(UIStore).editedElement) == null ? void 0 : _a.elementDefinition.is_child) ? (Vue.openBlock(), Vue.createElementBlock("div", {
                  key: 0,
                  class: "znpb-element-options__header-back",
                  onClick: onBackButtonClick
                }, [
                  Vue.createVNode(_component_Icon, {
                    class: "znpb-element-options__header-back-icon",
                    icon: "select"
                  })
                ])) : Vue.createCommentVNode("", true),
                Vue.createElementVNode("h4", {
                  class: "znpb-panel__header-name",
                  onClick: onBackButtonClick,
                  onMouseenter: _cache[1] || (_cache[1] = ($event) => showBreadcrumbs.value = true),
                  onMouseleave: _cache[2] || (_cache[2] = ($event) => showBreadcrumbs.value = false)
                }, [
                  Vue.createTextVNode(Vue.toDisplayString(`${Vue.unref(contentStore).getElementName(Vue.unref(UIStore).editedElement)} ${i18n__namespace.__("Options", "zionbuilder")}`) + " ", 1),
                  Vue.createVNode(_component_Icon, { icon: "select" }),
                  showBreadcrumbs.value ? (Vue.openBlock(), Vue.createBlock(_sfc_main$k, {
                    key: 0,
                    element: Vue.unref(UIStore).editedElement
                  }, null, 8, ["element"])) : Vue.createCommentVNode("", true)
                ], 32)
              ])
            ];
          }),
          default: Vue.withCtx(() => [
            Vue.unref(UserStore).userCanEditContent ? (Vue.openBlock(), Vue.createBlock(_sfc_main$h, {
              key: 0,
              activeGlobalClass: activeGlobalClass.value,
              "onUpdate:activeGlobalClass": _cache[3] || (_cache[3] = ($event) => activeGlobalClass.value = $event),
              element: Vue.unref(UIStore).editedElement,
              "active-style-element-id": activeStyleElementId.value
            }, null, 8, ["activeGlobalClass", "element", "active-style-element-id"])) : Vue.createCommentVNode("", true),
            activeGlobalClass.value && Vue.unref(UserStore).userCanEditContent ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_2$c, [
              Vue.createElementVNode("div", {
                class: "znpb-options-breadcrumbs",
                onClick: _cache[4] || (_cache[4] = ($event) => activeGlobalClass.value = null)
              }, [
                Vue.createVNode(_component_Icon, {
                  class: "znpb-back-icon-breadcrumbs",
                  icon: "select"
                }),
                Vue.createElementVNode("span", _hoisted_3$a, Vue.toDisplayString(i18n__namespace.__("Back to", "zionbuilder")) + " " + Vue.toDisplayString(Vue.unref(UIStore).editedElement.name), 1)
              ]),
              Vue.createVNode(_component_OptionsForm, {
                modelValue: activeClassStyles.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => activeClassStyles.value = $event),
                class: "znpb-fancy-scrollbar",
                schema: activeClassSchema.value
              }, null, 8, ["modelValue", "schema"])
            ])) : Vue.createCommentVNode("", true),
            Vue.withDirectives(Vue.createElementVNode("div", _hoisted_4$7, [
              Vue.createVNode(_component_Tabs, {
                activeTab: activeKeyTab.value,
                "onUpdate:activeTab": _cache[11] || (_cache[11] = ($event) => activeKeyTab.value = $event),
                "has-scroll": ["general", "advanced"],
                class: "znpb-element-options__tabs-wrapper"
              }, {
                default: Vue.withCtx(() => [
                  Vue.createVNode(_component_Tab, {
                    name: i18n__namespace.__("General", "zionbuilder")
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.unref(UIStore).editedElement.elementDefinition.options && Object.keys(Vue.unref(UIStore).editedElement.elementDefinition.options).length > 0 ? (Vue.openBlock(), Vue.createBlock(_component_OptionsForm, {
                        key: 0,
                        modelValue: elementOptions.value,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => elementOptions.value = $event),
                        class: "znpb-element-options-content-form znpb-fancy-scrollbar",
                        schema: Vue.unref(UIStore).editedElement.elementDefinition.options,
                        replacements: optionsReplacements,
                        "enable-dynamic-data": true
                      }, null, 8, ["modelValue", "schema"])) : (Vue.openBlock(), Vue.createElementBlock("p", _hoisted_5$6, Vue.toDisplayString(i18n__namespace.__("Element has no specific options", "zionbuilder")), 1))
                    ]),
                    _: 1
                  }, 8, ["name"]),
                  Vue.unref(UserStore).userCanEditContent ? (Vue.openBlock(), Vue.createBlock(_component_Tab, {
                    key: 0,
                    name: i18n__namespace.__("Styling", "zionbuilder")
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(_component_OptionsForm, {
                        modelValue: computedStyleOptions.value,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => computedStyleOptions.value = $event),
                        class: "znpb-fancy-scrollbar",
                        schema: computedStyleOptionsSchema.value,
                        replacements: optionsReplacements
                      }, null, 8, ["modelValue", "schema"])
                    ]),
                    _: 1
                  }, 8, ["name"])) : Vue.createCommentVNode("", true),
                  Vue.unref(UserStore).userCanEditContent ? (Vue.openBlock(), Vue.createBlock(_component_Tab, {
                    key: 1,
                    name: i18n__namespace.__("Advanced", "zionbuilder")
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(_component_OptionsForm, {
                        modelValue: advancedOptionsModel.value,
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => advancedOptionsModel.value = $event),
                        class: "znpb-element-options-content-form znpb-fancy-scrollbar",
                        schema: Vue.unref(getSchema)("element_advanced"),
                        replacements: optionsReplacements,
                        "enable-dynamic-data": true
                      }, null, 8, ["modelValue", "schema"])
                    ]),
                    _: 1
                  }, 8, ["name"])) : Vue.createCommentVNode("", true),
                  Vue.unref(UserStore).userCanEditContent ? (Vue.openBlock(), Vue.createBlock(_component_Tab, {
                    key: 2,
                    name: i18n__namespace.__("Search", "zionbuilder")
                  }, {
                    title: Vue.withCtx(() => [
                      Vue.createElementVNode("div", {
                        class: "znpb-element-options__search-tab-title",
                        onClick: Vue.withModifiers(toggleSearchIcon, ["stop"])
                      }, [
                        Vue.createVNode(_component_Icon, { icon: searchIcon.value }, null, 8, ["icon"])
                      ], 8, _hoisted_6$6),
                      searchActive.value ? (Vue.openBlock(), Vue.createBlock(_component_BaseInput, {
                        key: 0,
                        ref_key: "searchInput",
                        ref: searchInput,
                        modelValue: optionsFilterKeyword.value,
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => optionsFilterKeyword.value = $event),
                        filterable: true,
                        placeholder: i18n__namespace.__("Search option", "zionbuilder"),
                        class: "znpb-tabs__header-item-search-options"
                      }, null, 8, ["modelValue", "placeholder"])) : Vue.createCommentVNode("", true)
                    ]),
                    default: Vue.withCtx(() => [
                      optionsFilterKeyword.value.length > 2 && Object.keys(filteredOptions.value).length === 0 ? (Vue.openBlock(), Vue.createElementBlock("p", _hoisted_7$6, Vue.toDisplayString(i18n__namespace.__("No options found", "zionbuilder")), 1)) : Vue.createCommentVNode("", true),
                      optionsFilterKeyword.value.length < 3 ? (Vue.openBlock(), Vue.createElementBlock("p", _hoisted_8$6, Vue.toDisplayString(defaultMessage.value), 1)) : Vue.createCommentVNode("", true),
                      Vue.createVNode(_component_OptionsForm, {
                        modelValue: elementOptions.value,
                        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => elementOptions.value = $event),
                        class: "znpb-element-options-content-form znpb-fancy-scrollbar",
                        schema: filteredOptions.value
                      }, null, 8, ["modelValue", "schema"])
                    ]),
                    _: 1
                  }, 8, ["name"])) : Vue.createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["activeTab"])
            ], 512), [
              [Vue.vShow, !activeGlobalClass.value]
            ])
          ]),
          _: 1
        }, 8, ["class", "panel-id", "allow-horizontal-resize", "allow-vertical-resize", "panel", "style"])) : Vue.createCommentVNode("", true);
      };
    }
  });
  const PanelElementOptions_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$d = ["innerHTML"];
  const _hoisted_2$b = {
    key: 0,
    class: "znpb-editor-library-modal-category__number"
  };
  const _sfc_main$f = /* @__PURE__ */ Vue.defineComponent({
    __name: "CategoriesLibraryItem",
    props: {
      category: {},
      isActive: { type: Boolean },
      showCount: { type: Boolean },
      onCategoryActivate: { type: Function }
    },
    setup(__props) {
      const props = __props;
      const hasSubcategories = Vue.computed(() => {
        return props.category.subcategories && props.category.subcategories.length > 0;
      });
      const activeDropdown = Vue.ref(props.isActive);
      Vue.watch(
        () => props.isActive,
        (newValue) => {
          activeDropdown.value = newValue;
        }
      );
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        return Vue.openBlock(), Vue.createElementBlock("li", {
          class: Vue.normalizeClass(["znpb-editor-library-modal-category__item", { "znpb-editor-library-modal-category__item--active": _ctx.category.isActive }])
        }, [
          Vue.createElementVNode("div", {
            class: "znpb-editor-library-modal-category__header",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.onCategoryActivate(_ctx.category))
          }, [
            Vue.createElementVNode("h6", {
              class: "znpb-editor-library-modal-category__title",
              innerHTML: _ctx.category.name
            }, null, 8, _hoisted_1$d),
            _ctx.showCount ? (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_2$b, Vue.toDisplayString(_ctx.category.count), 1)) : Vue.createCommentVNode("", true),
            hasSubcategories.value ? (Vue.openBlock(), Vue.createBlock(_component_Icon, {
              key: 1,
              icon: "select",
              rotate: activeDropdown.value ? "180" : "0",
              class: "znpb-editor-library-modal-category__header-icon",
              onClick: _cache[0] || (_cache[0] = Vue.withModifiers(($event) => activeDropdown.value = !activeDropdown.value, ["stop"]))
            }, null, 8, ["rotate"])) : Vue.createCommentVNode("", true)
          ]),
          hasSubcategories.value && activeDropdown.value ? (Vue.openBlock(), Vue.createBlock(_sfc_main$e, {
            key: 0,
            categories: _ctx.category.subcategories,
            "on-category-activate": _ctx.onCategoryActivate
          }, null, 8, ["categories", "on-category-activate"])) : Vue.createCommentVNode("", true)
        ], 2);
      };
    }
  });
  const CategoriesLibraryItem_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$c = { class: "znpb-editor-library-modal-category-list znpb-fancy-scrollbar" };
  const _sfc_main$e = /* @__PURE__ */ Vue.defineComponent({
    __name: "CategoriesLibrary",
    props: {
      categories: {},
      onCategoryActivate: { type: Function }
    },
    setup(__props) {
      const props = __props;
      function activateCategory(category) {
        props.onCategoryActivate(category);
      }
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("ul", _hoisted_1$c, [
          (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.categories, (category) => {
            return Vue.openBlock(), Vue.createBlock(_sfc_main$f, {
              key: category.term_id,
              category,
              "is-active": category.isActive,
              "on-category-activate": _ctx.onCategoryActivate,
              onActivateSubcategory: activateCategory
            }, null, 8, ["category", "is-active", "on-category-activate"]);
          }), 128))
        ]);
      };
    }
  });
  const CategoriesLibrary_vue_vue_type_style_index_0_lang = "";
  let queue = [];
  let processing = false;
  const failTime = 1e4;
  function useThumbnailGeneration() {
    function generateScreenshot(item) {
      item.loadingThumbnail = true;
      addToQueue(item);
      if (processing) {
        return;
      }
      processing = true;
      let iframe = generateIframe(item);
      iframe.contentWindow.addEventListener("message", onMessageReceived);
      const failTimeout = setTimeout(() => {
        finish(item);
      }, failTime);
      function onMessageReceived(event) {
        if (event.data && event.data.type === "zionbuilder-screenshot") {
          const { success, thumbnail } = event.data;
          if (success) {
            item.thumbnail = thumbnail;
          } else {
            item.thumbnail_load_failed = true;
          }
          item.saveThumbnailData(event.data);
          finish(item);
        }
      }
      function finish(item2) {
        item2.loadingThumbnail = false;
        iframe.contentWindow.removeEventListener("message", onMessageReceived);
        iframe.parentNode.removeChild(iframe);
        iframe = null;
        processing = false;
        clearTimeout(failTimeout);
        removeFromQueue(item2);
        if (typeof queue[0] !== "undefined") {
          generateScreenshot(queue[0]);
        }
      }
    }
    function addToQueue(item) {
      const itemIndex = queue.indexOf(item);
      if (itemIndex === -1) {
        queue.push(item);
      }
    }
    function removeFromQueue(item) {
      const itemIndex = queue.indexOf(item);
      if (itemIndex !== -1) {
        queue.splice(itemIndex, 1);
      }
    }
    function generateIframe(item) {
      const iframeElement = document.createElement("iframe");
      iframeElement.src = item.urls.screenshot_generation_url;
      iframeElement.width = 1920;
      iframeElement.height = 1080;
      iframeElement.style = "visibility: hidden;";
      document.body.appendChild(iframeElement);
      return iframeElement;
    }
    return {
      generateScreenshot,
      removeFromQueue
    };
  }
  const _hoisted_1$b = { class: "znpb-editor-library-modal__itemInner" };
  const _hoisted_2$a = ["data-zbg"];
  const _hoisted_3$9 = {
    key: 0,
    class: "znpb-editor-library-modal__item-pro"
  };
  const _hoisted_4$6 = { class: "znpb-editor-library-modal__item-bottom" };
  const _hoisted_5$5 = ["title"];
  const _hoisted_6$5 = {
    key: 0,
    class: "znpb-editor-library-modal__item-actions"
  };
  const _hoisted_7$5 = ["href"];
  const _hoisted_8$5 = ["onClick"];
  const _hoisted_9$4 = {
    key: 1,
    class: "znpb-editor-library-modal__item-bottom-multiple"
  };
  const _sfc_main$d = /* @__PURE__ */ Vue.defineComponent({
    __name: "LibraryItem",
    props: {
      item: {},
      favorite: { type: Boolean, default: false },
      inView: { type: Boolean, default: false }
    },
    emits: ["activate-item"],
    setup(__props, { emit }) {
      const props = __props;
      const Library = Vue.inject("Library");
      const EnvironmentStore = store.useEnvironmentStore();
      const insertItemLoading = Vue.ref(false);
      const imageHolderRef = Vue.ref(null);
      const root2 = Vue.ref(null);
      const dashboardURL = `${EnvironmentStore.urls.zion_dashboard}#/pro-license`;
      const iObserver = new IntersectionObserver(onItemInView);
      const image = Vue.computed(() => {
        return props.item.thumbnail;
      });
      if (props.item.librarySource.type === "local" && props.item.thumbnail.length === 0 && !props.item.thumbnail_failed) {
        const { generateScreenshot, removeFromQueue } = useThumbnailGeneration();
        generateScreenshot(props.item);
        Vue.onBeforeUnmount(() => {
          removeFromQueue(props.item);
        });
      }
      function onItemInView(entries) {
        entries.forEach(({ isIntersecting }) => {
          if (!isIntersecting) {
            return;
          }
          if (props.item.thumbnail && imageHolderRef.value) {
            imageHolderRef.value.src = imageHolderRef.value.getAttribute("data-zbg") || "";
          }
          if (root2.value) {
            iObserver.unobserve(root2.value);
          }
        });
      }
      Vue.watch(
        () => props.item.thumbnail,
        () => {
          if (root2.value) {
            iObserver.observe(root2.value);
          }
        }
      );
      Vue.onMounted(() => {
        if (root2.value) {
          iObserver.observe(root2.value);
        }
      });
      Vue.onBeforeUnmount(() => {
        if (root2.value) {
          iObserver.unobserve(root2.value);
        }
      });
      const itemMenuActions = Vue.computed(() => {
        if (!(props.item.librarySource.id === "local_library")) {
          return [];
        }
        return [
          {
            title: i18n__namespace.__("Edit template", "zionbuilder"),
            action: () => {
              var _a;
              return (_a = window.open(props.item.urls.edit_url, "_blank")) == null ? void 0 : _a.focus();
            },
            icon: "edit"
          },
          {
            title: i18n__namespace.__("Export template", "zionbuilder"),
            action: () => {
              props.item.export();
            },
            icon: "export"
          },
          {
            title: i18n__namespace.__("Regenerate screenshot", "zionbuilder"),
            action: () => {
              const { generateScreenshot } = useThumbnailGeneration();
              generateScreenshot(props.item);
            },
            icon: "export"
          },
          {
            title: i18n__namespace.__("Delete template", "zionbuilder"),
            action: () => {
              props.item.delete();
            },
            icon: "delete"
          }
        ];
      });
      function onMouseOver(event) {
        const element = event.target;
        const { height } = element.getBoundingClientRect();
        if (height > 200) {
          const newTop = height - 200;
          element.style.top = `-${newTop}px`;
        }
      }
      function onMouseOut(event) {
        const element = event.target;
        element.style.removeProperty("top");
      }
      function insertLibraryItem() {
        insertItemLoading.value = true;
        Library.insertItem(props.item).finally(() => {
          insertItemLoading.value = false;
        });
      }
      return (_ctx, _cache) => {
        const _component_Loader = Vue.resolveComponent("Loader");
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_HiddenMenu = Vue.resolveComponent("HiddenMenu");
        const _directive_znpb_tooltip = Vue.resolveDirective("znpb-tooltip");
        return Vue.openBlock(), Vue.createElementBlock("li", {
          ref_key: "root",
          ref: root2,
          class: Vue.normalizeClass(["znpb-editor-library-modal__item", { "znpb-editor-library-modal__item--favorite": _ctx.favorite }])
        }, [
          Vue.createElementVNode("div", _hoisted_1$b, [
            Vue.createElementVNode("div", {
              class: Vue.normalizeClass(["znpb-editor-library-modal__item-image", { ["--no-image"]: !_ctx.item.thumbnail && !_ctx.item.loadingThumbnail }]),
              onClick: _cache[0] || (_cache[0] = ($event) => emit("activate-item", _ctx.item))
            }, [
              _ctx.item.loadingThumbnail ? (Vue.openBlock(), Vue.createBlock(_component_Loader, { key: 0 })) : _ctx.item.thumbnail ? (Vue.openBlock(), Vue.createElementBlock("img", {
                key: 1,
                ref_key: "imageHolderRef",
                ref: imageHolderRef,
                class: "znpb-editor-library-modal__item-imageTag",
                src: "",
                "data-zbg": image.value,
                onMouseover: onMouseOver,
                onMouseout: onMouseOut
              }, null, 40, _hoisted_2$a)) : Vue.createCommentVNode("", true)
            ], 2),
            _ctx.item.pro ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_3$9, Vue.toDisplayString(i18n__namespace.__("pro", "zionbuilder")), 1)) : Vue.createCommentVNode("", true),
            Vue.createElementVNode("div", _hoisted_4$6, [
              Vue.createElementVNode("h4", {
                class: "znpb-editor-library-modal__item-title",
                title: _ctx.item.name
              }, Vue.toDisplayString(_ctx.item.name), 9, _hoisted_5$5),
              !insertItemLoading.value && !_ctx.item.loading ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_6$5, [
                Vue.unref(EnvironmentStore).plugin_pro.is_installed && !Vue.unref(EnvironmentStore).plugin_pro.is_active && _ctx.item.pro ? (Vue.openBlock(), Vue.createElementBlock("a", {
                  key: 0,
                  class: "znpb-button znpb-button--line",
                  target: "_blank",
                  href: dashboardURL
                }, Vue.toDisplayString(i18n__namespace.__("Activate PRO", "zionbuilder")), 1)) : !Vue.unref(EnvironmentStore).plugin_pro.is_installed && _ctx.item.pro ? (Vue.openBlock(), Vue.createElementBlock("a", {
                  key: 1,
                  class: "znpb-button znpb-button--line",
                  href: Vue.unref(EnvironmentStore).urls.purchase_url,
                  target: "_blank"
                }, Vue.toDisplayString(i18n__namespace.__("Buy Pro", "zionbuilder")), 9, _hoisted_7$5)) : Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("span", {
                  key: 2,
                  class: "znpb-button znpb-button--line znpb-editor-library-modal__item-action",
                  onClick: Vue.withModifiers(insertLibraryItem, ["stop"])
                }, [
                  Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("Insert", "zionbuilder")), 1)
                ], 8, _hoisted_8$5)), [
                  [_directive_znpb_tooltip, i18n__namespace.__("Insert this item into page", "zionbuilder")]
                ]),
                Vue.withDirectives(Vue.createVNode(_component_Icon, {
                  icon: "eye",
                  class: "znpb-editor-library-modal__item-action",
                  onClick: _cache[1] || (_cache[1] = ($event) => emit("activate-item", _ctx.item))
                }, null, 512), [
                  [_directive_znpb_tooltip, i18n__namespace.__("Click to preview this item", "zionbuilder")]
                ]),
                _ctx.item.librarySource.id === "local_library" ? (Vue.openBlock(), Vue.createBlock(_component_HiddenMenu, {
                  key: 3,
                  class: "znpb-editor-library-modal__item-action",
                  actions: itemMenuActions.value
                }, null, 8, ["actions"])) : Vue.createCommentVNode("", true)
              ])) : (Vue.openBlock(), Vue.createBlock(_component_Loader, {
                key: 1,
                size: 12
              }))
            ]),
            _ctx.item.type === "multiple" ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_9$4)) : Vue.createCommentVNode("", true)
          ])
        ], 2);
      };
    }
  });
  const LibraryItem_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$a = {
    key: 1,
    class: "znpb-editor-library-modal"
  };
  const _hoisted_2$9 = { class: "znpb-editor-library-modal-sidebar" };
  const _hoisted_3$8 = { class: "znpb-editor-library-modal-sidebar-search" };
  const _hoisted_4$5 = { class: "znpb-editor-library-modal-body" };
  const _hoisted_5$4 = { class: "znpb-editor-library-modal-subheader" };
  const _hoisted_6$4 = { class: "znpb-editor-library-modal-subheader__left" };
  const _hoisted_7$4 = { class: "znpb-editor-library-modal-subheader__left-title" };
  const _hoisted_8$4 = { class: "znpb-editor-library-modal-subheader__left-number" };
  const _hoisted_9$3 = { class: "znpb-editor-library-modal-subheader__right" };
  const _hoisted_10$3 = { class: "znpb-editor-library-modal-column-wrapper znpb-fancy-scrollbar" };
  const _hoisted_11$2 = { class: "znpb-editor-library-modal-item-list" };
  const _hoisted_12$1 = {
    key: 0,
    class: "znpb-editor-library-modal-no-more"
  };
  const _hoisted_13$1 = {
    key: 0,
    class: "znpb-editor-library-modal-preview znpb-fancy-scrollbar"
  };
  const _hoisted_14 = ["src"];
  const _sfc_main$c = /* @__PURE__ */ Vue.defineComponent({
    __name: "LibraryPanel",
    props: {
      previewOpen: { type: Boolean, default: false },
      libraryConfig: {}
    },
    emits: ["activate-preview"],
    setup(__props, { emit }) {
      const props = __props;
      const allCategoriesConfig = {
        name: i18n__namespace.__("All", "zionbuilder"),
        slug: "zion-category-all",
        term_id: 3211329987745,
        isActive: true
      };
      const searchInput = Vue.ref(null);
      const libraryItems = Vue.computed(() => {
        const libraryItems2 = [...props.libraryConfig.items];
        return libraryItems2.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
      });
      const libraryCategories = Vue.computed(() => props.libraryConfig.categories);
      const activeCategory = Vue.ref(allCategoriesConfig);
      const sortAscending = Vue.ref(false);
      const searchKeyword = Vue.ref("");
      const activeItem = Vue.ref(null);
      const computedAllCategories = Vue.computed(() => {
        const categories = [];
        categories.push(allCategoriesConfig);
        categories.push(...libraryCategories.value);
        return categories;
      });
      const computedLibraryCategories = Vue.computed(() => {
        const categories = [];
        let filteredCategories = computedAllCategories.value;
        if (searchKeyword.value.length > 0) {
          filteredCategories = computedAllCategories.value.filter((category) => {
            return category.term_id === allCategoriesConfig.term_id || filteredItemsCategories.value.includes(category.term_id);
          });
        }
        filteredCategories.forEach((category) => {
          if (!category.parent) {
            categories.push(createNestedCategories(category, filteredCategories));
          }
        });
        return categories;
      });
      function createNestedCategories(categoryConfig, allCategories) {
        const subcategories = [];
        allCategories.forEach((subcategory) => {
          if (subcategory.parent && subcategory.parent === categoryConfig.term_id) {
            subcategories.push(createNestedCategories(subcategory, allCategories));
          }
        });
        if (subcategories.length > 0) {
          categoryConfig.subcategories = subcategories;
        }
        return categoryConfig;
      }
      const numberOfElements = Vue.computed(() => {
        return `(${filteredItems.value.length})`;
      });
      const libraryTitle = Vue.computed(() => {
        return activeCategory.value.name;
      });
      const filteredItemsBySearchKeyword = Vue.computed(() => {
        let items2 = libraryItems.value;
        if (searchKeyword.value.length > 0) {
          items2 = libraryItems.value.filter((item) => {
            const name = item.name.toLowerCase();
            if (name.includes(searchKeyword.value.toLowerCase())) {
              return true;
            } else {
              item.tags.forEach(function(tag) {
                if (tag.includes(searchKeyword.value.toLowerCase())) {
                  return true;
                }
              });
            }
            return false;
          });
        }
        return items2;
      });
      const filteredItems = Vue.computed(() => {
        let items2 = filteredItemsBySearchKeyword.value.filter((item) => {
          return activeCategory.value.term_id === allCategoriesConfig.term_id || item.category.includes(activeCategory.value.term_id);
        });
        if (sortAscending.value) {
          items2 = [...items2].reverse();
        }
        return items2;
      });
      const filteredItemsCategories = Vue.computed(() => {
        const activeCategories = [];
        filteredItemsBySearchKeyword.value.forEach((item) => {
          activeCategories.push(...item.category);
        });
        return uniq(activeCategories);
      });
      Vue.watchEffect(() => {
        if (props.libraryConfig.loading === false) {
          Vue.nextTick(() => {
            var _a;
            (_a = searchInput.value) == null ? void 0 : _a.focus();
          });
        }
      });
      Vue.watch(searchKeyword, (newValue) => {
        if (newValue.length > 0) {
          const activeCategoryValid = computedLibraryCategories.value.find(
            (category) => category.term_id === activeCategory.value.term_id
          );
          if (!activeCategoryValid) {
            onCategoryActivate(allCategoriesConfig);
          }
        }
      });
      function onCategoryActivate(category) {
        computedAllCategories.value.forEach((item) => item.isActive = false);
        category.isActive = true;
        let currentCategory = category;
        while (currentCategory && currentCategory.parent) {
          const parentCategory = computedAllCategories.value.find((category2) => category2.term_id === currentCategory.parent);
          if (parentCategory) {
            parentCategory.isActive = true;
            currentCategory = parentCategory;
          }
        }
        activeCategory.value = category;
      }
      return (_ctx, _cache) => {
        const _component_Loader = Vue.resolveComponent("Loader");
        const _component_Icon = Vue.resolveComponent("Icon");
        return _ctx.libraryConfig.loading ? (Vue.openBlock(), Vue.createBlock(_component_Loader, {
          key: 0,
          class: "znpb-editor-library-modal-loader"
        })) : (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$a, [
          Vue.createElementVNode("div", _hoisted_2$9, [
            Vue.createElementVNode("div", _hoisted_3$8, [
              Vue.createVNode(Vue.unref(components.BaseInput), {
                ref_key: "searchInput",
                ref: searchInput,
                modelValue: searchKeyword.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchKeyword.value = $event),
                icon: "search",
                clearable: true,
                placeholder: i18n__namespace.__("Search in this library", "zionbuilder")
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            Vue.createVNode(_sfc_main$e, {
              categories: computedLibraryCategories.value,
              "on-category-activate": onCategoryActivate
            }, null, 8, ["categories"])
          ]),
          Vue.createElementVNode("div", _hoisted_4$5, [
            Vue.createElementVNode("div", _hoisted_5$4, [
              Vue.createElementVNode("div", _hoisted_6$4, [
                Vue.createElementVNode("h3", _hoisted_7$4, Vue.toDisplayString(libraryTitle.value), 1),
                Vue.createElementVNode("span", _hoisted_8$4, Vue.toDisplayString(numberOfElements.value), 1)
              ]),
              Vue.createElementVNode("div", _hoisted_9$3, [
                Vue.createElementVNode("div", {
                  class: "znpb-editor-library-modal-subheader__action-title",
                  onClick: _cache[1] || (_cache[1] = ($event) => sortAscending.value = !sortAscending.value)
                }, [
                  Vue.createVNode(_component_Icon, { icon: "reverse-y" }),
                  Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("Sort", "zionbuilder")), 1)
                ])
              ])
            ]),
            Vue.createElementVNode("div", _hoisted_10$3, [
              Vue.createElementVNode("ul", _hoisted_11$2, [
                (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(filteredItems.value, (item) => {
                  return Vue.openBlock(), Vue.createBlock(_sfc_main$d, {
                    key: item.id,
                    item,
                    onActivateItem: ($event) => (emit("activate-preview", item), activeItem.value = item)
                  }, null, 8, ["item", "onActivateItem"]);
                }), 128))
              ]),
              searchKeyword.value.length > 0 && filteredItems.value.length === 0 ? (Vue.openBlock(), Vue.createElementBlock("p", _hoisted_12$1, Vue.toDisplayString(i18n__namespace.__("No more to show :(", "zionbuilder")), 1)) : Vue.createCommentVNode("", true)
            ])
          ]),
          Vue.createVNode(Vue.Transition, { name: "slide-preview" }, {
            default: Vue.withCtx(() => [
              _ctx.previewOpen && activeItem.value ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_13$1, [
                Vue.createElementVNode("iframe", {
                  id: "znpb-editor-library-modal-preview-iframe",
                  frameborder: "0",
                  src: activeItem.value.urls.preview_url
                }, "\n				", 8, _hoisted_14)
              ])) : Vue.createCommentVNode("", true)
            ]),
            _: 1
          })
        ]));
      };
    }
  });
  const LibraryPanel_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$9 = {
    id: "znpb-upload-form-library",
    enctype: "multipart/form-data",
    novalidate: ""
  };
  const _hoisted_2$8 = /* @__PURE__ */ Vue.createElementVNode("div", { class: "znpb-empty-list__border-top-bottom" }, null, -1);
  const _hoisted_3$7 = /* @__PURE__ */ Vue.createElementVNode("div", { class: "znpb-empty-list__border-left-right" }, null, -1);
  const _hoisted_4$4 = { class: "znpb-empty-list__content" };
  const _hoisted_5$3 = { class: "znpb-editor-library-upload__text" };
  const _hoisted_6$3 = { class: "" };
  const _hoisted_7$3 = {
    key: 1,
    class: "znpb-library-uploading-wrapper"
  };
  const _hoisted_8$3 = { class: "znpb-library-uploading-wrapper__text" };
  const _hoisted_9$2 = /* @__PURE__ */ Vue.createElementVNode("br", null, null, -1);
  const _hoisted_10$2 = ["disabled"];
  const _hoisted_11$1 = { key: 3 };
  const _sfc_main$b = /* @__PURE__ */ Vue.defineComponent({
    __name: "LibraryUploader",
    props: {
      noMargin: { type: Boolean, default: false }
    },
    emits: ["file-uploaded"],
    setup(__props, { emit }) {
      const { useLibrary } = window.zb.composables;
      const isInitial = Vue.ref(true);
      const isSaving = Vue.ref(false);
      const errorMessage = Vue.ref("");
      Vue.onMounted(() => {
        const dropArea = document.getElementById("znpb-upload-form-library");
        if (!dropArea) {
          return;
        }
        dropArea.addEventListener("dragenter", highlightForm);
        dropArea.addEventListener("dragleave", dragOut);
        dropArea.addEventListener("dragover", highlightForm);
        dropArea.addEventListener("drop", dragDropped);
      });
      Vue.onBeforeUnmount(() => {
        const dropArea = document.getElementById("znpb-upload-form-library");
        if (!dropArea) {
          return;
        }
        dropArea.removeEventListener("dragenter", highlightForm);
        dropArea.removeEventListener("dragleave", dragOut);
        dropArea.removeEventListener("dragover", highlightForm);
        dropArea.removeEventListener("drop", dragDropped);
      });
      function highlightForm() {
        isInitial.value = false;
      }
      function dragOut() {
        isInitial.value = true;
      }
      function dragDropped() {
        isInitial.value = true;
      }
      function uploadFiles(event) {
        const {
          files: fileList,
          name: fieldName
        } = event.target;
        const formData = new FormData();
        if (!fileList || !fileList.length)
          return;
        Array.from(fileList).forEach((file) => {
          formData.append(fieldName, file, file.name);
        });
        saveFile(formData);
      }
      function saveFile(formData) {
        const { getSource } = useLibrary();
        const localLibrary = getSource("local_library");
        if (!localLibrary) {
          console.warn("Local library was not registered. It may be possible that a plugin is removing the default library.");
          return;
        }
        isSaving.value = true;
        errorMessage.value = "";
        localLibrary.importItem(formData).catch((error) => {
          console.error(error);
          if (typeof error.response.data === "string") {
            errorMessage.value = error.response.data;
          } else
            errorMessage.value = arrayBufferToString(error.response.data);
        }).finally(() => {
          isSaving.value = false;
          isInitial.value = true;
          emit("file-uploaded", true);
        });
      }
      function arrayBufferToString(buffer) {
        const arr = new Uint8Array(buffer);
        const str = String.fromCharCode.apply(String, arr);
        if (/[\u0080-\uffff]/.test(str)) {
          throw new Error("this string seems to contain (still encoded) multi bytes");
        }
        return str;
      }
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_Loader = Vue.resolveComponent("Loader");
        return Vue.openBlock(), Vue.createElementBlock("form", _hoisted_1$9, [
          Vue.createElementVNode("div", {
            class: Vue.normalizeClass(["znpb-empty-list__container znpb-editor-library-upload", { "znpb-editor-library-upload--dragging": !isInitial.value }])
          }, [
            _hoisted_2$8,
            _hoisted_3$7,
            Vue.createElementVNode("div", _hoisted_4$4, [
              isInitial.value && !isSaving.value ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, [
                Vue.createVNode(_component_Icon, { icon: "import-big-icon" }),
                Vue.createElementVNode("p", _hoisted_5$3, [
                  Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("Drag and drop your exported item here or just click to ", "zionbuilder")) + " ", 1),
                  Vue.createElementVNode("span", _hoisted_6$3, Vue.toDisplayString(i18n__namespace.__("browse", "zionbuilder")), 1),
                  Vue.createTextVNode(" " + Vue.toDisplayString(i18n__namespace.__("for files", "zionbuilder")), 1)
                ])
              ], 64)) : Vue.createCommentVNode("", true),
              !isInitial.value && !isSaving.value ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_7$3, [
                Vue.createVNode(_component_Icon, {
                  icon: "long-arrow-right",
                  "bg-size": 68,
                  "bg-color": "#06bee1",
                  rounded: true,
                  color: "#fff",
                  size: 21
                }),
                Vue.createElementVNode("p", _hoisted_8$3, [
                  Vue.createElementVNode("b", null, Vue.toDisplayString(i18n__namespace.__("Drop your files", "zionbuilder")), 1),
                  _hoisted_9$2,
                  Vue.createTextVNode(" " + Vue.toDisplayString(i18n__namespace.__("to upload", "zionbuilder")), 1)
                ])
              ])) : Vue.createCommentVNode("", true),
              Vue.createElementVNode("input", {
                type: "file",
                accept: "zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed",
                multiple: "",
                name: "file",
                disabled: isSaving.value,
                class: "znpb-library-input-file",
                onChange: uploadFiles
              }, null, 40, _hoisted_10$2),
              isSaving.value ? (Vue.openBlock(), Vue.createBlock(_component_Loader, { key: 2 })) : Vue.createCommentVNode("", true),
              errorMessage.value.length > 0 ? (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_11$1, Vue.toDisplayString(errorMessage.value), 1)) : Vue.createCommentVNode("", true)
            ])
          ], 2)
        ]);
      };
    }
  });
  const LibraryUploader_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$8 = { class: "znpb-library-modal-header" };
  const _hoisted_2$7 = ["onClick"];
  const _hoisted_3$6 = {
    key: 1,
    class: "znpb-library-modal-header-preview"
  };
  const _hoisted_4$3 = ["innerHTML"];
  const _hoisted_5$2 = ["onClick"];
  const _hoisted_6$2 = { class: "znpb-library-modal-header__actions" };
  const _hoisted_7$2 = ["href"];
  const _hoisted_8$2 = { key: 0 };
  const _sfc_main$a = /* @__PURE__ */ Vue.defineComponent({
    __name: "PanelLibraryModal",
    setup(__props) {
      const { useLibrary } = window.zb.composables;
      const importActive = Vue.ref(false);
      const fullSize = Vue.ref(false);
      const insertItemLoading = Vue.ref(false);
      const templateUploaded = Vue.ref(false);
      const { addData, getData } = useLocalStorage();
      const UIStore = useUIStore();
      const { librarySources, getSource } = useLibrary();
      const activeLibraryTab = Vue.ref(getData("libraryActiveSource", "local_library"));
      const { editorData: editorData2 } = useEditorData();
      const isProActive = store.useEnvironmentStore();
      const isProInstalled = editorData2.value.plugin_info.is_pro_installed;
      const purchaseURL = Vue.ref(editorData2.value.urls.purchase_url);
      const previewOpen = Vue.ref(false);
      const activeItem = Vue.ref(null);
      const dashboardURL = `${editorData2.value.urls.zion_admin}#/pro-license`;
      const computedTitle = Vue.computed(() => {
        if (previewOpen.value) {
          return activeItem.value.post_title;
        }
        if (importActive.value) {
          return i18n__namespace.__("Import", "zionbuilder");
        }
        return i18n__namespace.__("Library", "zionbuilder");
      });
      Vue.provide("Library", {
        insertItem
      });
      function setActiveSource(source, save = true) {
        activeLibraryTab.value = source;
        if (save) {
          addData("libraryActiveSource", source);
        }
      }
      const activeLibraryConfig = Vue.computed(() => {
        return getSource(activeLibraryTab.value) || getSource("local_library");
      });
      Vue.watchEffect(() => {
        if (UIStore.isLibraryOpen) {
          activeLibraryConfig.value.getData();
        }
      });
      function onRefresh() {
        activeLibraryConfig.value.getData(false);
      }
      function activatePreview(item) {
        activeItem.value = item;
        previewOpen.value = true;
      }
      Vue.onMounted(() => {
        document.getElementById("znpb-editor-iframe").contentWindow.document.body.style.overflow = "hidden";
      });
      Vue.onBeforeUnmount(() => {
        document.getElementById("znpb-editor-iframe").contentWindow.document.body.style.overflow = null;
      });
      function onTemplateUpload() {
        importActive.value = false;
        setActiveSource("local");
        templateUploaded.value = true;
      }
      function insertLibraryItem(item) {
        insertItemLoading.value = true;
        insertItem(activeItem.value).then(() => {
          insertItemLoading.value = false;
        });
      }
      function closeBody() {
        previewOpen.value = false;
        importActive.value = false;
      }
      function insertItem(item) {
        return new Promise((resolve, reject) => {
          item.getBuilderData().then((response) => {
            const { template_data: templateData } = response.data;
            const compiledTemplateData = templateData.element_type ? [templateData] : templateData;
            const newElement = regenerateUIDsForContent(compiledTemplateData);
            window.zb.run("editor/elements/add-template", {
              templateContent: newElement
            });
            UIStore.toggleLibrary();
            resolve(true);
          }).catch((error) => {
            reject(error);
          });
        });
      }
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_Loader = Vue.resolveComponent("Loader");
        const _component_Button = Vue.resolveComponent("Button");
        const _component_Modal = Vue.resolveComponent("Modal");
        const _directive_znpb_tooltip = Vue.resolveDirective("znpb-tooltip");
        return Vue.unref(UIStore).isLibraryOpen ? (Vue.openBlock(), Vue.createBlock(_component_Modal, {
          key: 0,
          fullscreen: fullSize.value,
          "onUpdate:fullscreen": _cache[2] || (_cache[2] = ($event) => fullSize.value = $event),
          show: true,
          "append-to": ".znpb-center-area",
          width: 1440,
          class: "znpb-library-modal",
          onCloseModal: Vue.unref(UIStore).closeLibrary
        }, {
          header: Vue.withCtx(() => [
            Vue.createElementVNode("div", _hoisted_1$8, [
              previewOpen.value || importActive.value ? (Vue.openBlock(), Vue.createElementBlock("span", {
                key: 0,
                class: "znpb-library-modal-header-preview__back",
                onClick: Vue.withModifiers(closeBody, ["stop"])
              }, [
                Vue.createVNode(_component_Icon, {
                  icon: "long-arrow-right",
                  rotate: "180"
                }),
                Vue.createTextVNode(" " + Vue.toDisplayString(i18n__namespace.__("Go Back", "zionbuilder")), 1)
              ], 8, _hoisted_2$7)) : Vue.createCommentVNode("", true),
              previewOpen.value || importActive.value ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_3$6, [
                Vue.createElementVNode("h2", {
                  class: "znpb-library-modal-header-preview__title",
                  innerHTML: computedTitle.value
                }, null, 8, _hoisted_4$3)
              ])) : (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, { key: 2 }, Vue.renderList(Vue.unref(librarySources), (librarySource, sourceID) => {
                return Vue.openBlock(), Vue.createElementBlock("h2", {
                  key: sourceID,
                  class: Vue.normalizeClass(["znpb-library-modal-header__title", { "znpb-library-modal-header__title--active": activeLibraryTab.value === sourceID }]),
                  onClick: ($event) => setActiveSource(sourceID)
                }, Vue.toDisplayString(librarySource.name), 11, _hoisted_5$2);
              }), 128)),
              Vue.createElementVNode("div", _hoisted_6$2, [
                previewOpen.value && activeItem.value ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, [
                  Vue.unref(isProInstalled) && !Vue.unref(isProActive) && activeItem.value.pro ? (Vue.openBlock(), Vue.createElementBlock("a", {
                    key: 0,
                    class: "znpb-button znpb-button--line",
                    target: "_blank",
                    href: dashboardURL
                  }, Vue.toDisplayString(i18n__namespace.__("Activate PRO", "zionbuilder")), 1)) : !Vue.unref(isProInstalled) && activeItem.value.pro ? (Vue.openBlock(), Vue.createElementBlock("a", {
                    key: 1,
                    class: "znpb-button znpb-button--line znpb-button-buy-pro",
                    href: purchaseURL.value,
                    target: "_blank"
                  }, Vue.toDisplayString(i18n__namespace.__("Buy Pro", "zionbuilder")), 9, _hoisted_7$2)) : Vue.withDirectives((Vue.openBlock(), Vue.createBlock(_component_Button, {
                    key: 2,
                    type: "secondary",
                    class: "znpb-library-modal-header__insert-button",
                    onClick: Vue.withModifiers(insertLibraryItem, ["stop"])
                  }, {
                    default: Vue.withCtx(() => [
                      !insertItemLoading.value ? (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_8$2, Vue.toDisplayString(i18n__namespace.__("Insert", "zionbuilder")), 1)) : (Vue.openBlock(), Vue.createBlock(_component_Loader, {
                        key: 1,
                        size: 13
                      }))
                    ]),
                    _: 1
                  }, 8, ["onClick"])), [
                    [_directive_znpb_tooltip, i18n__namespace.__("Insert this item into page", "zionbuilder")]
                  ])
                ], 64)) : (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 1 }, [
                  Vue.createVNode(_component_Button, {
                    type: "secondary",
                    onClick: _cache[0] || (_cache[0] = ($event) => (importActive.value = !importActive.value, templateUploaded.value = !templateUploaded.value))
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(_component_Icon, { icon: "import" }),
                      Vue.createTextVNode(" " + Vue.toDisplayString(i18n__namespace.__("Import", "zionbuilder")), 1)
                    ]),
                    _: 1
                  }),
                  Vue.withDirectives(Vue.createVNode(_component_Icon, {
                    icon: "refresh",
                    size: 14,
                    class: Vue.normalizeClass(["znpb-modal__header-button znpb-modal__header-button--library-refresh znpb-button znpb-button--line", { ["loading"]: activeLibraryConfig.value && activeLibraryConfig.value.loading }]),
                    onClick: onRefresh
                  }, null, 8, ["class"]), [
                    [_directive_znpb_tooltip, i18n__namespace.__("Refresh data from the server ", "zionbuilder")]
                  ])
                ], 64)),
                Vue.createVNode(_component_Icon, {
                  icon: fullSize.value ? "shrink" : "maximize",
                  class: "znpb-modal__header-button",
                  size: 14,
                  onClick: _cache[1] || (_cache[1] = Vue.withModifiers(($event) => fullSize.value = !fullSize.value, ["stop"]))
                }, null, 8, ["icon"]),
                Vue.createVNode(_component_Icon, {
                  icon: "close",
                  size: 14,
                  class: "znpb-modal__header-button",
                  onClick: Vue.unref(UIStore).toggleLibrary
                }, null, 8, ["onClick"])
              ])
            ])
          ]),
          default: Vue.withCtx(() => [
            importActive.value ? (Vue.openBlock(), Vue.createBlock(_sfc_main$b, {
              key: 0,
              onFileUploaded: onTemplateUpload
            })) : (Vue.openBlock(), Vue.createBlock(_sfc_main$c, {
              ref: "libraryContent",
              key: activeLibraryConfig.value.id,
              "preview-open": previewOpen.value,
              "library-config": activeLibraryConfig.value,
              onActivatePreview: activatePreview
            }, null, 8, ["preview-open", "library-config"]))
          ]),
          _: 1
        }, 8, ["fullscreen", "onCloseModal"])) : Vue.createCommentVNode("", true);
      };
    }
  });
  const PanelLibraryModal_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$7 = { class: "znpb-post-lock-modal" };
  const _hoisted_2$6 = { class: "znpb-post-lock-modal__avatar" };
  const _hoisted_3$5 = ["src"];
  const _hoisted_4$2 = { class: "znpb-post-lock-modal__content" };
  const _hoisted_5$1 = { class: "znpb-post-lock-modal__content-text" };
  const _hoisted_6$1 = {
    key: 0,
    class: "znpb-post-lock-modal__error-message"
  };
  const _hoisted_7$1 = { class: "znpb-post-lock-modal__content-buttons" };
  const _hoisted_8$1 = ["href"];
  const _hoisted_9$1 = ["href"];
  const _hoisted_10$1 = { href: "" };
  const _hoisted_11 = {
    key: 0,
    class: "znpb-post-lock-modal__loader-wrapper"
  };
  const _hoisted_12 = /* @__PURE__ */ Vue.createElementVNode("span", { class: "znpb-post-lock-modal__loader" }, null, -1);
  const _hoisted_13 = [
    _hoisted_12
  ];
  const _sfc_main$9 = /* @__PURE__ */ Vue.defineComponent({
    __name: "PostLock",
    setup(__props) {
      const { lockPage } = window.zb.api;
      const UserStore = useUserStore();
      const showLoader = Vue.ref(false);
      const showError = Vue.ref(false);
      const pageId = window.ZnPbInitialData.page_id;
      const urls = window.ZnPbInitialData.urls;
      function lockPages() {
        showLoader.value = true;
        lockPage(pageId).then((result) => {
          if (result.status === 200) {
            UserStore.takeOverPost();
          } else if (result.status === 500) {
            showError.value = true;
            console.error(i18n__namespace.__("Could not lock current post", "zionbuilder"));
          }
        }).finally(() => {
          showLoader.value = false;
        });
      }
      return (_ctx, _cache) => {
        const _component_Button = Vue.resolveComponent("Button");
        const _component_Modal = Vue.resolveComponent("Modal");
        return Vue.unref(UserStore).isPostLocked ? (Vue.openBlock(), Vue.createBlock(_component_Modal, {
          key: 0,
          show: true,
          width: 570,
          "append-to": "body",
          "show-maximize": false,
          "show-close": false
        }, {
          default: Vue.withCtx(() => [
            Vue.createElementVNode("div", _hoisted_1$7, [
              Vue.createElementVNode("div", _hoisted_2$6, [
                Vue.createElementVNode("img", {
                  src: Vue.unref(UserStore).lockedUserInfo.avatar
                }, null, 8, _hoisted_3$5)
              ]),
              Vue.createElementVNode("div", _hoisted_4$2, [
                Vue.createElementVNode("div", _hoisted_5$1, [
                  showError.value ? (Vue.openBlock(), Vue.createElementBlock("p", _hoisted_6$1, Vue.toDisplayString(i18n__namespace.__("Could not lock current post", "zionbuilder")), 1)) : Vue.createCommentVNode("", true),
                  Vue.createElementVNode("p", null, Vue.toDisplayString(Vue.unref(UserStore).lockedUserInfo.message), 1)
                ]),
                Vue.createElementVNode("div", _hoisted_7$1, [
                  Vue.createVNode(_component_Button, { type: "gray" }, {
                    default: Vue.withCtx(() => [
                      Vue.createElementVNode("a", {
                        href: Vue.unref(urls).preview_url
                      }, Vue.toDisplayString(i18n__namespace.__("Preview", "zionbuilder")), 9, _hoisted_8$1)
                    ]),
                    _: 1
                  }),
                  Vue.createVNode(_component_Button, { type: "gray" }, {
                    default: Vue.withCtx(() => [
                      Vue.createElementVNode("a", {
                        href: Vue.unref(urls).all_pages_url
                      }, Vue.toDisplayString(i18n__namespace.__("Go back", "zionbuilder")), 9, _hoisted_9$1)
                    ]),
                    _: 1
                  }),
                  Vue.createVNode(_component_Button, {
                    type: "gray",
                    onClick: Vue.withModifiers(lockPages, ["prevent"])
                  }, {
                    default: Vue.withCtx(() => [
                      Vue.createElementVNode("a", _hoisted_10$1, Vue.toDisplayString(i18n__namespace.__("Take Over", "zionbuilder")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ]),
              showLoader.value ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_11, _hoisted_13)) : Vue.createCommentVNode("", true)
            ])
          ]),
          _: 1
        })) : Vue.createCommentVNode("", true);
      };
    }
  });
  const PostLock_vue_vue_type_style_index_0_lang = "";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var FileSaver_min = { exports: {} };
  (function(module2, exports2) {
    (function(a, b) {
      b();
    })(commonjsGlobal, function() {
      function b(a2, b2) {
        return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
      }
      function c(a2, b2, c2) {
        var d2 = new XMLHttpRequest();
        d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
          g(d2.response, b2, c2);
        }, d2.onerror = function() {
          console.error("could not download file");
        }, d2.send();
      }
      function d(a2) {
        var b2 = new XMLHttpRequest();
        b2.open("HEAD", a2, false);
        try {
          b2.send();
        } catch (a3) {
        }
        return 200 <= b2.status && 299 >= b2.status;
      }
      function e(a2) {
        try {
          a2.dispatchEvent(new MouseEvent("click"));
        } catch (c2) {
          var b2 = document.createEvent("MouseEvents");
          b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
        }
      }
      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
      } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
          i.revokeObjectURL(j.href);
        }, 4e4), setTimeout(function() {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
        if (g2 = g2 || f2.name || "download", "string" != typeof f2)
          navigator.msSaveOrOpenBlob(b(f2, h), g2);
        else if (d(f2))
          c(f2, g2, h);
        else {
          var i = document.createElement("a");
          i.href = f2, i.target = "_blank", setTimeout(function() {
            e(i);
          });
        }
      } : function(b2, d2, e2, g2) {
        if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2)
          return c(b2, d2, e2);
        var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && "undefined" != typeof FileReader) {
          var k = new FileReader();
          k.onloadend = function() {
            var a2 = k.result;
            a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
          }, k.readAsDataURL(b2);
        } else {
          var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
          g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
            l.revokeObjectURL(m);
          }, 4e4);
        }
      });
      f.saveAs = g.saveAs = g, module2.exports = g;
    });
  })(FileSaver_min);
  var FileSaver_minExports = FileSaver_min.exports;
  const _hoisted_1$6 = { class: "znpb-modal-save-element-wrapper" };
  const _hoisted_2$5 = { class: "znpb-modal-content-save-buttons" };
  const _hoisted_3$4 = ["innerHTML"];
  const _sfc_main$8 = /* @__PURE__ */ Vue.defineComponent({
    __name: "SaveElementModal",
    setup(__props) {
      const { useLibrary } = window.zb.composables;
      const { exportTemplate } = window.zb.api;
      const { activeSaveElement: activeSaveElement2, hideSaveElement } = useSaveTemplate();
      const contentStore = useContentStore();
      const formModel = Vue.ref({});
      const computedFormModel = Vue.computed({
        get() {
          return formModel.value;
        },
        set(newValue) {
          formModel.value = null !== newValue ? newValue : {};
        }
      });
      const loading = Vue.ref(false);
      const loadingMessage = Vue.ref("");
      const errorMessage = Vue.ref("");
      const optionsSchema = Vue.computed(() => {
        return {
          title: {
            type: "text",
            title: i18n__namespace.__("Choose a title", "zionbuilder"),
            description: i18n__namespace.__("Write a suggestive name for your element", "zionbuilder")
          }
        };
      });
      Vue.onBeforeUnmount(() => {
        loadingMessage.value = "";
        errorMessage.value = "";
      });
      function saveElement() {
        const { getSource } = useLibrary();
        const { element, type } = activeSaveElement2.value;
        const compiledElementData = type === "template" ? contentStore.getAreaContentAsJSON(window.ZnPbInitialData.page_id) : [element.toJSON()];
        const templateType = type === "template" ? "template" : "block";
        const localLibrary = getSource("local_library");
        if (!localLibrary) {
          console.warn("Local library was not registered. It may be possible that a plugin is removing the default library.");
          return;
        }
        loading.value = true;
        loadingMessage.value = "";
        errorMessage.value = "";
        localLibrary.createItem({
          title: formModel.value.title,
          template_type: templateType,
          template_data: compiledElementData
        }).then((response) => {
          loadingMessage.value = i18n__namespace.__("The template was successfully added to library", "zionbuilder");
        }).catch((error) => {
          if (error.response !== void 0) {
            if (typeof error.response.data === "string") {
              errorMessage.value = error.response.data;
            } else
              errorMessage.value = arrayBufferToString(error.response.data);
          } else {
            console.error(error);
            errorMessage.value = error;
          }
        }).finally(() => {
          loading.value = false;
          formModel.value = {};
          setTimeout(() => {
            loadingMessage.value = false;
            errorMessage.value = false;
          }, 3500);
        });
      }
      function decode_utf8(s) {
        return decodeURIComponent(escape(s));
      }
      function arrayBufferToString(buffer) {
        const s = String.fromCharCode.apply(null, new Uint8Array(buffer));
        return decode_utf8(s);
      }
      function downloadElement() {
        const { element, type } = activeSaveElement2.value;
        const compiledElementData = type === "template" ? contentStore.getAreaContentAsJSON(window.ZnPbInitialData.page_id) : [element.toJSON()];
        const templateType = type === "template" ? "template" : "block";
        loading.value = true;
        loadingMessage.value = "";
        errorMessage.value = "";
        exportTemplate({
          title: formModel.value.title,
          template_type: templateType,
          template_data: compiledElementData
        }).then((response) => {
          const fileName = formModel.value.title && formModel.value.title.length > 0 ? formModel.value.title : "export";
          const blob = new Blob([response.data], { type: "application/zip" });
          FileSaver_minExports.saveAs(blob, `${fileName}.zip`);
          loadingMessage.value = "";
          hideSaveElement();
        }).catch((error) => {
          if (typeof error.response.data === "string") {
            errorMessage.value = error.response.data;
          } else
            errorMessage.value = arrayBufferToString(error.response.data);
        }).finally(() => {
          loading.value = false;
          formModel.value = {};
        });
      }
      return (_ctx, _cache) => {
        const _component_OptionsForm = Vue.resolveComponent("OptionsForm");
        const _component_Button = Vue.resolveComponent("Button");
        const _component_Loader = Vue.resolveComponent("Loader");
        const _component_Modal = Vue.resolveComponent("Modal");
        return Vue.unref(activeSaveElement2).type ? (Vue.openBlock(), Vue.createBlock(_component_Modal, {
          key: 0,
          title: i18n__namespace.__("Save to library", "zionbuilder"),
          "append-to": "body",
          width: 560,
          "show-maximize": false,
          class: "znpb-modal-save-element",
          show: true,
          onCloseModal: Vue.unref(hideSaveElement)
        }, {
          default: Vue.withCtx(() => [
            Vue.createElementVNode("div", _hoisted_1$6, [
              Vue.createVNode(_component_OptionsForm, {
                modelValue: computedFormModel.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedFormModel.value = $event),
                schema: optionsSchema.value
              }, null, 8, ["modelValue", "schema"]),
              Vue.createElementVNode("div", _hoisted_2$5, [
                Vue.createVNode(_component_Button, {
                  class: "znpb-button--secondary",
                  onClick: saveElement
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createElementVNode("span", null, Vue.toDisplayString(i18n__namespace.__("Save", "zionbuilder")), 1)
                  ]),
                  _: 1
                }),
                Vue.createVNode(_component_Button, {
                  class: "znpb-button--line",
                  onClick: downloadElement
                }, {
                  default: Vue.withCtx(() => [
                    Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("Download", "zionbuilder")), 1)
                  ]),
                  _: 1
                })
              ]),
              loadingMessage.value || errorMessage.value.length > 0 ? (Vue.openBlock(), Vue.createElementBlock("p", {
                key: 0,
                class: Vue.normalizeClass(["znpb-modal-save-element-wrapper__message", { "znpb-modal-save-element-wrapper__message--error": errorMessage.value.length > 0 }]),
                innerHTML: loadingMessage.value ? loadingMessage.value : errorMessage.value
              }, null, 10, _hoisted_3$4)) : Vue.createCommentVNode("", true),
              loading.value ? (Vue.openBlock(), Vue.createBlock(_component_Loader, {
                key: 1,
                size: 16,
                class: "znpb-modal-save-element-wrapper__loading"
              })) : Vue.createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["title", "onCloseModal"])) : Vue.createCommentVNode("", true);
      };
    }
  });
  const SaveElementModal_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$5 = {
    key: 0,
    class: "znpb-assetsRegenerationWrapper"
  };
  const _sfc_main$7 = /* @__PURE__ */ Vue.defineComponent({
    __name: "AssetsRegeneration",
    setup(__props) {
      const AssetsStore = store.useAssetsStore();
      return (_ctx, _cache) => {
        return Vue.unref(AssetsStore).isLoading ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$5, [
          Vue.createTextVNode(Vue.toDisplayString(i18n__namespace.__("Regenerating assets", "zionbuilder")) + " ", 1),
          Vue.unref(AssetsStore).filesCount > 0 ? (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, { key: 0 }, [
            Vue.createTextVNode(Vue.toDisplayString(Vue.unref(AssetsStore).currentIndex) + "/" + Vue.toDisplayString(Vue.unref(AssetsStore).filesCount), 1)
          ], 64)) : Vue.createCommentVNode("", true)
        ])) : Vue.createCommentVNode("", true);
      };
    }
  });
  const AssetsRegeneration_vue_vue_type_style_index_0_lang = "";
  const { applyFilters } = window.zb.hooks;
  const getLayoutConfigs = () => {
    return applyFilters("editor/addElementsPopup/layoutConfigs", {
      full: [
        {
          element_type: "zion_column"
        }
      ],
      "one-of-two": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "6"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "6"
            }
          }
        }
      ],
      "one-of-three": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "4"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "4"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "4"
            }
          }
        }
      ],
      "one-of-four": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          }
        }
      ],
      "one-of-five": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "1of5"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "1of5"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "1of5"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "1of5"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "1of5"
            }
          }
        }
      ],
      "one-of-six": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "2"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "2"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "2"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "2"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "2"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "2"
            }
          }
        }
      ],
      "4-8": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "4"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "8"
            }
          }
        }
      ],
      "8-4": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "8"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "4"
            }
          }
        }
      ],
      "3-9": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "9"
            }
          }
        }
      ],
      "9-3": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "9"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          }
        }
      ],
      "3-6-3": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "6"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          }
        }
      ],
      "3-3-6": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "6"
            }
          }
        }
      ],
      "6-3-3": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "6"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          }
        }
      ],
      "6-3-3-3-3": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "6"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          },
          content: [
            {
              element_type: "zion_column"
            },
            {
              element_type: "zion_column"
            }
          ]
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          },
          content: [
            {
              element_type: "zion_column"
            },
            {
              element_type: "zion_column"
            }
          ]
        }
      ],
      "3-3-3-3-6": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          },
          content: [
            {
              element_type: "zion_column"
            },
            {
              element_type: "zion_column"
            }
          ]
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          },
          content: [
            {
              element_type: "zion_column"
            },
            {
              element_type: "zion_column"
            }
          ]
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "6"
            }
          }
        }
      ],
      "3-3-6-3-3": [
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          },
          content: [
            {
              element_type: "zion_column"
            },
            {
              element_type: "zion_column"
            }
          ]
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "6"
            }
          }
        },
        {
          element_type: "zion_column",
          options: {
            column_size: {
              default: "3"
            }
          },
          content: [
            {
              element_type: "zion_column"
            },
            {
              element_type: "zion_column"
            }
          ]
        }
      ]
    });
  };
  const _hoisted_1$4 = ["title"];
  const _hoisted_2$4 = { class: "znpb-element-box__element-name" };
  const _sfc_main$6 = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementListItem",
    props: {
      item: {}
    },
    setup(__props) {
      const props = __props;
      const isActiveFavorite = Vue.computed(() => {
        const { getUserData } = useUserData();
        return getUserData("favorite_elements", []).includes(props.item.element_type);
      });
      function addToFavorites() {
        const { getUserData, updateUserData } = useUserData();
        const activeFavoritesClone = [...getUserData("favorite_elements", [])];
        if (activeFavoritesClone.includes(props.item.element_type)) {
          const favoriteIndex = activeFavoritesClone.indexOf(props.item.element_type);
          activeFavoritesClone.splice(favoriteIndex, 1);
        } else {
          activeFavoritesClone.push(props.item.element_type);
        }
        updateUserData({
          favorite_elements: activeFavoritesClone
        });
      }
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_UIElementIcon = Vue.resolveComponent("UIElementIcon");
        return Vue.openBlock(), Vue.createElementBlock("li", {
          class: Vue.normalizeClass(["znpb-element-box", ["znpb-element-box--" + _ctx.item.element_type]]),
          title: _ctx.item.name
        }, [
          _ctx.item.label ? (Vue.openBlock(), Vue.createElementBlock("span", {
            key: 0,
            class: "znpb-element-box__label",
            style: Vue.normalizeStyle({ background: _ctx.item.label.color })
          }, Vue.toDisplayString(_ctx.item.label.text), 5)) : Vue.createCommentVNode("", true),
          Vue.createVNode(_component_Icon, {
            icon: "pin",
            class: Vue.normalizeClass(["znpb-element-box__favoriteIcon", {
              "znpb-element-box__favoriteIcon--active": isActiveFavorite.value
            }]),
            onClick: Vue.withModifiers(addToFavorites, ["stop"])
          }, null, 8, ["class", "onClick"]),
          Vue.createVNode(_component_UIElementIcon, {
            element: _ctx.item,
            class: "znpb-element-box__icon"
          }, null, 8, ["element"]),
          Vue.createElementVNode("span", _hoisted_2$4, Vue.toDisplayString(_ctx.item.name), 1)
        ], 10, _hoisted_1$4);
      };
    }
  });
  const ElementListItem_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$3 = { class: "znpb-element-category-listWrapper" };
  const _hoisted_2$3 = {
    key: 0,
    class: "znpb-element-category-listTitle"
  };
  const _hoisted_3$3 = {
    key: 1,
    class: "znpb-element-category-list"
  };
  const _sfc_main$5 = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementList",
    props: {
      elements: {},
      element: {},
      category: {}
    },
    emits: ["add-element"],
    setup(__props, { emit }) {
      return (_ctx, _cache) => {
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$3, [
          _ctx.elements.length ? (Vue.openBlock(), Vue.createElementBlock("h3", _hoisted_2$3, Vue.toDisplayString(_ctx.category), 1)) : Vue.createCommentVNode("", true),
          _ctx.elements.length ? (Vue.openBlock(), Vue.createElementBlock("ul", _hoisted_3$3, [
            (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.elements, (childElement) => {
              return Vue.openBlock(), Vue.createBlock(_sfc_main$6, {
                key: childElement.element_type,
                item: childElement,
                onClick: ($event) => emit("add-element", childElement)
              }, null, 8, ["item", "onClick"]);
            }), 128))
          ])) : Vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const ElementList_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$2 = { class: "znpb-tab__wrapper--columns-template-elements" };
  const _hoisted_2$2 = { class: "znpb-add-elements__filter" };
  const _hoisted_3$2 = {
    key: 1,
    style: { "text-align": "center" }
  };
  const _sfc_main$4 = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementsTab",
    props: {
      element: {},
      searchKeyword: { default: "" }
    },
    emits: ["update:search-keyword"],
    setup(__props, { emit }) {
      const props = __props;
      const UIStore = useUIStore();
      const elementsDefinitionsStore = useElementDefinitionsStore();
      const { getUserData } = useUserData();
      const categoriesWrapper = Vue.ref(false);
      const categoriesRefs = Vue.ref([]);
      const computedSearchKeyword = Vue.computed({
        get: () => {
          return props.searchKeyword;
        },
        set: (newValue) => {
          emit("update:search-keyword", newValue);
        }
      });
      const categoryValue = Vue.ref("all");
      const searchInputEl = Vue.ref(null);
      const elementCategories = Vue.computed(() => {
        const categoriesToReturn = [
          {
            id: "all",
            name: i18n__namespace.__("All", "zionbuilder")
          }
        ];
        if (getUserData("favorite_elements", []).length > 0) {
          categoriesToReturn.push({
            id: "favorites",
            name: i18n__namespace.__("Favorites", "zionbuilder"),
            priority: 1
          });
        }
        const clonedCategories = [...elementsDefinitionsStore.categories];
        const sortedCategories = clonedCategories.sort((a, b) => {
          return a.priority < b.priority ? -1 : 1;
        });
        return categoriesToReturn.concat(sortedCategories);
      });
      const activeElements = Vue.computed(() => {
        let elements = elementsDefinitionsStore.getVisibleElements;
        const keyword = computedSearchKeyword.value;
        if (keyword.length > 0) {
          elements = elements.filter((element) => {
            return element.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 || element.keywords.join().toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
          });
        }
        return elements;
      });
      const dropdownOptions = Vue.computed(() => {
        const keyword = computedSearchKeyword.value;
        if (keyword.length === 0) {
          return elementCategories.value;
        } else {
          return elementCategories.value.filter((category) => {
            return category.id === "all" || activeElements.value.filter((element) => element.category.includes(category.id)).length > 0;
          });
        }
      });
      const categoriesWithElements = Vue.computed(() => {
        const clonedCategories = [...elementCategories.value];
        clonedCategories.shift();
        return clonedCategories.map((category) => {
          const elements = activeElements.value.filter((element) => {
            const elementCategories2 = Array.isArray(element.category) ? element.category : [element.category];
            if (category.id === "favorites") {
              return getUserData("favorite_elements", []).indexOf(element.element_type) >= 0;
            } else {
              return elementCategories2.includes(category.id);
            }
          });
          return {
            name: category.name,
            id: category.id,
            elements
          };
        });
      });
      const onAddElement = (element) => {
        const config = __spreadValues({
          element_type: element.element_type,
          version: element.version
        }, element.extra_data);
        window.zb.run("editor/elements/add", {
          element: config,
          parentUID: UIStore.activeAddElementPopup.element.uid,
          index: UIStore.activeAddElementPopup.index
        });
        UIStore.hideAddElementsPopup();
      };
      Vue.watch(activeElements, () => {
        Vue.nextTick(() => {
          categoriesWrapper.value.scrollTop = 0;
          categoryValue.value = "all";
        });
      });
      Vue.watch(categoryValue, (newValue) => {
        if (newValue === "all") {
          categoriesWrapper.value.scrollTop = 0;
        } else {
          if (typeof categoriesRefs.value[newValue] !== "undefined") {
            if (categoriesRefs.value[newValue].$el) {
              categoriesRefs.value[newValue].$el.scrollIntoView({
                behavior: "smooth",
                inline: "start",
                block: "nearest"
              });
            }
          }
        }
      });
      Vue.onMounted(() => {
        setTimeout(() => {
          searchInputEl.value.focus();
        }, 0);
      });
      Vue.onBeforeUnmount(() => {
        computedSearchKeyword.value = "";
      });
      return (_ctx, _cache) => {
        const _component_InputSelect = Vue.resolveComponent("InputSelect");
        const _component_BaseInput = Vue.resolveComponent("BaseInput");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$2, [
          Vue.createElementVNode("div", _hoisted_2$2, [
            Vue.createVNode(_component_InputSelect, {
              modelValue: categoryValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => categoryValue.value = $event),
              class: "znpb-add-elements__filter-category",
              options: dropdownOptions.value,
              placeholder: dropdownOptions.value[0].name
            }, null, 8, ["modelValue", "options", "placeholder"]),
            Vue.createVNode(_component_BaseInput, {
              ref_key: "searchInputEl",
              ref: searchInputEl,
              modelValue: computedSearchKeyword.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => computedSearchKeyword.value = $event),
              class: "znpb-columns-templates__search-wrapper znpb-add-elements__filter-search",
              placeholder: i18n__namespace.__("Search elements", "zionbuilder"),
              clearable: true,
              icon: "search",
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          Vue.createElementVNode("div", {
            ref_key: "categoriesWrapper",
            ref: categoriesWrapper,
            class: "znpb-fancy-scrollbar znpb-wrapper-category"
          }, [
            categoriesWithElements.value.length ? (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, { key: 0 }, Vue.renderList(categoriesWithElements.value, (category) => {
              return Vue.openBlock(), Vue.createBlock(_sfc_main$5, {
                key: category.id,
                ref_for: true,
                ref: (el) => {
                  if (el)
                    categoriesRefs.value[category.id] = el;
                },
                elements: category.elements,
                element: _ctx.element,
                category: category.name,
                onAddElement
              }, null, 8, ["elements", "element", "category"]);
            }), 128)) : Vue.createCommentVNode("", true),
            !activeElements.value.length ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_3$2, Vue.toDisplayString(i18n__namespace.__("No elements found matching the search criteria", "zionbuilder")), 1)) : Vue.createCommentVNode("", true)
          ], 512)
        ]);
      };
    }
  });
  const ElementsTab_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$1 = { class: "znpb-columns-templates-wrapper" };
  const _hoisted_2$1 = { class: "znpb-columns-templates" };
  const _hoisted_3$1 = ["icon", "onClick"];
  const _hoisted_4$1 = /* @__PURE__ */ Vue.createElementVNode("span", null, null, -1);
  const _sfc_main$3 = /* @__PURE__ */ Vue.defineComponent({
    __name: "ColumnTemplates",
    props: {
      element: {}
    },
    emits: ["close"],
    setup(__props, { emit }) {
      const props = __props;
      const { isEditable: isEditable2 } = window.zb.utils;
      const UIStore = useUIStore();
      const defaultTab = props.element.element_type === "zion_column" ? "elements" : "layouts";
      const active = Vue.ref(defaultTab);
      const { addEventListener, removeEventListener } = useWindows();
      const searchKeyword = Vue.ref("");
      const spanElements = {
        full: 1,
        "one-of-two": 2,
        "one-of-three": 3,
        "one-of-four": 4,
        "one-of-five": 5,
        "one-of-six": 6,
        "4-8": 2,
        "8-4": 2,
        "3-9": 2,
        "9-3": 2,
        "3-6-3": 3,
        "3-3-6": 3,
        "6-3-3": 3,
        "6-3-3-3-3": 5,
        "3-3-3-3-6": 5,
        "3-3-6-3-3": 5
      };
      const layouts = getLayoutConfigs();
      const getSpanNumber = (id) => {
        return spanElements[id];
      };
      const wrapColumn = (config) => {
        return [
          {
            element_type: "zion_column",
            content: config,
            options: {
              _styles: {
                wrapper: {
                  styles: {
                    default: {
                      default: {
                        "flex-direction": "row"
                      }
                    }
                  }
                }
              }
            }
          }
        ];
      };
      function getOrientation(element) {
        const elementsDefinitionsStore = useElementDefinitionsStore();
        let orientation = "horizontal";
        if (element.element_type === "contentRoot") {
          return "vertical";
        }
        const elementType = elementsDefinitionsStore.getElementDefinition(element);
        if (elementType) {
          orientation = elementType.content_orientation;
        }
        if (element.options.inner_content_layout) {
          orientation = element.options.inner_content_layout;
        }
        const mediaOrientation = get(element.options, "_styles.wrapper.styles.default.default.flex-direction");
        if (mediaOrientation) {
          orientation = mediaOrientation === "row" ? "horizontal" : "vertical";
        }
        return orientation;
      }
      const addElements = (config) => {
        const elementType = UIStore.activeAddElementPopup.element.element_type;
        if (elementType === "contentRoot") {
          config = [
            {
              element_type: "zion_section",
              content: config
            }
          ];
        } else {
          if (getOrientation(UIStore.activeAddElementPopup.element) === "vertical") {
            config = wrapColumn(config);
          }
        }
        window.zb.run("editor/elements/add-elements", {
          elements: config,
          elementUID: UIStore.activeAddElementPopup.element.uid,
          index: UIStore.activeAddElementPopup.index
        });
        emit("close");
      };
      const openLibrary = () => {
        UIStore.openLibrary(UIStore.activeAddElementPopup);
        emit("close");
      };
      function onKeyDown(event) {
        if (!isEditable2(event.target)) {
          searchKeyword.value = searchKeyword.value + event.key;
        }
        if (active.value !== "elements") {
          active.value = "elements";
        }
      }
      function onTabChange(tab) {
        if (tab === "library") {
          openLibrary();
        }
      }
      Vue.onMounted(() => addEventListener("keypress", onKeyDown));
      Vue.onUnmounted(() => removeEventListener("keypress", onKeyDown));
      return (_ctx, _cache) => {
        const _component_Tab = Vue.resolveComponent("Tab");
        const _component_Tabs = Vue.resolveComponent("Tabs");
        return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$1, [
          Vue.createVNode(_component_Tabs, {
            activeTab: active.value,
            "onUpdate:activeTab": _cache[1] || (_cache[1] = ($event) => active.value = $event),
            "title-position": "center",
            onChangedTab: onTabChange
          }, {
            default: Vue.withCtx(() => [
              Vue.createVNode(_component_Tab, {
                name: "Layouts",
                class: "znpb-tab__wrapper--columns-template"
              }, {
                default: Vue.withCtx(() => [
                  Vue.createElementVNode("div", _hoisted_2$1, [
                    (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(layouts), (columnConfig, columnId) => {
                      return Vue.openBlock(), Vue.createElementBlock("div", {
                        key: columnId,
                        icon: columnId,
                        class: Vue.normalizeClass(["znpb-columns-templates__icon znpb-columns-templates__icons--" + columnId]),
                        onClick: Vue.withModifiers(($event) => addElements(columnConfig), ["stop"])
                      }, [
                        (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(getSpanNumber(columnId), (span, i) => {
                          return Vue.openBlock(), Vue.createElementBlock("span", { key: i });
                        }), 128))
                      ], 10, _hoisted_3$1);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              Vue.createVNode(_component_Tab, { name: "Elements" }, {
                default: Vue.withCtx(() => [
                  active.value === "elements" ? (Vue.openBlock(), Vue.createBlock(_sfc_main$4, {
                    key: 0,
                    "search-keyword": searchKeyword.value,
                    "onUpdate:searchKeyword": _cache[0] || (_cache[0] = ($event) => searchKeyword.value = $event),
                    element: _ctx.element
                  }, null, 8, ["search-keyword", "element"])) : Vue.createCommentVNode("", true)
                ]),
                _: 1
              }),
              Vue.createVNode(_component_Tab, { name: "Library" }, {
                default: Vue.withCtx(() => [
                  _hoisted_4$1
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["activeTab"])
        ]);
      };
    }
  });
  const ColumnTemplates_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$2 = /* @__PURE__ */ Vue.defineComponent({
    __name: "AddElementPopup",
    setup(__props) {
      const UIStore = useUIStore();
      Vue.watch(
        () => UIStore.activeAddElementPopup,
        (newValue) => {
          if (newValue) {
            window.addEventListener("scroll", UIStore.hideAddElementsPopup);
          } else {
            window.removeEventListener("scroll", UIStore.hideAddElementsPopup);
          }
        }
      );
      return (_ctx, _cache) => {
        const _component_Tooltip = Vue.resolveComponent("Tooltip");
        return Vue.unref(UIStore).activeAddElementPopup ? (Vue.openBlock(), Vue.createBlock(_component_Tooltip, {
          key: Vue.unref(UIStore).activeAddElementPopup.key,
          "tooltip-class": "hg-popper--big-arrows",
          placement: "auto",
          show: true,
          "append-to": "body",
          trigger: null,
          "close-on-outside-click": true,
          "close-on-escape": true,
          "popper-ref": Vue.unref(UIStore).activeAddElementPopup.selector,
          onHide: Vue.unref(UIStore).hideAddElementsPopup
        }, {
          content: Vue.withCtx(() => [
            Vue.createVNode(_sfc_main$3, {
              element: Vue.unref(UIStore).activeAddElementPopup.element,
              onClose: Vue.unref(UIStore).hideAddElementsPopup
            }, null, 8, ["element", "onClose"])
          ]),
          _: 1
        }, 8, ["popper-ref", "onHide"])) : Vue.createCommentVNode("", true);
      };
    }
  });
  const _sfc_main$1 = /* @__PURE__ */ Vue.defineComponent({
    __name: "ElementMenu",
    setup(__props) {
      const { Environment: Environment2 } = window.zb.utils;
      const UIStore = useUIStore();
      const userStore = useUserStore();
      const { addEventListener, removeEventListener } = useWindows();
      const { getData } = useLocalStorage();
      const controlKey = Environment2.isMac ? "⌘" : "⌃";
      const { copyElement, pasteElement, copiedElement: copiedElement2, pasteElementStyles, pasteElementClasses } = useElementActions();
      const elementActions = Vue.computed(() => {
        if (!UIStore.activeElementMenu) {
          return [];
        }
        const element = UIStore.activeElementMenu.element;
        const contentStore = useContentStore();
        const isElementVisible = contentStore.getElementValue(element.uid, "options._isVisible", true);
        return [
          {
            title: `${i18n__namespace.__("Edit", "zionbuilder")} ${contentStore.getElementName(element)}`,
            icon: "edit",
            action: () => {
              UIStore.editElement(element);
            },
            cssClasses: "znpb-menu-item--separator-bottom"
          },
          {
            title: `${i18n__namespace.__("Duplicate", "zionbuilder")}`,
            icon: "copy",
            action: () => {
              element.duplicate();
            },
            append: `${controlKey}+D`,
            disabled: !userStore.permissions.only_content
          },
          {
            title: `${i18n__namespace.__("Copy", "zionbuilder")}`,
            icon: "copy",
            action: () => {
              copyElement(element);
            },
            append: `${controlKey}+C`,
            disabled: !userStore.permissions.only_content
          },
          {
            title: `${i18n__namespace.__("Cut", "zionbuilder")}`,
            icon: "close",
            action: () => {
              copyElement(element, "cut");
            },
            append: `${controlKey}+X`,
            disabled: !userStore.permissions.only_content
          },
          {
            title: `${i18n__namespace.__("Paste", "zionbuilder")}`,
            icon: "paste",
            action: () => {
              pasteElement(element);
            },
            append: `${controlKey}+V`,
            show: hasCopiedElement.value,
            disabled: !userStore.permissions.only_content
          },
          {
            title: i18n__namespace.__("Paste styles", "zionbuilder"),
            icon: "drop",
            action: () => {
              pasteElementStyles(element);
            },
            append: `${controlKey}+⇧+V`,
            show: hasCopiedElementStyles.value,
            disabled: !userStore.permissions.only_content
          },
          {
            title: i18n__namespace.__("Paste classes", "zionbuilder"),
            icon: "braces",
            action: () => {
              pasteElementClasses(element);
            },
            show: hasCopiedElementClasses.value,
            disabled: !userStore.permissions.only_content
          },
          {
            title: i18n__namespace.__("Save Element ", "zionbuilder"),
            icon: "check",
            action: () => {
              saveElement(element);
            },
            disabled: !userStore.permissions.only_content
          },
          {
            title: isElementVisible ? i18n__namespace.__("Hide Element ", "zionbuilder") : i18n__namespace.__("Show Element ", "zionbuilder"),
            icon: "eye",
            action: () => {
              element.isVisible = !isElementVisible;
            },
            append: `${controlKey}+H`,
            cssClasses: "znpb-menu-item--separator-bottom",
            disabled: !userStore.permissions.only_content
          },
          {
            title: i18n__namespace.__("Wrap with container", "zionbuilder"),
            icon: "eye",
            action: () => {
              element.wrapIn();
            },
            append: `${controlKey}+H`,
            cssClasses: "znpb-menu-item--separator-bottom",
            disabled: !userStore.permissions.only_content
          },
          {
            title: i18n__namespace.__("Discard styles", "zionbuilder"),
            icon: "drop",
            action: () => {
              discardElementStyles(element);
            },
            show: element && Object.keys(get(element.options, "_styles", {})).length > 0,
            disabled: !userStore.permissions.only_content
          },
          {
            title: i18n__namespace.__("Delete Element", "zionbuilder"),
            icon: "delete",
            action: () => element.delete(),
            append: `⌦`,
            disabled: !userStore.permissions.only_content
          }
        ];
      });
      Vue.watch(UIStore.activeElementMenu, (newValue) => {
        if (newValue) {
          addEventListener("scroll", UIStore.hideElementMenu);
        } else {
          removeEventListener("scroll", UIStore.hideElementMenu);
        }
      });
      function discardElementStyles(element) {
        window.zb.run("editor/elements/discard-element-styles", {
          element
        });
      }
      function saveElement(element) {
        const { showSaveElement } = useSaveTemplate();
        showSaveElement(element, "block");
      }
      const hasCopiedElement = Vue.computed(() => {
        return !!(copiedElement2.value.element || getData("copiedElement"));
      });
      const hasCopiedElementClasses = Vue.computed(() => {
        return !!getData("copiedElementClasses");
      });
      const hasCopiedElementStyles = Vue.computed(() => {
        return !!getData("copiedElementStyles");
      });
      return (_ctx, _cache) => {
        const _component_Menu = Vue.resolveComponent("Menu");
        const _component_Tooltip = Vue.resolveComponent("Tooltip");
        return Vue.openBlock(), Vue.createBlock(_component_Tooltip, {
          key: Vue.unref(UIStore).activeElementMenu.rand,
          "tooltip-class": "hg-popper--big-arrows znpb-rightClickMenu__Tooltip",
          placement: "auto",
          show: true,
          "append-to": "body",
          trigger: "click",
          "close-on-outside-click": true,
          "close-on-escape": true,
          "popper-ref": Vue.unref(UIStore).activeElementMenu.selector,
          onHide: Vue.unref(UIStore).hideElementMenu
        }, {
          content: Vue.withCtx(() => [
            Vue.createVNode(_component_Menu, {
              actions: elementActions.value,
              onAction: Vue.unref(UIStore).hideElementMenu
            }, null, 8, ["actions", "onAction"])
          ]),
          _: 1
        }, 8, ["popper-ref", "onHide"]);
      };
    }
  });
  const ElementMenu_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1 = {
    key: 0,
    class: "znpb-editor-layout__preview-breakpoints"
  };
  const _hoisted_2 = ["onClick"];
  const _hoisted_3 = /* @__PURE__ */ Vue.createElementVNode("div", { class: "znpb-main-wrapper--mainBarPlaceholderInner" }, null, -1);
  const _hoisted_4 = [
    _hoisted_3
  ];
  const _hoisted_5 = { class: "znpb-center-area" };
  const _hoisted_6 = /* @__PURE__ */ Vue.createElementVNode("div", { class: "znpb-panel-placeholder" }, null, -1);
  const _hoisted_7 = [
    _hoisted_6
  ];
  const _hoisted_8 = {
    key: 0,
    class: "znpb-loading-wrapper-gif"
  };
  const _hoisted_9 = ["src"];
  const _hoisted_10 = { class: "znpb-loading-wrapper-gif__text" };
  const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
    __name: "EditorApp",
    setup(__props) {
      const { useNotificationsStore: useNotificationsStore2, useBuilderOptionsStore } = window.zb.store;
      const { useResponsiveDevices: useResponsiveDevices2 } = window.zb.composables;
      const devicesVisible = Vue.ref(false);
      const UIStore = useUIStore();
      const { notifications } = pinia.storeToRefs(useNotificationsStore2());
      const { activeResponsiveDeviceInfo: activeResponsiveDeviceInfo2, responsiveDevices, setActiveResponsiveDeviceId, activeResponsiveDeviceId } = useResponsiveDevices2();
      const { applyShortcuts } = useKeyBindings();
      const { editorData: editorData2 } = useEditorData();
      const panelComponentsMap = {
        "panel-element-options": _sfc_main$g,
        "panel-global-settings": _sfc_main$z,
        "preview-iframe": PreviewIframe,
        "panel-history": _sfc_main$y,
        "panel-tree": _sfc_main$A
      };
      const cssClasses = useCSSClassesStore();
      cssClasses.setCSSClasses(window.ZnPbInitialData.css_classes);
      cssClasses.setStaticClasses(window.ZnPbInitialData.css_static_classes);
      const pageSettings = usePageSettingsStore();
      pageSettings.settings = window.ZnPbInitialData.page_settings.values;
      const mainBarDraggingPlaceholderStyles = Vue.computed(() => {
        return {
          transform: `translate3d(${UIStore.mainBarDraggingPlaceholder.left - 22}px, ${UIStore.mainBarDraggingPlaceholder.top - 22}px,0)`
        };
      });
      const historyStore = useHistoryStore();
      const { saveAutosave, isSavePageLoading: isSavePageLoading2 } = useSavePage();
      let canAutosave = true;
      Vue.watch(
        () => historyStore.activeHistoryIndex,
        (newValue) => {
          if (canAutosave && newValue > 0) {
            saveAutosave();
            canAutosave = false;
            setTimeout(() => {
              canAutosave = true;
            }, window.ZnPbInitialData.autosaveInterval * 1e3);
          }
        }
      );
      Vue.provide("builderOptions", useBuilderOptionsStore);
      Vue.provide("serverRequester", serverRequest);
      Vue.provide("masks", editorData2.value.masks);
      Vue.provide("plugin_info", editorData2.value.plugin_info);
      const showEditorButtonStyle = Vue.computed(() => {
        let buttonStyle;
        buttonStyle = {
          left: "30px",
          top: "30px"
        };
        return buttonStyle;
      });
      Vue.onMounted(() => {
        document.addEventListener("keydown", applyShortcuts);
      });
      Vue.onBeforeUnmount(() => {
        document.removeEventListener("keydown", applyShortcuts);
      });
      function activateDevice(device) {
        setActiveResponsiveDeviceId(device.id);
        setTimeout(() => {
        }, 50);
      }
      function showPanels() {
        UIStore.setPreviewMode(false);
      }
      return (_ctx, _cache) => {
        const _component_Icon = Vue.resolveComponent("Icon");
        const _component_Tooltip = Vue.resolveComponent("Tooltip");
        const _component_Notice = Vue.resolveComponent("Notice");
        return Vue.openBlock(), Vue.createElementBlock("div", {
          id: "znpb-main-wrapper",
          class: Vue.normalizeClass(["znpb-main-wrapper", {
            [`znpb-responsiveDevice--${Vue.unref(activeResponsiveDeviceId)}`]: Vue.unref(activeResponsiveDeviceId)
          }])
        }, [
          Vue.withDirectives(Vue.createElementVNode("div", {
            style: Vue.normalizeStyle(showEditorButtonStyle.value),
            class: "znpb-editor-layout__preview-buttons"
          }, [
            Vue.createElementVNode("div", {
              class: "znpb-editor-layout__preview-button",
              onClick: showPanels
            }, [
              Vue.createVNode(_component_Icon, { icon: "layout" })
            ]),
            Vue.createElementVNode("div", {
              class: "znpb-editor-layout__preview-button",
              onClick: _cache[0] || (_cache[0] = ($event) => devicesVisible.value = !devicesVisible.value)
            }, [
              Vue.createVNode(_component_Icon, {
                icon: Vue.unref(activeResponsiveDeviceInfo2).icon
              }, null, 8, ["icon"])
            ]),
            devicesVisible.value ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
              Vue.createVNode(_component_Tooltip, {
                show: devicesVisible.value,
                "show-arrows": false,
                "append-to": "element",
                trigger: null,
                placement: "bottom",
                "close-on-outside-click": true
              }, {
                content: Vue.withCtx(() => [
                  (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(responsiveDevices), (device, index2) => {
                    return Vue.openBlock(), Vue.createElementBlock("div", {
                      key: index2,
                      ref_for: true,
                      ref: "dropdown",
                      class: Vue.normalizeClass(["znpb-options-devices-buttons znpb-has-responsive-options__icon-button", {
                        "znpb-has-responsive-options__icon-button--active": Vue.unref(activeResponsiveDeviceId) === device.id
                      }]),
                      onClick: ($event) => activateDevice(device)
                    }, [
                      Vue.createVNode(_component_Icon, {
                        icon: device.icon
                      }, null, 8, ["icon"])
                    ], 10, _hoisted_2);
                  }), 128))
                ]),
                _: 1
              }, 8, ["show"])
            ])) : Vue.createCommentVNode("", true)
          ], 4), [
            [Vue.vShow, Vue.unref(UIStore).isPreviewMode]
          ]),
          Vue.createElementVNode("div", {
            class: Vue.normalizeClass(["znpb-panels-wrapper", {
              [`znpb-editorHeaderPosition--${Vue.unref(UIStore).mainBar.position}`]: Vue.unref(UIStore).mainBar.position
            }])
          }, [
            Vue.unref(UIStore).mainBar.isDragging ? (Vue.openBlock(), Vue.createElementBlock("div", {
              key: 0,
              class: Vue.normalizeClass(["znpb-main-wrapper--mainBarPlaceholder", {
                [`znpb-main-wrapper--mainBarPlaceholder--${Vue.unref(UIStore).mainBar.draggingPosition}`]: Vue.unref(UIStore).mainBar.draggingPosition
              }])
            }, _hoisted_4, 2)) : Vue.createCommentVNode("", true),
            Vue.createVNode(_sfc_main$r),
            Vue.createElementVNode("div", _hoisted_5, [
              Vue.unref(UIStore).panelPlaceholder.visibility ? (Vue.openBlock(), Vue.createElementBlock("div", {
                key: 0,
                id: "znpb-panel-placeholder",
                style: Vue.normalizeStyle({ left: Vue.unref(UIStore).panelPlaceholder.left + "px" })
              }, _hoisted_7, 4)) : Vue.createCommentVNode("", true),
              (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(UIStore).openPanels, (panel) => {
                return Vue.withDirectives((Vue.openBlock(), Vue.createBlock(Vue.resolveDynamicComponent(panelComponentsMap[panel.id]), {
                  key: panel.id,
                  panel
                }, null, 8, ["panel"])), [
                  [Vue.vShow, !Vue.unref(UIStore).isPreviewMode || panel.id === "preview-iframe"]
                ]);
              }), 128))
            ])
          ], 2),
          Vue.unref(UIStore).isPreviewLoading ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_8, [
            Vue.createElementVNode("img", {
              src: Vue.unref(editorData2).urls.loader
            }, null, 8, _hoisted_9),
            Vue.createElementVNode("div", _hoisted_10, Vue.toDisplayString(i18n__namespace.__("Generating preview...", "zionbuilder")), 1)
          ])) : Vue.createCommentVNode("", true),
          Vue.createVNode(Vue.unref(_sfc_main$2)),
          Vue.unref(UIStore).activeElementMenu ? (Vue.openBlock(), Vue.createBlock(Vue.unref(_sfc_main$1), { key: 1 })) : Vue.createCommentVNode("", true),
          Vue.createVNode(_sfc_main$8),
          Vue.createVNode(_sfc_main$9),
          Vue.createVNode(_sfc_main$a),
          Vue.createVNode(_sfc_main$7),
          (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(notifications), (error) => {
            return Vue.openBlock(), Vue.createBlock(_component_Notice, {
              key: error.message,
              error,
              onCloseNotice: ($event) => error.remove()
            }, null, 8, ["error", "onCloseNotice"]);
          }), 128)),
          Vue.unref(UIStore).mainBar.isDragging ? (Vue.openBlock(), Vue.createElementBlock("div", {
            key: 2,
            class: "znpb-editor-header__helper",
            style: Vue.normalizeStyle(mainBarDraggingPlaceholderStyles.value)
          }, [
            Vue.createVNode(_component_Icon, {
              icon: "more",
              rotate: "90"
            })
          ], 4)) : Vue.createCommentVNode("", true),
          Vue.createVNode(Vue.unref(components.CornerLoader), { "is-loading": Vue.unref(isSavePageLoading2) }, null, 8, ["is-loading"])
        ], 2);
      };
    }
  });
  const EditorApp_vue_vue_type_style_index_0_lang = "";
  class CommandManager {
    constructor() {
      __publicField(this, "commands", []);
    }
    registerCommand(commandId, commandClass) {
      this.commands.push({
        id: commandId,
        callback: (commandArgs) => {
          return new commandClass(commandArgs).runCommand();
        }
      });
    }
    getCommand(commandId) {
      const command = this.commands.find((command2) => command2.id === commandId);
      if (!command) {
        console.warn(`Command ${commandId} not found`);
        return false;
      }
      return command;
    }
    runCommand(commandId, commandArgs) {
      const command = this.getCommand(commandId);
      if (command) {
        return command.callback.call(command, commandArgs);
      } else {
        console.warn(`Command with id ${commandId} not found`);
      }
      return null;
    }
  }
  class BaseCommand {
    constructor(data) {
      __publicField(this, "data", {});
      this.data = data;
    }
    runCommand() {
      this.beforeCommand();
      const result = this.doCommand();
      this.afterCommand(result);
      return result;
    }
    undoCommand() {
      console.warn("undoCommand needs to be implemented by the child class");
    }
    doCommand() {
      console.warn("doCommand needs to be implemented by the child class");
    }
    beforeCommand() {
    }
    afterCommand(result) {
    }
  }
  class HistoryCommand extends BaseCommand {
    constructor(data) {
      super(data);
    }
    getHistory() {
      return useHistoryStore();
    }
    getActionName(action) {
      const actions = {
        added: i18n__namespace.__("added", "zionbuilder"),
        deleted: i18n__namespace.__("deleted", "zionbuilder"),
        renamed: i18n__namespace.__("renamed", "zionbuilder"),
        show: i18n__namespace.__("show", "zionbuilder"),
        hide: i18n__namespace.__("hide", "zionbuilder"),
        duplicate: i18n__namespace.__("duplicate", "zionbuilder"),
        wrapped_with_container: i18n__namespace.__("wrapped with container", "zionbuilder"),
        copied: i18n__namespace.__("copied", "zionbuilder"),
        moved: i18n__namespace.__("moved", "zionbuilder"),
        pasteStyles: i18n__namespace.__("paste styles", "zionbuilder"),
        pasteCSSClasses: i18n__namespace.__("paste css classes", "zionbuilder"),
        discardStyles: i18n__namespace.__("discard styles", "zionbuilder")
      };
      return actions[action] || "Invalid action";
    }
  }
  const _AddElement = class _AddElement extends HistoryCommand {
    doCommand() {
      const contentStore = useContentStore();
      const { element, parentUID, index: index2 } = this.data;
      const newElement = contentStore.addElement(element, parentUID, index2);
      if (newElement) {
        const historyManager = this.getHistory();
        historyManager.addHistoryItem({
          undo: _AddElement.undo,
          redo: _AddElement.redo,
          data: {
            elementModel: newElement.toJSON(),
            parentUID,
            index: index2
          },
          title: newElement.name,
          action: this.getActionName("added")
        });
        return newElement.uid;
      }
      return null;
    }
    static undo(historyItem) {
      const { elementModel } = historyItem.data || {};
      if (elementModel) {
        const contentStore = useContentStore();
        contentStore.deleteElement(elementModel.uid);
      }
    }
    static redo(historyItem) {
      const { data = {} } = historyItem;
      const { elementModel, parentUID, index: index2 } = data;
      const contentStore = useContentStore();
      contentStore.addElement(elementModel, parentUID, index2);
    }
  };
  __publicField(_AddElement, "commandID", "editor/elements/add");
  let AddElement = _AddElement;
  const _DeleteElement = class _DeleteElement extends HistoryCommand {
    doCommand() {
      const { elementUID } = this.data;
      const contentStore = useContentStore();
      const deletedElement = contentStore.getElement(elementUID);
      if (deletedElement) {
        const historyManager = this.getHistory();
        historyManager.addHistoryItem({
          undo: _DeleteElement.undo,
          redo: _DeleteElement.redo,
          data: {
            elementModel: deletedElement.toJSON(),
            parentUID: deletedElement.parentUID,
            index: deletedElement.indexInParent
          },
          title: deletedElement.name,
          action: this.getActionName("deleted")
        });
        contentStore.deleteElement(elementUID);
      }
    }
    /**
     * Undo command. Will re-add the deleted element
     *
     * @param historyItem
     */
    static undo(historyItem) {
      const { data = {} } = historyItem;
      const { elementModel, parentUID, index: index2 } = data;
      const contentStore = useContentStore();
      contentStore.addElement(elementModel, parentUID, index2);
    }
    static redo(historyItem) {
      const { data } = historyItem;
      if (data.elementModel) {
        const contentStore = useContentStore();
        contentStore.deleteElement(data.elementModel.uid);
      }
    }
  };
  __publicField(_DeleteElement, "commandID", "editor/elements/delete");
  let DeleteElement = _DeleteElement;
  let items = [];
  class DebouncedHistoryCommand extends HistoryCommand {
    constructor(data) {
      super(data);
      if (this.constructor.debounce === null) {
        this.constructor.debounce = debounce((fn, ...args) => {
          fn(...args);
        }, 800);
      }
    }
    addToHistory(historyItem) {
      items.push(historyItem);
      this.constructor.debounce(this.getHistoryItem, historyItem);
    }
    getHistoryItem(historyItem) {
      const historyStore = useHistoryStore();
      historyItem.initialChange = items[0].data;
      historyStore.addHistoryItem(historyItem);
      items = [];
    }
  }
  __publicField(DebouncedHistoryCommand, "debounce", null);
  const _RenameElement = class _RenameElement extends DebouncedHistoryCommand {
    doCommand() {
      const { elementUID, newName } = this.data;
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        const oldName = element.name;
        element.setName(newName);
        this.addToHistory({
          undo: _RenameElement.undo,
          redo: _RenameElement.redo,
          data: {
            elementUID,
            oldName,
            newName
          },
          title: element.name,
          action: this.getActionName("renamed")
        });
      }
    }
    /**
     * Undo command. Will re-add the deleted element
     *
     * @param historyItem
     */
    static undo(historyItem) {
      const { data = {}, initialChange = {} } = historyItem;
      const { elementUID } = data;
      const { oldName } = initialChange;
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        element.setName(oldName);
      }
    }
    static redo(historyItem) {
      const { data = {} } = historyItem;
      const { elementUID, newName } = data;
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        element.setName(newName);
      }
    }
  };
  __publicField(_RenameElement, "commandID", "editor/elements/rename");
  let RenameElement = _RenameElement;
  const _RemoveAllElements = class _RemoveAllElements extends HistoryCommand {
    doCommand() {
      const contentStore = useContentStore();
      const { areaID } = this.data;
      const areaElement = contentStore.getElement(areaID);
      let areaModel = {};
      if (areaElement) {
        areaModel = areaElement == null ? void 0 : areaElement.toJSON();
        contentStore.clearAreaContent(areaID);
        const historyManager = this.getHistory();
        historyManager.addHistoryItem({
          undo: _RemoveAllElements.undo,
          redo: _RemoveAllElements.redo,
          data: {
            areaID,
            areaModel
          },
          title: i18n__namespace.__("Page cleared", "zionbuilder")
        });
      }
    }
    static undo(historyItem) {
      const { areaID, areaModel } = historyItem.data || {};
      const contentStore = useContentStore();
      contentStore.registerArea(
        {
          name: areaID,
          id: areaID
        },
        areaModel.content
      );
    }
    static redo(historyItem) {
      const { areaID, areaModel } = historyItem.data || {};
      const contentStore = useContentStore();
      contentStore.clearAreaContent(areaID);
    }
  };
  __publicField(_RemoveAllElements, "commandID", "editor/elements/remove_all");
  let RemoveAllElements = _RemoveAllElements;
  const _SetElementVisibility = class _SetElementVisibility extends HistoryCommand {
    doCommand() {
      const { elementUID, isVisible } = this.data;
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        element.setVisibility(isVisible);
        const historyManager = this.getHistory();
        historyManager.addHistoryItem({
          undo: _SetElementVisibility.undo,
          redo: _SetElementVisibility.redo,
          data: {
            elementUID,
            isVisible
          },
          title: element.name,
          action: isVisible ? this.getActionName("show") : this.getActionName("hide")
        });
      }
    }
    static undo(historyItem) {
      const { elementUID, isVisible } = historyItem.data || {};
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        element.setVisibility(!isVisible);
      }
    }
    static redo(historyItem) {
      const { elementUID, isVisible } = historyItem.data || {};
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        element.setVisibility(isVisible);
      }
    }
  };
  __publicField(_SetElementVisibility, "commandID", "editor/elements/set_visibility");
  let SetElementVisibility = _SetElementVisibility;
  const _duplicateElement = class _duplicateElement extends HistoryCommand {
    doCommand() {
      const contentStore = useContentStore();
      const { element } = this.data;
      const newElement = contentStore.duplicateElement(element);
      if (newElement) {
        const historyManager = this.getHistory();
        historyManager.addHistoryItem({
          undo: _duplicateElement.undo,
          redo: _duplicateElement.redo,
          data: {
            elementModel: newElement.toJSON(),
            elementUID: element.uid
          },
          title: element.name,
          action: this.getActionName("duplicate")
        });
        return newElement.uid;
      }
      return null;
    }
    static undo(historyItem) {
      const { elementModel } = historyItem.data;
      if (elementModel) {
        const contentStore = useContentStore();
        contentStore.deleteElement(elementModel.uid);
      }
    }
    static redo(historyItem) {
      const { elementUID, elementModel } = historyItem.data;
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        const elementIndex = element.indexInParent;
        contentStore.addElement(elementModel, element.parentUID, elementIndex + 1);
      }
    }
  };
  __publicField(_duplicateElement, "commandID", "editor/elements/duplicate");
  let duplicateElement = _duplicateElement;
  const _WrapElement = class _WrapElement extends HistoryCommand {
    doCommand() {
      const { element, wrapperType } = this.data;
      const contentStore = useContentStore();
      const parent2 = element.parent;
      const newElement = contentStore.registerElement(
        {
          element_type: wrapperType
        },
        parent2.uid
      );
      const elementModel = newElement.toJSON();
      newElement.addChild(element);
      parent2.replaceChild(element, newElement);
      if (newElement) {
        const historyManager = this.getHistory();
        historyManager.addHistoryItem({
          undo: _WrapElement.undo,
          redo: _WrapElement.redo,
          data: {
            elementModel,
            wrappedElementUID: element.uid
          },
          title: newElement.name,
          action: this.getActionName("wrapped_with_container")
        });
        return newElement.uid;
      }
      return null;
    }
    static undo(historyItem) {
      const { elementModel, wrappedElementUID } = historyItem.data;
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementModel.uid);
      const wrappedElement = contentStore.getElement(wrappedElementUID);
      if (element && element.parent && wrappedElement) {
        element.parent.replaceChild(element, wrappedElement);
        contentStore.deleteElement(element.uid);
      }
    }
    static redo(historyItem) {
      const { elementModel, wrappedElementUID } = historyItem.data;
      const contentStore = useContentStore();
      const element = contentStore.getElement(wrappedElementUID);
      const parent2 = element == null ? void 0 : element.parent;
      if (element && parent2) {
        const newElement = contentStore.registerElement(elementModel, parent2.uid);
        newElement.addChild(element);
        parent2.replaceChild(element, newElement);
      }
    }
  };
  __publicField(_WrapElement, "commandID", "editor/elements/wrap_element");
  let WrapElement = _WrapElement;
  const _CopyElement = class _CopyElement extends HistoryCommand {
    doCommand() {
      const { parent: parent2, copiedElement: copiedElement2, index: index2 } = this.data;
      const newElement = parent2.addChild(regenerateUIDs(copiedElement2), index2);
      if (newElement) {
        const historyManager = this.getHistory();
        historyManager.addHistoryItem({
          undo: _CopyElement.undo,
          redo: _CopyElement.redo,
          data: {
            elementModel: newElement.toJSON(),
            parentUID: parent2.uid,
            index: index2
          },
          title: newElement.name,
          action: this.getActionName("copied")
        });
        return newElement.uid;
      }
      return null;
    }
    static undo(historyItem) {
      const { elementModel } = historyItem.data || {};
      if (elementModel) {
        const contentStore = useContentStore();
        contentStore.deleteElement(elementModel.uid);
      }
    }
    static redo(historyItem) {
      const { elementModel, parentUID, index: index2 } = historyItem.data || {};
      const contentStore = useContentStore();
      contentStore.addElement(elementModel, parentUID, index2);
    }
  };
  __publicField(_CopyElement, "commandID", "editor/elements/copy");
  let CopyElement = _CopyElement;
  const _MoveElement = class _MoveElement extends HistoryCommand {
    doCommand() {
      const { element, newParent, index: index2 } = this.data;
      const oldParentUID = element.parentUID;
      const oldIndex = element.indexInParent;
      element.move(newParent, index2);
      const historyManager = this.getHistory();
      historyManager.addHistoryItem({
        undo: _MoveElement.undo,
        redo: _MoveElement.redo,
        data: {
          elementUID: element.uid,
          oldParentUID,
          newParentUID: newParent.uid,
          newIndex: index2,
          oldIndex
        },
        title: element.name,
        action: this.getActionName("moved")
      });
    }
    static undo(historyItem) {
      const { elementUID, oldParentUID, oldIndex } = historyItem.data || {};
      const contentStore = useContentStore();
      const movedElement = contentStore.getElement(elementUID);
      const oldParent = contentStore.getElement(oldParentUID);
      if (movedElement && oldParent) {
        movedElement.move(oldParent, oldIndex);
      }
    }
    static redo(historyItem) {
      const { elementUID, newParentUID, newIndex } = historyItem.data || {};
      const contentStore = useContentStore();
      const movedElement = contentStore.getElement(elementUID);
      const oldParent = contentStore.getElement(newParentUID);
      if (movedElement && oldParent) {
        movedElement.move(oldParent, newIndex);
      }
    }
  };
  __publicField(_MoveElement, "commandID", "editor/elements/move");
  let MoveElement = _MoveElement;
  const _PasteElementStyles = class _PasteElementStyles extends HistoryCommand {
    doCommand() {
      const { element, styles } = this.data;
      const oldStyles = JSON.parse(
        JSON.stringify({
          styles: element.options._styles || {},
          custom_css: get(element, "options._advanced_options._custom_css", "")
        })
      );
      if (styles.styles) {
        if (!element.options._styles) {
          element.options._styles = {};
        }
        const elementStyleConfig = element.elementDefinition.style_elements || {};
        const stylesToAdd = {};
        Object.keys(elementStyleConfig).forEach((styleSelector) => {
          if (typeof styles.styles[styleSelector] !== void 0) {
            stylesToAdd[styleSelector] = styles.styles[styleSelector];
          }
        });
        merge$1(element.options._styles || {}, stylesToAdd);
      }
      if (styles.custom_css.length) {
        const existingStyles = get(element, "options._advanced_options._custom_css", "");
        set(element, "options._advanced_options._custom_css", existingStyles + styles.custom_css);
      }
      const historyManager = this.getHistory();
      historyManager.addHistoryItem({
        undo: _PasteElementStyles.undo,
        redo: _PasteElementStyles.redo,
        data: {
          elementUID: element.uid,
          oldStyles,
          newStyles: styles
        },
        title: element.name,
        action: this.getActionName("pasteStyles")
      });
    }
    static undo(historyItem) {
      var _a, _b;
      const { elementUID, oldStyles } = historyItem.data || {};
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        element.options._styles = JSON.parse(JSON.stringify(oldStyles.styles));
        if (((_b = (_a = element.options) == null ? void 0 : _a._advanced_options) == null ? void 0 : _b._custom_css) && oldStyles.custom_css.length) {
          element.options._advanced_options._custom_css = oldStyles.custom_css;
        }
      }
    }
    static redo(historyItem) {
      const { elementUID, newStyles } = historyItem.data || {};
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        if (newStyles.styles) {
          if (!element.options._styles) {
            element.options._styles = {};
          }
          const elementStyleConfig = element.elementDefinition.style_elements || {};
          const stylesToAdd = {};
          Object.keys(elementStyleConfig).forEach((styleSelector) => {
            if (typeof newStyles.styles[styleSelector] !== void 0) {
              stylesToAdd[styleSelector] = newStyles.styles[styleSelector];
            }
          });
          merge$1(element.options._styles || {}, stylesToAdd);
        }
        if (newStyles.custom_css.length) {
          const existingStyles = get(element, "options._advanced_options._custom_css", "");
          set(element, "options._advanced_options._custom_css", existingStyles + newStyles.custom_css);
        }
      }
    }
  };
  __publicField(_PasteElementStyles, "commandID", "editor/elements/paste-styles");
  let PasteElementStyles = _PasteElementStyles;
  const _PasteElementClasses = class _PasteElementClasses extends HistoryCommand {
    doCommand() {
      const { element, classes } = this.data;
      const oldCSSClasses = [...get(element.options, "_styles.wrapper.classes", [])];
      merge$1(element.options, {
        _styles: {
          wrapper: {
            classes
          }
        }
      });
      const historyManager = this.getHistory();
      historyManager.addHistoryItem({
        undo: _PasteElementClasses.undo,
        redo: _PasteElementClasses.redo,
        data: {
          elementUID: element.uid,
          oldCSSClasses,
          newCSSClasses: classes
        },
        title: element.name,
        action: this.getActionName("pasteCSSClasses")
      });
    }
    static undo(historyItem) {
      const { elementUID, oldCSSClasses } = historyItem.data || {};
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        set(element.options, "_styles.wrapper.classes", [...oldCSSClasses]);
      }
    }
    static redo(historyItem) {
      const { elementUID, newCSSClasses } = historyItem.data || {};
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        merge$1(element.options, {
          _styles: {
            wrapper: {
              classes: [...newCSSClasses]
            }
          }
        });
      }
    }
  };
  __publicField(_PasteElementClasses, "commandID", "editor/elements/paste-css-classes");
  let PasteElementClasses = _PasteElementClasses;
  const _DiscardElementStyles = class _DiscardElementStyles extends HistoryCommand {
    doCommand() {
      const { element } = this.data;
      const oldStyles = JSON.parse(JSON.stringify(element.options._styles || {}));
      delete element.options._styles;
      const historyManager = this.getHistory();
      historyManager.addHistoryItem({
        undo: _DiscardElementStyles.undo,
        redo: _DiscardElementStyles.redo,
        data: {
          elementUID: element.uid,
          oldStyles
        },
        title: element.name,
        action: this.getActionName("discardStyles")
      });
    }
    static undo(historyItem) {
      const { elementUID, oldStyles } = historyItem.data || {};
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        element.options._styles = JSON.parse(JSON.stringify(oldStyles));
      }
    }
    static redo(historyItem) {
      const { elementUID } = historyItem.data || {};
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        delete element.options._styles;
      }
    }
  };
  __publicField(_DiscardElementStyles, "commandID", "editor/elements/discard-element-styles");
  let DiscardElementStyles = _DiscardElementStyles;
  const _AddTemplate = class _AddTemplate extends HistoryCommand {
    doCommand() {
      const { templateContent } = this.data;
      const UIStore = useUIStore();
      const contentStore = useContentStore();
      const rootElement = contentStore.contentRootElement;
      const { element = rootElement, index: index2 = -1 } = UIStore.libraryInsertConfig;
      const addedElements = element.addChildren(templateContent, index2);
      if (addedElements.length) {
        this.getHistory().addHistoryItem({
          undo: _AddTemplate.undo,
          redo: _AddTemplate.redo,
          data: {
            templateContent,
            elementUID: element.uid,
            index: index2,
            addedElementsUIDs: addedElements.map((el) => el.uid)
          },
          title: i18n__namespace.__("Template", "zionbuilder"),
          action: i18n__namespace.__("added", "zionbuilder")
        });
      }
    }
    static undo(historyItem) {
      const { addedElementsUIDs = [] } = historyItem.data || {};
      if (addedElementsUIDs.length) {
        const contentStore = useContentStore();
        addedElementsUIDs.forEach((elementUID) => {
          contentStore.deleteElement(elementUID);
        });
      }
    }
    static redo(historyItem) {
      const { templateContent, elementUID, index: index2 } = historyItem.data || {};
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      element.addChildren(templateContent, index2);
    }
  };
  __publicField(_AddTemplate, "commandID", "editor/elements/add-template");
  let AddTemplate = _AddTemplate;
  const _AddElements = class _AddElements extends HistoryCommand {
    doCommand() {
      const { elements, elementUID, index: index2 } = this.data;
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      const elementsForInsert = regenerateUIDsForContent(elements);
      if (!element) {
        console.log(`Element with id ${elementUID} not found. Cannot add elements`);
        return;
      }
      const addedElements = element.addChildren(elements, index2);
      if (addedElements.length) {
        this.getHistory().addHistoryItem({
          undo: _AddElements.undo,
          redo: _AddElements.redo,
          data: {
            elements: elementsForInsert,
            elementUID,
            index: index2,
            addedElementsUIDs: addedElements.map((el) => el.uid)
          },
          title: i18n__namespace.__("Layout", "zionbuilder"),
          action: i18n__namespace.__("added", "zionbuilder")
        });
      }
    }
    static undo(historyItem) {
      const { addedElementsUIDs = [] } = historyItem.data || {};
      if (addedElementsUIDs.length) {
        const contentStore = useContentStore();
        addedElementsUIDs.forEach((elementUID) => {
          contentStore.deleteElement(elementUID);
        });
      }
    }
    static redo(historyItem) {
      const { elements, elementUID, index: index2 } = historyItem.data || {};
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      element.addChildren(elements, index2);
    }
  };
  __publicField(_AddElements, "commandID", "editor/elements/add-elements");
  let AddElements = _AddElements;
  const _UpdateElementOptions = class _UpdateElementOptions extends DebouncedHistoryCommand {
    doCommand() {
      const {
        elementUID,
        newValues: newValues2,
        path = null
      } = this.data;
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        const oldValues = JSON.parse(JSON.stringify(element.options));
        element.updateOptionValue(path, newValues2);
        this.addToHistory({
          undo: _UpdateElementOptions.undo,
          redo: _UpdateElementOptions.redo,
          data: {
            elementUID,
            newValues: JSON.parse(JSON.stringify(element.options)),
            oldValues,
            path
          },
          title: element.name,
          action: i18n__namespace.__("Edited", "zionbuilder")
        });
      }
    }
    /**
     * Undo command. Will re-add the deleted element
     *
     * @param historyItem
     */
    static undo(historyItem) {
      const { data = {}, initialChange = {} } = historyItem;
      const { elementUID } = data;
      const { oldValues } = initialChange;
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        element.updateOptionValue(null, oldValues);
      }
    }
    static redo(historyItem) {
      const { elementUID, newValues: newValues2 } = historyItem.data || {};
      const contentStore = useContentStore();
      const element = contentStore.getElement(elementUID);
      if (element) {
        element.updateOptionValue(null, newValues2);
      }
    }
  };
  __publicField(_UpdateElementOptions, "commandID", "editor/elements/update-element-options");
  let UpdateElementOptions = _UpdateElementOptions;
  const commands = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    AddElement,
    AddElements,
    AddTemplate,
    CopyElement,
    DeleteElement,
    DiscardElementStyles,
    MoveElement,
    PasteElementClasses,
    PasteElementStyles,
    RemoveAllElements,
    RenameElement,
    SetElementVisibility,
    UpdateElementOptions,
    WrapElement,
    duplicateElement
  }, Symbol.toStringTag, { value: "Module" }));
  class HistoryManager {
    constructor() {
      __publicField(this, "state", Vue.ref([]));
      Object.keys(commands).forEach((importId) => {
        const classObject = commands[importId];
        if (classObject.commandID) {
          window.zb.commandsManager.registerCommand(classObject.commandID, classObject);
        }
      });
    }
    addTransaction(transaction) {
      this.state.value.push(transaction);
    }
    undo() {
    }
    redo() {
    }
  }
  const commandsManager = new CommandManager();
  window.zb.commandsManager = commandsManager;
  const history = new HistoryManager();
  registerEditorOptions();
  const appInstance = Vue__namespace.createApp(_sfc_main);
  appInstance.use(window.zb.installCommonAPP);
  appInstance.component("EmptySortablePlaceholder", _sfc_main$1b);
  appInstance.component("AddElementIcon", _sfc_main$1c);
  appInstance.component("UIElementIcon", _sfc_main$1d);
  appInstance.component("SortableHelper", SortableHelper);
  appInstance.component("SortablePlaceholder", SortablePlaceholder);
  appInstance.component("SortableContent", _sfc_main$L);
  appInstance.component("RenderValue", _sfc_main$18);
  appInstance.component("ElementIcon", _sfc_main$17);
  appInstance.component("InlineEditor", _sfc_main$X);
  appInstance.component("ElementWrapper", ElementWrapper);
  appInstance.component("Element", _sfc_main$M);
  appInstance.config.globalProperties.$zb = {
    appInstance,
    urls: window.ZnPbInitialData.urls
  };
  appInstance.provide("$zb", appInstance.config.globalProperties.$zb);
  new HeartBeat();
  window.addEventListener("load", function() {
    const evt = new CustomEvent("zionbuilder/editor/ready");
    window.dispatchEvent(evt);
    appInstance.mount("#znpb-app");
  });
  const elementDefinitionsStore = useElementDefinitionsStore();
  window.zb = window.zb || {};
  window.zb.editor = Object.assign(
    {},
    { appInstance, registerElementComponent: elementDefinitionsStore.registerElementComponent },
    API,
    COMPOSABLES,
    UTILS,
    STORE
  );
  window.zb.commandsManager = commandsManager;
  window.zb.run = function(commandName, commandArgs) {
    return commandsManager.runCommand(commandName, commandArgs);
  };
  window.zb.history = history;
})(zb.vue, wp.i18n, zb.utils, zb.pinia, zb.store, zb.components);
