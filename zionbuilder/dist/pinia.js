(function(vue) {
  "use strict";
  /*!
   * pinia v3.0.3
   * (c) 2025 Eduardo San Martin Morote
   * @license MIT
   */
  let activePinia;
  const setActivePinia = (pinia2) => activePinia = pinia2;
  const getActivePinia = () => vue.hasInjectionContext() && vue.inject(piniaSymbol) || activePinia;
  const piniaSymbol = (
    /* istanbul ignore next */
    Symbol()
  );
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia2 = vue.markRaw({
      install(app) {
        setActivePinia(pinia2);
        pinia2._a = app;
        app.provide(piniaSymbol, pinia2);
        app.config.globalProperties.$pinia = pinia2;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      },
      use(plugin) {
        if (!this._a) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    return pinia2;
  }
  function disposePinia(pinia2) {
    pinia2._e.stop();
    pinia2._s.clear();
    pinia2._p.splice(0);
    pinia2.state.value = {};
    pinia2._a = null;
  }
  function acceptHMRUpdate(initialUseStore, hot) {
    {
      return () => {
      };
    }
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn) => fn();
  const ACTION_MARKER = Symbol();
  const ACTION_NAME = Symbol();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    } else if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = (
    /* istanbul ignore next */
    Symbol()
  );
  function skipHydrate(obj) {
    return Object.defineProperty(obj, skipHydrateSymbol, {});
  }
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !Object.prototype.hasOwnProperty.call(obj, skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia2, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia2.state.value[id];
    let store;
    function setup() {
      if (!initialState && true) {
        pinia2.state.value[id] = state ? state() : {};
      }
      const localState = vue.toRefs(pinia2.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia2);
          const store2 = pinia2._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia2, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia2, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    const $subscribeOptions = { deep: true };
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia2.state.value[$id];
    if (!isOptionsStore && !initialState && true) {
      pinia2.state.value[$id] = {};
    }
    vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia2.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia2.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia2.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      noop
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia2._s.delete($id);
    }
    const action = (fn, name = "") => {
      if (ACTION_MARKER in fn) {
        fn[ACTION_NAME] = name;
        return fn;
      }
      const wrappedAction = function() {
        setActivePinia(pinia2);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name: wrappedAction[ACTION_NAME],
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = fn.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
      wrappedAction[ACTION_MARKER] = true;
      wrappedAction[ACTION_NAME] = name;
      return wrappedAction;
    };
    const partialStore = {
      _p: pinia2,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia2.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(partialStore);
    pinia2._s.set($id, store);
    const runWithContext = pinia2._a && pinia2._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia2._e.run(() => (scope = vue.effectScope()).run(() => setup({ action }))));
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          pinia2.state.value[$id][key] = prop;
        }
      } else if (typeof prop === "function") {
        const actionValue = action(prop, key);
        setupStore[key] = actionValue;
        optionsForPlugin.actions[key] = prop;
      } else ;
    }
    assign(store, setupStore);
    assign(vue.toRaw(store), setupStore);
    Object.defineProperty(store, "$state", {
      get: () => pinia2.state.value[$id],
      set: (state) => {
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    pinia2._p.forEach((extender) => {
      {
        assign(store, scope.run(() => extender({
          store,
          app: pinia2._a,
          pinia: pinia2,
          options: optionsForPlugin
        })));
      }
    });
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  /*! #__NO_SIDE_EFFECTS__ */
  // @__NO_SIDE_EFFECTS__
  function defineStore(id, setup, setupOptions) {
    let options;
    const isSetupStore = typeof setup === "function";
    options = isSetupStore ? setupOptions : setup;
    function useStore(pinia2, hot) {
      const hasContext = vue.hasInjectionContext();
      pinia2 = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia2 || (hasContext ? vue.inject(piniaSymbol, null) : null);
      if (pinia2)
        setActivePinia(pinia2);
      pinia2 = activePinia;
      if (!pinia2._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia2);
        } else {
          createOptionsStore(id, options, pinia2);
        }
      }
      const store = pinia2._s.get(id);
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  let mapStoreSuffix = "Store";
  function setMapStoreSuffix(suffix) {
    mapStoreSuffix = suffix;
  }
  function mapStores(...stores) {
    return stores.reduce((reduced, useStore) => {
      reduced[useStore.$id + mapStoreSuffix] = function() {
        return useStore(this.$pinia);
      };
      return reduced;
    }, {});
  }
  function mapState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function() {
        return useStore(this.$pinia)[key];
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function() {
        const store = useStore(this.$pinia);
        const storeKey = keysOrMapper[key];
        return typeof storeKey === "function" ? storeKey.call(this, store) : (
          // @ts-expect-error: FIXME: should work?
          store[storeKey]
        );
      };
      return reduced;
    }, {});
  }
  const mapGetters = mapState;
  function mapActions(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[key](...args);
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[keysOrMapper[key]](...args);
      };
      return reduced;
    }, {});
  }
  function mapWritableState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[key];
        },
        set(value) {
          return useStore(this.$pinia)[key] = value;
        }
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[keysOrMapper[key]];
        },
        set(value) {
          return useStore(this.$pinia)[keysOrMapper[key]] = value;
        }
      };
      return reduced;
    }, {});
  }
  function storeToRefs(store) {
    const rawStore = vue.toRaw(store);
    const refs = {};
    for (const key in rawStore) {
      const value = rawStore[key];
      if (value.effect) {
        refs[key] = // ...
        vue.computed({
          get: () => store[key],
          set(value2) {
            store[key] = value2;
          }
        });
      } else if (vue.isRef(value) || vue.isReactive(value)) {
        refs[key] = // ---
        vue.toRef(store, key);
      }
    }
    return refs;
  }
  const pinia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    get MutationType() {
      return MutationType;
    },
    acceptHMRUpdate,
    createPinia,
    defineStore,
    disposePinia,
    getActivePinia,
    mapActions,
    mapGetters,
    mapState,
    mapStores,
    mapWritableState,
    setActivePinia,
    setMapStoreSuffix,
    shouldHydrate,
    skipHydrate,
    storeToRefs
  }, Symbol.toStringTag, { value: "Module" }));
  window.zb = window.zb || {};
  window.zb.pinia = pinia;
})(zb.vue);
