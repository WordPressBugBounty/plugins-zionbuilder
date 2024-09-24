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
(function(vue, vueRouter, hooks, i18n, utils, components, store, pinia, api) {
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
  const index = "";
  class Route {
    constructor(routeConfig = {}) {
      const _a = routeConfig, { children } = _a, remainingRouteConfig = __objRest(_a, ["children"]);
      this.routeConfig = remainingRouteConfig;
      if (typeof children !== "undefined") {
        Object.keys(children).forEach((routeId) => {
          this.addRoute(routeId, children[routeId]);
        });
      }
    }
    addRoute(routeId, routeConfig) {
      if (!(this.routeConfig.children instanceof Routes$1)) {
        this.routeConfig.children = new Routes$1();
      }
      return this.routeConfig.children.addRoute(routeId, routeConfig);
    }
    getRoute(path) {
      return this.routeConfig.children.getRoute(path);
    }
    getConfigForRouter() {
      const routeConfig = __spreadValues({}, this.routeConfig);
      if (routeConfig.children instanceof Routes$1) {
        routeConfig.children = routeConfig.children.getConfigForRouter();
      }
      return routeConfig;
    }
    set(key, value) {
      this.routeConfig[key] = value;
    }
    remove(key) {
      delete this.routeConfig[key];
    }
    get(key) {
      delete this.routeConfig[key];
    }
  }
  class Routes {
    constructor(routes2 = {}) {
      this.routes = {};
      Object.keys(routes2).forEach((routeId) => {
        const routeConfig = routes2[routeId];
        this.routes[routeId] = new Route(routeId, routeConfig);
      });
    }
    getRouteConfig(pathString) {
      const paths = pathString.split(".");
      let searchSchema = this;
      for (let index2 = 0; index2 < paths.length; index2++) {
        const path = paths[index2];
        if (!searchSchema) {
          return null;
        }
        if (index2 === paths.length - 1) {
          return searchSchema.getRoute(path);
        }
        searchSchema = searchSchema.getRoute(path);
      }
    }
    getRoute(path) {
      return this.routes[path];
    }
    addRoute(routeId, routeConfig) {
      this.routes[routeId] = new Route(routeConfig);
      return this.routes[routeId];
    }
    replaceRoute() {
    }
    removeRoute() {
    }
    getConfigForRouter() {
      const routes2 = [];
      Object.keys(this.routes).forEach((routeId) => {
        const routeInstance = this.routes[routeId];
        routes2.push(routeInstance.getConfigForRouter());
      });
      return routes2;
    }
  }
  const Routes$1 = Routes;
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$J = {};
  function _sfc_render$1(_ctx, _cache) {
    const _component_router_view = vue.resolveComponent("router-view");
    return vue.openBlock(), vue.createBlock(_component_router_view);
  }
  const SettingsPage = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$1]]);
  const _hoisted_1$B = ["innerHTML"];
  const _sfc_main$I = /* @__PURE__ */ vue.defineComponent({
    __name: "SmallNotice",
    props: {
      icon: {},
      message: {}
    },
    setup(__props) {
      const props = __props;
      const iconType = vue.computed(() => {
        if (props.icon === "warning" || props.icon === "not_ok") {
          return "warning";
        } else
          return "info";
      });
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        const _component_Tooltip = vue.resolveComponent("Tooltip");
        return _ctx.message ? (vue.openBlock(), vue.createBlock(_component_Tooltip, {
          key: 0,
          placement: "top",
          class: "znpb-admin-system-notice-wrapper",
          "close-delay": 150
        }, {
          content: vue.withCtx(() => [
            vue.createElementVNode("div", { innerHTML: _ctx.message }, null, 8, _hoisted_1$B)
          ]),
          default: vue.withCtx(() => [
            vue.createVNode(_component_Icon, {
              icon: iconType.value,
              class: vue.normalizeClass(["znpb-admin-system-notice", `znpb-admin-system-notice--${_ctx.icon}`])
            }, null, 8, ["icon", "class"])
          ]),
          _: 1
        })) : (vue.openBlock(), vue.createBlock(_component_Icon, {
          key: 1,
          icon: iconType.value,
          class: vue.normalizeClass(["znpb-admin-system-notice znpb-admin-system-notice--no-tooltip", `znpb-admin-system-notice--${_ctx.icon}`])
        }, null, 8, ["icon", "class"]));
      };
    }
  });
  const SmallNotice_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$A = { class: "znpb-system-list" };
  const _hoisted_2$u = { class: "znpb-system-list__item" };
  const _hoisted_3$m = { class: "znpb-system-list__item" };
  const _sfc_main$H = /* @__PURE__ */ vue.defineComponent({
    __name: "SystemListItem",
    props: {
      data: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$A, [
          vue.createElementVNode("h3", _hoisted_2$u, vue.toDisplayString(_ctx.data.name), 1),
          vue.createElementVNode("h4", _hoisted_3$m, [
            vue.createTextVNode(vue.toDisplayString(_ctx.data.value) + " ", 1),
            _ctx.data.icon ? (vue.openBlock(), vue.createBlock(_sfc_main$I, {
              key: 0,
              icon: _ctx.data.icon,
              message: _ctx.data.message
            }, null, 8, ["icon", "message"])) : vue.createCommentVNode("", true)
          ])
        ]);
      };
    }
  });
  const SystemListItem_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$z = { class: "znpb-system-list-wrapper" };
  const _hoisted_2$t = { class: "znpb-system-subtitle" };
  const _sfc_main$G = /* @__PURE__ */ vue.defineComponent({
    __name: "SystemList",
    props: {
      categoryData: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$z, [
          vue.createElementVNode("h2", _hoisted_2$t, vue.toDisplayString(_ctx.categoryData.category_name), 1),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.categoryData.values, (value, i) => {
            return vue.openBlock(), vue.createBlock(_sfc_main$H, {
              key: i,
              data: value
            }, null, 8, ["data"]);
          }), 128))
        ]);
      };
    }
  });
  const SystemList_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$y = { class: "znpb-system-list-plugins" };
  const _hoisted_2$s = { class: "znpb-system-subtitle" };
  const _hoisted_3$l = { class: "znpb-system-plugins-wrapper" };
  const _hoisted_4$e = { class: "znpb-system-plugins__item" };
  const _hoisted_5$c = { class: "znpb-system-plugins__item" };
  const _hoisted_6$6 = { class: "znpb-system-plugins__item" };
  const _sfc_main$F = /* @__PURE__ */ vue.defineComponent({
    __name: "SystemPlugins",
    props: {
      categoryData: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$y, [
          vue.createElementVNode("h2", _hoisted_2$s, vue.toDisplayString(_ctx.categoryData.category_name), 1),
          vue.createElementVNode("div", _hoisted_3$l, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.categoryData.values, (value, i) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                key: i,
                class: "znpb-system-plugins"
              }, [
                vue.createElementVNode("h3", _hoisted_4$e, vue.toDisplayString(value.name), 1),
                vue.createElementVNode("h4", _hoisted_5$c, vue.toDisplayString(value.version), 1),
                vue.createElementVNode("h5", _hoisted_6$6, vue.toDisplayString(value.author), 1)
              ]);
            }), 128))
          ])
        ]);
      };
    }
  });
  const SystemPlugins_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$x = { class: "znpb-system-list-wrapper" };
  const _hoisted_2$r = { class: "znpb-system-title" };
  const _hoisted_3$k = { class: "znpb-system-subtitle" };
  const _sfc_main$E = /* @__PURE__ */ vue.defineComponent({
    __name: "CopyPasteServer",
    props: {
      categoryData: {}
    },
    setup(__props) {
      const props = __props;
      const getCategoryData = vue.computed(() => {
        const result = [];
        props.categoryData.forEach((category) => {
          result.push(`==${category.category_name}==
`);
          Object.keys(category.values).forEach(function(key) {
            result.push(`	${category.values[key].name}`);
            if (category.values[key].value !== void 0) {
              result.push(`: ${category.values[key].value}`);
            }
            result.push("\n");
          });
        });
        return result.join("");
      });
      return (_ctx, _cache) => {
        const _component_BaseInput = vue.resolveComponent("BaseInput");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$x, [
          vue.createElementVNode("h2", _hoisted_2$r, vue.toDisplayString(i18n__namespace.__("Copy and paste info", "zionbuilder")), 1),
          vue.createElementVNode("h5", _hoisted_3$k, vue.toDisplayString(i18n__namespace.__("You can copy the below info as simple text with Ctrl+C / Ctrl+V:", "zionbuilder")), 1),
          vue.createVNode(_component_BaseInput, {
            modelValue: getCategoryData.value,
            type: "textarea",
            class: "znpb-system-textarea",
            readonly: "",
            spellcheck: "false",
            autocomplete: "false"
          }, null, 8, ["modelValue"])
        ]);
      };
    }
  });
  const CopyPasteServer_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$w = { class: "znpb-admin-content-wrapper" };
  const _hoisted_2$q = /* @__PURE__ */ vue.createElementVNode("div", { class: "znpb-admin-content znpb-admin-content--left znpb-admin-content--hiddenXs" }, null, -1);
  const _hoisted_3$j = { class: "znpb-admin-info-p" };
  const _hoisted_4$d = { class: "znpb-admin-info-p" };
  const _sfc_main$D = /* @__PURE__ */ vue.defineComponent({
    __name: "SystemInfo",
    setup(__props) {
      const loaded = vue.ref(false);
      const systemInfoData = vue.ref({});
      window.zb.api.getSystemInfo().then((response) => {
        systemInfoData.value = response.data;
        loaded.value = true;
      });
      function getComponent(categoryId) {
        if (categoryId === "wordpress_environment" || categoryId === "theme_info" || categoryId === "server_environment") {
          return _sfc_main$G;
        } else if (categoryId === "plugins_info") {
          return _sfc_main$F;
        }
      }
      return (_ctx, _cache) => {
        const _component_Loader = vue.resolveComponent("Loader");
        const _component_PageTemplate = vue.resolveComponent("PageTemplate");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$w, [
          _hoisted_2$q,
          vue.createVNode(_component_PageTemplate, null, {
            right: vue.withCtx(() => [
              vue.createElementVNode("div", null, [
                vue.createElementVNode("p", _hoisted_3$j, vue.toDisplayString(i18n__namespace.__("System Info", "zionbuilder")), 1),
                vue.createElementVNode("p", _hoisted_4$d, vue.toDisplayString(i18n__namespace.__("Scroll down to copy paste the Info shown", "zionbuilder")), 1)
              ])
            ]),
            default: vue.withCtx(() => [
              !loaded.value ? (vue.openBlock(), vue.createBlock(_component_Loader, { key: 0 })) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("System Info", "zionbuilder")), 1),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(systemInfoData.value, (category) => {
                  return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(getComponent(category.category_id)), {
                    key: category.category_id,
                    "category-data": category
                  }, null, 8, ["category-data"]);
                }), 128)),
                vue.createVNode(_sfc_main$E, { "category-data": systemInfoData.value }, null, 8, ["category-data"])
              ], 64))
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  const _hoisted_1$v = { class: "znpb-admin-color-preset-box__circle--transparent" };
  const _hoisted_2$p = {
    key: 0,
    class: "znpb-admin-color-preset-box__color-name"
  };
  const _sfc_main$C = /* @__PURE__ */ vue.defineComponent({
    __name: "ColorBox",
    props: {
      color: { default: "" },
      type: { default: "" },
      title: { default: "" }
    },
    emits: ["delete-color", "option-updated"],
    setup(__props, { emit }) {
      const props = __props;
      const localColor = vue.ref(props.color);
      const showColorPicker = vue.ref(false);
      vue.watchEffect(() => {
        localColor.value = props.color;
      });
      function closeColorPicker() {
        if (props.color !== localColor.value) {
          emit("option-updated", localColor.value);
        }
      }
      return (_ctx, _cache) => {
        const _component_ColorPicker = vue.resolveComponent("ColorPicker");
        const _component_Icon = vue.resolveComponent("Icon");
        const _component_Tooltip = vue.resolveComponent("Tooltip");
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-admin-color-preset-box", { ["znpb-admin-color-preset-box--" + _ctx.type]: _ctx.type }])
        }, [
          vue.createVNode(_component_Tooltip, {
            show: showColorPicker.value,
            "onUpdate:show": _cache[4] || (_cache[4] = ($event) => showColorPicker.value = $event),
            "tooltip-class": "hg-popper--no-padding",
            "close-on-outside-click": true,
            trigger: null,
            placement: "right-start",
            "show-arrows": false,
            onHide: closeColorPicker
          }, {
            content: vue.withCtx(() => [
              vue.createVNode(_component_ColorPicker, {
                model: localColor.value,
                "show-library": false,
                onColorChanged: _cache[0] || (_cache[0] = ($event) => localColor.value = $event)
              }, null, 8, ["model"])
            ]),
            default: vue.withCtx(() => [
              _ctx.type == "addcolor" ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: "znpb-admin-color-preset-box__empty",
                onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => showColorPicker.value = true, ["stop"]))
              }, [
                vue.createVNode(_component_Icon, { icon: "plus" }),
                vue.createElementVNode("div", null, vue.toDisplayString(i18n__namespace.__("Add color", "zionbuilder")), 1)
              ])) : vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
                key: 1,
                class: "znpb-admin-color-preset-box__color",
                onClick: _cache[3] || (_cache[3] = vue.withModifiers(($event) => showColorPicker.value = true, ["stop"]))
              }, [
                vue.withDirectives(vue.createVNode(_component_Icon, {
                  icon: "close",
                  onClick: _cache[2] || (_cache[2] = vue.withModifiers(($event) => _ctx.$emit("delete-color"), ["stop"]))
                }, null, 512), [
                  [_directive_znpb_tooltip, i18n__namespace.__("Delete this color from your preset", "zionbuilder")]
                ]),
                vue.createElementVNode("div", _hoisted_1$v, [
                  vue.createElementVNode("div", {
                    ref: "circleTrigger",
                    class: "znpb-admin-color-preset-box__circle",
                    style: vue.normalizeStyle({ background: localColor.value })
                  }, null, 4)
                ]),
                _ctx.title.length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$p, [
                  vue.createElementVNode("span", null, vue.toDisplayString(_ctx.title), 1)
                ])) : vue.createCommentVNode("", true)
              ])), [
                [_directive_znpb_tooltip, localColor.value]
              ])
            ]),
            _: 1
          }, 8, ["show"])
        ], 2);
      };
    }
  });
  const ColorBox_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$u = { class: "znpb-admin-info-p" };
  const _sfc_main$B = /* @__PURE__ */ vue.defineComponent({
    __name: "Colors",
    setup(__props) {
      const { isProActive } = store.useEnvironmentStore();
      const {
        addLocalColor,
        getOptionValue,
        deleteLocalColor,
        editLocalColor,
        addGlobalColor,
        deleteGlobalColor,
        editGlobalColor,
        updateOptionValue
      } = store.useBuilderOptionsStore();
      const computedLocalColors = vue.computed({
        get() {
          return getOptionValue("local_colors");
        },
        set(newValue) {
          updateOptionValue("local_colors", newValue);
        }
      });
      const computedGlobalColors = vue.computed({
        get() {
          return getOptionValue("global_colors");
        },
        set(newValue) {
          updateOptionValue("global_colors", newValue);
        }
      });
      function addGlobal(color) {
        const colorId = utils.generateUID();
        const globalColor = {
          id: colorId,
          color,
          name: colorId
        };
        addGlobalColor(globalColor);
      }
      return (_ctx, _cache) => {
        const _component_Tab = vue.resolveComponent("Tab");
        const _component_UpgradeToPro = vue.resolveComponent("UpgradeToPro");
        const _component_Tabs = vue.resolveComponent("Tabs");
        const _component_PageTemplate = vue.resolveComponent("PageTemplate");
        return vue.openBlock(), vue.createBlock(_component_PageTemplate, { class: "znpb-admin-colors__wrapper" }, {
          right: vue.withCtx(() => [
            vue.createElementVNode("p", _hoisted_1$u, vue.toDisplayString(i18n__namespace.__("Create your color pallette to use locally or globally", "zionbuilder")), 1)
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("Color Presets", "zionbuilder")), 1),
            vue.createVNode(_component_Tabs, { "tab-style": "minimal" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_Tab, { name: "Local" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(components.Sortable), {
                      modelValue: computedLocalColors.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedLocalColors.value = $event),
                      class: "znpb-admin-colors__container",
                      revert: true,
                      axis: "horizontal"
                    }, {
                      end: vue.withCtx(() => [
                        vue.createVNode(_sfc_main$C, {
                          type: "addcolor",
                          onOptionUpdated: vue.unref(addLocalColor)
                        }, null, 8, ["onOptionUpdated"])
                      ]),
                      default: vue.withCtx(() => [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(computedLocalColors.value, (color, i) => {
                          return vue.openBlock(), vue.createBlock(_sfc_main$C, {
                            key: color + i,
                            color,
                            onOptionUpdated: ($event) => vue.unref(editLocalColor)(color, $event),
                            onDeleteColor: ($event) => vue.unref(deleteLocalColor)(color)
                          }, null, 8, ["color", "onOptionUpdated", "onDeleteColor"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_Tab, { name: "Global" }, {
                  default: vue.withCtx(() => [
                    !vue.unref(isProActive) ? (vue.openBlock(), vue.createBlock(_component_UpgradeToPro, {
                      key: 0,
                      message_title: i18n__namespace.__("Meet Global Colors", "zionbuilder"),
                      message_description: i18n__namespace.__(
                        "Global colors allows you to define a color that you can use in builder, and every time this color changes it will be updated automatically in all locations where it was used. ",
                        "zionbuilder"
                      )
                    }, null, 8, ["message_title", "message_description"])) : (vue.openBlock(), vue.createBlock(vue.unref(components.Sortable), {
                      key: 1,
                      modelValue: computedGlobalColors.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => computedGlobalColors.value = $event),
                      class: "znpb-admin-colors__container",
                      revert: true,
                      axis: "horizontal"
                    }, {
                      end: vue.withCtx(() => [
                        vue.createVNode(_sfc_main$C, {
                          type: "addcolor",
                          onOptionUpdated: addGlobal
                        })
                      ]),
                      default: vue.withCtx(() => [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(computedGlobalColors.value, (color, i) => {
                          return vue.openBlock(), vue.createBlock(_sfc_main$C, {
                            key: color.color + i,
                            color: color.color,
                            title: color.name,
                            onOptionUpdated: ($event) => vue.unref(editGlobalColor)(i, $event),
                            onDeleteColor: ($event) => vue.unref(deleteGlobalColor)(color)
                          }, null, 8, ["color", "title", "onOptionUpdated", "onDeleteColor"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"]))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        });
      };
    }
  });
  const Colors_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$A = /* @__PURE__ */ vue.defineComponent({
    __name: "UserModalContent",
    props: {
      permissions: {}
    },
    emits: ["edit-role"],
    setup(__props, { emit }) {
      const props = __props;
      const schema = window.ZnPbAdminPageData.schemas.permissions;
      const modelValue = vue.computed({
        get() {
          return props.permissions;
        },
        set(newValue) {
          emit("edit-role", newValue);
        }
      });
      return (_ctx, _cache) => {
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createVNode(_component_OptionsForm, {
            modelValue: modelValue.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
            schema: vue.unref(schema)
          }, null, 8, ["modelValue", "schema"])
        ]);
      };
    }
  });
  const UserModalContent_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$t = { class: "znpb-single-role" };
  const _hoisted_2$o = { class: "znpb-single-role__item" };
  const _hoisted_3$i = { class: "znpb-single-role__permission" };
  const _hoisted_4$c = { class: "znpb-single-role-permission-subtitle" };
  const _hoisted_5$b = { class: "znpb-single-role__actions" };
  const _sfc_main$z = /* @__PURE__ */ vue.defineComponent({
    __name: "UserTemplate",
    props: {
      permission: {},
      hasDelete: { type: Boolean, default: false }
    },
    emits: ["edit-permission", "delete-permission"],
    setup(__props, { emit }) {
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$t, [
          vue.createElementVNode("h3", _hoisted_2$o, [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          vue.createElementVNode("div", _hoisted_3$i, [
            vue.createElementVNode("h4", _hoisted_4$c, vue.toDisplayString(_ctx.permission) + " " + vue.toDisplayString(i18n__namespace.__("Permissions", "zionbuilder")), 1)
          ]),
          vue.createElementVNode("div", _hoisted_5$b, [
            vue.withDirectives(vue.createVNode(_component_Icon, {
              class: "znpb-edit-icon-pop",
              icon: "edit",
              onClick: _cache[0] || (_cache[0] = ($event) => emit("edit-permission"))
            }, null, 512), [
              [_directive_znpb_tooltip, i18n__namespace.__("Customize the permissions for this user", "zionbuilder")]
            ]),
            _ctx.hasDelete ? vue.withDirectives((vue.openBlock(), vue.createBlock(_component_Icon, {
              key: 0,
              icon: "delete",
              onClick: _cache[1] || (_cache[1] = ($event) => emit("delete-permission"))
            }, null, 512)), [
              [_directive_znpb_tooltip, i18n__namespace.__("Delete permissions for this user", "zionbuilder")]
            ]) : vue.createCommentVNode("", true)
          ])
        ]);
      };
    }
  });
  const UserTemplate_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$s = { class: "znpb-admin-user-template" };
  const _sfc_main$y = /* @__PURE__ */ vue.defineComponent({
    __name: "SingleRole",
    props: {
      role: {
        type: Object,
        required: true
      }
    },
    setup(__props) {
      const props = __props;
      const { getRolePermissions, editRolePermission } = window.zb.store.useBuilderOptionsStore();
      const showModal = vue.ref(false);
      const permissionConfig = vue.computed(() => getRolePermissions(props.role.id));
      const permissionsNumber = vue.computed(() => {
        let permNumber = 1;
        if (!permissionConfig.value || permissionConfig.value.allowed_access === false) {
          return 0;
        } else {
          if (permissionConfig.value.permissions.only_content === true) {
            permNumber++;
          }
          permissionConfig.value.permissions.features.forEach(() => {
            permNumber++;
          });
          permissionConfig.value.permissions.post_types.forEach(() => {
            permNumber++;
          });
          return permNumber;
        }
      });
      return (_ctx, _cache) => {
        const _component_Modal = vue.resolveComponent("Modal");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$s, [
          vue.createVNode(_sfc_main$z, {
            permission: permissionsNumber.value,
            onEditPermission: _cache[0] || (_cache[0] = ($event) => showModal.value = true)
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(__props.role.name), 1)
            ]),
            _: 1
          }, 8, ["permission"]),
          vue.createVNode(_component_Modal, {
            show: showModal.value,
            "onUpdate:show": _cache[2] || (_cache[2] = ($event) => showModal.value = $event),
            class: "znpb-admin-permissions-modal",
            width: 560,
            title: __props.role.name + " " + i18n__namespace.__("Permissions", "zionbuilder"),
            "show-backdrop": false
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_sfc_main$A, {
                permissions: permissionConfig.value,
                onEditRole: _cache[1] || (_cache[1] = ($event) => vue.unref(editRolePermission)(__props.role.id, $event))
              }, null, 8, ["permissions"])
            ]),
            _: 1
          }, 8, ["show", "title"])
        ]);
      };
    }
  });
  const _hoisted_1$r = {
    key: 0,
    class: "znpb-admin-user-template"
  };
  const _sfc_main$x = /* @__PURE__ */ vue.defineComponent({
    __name: "SingleUser",
    props: {
      permissions: {
        type: Object,
        required: true
      },
      userId: {
        type: Number,
        required: true
      }
    },
    setup(__props) {
      const props = __props;
      const showModal = vue.ref(false);
      const { getUserInfo } = window.zb.store.useUsersStore();
      const { editUserPermission, deleteUserPermission } = window.zb.store.useBuilderOptionsStore();
      const userData = getUserInfo(props.userId);
      const permissionsNumber = vue.computed(() => {
        return Object.keys(props.permissions).length;
      });
      return (_ctx, _cache) => {
        const _component_Modal = vue.resolveComponent("Modal");
        return vue.unref(userData) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$r, [
          vue.createVNode(_sfc_main$z, {
            permission: permissionsNumber.value,
            "has-delete": true,
            onEditPermission: _cache[0] || (_cache[0] = ($event) => showModal.value = true),
            onDeletePermission: _cache[1] || (_cache[1] = ($event) => vue.unref(deleteUserPermission)(__props.userId))
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(vue.unref(userData).name), 1)
            ]),
            _: 1
          }, 8, ["permission"]),
          vue.createVNode(_component_Modal, {
            show: showModal.value,
            "onUpdate:show": _cache[3] || (_cache[3] = ($event) => showModal.value = $event),
            class: "znpb-admin-permissions-modal",
            width: 560,
            title: vue.unref(userData).name + " " + i18n__namespace.__("Permissions", "zionbuilder"),
            "show-backdrop": false
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_sfc_main$A, {
                permissions: __props.permissions,
                onEditRole: _cache[2] || (_cache[2] = ($event) => vue.unref(editUserPermission)(__props.userId, $event))
              }, null, 8, ["permissions"])
            ]),
            _: 1
          }, 8, ["show", "title"])
        ])) : vue.createCommentVNode("", true);
      };
    }
  });
  const _hoisted_1$q = ["onClick"];
  const _sfc_main$w = /* @__PURE__ */ vue.defineComponent({
    __name: "ModalListItem",
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    emits: ["close-modal"],
    setup(__props, { emit }) {
      const props = __props;
      const { addUser } = window.zb.store.useUsersStore();
      const { getUserPermissions, addUserPermissions, deleteUserPermission } = window.zb.store.useBuilderOptionsStore();
      const loadingDelete = vue.ref(false);
      const userPermissionsExists = vue.computed(() => getUserPermissions(props.user.id));
      function addNewUser() {
        addUser(props.user);
        addUserPermissions(props.user);
        emit("close-modal", true);
      }
      function deletePermission() {
        deleteUserPermission(props.user.id);
      }
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        const _component_Tooltip = vue.resolveComponent("Tooltip");
        const _component_Loader = vue.resolveComponent("Loader");
        return vue.openBlock(), vue.createElementBlock("li", {
          class: "znpb-baseSelect-list__option znpb-add-specific-permissions__list-item",
          onClick: vue.withModifiers(addNewUser, ["self"])
        }, [
          vue.createTextVNode(vue.toDisplayString(__props.user.name) + " ", 1),
          userPermissionsExists.value ? (vue.openBlock(), vue.createBlock(_component_Tooltip, {
            key: 0,
            content: i18n__namespace.__("This user already has permissions. Click to remove", "zionbuilder")
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_Icon, {
                icon: "delete",
                onClick: vue.withModifiers(deletePermission, ["stop"])
              }, null, 8, ["onClick"])
            ]),
            _: 1
          }, 8, ["content"])) : vue.createCommentVNode("", true),
          loadingDelete.value ? (vue.openBlock(), vue.createBlock(_component_Loader, { key: 1 })) : vue.createCommentVNode("", true)
        ], 8, _hoisted_1$q);
      };
    }
  });
  const ModalListItem_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$p = { class: "znpb-add-specific-permissions-wrapper znpb-fancy-scrollbar" };
  const _hoisted_2$n = { class: "znpb-add-specific-description" };
  const _hoisted_3$h = { class: "znpb-admin__google-fonts-modal-search" };
  const _hoisted_4$b = {
    key: 0,
    class: "znpb-baseSelect-list znpb-fancy-scrollbar"
  };
  const _hoisted_5$a = {
    key: 1,
    class: "znpb-not-found-message"
  };
  const _sfc_main$v = /* @__PURE__ */ vue.defineComponent({
    __name: "AddUserModalContent",
    emits: ["close-modal"],
    setup(__props, { emit }) {
      const searchInput = vue.ref(null);
      const keyword = vue.ref("");
      const loading = vue.ref(false);
      const users = vue.ref([]);
      vue.nextTick(() => {
        var _a;
        return (_a = searchInput.value) == null ? void 0 : _a.focus();
      });
      vue.watch(keyword, (newValue) => {
        if (newValue.length > 2) {
          loading.value = true;
          api.searchUser(newValue).then((result) => {
            users.value = result.data;
          }).finally(() => {
            loading.value = false;
          });
        } else if (newValue.length === 0) {
          users.value = [];
          loading.value = false;
        }
      });
      return (_ctx, _cache) => {
        const _component_Loader = vue.resolveComponent("Loader");
        const _component_BaseInput = vue.resolveComponent("BaseInput");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$p, [
          vue.createElementVNode("p", _hoisted_2$n, vue.toDisplayString(i18n__namespace.__("Type in the search below to find an user and press enter to add it.", "zionbuilder")), 1),
          vue.createElementVNode("div", _hoisted_3$h, [
            vue.createVNode(_component_BaseInput, {
              ref_key: "searchInput",
              ref: searchInput,
              modelValue: keyword.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => keyword.value = $event),
              placeholder: i18n__namespace.__("Search for users", "zionbuilder"),
              icon: !loading.value ? "search" : null,
              size: "big"
            }, {
              suffix: vue.withCtx(() => [
                loading.value ? (vue.openBlock(), vue.createBlock(_component_Loader, { key: 0 })) : vue.createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["modelValue", "placeholder", "icon"]),
            keyword.value.length > 2 ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_4$b, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(users.value, (user, i) => {
                return vue.openBlock(), vue.createBlock(_sfc_main$w, {
                  key: i,
                  user,
                  onCloseModal: _cache[1] || (_cache[1] = ($event) => emit("close-modal", true))
                }, null, 8, ["user"]);
              }), 128))
            ])) : vue.createCommentVNode("", true),
            !loading.value && users.value.length === 0 && keyword.value.length > 2 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5$a, vue.toDisplayString(i18n__namespace.__("No results", "zionbuilder")), 1)) : vue.createCommentVNode("", true)
          ])
        ]);
      };
    }
  });
  const AddUserModalContent_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$o = { class: "znpb-admin-content-wrapper znpb-permissions-wrapper" };
  const _hoisted_2$m = /* @__PURE__ */ vue.createElementVNode("div", { class: "znpb-admin-content znpb-admin-content--left znpb-admin-content--hiddenXs" }, null, -1);
  const _hoisted_3$g = { class: "znpb-admin-content__permission-container" };
  const _hoisted_4$a = {
    key: 1,
    class: "znpb-admin-role-manager-wrapper"
  };
  const _hoisted_5$9 = { class: "znpb-admin-info-p" };
  const _hoisted_6$5 = { class: "znpb-admin-user-specific-wrapper" };
  const _hoisted_7$4 = { class: "znpb-admin-user-specific-actions" };
  const _hoisted_8$3 = /* @__PURE__ */ vue.createElementVNode("span", { class: "znpb-add-element-icon" }, null, -1);
  const _hoisted_9$2 = { class: "znpb-admin-info-p" };
  const _sfc_main$u = /* @__PURE__ */ vue.defineComponent({
    __name: "Permissions",
    setup(__props) {
      const { plugin_pro } = store.useEnvironmentStore();
      const { fetchUsersData } = window.zb.store.useUsersStore();
      const { getOptionValue } = window.zb.store.useBuilderOptionsStore();
      const { dataSets } = pinia.storeToRefs(window.zb.store.useDataSetsStore());
      const userPermissions = getOptionValue("users_permissions");
      const loading = vue.ref(true);
      const showModal = vue.ref(false);
      const proLink = vue.ref(null);
      const userIds = Object.keys(userPermissions);
      if (userIds.length > 0) {
        fetchUsersData(userIds).finally(() => {
          loading.value = false;
        });
      } else {
        loading.value = false;
      }
      return (_ctx, _cache) => {
        const _component_Loader = vue.resolveComponent("Loader");
        const _component_PageTemplate = vue.resolveComponent("PageTemplate");
        const _component_UpgradeToPro = vue.resolveComponent("UpgradeToPro");
        const _component_EmptyList = vue.resolveComponent("EmptyList");
        const _component_Button = vue.resolveComponent("Button");
        const _component_Modal = vue.resolveComponent("Modal");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$o, [
          _hoisted_2$m,
          vue.createElementVNode("div", _hoisted_3$g, [
            vue.createVNode(_component_PageTemplate, null, {
              right: vue.withCtx(() => [
                vue.createElementVNode("p", _hoisted_5$9, vue.toDisplayString(i18n__namespace.__(
                  "Manage the permissions by selecting which users are allowed to use the page builder. Select to edit only the content, the post types such as Post, Pages, and the main features such as the header and the footer builder.",
                  "zionbuilder"
                )), 1)
              ]),
              default: vue.withCtx(() => [
                loading.value ? (vue.openBlock(), vue.createBlock(_component_Loader, { key: 0 })) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$a, [
                  vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("Role manager", "zionbuilder")), 1),
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(dataSets).user_roles, (role, i) => {
                    return vue.openBlock(), vue.createBlock(_sfc_main$y, {
                      key: i,
                      role
                    }, null, 8, ["role"]);
                  }), 128))
                ]))
              ]),
              _: 1
            }),
            vue.createVNode(_component_PageTemplate, null, {
              right: vue.withCtx(() => [
                vue.createElementVNode("p", _hoisted_9$2, vue.toDisplayString(i18n__namespace.__(
                  "Manage your wordpress users permissions. Adding a new user will allow the basic permissions which can be edited afterwards.",
                  "zionbuilder"
                )), 1)
              ]),
              default: vue.withCtx(() => [
                !vue.unref(plugin_pro).is_active ? (vue.openBlock(), vue.createBlock(_component_UpgradeToPro, {
                  key: 0,
                  "info-text": proLink.value,
                  message_title: i18n__namespace.__("specific users control", "zionbuilder"),
                  message_description: i18n__namespace.__("Want to give control to specific users?", "zionbuilder")
                }, null, 8, ["info-text", "message_title", "message_description"])) : !loading.value ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                  vue.createElementVNode("div", _hoisted_6$5, [
                    vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("User specific permissions", "zionbuilder")), 1),
                    Object.entries(vue.unref(userPermissions)).length === 0 ? (vue.openBlock(), vue.createBlock(_component_EmptyList, {
                      key: 0,
                      onClick: _cache[0] || (_cache[0] = ($event) => showModal.value = true)
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(vue.toDisplayString(i18n__namespace.__("no user added yet", "zionbuilder")), 1)
                      ]),
                      _: 1
                    })) : vue.createCommentVNode("", true),
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(userPermissions), (permissions, userId) => {
                      return vue.openBlock(), vue.createBlock(_sfc_main$x, {
                        key: userId,
                        "user-id": parseInt(userId),
                        permissions
                      }, null, 8, ["user-id", "permissions"]);
                    }), 128))
                  ]),
                  vue.createElementVNode("div", _hoisted_7$4, [
                    vue.createVNode(_component_Button, {
                      type: "secondary",
                      onClick: _cache[1] || (_cache[1] = ($event) => showModal.value = true)
                    }, {
                      default: vue.withCtx(() => [
                        _hoisted_8$3,
                        vue.createTextVNode(" " + vue.toDisplayString(i18n__namespace.__("Add a User", "zionbuilder")), 1)
                      ]),
                      _: 1
                    }),
                    vue.createVNode(_component_Modal, {
                      show: showModal.value,
                      "onUpdate:show": _cache[3] || (_cache[3] = ($event) => showModal.value = $event),
                      class: "znpb-admin-permissions-modal",
                      width: 560,
                      title: i18n__namespace.__("Add a User", "zionbuilder"),
                      "show-backdrop": false
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_sfc_main$v, {
                          onCloseModal: _cache[2] || (_cache[2] = ($event) => showModal.value = false)
                        })
                      ]),
                      _: 1
                    }, 8, ["show", "title"])
                  ])
                ], 64)) : vue.createCommentVNode("", true)
              ]),
              _: 1
            })
          ])
        ]);
      };
    }
  });
  const Permissions_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$n = { class: "znpb-admin-modal-two-cols" };
  const _hoisted_2$l = { class: "znpb-admin-modal-two-cols__title-block" };
  const _hoisted_3$f = { class: "znpb-admin-modal-title-block__title" };
  const _hoisted_4$9 = { class: "znpb-admin-modal-title-block__desc" };
  const _hoisted_5$8 = { class: "znpb-admin-modal-two-cols__option-block" };
  const _sfc_main$t = /* @__PURE__ */ vue.defineComponent({
    __name: "ModalTwoColTemplate",
    props: {
      title: {},
      desc: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$n, [
          vue.createElementVNode("div", _hoisted_2$l, [
            vue.createElementVNode("h4", _hoisted_3$f, vue.toDisplayString(_ctx.title), 1),
            vue.createElementVNode("p", _hoisted_4$9, vue.toDisplayString(_ctx.desc), 1)
          ]),
          vue.createElementVNode("div", _hoisted_5$8, [
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ]);
      };
    }
  });
  const ModalTwoColTemplate_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$m = { class: "znpb-admin-title-block znpb-admin-title-block--heading" };
  const _hoisted_2$k = { class: "znpb-admin-modal-title-block__title" };
  const _hoisted_3$e = { class: "znpb-admin-modal-title-block__desc" };
  const _sfc_main$s = /* @__PURE__ */ vue.defineComponent({
    __name: "ModalAddNewTemplate",
    props: {
      templateType: { default: "templates" }
    },
    emits: ["save-template"],
    setup(__props, { emit }) {
      const props = __props;
      const localTemplate = vue.ref({
        title: "",
        template_type: props.templateType
      });
      const templates = vue.computed(() => {
        const templateTypes = [];
        window.ZnPbAdminPageData.template_types.forEach((element) => {
          templateTypes.push({
            id: element.id,
            name: element.singular_name
          });
        });
        return templateTypes;
      });
      const canAdd = vue.computed(() => {
        const { template_type: templateType, title } = localTemplate.value;
        return templateType && title;
      });
      return (_ctx, _cache) => {
        const _component_InputSelect = vue.resolveComponent("InputSelect");
        const _component_BaseInput = vue.resolveComponent("BaseInput");
        const _component_ModalTemplateSaveButton = vue.resolveComponent("ModalTemplateSaveButton");
        return vue.openBlock(), vue.createBlock(_component_ModalTemplateSaveButton, {
          disabled: !canAdd.value,
          onSaveModal: _cache[2] || (_cache[2] = ($event) => emit("save-template", localTemplate.value))
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_1$m, [
              vue.createElementVNode("h4", _hoisted_2$k, vue.toDisplayString(i18n__namespace.__("Templates", "zionbuilder")), 1),
              vue.createElementVNode("p", _hoisted_3$e, vue.toDisplayString(i18n__namespace.__("Create a new template by choosing the template type and adding a name", "zionbuilder")), 1)
            ]),
            vue.createVNode(_sfc_main$t, {
              title: i18n__namespace.__("Template type", "zionbuilder"),
              desc: i18n__namespace.__("Select a template", "zionbuilder")
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_InputSelect, {
                  modelValue: localTemplate.value.template_type,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => localTemplate.value.template_type = $event),
                  placeholder: i18n__namespace.__("Select type", "zionbuilder"),
                  options: templates.value,
                  class: "znpb-admin-add-template-select"
                }, null, 8, ["modelValue", "placeholder", "options"])
              ]),
              _: 1
            }, 8, ["title", "desc"]),
            vue.createVNode(_sfc_main$t, {
              title: i18n__namespace.__("Template Name", "zionbuilder"),
              desc: i18n__namespace.__("Type a name for the new template", "zionbuilder")
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_BaseInput, {
                  modelValue: localTemplate.value.title,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => localTemplate.value.title = $event),
                  placeholder: i18n__namespace.__("Enter a name for this template", "zionbuilder"),
                  class: "znpb-admin-add-template-input"
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }, 8, ["title", "desc"])
          ]),
          _: 1
        }, 8, ["disabled"]);
      };
    }
  });
  const ModalAddNewTemplate_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$l = { class: "znpb-admin-single-template__title" };
  const _hoisted_2$j = { class: "znpb-admin-single-template__author" };
  const _hoisted_3$d = { class: "znpb-admin-single-template__shortcode" };
  const _hoisted_4$8 = { class: "znpb-admin-single-template__actions" };
  const _hoisted_5$7 = {
    key: 0,
    class: "znpb-admin-single-template--error"
  };
  const _sfc_main$r = /* @__PURE__ */ vue.defineComponent({
    __name: "TemplateItem",
    props: {
      template: {},
      loading: { type: Boolean, default: false },
      error: { default: "" },
      active: { type: Boolean, default: false }
    },
    emits: ["delete-template", "show-modal-preview"],
    setup(__props, { emit }) {
      const props = __props;
      const templateInputRef = vue.ref(null);
      const isCopied = vue.ref(false);
      const localLoading = vue.ref(props.loading);
      const errorMessage = vue.ref("");
      const isActive = vue.ref(props.active);
      if (isActive.value) {
        setTimeout(() => {
          isActive.value = false;
        }, 1e3);
      }
      vue.watch(
        () => props.loading,
        (newVal) => {
          localLoading.value = newVal;
        }
      );
      vue.watch(
        () => props.error,
        (newVal) => {
          errorMessage.value = newVal;
        }
      );
      function editUrl() {
        window.open(props.template.urls.edit_url);
      }
      function copyTextInput() {
        var _a;
        isCopied.value = true;
        const copyText = (_a = templateInputRef.value) == null ? void 0 : _a.input;
        if (!copyText) {
          return;
        }
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        if (navigator.clipboard && window.isSecureContext) {
          return navigator.clipboard.writeText(copyText.value);
        } else {
          const textArea = document.createElement("textarea");
          textArea.value = copyText.value;
          textArea.style.position = "fixed";
          textArea.style.left = "-999999px";
          textArea.style.top = "-999999px";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          return new Promise((res, rej) => {
            document.execCommand("copy") ? res(true) : rej();
            textArea.remove();
          });
        }
      }
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        const _component_Loader = vue.resolveComponent("Loader");
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["znpb-admin-single-template", { "znpb-admin-single-template--active": isActive.value }])
          }, [
            vue.createElementVNode("span", _hoisted_1$l, vue.toDisplayString(_ctx.template.name), 1),
            vue.createElementVNode("span", _hoisted_2$j, vue.toDisplayString(_ctx.template.author), 1),
            vue.createElementVNode("div", _hoisted_3$d, [
              vue.withDirectives((vue.openBlock(), vue.createBlock(vue.unref(components.BaseInput), {
                ref_key: "templateInputRef",
                ref: templateInputRef,
                modelValue: _ctx.template.shortcode,
                readonly: "",
                spellcheck: "false",
                autocomplete: "false",
                class: "znpb-admin-single-template__input",
                onClick: _cache[1] || (_cache[1] = ($event) => copyTextInput())
              }, {
                suffix: vue.withCtx(() => [
                  vue.createVNode(_component_Icon, {
                    icon: "copy",
                    onClick: _cache[0] || (_cache[0] = ($event) => copyTextInput())
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])), [
                [_directive_znpb_tooltip, isCopied.value ? i18n__namespace.__("Copied", "zionbuilder") : i18n__namespace.__("Copy", "zionbuilder")]
              ])
            ]),
            vue.createElementVNode("div", _hoisted_4$8, [
              !_ctx.template.loading ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.withDirectives(vue.createVNode(_component_Icon, {
                  icon: "edit",
                  class: "znpb-admin-single-template__action znpb-delete-icon-pop",
                  onClick: editUrl
                }, null, 512), [
                  [_directive_znpb_tooltip, i18n__namespace.__("Edit template", "zionbuilder")]
                ]),
                vue.withDirectives(vue.createVNode(_component_Icon, {
                  icon: "delete",
                  class: "znpb-admin-single-template__action znpb-delete-icon-pop",
                  onClick: _cache[2] || (_cache[2] = ($event) => emit("delete-template", _ctx.template))
                }, null, 512), [
                  [_directive_znpb_tooltip, i18n__namespace.__("Delete template", "zionbuilder")]
                ]),
                vue.withDirectives(vue.createVNode(_component_Icon, {
                  icon: "export",
                  class: "znpb-admin-single-template__action znpb-export-icon-pop",
                  onClick: _cache[3] || (_cache[3] = () => _ctx.template.export())
                }, null, 512), [
                  [_directive_znpb_tooltip, i18n__namespace.__("Export template", "zionbuilder")]
                ]),
                vue.withDirectives(vue.createVNode(_component_Icon, {
                  icon: "eye",
                  class: "znpb-admin-single-template__action znpb-preview-icon-pop",
                  onClick: _cache[4] || (_cache[4] = ($event) => emit("show-modal-preview", true))
                }, null, 512), [
                  [_directive_znpb_tooltip, i18n__namespace.__("Preview template", "zionbuilder")]
                ])
              ], 64)) : (vue.openBlock(), vue.createBlock(_component_Loader, { key: 1 }))
            ])
          ], 2),
          errorMessage.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("p", _hoisted_5$7, vue.toDisplayString(errorMessage.value), 1)) : vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const TemplateItem_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$k = { class: "znpb-template-preview__wrapper znpb-fancy-scrollbar" };
  const _hoisted_2$i = ["src"];
  const _sfc_main$q = /* @__PURE__ */ vue.defineComponent({
    __name: "ModalTemplatePreview",
    props: {
      frameUrl: {}
    },
    setup(__props) {
      const loaded = vue.ref(false);
      return (_ctx, _cache) => {
        const _component_Loader = vue.resolveComponent("Loader");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$k, [
          !loaded.value ? (vue.openBlock(), vue.createBlock(_component_Loader, {
            key: 0,
            class: "znpb-template-preview__loader"
          })) : vue.createCommentVNode("", true),
          vue.createElementVNode("iframe", {
            frameborder: "0",
            src: _ctx.frameUrl,
            scrolling: "yes",
            onLoad: _cache[0] || (_cache[0] = ($event) => loaded.value = true)
          }, " ", 40, _hoisted_2$i)
        ]);
      };
    }
  });
  const ModalTemplatePreview_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$j = { class: "znpb-template-list__wrapper" };
  const _hoisted_2$h = { class: "znpb-admin-templates-titles" };
  const _hoisted_3$c = { class: "znpb-admin-templates-titles__heading znpb-admin-templates-titles__heading--title" };
  const _hoisted_4$7 = { class: "znpb-admin-templates-titles__heading" };
  const _hoisted_5$6 = { class: "znpb-admin-templates-titles__heading znpb-admin-templates-titles__heading--shortcode" };
  const _hoisted_6$4 = { class: "znpb-admin-templates-titles__heading znpb-admin-templates-titles__heading--actions" };
  const _sfc_main$p = /* @__PURE__ */ vue.defineComponent({
    __name: "TemplateList",
    props: {
      templates: { default: () => [] },
      showInsert: { type: Boolean, default: false },
      activeItem: { default: 0 },
      loadingItem: { type: Boolean, default: false }
    },
    emits: ["insert"],
    setup(__props, { emit }) {
      const props = __props;
      const showModalConfirm = vue.ref(false);
      const activeTemplate = vue.ref(null);
      const showModalPreview = vue.ref(false);
      const templateTitle = vue.ref(null);
      const templatePreview = vue.ref("");
      const sortedTemplates = vue.computed(() => [...props.templates].sort((a, b) => a.date < b.date ? 1 : -1));
      function showConfirmDelete(template) {
        showModalConfirm.value = true;
        activeTemplate.value = template;
      }
      function activateModalPreview(template) {
        showModalPreview.value = true;
        templateTitle.value = template.name;
        templatePreview.value = template.urls.preview_url;
      }
      function onTemplateDelete() {
        showModalConfirm.value = false;
        activeTemplate.value.delete();
      }
      return (_ctx, _cache) => {
        const _component_EmptyList = vue.resolveComponent("EmptyList");
        const _component_Modal = vue.resolveComponent("Modal");
        const _component_ModalConfirm = vue.resolveComponent("ModalConfirm");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$j, [
          vue.createElementVNode("div", _hoisted_2$h, [
            vue.createElementVNode("h5", _hoisted_3$c, vue.toDisplayString(i18n__namespace.__("Title", "zionbuilder")), 1),
            vue.createElementVNode("h5", _hoisted_4$7, vue.toDisplayString(i18n__namespace.__("Author", "zionbuilder")), 1),
            vue.createElementVNode("h5", _hoisted_5$6, vue.toDisplayString(i18n__namespace.__("Shortcode", "zionbuilder")), 1),
            vue.createElementVNode("h5", _hoisted_6$4, vue.toDisplayString(i18n__namespace.__("actions", "zionbuilder")), 1)
          ]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(sortedTemplates.value, (template, index2) => {
            return vue.openBlock(), vue.createBlock(_sfc_main$r, {
              ref_for: true,
              ref: "singleTemplate",
              key: index2,
              template,
              active: _ctx.activeItem === template.ID,
              "show-insert": _ctx.showInsert,
              onDeleteTemplate: showConfirmDelete,
              onShowModalPreview: ($event) => activateModalPreview(template),
              onInsert: _cache[0] || (_cache[0] = ($event) => emit("insert", $event))
            }, null, 8, ["template", "active", "show-insert", "onShowModalPreview"]);
          }), 128)),
          _ctx.templates.length === 0 ? (vue.openBlock(), vue.createBlock(_component_EmptyList, { key: 0 }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(i18n__namespace.__("No template", "zionbuilder")), 1)
            ]),
            _: 1
          })) : vue.createCommentVNode("", true),
          vue.createVNode(_component_Modal, {
            show: showModalPreview.value,
            "onUpdate:show": _cache[1] || (_cache[1] = ($event) => showModalPreview.value = $event),
            title: `${templateTitle.value} ${i18n__namespace.__("preview", "zionbuilder")}`,
            "append-to": "body",
            class: "znpb-admin-preview-template-modal"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_sfc_main$q, { "frame-url": templatePreview.value }, null, 8, ["frame-url"])
            ]),
            _: 1
          }, 8, ["show", "title"]),
          showModalConfirm.value ? (vue.openBlock(), vue.createBlock(_component_ModalConfirm, {
            key: 1,
            width: 530,
            "confirm-text": i18n__namespace.__("Yes, delete template", "zionbuilder"),
            "cancel-text": i18n__namespace.__("No, keep template", "zionbuilder"),
            onConfirm: onTemplateDelete,
            onCancel: _cache[2] || (_cache[2] = ($event) => showModalConfirm.value = false)
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(i18n__namespace.__("Are you sure you want to delete this template?", "zionbuilder")), 1)
            ]),
            _: 1
          }, 8, ["confirm-text", "cancel-text"])) : vue.createCommentVNode("", true)
        ]);
      };
    }
  });
  const TemplateList_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$i = { class: "znpb-admin-templates-actions" };
  const _hoisted_2$g = /* @__PURE__ */ vue.createElementVNode("span", { class: "znpb-add-element-icon" }, null, -1);
  const _hoisted_3$b = { class: "znpb-admin-info-p" };
  const _sfc_main$o = /* @__PURE__ */ vue.defineComponent({
    __name: "TemplatePage",
    props: {
      templateType: {},
      templateName: {}
    },
    setup(__props) {
      const props = __props;
      const showModal = vue.ref(false);
      const activeFilter = vue.ref("publish");
      const { getSource } = window.zb.composables.useLibrary();
      const localLibrary = getSource("local_library");
      localLibrary.getData();
      const tabs = vue.ref([
        {
          title: "Published",
          id: "publish"
        },
        {
          title: "Drafts",
          id: "draft"
        },
        {
          title: "Trashed",
          id: "trash"
        }
      ]);
      const getFilteredTemplates = vue.computed(() => {
        return localLibrary.items.filter((template) => {
          return template.status === activeFilter.value && template.type && template.category.includes(props.templateType);
        });
      });
      function onAddNewTemplate(template) {
        localLibrary.createItem(template).finally(() => {
          showModal.value = false;
        });
      }
      function onTabChange(tabId) {
        activeFilter.value = tabId;
      }
      return (_ctx, _cache) => {
        const _component_Loader = vue.resolveComponent("Loader");
        const _component_Tab = vue.resolveComponent("Tab");
        const _component_Tabs = vue.resolveComponent("Tabs");
        const _component_Button = vue.resolveComponent("Button");
        const _component_Modal = vue.resolveComponent("Modal");
        const _component_PageTemplate = vue.resolveComponent("PageTemplate");
        return vue.openBlock(), vue.createBlock(_component_PageTemplate, { class: "znpb-admin-templates-wrapper" }, {
          right: vue.withCtx(() => [
            vue.createElementVNode("p", _hoisted_3$b, vue.toDisplayString(i18n__namespace.__("Templates allow you to easily build a WordPress page", "zionbuilder")), 1)
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("h3", null, vue.toDisplayString(_ctx.templateName), 1),
            vue.createVNode(_component_Tabs, {
              "tab-style": "minimal",
              onChangedTab: onTabChange
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(tabs.value, (tab) => {
                  return vue.openBlock(), vue.createBlock(_component_Tab, {
                    id: tab.id,
                    key: tab.id,
                    name: tab.title
                  }, {
                    default: vue.withCtx(() => [
                      vue.unref(localLibrary).loading ? (vue.openBlock(), vue.createBlock(_component_Loader, { key: 0 })) : (vue.openBlock(), vue.createBlock(_sfc_main$p, {
                        key: 1,
                        templates: getFilteredTemplates.value
                      }, null, 8, ["templates"]))
                    ]),
                    _: 2
                  }, 1032, ["id", "name"]);
                }), 128))
              ]),
              _: 1
            }),
            vue.createElementVNode("div", _hoisted_1$i, [
              vue.createVNode(_component_Button, {
                type: "line",
                onClick: _cache[0] || (_cache[0] = ($event) => showModal.value = true)
              }, {
                default: vue.withCtx(() => [
                  _hoisted_2$g,
                  vue.createTextVNode(" " + vue.toDisplayString(i18n__namespace.__("Add new template", "zionbuilder")), 1)
                ]),
                _: 1
              })
            ]),
            vue.createVNode(_component_Modal, {
              show: showModal.value,
              "onUpdate:show": _cache[1] || (_cache[1] = ($event) => showModal.value = $event),
              "show-maximize": false,
              title: i18n__namespace.__("Add new template", "zionbuilder"),
              width: 560,
              "append-to": "#znpb-admin"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_sfc_main$s, {
                  "template-type": _ctx.templateType,
                  onSaveTemplate: onAddNewTemplate
                }, null, 8, ["template-type"])
              ]),
              _: 1
            }, 8, ["show", "title"])
          ]),
          _: 1
        });
      };
    }
  });
  const TemplatePage_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$h = { class: "znpb-admin-hidden-select__title" };
  const _hoisted_2$f = { class: "znpb-admin-hidden-select__content" };
  const _hoisted_3$a = { class: "znpb-admin-hidden-select__content-slot znpb-fancy-scrollbar" };
  const _sfc_main$n = /* @__PURE__ */ vue.defineComponent({
    __name: "HiddenContainer",
    setup(__props) {
      const showContent = vue.ref(false);
      const root = vue.ref(null);
      function addEventListeners() {
        document.addEventListener("click", closeOnOutsideClick);
      }
      function removeEventListeners() {
        document.removeEventListener("click", closeOnOutsideClick);
      }
      function closeOnOutsideClick(event) {
        var _a;
        if (!((_a = root.value) == null ? void 0 : _a.contains(event.target))) {
          showContent.value = false;
          removeEventListeners();
        }
      }
      vue.onBeforeUnmount(() => {
        removeEventListeners();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "root",
          ref: root,
          class: "znpb-admin-hidden-select__wrapper",
          onClick: _cache[0] || (_cache[0] = ($event) => (showContent.value = true, addEventListeners()))
        }, [
          vue.createElementVNode("span", _hoisted_1$h, [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          vue.withDirectives(vue.createElementVNode("div", _hoisted_2$f, [
            vue.createVNode(vue.Transition, { name: "fadeGrow" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", _hoisted_3$a, [
                  vue.renderSlot(_ctx.$slots, "content")
                ])
              ]),
              _: 3
            })
          ], 512), [
            [vue.vShow, showContent.value]
          ])
        ], 512);
      };
    }
  });
  const HiddenContainer_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$g = {
    key: 0,
    class: "znpb-admin__google-font-tab"
  };
  const _hoisted_2$e = { class: "znpb-admin__google-font-tab-title" };
  const _hoisted_3$9 = { class: "znpb-admin__google-font-tab-variants" };
  const _hoisted_4$6 = { class: "znpb-admin__google-font-tab-subset" };
  const _hoisted_5$5 = { class: "znpb-admin__google-font-tab-actions" };
  const _sfc_main$m = /* @__PURE__ */ vue.defineComponent({
    __name: "GoogleFontTab",
    props: {
      font: {}
    },
    emits: ["font-updated", "delete"],
    setup(__props, { emit }) {
      const props = __props;
      const showModalConfirm = vue.ref(false);
      const googleFontsStore = store.useGoogleFontsStore();
      const fontData = googleFontsStore.getFontData(props.font["font_family"]);
      const variantModel = vue.computed({
        get() {
          return props.font.font_variants;
        },
        set(newValue) {
          emit("font-updated", __spreadProps(__spreadValues({}, props.font), {
            font_variants: newValue
          }));
        }
      });
      const subsetModel = vue.computed({
        get() {
          return props.font.font_subset;
        },
        set(newValue) {
          emit("font-updated", __spreadProps(__spreadValues({}, props.font), {
            font_subset: newValue
          }));
        }
      });
      const niceFontVariants = vue.computed(() => {
        const variants = [];
        props.font.font_variants.forEach((variant) => {
          variants.push(getVarianNameFromId(variant));
        });
        return variants.join(", ");
      });
      const niceFontSubsets = vue.computed(() => {
        const subsets = [];
        props.font.font_subset.forEach((subset) => {
          subsets.push(capitalizeWords(subset.split("-").join(" ")));
        });
        return subsets.join(", ");
      });
      const fontVariantsOption = vue.computed(() => {
        const options = [];
        fontData == null ? void 0 : fontData.variants.forEach((variant) => {
          options.push({
            id: variant,
            name: getVarianNameFromId(variant)
          });
        });
        return options;
      });
      const fontSubsetOption = vue.computed(() => {
        const options = [];
        fontData == null ? void 0 : fontData.subsets.forEach((subset) => {
          options.push({
            id: subset,
            name: capitalizeWords(subset.split("-").join(" "))
          });
        });
        return options;
      });
      function getVarianNameFromId(variant) {
        const names = {
          "100": "100",
          "100italic": "100 Italic",
          "300": "300",
          "300italic": "300 Italic",
          regular: "Regular",
          italic: "Italic",
          "500": "500",
          "500italic": "500 Italic",
          "700": "700",
          "700italic": "700 Italic",
          "900": "900",
          "900italic": "900 Italic"
        };
        if (typeof names[variant] !== "undefined") {
          return names[variant];
        }
        return variant;
      }
      function capitalizeWords(words) {
        return words.replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      }
      return (_ctx, _cache) => {
        const _component_InputCheckboxGroup = vue.resolveComponent("InputCheckboxGroup");
        const _component_Icon = vue.resolveComponent("Icon");
        const _component_ModalConfirm = vue.resolveComponent("ModalConfirm");
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.unref(fontData) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$g, [
          vue.createElementVNode("div", _hoisted_2$e, vue.toDisplayString(_ctx.font.font_family), 1),
          vue.createElementVNode("div", _hoisted_3$9, [
            vue.createVNode(_sfc_main$n, null, {
              content: vue.withCtx(() => [
                vue.createVNode(_component_InputCheckboxGroup, {
                  modelValue: variantModel.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => variantModel.value = $event),
                  options: fontVariantsOption.value,
                  min: 1
                }, null, 8, ["modelValue", "options"])
              ]),
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(niceFontVariants.value) + " ", 1)
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_4$6, [
            vue.createVNode(_sfc_main$n, null, {
              content: vue.withCtx(() => [
                vue.createVNode(_component_InputCheckboxGroup, {
                  modelValue: subsetModel.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => subsetModel.value = $event),
                  options: fontSubsetOption.value,
                  min: 1
                }, null, 8, ["modelValue", "options"])
              ]),
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(niceFontSubsets.value) + " ", 1)
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_5$5, [
            vue.withDirectives(vue.createVNode(_component_Icon, {
              class: "znpb-edit-icon-pop",
              icon: "delete",
              onClick: _cache[2] || (_cache[2] = ($event) => showModalConfirm.value = true)
            }, null, 512), [
              [_directive_znpb_tooltip, i18n__namespace.__("Delete font?", "zionbuilder")]
            ])
          ]),
          showModalConfirm.value ? (vue.openBlock(), vue.createBlock(_component_ModalConfirm, {
            key: 0,
            width: 530,
            "confirm-text": i18n__namespace.__("Yes, delete the font", "zionbuilder"),
            "cancel-text": i18n__namespace.__("No, keep the font", "zionbuilder"),
            onConfirm: _cache[3] || (_cache[3] = ($event) => (_ctx.$emit("delete", _ctx.font), showModalConfirm.value = false)),
            onCancel: _cache[4] || (_cache[4] = ($event) => showModalConfirm.value = false)
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(i18n__namespace.__("Are you sure you want to delete this font?", "zionbuilder")), 1)
            ]),
            _: 1
          }, 8, ["confirm-text", "cancel-text"])) : vue.createCommentVNode("", true)
        ])) : vue.createCommentVNode("", true);
      };
    }
  });
  const GoogleFontTab_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$f = { class: "znpb-admin__google-fonts-modal-item" };
  const _hoisted_2$d = { class: "znpb-admin__google-fonts-modal-item-header" };
  const _sfc_main$l = /* @__PURE__ */ vue.defineComponent({
    __name: "GoogleFontModalElement",
    props: {
      font: {},
      isActive: { type: Boolean }
    },
    emits: ["font-selected", "font-removed"],
    setup(__props) {
      const props = __props;
      const fontStyle = vue.computed(() => {
        return {
          "font-family": props.font.family
        };
      });
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$f, [
          vue.createElementVNode("div", _hoisted_2$d, [
            vue.createElementVNode("div", null, vue.toDisplayString(_ctx.font.family), 1),
            !_ctx.isActive ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "znpb-circle-icon-line",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("font-selected", _ctx.font))
            }, [
              vue.createVNode(_component_Icon, { icon: "plus" })
            ])) : vue.createCommentVNode("", true),
            _ctx.isActive ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              class: "znpb-circle-icon-line znpb-circle-delete",
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("font-removed", _ctx.font.family))
            }, [
              vue.createVNode(_component_Icon, { icon: "minus" })
            ])) : vue.createCommentVNode("", true)
          ]),
          vue.createElementVNode("div", {
            class: "znpb-admin__google-fonts-modal-item-preview",
            contenteditable: "true",
            style: vue.normalizeStyle(fontStyle.value)
          }, vue.toDisplayString(_ctx.font.family), 5)
        ]);
      };
    }
  });
  const GoogleFontModalElement_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$e = { class: "znpb-admin__google-fonts-modal-wrapper" };
  const _hoisted_2$c = { class: "znpb-admin__google-fonts-modal-search" };
  const fontsPerPage = 20;
  const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
    __name: "GoogleFontsModalContent",
    props: {
      activeFonts: {
        type: Array,
        required: true
      }
    },
    emits: ["font-selected", "font-removed"],
    setup(__props) {
      const googleFontsStore = store.useGoogleFontsStore();
      const currentPage = vue.ref(1);
      const keyword = vue.ref("");
      const loading = vue.ref(false);
      const allFonts = vue.computed(() => {
        let fonts = googleFontsStore.fonts;
        if (keyword.value.length > 0) {
          fonts = googleFontsStore.fonts.filter((font) => {
            return font.family.toLowerCase().indexOf(keyword.value.toLowerCase()) !== -1;
          });
        }
        return fonts;
      });
      const visibleFonts = vue.computed(() => {
        const end = fontsPerPage * currentPage.value;
        return allFonts.value.slice(0, end);
      });
      const maxPages = vue.computed(() => Math.ceil(allFonts.value.length / fontsPerPage));
      vue.watch(visibleFonts, (newValue) => {
        let fontLink = document.getElementById("znpb-google-fonts-script");
        const fontsSource = newValue.map((font) => {
          let variant = "";
          if (!font.variants.includes(400)) {
            variant = `:${font.variants[0]}`;
          }
          return font.family.replace(" ", "+") + variant;
        });
        if (!fontLink) {
          const head = document.head;
          fontLink = document.createElement("link");
          fontLink.rel = "stylesheet";
          fontLink.id = `znpb-google-fonts-script`;
          fontLink.type = "text/css";
          fontLink.media = "all";
          head.appendChild(fontLink);
        }
        fontLink.href = `https://fonts.googleapis.com/css?family=${fontsSource.join("|")}`;
      });
      function onScrollEnd() {
        if (currentPage.value !== maxPages.value) {
          currentPage.value++;
          loading.value = true;
          setTimeout(() => {
            loading.value = false;
          }, 300);
        }
      }
      return (_ctx, _cache) => {
        const _component_BaseInput = vue.resolveComponent("BaseInput");
        const _component_ListScroll = vue.resolveComponent("ListScroll");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$e, [
          vue.createElementVNode("div", _hoisted_2$c, [
            vue.createVNode(_component_BaseInput, {
              modelValue: keyword.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => keyword.value = $event),
              placeholder: i18n__namespace.__("Search for fonts...", "zionbuilder"),
              clearable: true,
              icon: "search",
              size: "big"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          vue.createVNode(_component_ListScroll, {
            class: "znpb-admin__google-fonts-modal-font-list-wrapper",
            "list-class": "znpb-admin__google-fonts-modal-font-list-container",
            loading: loading.value,
            onScrollEnd
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(visibleFonts.value, (font) => {
                return vue.openBlock(), vue.createBlock(_sfc_main$l, {
                  key: font.family,
                  font,
                  "is-active": __props.activeFonts.includes(font.family),
                  onFontSelected: ($event) => _ctx.$emit("font-selected", font),
                  onFontRemoved: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("font-removed", $event))
                }, null, 8, ["font", "is-active", "onFontSelected"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["loading"])
        ]);
      };
    }
  });
  const GoogleFontsModalContent_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$d = {
    key: 0,
    class: "znpb-admin__google-font-tab znpb-admin__google-font-tab--titles"
  };
  const _hoisted_2$b = { class: "znpb-admin__google-font-tab-title" };
  const _hoisted_3$8 = { class: "znpb-admin__google-font-tab-variants" };
  const _hoisted_4$5 = { class: "znpb-admin__google-font-tab-subset" };
  const _hoisted_5$4 = { class: "znpb-admin__google-font-tab-actions" };
  const _hoisted_6$3 = {
    key: 2,
    class: "znpb-admin-google-fonts-wrapper"
  };
  const _hoisted_7$3 = { class: "znpb-admin-google-fonts-actions" };
  const _hoisted_8$2 = { class: "znpb-admin-info-p" };
  const _hoisted_9$1 = { href: "https://fonts.google.com/" };
  const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
    __name: "GoogleFonts",
    setup(__props) {
      const { getOptionValue, addGoogleFont, removeGoogleFont, updateGoogleFont } = store.useBuilderOptionsStore();
      const showModal = vue.ref(false);
      const googleFonts = vue.computed(() => {
        return getOptionValue("google_fonts");
      });
      const activeFontNames = vue.computed(() => {
        return googleFonts.value.map((font) => {
          return font.font_family;
        });
      });
      function deleteFont(font) {
        removeGoogleFont(font.font_family);
        showModal.value = false;
      }
      function onGoogleFontUpdated({ font, value: newValue }) {
        updateGoogleFont(font.font_family, newValue);
      }
      function onGoogleFontAdded(font) {
        addGoogleFont(font.family);
        showModal.value = false;
      }
      function onGoogleFontRemoved(font) {
        removeGoogleFont(font);
        showModal.value = false;
      }
      return (_ctx, _cache) => {
        const _component_EmptyList = vue.resolveComponent("EmptyList");
        const _component_ListAnimation = vue.resolveComponent("ListAnimation");
        const _component_Modal = vue.resolveComponent("Modal");
        const _component_Icon = vue.resolveComponent("Icon");
        const _component_Button = vue.resolveComponent("Button");
        const _component_PageTemplate = vue.resolveComponent("PageTemplate");
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.openBlock(), vue.createBlock(_component_PageTemplate, null, {
          right: vue.withCtx(() => [
            vue.createElementVNode("p", _hoisted_8$2, [
              vue.createTextVNode(vue.toDisplayString(i18n__namespace.__("Setting up", "zionbuilder")) + " ", 1),
              vue.createElementVNode("a", _hoisted_9$1, vue.toDisplayString(i18n__namespace.__("Google web fonts", "zionbuilder")), 1),
              vue.createTextVNode(" " + vue.toDisplayString(i18n__namespace.__("has never been easier. Choose which ones to use for your website's stylish typography", "zionbuilder")), 1)
            ])
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("Google Fonts", "zionbuilder")), 1),
            googleFonts.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$d, [
              vue.createElementVNode("div", _hoisted_2$b, vue.toDisplayString(i18n__namespace.__("Font name", "zionbuilder")), 1),
              vue.createElementVNode("div", _hoisted_3$8, vue.toDisplayString(i18n__namespace.__("variants", "zionbuilder")), 1),
              vue.createElementVNode("div", _hoisted_4$5, vue.toDisplayString(i18n__namespace.__("subsets", "zionbuilder")), 1),
              vue.createElementVNode("div", _hoisted_5$4, vue.toDisplayString(i18n__namespace.__("actions", "zionbuilder")), 1)
            ])) : vue.createCommentVNode("", true),
            googleFonts.value.length === 0 ? vue.withDirectives((vue.openBlock(), vue.createBlock(_component_EmptyList, {
              key: 1,
              onClick: _cache[0] || (_cache[0] = ($event) => showModal.value = true)
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(i18n__namespace.__("No Google fonts added", "zionbuilder")), 1)
              ]),
              _: 1
            })), [
              [_directive_znpb_tooltip, i18n__namespace.__("Click Me or the Blue button to add a Font", "zionbuilder")]
            ]) : vue.createCommentVNode("", true),
            googleFonts.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$3, [
              vue.createVNode(_component_ListAnimation, null, {
                default: vue.withCtx(() => [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(googleFonts.value, (font) => {
                    return vue.openBlock(), vue.createBlock(_sfc_main$m, {
                      key: font.font_family,
                      class: "znpb-admin-tab",
                      font,
                      onDelete: deleteFont,
                      onFontUpdated: ($event) => onGoogleFontUpdated({
                        font,
                        value: $event
                      })
                    }, null, 8, ["font", "onFontUpdated"]);
                  }), 128))
                ]),
                _: 1
              })
            ])) : vue.createCommentVNode("", true),
            vue.createVNode(_component_Modal, {
              show: showModal.value,
              "onUpdate:show": _cache[1] || (_cache[1] = ($event) => showModal.value = $event),
              width: 570,
              class: "znpb-modal-google-fonts",
              title: i18n__namespace.__("Google Fonts", "zionbuilder"),
              "show-backdrop": false
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_sfc_main$k, {
                  "active-fonts": activeFontNames.value,
                  onFontSelected: onGoogleFontAdded,
                  onFontRemoved: onGoogleFontRemoved
                }, null, 8, ["active-fonts"])
              ]),
              _: 1
            }, 8, ["show", "title"]),
            vue.createElementVNode("div", _hoisted_7$3, [
              vue.createVNode(_component_Button, {
                type: "line",
                onClick: _cache[2] || (_cache[2] = ($event) => showModal.value = true)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_Icon, { icon: "plus" }),
                  vue.createTextVNode(" " + vue.toDisplayString(i18n__namespace.__("Add Font", "zionbuilder")), 1)
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
  const GoogleFonts_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$c = { class: "znpb-admin-posts-wrapper" };
  const _hoisted_2$a = { class: "znpb-admin-post-types-tab__title" };
  const _hoisted_3$7 = { class: "znpb-admin-info-p" };
  const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
    __name: "PageAllowedPostTypes",
    setup(__props) {
      const { useBuilderOptionsStore, useDataSetsStore } = window.zb.store;
      const { dataSets } = pinia.storeToRefs(useDataSetsStore());
      const { getOptionValue, updateOptionValue } = useBuilderOptionsStore();
      const allowedPostTypes = vue.computed({
        get: () => getOptionValue("allowed_post_types"),
        set: (newValue) => updateOptionValue("allowed_post_types", newValue)
      });
      return (_ctx, _cache) => {
        const _component_InputCheckbox = vue.resolveComponent("InputCheckbox");
        const _component_PageTemplate = vue.resolveComponent("PageTemplate");
        return vue.openBlock(), vue.createBlock(_component_PageTemplate, null, {
          right: vue.withCtx(() => [
            vue.createElementVNode("p", _hoisted_3$7, vue.toDisplayString(i18n__namespace.__("You can set from here the allowed post types", "zionbuilder")), 1)
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("Allowed Post types", "zionbuilder")), 1),
            vue.createElementVNode("div", _hoisted_1$c, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(dataSets).post_types, (post) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key: post.id,
                  class: "znpb-admin-post-types-tab"
                }, [
                  vue.createElementVNode("span", _hoisted_2$a, vue.toDisplayString(post.name), 1),
                  vue.createVNode(_component_InputCheckbox, {
                    modelValue: allowedPostTypes.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => allowedPostTypes.value = $event),
                    class: "znpb-admin-checkbox-wrapper",
                    rounded: true,
                    "option-value": post.id
                  }, null, 8, ["modelValue", "option-value"])
                ]);
              }), 128))
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const PageAllowedPostTypes_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$b = { class: "znpb-admin-content-wrapper" };
  const _hoisted_2$9 = { class: "znpb-admin-content znpb-admin-content--left" };
  const _hoisted_3$6 = /* @__PURE__ */ vue.createElementVNode("span", null, [
    /* @__PURE__ */ vue.createElementVNode("span")
  ], -1);
  const _hoisted_4$4 = [
    _hoisted_3$6
  ];
  const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
    __name: "PageContent",
    setup(__props) {
      const responsiveOpen = vue.ref(false);
      const basePathConfig = vue.computed(() => {
        const currentRoute = vueRouter.useRoute();
        const router = vueRouter.useRouter();
        const routes2 = router.getRoutes();
        if (currentRoute.matched.length > 0) {
          const path = currentRoute.matched[0].path;
          return routes2.find((route) => route.path === path) || false;
        }
        return false;
      });
      const basePath = vue.computed(() => {
        return basePathConfig.value ? basePathConfig.value.path : false;
      });
      const childMenus = vue.computed(() => {
        if (basePathConfig.value !== false && basePathConfig.value.children) {
          return basePathConfig.value.children;
        }
        return [];
      });
      return (_ctx, _cache) => {
        const _component_SideMenu = vue.resolveComponent("SideMenu");
        const _component_router_view = vue.resolveComponent("router-view");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$b, [
          vue.createElementVNode("div", _hoisted_2$9, [
            vue.createElementVNode("span", {
              class: "znpb-admin-side-menu-trigger js-side-menu-trigger",
              onClick: _cache[0] || (_cache[0] = ($event) => responsiveOpen.value = !responsiveOpen.value)
            }, _hoisted_4$4),
            vue.createVNode(_component_SideMenu, {
              class: vue.normalizeClass({ "znpb-admin-side-menu--open": responsiveOpen.value }),
              "menu-items": childMenus.value,
              "base-path": basePath.value
            }, null, 8, ["class", "menu-items", "base-path"])
          ]),
          vue.createVNode(_component_router_view)
        ]);
      };
    }
  });
  const _hoisted_1$a = { class: "znpb-admin-gradient-preset-box__gradient" };
  const _hoisted_2$8 = { class: "znpb-admin-gradient-preset-box__gradientName" };
  const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
    __name: "GradientBox",
    props: {
      config: { default: () => {
        return {
          type: "linear",
          colors: [
            {
              color: "#000000",
              position: 0
            },
            {
              color: "#ffffff",
              position: 100
            }
          ]
        };
      } },
      title: { default: "" }
    },
    emits: ["delete-gradient"],
    setup(__props) {
      const showLink = vue.ref(false);
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        const _component_GradientPreview = vue.resolveComponent("GradientPreview");
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "znpb-admin-gradient-preset-box",
          onMouseover: _cache[1] || (_cache[1] = ($event) => showLink.value = true),
          onMouseleave: _cache[2] || (_cache[2] = ($event) => showLink.value = false)
        }, [
          vue.withDirectives(vue.createVNode(_component_Icon, {
            icon: "close",
            class: "znpb-admin-gradient-preset-box__delete",
            onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => _ctx.$emit("delete-gradient"), ["stop"]))
          }, null, 512), [
            [_directive_znpb_tooltip, i18n__namespace.__("Delete this gradient from your preset", "zionbuilder")]
          ]),
          vue.createElementVNode("div", _hoisted_1$a, [
            vue.createVNode(_component_GradientPreview, {
              config: _ctx.config,
              round: true
            }, null, 8, ["config"])
          ]),
          vue.createElementVNode("div", _hoisted_2$8, vue.toDisplayString(_ctx.title), 1)
        ], 32);
      };
    }
  });
  const GradientBox_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$9 = { class: "znpb-admin__gradient-modal-wrapper znpb-fancy-scrollbar" };
  const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
    __name: "GradientModalContent",
    props: {
      show: { type: Boolean, default: false },
      gradient: { default: () => [] }
    },
    emits: ["update:show", "update-gradient", "save-gradient"],
    setup(__props, { emit }) {
      const props = __props;
      const gradientConfig = vue.ref(props.gradient);
      const showModal = vue.computed({
        get() {
          return props.show;
        },
        set(newValue) {
          emit("update:show", newValue);
        }
      });
      const gradientValue = vue.computed({
        get() {
          return props.gradient;
        },
        set(newValue) {
          emit("update-gradient", newValue);
        }
      });
      function onModalClose() {
        emit("save-gradient", gradientConfig.value);
      }
      return (_ctx, _cache) => {
        const _component_GradientGenerator = vue.resolveComponent("GradientGenerator");
        const _component_Modal = vue.resolveComponent("Modal");
        return vue.openBlock(), vue.createBlock(_component_Modal, {
          show: showModal.value,
          "onUpdate:show": _cache[2] || (_cache[2] = ($event) => showModal.value = $event),
          width: 360,
          title: i18n__namespace.__("Gradients", "zionbuilder"),
          "append-to": "#znpb-admin",
          onCloseModal: onModalClose
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_1$9, [
              vue.createVNode(_component_GradientGenerator, {
                modelValue: gradientValue.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => gradientValue.value = $event),
                "save-to-library": false,
                onUpdatedGradient: _cache[1] || (_cache[1] = ($event) => emit("update-gradient", $event))
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["show", "title"]);
      };
    }
  });
  const GradientModalContent_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$8 = { class: "znpb-admin-gradient-preset-box__empty" };
  const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
    __name: "AddGradient",
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$8, [
          vue.createVNode(_component_Icon, { icon: "plus" }),
          vue.createElementVNode("div", null, vue.toDisplayString(i18n__namespace.__("Add Gradient", "zionbuilder")), 1)
        ]);
      };
    }
  });
  const AddGradient_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$7 = { class: "znpb-admin-gradient__container" };
  const _hoisted_2$7 = {
    key: 1,
    class: "znpb-admin-gradient__container"
  };
  const _hoisted_3$5 = { class: "znpb-admin-info-p" };
  const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
    __name: "Gradients",
    setup(__props) {
      const { generateUID, getDefaultGradient } = window.zb.utils;
      function getPro() {
        if (window.ZBCommonData !== void 0) {
          return window.ZBCommonData.environment.plugin_pro.is_active;
        }
        return false;
      }
      const isPro = getPro();
      const {
        getOptionValue,
        saveOptionsToDB,
        addLocalGradient,
        deleteLocalGradient,
        editLocalGradient,
        addGlobalGradient,
        deleteGlobalGradient,
        editGlobalGradient
      } = window.zb.store.useBuilderOptionsStore();
      const activeLibrary = vue.ref("local");
      const showModal = vue.ref(false);
      const localGradients = getOptionValue("local_gradients");
      const globalGradients = getOptionValue("global_gradients");
      const activeGradient = vue.ref({});
      function onGradientSelect(gradient) {
        activeGradient.value = gradient;
        showModal.value = true;
      }
      function onGradientUpdate(newValue) {
        if (activeLibrary.value === "local") {
          editLocalGradient(activeGradient.value.id, newValue);
        } else {
          editGlobalGradient(activeGradient.value.id, newValue);
        }
      }
      function onAddNewGradient() {
        const dynamicName = generateUID();
        const gradientCount = globalGradients.length;
        const defaultGradient = {
          id: dynamicName,
          name: i18n__namespace.__("Gradient", "zionbuilder") + ` ${gradientCount + 1}`,
          config: getDefaultGradient()
        };
        if (activeLibrary.value === "local") {
          addLocalGradient(defaultGradient);
        } else {
          addGlobalGradient(defaultGradient);
        }
        onGradientSelect(defaultGradient);
      }
      return (_ctx, _cache) => {
        const _component_Tab = vue.resolveComponent("Tab");
        const _component_UpgradeToPro = vue.resolveComponent("UpgradeToPro");
        const _component_Tabs = vue.resolveComponent("Tabs");
        const _component_PageTemplate = vue.resolveComponent("PageTemplate");
        return vue.openBlock(), vue.createBlock(_component_PageTemplate, { class: "znpb-admin-gradients__wrapper" }, {
          right: vue.withCtx(() => [
            vue.createElementVNode("p", _hoisted_3$5, vue.toDisplayString(i18n__namespace.__("Create Astonishing Gradients that you will use in all the pages of your website", "zionbuilder")), 1)
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("Gradients", "zionbuilder")), 1),
            vue.createVNode(_component_Tabs, {
              "tab-style": "minimal",
              onChangedTab: _cache[0] || (_cache[0] = ($event) => (activeLibrary.value = $event, activeGradient.value.value = {}))
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_Tab, { name: "Local" }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("div", _hoisted_1$7, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(localGradients), (gradient, index2) => {
                        return vue.openBlock(), vue.createBlock(_sfc_main$g, {
                          key: index2,
                          config: gradient.config,
                          onDeleteGradient: ($event) => vue.unref(deleteLocalGradient)(gradient),
                          onClick: ($event) => onGradientSelect(gradient)
                        }, null, 8, ["config", "onDeleteGradient", "onClick"]);
                      }), 128)),
                      vue.createVNode(_sfc_main$e, { onClick: onAddNewGradient })
                    ])
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_Tab, { name: "Global" }, {
                  default: vue.withCtx(() => [
                    !vue.unref(isPro) ? (vue.openBlock(), vue.createBlock(_component_UpgradeToPro, {
                      key: 0,
                      message_title: i18n__namespace.__("Meet Global Gradients", "zionbuilder"),
                      message_description: i18n__namespace.__(
                        "Global gradients allows you to define a gradient configuration that you can use in builder, and every time this gradient configuration changes it will be updated automatically in all locations where it was used. ",
                        "zionbuilder"
                      )
                    }, null, 8, ["message_title", "message_description"])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$7, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(globalGradients), (gradient, index2) => {
                        return vue.openBlock(), vue.createBlock(_sfc_main$g, {
                          key: index2,
                          config: gradient.config,
                          title: gradient.name,
                          onClick: ($event) => onGradientSelect(gradient),
                          onDeleteGradient: ($event) => vue.unref(deleteGlobalGradient)(gradient)
                        }, null, 8, ["config", "title", "onClick", "onDeleteGradient"]);
                      }), 128)),
                      vue.createVNode(_sfc_main$e, { onClick: onAddNewGradient })
                    ]))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            vue.createVNode(_sfc_main$f, {
              show: showModal.value,
              "onUpdate:show": _cache[1] || (_cache[1] = ($event) => showModal.value = $event),
              gradient: activeGradient.value.config,
              onUpdateGradient: onGradientUpdate,
              onSaveGradient: vue.unref(saveOptionsToDB)
            }, null, 8, ["show", "gradient", "onSaveGradient"])
          ]),
          _: 1
        });
      };
    }
  });
  const Gradients_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$6 = { class: "znpb-get-pro" };
  const _hoisted_2$6 = { class: "znpb-get-pro__image" };
  const _hoisted_3$4 = ["src"];
  const _hoisted_4$3 = { class: "znpb-get-pro__title" };
  const _hoisted_5$3 = { class: "znpb-get-pro__description" };
  const _hoisted_6$2 = { class: "znpb-get-pro__more" };
  const _hoisted_7$2 = {
    href: "https://zionbuilder.io/documentation/pro-version/",
    target: "_blank"
  };
  const _hoisted_8$1 = {
    href: "https://zionbuilder.io/",
    target: "_blank",
    class: "znpb-button znpb-get-pro__cta znpb-button--secondary znpb-option__upgrade-to-pro-button"
  };
  const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
    __name: "GetPro",
    props: {
      message: { default: i18n__namespace.__(
        "With PRO you will have additional control over your pages, create reusable sections and elements, have dynamic data, additional elements, additional options to existing elements and many more features.",
        "zionbuilder"
      ) }
    },
    setup(__props) {
      const proUrl = window.ZnPbAdminPageData.urls.pro_logo;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [
          vue.createElementVNode("div", _hoisted_2$6, [
            vue.createElementVNode("img", { src: vue.unref(proUrl) }, null, 8, _hoisted_3$4)
          ]),
          vue.createElementVNode("h1", _hoisted_4$3, vue.toDisplayString(i18n__namespace.__("Upgrade to PRO now!", "zionbuilder")), 1),
          vue.createElementVNode("p", _hoisted_5$3, vue.toDisplayString(_ctx.message), 1),
          vue.createElementVNode("div", _hoisted_6$2, [
            vue.createElementVNode("a", _hoisted_7$2, vue.toDisplayString(i18n__namespace.__("Click here to learn more about PRO.", "zionbuilder")), 1)
          ]),
          vue.createElementVNode("a", _hoisted_8$1, vue.toDisplayString(i18n__namespace.__("Upgrade to PRO", "zionbuilder")), 1)
        ]);
      };
    }
  });
  const GetPro_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$5 = { class: "znpb-admin-tools-wrapper" };
  const _hoisted_2$5 = { class: "znpb-admin-regenerate" };
  const _hoisted_3$3 = { key: 0 };
  const _hoisted_4$2 = { key: 1 };
  const _hoisted_5$2 = { class: "znpb-admin-info-p" };
  const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
    __name: "ToolsPage",
    setup(__props) {
      const AssetsStore = window.zb.store.useAssetsStore();
      return (_ctx, _cache) => {
        const _component_Loader = vue.resolveComponent("Loader");
        const _component_Button = vue.resolveComponent("Button");
        const _component_PageTemplate = vue.resolveComponent("PageTemplate");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
          vue.createVNode(_component_PageTemplate, null, {
            right: vue.withCtx(() => [
              vue.createElementVNode("p", _hoisted_5$2, vue.toDisplayString(i18n__namespace.__(
                "Styles are saved in CSS files in the uploads folder. Recreate those files, according to the most recent settings.",
                "zionbuilder"
              )), 1)
            ]),
            default: vue.withCtx(() => [
              vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("General", "zionbuilder")), 1),
              vue.createElementVNode("div", _hoisted_2$5, [
                vue.createElementVNode("h4", null, vue.toDisplayString(i18n__namespace.__("Regenerate CSS & JS", "zionbuilder")), 1),
                vue.createVNode(_component_Button, {
                  type: "line",
                  class: vue.normalizeClass({ ["-hasLoading"]: vue.unref(AssetsStore).isLoading }),
                  onClick: vue.unref(AssetsStore).regenerateCache
                }, {
                  default: vue.withCtx(() => [
                    vue.unref(AssetsStore).isLoading ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode(_component_Loader, { size: 13 }),
                      vue.unref(AssetsStore).filesCount > 0 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$3, vue.toDisplayString(vue.unref(AssetsStore).currentIndex) + "/" + vue.toDisplayString(vue.unref(AssetsStore).filesCount), 1)) : vue.createCommentVNode("", true)
                    ], 64)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$2, vue.toDisplayString(i18n__namespace.__("Regenerate Files", "zionbuilder")), 1))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])
              ])
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  const ToolsPage_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$4 = { class: "znpb-admin-replace" };
  const _hoisted_2$4 = { class: "znpb-admin-replace__title" };
  const _hoisted_3$2 = { class: "znpb-admin-replace__actions" };
  const _hoisted_4$1 = { key: 1 };
  const _hoisted_5$1 = ["innerHTML"];
  const _hoisted_6$1 = { class: "znpb-admin-info-p" };
  const _hoisted_7$1 = ["innerHTML"];
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
    __name: "ReplaceUrl",
    setup(__props) {
      const loading = vue.ref(false);
      const message = vue.ref("");
      const oldUrl = vue.ref("");
      const newUrl = vue.ref("");
      const disabled = vue.computed(() => {
        return !(oldUrl.value.length > 0 && newUrl.value.length > 0);
      });
      const panelInfo = i18n__namespace.__(
        `<strong>Important:</strong> It is strongly recommended that you
					<a href="https://zionbuilder.io/documentation/replace-url-s/" target="_blank">backup your database</a> before using Replace
					URL.`,
        "zionbuilder"
      );
      function callReplaceUrl() {
        message.value = "";
        loading.value = true;
        api.replaceUrl({
          find: oldUrl.value,
          replace: newUrl.value
        }).then((response) => {
          loading.value = false;
          message.value = response.data.message;
        }).catch(() => {
          loading.value = false;
        }).finally(() => {
          setTimeout(() => {
            message.value = "";
          }, 5e3);
        });
      }
      return (_ctx, _cache) => {
        const _component_BaseInput = vue.resolveComponent("BaseInput");
        const _component_Icon = vue.resolveComponent("Icon");
        const _component_Loader = vue.resolveComponent("Loader");
        const _component_Button = vue.resolveComponent("Button");
        const _component_PageTemplate = vue.resolveComponent("PageTemplate");
        return vue.openBlock(), vue.createBlock(_component_PageTemplate, null, {
          right: vue.withCtx(() => [
            vue.createElementVNode("div", null, [
              vue.createElementVNode("p", _hoisted_6$1, vue.toDisplayString(i18n__namespace.__(
                'Enter your old and new URLs for your WordPress installation, to update all references (Relevant for domain transfers or move to "HTTPS").',
                "zionbuilder"
              )), 1),
              vue.createElementVNode("p", {
                class: "znpb-admin-info-p",
                innerHTML: vue.unref(panelInfo)
              }, null, 8, _hoisted_7$1)
            ])
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("Replace URL", "zionbuilder")), 1),
            vue.createElementVNode("div", _hoisted_1$4, [
              vue.createElementVNode("h4", _hoisted_2$4, vue.toDisplayString(i18n__namespace.__("Update Site Address (URL)", "zionbuilder")), 1),
              vue.createVNode(_component_BaseInput, {
                modelValue: oldUrl.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => oldUrl.value = $event),
                placeholder: i18n__namespace.__("Old URL", "zionbuilder"),
                size: "narrow"
              }, null, 8, ["modelValue", "placeholder"]),
              vue.createVNode(_component_Icon, {
                icon: "long-arrow-right",
                class: "znpb-admin-replace__icon"
              }),
              vue.createVNode(_component_BaseInput, {
                modelValue: newUrl.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newUrl.value = $event),
                placeholder: i18n__namespace.__("New URL", "zionbuilder"),
                size: "narrow"
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            vue.createElementVNode("div", _hoisted_3$2, [
              vue.createVNode(_component_Button, {
                type: disabled.value ? "disabled" : "line",
                class: "znpb-admin-replace-button",
                onClick: callReplaceUrl
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.Transition, {
                    name: "fade",
                    mode: "out-in"
                  }, {
                    default: vue.withCtx(() => [
                      loading.value ? (vue.openBlock(), vue.createBlock(_component_Loader, {
                        key: 0,
                        size: 13
                      })) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$1, vue.toDisplayString(i18n__namespace.__("Update URL", "zionbuilder")), 1))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["type"]),
              message.value.length ? (vue.openBlock(), vue.createElementBlock("p", {
                key: 0,
                innerHTML: message.value
              }, null, 8, _hoisted_5$1)) : vue.createCommentVNode("", true)
            ])
          ]),
          _: 1
        });
      };
    }
  });
  const ReplaceUrl_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    __name: "MaintenanceMode",
    setup(__props) {
      const { useBuilderOptionsStore } = window.zb.store;
      const { getOptionValue, updateOptionValue } = useBuilderOptionsStore();
      const computedModel = vue.computed({
        get() {
          return getOptionValue("maintenance_mode", {});
        },
        set(newValue) {
          if (newValue === null) {
            updateOptionValue("maintenance_mode", {});
          } else {
            updateOptionValue("maintenance_mode", newValue);
          }
        }
      });
      const schema = window.ZnPbAdminPageData.maintenance_mode.schema;
      return (_ctx, _cache) => {
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        const _component_PageTemplate = vue.resolveComponent("PageTemplate");
        return vue.openBlock(), vue.createBlock(_component_PageTemplate, null, {
          default: vue.withCtx(() => [
            vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("Maintenance mode", "zionbuilder")), 1),
            vue.createVNode(_component_OptionsForm, {
              modelValue: computedModel.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedModel.value = $event),
              schema: vue.unref(schema),
              class: "znpb-maintenanceModeForm"
            }, null, 8, ["modelValue", "schema"])
          ]),
          _: 1
        });
      };
    }
  });
  const MaintenanceMode_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$3 = { class: "znpb-admin-info-p" };
  const _hoisted_2$3 = { class: "znpb-admin-info-p" };
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    __name: "Appearance",
    setup(__props) {
      const { getOptionValue, updateOptionValue } = store.useBuilderOptionsStore();
      const schema = window.ZnPbAdminPageData.appearance.schema;
      const computedModel = vue.computed({
        get() {
          return getOptionValue("appearance", {});
        },
        set(newValue) {
          if (newValue === null) {
            updateOptionValue("appearance", {});
          } else {
            updateOptionValue("appearance", newValue);
          }
        }
      });
      vue.watch(
        () => computedModel.value.builder_theme,
        (newValue) => {
          if (document.body.classList.contains("toplevel_page_zionbuilder")) {
            if (newValue === "dark") {
              document.body.classList.add("znpb-theme-dark");
            } else {
              document.body.classList.remove("znpb-theme-dark");
            }
          }
        }
      );
      return (_ctx, _cache) => {
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        const _component_PageTemplate = vue.resolveComponent("PageTemplate");
        return vue.openBlock(), vue.createBlock(_component_PageTemplate, null, {
          right: vue.withCtx(() => [
            vue.createElementVNode("div", null, [
              vue.createElementVNode("p", _hoisted_1$3, vue.toDisplayString(i18n__namespace.__("Builder theme", "zionbuilder")), 1),
              vue.createElementVNode("p", _hoisted_2$3, vue.toDisplayString(i18n__namespace.__(
                "By changing the builder theme, it will be applied on all pages where the builder is active, as well as all the builder admin pages",
                "zionbuilder"
              )), 1)
            ])
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("Appearance", "zionbuilder")), 1),
            vue.createVNode(_component_OptionsForm, {
              modelValue: computedModel.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedModel.value = $event),
              schema: vue.unref(schema),
              class: "znpb-appearancePageForm"
            }, null, 8, ["modelValue", "schema"])
          ]),
          _: 1
        });
      };
    }
  });
  const Appearance_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$2 = { class: "znpb-admin-info-p" };
  const _hoisted_2$2 = { class: "znpb-admin-info-p" };
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    __name: "Features",
    setup(__props) {
      const { getOptionValue, updateOptionValue } = store.useBuilderOptionsStore();
      const schema = window.ZnPbAdminPageData.schemas.features;
      const computedModel = vue.computed({
        get() {
          return getOptionValue("features", {});
        },
        set(newValue) {
          if (newValue === null) {
            updateOptionValue("features", {});
          } else {
            updateOptionValue("features", newValue);
          }
        }
      });
      return (_ctx, _cache) => {
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        const _component_PageTemplate = vue.resolveComponent("PageTemplate");
        return vue.openBlock(), vue.createBlock(_component_PageTemplate, null, {
          right: vue.withCtx(() => [
            vue.createElementVNode("div", null, [
              vue.createElementVNode("p", _hoisted_1$2, vue.toDisplayString(i18n__namespace.__("Builder theme", "zionbuilder")), 1),
              vue.createElementVNode("p", _hoisted_2$2, vue.toDisplayString(i18n__namespace.__(
                "By changing the builder theme, it will be applied on all pages where the builder is active, as well as all the builder admin pages",
                "zionbuilder"
              )), 1)
            ])
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("Features", "zionbuilder")), 1),
            vue.createVNode(_component_OptionsForm, {
              modelValue: computedModel.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedModel.value = $event),
              schema: vue.unref(schema),
              class: "znpb-appearancePageForm"
            }, null, 8, ["modelValue", "schema"])
          ]),
          _: 1
        });
      };
    }
  });
  const Features_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    __name: "CustomCode",
    setup(__props) {
      const { useBuilderOptionsStore } = window.zb.store;
      const { getOptionValue, updateOptionValue, deleteOptionValue, debouncedSaveOptions } = useBuilderOptionsStore();
      const schema = window.ZnPbAdminPageData.custom_code.schema;
      const computedModel = vue.computed({
        get() {
          return getOptionValue("custom_code", {});
        },
        set(newValue) {
          if (newValue === null) {
            deleteOptionValue("custom_code", false);
          } else {
            updateOptionValue("custom_code", newValue, false);
          }
          debouncedSaveOptions();
        }
      });
      return (_ctx, _cache) => {
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        const _component_PageTemplate = vue.resolveComponent("PageTemplate");
        return vue.openBlock(), vue.createBlock(_component_PageTemplate, { class: "znpb-admin-content-wrapper" }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("Custom code", "zionbuilder")), 1),
            vue.createVNode(_component_OptionsForm, {
              modelValue: computedModel.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedModel.value = $event),
              schema: vue.unref(schema),
              class: "znpb-appearancePageForm"
            }, null, 8, ["modelValue", "schema"])
          ]),
          _: 1
        });
      };
    }
  });
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    __name: "Performance",
    setup(__props) {
      const { useBuilderOptionsStore } = window.zb.store;
      const { getOptionValue, updateOptionValue, debouncedSaveOptions } = useBuilderOptionsStore();
      const computedModel = vue.computed({
        get() {
          return getOptionValue("performance", {});
        },
        set(newValue) {
          if (newValue === null) {
            updateOptionValue("performance", {}, false);
          } else {
            updateOptionValue("performance", newValue, false);
          }
          debouncedSaveOptions();
        }
      });
      const schema = window.ZnPbAdminPageData.schemas.performance;
      return (_ctx, _cache) => {
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        const _component_PageTemplate = vue.resolveComponent("PageTemplate");
        return vue.openBlock(), vue.createBlock(_component_PageTemplate, { class: "znpb-performancePage" }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("Performance", "zionbuilder")), 1),
            vue.createVNode(_component_OptionsForm, {
              modelValue: computedModel.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedModel.value = $event),
              schema: vue.unref(schema),
              class: "znpb-performanceForm"
            }, null, 8, ["modelValue", "schema"])
          ]),
          _: 1
        });
      };
    }
  });
  const Performance_vue_vue_type_style_index_0_lang = "";
  const getTemplateChildren = () => {
    const templateChildren = {};
    window.ZnPbAdminPageData.template_types.forEach((templateType) => {
      templateChildren[templateType.id] = {
        path: templateType.id,
        name: templateType.id,
        props: {
          templateType: templateType.id,
          templateName: templateType.name
        },
        component: _sfc_main$o,
        meta: {
          title: templateType.name
        }
      };
    });
    return templateChildren;
  };
  const routes = new Routes$1();
  const initRoutes = function() {
    routes.addRoute("home", {
      path: "/",
      component: _sfc_main$h,
      name: "home",
      redirect: {
        name: "settings"
      }
    });
    const SettingsRoute = routes.addRoute("settings", {
      path: "/settings",
      name: "settings",
      redirect: {
        name: "general-settings"
      },
      component: _sfc_main$h,
      meta: {
        title: i18n__namespace.__("Settings", "zionbuilder")
      }
    });
    const GeneralSettingsRoute = SettingsRoute.addRoute("general-settings", {
      path: "general-settings",
      redirect: {
        name: "allowed-post-types"
      },
      component: SettingsPage,
      name: "general-settings",
      meta: {
        title: i18n__namespace.__("General Settings", "zionbuilder")
      }
    });
    GeneralSettingsRoute.addRoute("allowed-post-types", {
      path: "allowed-post-types",
      name: "allowed-post-types",
      meta: {
        title: i18n__namespace.__("Allowed Post types", "zionbuilder")
      },
      component: _sfc_main$i
    });
    GeneralSettingsRoute.addRoute("maintenance-mode", {
      path: "maintenance-mode",
      name: "maintenance-mode",
      meta: {
        title: i18n__namespace.__("Maintenance mode", "zionbuilder")
      },
      component: _sfc_main$9
    });
    GeneralSettingsRoute.addRoute("appearance", {
      path: "appearance",
      name: "appearance",
      meta: {
        title: i18n__namespace.__("Appearance", "zionbuilder")
      },
      component: _sfc_main$8
    });
    GeneralSettingsRoute.addRoute("features", {
      path: "features",
      name: "features",
      meta: {
        title: i18n__namespace.__("Features", "zionbuilder")
      },
      component: _sfc_main$7
    });
    const FontOptionsRoute = SettingsRoute.addRoute("font-options", {
      path: "font-options",
      name: "font_options",
      redirect: {
        name: "google_fonts"
      },
      meta: {
        title: i18n__namespace.__("Font Options", "zionbuilder")
      },
      component: SettingsPage
    });
    FontOptionsRoute.addRoute("google-fonts", {
      path: "google-fonts",
      name: "google_fonts",
      component: _sfc_main$j,
      meta: {
        title: i18n__namespace.__("Google Fonts", "zionbuilder")
      }
    });
    FontOptionsRoute.addRoute("custom-fonts", {
      path: "custom-fonts",
      name: "custom_fonts",
      props: {
        message: i18n__namespace.__(
          "With PRO you can upload your own sets of fonts and assign it to your page elements.",
          "zionbuilder"
        )
      },
      component: _sfc_main$c,
      meta: {
        label: {
          type: "warning",
          text: i18n__namespace.__("pro", "zionbuilder")
        },
        title: i18n__namespace.__("Custom Fonts", "zionbuilder")
      }
    });
    FontOptionsRoute.addRoute("adobe-fonts", {
      path: "adobe-fonts",
      name: "adobe_fonts",
      props: {
        message: i18n__namespace.__(
          "With PRO you can use the Adobe fonts library to add your fonts along side Google fonts and custom fonts.",
          "zionbuilder"
        )
      },
      component: _sfc_main$c,
      meta: {
        label: {
          type: "warning",
          text: i18n__namespace.__("pro", "zionbuilder")
        },
        title: i18n__namespace.__("Adobe Fonts", "zionbuilder")
      }
    });
    SettingsRoute.addRoute("custom-icons", {
      path: "custom-icons",
      name: "icons",
      props: {
        message: i18n__namespace.__("Zion Builder PRO lets you share you templates library with multiple websites.", "zionbuilder")
      },
      component: _sfc_main$c,
      meta: {
        label: {
          type: "warning",
          text: i18n__namespace.__("pro", "zionbuilder")
        },
        title: i18n__namespace.__("Custom Icons", "zionbuilder")
      }
    });
    const PresetsRoute = SettingsRoute.addRoute("presets", {
      path: "presets",
      component: SettingsPage,
      redirect: {
        name: "color_presets"
      },
      name: "presets",
      meta: {
        title: i18n__namespace.__("Presets", "zionbuilder")
      }
    });
    PresetsRoute.addRoute("color-presets", {
      path: "color-presets",
      name: "color_presets",
      component: _sfc_main$B,
      meta: {
        title: i18n__namespace.__("Color Presets", "zionbuilder")
      }
    });
    PresetsRoute.addRoute("gradients-presets", {
      path: "gradients-presets",
      name: "gradients_presets",
      component: _sfc_main$d,
      meta: {
        title: i18n__namespace.__("Gradients", "zionbuilder")
      }
    });
    SettingsRoute.addRoute("performance", {
      path: "performance",
      name: "performance",
      component: _sfc_main$5,
      meta: {
        title: i18n__namespace.__("Performance", "zionbuilder")
      }
    });
    SettingsRoute.addRoute("library", {
      path: "library",
      name: "library",
      props: {
        message: i18n__namespace.__(
          "With PRO you can upload your own icons in addition to the Font Awesome icons that everyone is using.",
          "zionbuilder"
        )
      },
      component: _sfc_main$c,
      meta: {
        title: i18n__namespace.__("Library", "zionbuilder"),
        label: {
          type: "warning",
          text: i18n__namespace.__("pro", "zionbuilder")
        }
      }
    });
    routes.addRoute("permissions", {
      path: "/permissions",
      component: _sfc_main$u,
      meta: {
        title: i18n__namespace.__("Permissions", "zionbuilder")
      }
    });
    routes.addRoute("templates", {
      path: "/templates",
      component: _sfc_main$h,
      name: "all_templates",
      redirect: {
        name: "template"
      },
      children: getTemplateChildren(),
      meta: {
        title: i18n__namespace.__("Templates", "zionbuilder")
      }
    });
    routes.addRoute("custom-code", {
      path: "/custom-code",
      component: _sfc_main$6,
      meta: {
        title: i18n__namespace.__("Custom code", "zionbuilder")
      }
    });
    const ToolsRoute = routes.addRoute("tools-page", {
      path: "/tools-page",
      component: _sfc_main$h,
      redirect: {
        name: "tools-page"
      },
      meta: {
        title: i18n__namespace.__("Tools", "zionbuilder")
      }
    });
    ToolsRoute.addRoute("tools-page", {
      path: "tools-page",
      name: "tools-page",
      props: { templateType: "tools" },
      component: _sfc_main$b,
      meta: {
        title: i18n__namespace.__("General", "zionbuilder")
      }
    });
    ToolsRoute.addRoute("replace-url", {
      path: "replace-url",
      name: "replace-url",
      props: { templateType: "replace-url" },
      component: _sfc_main$a,
      meta: {
        title: i18n__namespace.__("Replace URL", "zionbuilder")
      }
    });
    routes.addRoute("system-info", {
      path: "/system-info",
      component: _sfc_main$D,
      meta: {
        title: i18n__namespace.__("System Info", "zionbuilder")
      }
    });
    routes.addRoute("get-pro", {
      path: "/get-pro",
      name: "get-pro",
      component: _sfc_main$c
    });
  };
  const _hoisted_1$1 = {
    key: 0,
    id: "znpb-admin",
    class: "znpb-admin__wrapper"
  };
  const _hoisted_2$1 = { class: "znpb-admin__header" };
  const _hoisted_3$1 = { class: "znpb-admin__header-top" };
  const _hoisted_4 = { class: "znpb-admin__header-logo" };
  const _hoisted_5 = ["src"];
  const _hoisted_6 = { class: "znpb-admin__header-logo-version" };
  const _hoisted_7 = { class: "znpb-admin__header-actions" };
  const _hoisted_8 = ["href", "title"];
  const _hoisted_9 = { class: "znpb-admin__header-menu-wrapper" };
  const _hoisted_10 = { class: "znpb-admin__header-menu" };
  const _hoisted_11 = { class: "znpb-admin-notices-wrapper" };
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "BaseAdmin",
    setup(__props) {
      const router = vueRouter.useRouter();
      const builderOptionsStore = store.useBuilderOptionsStore();
      const googleFontsStore = store.useGoogleFontsStore();
      const notificationsStore = store.useNotificationsStore();
      const EnvironmentStore = store.useEnvironmentStore();
      const loaded = vue.ref(false);
      const hasError = vue.ref(false);
      const menuItems = vue.computed(() => {
        return router.options.routes.map((rawRoute) => router.resolve(rawRoute)).filter((route) => route.meta.title);
      });
      const documentationLink = vue.computed(() => {
        let helpURL = "https://zionbuilder.io/help-center/";
        if (builderOptionsStore.getOptionValue("white_label") !== null && typeof builderOptionsStore.getOptionValue("white_label").plugin_help_url !== "undefined") {
          helpURL = builderOptionsStore.getOptionValue("white_label").plugin_help_url;
        }
        return helpURL;
      });
      Promise.all([googleFontsStore.fetchGoogleFonts()]).catch((error) => {
        hasError.value = true;
        console.error(error);
      }).finally(() => {
        loaded.value = true;
      });
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        const _component_router_link = vue.resolveComponent("router-link");
        const _component_router_view = vue.resolveComponent("router-view");
        const _component_Notice = vue.resolveComponent("Notice");
        return loaded.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          vue.createElementVNode("div", _hoisted_2$1, [
            vue.createElementVNode("div", _hoisted_3$1, [
              vue.createElementVNode("div", _hoisted_4, [
                vue.createElementVNode("img", {
                  src: vue.unref(EnvironmentStore).urls.logo
                }, null, 8, _hoisted_5),
                vue.createElementVNode("span", _hoisted_6, "v" + vue.toDisplayString(vue.unref(EnvironmentStore).plugin_free.version), 1)
              ]),
              vue.createElementVNode("div", _hoisted_7, [
                !vue.unref(EnvironmentStore).plugin_pro.is_active ? (vue.openBlock(), vue.createBlock(_component_router_link, {
                  key: 0,
                  to: "/get-pro",
                  class: "znpb-button znpb-button--secondary"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Icon, { icon: "quality" }),
                    vue.createTextVNode(" " + vue.toDisplayString(i18n__namespace.__("Upgrade to PRO", "zionbuilder")), 1)
                  ]),
                  _: 1
                })) : vue.createCommentVNode("", true),
                documentationLink.value && documentationLink.value.length ? (vue.openBlock(), vue.createElementBlock("a", {
                  key: 1,
                  href: documentationLink.value,
                  title: i18n__namespace.__("Documentation", "zionbuilder"),
                  target: "_blank",
                  class: "znpb-button znpb-button--line"
                }, vue.toDisplayString(i18n__namespace.__("Documentation", "zionbuilder")), 9, _hoisted_8)) : vue.createCommentVNode("", true)
              ])
            ]),
            vue.createElementVNode("div", _hoisted_9, [
              vue.createElementVNode("div", _hoisted_10, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(menuItems.value, (menuItem, key) => {
                  return vue.openBlock(), vue.createBlock(_component_router_link, {
                    key,
                    to: `${menuItem.path}`,
                    class: "znpb-admin__header-menu-item"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(menuItem.meta.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))
              ])
            ])
          ]),
          vue.createVNode(_component_router_view),
          vue.createElementVNode("div", _hoisted_11, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(notificationsStore).notifications, (error, index2) => {
              return vue.openBlock(), vue.createBlock(_component_Notice, {
                key: index2,
                error,
                onCloseNotice: ($event) => error.remove()
              }, null, 8, ["error", "onCloseNotice"]);
            }), 128))
          ]),
          vue.createVNode(vue.unref(components.CornerLoader), {
            "is-loading": vue.unref(builderOptionsStore).isLoading
          }, null, 8, ["is-loading"])
        ])) : vue.createCommentVNode("", true);
      };
    }
  });
  const BaseAdmin_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "SideMenuItem",
    props: {
      menuItem: {},
      basePath: { default: "" }
    },
    setup(__props) {
      const props = __props;
      const isActive = vue.computed(() => {
        const routerPath = vueRouter.useRoute().path;
        return routerPath.indexOf(props.menuItem.path) !== -1;
      });
      return (_ctx, _cache) => {
        const _component_SideMenu = vue.resolveComponent("SideMenu");
        const _component_router_link = vue.resolveComponent("router-link");
        return vue.openBlock(), vue.createBlock(_component_router_link, {
          class: vue.normalizeClass(["znpb-admin-side-menu__item", { "znpb-admin__side-menu-item--active": isActive.value }]),
          to: `${_ctx.basePath}/${_ctx.menuItem.path}`
        }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "default"),
            _ctx.menuItem.children && _ctx.menuItem.children.length && isActive.value ? (vue.openBlock(), vue.createBlock(_component_SideMenu, {
              key: 0,
              "menu-items": _ctx.menuItem.children,
              animate: true,
              "base-path": `${_ctx.basePath}/${_ctx.menuItem.path}`
            }, null, 8, ["menu-items", "base-path"])) : vue.createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["class", "to"]);
      };
    }
  });
  const SideMenuItem_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "SideMenu",
    props: {
      menuItems: {},
      basePath: { default: "" }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_Label = vue.resolveComponent("Label");
        const _component_ListAnimation = vue.resolveComponent("ListAnimation");
        return vue.openBlock(), vue.createBlock(_component_ListAnimation, {
          class: "znpb-admin-side-menu",
          tag: "ul"
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.menuItems, (menuItem, key) => {
              return vue.openBlock(), vue.createBlock(_sfc_main$3, {
                key,
                "menu-item": menuItem,
                "base-path": `${_ctx.basePath}`
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(menuItem.meta.title) + " ", 1),
                  menuItem.meta.label ? (vue.openBlock(), vue.createBlock(_component_Label, vue.mergeProps({ key: 0 }, menuItem.meta.label, { class: "znpb-label--pro" }), null, 16)) : vue.createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["menu-item", "base-path"]);
            }), 128))
          ]),
          _: 1
        });
      };
    }
  });
  const SideMenu_vue_vue_type_style_index_0_lang = "";
  const PageTemplate_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$1 = {};
  const _hoisted_1 = { class: "znpb-admin-content znpb-admin-content--center" };
  const _hoisted_2 = { class: "znpb-admin-content__center" };
  const _hoisted_3 = { class: "znpb-admin-content__right" };
  function _sfc_render(_ctx, _cache) {
    const _component_Icon = vue.resolveComponent("Icon");
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
      vue.createElementVNode("div", _hoisted_2, [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      vue.createElementVNode("div", _hoisted_3, [
        vue.createVNode(_component_Icon, {
          icon: "infobig",
          class: "znpb-admin-right-info"
        }),
        vue.renderSlot(_ctx.$slots, "right")
      ])
    ]);
  }
  const PageTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "ListAnimate",
    props: {
      tag: { default: "div" }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.TransitionGroup, {
          tag: _ctx.tag,
          name: "znpb-list-animate",
          appear: ""
        }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["tag"]);
      };
    }
  });
  const ListAnimate_vue_vue_type_style_index_0_lang = "";
  const appInstance = vue.createApp(_sfc_main$4);
  appInstance.component("SideMenu", _sfc_main$2);
  appInstance.component("PageTemplate", PageTemplate);
  appInstance.component("ListAnimation", _sfc_main);
  appInstance.component("ModalTwoColTemplate", _sfc_main$t);
  appInstance.use(window.zb.installCommonAPP);
  window.addEventListener("load", function() {
    const evt = new CustomEvent("zionbuilder/admin/init", {
      detail: window.zb.admin
    });
    initRoutes();
    window.dispatchEvent(evt);
    const router = hooks.applyFilters(
      "zionbuilder/router",
      vueRouter.createRouter({
        // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
        history: vueRouter.createWebHashHistory(),
        routes: routes.getConfigForRouter()
        // short for `routes: routes`
      })
    );
    appInstance.use(router);
    appInstance.mount("#znpb-admin");
  });
  window.zb = window.zb || {};
  window.zb.admin = {
    routes
  };
})(zb.vue, zb.VueRouter, zb.hooks, wp.i18n, zb.utils, zb.components, zb.store, zb.pinia, zb.api);
