(function(vue, i18n, store) {
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
  const _hoisted_1$2 = { class: "znpb-admin-modal-two-cols" };
  const _hoisted_2$2 = { class: "znpb-admin-modal-two-cols__title-block" };
  const _hoisted_3$2 = { class: "znpb-admin-modal-title-block__title" };
  const _hoisted_4$1 = { class: "znpb-admin-modal-title-block__desc" };
  const _hoisted_5$1 = { class: "znpb-admin-modal-two-cols__option-block" };
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "ModalTwoColTemplate",
    props: {
      title: {},
      desc: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
          vue.createElementVNode("div", _hoisted_2$2, [
            vue.createElementVNode("h4", _hoisted_3$2, vue.toDisplayString(_ctx.title), 1),
            vue.createElementVNode("p", _hoisted_4$1, vue.toDisplayString(_ctx.desc), 1)
          ]),
          vue.createElementVNode("div", _hoisted_5$1, [
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ]);
      };
    }
  });
  const ModalTwoColTemplate_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$1 = { class: "znpb-admin-title-block znpb-admin-title-block--heading" };
  const _hoisted_2$1 = { class: "znpb-admin-modal-title-block__title" };
  const _hoisted_3$1 = { class: "znpb-admin-modal-title-block__desc" };
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
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
            vue.createElementVNode("div", _hoisted_1$1, [
              vue.createElementVNode("h4", _hoisted_2$1, vue.toDisplayString(i18n__namespace.__("Templates", "zionbuilder")), 1),
              vue.createElementVNode("p", _hoisted_3$1, vue.toDisplayString(i18n__namespace.__("Create a new template by choosing the template type and adding a name", "zionbuilder")), 1)
            ]),
            vue.createVNode(_sfc_main$2, {
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
            vue.createVNode(_sfc_main$2, {
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
  const _hoisted_1 = { class: "znpb-admin-templatesBar" };
  const _hoisted_2 = { class: "znpb-admin-templatesBarInnerWrapper" };
  const _hoisted_3 = { class: "znpb-admin-templatesBarTitle" };
  const _hoisted_4 = ["src"];
  const _hoisted_5 = { class: "znpb-admin-templatesBarActions" };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      var _a;
      const { getSource } = window.zb.composables.useLibrary();
      const localLibrary = getSource("local_library");
      const showModal = vue.ref(false);
      const EnvironmentStore = store.useEnvironmentStore();
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop)
      });
      const templateType = (_a = params.active_filter) != null ? _a : "template";
      function onAddNewTemplate(template) {
        if (["header", "footer", "body"].includes(template.template_type)) {
          template.theme_area = template.template_type;
          template.template_type = "theme_builder";
          template.library_id = "local_library";
        }
        localLibrary.createItem(template).then((response) => {
          console.log(response);
          window.location.href = response.data.urls.edit_url;
        }).finally(() => {
          showModal.value = false;
        });
      }
      return (_ctx, _cache) => {
        const _component_Modal = vue.resolveComponent("Modal");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("div", _hoisted_2, [
            vue.createElementVNode("div", _hoisted_3, [
              vue.createElementVNode("img", {
                src: vue.unref(EnvironmentStore).urls.logo
              }, null, 8, _hoisted_4),
              vue.createElementVNode("h3", null, vue.toDisplayString(i18n__namespace.__("Templates", "zionbuilder")), 1)
            ]),
            vue.createElementVNode("div", _hoisted_5, [
              vue.createElementVNode("a", {
                href: "#",
                class: "znpb-admin-templatesBarAddNew",
                onClick: _cache[0] || (_cache[0] = ($event) => showModal.value = true)
              }, vue.toDisplayString(i18n__namespace.__("Add new", "zionbuilder")), 1)
            ])
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
              vue.createVNode(_sfc_main$1, {
                "template-type": vue.unref(templateType),
                onSaveTemplate: onAddNewTemplate
              }, null, 8, ["template-type"])
            ]),
            _: 1
          }, 8, ["show", "title"])
        ]);
      };
    }
  });
  const App_vue_vue_type_style_index_0_lang = "";
  const appInstance = vue.createApp(_sfc_main);
  appInstance.use(window.zb.installCommonAPP);
  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }
  const adminBar = document.getElementById("wpadminbar");
  const appContainer = document.createElement("div");
  insertAfter(appContainer, adminBar);
  appInstance.mount(appContainer);
})(zb.vue, wp.i18n, zb.store);
