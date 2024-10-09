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
(function(pinia, vue, i18n) {
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
  window.addEventListener("load", () => {
    const wp3 = window.wp;
    const Library = wp3.media.controller.Library;
    const _ = window._;
    const Select = window.wp.media.view.MediaFrame.Select;
    const MediaController = Library.extend(
      /** @lends wp.media.controller.FeaturedImage.prototype */
      {
        defaults: _.defaults(
          {
            id: "zion-media",
            filterable: "uploaded",
            priority: 60,
            syncSelection: true
          },
          Library.prototype.defaults
        ),
        /**
         * @since 1.0.0
         */
        initialize: function() {
          Library.prototype.initialize.apply(this, arguments);
          const library = this.get("library");
          const comparator = library.comparator;
          library.comparator = function(a, b) {
            const aInQuery = !!this.mirroring.get(a.cid);
            const bInQuery = !!this.mirroring.get(b.cid);
            if (!aInQuery && bInQuery) {
              return -1;
            } else if (aInQuery && !bInQuery) {
              return 1;
            } else {
              return comparator.apply(this, arguments);
            }
          };
          library.observe(this.get("selection"));
        }
      }
    );
    const ZionBuilderFrame = Select.extend(
      /** @lends wp.media.view.MediaFrame.Post.prototype */
      {
        initialize: function() {
          Select.prototype.initialize.apply(this, arguments);
        },
        createStates: function() {
          const options2 = this.options;
          this.states.add(
            new MediaController({
              library: wp3.media.query(options2.library),
              multiple: options2.multiple,
              title: options2.title
            })
          );
        }
      }
    );
    window.wp.media.view.MediaFrame.ZionBuilderFrame = ZionBuilderFrame;
  });
  function getIconUnicode(unicodeValue) {
    return JSON.parse('"\\' + unicodeValue + '"');
  }
  function getIconAttributes(iconConfig) {
    const valueToReturn = {};
    if (iconConfig && iconConfig.family) {
      valueToReturn["data-znpbiconfam"] = iconConfig.family;
      valueToReturn["data-znpbicon"] = getIconUnicode(iconConfig.unicode);
    }
    return valueToReturn;
  }
  function getLinkAttributes(linkConfig) {
    const valueToReturn = {};
    if (linkConfig && linkConfig.link) {
      valueToReturn.href = linkConfig.link;
      if (linkConfig.title) {
        valueToReturn.title = linkConfig.title;
      }
      if (linkConfig.target) {
        valueToReturn.target = linkConfig.target;
      }
      if (Array.isArray(linkConfig.attributes)) {
        linkConfig.attributes.forEach((attributeConfig) => {
          if (attributeConfig.key && typeof attributeConfig.key !== "undefined" && attributeConfig.key.length > 0) {
            valueToReturn[attributeConfig.key] = attributeConfig.value;
          }
        });
      }
    }
    return valueToReturn;
  }
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }
  const { toString: toString$1 } = Object.prototype;
  const { getPrototypeOf } = Object;
  const kindOf = ((cache2) => (thing) => {
    const str = toString$1.call(thing);
    return cache2[str] || (cache2[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  const kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  const typeOfTest = (type) => (thing) => typeof thing === type;
  const { isArray: isArray$2 } = Array;
  const isUndefined = typeOfTest("undefined");
  function isBuffer$2(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  const isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  const isString = typeOfTest("string");
  const isFunction$1 = typeOfTest("function");
  const isNumber = typeOfTest("number");
  const isObject$1 = (thing) => thing !== null && typeof thing === "object";
  const isBoolean = (thing) => thing === true || thing === false;
  const isPlainObject$1 = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype2 = getPrototypeOf(val);
    return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  const isDate = kindOfTest("Date");
  const isFile = kindOfTest("File");
  const isBlob = kindOfTest("Blob");
  const isFileList = kindOfTest("FileList");
  const isStream = (val) => isObject$1(val) && isFunction$1(val.pipe);
  const isFormData = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction$1(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]"));
  };
  const isURLSearchParams = kindOfTest("URLSearchParams");
  const trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray$2(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      const keys2 = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys2.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys2[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys2 = Object.keys(obj);
    let i = keys2.length;
    let _key;
    while (i-- > 0) {
      _key = keys2[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  const _global = (() => {
    if (typeof globalThis !== "undefined")
      return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  const isContextDefined = (context) => !isUndefined(context) && context !== _global;
  function merge$2() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue2 = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject$1(result[targetKey]) && isPlainObject$1(val)) {
        result[targetKey] = merge$2(result[targetKey], val);
      } else if (isPlainObject$1(val)) {
        result[targetKey] = merge$2({}, val);
      } else if (isArray$2(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue2);
    }
    return result;
  }
  const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
    forEach(b, (val, key) => {
      if (thisArg && isFunction$1(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, { allOwnKeys });
    return a;
  };
  const stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  const inherits = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null)
      return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  const endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  const toArray = (thing) => {
    if (!thing)
      return null;
    if (isArray$2(thing))
      return thing;
    let i = thing.length;
    if (!isNumber(i))
      return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  const isTypedArray$2 = ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  const forEachEntry = (obj, fn) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  const matchAll = (regExp, str) => {
    let matches2;
    const arr = [];
    while ((matches2 = regExp.exec(str)) !== null) {
      arr.push(matches2);
    }
    return arr;
  };
  const isHTMLForm = kindOfTest("HTMLFormElement");
  const toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  const hasOwnProperty$d = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  const isRegExp = kindOfTest("RegExp");
  const reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name) => {
      if (reducer(descriptor, name, obj) !== false) {
        reducedDescriptors[name] = descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  const freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction$1(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
        return false;
      }
      const value = obj[name];
      if (!isFunction$1(value))
        return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  const toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray$2(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  const noop$1 = () => {
  };
  const toFiniteNumber = (value, defaultValue) => {
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
  };
  const ALPHA = "abcdefghijklmnopqrstuvwxyz";
  const DIGIT = "0123456789";
  const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
    let str = "";
    const { length } = alphabet;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction$1(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  const toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i) => {
      if (isObject$1(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!("toJSON" in source)) {
          stack[i] = source;
          const target = isArray$2(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  const isAsyncFn = kindOfTest("AsyncFunction");
  const isThenable = (thing) => thing && (isObject$1(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
  const utils$1 = {
    isArray: isArray$2,
    isArrayBuffer,
    isBuffer: isBuffer$2,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject: isObject$1,
    isPlainObject: isPlainObject$1,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction: isFunction$1,
    isStream,
    isURLSearchParams,
    isTypedArray: isTypedArray$2,
    isFileList,
    forEach,
    merge: merge$2,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty: hasOwnProperty$d,
    hasOwnProp: hasOwnProperty$d,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop: noop$1,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
  };
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils$1.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils$1.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  const prototype$1 = AxiosError.prototype;
  const descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code) => {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype$1, "isAxiosError", { value: true });
  AxiosError.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype$1);
    utils$1.toFlatObject(error, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  const httpAdapter = null;
  function isVisitable(thing) {
    return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
  }
  function removeBrackets(key) {
    return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path)
      return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils$1.isArray(arr) && !arr.some(isVisitable);
  }
  const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options2) {
    if (!utils$1.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new FormData();
    options2 = utils$1.toFlatObject(options2, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils$1.isUndefined(source[option]);
    });
    const metaTokens = options2.metaTokens;
    const visitor = options2.visitor || defaultVisitor;
    const dots = options2.dots;
    const indexes = options2.indexes;
    const _Blob = options2.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
    if (!utils$1.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null)
        return "";
      if (utils$1.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils$1.isBlob(value)) {
        throw new AxiosError("Blob is not supported. Use a Buffer instead.");
      }
      if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils$1.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index2) {
            !(utils$1.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index2, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils$1.isUndefined(value))
        return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils$1.forEach(value, function each(el, key) {
        const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils$1.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils$1.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  function encode$1(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options2) {
    this._pairs = [];
    params && toFormData(params, this, options2);
  }
  const prototype = AxiosURLSearchParams.prototype;
  prototype.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype.toString = function toString2(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode$1);
    } : encode$1;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options2) {
    if (!params) {
      return url;
    }
    const _encode = options2 && options2.encode || encode;
    const serializeFn = options2 && options2.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options2);
    } else {
      serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options2).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }
  class InterceptorManager {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options2) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options2 ? options2.synchronous : false,
        runWhen: options2 ? options2.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils$1.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  }
  const InterceptorManager$1 = InterceptorManager;
  const transitionalDefaults = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };
  const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
  const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
  const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
  const isStandardBrowserEnv = (() => {
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  })();
  const isStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  const platform = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams$1,
      FormData: FormData$1,
      Blob: Blob$1
    },
    isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv,
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  function toURLEncodedForm(data, options2) {
    return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (platform.isNode && utils$1.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options2));
  }
  function parsePropPath(name) {
    return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys2 = Object.keys(arr);
    let i;
    const len = keys2.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys2[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index2) {
      let name = path[index2++];
      const isNumericKey = Number.isFinite(+name);
      const isLast = index2 >= path.length;
      name = !name && utils$1.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils$1.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils$1.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index2);
      if (result && utils$1.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
      const obj = {};
      utils$1.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  const DEFAULT_CONTENT_TYPE = {
    "Content-Type": void 0
  };
  function stringifySafely(rawValue, parser, encoder) {
    if (utils$1.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils$1.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  const defaults = {
    transitional: transitionalDefaults,
    adapter: ["xhr", "http"],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils$1.isObject(data);
      if (isObjectPayload && utils$1.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils$1.isFormData(data);
      if (isFormData2) {
        if (!hasJSONContentType) {
          return data;
        }
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }
      if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data)) {
        return data;
      }
      if (utils$1.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$1.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional && transitional.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform.classes.FormData,
      Blob: platform.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    }
  };
  utils$1.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    defaults.headers[method] = utils$1.merge(DEFAULT_CONTENT_TYPE);
  });
  const defaults$1 = defaults;
  const ignoreDuplicateOf = utils$1.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  const parseHeaders = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i = line.indexOf(":");
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };
  const $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (utils$1.isFunction(filter)) {
      return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils$1.isString(value))
      return;
    if (utils$1.isString(filter)) {
      return value.indexOf(filter) !== -1;
    }
    if (utils$1.isRegExp(filter)) {
      return filter.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils$1.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  class AxiosHeaders {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils$1.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders(header), valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils$1.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils$1.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils$1.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils$1.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils$1.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils$1.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys2 = Object.keys(this);
      let i = keys2.length;
      let deleted = false;
      while (i--) {
        const key = keys2[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils$1.forEach(this, (value, header) => {
        const key = utils$1.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils$1.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype2 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype2, _header);
          accessors[lHeader] = true;
        }
      }
      utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  }
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils$1.freezeMethods(AxiosHeaders.prototype);
  utils$1.freezeMethods(AxiosHeaders);
  const AxiosHeaders$1 = AxiosHeaders;
  function transformData(fns, response) {
    const config = this || defaults$1;
    const context = response || config;
    const headers = AxiosHeaders$1.from(context.headers);
    let data = context.data;
    utils$1.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }
  function CanceledError(message, config, request) {
    AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils$1.inherits(CanceledError, AxiosError, {
    __CANCEL__: true
  });
  function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError(
        "Request failed with status code " + response.status,
        [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }
  const cookies = platform.isStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    function standardBrowserEnv() {
      return {
        write: function write2(name, value, expires, path, domain, secure) {
          const cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils$1.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils$1.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils$1.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read2(name) {
          const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv() {
      return {
        write: function write2() {
        },
        read: function read2() {
          return null;
        },
        remove: function remove() {
        }
      };
    }()
  );
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  const isURLSameOrigin = platform.isStandardBrowserEnv ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function standardBrowserEnv() {
      const msie = /(msie|trident)/i.test(navigator.userAgent);
      const urlParsingNode = document.createElement("a");
      let originURL;
      function resolveURL(url) {
        let href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin2(requestURL) {
        const parsed = utils$1.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv() {
      return function isURLSameOrigin2() {
        return true;
      };
    }()
  );
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }
  function speedometer(samplesCount, min2) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min2 = min2 !== void 0 ? min2 : 1e3;
    return function push(chunkLength) {
      const now2 = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now2;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now2;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now2 - firstSampleTS < min2) {
        return;
      }
      const passed = startedAt && now2 - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = speedometer(50, 250);
    return (e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e
      };
      data[isDownloadStream ? "download" : "upload"] = true;
      listener(data);
    };
  }
  const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  const xhrAdapter = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      let requestData = config.data;
      const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
      const responseType = config.responseType;
      let onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener("abort", onCanceled);
        }
      }
      if (utils$1.isFormData(requestData)) {
        if (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv) {
          requestHeaders.setContentType(false);
        } else {
          requestHeaders.setContentType("multipart/form-data;", false);
        }
      }
      let request = new XMLHttpRequest();
      if (config.auth) {
        const username = config.auth.username || "";
        const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
      }
      const fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders$1.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional = config.transitional || transitionalDefaults;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError(
          timeoutErrorMessage,
          transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
          config,
          request
        ));
        request = null;
      };
      if (platform.isStandardBrowserEnv) {
        const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils$1.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = config.responseType;
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
      }
      if (config.cancelToken || config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(fullPath);
      if (protocol && platform.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  };
  const knownAdapters = {
    http: httpAdapter,
    xhr: xhrAdapter
  };
  utils$1.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, "name", { value });
      } catch (e) {
      }
      Object.defineProperty(fn, "adapterName", { value });
    }
  });
  const adapters = {
    getAdapter: (adapters2) => {
      adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
      const { length } = adapters2;
      let nameOrAdapter;
      let adapter;
      for (let i = 0; i < length; i++) {
        nameOrAdapter = adapters2[i];
        if (adapter = utils$1.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
          break;
        }
      }
      if (!adapter) {
        if (adapter === false) {
          throw new AxiosError(
            `Adapter ${nameOrAdapter} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          );
        }
        throw new Error(
          utils$1.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
        );
      }
      if (!utils$1.isFunction(adapter)) {
        throw new TypeError("adapter is not a function");
      }
      return adapter;
    },
    adapters: knownAdapters
  };
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders$1.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders$1.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }
  const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
      if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
        return utils$1.merge.call({ caseless }, target, source);
      } else if (utils$1.isPlainObject(source)) {
        return utils$1.merge({}, source);
      } else if (utils$1.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, caseless) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils$1.isUndefined(a)) {
        return getMergedValue(void 0, a, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils$1.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }
  const VERSION = "1.4.0";
  const validators$1 = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
    validators$1[type] = function validator2(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  const deprecatedWarnings = {};
  validators$1.transitional = function transitional(validator2, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator2 === false) {
        throw new AxiosError(
          formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator2 ? validator2(value, opt, opts) : true;
    };
  };
  function assertOptions(options2, schema, allowUnknown) {
    if (typeof options2 !== "object") {
      throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
    }
    const keys2 = Object.keys(options2);
    let i = keys2.length;
    while (i-- > 0) {
      const opt = keys2[i];
      const validator2 = schema[opt];
      if (validator2) {
        const value = options2[opt];
        const result = value === void 0 || validator2(value, opt, options2);
        if (result !== true) {
          throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
      }
    }
  }
  const validator = {
    assertOptions,
    validators: validators$1
  };
  const validators = validator.validators;
  class Axios {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager$1(),
        response: new InterceptorManager$1()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const { transitional, paramsSerializer, headers } = config;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils$1.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator.assertOptions(paramsSerializer, {
            encode: validators.function,
            serialize: validators.function
          }, true);
        }
      }
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders;
      contextHeaders = headers && utils$1.merge(
        headers.common,
        headers[config.method]
      );
      contextHeaders && utils$1.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method) => {
          delete headers[method];
        }
      );
      config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i = 0;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  }
  utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  const Axios$1 = Axios;
  class CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners)
          return;
        let i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError(message, config, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index2 = this._listeners.indexOf(listener);
      if (index2 !== -1) {
        this._listeners.splice(index2, 1);
      }
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  }
  const CancelToken$1 = CancelToken;
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }
  function isAxiosError(payload) {
    return utils$1.isObject(payload) && payload.isAxiosError === true;
  }
  const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    HttpStatusCode[value] = key;
  });
  const HttpStatusCode$1 = HttpStatusCode;
  function createInstance(defaultConfig) {
    const context = new Axios$1(defaultConfig);
    const instance2 = bind(Axios$1.prototype.request, context);
    utils$1.extend(instance2, Axios$1.prototype, context, { allOwnKeys: true });
    utils$1.extend(instance2, context, null, { allOwnKeys: true });
    instance2.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance2;
  }
  const axios = createInstance(defaults$1);
  axios.Axios = Axios$1;
  axios.CanceledError = CanceledError;
  axios.CancelToken = CancelToken$1;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData;
  axios.AxiosError = AxiosError;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders$1;
  axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.HttpStatusCode = HttpStatusCode$1;
  axios.default = axios;
  const axios$1 = axios;
  function createWPService() {
    return axios$1.create({
      baseURL: `${window.ZBCommonData.rest.rest_root}wp/v2`,
      headers: {
        "X-WP-Nonce": window.ZBCommonData.rest.nonce,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }
  function getService() {
    return axios$1.create({
      baseURL: `${window.ZBCommonData.rest.rest_root}zionbuilder/v1/`,
      headers: {
        "X-WP-Nonce": window.ZBCommonData.rest.nonce,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }
  function bulkActions(payload) {
    const bulkActionData = {
      actions: payload,
      post_id: window.ZnPbInitialData ? window.ZnPbInitialData.page_id : null
    };
    return getService().post("bulk-actions", bulkActionData);
  }
  function getImageIds(payload) {
    return getService().post("media", payload);
  }
  function getFontsDataSet() {
    return getService().get("data-sets");
  }
  function getUserRoles() {
    return getService().get("data-sets/user_roles");
  }
  function getIconsList() {
    return getService().get("data-sets/icons");
  }
  function deleteIconsPackage() {
    return getService().delete("data-sets/icons");
  }
  function getOptionsForm(payload) {
    return getService().post("elements/get_element_options_form", {
      element_data: payload
    });
  }
  function getGoogleFonts() {
    return getService().get("google-fonts");
  }
  function addLibraryItem(libraryID, data) {
    return getService().post(`library/${libraryID}`, data);
  }
  function exportLibraryItem(libraryID, itemID) {
    return getService().get(`library/${libraryID}/${itemID}/export`, {
      responseType: "arraybuffer"
    });
  }
  function deleteLibraryItem(libraryID, itemID) {
    return getService().delete(`library/${libraryID}/${itemID}`);
  }
  function getLibraryItemBuilderConfig(libraryID, itemID) {
    return getService().get(`library/${libraryID}/${itemID}/get-builder-config`);
  }
  function importLibraryItem(libraryID, file) {
    return getService().post(`library/${libraryID}/import`, file, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
  function exportTemplate(data) {
    return getService().post(`library/export`, data, {
      responseType: "arraybuffer"
    });
  }
  function saveLibraryItemThumbnail(libraryID, itemID, data) {
    return getService().post(`library/${libraryID}/${itemID}/save-thumbnail`, data);
  }
  function saveOptions(options2) {
    return getService().post("options", options2);
  }
  function getSavedOptions() {
    return getService().get("options");
  }
  function lockPage(id) {
    return getService().get(`pages/${id}/lock`);
  }
  function savePage(pageData) {
    return getService().post("save-page", pageData);
  }
  function getRenderedContent(id) {
    return getService().get(`pages/${id}/get_rendered_content`);
  }
  function regenerateCache(itemData) {
    return getService().post("assets/regenerate", itemData);
  }
  function getCacheList() {
    return getService().get("assets");
  }
  function finishRegeneration() {
    return getService().get("assets/finish");
  }
  function replaceUrl(urls) {
    return getService().post("replace-url", urls);
  }
  function getSystemInfo() {
    return getService().get("system-info");
  }
  function errorInterceptor(errors, service = getService()) {
    service.interceptors.response.use(
      function(response) {
        if (typeof response.data !== "object") {
          errors.add({
            title: "Server error",
            message: "There was a server error. Please refresh the page and try again",
            type: "error"
          });
          console.warn(response);
        }
        return response;
      },
      function(error) {
        let message = "There was a problem performing the action. Please try again or refresh the page.";
        if (typeof error.response.data.message !== "undefined") {
          message = error.response.data.message;
        }
        errors.add({
          title: "Error",
          message,
          type: "error"
        });
        return Promise.reject(error);
      }
    );
  }
  function getTemplates(config = {}) {
    return getService().get("templates", {
      params: config
    });
  }
  function addTemplate(template) {
    return getService().post("templates", template);
  }
  function duplicateTemplate(templateID) {
    return getService().post("templates/duplicate", {
      template_id: templateID
    });
  }
  function updateTemplate(templateID, templateData) {
    return getService().post(`templates/${templateID}`, templateData);
  }
  function insertTemplate(template) {
    return getService().post("templates/insert", template);
  }
  function deleteTemplate(id) {
    return getService().delete(`templates/${id}`);
  }
  function getUsers() {
    return createWPService().get("users");
  }
  function searchUser(options2) {
    return createWPService().get(`users`, {
      params: {
        search: options2
      }
    });
  }
  function getUsersById(ids) {
    return createWPService().get(`users`, {
      params: {
        include: ids
      }
    });
  }
  function uploadFile(data) {
    return getService().post("upload", data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
  function saveUserData(userData) {
    return getService().post(`user-data`, userData);
  }
  function saveBreakpoints(breakpoints) {
    return getService().post("breakpoints", breakpoints);
  }
  function getBreakpoints() {
    return getService().get("breakpoints");
  }
  const api = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    addLibraryItem,
    addTemplate,
    bulkActions,
    createWPService,
    deleteIconsPackage,
    deleteLibraryItem,
    deleteTemplate,
    duplicateTemplate,
    errorInterceptor,
    exportLibraryItem,
    exportTemplate,
    finishRegeneration,
    getBreakpoints,
    getCacheList,
    getFontsDataSet,
    getGoogleFonts,
    getIconsList,
    getImageIds,
    getLibraryItemBuilderConfig,
    getOptionsForm,
    getRenderedContent,
    getSavedOptions,
    getService,
    getSystemInfo,
    getTemplates,
    getUserRoles,
    getUsers,
    getUsersById,
    importLibraryItem,
    insertTemplate,
    lockPage,
    regenerateCache,
    replaceUrl,
    saveBreakpoints,
    saveLibraryItemThumbnail,
    saveOptions,
    savePage,
    saveUserData,
    searchUser,
    updateTemplate,
    uploadFile
  }, Symbol.toStringTag, { value: "Module" }));
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  function getAugmentedNamespace(n) {
    if (n.__esModule)
      return n;
    var f = n.default;
    if (typeof f == "function") {
      var a = function a2() {
        if (this instanceof a2) {
          return Reflect.construct(f, arguments, this.constructor);
        }
        return f.apply(this, arguments);
      };
      a.prototype = f.prototype;
    } else
      a = {};
    Object.defineProperty(a, "__esModule", { value: true });
    Object.keys(n).forEach(function(k) {
      var d = Object.getOwnPropertyDescriptor(n, k);
      Object.defineProperty(a, k, d.get ? d : {
        enumerable: true,
        get: function() {
          return n[k];
        }
      });
    });
    return a;
  }
  var md5 = { exports: {} };
  function commonjsRequire(path) {
    throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }
  var core = { exports: {} };
  const __viteBrowserExternal = {};
  const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: __viteBrowserExternal
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
  var hasRequiredCore;
  function requireCore() {
    if (hasRequiredCore)
      return core.exports;
    hasRequiredCore = 1;
    (function(module2, exports2) {
      (function(root2, factory) {
        {
          module2.exports = factory();
        }
      })(commonjsGlobal, function() {
        var CryptoJS = CryptoJS || function(Math2, undefined$1) {
          var crypto;
          if (typeof window !== "undefined" && window.crypto) {
            crypto = window.crypto;
          }
          if (typeof self !== "undefined" && self.crypto) {
            crypto = self.crypto;
          }
          if (typeof globalThis !== "undefined" && globalThis.crypto) {
            crypto = globalThis.crypto;
          }
          if (!crypto && typeof window !== "undefined" && window.msCrypto) {
            crypto = window.msCrypto;
          }
          if (!crypto && typeof commonjsGlobal !== "undefined" && commonjsGlobal.crypto) {
            crypto = commonjsGlobal.crypto;
          }
          if (!crypto && typeof commonjsRequire === "function") {
            try {
              crypto = require$$0;
            } catch (err) {
            }
          }
          var cryptoSecureRandomInt = function() {
            if (crypto) {
              if (typeof crypto.getRandomValues === "function") {
                try {
                  return crypto.getRandomValues(new Uint32Array(1))[0];
                } catch (err) {
                }
              }
              if (typeof crypto.randomBytes === "function") {
                try {
                  return crypto.randomBytes(4).readInt32LE();
                } catch (err) {
                }
              }
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          };
          var create = Object.create || function() {
            function F() {
            }
            return function(obj) {
              var subtype;
              F.prototype = obj;
              subtype = new F();
              F.prototype = null;
              return subtype;
            };
          }();
          var C = {};
          var C_lib = C.lib = {};
          var Base = C_lib.Base = function() {
            return {
              /**
               * Creates a new object that inherits from this object.
               *
               * @param {Object} overrides Properties to copy into the new object.
               *
               * @return {Object} The new object.
               *
               * @static
               *
               * @example
               *
               *     var MyType = CryptoJS.lib.Base.extend({
               *         field: 'value',
               *
               *         method: function () {
               *         }
               *     });
               */
              extend: function(overrides) {
                var subtype = create(this);
                if (overrides) {
                  subtype.mixIn(overrides);
                }
                if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                  subtype.init = function() {
                    subtype.$super.init.apply(this, arguments);
                  };
                }
                subtype.init.prototype = subtype;
                subtype.$super = this;
                return subtype;
              },
              /**
               * Extends this object and runs the init method.
               * Arguments to create() will be passed to init().
               *
               * @return {Object} The new object.
               *
               * @static
               *
               * @example
               *
               *     var instance = MyType.create();
               */
              create: function() {
                var instance2 = this.extend();
                instance2.init.apply(instance2, arguments);
                return instance2;
              },
              /**
               * Initializes a newly created object.
               * Override this method to add some logic when your objects are created.
               *
               * @example
               *
               *     var MyType = CryptoJS.lib.Base.extend({
               *         init: function () {
               *             // ...
               *         }
               *     });
               */
              init: function() {
              },
              /**
               * Copies properties into this object.
               *
               * @param {Object} properties The properties to mix in.
               *
               * @example
               *
               *     MyType.mixIn({
               *         field: 'value'
               *     });
               */
              mixIn: function(properties) {
                for (var propertyName in properties) {
                  if (properties.hasOwnProperty(propertyName)) {
                    this[propertyName] = properties[propertyName];
                  }
                }
                if (properties.hasOwnProperty("toString")) {
                  this.toString = properties.toString;
                }
              },
              /**
               * Creates a copy of this object.
               *
               * @return {Object} The clone.
               *
               * @example
               *
               *     var clone = instance.clone();
               */
              clone: function() {
                return this.init.prototype.extend(this);
              }
            };
          }();
          var WordArray = C_lib.WordArray = Base.extend({
            /**
             * Initializes a newly created word array.
             *
             * @param {Array} words (Optional) An array of 32-bit words.
             * @param {number} sigBytes (Optional) The number of significant bytes in the words.
             *
             * @example
             *
             *     var wordArray = CryptoJS.lib.WordArray.create();
             *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
             *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
             */
            init: function(words2, sigBytes) {
              words2 = this.words = words2 || [];
              if (sigBytes != undefined$1) {
                this.sigBytes = sigBytes;
              } else {
                this.sigBytes = words2.length * 4;
              }
            },
            /**
             * Converts this word array to a string.
             *
             * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
             *
             * @return {string} The stringified word array.
             *
             * @example
             *
             *     var string = wordArray + '';
             *     var string = wordArray.toString();
             *     var string = wordArray.toString(CryptoJS.enc.Utf8);
             */
            toString: function(encoder) {
              return (encoder || Hex).stringify(this);
            },
            /**
             * Concatenates a word array to this word array.
             *
             * @param {WordArray} wordArray The word array to append.
             *
             * @return {WordArray} This word array.
             *
             * @example
             *
             *     wordArray1.concat(wordArray2);
             */
            concat: function(wordArray) {
              var thisWords = this.words;
              var thatWords = wordArray.words;
              var thisSigBytes = this.sigBytes;
              var thatSigBytes = wordArray.sigBytes;
              this.clamp();
              if (thisSigBytes % 4) {
                for (var i = 0; i < thatSigBytes; i++) {
                  var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                  thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
                }
              } else {
                for (var j = 0; j < thatSigBytes; j += 4) {
                  thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
                }
              }
              this.sigBytes += thatSigBytes;
              return this;
            },
            /**
             * Removes insignificant bits.
             *
             * @example
             *
             *     wordArray.clamp();
             */
            clamp: function() {
              var words2 = this.words;
              var sigBytes = this.sigBytes;
              words2[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
              words2.length = Math2.ceil(sigBytes / 4);
            },
            /**
             * Creates a copy of this word array.
             *
             * @return {WordArray} The clone.
             *
             * @example
             *
             *     var clone = wordArray.clone();
             */
            clone: function() {
              var clone = Base.clone.call(this);
              clone.words = this.words.slice(0);
              return clone;
            },
            /**
             * Creates a word array filled with random bytes.
             *
             * @param {number} nBytes The number of random bytes to generate.
             *
             * @return {WordArray} The random word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.lib.WordArray.random(16);
             */
            random: function(nBytes) {
              var words2 = [];
              for (var i = 0; i < nBytes; i += 4) {
                words2.push(cryptoSecureRandomInt());
              }
              return new WordArray.init(words2, nBytes);
            }
          });
          var C_enc = C.enc = {};
          var Hex = C_enc.Hex = {
            /**
             * Converts a word array to a hex string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The hex string.
             *
             * @static
             *
             * @example
             *
             *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words2 = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var hexChars = [];
              for (var i = 0; i < sigBytes; i++) {
                var bite = words2[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((bite & 15).toString(16));
              }
              return hexChars.join("");
            },
            /**
             * Converts a hex string to a word array.
             *
             * @param {string} hexStr The hex string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
             */
            parse: function(hexStr) {
              var hexStrLength = hexStr.length;
              var words2 = [];
              for (var i = 0; i < hexStrLength; i += 2) {
                words2[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
              }
              return new WordArray.init(words2, hexStrLength / 2);
            }
          };
          var Latin1 = C_enc.Latin1 = {
            /**
             * Converts a word array to a Latin1 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The Latin1 string.
             *
             * @static
             *
             * @example
             *
             *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words2 = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var latin1Chars = [];
              for (var i = 0; i < sigBytes; i++) {
                var bite = words2[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                latin1Chars.push(String.fromCharCode(bite));
              }
              return latin1Chars.join("");
            },
            /**
             * Converts a Latin1 string to a word array.
             *
             * @param {string} latin1Str The Latin1 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
             */
            parse: function(latin1Str) {
              var latin1StrLength = latin1Str.length;
              var words2 = [];
              for (var i = 0; i < latin1StrLength; i++) {
                words2[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
              }
              return new WordArray.init(words2, latin1StrLength);
            }
          };
          var Utf8 = C_enc.Utf8 = {
            /**
             * Converts a word array to a UTF-8 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The UTF-8 string.
             *
             * @static
             *
             * @example
             *
             *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
             */
            stringify: function(wordArray) {
              try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
              } catch (e) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            /**
             * Converts a UTF-8 string to a word array.
             *
             * @param {string} utf8Str The UTF-8 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
             */
            parse: function(utf8Str) {
              return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            }
          };
          var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
            /**
             * Resets this block algorithm's data buffer to its initial state.
             *
             * @example
             *
             *     bufferedBlockAlgorithm.reset();
             */
            reset: function() {
              this._data = new WordArray.init();
              this._nDataBytes = 0;
            },
            /**
             * Adds new data to this block algorithm's buffer.
             *
             * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
             *
             * @example
             *
             *     bufferedBlockAlgorithm._append('data');
             *     bufferedBlockAlgorithm._append(wordArray);
             */
            _append: function(data) {
              if (typeof data == "string") {
                data = Utf8.parse(data);
              }
              this._data.concat(data);
              this._nDataBytes += data.sigBytes;
            },
            /**
             * Processes available data blocks.
             *
             * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
             *
             * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
             *
             * @return {WordArray} The processed data.
             *
             * @example
             *
             *     var processedData = bufferedBlockAlgorithm._process();
             *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
             */
            _process: function(doFlush) {
              var processedWords;
              var data = this._data;
              var dataWords = data.words;
              var dataSigBytes = data.sigBytes;
              var blockSize = this.blockSize;
              var blockSizeBytes = blockSize * 4;
              var nBlocksReady = dataSigBytes / blockSizeBytes;
              if (doFlush) {
                nBlocksReady = Math2.ceil(nBlocksReady);
              } else {
                nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
              }
              var nWordsReady = nBlocksReady * blockSize;
              var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
              if (nWordsReady) {
                for (var offset2 = 0; offset2 < nWordsReady; offset2 += blockSize) {
                  this._doProcessBlock(dataWords, offset2);
                }
                processedWords = dataWords.splice(0, nWordsReady);
                data.sigBytes -= nBytesReady;
              }
              return new WordArray.init(processedWords, nBytesReady);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = bufferedBlockAlgorithm.clone();
             */
            clone: function() {
              var clone = Base.clone.call(this);
              clone._data = this._data.clone();
              return clone;
            },
            _minBufferSize: 0
          });
          C_lib.Hasher = BufferedBlockAlgorithm.extend({
            /**
             * Configuration options.
             */
            cfg: Base.extend(),
            /**
             * Initializes a newly created hasher.
             *
             * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
             *
             * @example
             *
             *     var hasher = CryptoJS.algo.SHA256.create();
             */
            init: function(cfg) {
              this.cfg = this.cfg.extend(cfg);
              this.reset();
            },
            /**
             * Resets this hasher to its initial state.
             *
             * @example
             *
             *     hasher.reset();
             */
            reset: function() {
              BufferedBlockAlgorithm.reset.call(this);
              this._doReset();
            },
            /**
             * Updates this hasher with a message.
             *
             * @param {WordArray|string} messageUpdate The message to append.
             *
             * @return {Hasher} This hasher.
             *
             * @example
             *
             *     hasher.update('message');
             *     hasher.update(wordArray);
             */
            update: function(messageUpdate) {
              this._append(messageUpdate);
              this._process();
              return this;
            },
            /**
             * Finalizes the hash computation.
             * Note that the finalize operation is effectively a destructive, read-once operation.
             *
             * @param {WordArray|string} messageUpdate (Optional) A final message update.
             *
             * @return {WordArray} The hash.
             *
             * @example
             *
             *     var hash = hasher.finalize();
             *     var hash = hasher.finalize('message');
             *     var hash = hasher.finalize(wordArray);
             */
            finalize: function(messageUpdate) {
              if (messageUpdate) {
                this._append(messageUpdate);
              }
              var hash2 = this._doFinalize();
              return hash2;
            },
            blockSize: 512 / 32,
            /**
             * Creates a shortcut function to a hasher's object interface.
             *
             * @param {Hasher} hasher The hasher to create a helper for.
             *
             * @return {Function} The shortcut function.
             *
             * @static
             *
             * @example
             *
             *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
             */
            _createHelper: function(hasher) {
              return function(message, cfg) {
                return new hasher.init(cfg).finalize(message);
              };
            },
            /**
             * Creates a shortcut function to the HMAC's object interface.
             *
             * @param {Hasher} hasher The hasher to use in this HMAC helper.
             *
             * @return {Function} The shortcut function.
             *
             * @static
             *
             * @example
             *
             *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
             */
            _createHmacHelper: function(hasher) {
              return function(message, key) {
                return new C_algo.HMAC.init(hasher, key).finalize(message);
              };
            }
          });
          var C_algo = C.algo = {};
          return C;
        }(Math);
        return CryptoJS;
      });
    })(core);
    return core.exports;
  }
  (function(module2, exports2) {
    (function(root2, factory) {
      {
        module2.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var T = [];
        (function() {
          for (var i = 0; i < 64; i++) {
            T[i] = Math2.abs(Math2.sin(i + 1)) * 4294967296 | 0;
          }
        })();
        var MD52 = C_algo.MD5 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(M, offset2) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset2 + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
            }
            var H = this._hash.words;
            var M_offset_0 = M[offset2 + 0];
            var M_offset_1 = M[offset2 + 1];
            var M_offset_2 = M[offset2 + 2];
            var M_offset_3 = M[offset2 + 3];
            var M_offset_4 = M[offset2 + 4];
            var M_offset_5 = M[offset2 + 5];
            var M_offset_6 = M[offset2 + 6];
            var M_offset_7 = M[offset2 + 7];
            var M_offset_8 = M[offset2 + 8];
            var M_offset_9 = M[offset2 + 9];
            var M_offset_10 = M[offset2 + 10];
            var M_offset_11 = M[offset2 + 11];
            var M_offset_12 = M[offset2 + 12];
            var M_offset_13 = M[offset2 + 13];
            var M_offset_14 = M[offset2 + 14];
            var M_offset_15 = M[offset2 + 15];
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            a = FF(a, b, c, d, M_offset_0, 7, T[0]);
            d = FF(d, a, b, c, M_offset_1, 12, T[1]);
            c = FF(c, d, a, b, M_offset_2, 17, T[2]);
            b = FF(b, c, d, a, M_offset_3, 22, T[3]);
            a = FF(a, b, c, d, M_offset_4, 7, T[4]);
            d = FF(d, a, b, c, M_offset_5, 12, T[5]);
            c = FF(c, d, a, b, M_offset_6, 17, T[6]);
            b = FF(b, c, d, a, M_offset_7, 22, T[7]);
            a = FF(a, b, c, d, M_offset_8, 7, T[8]);
            d = FF(d, a, b, c, M_offset_9, 12, T[9]);
            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = FF(a, b, c, d, M_offset_12, 7, T[12]);
            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = FF(b, c, d, a, M_offset_15, 22, T[15]);
            a = GG(a, b, c, d, M_offset_1, 5, T[16]);
            d = GG(d, a, b, c, M_offset_6, 9, T[17]);
            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = GG(b, c, d, a, M_offset_0, 20, T[19]);
            a = GG(a, b, c, d, M_offset_5, 5, T[20]);
            d = GG(d, a, b, c, M_offset_10, 9, T[21]);
            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = GG(b, c, d, a, M_offset_4, 20, T[23]);
            a = GG(a, b, c, d, M_offset_9, 5, T[24]);
            d = GG(d, a, b, c, M_offset_14, 9, T[25]);
            c = GG(c, d, a, b, M_offset_3, 14, T[26]);
            b = GG(b, c, d, a, M_offset_8, 20, T[27]);
            a = GG(a, b, c, d, M_offset_13, 5, T[28]);
            d = GG(d, a, b, c, M_offset_2, 9, T[29]);
            c = GG(c, d, a, b, M_offset_7, 14, T[30]);
            b = GG(b, c, d, a, M_offset_12, 20, T[31]);
            a = HH(a, b, c, d, M_offset_5, 4, T[32]);
            d = HH(d, a, b, c, M_offset_8, 11, T[33]);
            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = HH(a, b, c, d, M_offset_1, 4, T[36]);
            d = HH(d, a, b, c, M_offset_4, 11, T[37]);
            c = HH(c, d, a, b, M_offset_7, 16, T[38]);
            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = HH(a, b, c, d, M_offset_13, 4, T[40]);
            d = HH(d, a, b, c, M_offset_0, 11, T[41]);
            c = HH(c, d, a, b, M_offset_3, 16, T[42]);
            b = HH(b, c, d, a, M_offset_6, 23, T[43]);
            a = HH(a, b, c, d, M_offset_9, 4, T[44]);
            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = HH(b, c, d, a, M_offset_2, 23, T[47]);
            a = II(a, b, c, d, M_offset_0, 6, T[48]);
            d = II(d, a, b, c, M_offset_7, 10, T[49]);
            c = II(c, d, a, b, M_offset_14, 15, T[50]);
            b = II(b, c, d, a, M_offset_5, 21, T[51]);
            a = II(a, b, c, d, M_offset_12, 6, T[52]);
            d = II(d, a, b, c, M_offset_3, 10, T[53]);
            c = II(c, d, a, b, M_offset_10, 15, T[54]);
            b = II(b, c, d, a, M_offset_1, 21, T[55]);
            a = II(a, b, c, d, M_offset_8, 6, T[56]);
            d = II(d, a, b, c, M_offset_15, 10, T[57]);
            c = II(c, d, a, b, M_offset_6, 15, T[58]);
            b = II(b, c, d, a, M_offset_13, 21, T[59]);
            a = II(a, b, c, d, M_offset_4, 6, T[60]);
            d = II(d, a, b, c, M_offset_11, 10, T[61]);
            c = II(c, d, a, b, M_offset_2, 15, T[62]);
            b = II(b, c, d, a, M_offset_9, 21, T[63]);
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            var nBitsTotalH = Math2.floor(nBitsTotal / 4294967296);
            var nBitsTotalL = nBitsTotal;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
            data.sigBytes = (dataWords.length + 1) * 4;
            this._process();
            var hash2 = this._hash;
            var H = hash2.words;
            for (var i = 0; i < 4; i++) {
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
            }
            return hash2;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function FF(a, b, c, d, x, s, t) {
          var n = a + (b & c | ~b & d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function GG(a, b, c, d, x, s, t) {
          var n = a + (b & d | c & ~d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function HH(a, b, c, d, x, s, t) {
          var n = a + (b ^ c ^ d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function II(a, b, c, d, x, s, t) {
          var n = a + (c ^ (b | ~d)) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        C.MD5 = Hasher._createHelper(MD52);
        C.HmacMD5 = Hasher._createHmacHelper(MD52);
      })(Math);
      return CryptoJS.MD5;
    });
  })(md5);
  var md5Exports = md5.exports;
  const MD5 = /* @__PURE__ */ getDefaultExportFromCjs(md5Exports);
  function hash$2(object) {
    return MD5(JSON.stringify(object));
  }
  class ServerRequest {
    constructor() {
      this.queue = [];
      this.requestTimeout = 200;
      this.cache = {};
    }
    addToCache(id, result) {
      this.cache[id] = result;
    }
    getFromCache(cacheKey) {
      return this.cache[cacheKey];
    }
    isCached(cacheKey) {
      return typeof this.cache[cacheKey] !== "undefined";
    }
    request(data, successCallback, failCallback) {
      const { applyFilters: applyFilters2 } = window.zb.hooks;
      const parsedData = applyFilters2("zionbuilder/server_request/data", data);
      const rawData = JSON.parse(JSON.stringify(parsedData));
      const cacheKey = this.createCacheKey(rawData);
      if (data.useCache && this.isCached(cacheKey)) {
        successCallback(this.getFromCache(cacheKey));
      } else {
        this.addToQueue(rawData, successCallback, failCallback);
        this.doQueue();
      }
    }
    createCacheKey(object) {
      return hash$2(object);
    }
    doQueue() {
      setTimeout(() => {
        const queueItems = {};
        const inProgress = [];
        if (this.queue.length === 0) {
          return;
        }
        this.queue.forEach((queueItem) => {
          queueItems[queueItem.key] = queueItem.data;
          inProgress.push(queueItem);
        });
        this.queue = [];
        bulkActions(queueItems).then(({ data }) => {
          inProgress.forEach((queueItem) => {
            if (typeof queueItem["successCallback"] === "function") {
              const { useCache } = queueItem.data;
              if (useCache) {
                this.addToCache(queueItem.key, data[queueItem.key]);
              }
              queueItem["successCallback"](data[queueItem.key]);
            }
          });
        }).catch(() => {
          inProgress.forEach((queueItem) => {
            if (typeof queueItem["failCallback"] === "function") {
              queueItem["failCallback"]();
            }
          });
        });
      }, this.requestTimeout);
    }
    addToQueue(data, successCallback, failCallback) {
      const queueKey = this.createCacheKey(data);
      this.queue.push({
        key: queueKey,
        data,
        successCallback,
        failCallback
      });
    }
  }
  function getImage(imageConfig, serverRequester = new ServerRequest()) {
    return new Promise((resolve, reject) => {
      if (imageConfig && imageConfig.image && imageConfig.image_size && imageConfig.image_size !== "full") {
        let size = imageConfig.image_size;
        if (size === "custom") {
          const customSize = imageConfig.custom_size || {};
          let { width = 0, height = 0 } = customSize;
          width = width || 0;
          height = height || 0;
          size = `zion_custom_${width}x${height}`;
        }
        serverRequester.request(
          {
            type: "get_image",
            config: imageConfig,
            useCache: true
          },
          (response) => {
            resolve(response[size]);
          },
          function(message) {
            console.log("server Request fail", message);
            reject(new Error("image could not be retrieved"));
          }
        );
      } else if (imageConfig.image) {
        resolve(imageConfig.image);
      } else {
        reject(new Error("bad config for image", imageConfig));
      }
    });
  }
  function updateOptionValue(options2, path, newValue) {
    const newOptions = __spreadValues({}, options2);
    const pathArray = path.split(".");
    const pathLength = pathArray.length;
    let activeValue = newOptions;
    pathArray.forEach((pathItem, index2) => {
      if (index2 === pathLength - 1) {
        activeValue[pathItem] = newValue;
      } else {
        activeValue[pathItem] = __spreadValues({}, activeValue[pathItem]) || {};
      }
      activeValue = activeValue[pathItem];
    });
    return newOptions;
  }
  const generateUID = function(index2, lastDateInSeconds) {
    const startDate = /* @__PURE__ */ new Date("2019");
    return function() {
      const d = /* @__PURE__ */ new Date();
      const n = d - startDate;
      if (lastDateInSeconds === false) {
        lastDateInSeconds = n;
      }
      if (lastDateInSeconds !== n) {
        index2 = 0;
      }
      lastDateInSeconds = n;
      index2 += 1;
      return "uid" + n + index2;
    };
  }(0, false);
  function getCssFromSelector(selectors, styleConfig, args = {}) {
    console.warn("This was deprecated in favor of zb.editor.utill.getCssFromSelector");
    return window.zb.editor.utill.getCssFromSelector(selectors, styleConfig, args);
  }
  function getStyles(cssSelector, styleValues = {}, args) {
    console.warn("This was deprecated in favor of zb.editor.utill.getStyles");
    return window.zb.editor.utill.getStyles(cssSelector, styleValues, args);
  }
  function getPseudoStyles(cssSelector, pseudoSelectors2 = {}, args) {
    console.warn("This was deprecated in favor of zb.editor.utill.getPseudoStyles");
    return window.zb.editor.utill.getPseudoStyles(cssSelector, pseudoSelectors2, args);
  }
  function getResponsiveDeviceStyles(deviceId, styles) {
    console.warn("This was deprecated in favor of zb.editor.utill.getResponsiveDeviceStyles");
    return window.zb.editor.utill.getResponsiveDeviceStyles(deviceId, styles);
  }
  function compileStyleTabs(styleValues) {
    console.warn("This was deprecated in favor of zb.editor.utill.compileStyleTabs");
    return window.zb.editor.utill.compileStyleTabs(styleValues);
  }
  function getGradientCss(config) {
    console.warn("This was deprecated in favor of zb.editor.utill.getGradientCss");
    return window.zb.editor.utill.getGradientCss(config);
  }
  function compileFontTab(styleValues) {
    console.warn("This was deprecated in favor of zb.editor.utill.compileFontTab");
    return window.zb.editor.utill.compileFontTab(styleValues);
  }
  function isEditable(el = document.activeElement) {
    if (el && ~["input", "textarea"].indexOf(el.tagName.toLowerCase())) {
      return !el.readOnly && !el.disabled;
    }
    if (el && el.contentDocument) {
      return isEditable(el.contentDocument.activeElement);
    }
    return el.isContentEditable;
  }
  const Environment = {
    isMac: window.navigator.userAgent.indexOf("Macintosh") >= 0
  };
  const getDefaultGradient = () => {
    return [
      {
        type: "linear",
        angle: 114,
        colors: [
          {
            color: "#18208d",
            position: 0
          },
          {
            color: "#06bee1",
            position: 100
          }
        ],
        position: {
          x: 75,
          y: 48
        }
      }
    ];
  };
  const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    Environment,
    ServerRequest,
    compileFontTab,
    compileStyleTabs,
    generateUID,
    getCssFromSelector,
    getDefaultGradient,
    getGradientCss,
    getIconAttributes,
    getIconUnicode,
    getImage,
    getLinkAttributes,
    getPseudoStyles,
    getResponsiveDeviceStyles,
    getStyles,
    hash: hash$2,
    isEditable,
    updateOptionValue
  }, Symbol.toStringTag, { value: "Module" }));
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
  var INFINITY$2 = 1 / 0;
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
    return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
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
  var nativeMax$1 = Math.max;
  function overRest(func, start2, transform) {
    start2 = nativeMax$1(start2 === void 0 ? func.length - 1 : start2, 0);
    return function() {
      var args = arguments, index2 = -1, length = nativeMax$1(args.length - start2, 0), array = Array(length);
      while (++index2 < length) {
        array[index2] = args[start2 + index2];
      }
      index2 = -1;
      var otherArgs = Array(start2 + 1);
      while (++index2 < start2) {
        otherArgs[index2] = args[index2];
      }
      otherArgs[start2] = transform(array);
      return apply(func, this, otherArgs);
    };
  }
  function baseRest(func, start2) {
    return setToString$1(overRest(func, start2, identity), func + "");
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
  var Buffer$2 = moduleExports$2 ? root$1.Buffer : void 0;
  var nativeIsBuffer = Buffer$2 ? Buffer$2.isBuffer : void 0;
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
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    if (index2 < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index2 == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index2, 1);
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
  var Map$1 = getNative(root$1, "Map");
  const Map$2 = Map$1;
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map$2 || ListCache)(),
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
    var index2 = -1, length = values.length, offset2 = array.length;
    while (++index2 < length) {
      array[offset2 + index2] = values[index2];
    }
    return array;
  }
  var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : void 0;
  function isFlattenable(value) {
    return isArray$1(value) || isArguments$1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index2 = -1, length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while (++index2 < length) {
      var value = array[index2];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
  }
  function flatRest(func) {
    return setToString$1(overRest(func, void 0, flatten), func + "");
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
  function baseSlice(array, start2, end2) {
    var index2 = -1, length = array.length;
    if (start2 < 0) {
      start2 = -start2 > length ? 0 : length + start2;
    }
    end2 = end2 > length ? length : end2;
    if (end2 < 0) {
      end2 += length;
    }
    length = start2 > end2 ? 0 : end2 - start2 >>> 0;
    start2 >>>= 0;
    var result = Array(length);
    while (++index2 < length) {
      result[index2] = array[index2 + start2];
    }
    return result;
  }
  function castSlice(array, start2, end2) {
    var length = array.length;
    end2 = end2 === void 0 ? length : end2;
    return !start2 && end2 >= length ? array : baseSlice(array, start2, end2);
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
  function baseClamp(number, lower, upper) {
    if (number === number) {
      if (upper !== void 0) {
        number = number <= upper ? number : upper;
      }
      if (lower !== void 0) {
        number = number >= lower ? number : lower;
      }
    }
    return number;
  }
  function clamp(number, lower, upper) {
    if (upper === void 0) {
      upper = lower;
      lower = void 0;
    }
    if (upper !== void 0) {
      upper = toNumber(upper);
      upper = upper === upper ? upper : 0;
    }
    if (lower !== void 0) {
      lower = toNumber(lower);
      lower = lower === lower ? lower : 0;
    }
    return baseClamp(toNumber(number), lower, upper);
  }
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
      if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
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
  var Buffer$1 = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
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
  var Set$1 = getNative(root$1, "Set");
  const Set$2 = Set$1;
  var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
  var dataViewTag$3 = "[object DataView]";
  var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$1);
  var getTag = baseGetTag;
  if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3 || Map$2 && getTag(new Map$2()) != mapTag$4 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
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
  var CLONE_DEEP_FLAG$2 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$2 = 4;
  var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var cloneableTags = {};
  cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG$2, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$2;
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
  var CLONE_DEEP_FLAG$1 = 1, CLONE_SYMBOLS_FLAG$1 = 4;
  function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
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
    var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
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
      if (seen) {
        if (!arraySome(other, function(othValue2, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
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
  var nativeMax = Math.max, nativeMin = Math.min;
  function debounce$1(func, wait, options2) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options2)) {
      leading = !!options2.leading;
      maxing = "maxWait" in options2;
      maxWait = maxing ? nativeMax(toNumber(options2.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options2 ? !!options2.trailing : trailing;
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
  function baseMap(collection, iteratee) {
    var index2 = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach$1(collection, function(value, key, collection2) {
      result[++index2] = iteratee(value, key, collection2);
    });
    return result;
  }
  function parent(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
  }
  var kebabCase = createCompounder(function(result, word, index2) {
    return result + (index2 ? "-" : "") + word.toLowerCase();
  });
  const kebabCase$1 = kebabCase;
  var merge = createAssigner(function(object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });
  const merge$1 = merge;
  function baseUnset(object, path) {
    path = castPath(path, object);
    object = parent(object, path);
    return object == null || delete object[toKey(last(path))];
  }
  function customOmitClone(value) {
    return isPlainObject(value) ? void 0 : value;
  }
  var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
  var omit = flatRest(function(object, paths) {
    var result = {};
    if (object == null) {
      return result;
    }
    var isDeep = false;
    paths = arrayMap(paths, function(path) {
      path = castPath(path, object);
      isDeep || (isDeep = path.length > 1);
      return path;
    });
    copyObject(object, getAllKeysIn(object), result);
    if (isDeep) {
      result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
    }
    var length = paths.length;
    while (length--) {
      baseUnset(result, paths[length]);
    }
    return result;
  });
  const omit$1 = omit;
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
  function baseSortBy(array, comparer) {
    var length = array.length;
    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }
  function compareAscending(value, other) {
    if (value !== other) {
      var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
      var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
      if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
        return 1;
      }
      if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
        return -1;
      }
    }
    return 0;
  }
  function compareMultiple(object, other, orders) {
    var index2 = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
    while (++index2 < length) {
      var result = compareAscending(objCriteria[index2], othCriteria[index2]);
      if (result) {
        if (index2 >= ordersLength) {
          return result;
        }
        var order2 = orders[index2];
        return result * (order2 == "desc" ? -1 : 1);
      }
    }
    return object.index - other.index;
  }
  function baseOrderBy(collection, iteratees, orders) {
    if (iteratees.length) {
      iteratees = arrayMap(iteratees, function(iteratee) {
        if (isArray$1(iteratee)) {
          return function(value) {
            return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
          };
        }
        return iteratee;
      });
    } else {
      iteratees = [identity];
    }
    var index2 = -1;
    iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
    var result = baseMap(collection, function(value, key, collection2) {
      var criteria = arrayMap(iteratees, function(iteratee) {
        return iteratee(value);
      });
      return { "criteria": criteria, "index": ++index2, "value": value };
    });
    return baseSortBy(result, function(object, other) {
      return compareMultiple(object, other, orders);
    });
  }
  function orderBy(collection, iteratees, orders, guard) {
    if (collection == null) {
      return [];
    }
    if (!isArray$1(iteratees)) {
      iteratees = iteratees == null ? [] : [iteratees];
    }
    orders = guard ? void 0 : orders;
    if (!isArray$1(orders)) {
      orders = orders == null ? [] : [orders];
    }
    return baseOrderBy(collection, iteratees, orders);
  }
  function set(object, path, value) {
    return object == null ? object : baseSet(object, path, value);
  }
  var startCase = createCompounder(function(result, word, index2) {
    return result + (index2 ? " " : "") + upperFirst$1(word);
  });
  const startCase$1 = startCase;
  var INFINITY = 1 / 0;
  var createSet = !(Set$2 && 1 / setToArray(new Set$2([, -0]))[1] == INFINITY) ? noop : function(values) {
    return new Set$2(values);
  };
  const createSet$1 = createSet;
  var LARGE_ARRAY_SIZE = 200;
  function baseUniq(array, iteratee, comparator) {
    var index2 = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
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
      seen = new SetCache();
    } else {
      seen = iteratee ? [] : result;
    }
    outer:
      while (++index2 < length) {
        var value = array[index2], computed = iteratee ? iteratee(value) : value;
        value = comparator || value !== 0 ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        } else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
    return result;
  }
  var unionBy = baseRest(function(arrays) {
    var iteratee = last(arrays);
    if (isArrayLikeObject(iteratee)) {
      iteratee = void 0;
    }
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), baseIteratee(iteratee));
  });
  const unionBy$1 = unionBy;
  function unset(object, path) {
    return object == null ? true : baseUnset(object, path);
  }
  function baseUpdate(object, path, updater, customizer) {
    return baseSet(object, path, updater(baseGet(object, path)), customizer);
  }
  function update(object, path, updater) {
    return object == null ? object : baseUpdate(object, path, castFunction(updater));
  }
  const useBuilderOptionsStore = pinia.defineStore("builderOptions", () => {
    const isLoading = vue.ref(false);
    let fetched = false;
    const options2 = vue.ref({
      allowed_post_types: ["post", "page"],
      google_fonts: [],
      custom_fonts: [],
      typekit_token: "",
      typekit_fonts: [],
      local_colors: [],
      global_colors: [],
      local_gradients: [],
      global_gradients: [],
      user_roles_permissions: {},
      users_permissions: {},
      custom_code: ""
    });
    if (!fetched) {
      fetchOptions();
    }
    function fetchOptions(force = false) {
      if (fetched && !force) {
        return Promise.resolve(options2.value);
      }
      return getSavedOptions().then((response) => {
        const data = response.data;
        if (Array.isArray(data.user_roles_permissions)) {
          data.user_roles_permissions = {};
        }
        if (Array.isArray(data.users_permissions)) {
          data.users_permissions = {};
        }
        options2.value = __spreadValues(__spreadValues({}, options2.value), data);
      }).finally(() => {
        fetched = true;
      });
    }
    function getOptionValue(optionId, defaultValue = null) {
      return get(options2.value, optionId, defaultValue);
    }
    function updateOptionValue2(path, newValue, saveOptions2 = true) {
      update(options2.value, path, () => newValue);
      if (saveOptions2) {
        saveOptionsToDB();
      }
    }
    function deleteOptionValue(path, saveOptions2 = true) {
      const clonedValues = cloneDeep(options2.value);
      unset(clonedValues, path);
      options2.value = clonedValues;
      if (saveOptions2) {
        saveOptionsToDB();
      }
    }
    function saveOptionsToDB() {
      return __async(this, null, function* () {
        isLoading.value = true;
        try {
          return yield saveOptions(options2.value);
        } finally {
          isLoading.value = false;
        }
      });
    }
    const debouncedSaveOptions = debounce$1(saveOptionsToDB, 700);
    function updateGoogleFont(fontFamily, newValue) {
      const savedFont = options2.value.google_fonts.find((fontItem) => fontItem.font_family === fontFamily);
      if (savedFont) {
        const fontIndex = options2.value.google_fonts.indexOf(savedFont);
        options2.value.google_fonts.splice(fontIndex, 1, newValue);
      }
      saveOptionsToDB();
    }
    function removeGoogleFont(fontFamily) {
      const savedFont = options2.value.google_fonts.find((fontItem) => fontItem.font_family === fontFamily);
      if (savedFont) {
        const fontIndex = options2.value.google_fonts.indexOf(savedFont);
        options2.value.google_fonts.splice(fontIndex, 1);
      } else {
        console.warn("Font for deletion was not found");
      }
      saveOptionsToDB();
    }
    function addGoogleFont(fontFamily) {
      options2.value.google_fonts.push({
        font_family: fontFamily,
        font_variants: ["regular"],
        font_subset: ["latin"]
      });
      saveOptionsToDB();
    }
    function addLocalColor(color) {
      options2.value.local_colors.push(color);
      saveOptionsToDB();
    }
    function deleteLocalColor(color) {
      const colorIndex = options2.value.local_colors.indexOf(color);
      if (colorIndex !== -1) {
        options2.value.local_colors.splice(colorIndex, 1);
      }
      saveOptionsToDB();
    }
    function editLocalColor(color, newColor, saveToDB = true) {
      const colorIndex = options2.value.local_colors.indexOf(color);
      if (colorIndex !== -1) {
        options2.value.local_colors.splice(colorIndex, 1, newColor);
      }
      if (saveToDB) {
        saveOptionsToDB();
      }
    }
    function addGlobalColor(color) {
      options2.value.global_colors.push(color);
      saveOptionsToDB();
    }
    function deleteGlobalColor(color) {
      const colorIndex = options2.value.global_colors.indexOf(color);
      if (colorIndex !== -1) {
        options2.value.global_colors.splice(colorIndex, 1);
      }
      saveOptionsToDB();
    }
    function editGlobalColor(index2, newColor, saveToDB = true) {
      const colorToChange = __spreadValues({}, options2.value.global_colors[index2]);
      colorToChange["color"] = newColor;
      options2.value.global_colors.splice(index2, 1, colorToChange);
      if (saveToDB) {
        saveOptionsToDB();
      }
    }
    function addCustomFont(font) {
      options2.value.custom_fonts.push(font);
      saveOptionsToDB();
    }
    function updateCustomFont(fontFamily, newValue) {
      const savedFont = options2.value.custom_fonts.find((fontItem) => fontItem.font_family === fontFamily);
      if (savedFont) {
        const fontIndex = options2.value.custom_fonts.indexOf(savedFont);
        options2.value.custom_fonts.splice(fontIndex, 1, newValue);
      }
      saveOptionsToDB();
    }
    function deleteCustomFont(fontFamily) {
      const savedFont = options2.value.custom_fonts.find((fontItem) => fontItem.font_family === fontFamily);
      if (savedFont) {
        const fontIndex = options2.value.custom_fonts.indexOf(savedFont);
        options2.value.custom_fonts.splice(fontIndex, 1);
      } else {
        console.warn("Font for deletion was not found");
      }
      saveOptionsToDB();
    }
    function addLocalGradient(gradient) {
      options2.value.local_gradients.push(gradient);
      saveOptionsToDB();
    }
    function deleteLocalGradient(gradient) {
      const gradientIndex = options2.value.local_gradients.indexOf(gradient);
      if (gradientIndex !== -1) {
        options2.value.local_gradients.splice(gradientIndex, 1);
      }
      saveOptionsToDB();
    }
    function editLocalGradient(gradientId, newgradient) {
      const editedGradient = options2.value.local_gradients.find((gradient) => gradient.id === gradientId);
      if (editedGradient) {
        editedGradient.config = newgradient;
      }
    }
    function addGlobalGradient(gradient) {
      options2.value.global_gradients.push(gradient);
      saveOptionsToDB();
    }
    function deleteGlobalGradient(gradient) {
      const gradientIndex = options2.value.global_gradients.indexOf(gradient);
      if (gradientIndex !== -1) {
        options2.value.global_gradients.splice(gradientIndex, 1);
      }
      saveOptionsToDB();
    }
    function editGlobalGradient(gradientId, newgradient) {
      const editedGradient = options2.value.global_gradients.find((gradient) => gradient.id === gradientId);
      if (editedGradient) {
        editedGradient.config = newgradient;
      }
    }
    function addTypeKitToken(token) {
      options2.value.typekit_token = token;
    }
    function addFontProject(fontId) {
      const fontIndex = options2.value.typekit_fonts.indexOf(fontId);
      if (fontIndex === -1) {
        options2.value.typekit_fonts.push(fontId);
      }
      saveOptionsToDB();
    }
    function removeFontProject(fontId) {
      const fontIndex = options2.value.typekit_fonts.indexOf(fontId);
      if (fontIndex !== -1) {
        options2.value.typekit_fonts.splice(fontIndex, 1);
      }
      saveOptionsToDB();
    }
    function addUserPermissions(user) {
      options2.value.users_permissions[user.id] = {};
      saveOptionsToDB();
    }
    function editUserPermission(userID, newValues) {
      options2.value.users_permissions[userID] = newValues;
      saveOptionsToDB();
    }
    function deleteUserPermission(userID) {
      delete options2.value.users_permissions[userID];
      saveOptionsToDB();
    }
    function getUserPermissions(userID) {
      return options2.value.users_permissions[userID];
    }
    function getRolePermissions(roleID) {
      return options2.value.user_roles_permissions[roleID] || {
        allowed_access: false,
        permissions: {
          only_content: false,
          features: [],
          post_types: []
        }
      };
    }
    function editRolePermission(roleID, newValues) {
      options2.value.user_roles_permissions[roleID] = newValues;
      saveOptionsToDB();
    }
    return {
      // refs
      isLoading,
      fetched,
      options: options2,
      // Actions
      fetchOptions,
      getOptionValue,
      updateOptionValue: updateOptionValue2,
      deleteOptionValue,
      saveOptionsToDB,
      editRolePermission,
      getRolePermissions,
      getUserPermissions,
      editUserPermission,
      deleteUserPermission,
      addUserPermissions,
      removeFontProject,
      addFontProject,
      addTypeKitToken,
      editGlobalGradient,
      deleteGlobalGradient,
      addGlobalGradient,
      editLocalGradient,
      deleteLocalGradient,
      addLocalGradient,
      deleteCustomFont,
      updateCustomFont,
      addCustomFont,
      editGlobalColor,
      removeGoogleFont,
      updateGoogleFont,
      addGoogleFont,
      addLocalColor,
      deleteLocalColor,
      editLocalColor,
      addGlobalColor,
      deleteGlobalColor,
      debouncedSaveOptions
    };
  });
  const useGoogleFontsStore = pinia.defineStore("googleFonts", {
    state: () => {
      return {
        // all these properties will have their type inferred automatically
        isLoading: false,
        fetched: false,
        fonts: []
      };
    },
    getters: {
      getFontData: (state) => {
        return (family) => state.fonts.find((font) => font["family"] == family);
      }
    },
    actions: {
      fetchGoogleFonts(force = false) {
        if (this.fetched && !force) {
          return Promise.resolve(this.fonts);
        }
        return getGoogleFonts().then((response) => {
          this.fonts = response.data;
        });
      }
    }
  });
  class Notification {
    constructor(data) {
      __publicField(this, "title", "");
      __publicField(this, "message", "");
      __publicField(this, "type", "info");
      __publicField(this, "delayClose", 5e3);
      Object.assign(this, data);
    }
    remove() {
      const notificationsStore = useNotificationsStore();
      notificationsStore.remove(this);
    }
  }
  const useNotificationsStore = pinia.defineStore("notifications", {
    state: () => {
      return {
        notifications: []
      };
    },
    actions: {
      add(data) {
        this.notifications.push(new Notification(data));
      },
      remove(notification) {
        const index2 = this.notifications.indexOf(notification);
        this.notifications.splice(index2, 1);
      }
    }
  });
  const useUsersStore = pinia.defineStore("usersStore", () => {
    const loadedUsers = vue.ref([]);
    function fetchUsersData(userIDs) {
      return getUsersById(userIDs).then((response) => {
        if (Array.isArray(response.data)) {
          response.data.forEach((user) => loadedUsers.value.push(user));
        }
      });
    }
    function getUserInfo(userID) {
      return loadedUsers.value.find((user) => user.id === userID);
    }
    function addUser(user) {
      loadedUsers.value.push(user);
    }
    return {
      loadedUsers,
      fetchUsersData,
      addUser,
      getUserInfo
    };
  });
  const useDataSetsStore = pinia.defineStore("dataSets", () => {
    let loaded = false;
    const dataSets = vue.ref({
      fonts_list: {
        google_fonts: [],
        custom_fonts: [],
        typekit_fonts: []
      },
      user_roles: [],
      post_types: [],
      taxonomies: [],
      icons: [],
      image_sizes: []
    });
    if (!loaded) {
      getFontsDataSet().then((response) => {
        dataSets.value = response.data;
        loaded = true;
      });
    }
    const fontsListForOption = vue.computed(() => {
      let option = [
        {
          id: "Arial",
          name: "Arial"
        },
        {
          id: "Times New Roman",
          name: "Times New Roman"
        },
        {
          id: "Verdana",
          name: "Verdana"
        },
        {
          id: "Trebuchet",
          name: "Trebuchet"
        },
        {
          id: "Georgia",
          name: "Georgia"
        },
        {
          id: "Segoe UI",
          name: "Segoe UI"
        }
      ];
      const fontsProviders = dataSets.value.fonts_list;
      Object.keys(fontsProviders).forEach((fontProviderId) => {
        const fontsList = fontsProviders[fontProviderId];
        option = [...fontsList, ...option];
      });
      return option;
    });
    const addIconsSet = (iconSet) => {
      dataSets.value.icons.push(iconSet);
    };
    const deleteIconSet = (icons) => {
      const iconsPackage = dataSets.value.icons.find((iconSet) => {
        return iconSet.id === icons;
      });
      if (iconsPackage !== void 0) {
        const iconsPackageIndex = dataSets.value.icons.indexOf(iconsPackage);
        dataSets.value.icons.splice(iconsPackageIndex, 1);
      }
    };
    return {
      dataSets,
      fontsListForOption,
      addIconsSet,
      deleteIconSet
    };
  });
  const useAssetsStore = pinia.defineStore("assets", {
    state: () => {
      return {
        isLoading: false,
        currentIndex: 0,
        filesCount: 0
      };
    },
    actions: {
      regenerateCache() {
        return __async(this, null, function* () {
          this.isLoading = true;
          try {
            const { data: cacheFiles } = yield getCacheList();
            this.filesCount = cacheFiles.length;
            if (this.filesCount > 0) {
              for (const fileData of cacheFiles) {
                try {
                  this.currentIndex++;
                  yield regenerateCache(fileData);
                } catch (error) {
                  console.error(error);
                }
              }
            }
          } catch (error) {
            console.error(error);
          }
          this.isLoading = false;
          this.filesCount = 0;
          this.currentIndex = 0;
        });
      },
      finish() {
        return finishRegeneration();
      }
    }
  });
  const useEnvironmentStore = pinia.defineStore("environment", {
    state: () => {
      return window.ZBCommonData.environment;
    },
    getters: {
      isProActive(state) {
        return state.plugin_pro.is_active;
      }
    },
    actions: {}
  });
  const store = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    useAssetsStore,
    useBuilderOptionsStore,
    useDataSetsStore,
    useEnvironmentStore,
    useGoogleFontsStore,
    useNotificationsStore,
    useUsersStore
  }, Symbol.toStringTag, { value: "Module" }));
  const __default__$19 = {
    name: "ListScroll"
  };
  const _sfc_main$1A = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$19), {
    props: {
      loading: { type: Boolean, default: true }
    },
    emits: ["scroll-end"],
    setup(__props, { emit }) {
      const listScrollRef = vue.ref(null);
      function onScroll(event2) {
        if (listScrollRef.value.scrollHeight - Math.round(listScrollRef.value.scrollTop) === listScrollRef.value.clientHeight) {
          emit("scroll-end");
        }
      }
      return (_ctx, _cache) => {
        const _component_Loader = vue.resolveComponent("Loader");
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-scroll-list-wrapper", { "znpb-scroll-list-wrapper--loading": _ctx.loading }])
        }, [
          vue.createElementVNode("div", {
            ref_key: "listScrollRef",
            ref: listScrollRef,
            class: "znpb-fancy-scrollbar znpb-scroll-list-container",
            onWheelPassive: onScroll
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 544),
          vue.createVNode(vue.Transition, { name: "fadeFromBottom" }, {
            default: vue.withCtx(() => [
              _ctx.loading ? (vue.openBlock(), vue.createBlock(_component_Loader, { key: 0 })) : vue.createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 2);
      };
    }
  }));
  const ListScroll_vue_vue_type_style_index_0_lang = "";
  const SvgIcons = [
    {
      paths: [
        "M11 0C4.9 0 0 4.9 0 11s4.9 11 11 11c1 0 1.8-.9 1.8-1.8 0-.5-.1-.9-.5-1.2-.2-.4-.5-.7-.5-1.2 0-1 .9-1.8 1.8-1.8h2.2c3.4 0 6.1-2.7 6.1-6.1C22 4.4 17.1 0 11 0zM4.3 11c-1 0-1.8-.9-1.8-1.8s.9-1.8 1.8-1.8 1.8.9 1.8 1.8S5.3 11 4.3 11zm3.6-4.9c-1 0-1.8-.9-1.8-1.8S7 2.4 7.9 2.4s1.8.9 1.8 1.8-.8 1.9-1.8 1.9zm6.2 0c-1 0-1.8-.9-1.8-1.8s.9-1.8 1.8-1.8 1.8.9 1.8 1.8-.9 1.8-1.8 1.8zm3.6 4.9c-1 0-1.8-.9-1.8-1.8s.9-1.8 1.8-1.8 1.8.9 1.8 1.8-.8 1.8-1.8 1.8z"
      ],
      tags: ["background"],
      viewBox: ["0 0 22 22"]
    },
    {
      paths: [
        "M20 0h2v22h-2z",
        "M0 2v2h2V2h2V0H0zM0 12h2v4H0zM0 6h2v4H0zM6 20h4v2H6zM2 18H0v4h4v-2H2zM18 20h2v2h-2zM6 0h4v2H6zM18 0h2v2h-2zM12 20h4v2h-4zM12 0h4v2h-4z"
      ],
      tags: ["borders"],
      viewBox: ["0 0 22 22"]
    },
    {
      paths: ["M20 2v8H2V2h18m2-2H0v12h22V0zM8 16v4H2v-4h6m2-2H0v8h10v-8zM20 16v4h-6v-4h6m2-2H12v8h10v-8z"],
      tags: ["display"],
      viewBox: ["0 0 22 22"]
    },
    {
      paths: [
        "M0 0l7.5 13v9l2.9-2 2.1-1.5 2-1.4V13L22 0H0zm9.5 18.2v-5.7L8.1 10 3.5 2h15.1L14 10l-1.4 2.5v3.6l-3.1 2.1z"
      ],
      tags: ["filters"],
      viewBox: ["0 0 22 22"]
    },
    {
      paths: [
        "M20 2v18H2V2h18m2-2H0v22h22V0z",
        "M14 7l-1.4 1.3 1.8 1.8H7.7l1.8-1.8L8 7l-4 4 1.3 1.3L8 15l1.4-1.3L7.7 12h6.7l-1.8 1.8L14 15l2.7-2.7L18 11l-4-4z"
      ],
      tags: ["size-spacing"],
      viewBox: ["0 0 22 22"]
    },
    {
      paths: ["M0 0v14h14V0H0zm12 12H2V2h10v10z", "M16 4v2h4v14H6v-4H4v6h18V4z"],
      tags: ["transform"],
      viewBox: ["0 0 22 22"]
    },
    {
      paths: [],
      circle: ['cx="6" cy="16" r="6"', 'cx="11" cy="11" r="6"', 'cx="16" cy="6" r="6"'],
      tags: ["transitions"],
      viewBox: ["0 0 22 22"]
    },
    {
      paths: [
        "M18.3 7.6c-1.4 0-2.6.3-3.6.9v2c.9-.8 2-1.2 3.1-1.2 1.3 0 2 .7 2 2.1l-2.9.4c-2.2.3-3.2 1.4-3.2 3.3 0 .8.3 1.6.8 2.1s1.3.8 2.2.8c1.3 0 2.3-.6 3-1.8v1.5H22v-6.5c0-2.3-1.3-3.6-3.7-3.6zm.9 7.9c-.4.4-1 .7-1.7.7-.5 0-.9-.2-1.2-.4-.3-.3-.5-.6-.5-1 0-.6.2-.9.5-1.2.3-.3.8-.4 1.5-.5l2-.3v.8c0 .9-.2 1.4-.6 1.9zM5.1 4L0 17.7h2.5l1.2-3.5h5.4l1.3 3.5h2.5L7.7 4H5.1zm-.8 8.4l1.8-5.5c0-.2.2-.5.2-.8 0 .4.1.7.2.8l1.9 5.5H4.3z"
      ],
      tags: ["typography"],
      viewBox: ["0 0 22 22"]
    },
    {
      paths: [
        "M28 6H7.7l2.2-2.2L7.1 1 0 8.1l7.1 7 2.8-2.8L7.6 10H28zM0 18.1h20.3l-2.2-2.2 2.8-2.8 7.1 7-7.1 7.1-2.8-2.8 2.3-2.3H0z"
      ],
      tags: ["reverse"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M25 25l5.5-2.8 5.5-2.7L47 14 25 3 3 14l11 5.5L3 25l11 5.5L3 36l22 11v-5.5L13.9 36l5.5-2.8L25 36v-5.5L13.9 25l5.5-2.8L25 25zM13.9 14L25 8.5 36.1 14 25 19.5 13.9 14z",
        "M39.1 25h-5.3v6.2h-6.2v5.2h6.2v6.2h5.3v-6.2h6.1v-5.2h-6.1z"
      ],
      tags: ["dynamic"]
    },
    {
      paths: [
        "M38.8 30.9l-1.1-1.1c-.1-.1-.2-.3-.2-.5v-1.1c0-.2-.2-.4-.4-.4h-.5c-.2 0-.3.1-.3.3l-.4 1.3c0 .2-.2.3-.3.3h-.3c-.1 0-.3-.1-.3-.2l-.5-1.1c-.1-.3-.4-.4-.7-.4h-1.1c-.1 0-.3 0-.4.1l-2.1 1.5c-.2.1-.3.2-.5.3l-3.5 1.4c-.3.1-.4.4-.4.7v.9c0 .2.1.4.2.5l1.1 1.1c.3.3.6.4 1 .4h1.2l1.9-.5c.8-.2 1.7 0 2.3.6l1.2 1.2c.3.3.6.4 1 .4H37c.4 0 .7-.1 1-.4l.8-.8c.3-.3.4-.6.4-1v-2.2c0-.7-.2-1-.4-1.3zM25 3C12.9 3 3 12.8 3 25s9.9 22 22 22 22-9.8 22-22S37.1 3 25 3zm0 39.7c-8.8 0-16.1-6.5-17.5-14.9h5.6c.4 0 .7-.1 1-.4l1.7-1.7c.3-.3.9-.2 1.1.2l2 4c.2.5.7.8 1.3.8h.5c.8 0 1.4-.6 1.4-1.4v-.8c0-.4-.1-.7-.4-1l-.5-.5c-.3-.3-.3-.7 0-1l.5-.5c.3-.3.6-.4 1-.4.5 0 1-.3 1.2-.7l1.5-2.6c.2-.3.6-.3.7 0 .1.2.4.4.6.4h.3c.4 0 .7-.3.7-.7v-6.9c0-.5-.3-1-.8-1.3l-1-.5c-.5-.2-.5-.9-.1-1.2l4.4-3.4c7.1 2.3 12.3 9 12.3 16.9.2 9.7-7.7 17.6-17.5 17.6z"
      ],
      tags: ["globe"]
    },
    {
      paths: [
        "M3 2C1.3 2 0 3.3 0 5s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 18c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0-9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
      ],
      tags: ["ite-move"],
      viewBox: ["0 0 6 28"]
    },
    {
      paths: [
        "M9.1 2.2L.2 25.8h4.3l1.9-5.5h9.2l1.9 5.5h4.3l-9-23.7H9.1zM7.5 17L11 7.2l3.4 9.8H7.5zm29.8 4.4v-7.9c0-1.9-.7-3.3-1.9-4.4-1.2-1-2.9-1.6-4.9-1.6-1.4 0-2.6.2-3.7.7-1.1.5-2 1.1-2.6 2-.6.8-1 1.7-1 2.7h4c0-.7.3-1.3.9-1.7.6-.4 1.3-.7 2.2-.7 1 0 1.8.3 2.3.8.5.5.8 1.3.8 2.2v1.2H31c-2.6 0-4.6.5-6 1.5-1.4 1-2.1 2.4-2.1 4.3 0 1.5.6 2.7 1.7 3.7s2.6 1.5 4.3 1.5c1.8 0 3.4-.7 4.6-2 .1.8.3 1.3.5 1.6h4V25c-.4-.7-.7-2-.7-3.6zm-3.9-.8c-.3.6-.9 1.1-1.6 1.5s-1.4.6-2.2.6c-.8 0-1.5-.2-2-.7-.5-.4-.8-1.1-.8-1.8 0-.9.4-1.7 1.1-2.2.7-.5 1.8-.8 3.3-.8h2.1v3.4z"
      ],
      tags: ["ite-font"],
      viewBox: ["0 0 38 28"]
    },
    {
      paths: [
        "M1.1 26V2h8.4c2.9 0 5.1.6 6.6 1.7s2.3 2.8 2.3 4.9c0 1.2-.3 2.2-.9 3.1-.6.9-1.4 1.6-2.5 2 1.2.3 2.2.9 2.9 1.9.7.9 1.1 2.1 1.1 3.4 0 2.3-.7 4.1-2.2 5.2-1.5 1.2-3.6 1.8-6.3 1.8H1.1zM6 12.1h3.7c2.5 0 3.7-1 3.7-3 0-1.1-.3-1.9-.9-2.3s-1.6-.8-3-.8H6v6.1zm0 3.4V22h4.2c1.2 0 2.1-.3 2.7-.8.7-.6 1-1.3 1-2.3 0-2.2-1.1-3.3-3.4-3.3H6z"
      ],
      tags: ["ite-weight"],
      viewBox: ["0 0 20 28"]
    },
    {
      paths: ["M3.9 23.2L6.8 4.7 4 4l.3-1.9 9.3-.1-.3 2-3 .7-3 18.5 2.9.7-.4 2.1H.5l.3-2.1 3.1-.7z"],
      tags: ["ite-italic"],
      viewBox: ["0 0 14 28"]
    },
    {
      paths: [
        "M5.5 21.8c-1.6-1.4-2.4-3.5-2.4-6V0h4.1v15.8c0 1.6.4 2.8 1.2 3.6.8.8 2 1.3 3.5 1.3 3.2 0 4.7-1.7 4.7-5V0h4.1v15.8c0 2.5-.8 4.5-2.4 6-1.5 1.5-3.6 2.2-6.3 2.2-2.7 0-4.9-.7-6.5-2.2zM0 26v2h24v-2H0z"
      ],
      tags: ["ite-underline"],
      viewBox: ["0 0 24 28"]
    },
    {
      paths: [
        "M9.1 2.1v.1L.2 25.8h4.3l1.9-5.5h9.2l1.9 5.5h4.3l-9-23.7H9.1zM7.5 17L11 7.3l3.4 9.8H7.5zM35.8 2.1h-3.7v.1l-8.9 23.6h4.3l1.9-5.5h9.2l1.9 5.5h4.3l-9-23.7zM30.5 17L34 7.3l3.4 9.8h-6.9z"
      ],
      tags: ["ite-uppercase"],
      viewBox: ["0 0 45 28"]
    },
    {
      paths: [
        "M15 4c-1.7-1.4-3.6-2-5.6-2-2.9 0-5.8 1.3-7.5 3.8C-1.2 10-.4 15.9 3.8 19.2c1 .6 1.9 1.1 3 1.5-1.6 1.8-3.6 3.3-5.9 4.4-.2.1-.3.2-.4.4 0 .1 0 .3.1.4s.2.1.4.1c2.9-.2 6-1 8.8-2.5 2.5-1.3 4.8-3.1 6.5-5.4.3-.3.5-.6.6-.9C20 13.1 19.2 7.2 15 4zm-1.1 10.8c-.2.2-.3.4-.5.6l-.1.1-.1.2c-.6.9-1.5 1.6-2.3 2.4l-3.2-1c-.7-.2-1.3-.6-1.9-1-2.5-1.9-3-5.5-1.1-8 1.1-1.4 2.8-2.2 4.6-2.2 1.2 0 2.4.4 3.4 1.1 2.6 1.8 3.1 5.3 1.2 7.8zM34.2 4c-1.7-1.4-3.6-2-5.6-2-2.9 0-5.8 1.3-7.5 3.8C18 10 18.8 15.9 23 19.2c1 .6 1.9 1.1 3 1.5-1.6 1.8-3.6 3.3-5.9 4.4-.2.1-.3.2-.4.4 0 .1 0 .3.1.4s.2.1.4.1c2.9-.2 6-1 8.8-2.5 2.5-1.3 4.8-3.1 6.5-5.4.3-.3.5-.6.6-.9 3.1-4.1 2.3-10-1.9-13.2zm-1.1 10.8c-.2.2-.3.4-.5.6l-.1.1-.1.2c-.6.9-1.5 1.6-2.3 2.4l-3.2-1c-.7-.2-1.3-.6-1.9-1-2.5-1.9-3-5.5-1.1-8 1.1-1.4 2.8-2.2 4.6-2.2 1.2 0 2.4.4 3.4 1.1 2.6 1.8 3.1 5.3 1.2 7.8z"
      ],
      tags: ["ite-quote"],
      viewBox: ["0 0 38 28"]
    },
    {
      paths: ["M24 2v4H0V2h24zM0 26h24v-4H0v4zm6-14v4h12v-4H6z"],
      tags: ["ite-alignment"],
      viewBox: ["0 0 24 28"]
    },
    {
      paths: [
        "M25.8 2.2c-3.1-3.1-8.1-3.1-11.1 0-4.2 4.2-4.2 4.2-4.5 4.6-2.5 3.2-2.3 7.7.5 10.5.6.6 1.4 1.1 2.1 1.5.2.1.3.1.5.1.3 0 .6-.1.8-.3l.2-.2c.6-.6.8-1.4.9-2 0-.6-.3-1-.7-1.1-.4-.2-.7-.4-1-.8-.8-.8-1.2-1.7-1.2-2.8 0-1.1.4-2.1 1.2-2.8l4-4c1.5-1.5 4.1-1.5 5.6 0s1.5 4.1 0 5.6L20.6 13c-.3.3-.3.7-.3.9v.1c.1.4.2.8.2 1.3 0 .2 0 .5.1.6 0 .5.3.9.7 1.1.4.2.9 0 1.2-.3l3.4-3.4c2.9-2.9 2.8-8-.1-11.1z",
        "M17.4 10.6c-.6-.6-1.4-1.1-1.9-1.5-.4-.3-1-.2-1.4.2l-.2.2c-.6.6-.8 1.4-.9 2 0 .6.3 1 .7 1.1.3.2.7.4 1 .8.8.8 1.2 1.7 1.2 2.8 0 1.1-.4 2.1-1.2 2.8l-4 4c-1.5 1.5-4.1 1.5-5.6 0s-1.5-4.1 0-5.6L7.5 15c.4-.2.5-.8.4-1.1-.2-.6-.3-1.3-.3-1.9 0-.4-.3-.8-.7-1-.4-.2-.9-.1-1.2.2l-3.4 3.4c-3.1 3.1-3.1 8.1 0 11.1C3.9 27.2 5.9 28 7.9 28c2 0 4-.8 5.6-2.3 2.1-2.2 3.2-3.2 3.7-3.8l.8-.8c2.6-3.1 2.3-7.7-.6-10.5z"
      ],
      tags: ["ite-link"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M11.7 9.1L0 40.3h5.7l2.7-8h12.3l2.9 8h5.7L17.6 9.1h-5.9zM9.8 28.2L14 15.7c.1-.5.4-1.2.5-1.9h.1c.1 1 .2 1.5.4 1.9l4.3 12.5H9.8zm31.7-10.8c-3.1 0-5.8.7-8.1 2.1V24c2.1-1.8 4.5-2.7 7.1-2.7 3 0 4.5 1.5 4.5 4.8l-6.7 1c-4.9.7-7.3 3.1-7.3 7.4 0 1.9.6 3.6 1.9 4.8 1.2 1.2 3 1.8 5.1 1.8 3 0 5.2-1.3 6.8-4h.1v3.5H50V25.8c0-5.5-2.9-8.4-8.5-8.4zm3.6 13.9c0 1.7-.5 3-1.5 4S41.3 37 39.8 37c-1.2 0-2-.4-2.7-1-.7-.6-1.1-1.4-1.1-2.3 0-1.3.4-2.1 1.1-2.7.7-.6 1.8-.8 3.3-1.1l4.6-.6v1.9l.1.1z"
      ],
      tags: ["type-font"]
    },
    {
      paths: [
        "M11.9 14.6c1.5 0 3 .5 4.3 1.4 3.2 2.4 3.8 6.9 1.4 10-.2.2-.4.5-.6.7l-.1.1-.1.2c-.8 1.1-1.9 2-2.9 3l-4-1.3c-.9-.2-1.7-.7-2.4-1.2-3.2-2.4-3.8-6.9-1.4-10.1 1.4-1.8 3.5-2.8 5.8-2.8m0-4.7c-3.7 0-7.3 1.7-9.5 4.8-3.9 5.2-2.9 12.7 2.4 16.8 1.2.8 2.4 1.4 3.8 1.9-2 2.3-4.5 4.2-7.5 5.6-.2.1-.4.2-.5.5 0 .1 0 .4.1.5.1.1.4.2.6.2C5 40 8.9 38.9 12.4 37c3.2-1.7 6-3.9 8.2-6.8.4-.4.6-.7.8-1.1 3.9-5.2 2.9-12.7-2.4-16.7-2.1-1.8-4.6-2.5-7.1-2.5zM38.1 14.6c1.5 0 3 .5 4.3 1.4 3.2 2.4 3.8 6.9 1.4 10-.2.2-.4.5-.6.7l-.1.1-.1.2c-.8 1.1-1.9 2-2.9 3l-4-1.3c-.8-.2-1.7-.7-2.4-1.2-3.2-2.4-3.8-6.9-1.4-10.1 1.4-1.8 3.5-2.8 5.8-2.8m0-4.7c-3.7 0-7.3 1.7-9.5 4.8-3.9 5.2-2.9 12.7 2.4 16.8 1.2.8 2.4 1.4 3.8 1.9-2 2.3-4.5 4.2-7.5 5.6-.2.1-.4.2-.5.5 0 .1 0 .4.1.5.1.1.4.2.6.2 3.7-.2 7.6-1.3 11.1-3.2 3.2-1.7 6-3.9 8.2-6.8.4-.4.6-.7.8-1.1 3.9-5.2 2.9-12.7-2.4-16.7-2.1-1.8-4.6-2.5-7.1-2.5z"
      ],
      tags: ["quote"]
    },
    {
      paths: ["M0 24h28v4H0zM0 0h28v4H0zM2 16h10v6H2zM16 16h10v6H16zM16 6h10v6H16zM2 6h10v6H2z"],
      tags: ["content-stretch"],
      viewBox: ["0 0 25 28"]
    },
    {
      paths: [
        "M17.7 22c-.9-2.9-3.5-5-6.7-5s-5.8 2.1-6.7 5H0v4h4.3c.9 2.9 3.5 5 6.7 5s5.8-2.1 6.7-5H32v-4H17.7zM11 27c-.9 0-1.7-.4-2.2-1-.5-.5-.8-1.2-.8-2s.3-1.5.8-2c.5-.6 1.3-1 2.2-1s1.7.4 2.2 1c.5.5.8 1.2.8 2s-.3 1.5-.8 2c-.5.6-1.3 1-2.2 1zM27.7 6c-.9-2.9-3.5-5-6.7-5s-5.8 2.1-6.7 5H0v4h14.3c.9 2.9 3.5 5 6.7 5s5.8-2.1 6.7-5H32V6h-4.3zm-4.5 4c-.5.6-1.3 1-2.2 1s-1.7-.4-2.2-1c-.5-.5-.8-1.2-.8-2s.3-1.5.8-2c.5-.6 1.3-1 2.2-1s1.7.4 2.2 1c.5.5.8 1.2.8 2s-.3 1.5-.8 2z"
      ],
      tags: ["sliders"],
      viewBox: ["0 0 32 32"]
    },
    {
      paths: [
        "M6.6 16.9c0 .8-.6 1.5-1.4 1.5-.8 0-1.5-.6-1.5-1.5 0-.8.6-1.4 1.5-1.4.8 0 1.5.6 1.4 1.4zm-1.4 4.4c-.8 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5c.8 0 1.4-.7 1.4-1.5.1-.8-.6-1.5-1.4-1.5zm0-17.6c-.8 0-1.5.6-1.5 1.4 0 .8.6 1.5 1.5 1.5.8 0 1.4-.6 1.4-1.5.1-.8-.6-1.4-1.4-1.4zM.8 16.2c-.5 0-.8.3-.8.8 0 .4.3.8.8.8s.8-.4.8-.8c-.1-.5-.4-.8-.8-.8zm4.4-6.6c-.8 0-1.5.6-1.5 1.5 0 .8.6 1.5 1.5 1.5.8 0 1.4-.6 1.4-1.5S6 9.6 5.2 9.6zM17 1.5c.4 0 .8-.4.8-.8-.1-.4-.5-.7-.8-.7-.4 0-.8.3-.8.8 0 .3.3.7.8.7zm-6.5 5c1.2.4 2.3-.7 1.9-1.9-.2-.4-.5-.8-.9-.9-1.2-.4-2.3.7-1.9 1.9.2.4.6.8.9.9zm.5 20c-.4 0-.8.3-.8.8s.5.7.8.7c.4 0 .8-.3.8-.8 0-.4-.3-.7-.8-.7zm16.3-14.7c.4 0 .8-.3.8-.8s-.3-.8-.8-.8-.8.3-.8.8.3.8.8.8zM17 6.6c.8 0 1.5-.6 1.5-1.5 0-.8-.6-1.4-1.5-1.4-.8 0-1.5.6-1.5 1.4 0 .9.6 1.5 1.5 1.5zm-6-5.1c.4 0 .8-.4.8-.8S11.5 0 11 0c-.4 0-.8.3-.8.8.1.3.5.7.8.7zM.8 10.3c-.5 0-.8.3-.8.7s.3.8.8.8.8-.3.8-.8c-.1-.4-.4-.7-.8-.7zm22 5.2c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.5 1.4 1.5.8 0 1.5-.6 1.5-1.5 0-.8-.6-1.4-1.5-1.4zM17 8.8c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2-1-2.2-2.2-2.2zm5.8.8c-.8 0-1.4.6-1.4 1.5 0 .8.6 1.5 1.4 1.5.8 0 1.5-.6 1.5-1.5s-.6-1.5-1.5-1.5zm0 11.7c-.8 0-1.4.7-1.4 1.5s.6 1.5 1.4 1.5c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5zm-11.8.1c-.8 0-1.5.6-1.5 1.5 0 .8.6 1.5 1.5 1.5.8 0 1.5-.6 1.5-1.5s-.6-1.5-1.5-1.5zm16.3-5.2c-.4 0-.8.3-.8.8 0 .4.3.8.8.8s.7-.5.7-.8c0-.5-.3-.8-.7-.8zM22.8 3.7c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.5 1.4 1.5.8 0 1.5-.6 1.5-1.5 0-.8-.6-1.4-1.5-1.4zM11 14.8c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2-.9-2.2-2.2-2.2zm0-6c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2-.9-2.2-2.2-2.2zm6 17.7c-.4 0-.8.3-.8.8s.3.7.8.7c.4 0 .8-.3.8-.8-.1-.4-.5-.7-.8-.7zm0-11.7c-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-1.3-1-2.2-2.2-2.2zm0 6.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5c-.1-.8-.7-1.5-1.5-1.5z"
      ],
      viewBox: ["0 0 28 28"],
      tags: ["blur"]
    },
    {
      paths: [
        "M6.7 13l2.8-6.5h3.9l-4.8 9.6v5.4H4.8v-5.4L0 6.5h3.9L6.7 13z",
        "M24 7.2h4L22 0l-6 7.2h4v13.6h-4l6 7.2 6-7.2h-4z"
      ],
      viewBox: ["0 0 28 28"],
      tags: ["vertical"]
    },
    {
      paths: [
        "M14 5l2.5-5h4.1l-4.2 7.4 4.3 7.6h-4.2L14 9.9 11.5 15H7.3l4.3-7.6L7.4 0h4.1L14 5z",
        "M20.8 24v4l7.2-6-7.2-6v4H7.2v-4L0 22l7.2 6v-4z"
      ],
      viewBox: ["0 0 28 28"],
      tags: ["horizontal"]
    },
    {
      paths: ["M12 6h16v16H12z", "M0 10h8v8H0z"],
      viewBox: ["0 0 28 28"],
      tags: ["spread"]
    },
    {
      paths: ["M5 0v32h22V0H5zm18 28H9v-6h14v6zm0-10H9v-4h14v4zm0-8H9V4h14v6z"],
      tags: ["structure"],
      viewBox: ["0 0 32 32"]
    },
    {
      paths: ["M3 0v32h26V0H3zm22 28H7V4h18v24zm-11-4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"],
      tags: ["tablet"],
      viewBox: ["0 0 32 32"]
    },
    {
      paths: [
        "M4 14c0-2.2 1.8-4 4-4h2.2l4-4H8c-4.4 0-8 3.6-8 8 0 1.7.6 3.3 1.5 4.7l2.9-2.9c-.2-.6-.4-1.2-.4-1.8zM23.8 7l1.5-1.5-2.8-2.8L2.7 22.5l2.8 2.8L8.8 22H20c4.4 0 8-3.6 8-8 0-3-1.7-5.6-4.2-7zM20 18h-7.2l7.9-7.9c1.8.4 3.2 2 3.2 3.9.1 2.2-1.7 4-3.9 4z"
      ],
      tags: ["unlink"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M25 3C12.8 3 3 12.8 3 25s9.8 22 22 22 22-9.8 22-22S37.2 3 25 3zm0 38c-8.8 0-16-7.2-16-16S16.2 9 25 9s16 7.2 16 16-7.2 16-16 16z",
        "M22 14.5h6v12h-6zM22 29.5h6v6h-6z"
      ],
      tags: ["warning"]
    },
    {
      paths: ["M10.2 13.3l-4.3 4.3 14.9 14.8 4.2 4.3 19.1-19.1-4.3-4.3L25 28.2z"],
      tags: ["select"]
    },
    {
      paths: ["M28 14l-2.8 2.8-7.1 7.1-2.8-2.8 5-5.1H0v-4h20.3l-5-5.1 2.8-2.8 7.1 7.1L28 14z"],
      tags: ["long-arrow-right"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M20 0v18H7.7l3.1-3.2L8 12l-5.2 5.2L0 20l2.8 2.8L8 28l2.8-2.8L7.7 22H24V0z"],
      tags: ["line-break"],
      viewBox: ["0 0 24 28"]
    },
    {
      paths: ["M32 7.5l-2.8-2.9-17.1 17.1-9.3-9.2L0 15.3l12.1 12.1z"],
      tags: ["check"],
      viewBox: ["0 0 32 32"]
    },
    {
      paths: ["M25.3 5.5l-2.8-2.8-8.5 8.5-8.5-8.5-2.8 2.8 8.5 8.5-8.5 8.5 2.8 2.8 8.5-8.5 8.5 8.5 2.8-2.8-8.5-8.5z"],
      tags: ["close"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M22 2H8v4h14v14h4V2z", "M2 26h18V8H2v18zm4-14h10v10H6V12z"],
      tags: ["copy"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M2 8h18v18H2V8zm20-6H8v4h14v14h4V2h-4z"],
      tags: ["paste"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M25 6h-8V2h-6v4H3v4h3v16h16V10h3V6zm-7 16h-8V10h8v12z"],
      tags: ["delete"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M17.5 2L6 13.5l-4 4V26h8.5l4-4L26 10.5 17.5 2zM8.8 22H6v-2.8L17.5 7.7l2.8 2.8L8.8 22z"],
      tags: ["edit"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M18.7 10.7c.6-.2 1.6-1 1.6-2.3 0-1.7-1.4-2.8-3.2-2.4-6.7 1.6-8.8 4.3-8.8 8.6 0 .6.2 2.3.2 3.1 0 3.2-1.3 4.4-3.7 4.6C3 22.5 2 23.5 2 25c0 1.6 1.1 2.5 2.8 2.7 2.5.2 3.7 1.4 3.7 4.6 0 .7-.2 2.4-.2 3.1 0 4.3 2 7 8.8 8.6 1.8.4 3.2-.7 3.2-2.4 0-1.3-.9-2-1.6-2.3-3.4-1.2-4-2.5-4-4.9 0-.9.2-2.4.2-3.3 0-3.3-1.7-5.1-4.6-6 3-1.1 4.6-2.8 4.6-6 0-1-.2-2.5-.2-3.3 0-2.6.6-3.8 4-5.1zM45.1 22.3c-2.5-.2-3.7-1.4-3.7-4.6 0-.7.2-2.4.2-3.1 0-4.3-2-7-8.8-8.6-1.8-.4-3.2.7-3.2 2.4 0 1.3.9 2 1.6 2.3 3.4 1.2 4 2.5 4 4.9 0 .9-.2 2.4-.2 3.3 0 3.3 1.7 5.1 4.6 6-3 1.1-4.6 2.8-4.6 6 0 1 .2 2.5.2 3.3 0 2.5-.6 3.7-4 4.9-.6.2-1.6 1-1.6 2.3 0 1.7 1.4 2.8 3.2 2.4 6.7-1.6 8.8-4.3 8.8-8.6 0-.6-.2-2.3-.2-3.1 0-3.2 1.3-4.4 3.7-4.6 1.8-.2 2.8-1.2 2.8-2.7 0-1.4-1.1-2.3-2.8-2.5z"
      ],
      tags: ["braces"]
    },
    {
      paths: [
        "M34.3 12.3L30 16.5l5.5 5.5h-21l5.5-5.5-4.3-4.2L3 25l4.2 4.2 8.5 8.5 4.3-4.2-5.5-5.5h21L30 33.5l4.3 4.2 8.5-8.5L47 25z"
      ],
      tags: ["enlarge"]
    },
    {
      paths: ["M0 4v6h4V4h6V0H0zM24 0h-6v4h6v6h4V0zM24 24h-6v4h10V18h-4zM4 18H0v10h10v-4H4z"],
      tags: ["maximize"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M10 6V0H6v6H0v4h10zM22 10h6V6h-6V0h-4v10zM22 22h6v-4H18v10h4zM6 28h4V18H0v4h6z"],
      tags: ["shrink"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M26 22v4H2v-4h24zm-12-2l2.8-2.8 7.1-7.1-2.8-2.8-5.1 5V2h-4v10.3l-5.1-5-2.8 2.8 7.1 7.1L14 20z"],
      tags: ["export"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M26.9 1.3C26.1.1 24.4-.4 23.2.5c-.4 0-.4.4-.4.4l-13.2 19c-6.2 8.7-4.1 20.3 4.6 26.5s20.3 4.1 26.5-4.6c4.6-6.6 4.6-15.3 0-22L26.9 1.3z"
      ],
      tags: ["style"]
    },
    {
      paths: [
        "M35.4 12.8C32 6.2 25.3 2 18 2S4 6.2.6 12.8c-.4.7-.4 1.6 0 2.3C4 21.8 10.7 26 18 26c7.3 0 14-4.2 17.4-10.8.4-.8.4-1.6 0-2.4zM18 21.9c-5.4 0-10.5-3-13.3-7.9C7.5 9.1 12.6 6.1 18 6.1s10.5 3 13.3 7.9c-2.8 4.9-7.9 7.9-13.3 7.9zm5.8-6.2c-.9 3.2-4.2 5-7.4 4.1-3.2-.9-5-4.2-4.1-7.4.4.3.9.4 1.4.4 1.7 0 3-1.3 3-3 0-.5-.1-1-.4-1.4.5-.3 1.1-.4 1.7-.4.6 0 1.1.1 1.7.2 3.1 1 5 4.3 4.1 7.5z"
      ],
      tags: ["eye"],
      viewBox: ["0 0 36 28"]
    },
    {
      paths: [
        "M4.1 20.1C2.7 18.7 1.5 17 .6 15.2c-.4-.7-.4-1.6 0-2.3C4 6.2 10.7 2 18 2c1.3 0 2.6.1 3.8.4l-3.7 3.7H18c-5.4 0-10.5 3-13.3 7.9.7 1.2 1.5 2.2 2.4 3.1l-3 3zm31.3-4.9C32 21.8 25.3 26 18 26c-2.6 0-5.2-.6-7.6-1.6L6.9 28 4 25.2 29.1.1 32 2.9l-2.7 2.7c2.5 1.8 4.7 4.3 6.2 7.2.3.8.3 1.6-.1 2.4zM31.3 14c-1.3-2.2-3-4-5.1-5.4l-2.8 2.8c.6 1.3.8 2.7.4 4.2-.9 3.2-4.2 5-7.4 4.1l-.9-.3-1.8 1.8c1.4.4 2.8.7 4.3.7 5.4 0 10.5-3 13.3-7.9z"
      ],
      tags: ["hidden"]
    },
    {
      paths: [
        "M25 29.9c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z",
        "M25 40.6c-5.1 0-10.1-1.4-14.5-4C6.3 34.1 2.7 30.5.3 26.2c-.4-.7-.4-1.7 0-2.4 2.4-4.3 5.9-7.9 10.2-10.4 4.4-2.6 9.4-4 14.5-4s10.1 1.4 14.5 4c4.2 2.5 7.8 6.1 10.2 10.4.4.7.4 1.7 0 2.4-2.4 4.3-5.9 7.9-10.2 10.4-4.4 2.7-9.4 4-14.5 4zM5.3 25C9.6 31.7 17 35.7 25 35.7s15.4-4 19.7-10.7C40.4 18.3 33 14.3 25 14.3S9.6 18.3 5.3 25z"
      ],
      tags: ["visibility"]
    },
    {
      paths: [
        'M49.7 23.8c-1.7-3-3.9-5.7-6.6-7.9l-3.5 3.5c2 1.6 3.7 3.5 5.1 5.6C40.4 31.7 33 35.7 25 35.7c-.6 0-1.1 0-1.7-.1L19 40c2 .4 4 .6 6 .6 5.1 0 10.1-1.4 14.5-4 4.2-2.5 7.8-6.1 10.2-10.4.4-.7.4-1.7 0-2.4zM25 29.9c2.7 0 4.9-2.2 4.9-4.9 0-.4-.1-.9-.2-1.3L44.4 9c1-1 1-2.5 0-3.5s-2.5-1-3.5 0l-5.7 5.7C32 10 28.5 9.4 25 9.4c-5.1 0-10.1 1.4-14.5 4C6.3 15.9 2.7 19.5.3 23.8c-.4.7-.4 1.7 0 2.4 2.4 4.2 5.7 7.7 9.8 10.2l-4.5 4.5c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l14.7-14.7c.3.1.8.2 1.2.2zM5.3 25C9.6 18.3 17 14.2 25 14.2c2.2 0 4.3.3 6.4.9l-5.1 5.1c-.4-.1-.8-.2-1.3-.2-2.7 0-4.9 2.2-4.9 4.9 0 .4.1.9.2 1.3l-6.6 6.6C10.3 31 7.4 28.3 5.3 25z"'
      ],
      tags: ["visibility-hidden"]
    },
    {
      paths: [
        "M19.8 18.6l-4.9 4.9-2.8-2.8 3.7-3.7V8.6h4v10zM16 0C11.4 0 7.2 2 4.2 5.2L1.6 2.6 0 12.6 10.1 11l-3-3c2.2-2.5 5.4-4 8.9-4 6.6 0 12 5.4 12 12s-5.4 12-12 12c-3.5 0-6.7-1.5-8.9-4l-3 2.7c3 3.2 7.2 5.3 11.9 5.3 8.8 0 16-7.2 16-16S24.8 0 16 0z"
      ],
      tags: ["history"],
      viewBox: ["0 0 32 32"]
    },
    {
      paths: [
        "M5 25c0 11 9 20 20 20 7.6 0 14.2-4.2 17.6-10.6l-5.5-3.3c-2.2 4.4-6.8 7.4-12.1 7.4-7.5 0-13.6-6.1-13.6-13.6S17.5 11.4 25 11.4c4 0 7.5 1.8 9.9 4.5l-4.2 2.6 12.1 4L45 9.9l-4.3 2.6C37 8 31.4 5 25 5 14 5 5 14 5 25z"
      ],
      tags: ["redo"]
    },
    {
      paths: [
        "M25 5c-6.4 0-12 3-15.6 7.5L5 9.9l2.2 12.6 12.1-4-4.3-2.6c2.4-2.7 5.9-4.5 9.9-4.5 7.5 0 13.6 6.1 13.6 13.6s-6 13.6-13.5 13.6c-5.3 0-9.8-3-12.1-7.4l-5.5 3.3C10.7 40.8 17.4 45 25 45c11 0 20-9 20-20S36 5 25 5z"
      ],
      tags: ["undo"]
    },
    {
      paths: [
        "M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 28C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12-5.4 12-12 12zm2-17c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-4 4h4v8h-4v-8z"
      ],
      tags: ["info"],
      viewBox: ["0 0 32 32"]
    },
    {
      paths: [
        "M90 20c38.6 0 70 31.4 70 70s-31.4 70-70 70-70-31.4-70-70 31.4-70 70-70m0-20C40.3 0 0 40.3 0 90s40.3 90 90 90 90-40.3 90-90S139.7 0 90 0z",
        "M90 65z",
        "M90 55c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z",
        "M90 115V95v20z",
        "M90 85c-5.5 0-10 4.5-10 10v20c0 5.5 4.5 10 10 10s10-4.5 10-10V95c0-5.5-4.5-10-10-10z"
      ],
      viewBox: ["0 0 180 180"],
      tags: ["infopanel"]
    },
    {
      paths: [
        "M33.9 6.1c0 1.6-.6 3.2-1.7 4.4-1.2 1.1-2.7 1.7-4.3 1.7-1.6 0-3.1-.6-4.2-1.7-1.2-1.2-1.8-2.7-1.7-4.4 0-1.6.6-3.2 1.7-4.3C24.8.6 26.3 0 27.9 0s3.2.7 4.3 1.8c1.1 1.2 1.7 2.7 1.7 4.3zm-1 41.3l-4.2 1.9c-1.2.4-2.4.6-3.7.6-1.8.1-3.7-.6-5-1.8-1.1-1.3-1.8-3-1.7-4.8 0-.8 0-1.6.1-2.3.1-.8.3-1.7.4-2.7l2.2-9.5c.2-.9.4-1.7.5-2.6.1-.7.2-1.5.2-2.2.1-.9-.1-1.7-.6-2.4-.6-.6-1.5-.8-2.3-.7-.6 0-1.2.1-1.7.3-.6.2-1-2.3-1-2.3s2.9-1.2 4.2-1.7c1.2-.5 2.4-.8 3.7-.8 1.8-.1 3.6.5 4.9 1.8 1.2 1.4 1.8 3.1 1.7 4.9 0 .7 0 1.4-.1 2.1-.1 1-.2 1.9-.5 2.9l-2.1 9.4c-.2.7-.3 1.6-.5 2.6-.2.9-.2 1.7-.2 2.2-.1.9.2 1.8.7 2.6.7.5 1.5.7 2.3.6.6 0 1.2-.1 1.8-.3.7-.3.9 2.2.9 2.2z"
      ],
      tags: ["infobig"]
    },
    {
      paths: [
        "M19 4.6L30 11l-11 6.4L8 11l11-6.4M19 0L0 11l19 11 19-11L19 0zm15 18.7l-15 8.7-15-8.7L0 21l15.3 8.8L19 32l3.7-2.1L38 21l-4-2.3z"
      ],
      tags: ["lib"],
      viewBox: ["0 0 38 32"]
    },
    {
      paths: [
        "M20 6H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h12c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 12H8c-2.2 0-4-1.8-4-4s1.8-4 4-4h12c2.2 0 4 1.8 4 4s-1.8 4-4 4z",
        "M10 12h8v4h-8z"
      ],
      tags: ["link"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M8 21h34v8H8z"],
      tags: ["minus"]
    },
    {
      paths: ["M22 4v24H10V4h12m4-4H6v32h20V0zM16 22c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"],
      tags: ["mobile"],
      viewBox: ["0 0 32 32"]
    },
    {
      paths: ["M25 6v12H7V6h18m4-4H3v20h26V2zM32 26H0v4h32v-4z"],
      tags: ["laptop"],
      viewBox: ["0 0 32 32"]
    },
    {
      paths: ["M28 4v16H4V4h24m4-4H0v24h32V0zM24 28H8v4h16v-4z"],
      tags: ["desktop"],
      viewBox: ["0 0 32 32"]
    },
    {
      paths: ["M24 4v13H4V4h20m4-4H0v21h28V0zM21 24H7v4h14v-4z"],
      tags: ["desktop-sm"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M28 0H18v4h6v6h4zM0 28h10v-4H4v-6H0zM16 12v4h-4v-4h4m4-4H8v12h12V8z"],
      tags: ["drag"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M47.6 2.4C46.1.9 44 0 41.7 0c-2.3 0-4.4.9-5.9 2.4l-5.9 5.9-3-2.9L24 8.3l2.9 2.9L0 37.5V50h12.5l26.3-26.9 2.9 2.9 2.9-2.9-2.9-3 5.9-5.9c1.5-1.5 2.4-3.6 2.4-5.9s-.9-4.4-2.4-5.9zM18.9 37.5H6l23.9-23.3 6 6-17 17.3z"
      ],
      tags: ["picker"]
    },
    {
      paths: ["M42 21H29V8h-8v13H8v8h13v13h8V29h13z"],
      tags: ["plus"]
    },
    {
      paths: [
        "M47.9 0H12.1c-.4 0-.8.2-1 .5L1 15.5c-.3.4-.3 1 .1 1.4l28 34.6c.5.6 1.4.6 1.9 0l28-34.6c.3-.4.4-1 .1-1.4L48.9.5c-.2-.3-.6-.5-1-.5zm-2 4.9l6.4 9.7h-6.9l-5.3-9.7h5.8zm-20.5 0h9.2l5.3 9.7H20.1l5.3-9.7zm-11.3 0h5.8l-5.3 9.7H7.7l6.4-9.7zM9.7 19.5h5.2l6.9 16.2L9.7 19.5zm10.5 0h19.7L30 44.2l-9.8-24.7zm17.9 16.2L45 19.5h5.2L38.1 35.7z"
      ],
      tags: ["quality"],
      viewBox: ["0 0 58 52"]
    },
    {
      paths: [
        "M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zm0 24C8.5 24 4 19.5 4 14S8.5 4 14 4s10 4.5 10 10-4.5 10-10 10zm1.7-4.7c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm3.3-8.2c0 3.3-3.6 3.3-3.6 4.6v.2c0 .4-.3.7-.7.7h-2.1c-.4 0-.7-.3-.7-.7v-.3c0-1.8 1.3-2.5 2.3-3 .9-.5 1.4-.8 1.4-1.5 0-.8-1.1-1.4-2-1.4-1.1 0-1.6.5-2.4 1.4-.2.3-.7.3-.9.1l-1.2-.9c-.1-.3-.2-.7 0-1 1.2-1.7 2.6-2.6 4.9-2.6 2.4 0 5 1.9 5 4.4z"
      ],
      tags: ["question-mark"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M245.9-211.5l-52.2 52.2c-44.9-44.9-106.9-72.6-175.4-72.6-132.8 0-241.2 104.3-247.7 235.5-.3 6.8 5.2 12.5 12 12.5h28c6.4 0 11.6-5 12-11.3 5.8-103.1 91.1-184.7 195.7-184.7 54.2 0 103.2 21.9 138.6 57.4l-54.1 54.1c-7.6 7.6-2.2 20.5 8.5 20.5h143c6.6 0 12-5.4 12-12v-143c.1-10.8-12.9-16.1-20.4-8.6zm8.2 227.6h-28c-6.4 0-11.6 5-12 11.3-5.8 103.1-91.1 184.7-195.7 184.7-54.2 0-103.2-21.9-138.6-57.4l54.1-54.1c7.6-7.6 2.2-20.5-8.5-20.5h-143c-6.6 0-12 5.4-12 12v143c0 10.7 12.9 16 20.5 8.5l52.2-52.2C-112 236.3-50 264 18.5 264c132.8 0 241.2-104.3 247.7-235.5.2-6.8-5.3-12.4-12.1-12.4zM26.8 1.2l-2.9 2.9C21.4 1.6 17.9 0 14 0 6.5 0 .4 5.9 0 13.3c0 .4.3.7.7.7h1.6c.4 0 .7-.3.7-.6.3-5.9 5.1-10.5 11-10.5 3.1 0 5.8 1.2 7.8 3.2l-3.1 3.1c-.4.4-.1 1.2.5 1.2h8.1c.4 0 .7-.3.7-.7V1.6c0-.6-.7-.9-1.2-.4zM27.3 14h-1.6c-.4 0-.7.3-.7.6-.3 5.8-5.1 10.4-11 10.4-3.1 0-5.8-1.2-7.8-3.2l3.1-3.1c.4-.4.1-1.2-.5-1.2H.7c-.4 0-.7.3-.7.7v8.1c0 .6.7.9 1.2.5l2.9-2.9c2.5 2.5 6 4.1 9.9 4.1 7.5 0 13.6-5.9 14-13.3 0-.4-.3-.7-.7-.7z"
      ],
      tags: ["refresh"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M14 14l-2.8-2.8-8.4-8.4L0 5.6 8.4 14 0 22.4l2.8 2.8 8.4-8.4L14 14z"],
      tags: ["right-arrow"],
      viewBox: ["0 0 14 28"]
    },
    {
      paths: ["M0 12h24v4H0zM10 0h14v4H10zM10 24h14v4H10z"],
      tags: ["align--right"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M0 12h24v4H0zM0 0h14v4H0zM0 24h14v4H0z"],
      tags: ["align--left"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M0 0h24v4H0zM0 24h24v4H0zM0 12h24v4H0z"],
      tags: ["align--justify"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M0 0h24v4H0zM0 24h24v4H0zM5 12h14v4H5z"],
      tags: ["align--center"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M0 0v28h28V0H0zm24 24H4V4h20v20zm-3.8-10L9.8 20V8l10.4 6z"],
      tags: ["video"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M0 0v28h28V0H0zm24 4v13.5l-4.2-4.2c-.4-.4-.9-.4-1.3 0l-7.9 7.9-3-3c-.4-.4-.9-.4-1.3 0L4 20.5V4h20zM8 11.5c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7c0 1.5-1.2 2.7-2.7 2.7S8 13 8 11.5z"
      ],
      tags: ["picture"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M0 0v28h28V0H0zm4 24V4h20L4 24z"],
      tags: ["gradient"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M16.6 10.1c-1.5-2.2-3.3-4.6-4.4-8.4C11.9.7 11 0 10 0 9 0 8.1.6 7.8 1.7 6.7 5.4 5 7.9 3.4 10.1 1.6 12.6.1 14.8.1 18c0 5.5 4.4 10 9.8 10s9.8-4.5 9.8-10c.1-3.2-1.4-5.4-3.1-7.9zm-6.6 14c-3.3 0-5.9-2.7-5.9-6 0-2 1-3.4 2.6-5.7 1-1.5 2.3-3.3 3.4-5.5 1.1 2.3 2.3 4.1 3.4 5.5 1.6 2.3 2.6 3.7 2.6 5.7-.2 3.3-2.8 6-6.1 6z"
      ],
      tags: ["drop"],
      viewBox: ["0 0 20 28"]
    },
    {
      paths: [
        "M6 14c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3zm8-3c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm11 0c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
      ],
      tags: ["more"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M0 0v32h32V0H0zm4 4h10v10H4V4zm24 24H4V18h24v10zm0-14H18V4h10v10z"],
      tags: ["layout"],
      viewBox: ["0 0 32 32"]
    },
    {
      paths: ["M31.3 2.8L28.5 0l-9.8 9.8V0h-4v19.4L3.5 8.2.7 11.1l14 13.9v7h4V15.4z"],
      tags: ["treeview"],
      viewBox: ["0 0 32 32"]
    },
    {
      paths: [
        "M11 4c3.9 0 7 3.1 7 7 0 1.4-.4 2.8-1.2 4l-.8 1-1 .8c-1.2.8-2.5 1.2-4 1.2-3.9 0-7-3.1-7-7s3.1-7 7-7m0-4C4.9 0 0 4.9 0 11s4.9 11 11 11c2.3 0 4.5-.7 6.2-1.9l7.9 7.9 2.8-2.8-7.9-7.9c1.2-1.8 1.9-3.9 1.9-6.2C22 4.9 17.1 0 11 0z"
      ],
      tags: ["search"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M13 40.8V9h11.6c3.5 0 6.3.6 8.2 2 1.8 1.4 2.9 3.1 2.9 5.5 0 1.7-.6 3.3-1.8 4.6-1.2 1.4-2.7 2.2-4.5 2.7v.2c2.3.2 4.1 1.1 5.4 2.5 1.4 1.4 2.1 3.2 2.1 5.1 0 3-1 5.2-3.1 7-2.1 1.8-5 2.5-8.5 2.5L13 40.8zm7.2-26.5v7.5h3.2c1.4 0 2.7-.3 3.5-1.1.8-.8 1.3-1.8 1.3-3 0-2.4-1.8-3.5-5.2-3.5l-2.8.1zm0 12.9v8.4h3.9c1.7 0 3-.4 3.9-1.1.9-.8 1.4-1.8 1.4-3.2.1-1.1-.5-2.3-1.4-3-1-.7-2.2-1.1-3.9-1.1h-3.9z"
      ],
      tags: ["bold"]
    },
    {
      paths: [
        "M39 8h-1c-.5 0-1 .5-1 1v.8C35.6 8.7 33.9 8 32 8c-4.4 0-8 3.6-8 8v2c0 4.4 3.6 7.9 8 7.9 1.9 0 3.6-.7 5-1.8v.9c0 .5.4 1 1 1h1c.5 0 1-.5 1-1V9c0-.5-.4-1-1-1zm-2 10c0 2.8-2.3 5-5 5s-5-2.3-5-5v-2c0-2.8 2.3-5 5-5s5 2.3 5 5v2zM13.2 2.7c-.1-.5-.5-.7-.9-.7H9.6c-.4 0-.8.2-1 .7L0 24.7c-.2.5.1 1.1.6 1.3H2c.4 0 .8-.2 1-.7L5.5 19h10.9l2.5 6.4c.1.4.5.7 1 .7H21c.5 0 1-.5 1-1 0-.2 0-.2-.1-.4l-8.7-22zM6.7 16L11 5l4.3 11H6.7z"
      ],
      tags: ["capitalize"],
      viewBox: ["0 0 40 28"]
    },
    {
      paths: [
        "M20 1v1c0 .6-.4 1-1 1h-4.2L9.3 25H13c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h4.2l5.5-22H7c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h12c.6 0 1 .4 1 1z"
      ],
      tags: ["italic"],
      viewBox: ["0 0 20 28"]
    },
    {
      paths: [
        "M33 8h-1c-.5 0-1 .5-1 1v.8C29.6 8.7 27.9 8 26 8c-4.4 0-8 3.6-8 8v2c0 4.3 3.6 8 8 8 1.9 0 3.6-.7 5-1.8v.8c0 .5.4 1 1 1h1c.5 0 1-.5 1-1V9c0-.5-.4-1-1-1zm-2 10c0 2.8-2.3 5-5 5s-5-2.3-5-5v-2c0-2.8 2.3-5 5-5s5 2.3 5 5v2zM15 8h-1c-.5 0-1 .5-1 1v.8C11.6 8.7 9.9 8 8 8c-4.4 0-8 3.6-8 8v2c0 4.3 3.6 8 8 8 1.9 0 3.6-.7 5-1.8v.8c0 .5.4 1 1 1h1c.5 0 1-.5 1-1V9c0-.5-.4-1-1-1zm-2 10c0 2.8-2.3 5-5 5s-5-2.3-5-5v-2c0-2.8 2.3-5 5-5s5 2.3 5 5v2z"
      ],
      tags: ["lowercase"],
      viewBox: ["0 0 34 28"]
    },
    {
      paths: ["M0 12.2h10.2v30.5h5.9V12.2h10.2v-5H0v5zm27.7 3.9v4.5h8.2v22.1h6v-22H50v-4.5H27.7z"],
      tags: ["smallcaps"]
    },
    {
      paths: [
        "M31 13H1c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1h30c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1zM9.4 11h7.1l-2.9-1.4c-1.4-.7-2-2.4-1.3-3.8.3-.6.7-1 1.3-1.3.6-.3 1.2-.5 1.9-.5h3.9c.9 0 1.7.4 2.3 1.1l.9 1.3c.3.4 1 .5 1.4.2l1.6-1.2c.4-.3.5-1 .2-1.4l-.9-1.3C23.6 1 21.5 0 19.4 0h-3.9c-1.3 0-2.5.3-3.7.9-2.5 1.2-4 3.9-3.8 6.7.1 1.3.7 2.4 1.4 3.4zM25.2 18h-5.7l.9.4c1.4.7 2 2.4 1.3 3.8-.3.6-.7 1-1.3 1.3-.6.3-1.2.4-1.9.4h-3.9c-.9 0-1.7-.4-2.3-1.1l-.9-1.3c-.3-.4-1-.5-1.4-.2l-1.6 1.2c-.4.3-.5 1-.2 1.4l.9 1.3c1.3 1.7 3.3 2.7 5.5 2.7h3.9c1.3 0 2.5-.3 3.7-.9 2.5-1.3 4-3.9 3.8-6.8-.1-.7-.4-1.5-.8-2.2z"
      ],
      tags: ["strikethrough"],
      viewBox: ["0 0 32 28"]
    },
    {
      paths: [
        "M2.5 2.6h1.8V14c0 4.8 3.9 8.8 8.8 8.8s8.8-3.9 8.8-8.8V2.6h1.8c.5 0 .9-.4.9-.9V.9C24.4.4 24 0 23.5 0h-7c-.5 0-.9.4-.9.9v.9c0 .5.4.9.9.9h1.8V14c0 2.9-2.4 5.3-5.3 5.3S7.8 16.9 7.8 14V2.6h1.8c.5 0 .9-.4.9-.9V.9c-.1-.5-.5-.9-1-.9h-7c-.5 0-.9.4-.9.9v.9c0 .4.4.8.9.8zm21.9 22.8H1.6c-.5 0-.9.4-.9.9v.9c0 .5.4.9.9.9h22.8c.5 0 .9-.4.9-.9v-.9c0-.5-.4-.9-.9-.9z"
      ],
      tags: ["underline"],
      viewBox: ["0 0 26 28"]
    },
    {
      paths: [
        "M13.3 2.7c-.1-.5-.5-.7-.9-.7H9.7c-.5 0-.8.2-1 .7l-8.6 22c-.2.5.1 1.1.6 1.3H2c.5 0 .8-.2.9-.7L5.4 19h11.1l2.5 6.4c.1.4.5.7 1 .7h1c.5 0 1-.5 1-1 0-.2 0-.2-.1-.4l-8.6-22zM6.7 16L11 5.2 15.3 16H6.7zM36.3 2.7c-.2-.5-.5-.7-1-.7h-2.7c-.5 0-.8.2-1 .7l-8.6 22c-.2.5.1 1.1.6 1.3h1.5c.4 0 .8-.2 1-.7l2.5-6.4h11l2.5 6.4c.2.4.5.7 1 .7h.9c.5 0 1-.5 1-1 0-.2 0-.2-.1-.4L36.3 2.7zM29.7 16L34 5.1 38.3 16h-8.6z"
      ],
      tags: ["uppercase"],
      viewBox: ["0 0 45 28"]
    },
    {
      paths: ["M24 4v20H4V4h20m4-4H0v28h28V0z"],
      tags: ["all-sides"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M28 0H0v20h4V4h20v16h4V0z", "M28 24H0v4h28v-4z"],
      tags: ["border-bottom"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M28 0H8v4h16v20H8v4h20V0z", "M4 0H0v28h4V0z"],
      tags: ["border-left"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M20 0H0v28h20v-4H4V4h16V0z", "M28 0h-4v28h4V0z"],
      tags: ["border-right"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M28 8h-4v16H4V8H0v20h28V8z", "M28 0H0v4h28V0z"],
      tags: ["border-top"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M38.3 0H12.5C5.8-.2.2 5 0 11.7v25.8C-.2 44.2 5 49.8 11.7 50h25.8c6.7.2 12.3-5 12.5-11.7V12.5C50.2 5.8 45 .2 38.3 0zm3.4 12.5v25c.2 2.1-1.2 3.9-3.3 4.2H12.5c-2.1.2-3.9-1.2-4.2-3.3V12.5c-.2-2.1 1.2-3.9 3.3-4.2h25.9c2.1-.2 3.9 1.2 4.2 3.3v.9z"
      ],
      tags: ["all-corners"]
    },
    {
      paths: ["M0 10h4V4h20v20h-6v4h10V0H0z", "M14 28v-4C8.5 24 4 19.5 4 14H0c0 7.7 6.3 14 14 14z"],
      tags: ["b-l-corner"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M10 28v-4H4V4h20v6h4V0H0v28z", "M28 14h-4c0 5.5-4.5 10-10 10v4c7.7 0 14-6.3 14-14z"],
      tags: ["b-r-corner"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M18 0v4h6v20H4v-6H0v10h28V0z", "M0 14h4C4 8.5 8.5 4 14 4V0C6.3 0 0 6.3 0 14z"],
      tags: ["t-l-corner"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M28 18h-4v6H4V4h6V0H0v28h28z", "M14 0v4c5.5 0 10 4.5 10 10h4c0-7.7-6.3-14-14-14z"],
      tags: ["t-r-corner"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M10.8 21.7V28H7.1V10h7c1.4 0 2.5.2 3.6.7 1 .5 1.8 1.2 2.4 2.1.6.9.8 1.9.8 3.1 0 1.8-.6 3.2-1.8 4.2-1.2 1-2.9 1.5-5 1.5h-3.3zm0-3h3.3c1 0 1.7-.2 2.2-.7.5-.5.8-1.1.8-2 0-.9-.3-1.6-.8-2.1s-1.2-.8-2.2-.8h-3.4v5.6z",
        "M28 0v4H0V0z"
      ],
      tags: ["padding-top"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M3.7 16.7V23H0V5h7c1.4 0 2.5.2 3.6.7s1.8 1.2 2.4 2.1c.6.9.8 1.9.8 3.1 0 1.8-.6 3.2-1.8 4.2-1.2 1-2.9 1.5-5 1.5H3.7zm0-3H7c1 0 1.7-.2 2.2-.7.5-.5.8-1.1.8-2 0-.9-.3-1.6-.8-2.1C8.7 8.3 8 8 7.1 8H3.7v5.7z",
        "M24 0h4v28h-4z"
      ],
      tags: ["padding-right"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M10.8 11.7V18H7.1V0h7c1.4 0 2.5.2 3.6.7s1.8 1.2 2.4 2.1c.6.9.8 1.9.8 3.1 0 1.8-.6 3.2-1.8 4.2-1.2 1-2.9 1.5-5 1.5h-3.3zm0-3h3.3c1 0 1.7-.2 2.2-.7.5-.5.8-1.1.8-2 0-.9-.3-1.6-.8-2.1-.5-.6-1.2-.9-2.1-.9h-3.4v5.7z",
        "M28 24v4H0v-4z"
      ],
      tags: ["padding-bottom"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M17.9 16.7V23h-3.7V5h7c1.4 0 2.5.2 3.6.7s1.8 1.2 2.4 2.1c.5 1 .8 2 .8 3.2 0 1.8-.6 3.2-1.8 4.2-1.2 1-2.9 1.5-5 1.5h-3.3zm0-3h3.3c1 0 1.7-.2 2.2-.7.5-.5.8-1.1.8-2 0-.9-.3-1.6-.8-2.1-.4-.6-1.2-.9-2.1-.9h-3.4v5.7z",
        "M0 0h4v28H0z"
      ],
      tags: ["padding-left"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M9.6 10.9L14 23.3l4.4-12.4H23V28h-3.5v-4.7l.4-8.1L15.2 28h-2.4L8.2 15.3l.4 8.1V28H5V10.9h4.6z",
        "M28 0v4H0V0z"
      ],
      tags: ["margin-top"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M4.6 5.4L9 17.9l4.4-12.4H18v17.1h-3.5v-4.7l.4-8.1-4.6 12.7H7.8L3.2 9.8l.4 8.1v4.7H0V5.4h4.6z",
        "M24 0h4v28h-4z"
      ],
      tags: ["margin-right"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M9.6 0L14 12.4 18.4 0H23v17.1h-3.5v-4.7l.4-8.1L15.3 17h-2.4L8.2 4.4l.4 8.1v4.7H5V0h4.6z",
        "M28 24v4H0v-4z"
      ],
      tags: ["margin-bottom"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M14.6 5.4L19 17.9l4.4-12.4H28v17.1h-3.5v-4.7l.4-8.1-4.6 12.7h-2.4L13.2 9.8l.4 8.1v4.7H10V5.4h4.6z",
        "M0 0h4v28H0z"
      ],
      tags: ["margin-left"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M2 4h10v8H2zM16 4h10v8H16z", "M26 12H0v4h2v8h10v-8h4v8h10v-8h2v-4z"],
      tags: ["align-baseline"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M4 16h8v10H4zM4 2h8v10H4z", "M12 2v26h4v-2h8V16h-8v-4h8V2h-8V0h-4z"],
      tags: ["align-baseline-reversed"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M28 12h-2V6H16v6h-4V4H2v8H0v4h2v8h10v-8h4v6h10v-6h2z"],
      tags: ["align-center"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M2 4h10v18H2zM16 10h10v12H16zM0 24h28v4H0z"],
      tags: ["align-end"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M2 6h10v18H2zM16 6h10v12H16zM0 0h28v4H0z"],
      tags: ["align-start"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M2 6h10v16H2zM16 6h10v16H16zM0 24h28v4H0zM0 0h28v4H0z"],
      tags: ["align-stretch"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M6 26V16h16v10H6zm0-14V2h16v10H6zm18 16V0h4v28h-4zM0 28V0h4v28H0z"],
      tags: ["align-stretch-reversed"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M0 12h28v4H0zM2 0h10v10H2zM2 18h10v10H2zM16 0h10v10H16zM16 18h10v10H16z"],
      tags: ["content-center"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M0 24h28v4H0zM2 0h10v10H2zM2 12h10v10H2zM16 0h10v10H16zM16 12h10v10H16z"],
      tags: ["content-end"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M0 24h28v4H0zM0 0h28v4H0zM2 8h10v4H2zM2 16h10v4H2zM16 8h10v4H16zM16 16h10v4H16z"],
      tags: ["content-space-around"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M0 24h28v4H0zM0 0h28v4H0zM2 6h10v4H2zM2 18h10v4H2zM16 6h10v4H16zM16 18h10v4H16z"],
      tags: ["content-space-btw"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M0 0h28v4H0zM2 6h10v10H2zM2 18h10v10H2zM16 6h10v10H16zM16 18h10v10H16z"],
      tags: ["content-start"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M0 6h10v16H0zM18 6h10v16H18zM12 0h4v28h-4z"],
      tags: ["justify-center"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M0 6h10v16H0zM12 6h10v16H12zM24 0h4v28h-4z"],
      tags: ["justify-end"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M8 6h4v16H8zM16 6h4v16h-4zM24 0h4v28h-4zM0 0h4v28H0z"],
      tags: ["justify-sp-around"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M6 8h16v4H6zM6 16h16v4H6zM0 24h28v4H0zM0 0h28v4H0z"],
      tags: ["justify-sp-around-reverse"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M6 6h4v16H6zM18 6h4v16h-4zM24 0h4v28h-4zM0 0h4v28H0z"],
      tags: ["justify-sp-btw"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M6 6h16v4H6zM6 18h16v4H6zM0 24h28v4H0zM0 0h28v4H0z"],
      tags: ["justify-sp-btw-reverse"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M6 6h10v16H6zM18 6h10v16H18zM0 0h4v28H0z"],
      tags: ["justify-start"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M2 8h10v12H2z", "M16 8V0h-4v28h4v-8h10V8z"],
      tags: ["self-baseline"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M26 8H16V0h-4v8H2v12h10v8h4v-8h10z"],
      tags: ["self-center"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M24 0h4v28h-4zM0 8h22v12H0z"],
      tags: ["self-end"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M0 0h4v28H0zM6 8h22v12H6z"],
      tags: ["self-start"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["M24 0h4v28h-4zM0 0h4v28H0zM6 8h16v12H6z"],
      tags: ["self-stretch"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M43.1 8.5c-2.4-2.2-5.5-3.4-8.6-3.4-3.4 0-6.8 1.4-9.2 4l-.2.1-.2-.2-.5-.5c-2.4-2.2-5.5-3.4-8.6-3.4C12.3 5 8.9 6.5 6.5 9 1.7 14 1.9 22 7 26.9l18 18 18-18 .5-.5c4.9-5.1 4.7-13.1-.4-17.9z",
        "M15.4 11.1h.3c1.6 0 3.2.6 4.5 1.8l.4.4.2.2 3.5 3.5 4.1-2.7.3-.2.6-.4.5-.5c1.2-1.3 2.9-2 4.8-2 1.7 0 3.3.7 4.5 1.8 1.3 1.2 2 2.8 2 4.6s-.6 3.4-1.8 4.7l-.4.4L25 36.4 11.2 22.7l-.1-.1-.1-.1c-2.7-2.5-2.8-6.7-.3-9.4 1.3-1.3 3-2 4.7-2m0-6c-3.4 0-6.6 1.5-8.9 4C1.7 14.1 1.9 22 7 27l18 18 18-18 .5-.5c4.8-5.1 4.6-13.1-.5-17.9-2.4-2.2-5.5-3.4-8.6-3.4-3.4 0-6.8 1.4-9.2 4H25l-.2-.2-.5-.5c-2.4-2.2-5.5-3.4-8.6-3.4h-.3z"
      ],
      tags: ["heart"]
    },
    {
      paths: [
        "M15 4h20v15.347c4.73 2.247 8 7.068 8 12.653H27v12a2 2 0 1 1-4 0V32H7c0-5.585 3.27-10.406 8-12.653V4Z",
        "M43 32c0-1.39-.203-2.733-.58-4A14.037 14.037 0 0 0 35 19.347V4H15v15.347A14.038 14.038 0 0 0 7.58 28 14.003 14.003 0 0 0 7 32h16v12a2 2 0 1 0 4 0V32h16Zm-26.284-9.04L19 21.875V8h12v13.875l2.284 1.085A10.038 10.038 0 0 1 38.168 28H11.832a10.038 10.038 0 0 1 4.884-5.04Z"
      ],
      tags: ["pin"]
    },
    {
      paths: ["M2 6V2h24v4H2zm12 2l-2.8 2.8-7.1 7.1 2.8 2.8 5.1-5V26h4V15.7l5.1 5 2.8-2.8-7.1-7.1L14 8z"],
      tags: ["import"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M24.6 18l3.4 3.4 4.4-4.4v25.2h4.8V17l4.4 4.4L45 18l-6.8-6.8-3.4-3.4L24.6 18zM5 32l3.4-3.4 4.4 4.4V7.8h4.8V33l4.4-4.4 3.4 3.4-6.8 6.8-3.4 3.4L5 32z"
      ],
      tags: ["reverse-y"]
    },
    {
      paths: [
        "M32 24.6L28.6 28l4.4 4.4H7.8v4.8H33l-4.4 4.4L32 45l6.8-6.8 3.4-3.4L32 24.6zM18 5l3.4 3.4-4.4 4.4h25.2v4.8H17l4.4 4.4-3.4 3.4-6.8-6.8-3.4-3.4L18 5z"
      ],
      tags: ["reverse-x"]
    },
    {
      paths: [
        "M37 9H11c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2zM11.6 37c-.3 0-.6-.3-.6-.6V11.6c0-.3.3-.6.6-.6h24.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6H11.6z",
        "M38 5H10c-.6 0-1 .4-1 1s.4 1 1 1h28c.6 0 1-.4 1-1s-.4-1-1-1zm0 36H10c-.6 0-1 .4-1 1s.4 1 1 1h28c.6 0 1-.4 1-1s-.4-1-1-1z",
        "M29 16H15c-.6 0-1-.4-1-1s.4-1 1-1h14c.6 0 1 .4 1 1s-.4 1-1 1z"
      ],
      tags: ["element-accordion"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M39 21H21C19.3 21 18 22.3 18 24V34C18 35.7 19.3 37 21 37H29C29.3 37 29.6 37.1 29.8 37.4L33 41.7L36.2 37.4C36.4 37.2 36.7 37 37 37H39C40.7 37 42 35.7 42 34V24C42 22.3 40.7 21 39 21ZM40 34C40 34.6 39.6 35 39 35H37C36.1 35 35.2 35.4 34.6 36.2L33 38.3L31.4 36.2C30.8 35.4 29.9 35 29 35H21C20.4 35 20 34.6 20 34V24C20 23.4 20.4 23 21 23H39C39.6 23 40 23.4 40 24V34Z",
        "M9 11C7.3 11 6 12.3 6 14V24C6 25.7 7.3 27 9 27H16V25H9C8.4 25 8 24.6 8 24V14C8 13.4 8.4 13 9 13H27C27.6 13 28 13.4 28 14V19H30V14C30 12.3 28.7 11 27 11H9Z"
      ],
      tags: ["element-comments"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M33 13H7c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2V15c0-1.1-.9-2-2-2zm-.6 28H7.6c-.3 0-.6-.3-.6-.6V15.6c0-.3.3-.6.6-.6h24.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6z",
        "M31.1 27.9l-3.5-3.5-9.8 9.7-4.5-4.5-1.4 1.4-3 3.1 1.4 1.4 3-3 4.5 4.4 9.8-9.7 2.1 2.1 1.4-1.4zM14.9 21c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .5-1 1-1m0-2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z",
        "M37 9H11c-1.1 0-2 .9-2 2v2h2v-1.4c0-.3.3-.6.6-.6h24.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6H35v2h2c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2z",
        "M41 5H15c-1.1 0-2 .9-2 2v2h2V7.6c0-.3.3-.6.6-.6h24.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6H39v2h2c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z"
      ],
      tags: ["element-gallery"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M17.4 9.8c-.5.3-1 .6-1.3 1.1-.3.5-.5 1-.5 1.6 0 1 .3 1.8 1 2.4.7.6 1.6.9 2.8.9 1.2 0 2.1-.3 2.8-.9s1-1.4 1-2.4c0-.6-.2-1.2-.5-1.6-.3-.5-.8-.8-1.3-1.1.4-.2.7-.5 1-.8h-6c.2.3.6.6 1 .8zm.9 1.4c.3-.3.7-.4 1.1-.4.5 0 .9.1 1.2.4.3.3.4.7.4 1.2s-.1.9-.4 1.2c-.3.3-.7.4-1.2.4s-.9-.1-1.2-.4-.4-.7-.4-1.2.2-.9.5-1.2zM30.1 9.3c-.1.3-.3.5-.6.7s-.6.3-.9.3c-.5 0-.9-.2-1.2-.6-.2-.2-.3-.4-.4-.7h-2.3c.1.8.4 1.4.8 2 .6.7 1.4 1 2.4 1 .8 0 1.5-.3 2.1-.9-.2 1.8-1.2 2.7-3.2 2.8h-.5v1.9h.6c1.7-.1 3.1-.7 4-1.7.9-1.1 1.4-2.6 1.4-4.5V9H30v.3z",
        "M17.7 26.9h-.5v1.9h.6c1.7-.1 3.1-.7 4-1.7.9-1.1 1.4-2.6 1.4-4.5v-.8c0-.9-.2-1.7-.5-2.4s-.8-1.2-1.4-1.6c-.6-.4-1.3-.6-2-.6s-1.4.2-2 .5c-.6.3-1 .8-1.4 1.5-.3.6-.5 1.3-.5 2.1 0 1.2.3 2.1.9 2.8.6.7 1.4 1 2.4 1 .8 0 1.5-.3 2.1-.9-.1 1.7-1.1 2.6-3.1 2.7zm2.6-3.9c-.3.2-.6.3-.9.3-.5 0-.9-.2-1.2-.6-.3-.4-.4-.9-.4-1.5s.1-1.1.4-1.6c.3-.4.7-.6 1.1-.6.5 0 .9.2 1.2.6.3.4.4 1 .4 1.8v.9c-.1.3-.3.5-.6.7zM28.6 28.8c1.3 0 2.2-.4 2.9-1.3s1-2 1-3.6v-2.1c0-1.5-.4-2.7-1-3.5-.7-.8-1.6-1.2-2.8-1.2s-2.2.4-2.8 1.2c-.7.8-1 2-1 3.6V24c0 1.5.4 2.7 1 3.5s1.5 1.3 2.7 1.3zM27 21.5c0-.9.1-1.5.4-1.9.3-.4.6-.6 1.2-.6.5 0 .9.2 1.2.6s.4 1.1.4 2.1v2.7c0 .9-.1 1.6-.4 2s-.7.6-1.2.6c-.6 0-1-.2-1.2-.7-.3-.5-.4-1.1-.4-2.1v-2.7z",
        "M23.2 35.6v-.8c0-.9-.2-1.7-.5-2.4s-.8-1.2-1.4-1.6c-.6-.4-1.3-.6-2-.6s-1.4.2-2 .5c-.6.3-1 .8-1.4 1.5-.3.6-.5 1.3-.5 2.1 0 1.2.3 2.1.9 2.8.6.7 1.4 1 2.4 1 .8 0 1.5-.3 2.1-.9-.1.8-.3 1.4-.8 1.9h2.4c.5-1 .8-2.2.8-3.5zm-2.3-.3c-.1.3-.3.5-.6.7-.3.2-.6.3-.9.3-.5 0-.9-.2-1.2-.6-.3-.4-.4-.9-.4-1.5s.1-1.1.4-1.6c.3-.4.7-.6 1.1-.6.5 0 .9.2 1.2.6.3.4.4 1 .4 1.8v.9zM30.3 30.3H30L25.3 32v1.8L28 33v6h2.3z"
      ],
      tags: ["element-counter-free"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M36.3 25.9H30l2 2.1c-1.5 2.3-3.9 3.9-6.6 4.3V18.2c1.6-.6 2.9-2.2 2.9-4-.1-2.3-2-4.2-4.3-4.2s-4.2 1.9-4.2 4.2c0 1.9 1.2 3.4 2.9 4v14.1c-2.7-.4-5.1-1.9-6.6-4.3l2.1-2.1h-6.4v6.3L14 30c2 2.9 5.2 4.7 8.6 5.1v1.6c0 .8.6 1.4 1.4 1.4s1.4-.6 1.4-1.4v-1.5c3.5-.4 6.6-2.2 8.6-5.1l2.2 2.2v-6.4z"
      ],
      tags: ["element-anchor-point"],
      viewBox: ["0 0 48 48"]
    },
    {
      circle: ['cx="24" cy="30.5" r="1.5"', 'cx="19" cy="30.5" r="1.5"', 'cx="29" cy="30.5" r="1.5"'],
      paths: ["M11 13h2v2h-2z", "M9 13h2v22H9zM11 33h2v2h-2zM37 13h2v22h-2zM35 13h2v2h-2zM35 33h2v2h-2z"],
      tags: ["element-shortcode"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M34.3 23.1c-.3 0-.7 0-1 .1-.4-4.3-4-7.6-8.4-7.6-.5 0-.9.4-.9.9v15c0 .5.4.9.9.9h9.4c2.6 0 4.7-2.1 4.7-4.7 0-2.5-2.1-4.6-4.7-4.6zM21.2 17.4c-.5 0-.9.4-.9.9v13.1c0 .5.4.9.9.9s.9-.4.9-.9v-13c0-.5-.4-1-.9-1zM17.4 21.2c-.5 0-.9.4-.9.9v9.4c0 .5.4.9.9.9s.9-.4.9-.9v-9.4c.1-.5-.3-.9-.9-.9zM13.7 21.2c-.5 0-.9.4-.9.9v9.4c0 .5.4.9.9.9s.9-.4.9-.9v-9.4c0-.5-.4-.9-.9-.9zM9.9 24c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9s.9-.4.9-.9v-5.6c.1-.5-.3-.9-.9-.9z"
      ],
      tags: ["element-soundcloud"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M41.6 28c.2.9.2 2-.2 3.2-1 3.1-3.4 8.8-4.3 10.9 3.5-1.6 5.9-5 5.9-9.1 0-1.8-.5-3.5-1.4-5zM24.3 29h-.5c-.5 1.1-.8 2.6-.8 4 0 4.1 2.5 7.6 6.1 9.1l-3.8-12.5s-.5-.6-1-.6zM30.6 42.7c.8.2 1.5.3 2.4.3.8 0 1.7-.1 2.4-.3l-2.2-6.2-2.6 6.2z",
        "M37.9 29.7c-1.7-1.1-1.3-3.1 0-3.9.6-.3 1.1-.4 1.6-.3-1.7-1.5-4-2.5-6.5-2.5-3.9 0-7.2 2-8.9 5.1h5.1v.9h-.1c-.1 0-.3.2-.4.3-.1.1-.2.7-.2.7l2.1 8.7 1.9-4.3-.9-2.9c-.3-.9-.6-1.7-.8-2-.2-.2-.4-.5-.6-.5H30v-.9h6v.9h-1c-.2 0-.3.2-.4.3-.1.1-.2.4-.2.6 0 .2.1.7.1.7l2.3 8s2.4-4.6 2.4-5.6c.1-1-.3-2.6-1.3-3.3z",
        "M11.6 37c-.3 0-.6-.3-.6-.6V19h26v2.7c.7.2 1.4.6 2 .9V11c0-1.1-.9-2-2-2H11c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h11.6c-.4-.6-.7-1.3-.9-2H11.6zM11 11.6c0-.3.3-.6.6-.6h24.8c.3 0 .6.3.6.6V17H11v-5.4z"
      ],
      tags: ["element-wp"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M35 19v15.4c0 .3-.3.6-.6.6H13.6c-.3 0-.6-.3-.6-.6V19h-2v16c0 1.1.9 2 2 2h22c1.1 0 2-.9 2-2V19h-2zM37 11H11c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-.6 6H11.6c-.3 0-.6-.3-.6-.6v-2.8c0-.3.3-.6.6-.6h24.8c.3 0 .6.3.6.6v2.8c0 .3-.3.6-.6.6z",
        "M27.5 26h-7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h7c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z",
        "M40 25c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1v-5c0-.6-.4-1-1-1z",
        "M19.5 40c0-.6-.4-1-1-1h-5c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1z"
      ],
      circle: ['cx="40" cy="22" r="1"', ' cx="22.5" cy="40" r="1" fill="currentColor"'],
      tags: ["element-archive"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M14.8 16c.1-.1.3-.2.4-.4.2-.1.3-.2.5-.4.3-.2.5-.4.7-.5s.4-.4.6-.6c.2-.2.3-.5.4-.8.1-.3.2-.6.2-1 0-.3-.1-.6-.2-.9-.1-.3-.3-.5-.5-.7-.2-.2-.5-.3-.8-.4-.3-.1-.7-.2-1.1-.2-.8 0-1.6.2-2.3.7v1.5c.6-.5 1.2-.8 1.9-.8.4 0 .7.1.9.3.2.2.3.4.3.8 0 .2 0 .3-.1.5-.1.1-.1.3-.3.4l-.4.4c-.2.1-.4.3-.6.5-.2.2-.4.3-.7.5-.2.2-.5.4-.7.7-.2.3-.4.5-.5.8-.1.3-.2.7-.2 1.1v.6h5.2v-1.4h-3.3c0-.1 0-.2.1-.3.3-.1.4-.3.5-.4zM23.6 15.2v-4.9H22c-.2.4-.4.8-.7 1.2-.3.4-.5.9-.8 1.3l-.9 1.2c-.3.4-.6.8-.9 1.1v1.3h3.4V18h1.6v-1.6h.9v-1.3h-1zm-1.5 0h-1.8c.2-.2.3-.4.5-.6.2-.2.3-.4.5-.7.2-.2.3-.5.5-.7.1-.2.3-.5.4-.7v2.7z",
        "M29.5 24.3h-21c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z",
        "M39.5 24.3h-31c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h31c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z",
        "M39.5 31.3h-31c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h31c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z",
        "M33.5 31.3h-25c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h25c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z",
        "M39.5 38.3h-31c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h31c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z",
        "M21.5 38.3h-13c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h13c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"
      ],
      tags: ["element-bar-counter"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M10 18h28v12H10z",
        "M17 23h14v2H17z",
        "M31 37.4v-4.2s0-1.2-.7-1.2-.8 1.1-.8 1.1l-.1 1c0 .1-.1.4-.4.4-.2 0-.4-.2-.4-.4l-.1-2.1c0-.4-.3-1-.8-1-.6 0-.8.7-.8 1l-.2 2.2s0 .4-.3.4c-.2 0-.4-.2-.4-.4l-.1-2.3c0-.5-.2-1.2-.8-1.2-.6 0-.8.8-.8 1.2l-.1 2.4c0 .2-.1.4-.4.4-.2 0-.4-.1-.4-.4l-.1-2-.1-4.7c0-.5-.2-1.2-.8-1.2-.7 0-.8.7-.9 1.1l-.6 10.4-1-2.4-.9-1s-.5-.6-1.1-.8c-.3-.1-.7-.1-.9.2-.2.3.2 1 .2 1l.6 1.1c.5.9 1.2 2.3 1.6 3.7 1.1 3 2.8 5 2.8 5H28.4c2.6-3.4 2.6-7.3 2.6-7.3z"
      ],
      tags: ["element-button"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M28 9H2c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2zM2.6 37c-.3 0-.6-.3-.6-.6V11.6c0-.3.3-.6.6-.6h24.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6H2.6z",
        "M48 9H36c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h12v-2H36.6c-.3 0-.6-.3-.6-.6V11.6c0-.3.3-.6.6-.6H48V9z"
      ],
      tags: ["element-carousel"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M46 9H36c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2zm-.6 28h-8.8c-.3 0-.6-.3-.6-.6V11.6c0-.3.3-.6.6-.6h8.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6z",
        "M29 9H19c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2zm-.6 28h-8.8c-.3 0-.6-.3-.6-.6V11.6c0-.3.3-.6.6-.6h8.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6z",
        "M12 9H2c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2zm-.6 28H2.6c-.3 0-.6-.3-.6-.6V11.6c0-.3.3-.6.6-.6h8.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6z"
      ],
      tags: ["element-column"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M20.3 26.3h3v1.3h-4.7V27c0-.4.1-.7.2-1s.3-.5.5-.8.4-.4.6-.6.4-.3.6-.5c.2-.1.4-.3.5-.4l.4-.4c.1-.1.2-.3.2-.4s.1-.3.1-.4c0-.3-.1-.5-.3-.7s-.4-.2-.8-.2c-.6 0-1.2.2-1.7.7V21c.6-.4 1.3-.6 2.1-.6.4 0 .7 0 1 .1s.5.2.7.4.3.4.4.6.2.5.2.8c0 .3 0 .6-.1.9s-.2.5-.4.7l-.6.6c-.2.2-.4.3-.7.5-.2.1-.3.2-.5.3s-.3.2-.4.3l-.3.3c-.1.1 0 .3 0 .4zM28.6 20.6V25h.8v1.2h-.8v1.4h-1.4v-1.4h-3.1V25c.3-.3.6-.6.8-1s.6-.7.8-1.1.5-.8.8-1.1.4-.8.6-1.1h1.5zM25.5 25h1.7v-2.4c-.1.2-.2.4-.4.6s-.3.4-.4.6-.3.4-.4.6-.4.4-.5.6z",
        "M11 24c0-7.2 5.8-13 13-13 3.1 0 5.9 1.1 8.1 2.9l1.4-1.4c-.1-.1-.2-.1-.3-.2C30.7 10.2 27.5 9 24 9 15.7 9 9 15.7 9 24s6.7 15 15 15v-2c-7.2 0-13-5.8-13-13z"
      ],
      tags: ["element-circle-counter"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M11.64 16.98c-.85 0-1.5.28-1.96.85-.45.57-.68 1.4-.68 2.49v1.44c.01 1.05.24 1.85.69 2.42.45.56 1.1.84 1.96.84.86 0 1.52-.29 1.97-.86.45-.57.67-1.4.67-2.48v-1.44c-.01-1.05-.24-1.85-.69-2.41s-1.11-.85-1.96-.85zm1.09 4.97c-.01.61-.09 1.07-.26 1.37-.17.3-.44.45-.82.45-.38 0-.66-.16-.83-.46-.17-.31-.26-.78-.26-1.42v-1.9c.01-.6.1-1.04.28-1.32.17-.28.44-.42.81-.42.38 0 .65.15.83.44.18.3.27.77.27 1.42v1.84zm7.17-4.13c-.45-.56-1.1-.84-1.96-.84s-1.5.28-1.96.85c-.45.57-.68 1.39-.68 2.49v1.44c.01 1.05.24 1.85.69 2.42.45.56 1.1.84 1.96.84.86 0 1.52-.29 1.97-.86.45-.57.67-1.4.67-2.48v-1.44c0-1.05-.24-1.86-.69-2.42zm-.86 4.13c-.01.61-.09 1.07-.26 1.37-.17.3-.44.45-.82.45-.38 0-.66-.16-.83-.46-.17-.31-.26-.78-.26-1.42v-1.9c.01-.6.1-1.04.28-1.32.17-.28.44-.42.81-.42.38 0 .65.15.83.44.18.3.27.77.27 1.42v1.84zm5.47.65c.17.15.25.35.25.6 0 .24-.08.44-.25.59-.17.15-.38.23-.63.23s-.46-.08-.63-.23c-.17-.14-.25-.34-.25-.58 0-.25.08-.45.25-.6.17-.15.38-.23.63-.23.25-.01.46.07.63.22zm-1.26-3.2a.75.75 0 01-.25-.59c0-.25.08-.45.25-.6.17-.15.38-.23.63-.23s.46.08.63.23c.17.15.25.35.25.6 0 .24-.08.44-.25.59s-.38.23-.63.23c-.26 0-.47-.08-.63-.23zm8.34-1.58c-.45-.56-1.1-.84-1.96-.84s-1.5.28-1.96.85-.67 1.4-.67 2.49v1.44c.01 1.05.24 1.85.69 2.42s1.1.84 1.96.84c.86 0 1.52-.29 1.97-.86s.67-1.4.67-2.48v-1.44c-.01-1.05-.25-1.86-.7-2.42zm-.86 4.13c-.01.61-.09 1.07-.26 1.37-.17.3-.44.45-.82.45-.38 0-.66-.15-.83-.46s-.26-.78-.26-1.42v-1.9c.01-.6.1-1.04.28-1.32.17-.28.44-.42.81-.42.38 0 .65.15.83.44.18.3.27.77.27 1.42v1.84zM37.2 26h-1.55v-3.22l-1.85.58V22.1l3.24-1.16h.17V26zm-1.55-5.98c.86 0 1.52-.29 1.97-.86s.67-1.4.67-2.48V16h-1.55v.95c-.01.61-.09 1.07-.26 1.37-.17.3-.44.45-.82.45-.38 0-.66-.15-.83-.46s-.26-.78-.26-1.42V16H33v.76c.01 1.05.24 1.85.69 2.42s1.11.84 1.96.84z",
        "M44 30V13.98c0-2.2-1.78-3.98-3.98-3.98H7.99C5.79 10 4 11.79 4 13.99V30H0v8h4c.55 0 1-.45 1-1s-.45-1-1-1H2v-4h29c.55 0 1-.45 1-1s-.45-1-1-1H6v-2h36v2h-1c-.55 0-1 .45-1 1s.45 1 1 1h5v4H14c-.55 0-1 .45-1 1s.45 1 1 1h34v-8h-4zm-2-4H6V16h36v10zm0-12H6v-.01c0-1.1.89-1.99 1.99-1.99h32.03c1.09 0 1.98.89 1.98 1.98V14zM11 37c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1zm24-5c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1h-2z"
      ],
      tags: ["element-countdown"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M24 5C13.51 5 5 13.51 5 24s8.51 19 19 19 19-8.51 19-19S34.49 5 24 5zm0 36c-9.37 0-17-7.63-17-17S14.63 7 24 7s17 7.63 17 17-7.63 17-17 17z",
        "M28.38 26.45c-1.08 0-2.05.5-2.72 1.26l-4.62-2.66a3.616 3.616 0 00.06-1.84l4.7-2.72c.64.67 1.58 1.11 2.6 1.11 1.99 0 3.6-1.6 3.6-3.59 0-1.99-1.64-3.65-3.62-3.65-1.99 0-3.59 1.61-3.59 3.59 0 .12 0 .26.03.38l-4.97 2.86c-.61-.5-1.4-.79-2.25-.79-1.99.01-3.6 1.61-3.6 3.6s1.61 3.59 3.59 3.59c.79 0 1.49-.26 2.1-.67l5.11 2.92v.18c-.06 2.02 1.58 3.62 3.56 3.62 1.99 0 3.59-1.61 3.59-3.59.02-1.99-1.59-3.6-3.57-3.6zm0-9.76c.7 0 1.26.56 1.26 1.26s-.56 1.26-1.26 1.26-1.26-.56-1.26-1.26.56-1.26 1.26-1.26zm-10.82 8.57c-.7 0-1.26-.56-1.26-1.26s.56-1.26 1.26-1.26 1.26.56 1.26 1.26-.55 1.26-1.26 1.26zm10.82 6.05c-.7 0-1.26-.56-1.26-1.26s.56-1.29 1.26-1.29 1.26.56 1.26 1.26-.56 1.29-1.26 1.29z"
      ],
      tags: ["element-social-share"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M17 31c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1zm23-15H8c-4.42 0-8 3.58-8 8s3.58 8 8 8h2c.55 0 1-.45 1-1s-.45-1-1-1H8c-3.31 0-6-2.69-6-6s2.69-6 6-6h32c3.31 0 6 2.69 6 6s-2.69 6-6 6H20c-.55 0-1 .45-1 1s.45 1 1 1h20c4.42 0 8-3.58 8-8s-3.58-8-8-8z",
        "M21 25H7c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z",
        "M39.88 20.7a4.008 4.008 0 00-5.66 0 4.008 4.008 0 000 5.66 3.991 3.991 0 004.85.61l1.51 1.51L42 27.06l-1.51-1.51c.9-1.54.71-3.54-.61-4.85zm-1.42 4.24c-.78.78-2.05.78-2.83 0-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0c.78.78.78 2.05 0 2.83z"
      ],
      tags: ["element-search-form"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M18 22.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm6 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm6 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-15.5-7l-7.1 7.1L6 24l1.4 1.4 7.1 7.1 1.4-1.4L8.8 24l7.1-7.1-1.4-1.4zm26.1 7.1l-7.1-7.1-1.4 1.4 7.1 7.1-7.1 7.1 1.4 1.4 7.1-7.1L42 24l-1.4-1.4z"
      ],
      tags: ["element-pagination"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M38 43H14c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h15.9C36 5 41 10 41 16.1V40c0 1.7-1.3 3-3 3zM14 7c-.6 0-1 .4-1 1v32c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V16.1c0-5-4.1-9.1-9.1-9.1H14z",
        "M31 37H9c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2h22c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2z",
        "M14.7 33.1h-1.1v-2h-2v2h-1.1v-4.9h1.1v2h2v-2h1.1v4.9zm4.6-4.1h-1.4v4h-1.1v-4h-1.4v-.9h3.9v.9zm6.2 4.1h-1.1v-2.9-1c-.1.3-.1.5-.1.6l-1.1 3.3h-.9l-1.2-3.3c0-.1-.1-.3-.2-.7v4h-1v-4.9h1.6l1 2.9c.1.2.1.5.2.7.1-.3.1-.5.2-.7l1-2.9h1.6v4.9zm4.1 0h-2.9v-4.9h1.1v4h1.8v.9z"
      ],
      tags: ["element-code"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M37 9H11c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2zm-.6 28H11.6c-.3 0-.6-.3-.6-.6V11.6c0-.3.3-.6.6-.6h24.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6z"
      ],
      tags: ["element-default"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M38 23H10c-.6 0-1 .4-1 1s.4 1 1 1h28c.6 0 1-.4 1-1s-.4-1-1-1z",
        "M24 13.2c-.5 0-1 .2-1.4.6l-3.5 3.5c-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3l3.1-3.1c.1-.1.3-.2.4-.2s.3.1.4.2l3.1 3.1c.2.2.5.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-3.5-3.5c-.4-.4-.9-.6-1.4-.6z",
        "M28.2 29c-.3 0-.5.1-.7.3l-3.1 3.1c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-3.1-3.1c-.2-.2-.5-.3-.7-.3-.3 0-.5.1-.7.3-.4.4-.4 1 0 1.4l3.5 3.5c.4.4.9.6 1.4.6s1-.2 1.4-.6l3.5-3.5c.4-.4.4-1 0-1.4-.1-.2-.4-.3-.7-.3z"
      ],
      tags: ["element-divider"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M37 8H11c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm-.6 5H11.6c-.3 0-.6-.3-.6-.6v-1.8c0-.3.3-.6.6-.6h24.8c.3 0 .6.3.6.6v1.8c0 .3-.3.6-.6.6zM37 17H11c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2V19c0-1.1-.9-2-2-2zm-.6 14H11.6c-.3 0-.6-.3-.6-.6V19.6c0-.3.3-.6.6-.6h24.8c.3 0 .6.3.6.6v10.8c0 .3-.3.6-.6.6z",
        "M23 38c0 1.1-.9 2-2 2H11c-1.1 0-2-.9-2-2v-1c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v1z"
      ],
      tags: ["element-form"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M32 21.2c0-.2-.3-.4-.5-.4l-4.8-.7-2.2-4.4c-.1-.3-.4-.4-.6-.3h-.1l-.3.3-2.2 4.4-4.8.7c-.3 0-.5.3-.5.6 0 .1.1.3.2.4l3.5 3.4-.9 4.8c0 .3.2.6.5.6h.4l4.3-2.3 4.3 2.3h.6c.2-.1.3-.3.3-.5l-.9-4.9 3.5-3.4c.2-.2.2-.4.2-.6z"
      ],
      circle: ['cx="24" cy="24" r="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"'],
      tags: ["element-icon"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M38 36c0 1.1-.9 2-2 2H12c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v24z",
        "M35.2 25.5L31.7 22l-9.8 9.7-4.5-4.5-1.4 1.4-3 3.1 1.4 1.4 3-3 4.5 4.4 9.8-9.7 2.1 2.1zM19 18.6c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .5-1 1-1m0-2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
      ],
      tags: ["element-image"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M30 34c.5 0 1-.5 1-1s-.5-1-1-1H18c-.5 0-1 .5-1 1s.5 1 1 1h12zM33 36H15c-.5 0-1 .5-1 1s.5 1 1 1h18c.5 0 1-.5 1-1s-.5-1-1-1zM33 40H15c-.5 0-1 .5-1 1s.5 1 1 1h18c.5 0 1-.5 1-1s-.5-1-1-1zM34.4 6H13.6c-.9 0-1.6.7-1.6 1.6v20.8c0 .9.7 1.6 1.6 1.6h20.8c.9 0 1.6-.7 1.6-1.6V7.6c0-.9-.7-1.6-1.6-1.6zm0 21.9c0 .2-.2.5-.5.5H14.1c-.2 0-.5-.2-.5-.5V8.1c0-.2.2-.5.5-.5h19.8c.2 0 .5.2.5.5v19.8z",
        "M19.9 15.4c1.4 0 2.4-1 2.4-2.4s-1-2.4-2.4-2.4-2.4 1-2.4 2.4 1.1 2.4 2.4 2.4zm0-3.2c.5 0 .8.3.8.8s-.3.8-.8.8-.8-.3-.8-.8.4-.8.8-.8zM22.2 22.7l-3.6-3.6-1.1 1.1-2.4 2.5 1.1 1.1 2.4-2.4 3.6 3.5 7.9-7.7 1.7 1.7 1.1-1.2-2.8-2.8z"
      ],
      tags: ["element-image-box"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M33 13H7c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2V15c0-1.1-.9-2-2-2zm-.6 28H7.6c-.3 0-.6-.3-.6-.6V15.6c0-.3.3-.6.6-.6h24.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6z",
        "M31.1 27.9l-3.5-3.5-9.8 9.7-4.5-4.5-1.4 1.4-3 3.1 1.4 1.4 3-3 4.5 4.4 9.8-9.7 2.1 2.1 1.4-1.4zM14.9 21c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .5-1 1-1m0-2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z",
        "M37 9H11c-1.1 0-2 .9-2 2v2h2v-1.4c0-.3.3-.6.6-.6h24.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6H35v2h2c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2z",
        "M41 5H15c-1.1 0-2 .9-2 2v2h2V7.6c0-.3.3-.6.6-.6h24.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6H39v2h2c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z"
      ],
      tags: ["element-image-gallery"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M34.3 25.5l4.6 9.5c.2.4 0 .7-.4.7h-29c-.4 0-.6-.3-.4-.7l4.6-9.5c.1-.2.3-.3.4-.3h4c.1 0 .3.1.4.2.3.3.5.6.8.9.3.3.5.6.8.9h-4.7c-.2 0-.4.1-.4.3l-3.1 6.3h24.3l-3.1-6.3c-.1-.2-.3-.3-.4-.3H28c.3-.3.5-.6.8-.9.3-.3.5-.6.8-.9.1-.1.2-.2.4-.2h4c0 .1.2.2.3.3zm-3.5-6.4c0 5.2-4.3 6.2-6.3 11.1-.2.4-.7.4-.9 0-1.8-4.5-5.5-5.7-6.2-9.7-.7-3.9 2-7.8 6-8.2 4-.4 7.4 2.8 7.4 6.8zm-3.2 0c0-2-1.6-3.6-3.6-3.6s-3.6 1.6-3.6 3.6 1.6 3.6 3.6 3.6 3.6-1.7 3.6-3.6z"
      ],
      tags: ["element-map"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: ["M38 36c0 1.1-.9 2-2 2H12c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v24z", "M30.2 24l-10.4-6v12z"],
      tags: ["element-media"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M36.9 24h-6.4V13.3c0-1.2-1-2.1-2.1-2.1H11.1c-1.2 0-2.1 1-2.1 2.1v18.2c0 3 2.4 5.4 5.4 5.4h19.3c3 0 5.4-2.4 5.4-5.4v-5.4C39 25 38 24 36.9 24zM14.4 34.7c-1.8 0-3.2-1.4-3.2-3.2V13.3h17.1V31.5c0 1.2.4 2.4 1.1 3.2h-15zm22.5-3.2c0 1.8-1.4 3.2-3.2 3.2-1.8 0-3.2-1.4-3.2-3.2v-5.4h6.4v5.4z",
        "M25.1 16.5h-5.4c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h5.4c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1zM25.1 20.8h-5.4c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h5.4c.6 0 1.1-.5 1.1-1.1-.1-.6-.5-1.1-1.1-1.1zM25.1 25.1H14.4c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h10.7c.6 0 1.1-.5 1.1-1.1-.1-.6-.5-1.1-1.1-1.1zM25.1 29.4H14.4c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h10.7c.6 0 1.1-.5 1.1-1.1-.1-.7-.5-1.1-1.1-1.1z"
      ],
      tags: ["element-newsletter"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M34 5H14c-1.1 0-2 .9-2 2v34c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-.6 36H14.6c-.3 0-.6-.3-.6-.6V7.6c0-.3.3-.6.6-.6h18.8c.3 0 .6.3.6.6v32.8c0 .3-.3.6-.6.6z",
        "M28 29h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1zM28 33h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1zM28 37h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z",
        "M24.9 21.7c.8-.2 1.5-.6 1.8-1.4.7-1.6 0-2.7-1.6-3.5l-.8-.4-.8-.4c-1-.5-1.2-.9-.9-1.6.4-.8 2.1-.8 2.7-.3l.6.4.9-1.2-.6-.4c-.3-.2-.8-.4-1.3-.5V11h-1.5v1.3c-.9.1-1.7.6-2.1 1.5-.7 1.6 0 2.7 1.6 3.5l.8.4c.6.3.6.3.7.4 1 .5 1.3.9.9 1.6-.4.8-2.1.8-2.7.3l-.6-.5-.9 1.2.6.4c.4.3 1 .5 1.6.6V23h1.5v-1.3z"
      ],
      tags: ["element-pricing-table"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M46 9H2c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2zM2.6 37c-.3 0-.6-.3-.6-.6V11.6c0-.3.3-.6.6-.6h42.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6H2.6z",
        "M18 22.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM24 22.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM30 22.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z"
      ],
      tags: ["element-section"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M46 9H2C0.9 9 0 9.9 0 11V37C0 38.1 0.9 39 2 39H46C47.1 39 48 38.1 48 37V11C48 9.9 47.1 9 46 9ZM2.6 37C2.3 37 2 36.7 2 36.4V11.6C2 11.3 2.3 11 2.6 11H45.4C45.7 11 46 11.3 46 11.6V36.4C46 36.7 45.7 37 45.4 37H2.6Z",
        "M21 13C19.3431 13 18 14.3431 18 16V32C18 33.6569 19.3431 35 21 35H27C28.6569 35 30 33.6569 30 32V16C30 14.3431 28.6569 13 27 13H21ZM20 16C20 15.4477 20.4477 15 21 15H27C27.5523 15 28 15.4477 28 16V32C28 32.5523 27.5523 33 27 33H21C20.4477 33 20 32.5523 20 32V16ZM7 23C5.34315 23 4 24.3431 4 26V32C4 33.6569 5.34315 35 7 35H13C14.6569 35 16 33.6569 16 32V26C16 24.3431 14.6569 23 13 23H7ZM6 26C6 25.4477 6.44772 25 7 25H13C13.5523 25 14 25.4477 14 26V32C14 32.5523 13.5523 33 13 33H7C6.44772 33 6 32.5523 6 32V26ZM4 16C4 14.3431 5.34315 13 7 13H13C14.6569 13 16 14.3431 16 16V18C16 19.6569 14.6569 21 13 21H7C5.34315 21 4 19.6569 4 18V16ZM7 15C6.44772 15 6 15.4477 6 16V18C6 18.5523 6.44772 19 7 19H13C13.5523 19 14 18.5523 14 18V16C14 15.4477 13.5523 15 13 15H7ZM35 13C33.3431 13 32 14.3431 32 16V32C32 33.6569 33.3431 35 35 35H41C42.6569 35 44 33.6569 44 32V16C44 14.3431 42.6569 13 41 13H35ZM34 16C34 15.4477 34.4477 15 35 15H41C41.5523 15 42 15.4477 42 16V32C42 32.5523 41.5523 33 41 33H35C34.4477 33 34 32.5523 34 32V16Z"
      ],
      tags: ["element-container"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M37 9H27c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2zm-.6 28h-8.8c-.3 0-.6-.3-.6-.6V11.6c0-.3.3-.6.6-.6h8.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6z",
        "M20 9H9v2h10.4c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6H9v2h11c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2z"
      ],
      tags: ["element-sidebar"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M46 13H2c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V15c0-1.1-.9-2-2-2zM2.6 41c-.3 0-.6-.3-.6-.6V15.6c0-.3.3-.6.6-.6h42.8c.3 0 .6.3.6.6v24.8c0 .3-.3.6-.6.6H2.6z",
        "M44 9H4c-.6 0-1 .4-1 1s.4 1 1 1h40c.6 0 1-.4 1-1s-.4-1-1-1zM7 7h34c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1z"
      ],
      tags: ["element-slider"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M33 28c-.1 0-.3 0-.4.1-.2.1-.3.1-.5.1-.8 0-1.6-.6-1.8-1.4l-2-7.4c-.9-3.4-3.9-5.7-7.4-5.7h-.7v-.6c-.2-.8-1-1.2-1.8-1-.8.2-1.2 1-1 1.8.1.2.2.4.3.5-1.4.7-2.6 1.7-3.4 3.1-1 1.8-1.3 3.8-.8 5.8l2 7.4c.1.5.1 1-.2 1.4-.3.4-.7.7-1.1.9-.8.2-1.3 1.1-1.1 1.9.2.7.8 1.2 1.5 1.2.1 0 .3 0 .4-.1l6.3-1.7c.6.9 1.6 1.5 2.7 1.5.3 0 .6 0 .8-.1 1.4-.4 2.3-1.6 2.4-2.9l6.2-1.7c.4-.1.8-.4 1-.7.2-.4.3-.8.2-1.2-.2-.7-.8-1.2-1.6-1.2zm-16.3 5.6c.2-.2.3-.4.4-.6.5-.9.6-1.9.4-2.9l-2-7.4c-.4-1.5-.2-3 .6-4.4.8-1.3 2-2.3 3.5-2.7.5-.1 1-.2 1.5-.2 2.6 0 4.9 1.7 5.5 4.2l2 7.4c.3 1.2 1.2 2.2 2.4 2.6l-14.3 4zM29.1 16.9c.3 0 .5-.1.7-.3l2-2c.4-.4.4-1 0-1.3-.4-.4-1-.4-1.3 0l-2 2c-.4.4-.4 1 0 1.3.1.2.3.3.6.3zM33.8 19.7H31c-.5 0-1 .4-1 1s.4 1 1 1h2.8c.5 0 1-.4 1-1s-.4-1-1-1zM30.5 18.1c.2.4.5.6.9.6.1 0 .3 0 .4-.1l2.6-1.1c.5-.2.7-.8.5-1.2-.2-.5-.8-.7-1.2-.5l-2.7 1c-.5.2-.7.8-.5 1.3z"
      ],
      tags: ["element-alert"],
      viewBox: ["0 0 48 48"]
    },
    {
      circle: ['cx="24" cy="23.3" r="5.7"'],
      paths: [
        "M24.4 32.6l1.7 6.4H34c0-4.4-3.6-8-8-8l-1.6 1.6zM23.7 32.6L22.1 31H22c-4.4 0-8 3.6-8 8h8.1l1.6-6.4z",
        "M25.7 12.9l1.4-1.4c.1-.1.1-.4-.1-.4-.6-.1-1.3-.2-1.9-.3L24.2 9c-.1-.2-.4-.2-.4 0l-.9 1.8c-.7.1-1.3.2-2 .3-.2 0-.2.3-.1.4l1.4 1.4c-.1.6-.2 1.3-.3 1.9 0 .2.2.4.4.3.6-.3 1.1-.6 1.7-.9.5.3 1.1.6 1.6.9 0 .1.1.1.2.1.2 0 .3-.2.3-.3-.2-.7-.3-1.3-.4-2zM20.8 13c-.5-.1-1-.1-1.5-.2-.2-.4-.4-.9-.6-1.3-.1-.2-.4-.2-.4 0-.2.4-.4.9-.7 1.3-.5.1-1 .1-1.5.2-.2 0-.2.3-.1.4l1 1c-.1.5-.2.9-.2 1.4 0 .2.2.4.4.3.4-.2.9-.4 1.3-.7l1.2.6c0 .1.1.1.2.1s.2-.1.3-.2v-.1c-.1-.5-.2-.9-.2-1.4l1-1c.1-.1 0-.4-.2-.4zM15.7 14.5c-.4-.1-.7-.1-1.1-.2-.2-.3-.3-.6-.5-1-.1-.2-.4-.2-.4 0-.2.3-.3.6-.5 1-.4.1-.7.1-1.1.2-.2 0-.2.3-.1.4.3.2.5.5.8.7-.1.3-.1.7-.2 1 0 .2.2.4.4.3.3-.2.6-.3.9-.5.3.1.6.3.8.4.1.1.2.1.3.1.1-.1.1-.1.1-.3-.1-.3-.1-.7-.2-1 .3-.2.5-.5.8-.7.2-.1.2-.4 0-.4zM31.8 13.1c-.5-.1-1-.1-1.5-.2-.2-.4-.4-.9-.7-1.3-.1-.2-.4-.2-.4 0-.2.4-.4.9-.6 1.3-.5.1-1 .1-1.5.2-.2 0-.2.3-.1.4l1 1c0 .5 0 .9-.1 1.4-.1.1 0 .3.2.3.1 0 .2 0 .3-.1l1.2-.6c.4.2.9.4 1.3.7.2.1.4-.1.4-.3-.1-.5-.2-.9-.2-1.4l1-1c0-.1-.1-.4-.3-.4zM35.8 14.6c-.4-.1-.7-.1-1.1-.2-.2-.3-.3-.6-.5-1-.1-.2-.4-.2-.4 0-.2.3-.3.6-.5 1-.4.1-.7.1-1.1.2-.2 0-.2.3-.1.4.3.2.5.5.8.7-.1.3-.1.6-.2.9-.1.1 0 .3.1.3.1.1.3.1.3 0 .3-.1.6-.3.8-.4.3.2.6.3.9.5.2.1.4-.1.4-.3-.1-.3-.1-.7-.2-1 .3-.2.5-.5.8-.7.3-.1.2-.4 0-.4z"
      ],
      tags: ["element-testimonial"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M46 15H24.6c-.3 0-.6-.3-.6-.6V11c0-1.1-.9-2-2-2H12c-1.1 0-2 .9-2 2v3.4c0 .3-.3.6-.6.6H2c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V17c0-1.1-.9-2-2-2zM2 36.4V17.6c0-.3.3-.6.6-.6H10c1.1 0 2-.9 2-2v-3.4c0-.3.3-.6.6-.6h8.8c.3 0 .6.3.6.6V15c0 1.1.9 2 2 2h21.4c.3 0 .6.3.6.6v18.8c0 .3-.3.6-.6.6H2.6c-.3 0-.6-.3-.6-.6z",
        "M7 11H1c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1zM33 11h-6c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1zM43 11h-6c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1z"
      ],
      tags: ["element-tabs"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M13.3 12h21.4l.2 7.8h-2.1l-.2-2.2c0-1-.4-2-1.1-2.7-.9-.6-2-.9-3.1-.8-.7-.1-1.5.1-2.1.5-.5.7-.7 1.5-.6 2.3v14.2c-.1.8.1 1.6.6 2.3.3.4 1.1.5 2.2.5H30V36H18v-2.1h1.8c.7 0 1.4-.1 2-.5.4-.7.6-1.5.5-2.3V16.9c.1-.8-.1-1.6-.6-2.3-.6-.4-1.4-.6-2.1-.5-1.1-.1-2.2.2-3.1.8-.7.7-1.1 1.7-1.1 2.7l-.2 2.2h-2.1l.2-7.8z"
      ],
      tags: ["element-heading"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M34.6 12H13.2L13 19.8H15.1L15.3 17.6C15.3 16.6 15.7 15.6 16.4 14.9C17.3 14.3 18.4 14 19.5 14.1C20.2 14 21 14.2 21.6 14.6C22.1 15.3 22.3 16.1 22.2 16.9V24H25.6V16.9C25.5 16.1 25.7 15.3 26.2 14.6C26.8 14.2 27.6 14 28.3 14.1C29.4 14 30.5 14.3 31.4 14.9C32.1 15.6 32.5 16.6 32.5 17.6L32.7 19.8H34.8L34.6 12ZM21 36V33.7303C20.5834 33.8602 20.1417 33.9 19.7 33.9H17.9V36H21Z",
        "M23 27C23 26.4477 23.4477 26 24 26H34C34.5523 26 35 26.4477 35 27C35 27.5523 34.5523 28 34 28H24C23.4477 28 23 27.5523 23 27ZM23 31C23 30.4477 23.4477 30 24 30H38C38.5523 30 39 30.4477 39 31C39 31.5523 38.5523 32 38 32H24C23.4477 32 23 31.5523 23 31ZM24 34C23.4477 34 23 34.4477 23 35C23 35.5523 23.4477 36 24 36H38C38.5523 36 39 35.5523 39 35C39 34.4477 38.5523 34 38 34H24Z"
      ],
      tags: ["element-text"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M22 37h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zm12-26H14c-1.7 0-3 1.3-3 3v20c0 1.7 1.3 3 3 3h2c.6 0 1-.4 1-1s-.4-1-1-1h-2c-.6 0-1-.4-1-1V14c0-.6.4-1 1-1h20c.6 0 1 .4 1 1v20c0 .6-.4 1-1 1h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c1.7 0 3-1.3 3-3V14c0-1.7-1.3-3-3-3z",
        "M23.3 29.5c0 .9-.8 1.7-1.7 1.7-.9 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7.9 0 1.7.8 1.7 1.7zm3.3-1.7c-.9 0-1.7.8-1.7 1.7 0 .9.8 1.7 1.7 1.7s1.7-.8 1.7-1.7c0-.9-.8-1.7-1.7-1.7zm2.9-1.7h-8.9l-.2-1h7.3c.2 0 .4-.1.5-.3l1.7-4.4c.1-.3 0-.6-.3-.7H19.4l-.4-2.4c0-.3-.3-.4-.5-.4h-2c-.3 0-.5.2-.5.5s.2.5.5.5h1.6l1.5 8.9c0 .3.3.4.5.4h9.4c.3 0 .5-.2.5-.5s-.2-.6-.5-.6z"
      ],
      tags: ["element-woo-add-to-cart"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M37.4 24l-2.1 2.1-3.9 3.9h-4.2l6-6-6-6h4.2l3.9 3.9 2.1 2.1zM27 21.9L23.1 18h-4.2l6 6-6 6h4.2l3.9-3.9 2.1-2.1-2.1-2.1zm-8.2 0L14.9 18h-4.2l6 6-6 6h4.2l3.9-3.9 2.1-2.1-2.1-2.1z"
      ],
      tags: ["element-woo-breadcrumbs"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M28 17h20v2H28v-2zm0 6h20v-2H28v2zm0 4h16v-2H28v2zm0 4h14v-2H28v2z",
        "M7 30v-8H5v-4h4.2c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2H19v4h-2v8H7zm14-18H3c-1.7 0-3 1.3-3 3v18c0 1.7 1.3 3 3 3h1c.6 0 1-.4 1-1s-.4-1-1-1H3c-.5 0-1-.4-1-1V15c0-.5.4-1 1-1h18c.5 0 1 .4 1 1v18c0 .5-.4 1-1 1h-7c-.6 0-1 .4-1 1s.4 1 1 1h7c1.7 0 3-1.3 3-3V15c0-1.7-1.3-3-3-3zM10 34H8c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1z"
      ],
      tags: ["element-woo-description"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M32 12.1v4.6h-2.3v9.1H18.3v-9.1H16v-4.6h4.8c.5 1.3 1.7 2.3 3.2 2.3s2.7-1 3.2-2.3H32zM36 4H12c-1.7 0-3 1.3-3 3v24c0 1.7 1.3 3 3 3h1c.6 0 1-.4 1-1s-.4-1-1-1h-1c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h24c.6 0 1 .4 1 1v24c0 .6-.4 1-1 1H23c-.6 0-1 .4-1 1s.4 1 1 1h13c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM19 32h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1z",
        "M14.6 36h-3.2C10.1 36 9 37.1 9 38.4v3.2c0 1.3 1.1 2.4 2.4 2.4h3.2c1.3 0 2.4-1.1 2.4-2.4v-3.2c0-1.3-1.1-2.4-2.4-2.4zm.8 5.6c0 .4-.4.8-.8.8h-3.2c-.4 0-.8-.4-.8-.8v-3.2c0-.4.4-.8.8-.8h3.2c.4 0 .8.4.8.8v3.2zM25.6 36h-3.2c-1.3 0-2.4 1.1-2.4 2.4v3.2c0 1.3 1.1 2.4 2.4 2.4h3.2c1.3 0 2.4-1.1 2.4-2.4v-3.2c0-1.3-1.1-2.4-2.4-2.4zm.8 5.6c0 .4-.4.8-.8.8h-3.2c-.4 0-.8-.4-.8-.8v-3.2c0-.4.4-.8.8-.8h3.2c.4 0 .8.4.8.8v3.2zM36.6 36h-3.2c-1.3 0-2.4 1.1-2.4 2.4v3.2c0 1.3 1.1 2.4 2.4 2.4h3.2c1.3 0 2.4-1.1 2.4-2.4v-3.2c0-1.3-1.1-2.4-2.4-2.4zm.8 5.6c0 .4-.4.8-.8.8h-3.2c-.4 0-.8-.4-.8-.8v-3.2c0-.4.4-.8.8-.8h3.2c.4 0 .8.4.8.8v3.2z"
      ],
      tags: ["element-woo-product-images"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M19.5 39.8c0-.2-.1-.4-.3-.5-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.2-.2.1-.2.3-.2.5s.1.4.3.5c.2.1.4.2.7.2l.5.1.9.3c.3.1.5.3.6.6.2.2.2.5.2.8 0 .5-.2 1-.6 1.3-.4.3-1 .5-1.7.5s-1.3-.2-1.7-.5-.6-.8-.7-1.4h1.2c0 .3.1.5.3.7.2.1.5.2.8.2s.6-.1.7-.2c.2-.1.3-.3.3-.5s-.1-.3-.3-.5c-.2-.1-.4-.2-.7-.3l-.6-.2c-.5-.1-.9-.3-1.2-.6-.3-.3-.4-.6-.4-1s.1-.7.3-.9c.2-.3.5-.5.8-.6s.7-.2 1.1-.2c.4 0 .8.1 1.1.2.3.1.6.4.8.6.2.3.3.6.3.9h-1.1v.1zm2 4.1v-5.8h1.2v2.6h.1l2.1-2.6h1.5l-2.2 2.6 2.2 3.2H25l-1.6-2.4-.6.7v1.7h-1.3zm9.2-5.8h1.2v3.8c0 .4-.1.8-.3 1.1s-.5.6-.8.7c-.4.2-.8.3-1.3.3s-.9-.1-1.3-.3c-.4-.2-.6-.4-.8-.7s-.3-.7-.3-1.1v-3.8h1.2v3.7c0 .3.1.6.3.8.2.2.5.3.9.3s.6-.1.9-.3.3-.5.3-.8v-3.7z",
        "M32 12.1v4.6h-2.3v9.1H18.3v-9.1H16v-4.6h4.8c.5 1.3 1.7 2.3 3.2 2.3s2.7-1 3.2-2.3H32zM36 4H12c-1.7 0-3 1.3-3 3v24c0 1.7 1.3 3 3 3h1c.6 0 1-.4 1-1s-.4-1-1-1h-1c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h24c.6 0 1 .4 1 1v24c0 .6-.4 1-1 1H23c-.6 0-1 .4-1 1s.4 1 1 1h13c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM19 32h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1z"
      ],
      tags: ["element-woo-product-meta"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M20 34c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1zm17-21H11C4.9 13 0 17.9 0 24s4.9 11 11 11h2c.6 0 1-.4 1-1s-.4-1-1-1h-2c-5 0-9-4-9-9s4-9 9-9h26c5 0 9 4 9 9s-4 9-9 9H23c-.6 0-1 .4-1 1s.4 1 1 1h14c6.1 0 11-4.9 11-11s-4.9-11-11-11zm-19.5 8.2c.4 0 .7.1 1 .2.3.1.5.3.7.4l.7-1.5c-.3-.3-.7-.5-1.1-.6-.4-.1-.8-.2-1.3-.2-.9 0-1.7.3-2.4.8s-1.1 1.3-1.3 2.3h-.9l-.3.9h1.1v.8h-.8l-.3 1h1.2c.2 1 .7 1.8 1.3 2.3s1.4.8 2.4.8c.4 0 .9-.1 1.2-.2.4-.1.7-.3 1.1-.6l-.7-1.5c-.2.1-.4.2-.6.4-.3.1-.6.2-1 .2s-.8-.1-1.1-.3c-.3-.2-.5-.6-.7-1.1h1.7l.5-1h-2.3v-.4-.4h2.7l.4-.9h-3c.1-.5.4-.9.7-1.1.3-.2.7-.3 1.1-.3zm6.3 5.7h3.7v1.5h-6.2V27l3.1-2.9c.4-.4.7-.7.9-1s.3-.6.3-.9c0-.4-.1-.7-.4-.9-.3-.2-.6-.3-1-.3s-.7.1-1 .4c-.2.2-.4.6-.4 1H21c0-.6.1-1.1.4-1.5.3-.4.6-.7 1.1-1 .5-.2 1-.3 1.6-.3.6 0 1.2.1 1.6.3.5.2.8.5 1.1.9.3.4.4.8.4 1.3 0 .3-.1.7-.2 1-.1.3-.4.7-.7 1.1s-.7.8-1.3 1.3l-1.2 1.4zm11.3-5.1c-.2-.5-.5-1-.8-1.3-.3-.3-.7-.6-1.1-.7-.4-.1-.8-.2-1.3-.2-.7 0-1.2.1-1.7.4s-.9.6-1.1 1.1c-.3.5-.4 1-.4 1.6 0 .5.1 1 .4 1.4.2.4.5.8 1 1s.9.4 1.4.4c.5 0 .9-.1 1.3-.3.4-.2.7-.5.9-.9h.1c0 .9-.2 1.5-.4 2-.3.5-.7.7-1.3.7-.3 0-.6-.1-.8-.3-.2-.2-.4-.4-.4-.7h-1.8c.1.5.2.9.5 1.3s.6.7 1.1.9c.4.2 1 .3 1.5.3.7 0 1.3-.2 1.9-.6.5-.4.9-.9 1.2-1.6.3-.7.4-1.5.4-2.5-.3-.8-.4-1.5-.6-2zm-1.9 1.5c-.1.2-.3.4-.5.6-.2.1-.5.2-.8.2-.4 0-.8-.1-1-.4s-.4-.7-.4-1.1c0-.3.1-.5.2-.8.1-.2.3-.4.5-.5.2-.1.5-.2.8-.2.3 0 .5.1.8.2s.4.3.5.6c.1.2.2.5.2.8-.1.1-.2.3-.3.6z"
      ],
      tags: ["element-woo-product-price"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M32 12.1v4.6h-2.3v9.1H18.3v-9.1H16v-4.6h4.8c.5 1.3 1.7 2.3 3.2 2.3s2.7-1 3.2-2.3H32zM36 4H12c-1.7 0-3 1.3-3 3v24c0 1.7 1.3 3 3 3h1c.6 0 1-.4 1-1s-.4-1-1-1h-1c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h24c.6 0 1 .4 1 1v24c0 .6-.4 1-1 1H23c-.6 0-1 .4-1 1s.4 1 1 1h13c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM19 32h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1z",
        "M23 38.9l-2.6-.4-1.2-2.4c0-.1-.1-.1-.2-.1s-.2.1-.2.1l-1.2 2.4-2.6.4c-.1 0-.2.1-.2.2s0 .2.1.3l1.9 1.8-.4 2.6c0 .1 0 .2.1.2h.2l2.3-1.2 2.3 1.2h.3c.1-.1.1-.1.1-.2l-.4-2.6 1.9-1.8c.1-.1.1-.2.1-.3-.2-.2-.3-.2-.3-.2zM33.2 39c0-.1-.1-.2-.2-.2l-2.6-.4-1.2-2.4c0-.1-.1-.1-.2-.1s-.2.1-.2.1l-1.2 2.4-2.6.5c-.1 0-.2.1-.2.2s0 .2.1.3l1.9 1.8-.4 2.6c0 .1 0 .2.1.2h.2l2.3-1.2 2.3 1.2h.3c.1-.1.1-.1.1-.2l-.4-2.6 1.9-1.8V39z"
      ],
      tags: ["element-woo-product-rating"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M36 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4.5 5.9L35.4 15c-.3.3-.8.3-1.1 0l-2.7-2.5c-.3-.3-.3-.8-.1-1.1.3-.3.8-.3 1.1 0l2.1 2 4.6-4.6c.3-.3.8-.3 1.1 0 .4.3.4.8.1 1.1zm-3.5 12c.7-.1 1.4-.2 2-.4V36c0 1.7-1.3 3-3 3H23c-.6 0-1-.4-1-1s.4-1 1-1h13c.6 0 1-.4 1-1V21.9zM12 9c-1.7 0-3 1.3-3 3v24c0 1.7 1.3 3 3 3h1c.6 0 1-.4 1-1s-.4-1-1-1h-1c-.6 0-1-.4-1-1V12c0-.6.4-1 1-1h14c.1-.7.2-1.4.4-2H12zm7 28h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zm8.4-19.9h-.2c-.5 1.3-1.7 2.3-3.2 2.3s-2.7-1-3.2-2.3H16v4.6h2.3v9.1h11.4v-9.1H32v-.6c-1.9-.8-3.5-2.2-4.6-4z"
      ],
      tags: ["element-woo-product-stock"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M10.6 39.5c.4 0 .8-.2 1.1-.5l8.7-8.7 3.6 3.6c.6.6 1.6.6 2.2 0l9.8-9.8v3.5c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6v-7.2c0-.9-.7-1.6-1.6-1.6h-7.2c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6h3.5L25 30.6 21.5 27c-.6-.6-1.6-.6-2.2 0l-9.8 9.8c-.6.6-.6 1.6 0 2.2.2.4.6.5 1.1.5zM18 8.5c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm.5 11.5v1c0 .1-.1.2-.3.2h-.6c-.1 0-.3-.1-.3-.2v-.8c-.6 0-1.1-.1-1.6-.3-.2-.1-.4-.3-.3-.6l.1-.4c0-.1.1-.3.3-.3.1-.1.3-.1.4 0 .4.2.9.3 1.4.3.7 0 1.1-.3 1.1-.7 0-.4-.4-.7-1.2-1-1.2-.4-2.1-1-2.1-2.1 0-1 .7-1.8 2-2.1v-1c0-.1.1-.3.3-.3h.6c.1 0 .3.1.3.3v.8c.5 0 .9.1 1.3.2.2.1.4.3.3.6l-.2.3c0 .1-.1.2-.2.3-.1.1-.3.1-.4 0-.3-.1-.7-.2-1.2-.2-.8 0-1 .3-1 .7 0 .4.4.6 1.4 1 1.4.5 1.9 1.1 1.9 2.2.1 1-.7 1.9-2 2.1z"
      ],
      tags: ["element-woo-product-upsells"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M44 4.8v3.5h-1.7v6.8h-8.6V8.3H32V4.8h3.6c.4 1 1.3 1.7 2.4 1.7s2-.8 2.4-1.7H44zM45 0H31c-1.7 0-3 1.3-3 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm1 17c0 .6-.5 1-1 1H31c-.6 0-1-.5-1-1V3c0-.6.5-1 1-1h14c.6 0 1 .5 1 1v14zM44 32.8v3.5h-1.7v6.8h-8.6v-6.8H32v-3.5h3.6c.4 1 1.3 1.7 2.4 1.7s2-.8 2.4-1.7H44zm1-4.8H31c-1.7 0-3 1.3-3 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V31c0-1.7-1.3-3-3-3zm1 17c0 .6-.5 1-1 1H31c-.6 0-1-.5-1-1V31c0-.6.5-1 1-1h14c.6 0 1 .5 1 1v14z",
        "M12.4 18.8H16v3.5h-1.7v6.8H5.7v-6.8H4v-3.5h3.6c.4 1 1.3 1.7 2.4 1.7s2-.7 2.4-1.7zM28 11.5l-8.3 4.3c.2.4.3.8.3 1.2v14c0 .5-.1 1-.3 1.4l8.3 4.3V39l-9.9-5.1c-.3 0-.7.1-1.1.1H3c-1.7 0-3-1.3-3-3V17c0-1.7 1.3-3 3-3h14c.5 0 .9.1 1.3.3l9.7-5v2.2zM18 17c0-.6-.5-1-1-1H3c-.6 0-1 .5-1 1v14c0 .6.5 1 1 1h14c.6 0 1-.5 1-1V17z"
      ],
      tags: ["element-woo-product-related"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: ["M11.8 12.7L33.2 25 11.8 37.3V12.7M6.8 4v42l36.4-21L6.8 4z"],
      tags: ["play-video"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: ["M9 8.5h8v33H9zM33 8.5h8v33h-8z"],
      tags: ["pause-video"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M19.3 12.7v24.7l-7.9-4.5-1.2-.7H5V17.9h5.2l1.2-.7 7.9-4.5m5-8.7L8.9 12.9H0v24.2h8.9L24.3 46V4zM41.4 45.8l-3.5-3.5c9.5-9.5 9.5-25 0-34.5l3.5-3.5c11.5 11.4 11.5 30 0 41.5z",
        "M33.2 39l-3.5-3.5c5.8-5.8 5.8-15.1 0-20.9l3.5-3.5c7.7 7.6 7.7 20.2 0 27.9z"
      ],
      tags: ["sound-on"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M19.3 12.7v24.7l-7.9-4.5-1.2-.7H5V17.9h5.2l1.2-.7 7.9-4.5m5-8.7L8.9 12.9H0v24.2h8.9L24.3 46V4zM50 18.6l-3.5-3.5-6.4 6.4-6.4-6.4-3.5 3.5 6.3 6.4-6.3 6.4 3.5 3.5 6.4-6.4 6.4 6.4 3.5-3.5-6.4-6.4z"
      ],
      tags: ["sound-off"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: ["M5 7v8h12V7H5zm10.5 6.5h-9v-5h9v5z"],
      tags: ["default-state"],
      viewBox: ["0 0 22 22"]
    },
    {
      paths: [
        "M17.5 14.4l2.5-1.6-3-1.1V7H5v8h8.8l1.1 3 1.6-2.5 1.7 1.7c.3.3.8.3 1.1 0 .3-.3.3-.8 0-1.1l-1.8-1.7zm-11-.9v-5h9v2.8L12 10l1.3 3.5H6.5z"
      ],
      tags: ["hover-state"],
      viewBox: ["0 0 22 22"]
    },
    {
      paths: [
        "M100.5 82.5L91 77l-9.5 5.5L91 88l9.5-5.5zM91 79.7l4.7 2.7-4.7 2.8-4.7-2.7 4.7-2.8zm9.5 7.8l-7.1 4.1L91 93l-2.4-1.4-7.1-4.1 2.4-1.4 7.1 4.1 7.1-4.1 2.4 1.4z",
        "M24 51h32v2H24v-2zm24 6H24v2h24v-2zm-24 8h27v-2H24v2zm76-33H82v6h18v-6zm46 1h-4v4h4v-4zm-8 1h-10v2h10v-2zm-24 51c0 12.7-10.3 23-23 23S68 97.7 68 85s10.3-23 23-23 23 10.3 23 23zm-2 0c0-11.6-9.4-21-21-21s-21 9.4-21 21 9.4 21 21 21 21-9.4 21-21zm53-35v28c0 2.2-1.8 4-4 4h-9v46.2s.1 0 .1.1c.9.9 1.7 1.7 2.7 2.6 2.6-2.5 2.1-2 2.7-2.6.4-.3.9-.4 1.3 0 .8 1 1.6 1.9 2.5 2.8.8.9-.5 2.1-1.3 1.3-.7-.7-1.3-1.5-1.9-2.2-.9.8-1.7 1.7-2.6 2.5-.4.4-.9.3-1.3 0-.8-.6-1.5-1.3-2.2-2V141c0 2.8-2.2 5-5 5h-27v9c0 1.6-1.3 3-3 3H55c-1.7 0-3-1.4-3-3v-9H35c-2.8 0-5-2.2-5-5v-30.3c-.7.7-1.4 1.4-2.2 2-.4.3-.9.4-1.3 0-.9-.8-1.7-1.7-2.6-2.5-.6.7-1.3 1.5-1.9 2.2-.8.9-2.1-.4-1.3-1.3s1.7-1.9 2.5-2.8c.3-.4.9-.3 1.3 0 .9.8 1.8 1.7 2.7 2.6.9-.8 1.8-1.7 2.7-2.6l.1-.1V73H19c-1.7 0-3-1.4-3-3V20c0-1.7 1.3-3 3-3h42c1.7 0 3 1.3 3 3v4h83c2.8 0 5 2.2 5 5v17h9c2.2 0 4 1.8 4 4zM18 44h44V20c0-.5-.5-1-1-1H19c-.5 0-1 .5-1 1v24zm43 27c.5 0 1-.5 1-1V46H18v24c0 .5.5 1 1 1h42zm57 52c0-.5-.5-1-1-1H55c-.5 0-1 .5-1 1v32c0 .5.5 1 1 1h62c.5 0 1-.5 1-1v-32zm32-41h-17c-2.2 0-4-1.8-4-4V50c0-2.2 1.8-4 4-4h17V29c0-1.7-1.3-3-3-3H64v44c0 1.6-1.3 3-3 3H32v36.1c.6.6 1.2 1.1 1.8 1.7 2.6-2.5 2.1-2 2.7-2.6.4-.3.9-.4 1.3 0 .8 1 1.6 1.9 2.5 2.8.8.9-.5 2.1-1.3 1.3-.7-.7-1.3-1.5-1.9-2.2-.9.8-1.7 1.7-2.6 2.5-.4.4-.9.3-1.3 0s-.8-.7-1.2-1V141c0 1.7 1.3 3 3 3h17v-21c0-1.7 1.3-3 3-3h62c1.7 0 3 1.3 3 3v21h27c1.7 0 3-1.3 3-3v-9.3c-.4.4-.8.7-1.2 1.1-.4.3-.9.4-1.3 0-.9-.8-1.7-1.7-2.6-2.5-.6.7-1.3 1.5-1.9 2.2-.8.9-2.1-.4-1.3-1.3s1.7-1.9 2.5-2.8c.3-.4.9-.3 1.3 0 .9.8 1.8 1.7 2.7 2.6.6-.5 1.2-1.1 1.8-1.7V82zm13-32c0-1.1-.9-2-2-2h-28c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V50zm-8.3 11.4l-4.6-.4-1.8-4.3c-.1-.3-.4-.5-.8-.5s-.6.2-.8.5l-1.8 4.3-4.6.4c-.3 0-.6.3-.7.6-.1.3 0 .7.2.9l3.5 3.1-1 4.5c-.1.3.1.7.3.9.1.1.3.2.5.2s.3 0 .4-.1l4-2.4 4 2.4c.3.2.7.2.9 0 .3-.2.4-.5.3-.9l-1-4.5 3.5-3.1c.3-.2.4-.6.2-.9 0-.5-.3-.7-.7-.7zM56 154h30v-30H56v30zm34-23h24v-2H90v2zm16 4H90v2h16v-2zm-16 8h21v-2H90v2zm0 6h18v-2H90v2zm33.1-53.5l-2.1 2.1-2.1-2.1-1.4 1.4 2.1 2.1-2.1 2.1 1.4 1.4 2.1-2.1 2.1 2.1 1.4-1.4-2.1-2.1 2.1-2.1-1.4-1.4zm46.8-64.8c-2.2 0-4 1.8-4 4 0 .5-.4.9-.9.9s-.9-.4-.9-.9c0-2.2-1.8-4-4-4-.5 0-.9-.4-.9-.9s.4-.9.9-.9c2.2 0 4-1.8 4-4 0-.5.4-.9.9-.9s.9.4.9.9c0 2.2 1.8 4 4 4 .5 0 .9.4.9.9s-.3.9-.9.9zm-3.1-.9c-.7-.5-1.3-1.1-1.8-1.8-.5.7-1.1 1.3-1.8 1.8.7.5 1.3 1.1 1.8 1.8.5-.8 1.1-1.4 1.8-1.8zm-154.9 18c0 .5-.4.9-.9.9-2.2 0-4 1.8-4 4 0 .5-.4.9-.9.9s-.9-.4-.9-.9c0-2.2-1.8-4-4-4-.5 0-.9-.4-.9-.9s.4-.9.9-.9c2.2 0 4-1.8 4-4 0-.5.4-.9.9-.9s.9.4.9.9c0 2.2 1.8 4 4 4 .5 0 .9.4.9.9zm-4.1 0c-.7-.5-1.3-1.1-1.8-1.8-.5.7-1.1 1.3-1.8 1.8.8.4 1.4 1 1.8 1.7.5-.7 1.1-1.3 1.8-1.7zm168.4-8c0 1.6-1.3 2.9-2.9 2.9-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9s2.9 1.3 2.9 2.9zm-1.9 0c0-.6-.5-1-1-1-.6 0-1 .5-1 1 0 .6.5 1 1 1s1-.4 1-1zm-9.3 0c-.6 0-1.2.5-1.2 1.2 0 .6.5 1.2 1.2 1.2.6 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2zm7.5-15.7c.6 0 1.2-.5 1.2-1.2 0-.6-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2.6 1.2 1.2 1.2zM90.8 9.3c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm-1.4 4c0 .8.6 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4-.8 0-1.4.6-1.4 1.4zm-2.9-8.8c.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6c0 .9.7 1.6 1.6 1.6z",
        "M68 85c0-10.3 6.7-18.9 16-21.9V49c0-1.7-1.3-3-3-3H64v24c0 1.6-1.3 3-3 3H36v26c0 1.6 1.3 3 3 3h36.5C70.9 97.8 68 91.7 68 85z"
      ],
      tags: ["library-illustration"],
      viewBox: ["0 0 182 158"]
    },
    {
      paths: [
        "M73,69.5A15.1,15.1,0,0,0,58.1,81.8a12.5,12.5,0,0,0,2.4,24.7H87.1a10.9,10.9,0,0,0,1-21.7A15.4,15.4,0,0,0,83.8,74,15.2,15.2,0,0,0,73,69.5Zm0,3.3a11.4,11.4,0,0,1,8.4,3.5,12,12,0,0,1,3.5,9.9A1.6,1.6,0,0,0,86.3,88h.8a7.6,7.6,0,1,1,0,15.2H60.5a9.2,9.2,0,0,1-.8-18.4,1.7,1.7,0,0,0,1.4-1.5,12.5,12.5,0,0,1,3.4-7A11.8,11.8,0,0,1,73,72.8Zm0,9.8a1.4,1.4,0,0,0-1.1.4l-6,5.4a1.6,1.6,0,0,0,2.2,2.4l3.3-2.9V98.3a1.6,1.6,0,1,0,3.2,0V87.9l3.3,2.9a1.6,1.6,0,1,0,2.2-2.4l-6-5.4A1.4,1.4,0,0,0,73,82.6Z",
        "M5,34.9a2.9,2.9,0,0,1,3,3,2.9,2.9,0,0,1-2.8,3H5a2.9,2.9,0,0,1-3-3,3.2,3.2,0,0,1,3-3m0-2a5.2,5.2,0,0,0-5,5,5,5,0,0,0,5,5,5,5,0,0,0,0-10Zm114.8,79a.9.9,0,0,1,1,.8v.2a1,1,0,0,1-2,0,.9.9,0,0,1,.8-1h.2m0-2a3,3,0,1,0,3,3h0a2.9,2.9,0,0,0-2.8-3Z"
      ],
      polygon: [
        "84.3 40.4 82.2 38.3 84.3 36.2 82.8 34.7 80.8 36.8 78.7 34.7 77.2 36.1 79.3 38.3 77.2 40.4 78.6 41.8 80.8 39.7 82.9 41.8 84.3 40.4"
      ],
      circle: [
        'cx="73.5" cy="88" r="60" fill="#f7fafa"',
        'cx="51.5" cy="154.9" r="3" fill="#06bee1"',
        'cx="111.3" cy="5" r="5" fill="#06bee1"'
      ],
      tags: ["import-big-icon"],
      viewBox: ["0 0 133.5 157.9"]
    },
    {
      paths: [
        "M119.7 32.2L64 0 8.8 32.2 35 46.7l29-15.9 25.1 14-64.7 38.9L64 106.3l29.5-16.1 10.3 6.5-39.7 22.9-49.3-28.2.7-45.4-7.2-4.4V96l55.8 32 53.4-31.3-24-14.4-29.4 15.6-25.2-14.4 64-38-38.8-22.9L35 38.3l-11.8-6.5L64.1 8.9 113 37.3v45.2l6.7 4.4z"
      ],
      tags: ["zion-icon-logo"],
      viewBox: ["0 0 128 128"]
    },
    {
      paths: [
        "M7 12h23v2H7zM7 23h23v2H7zM7 34h23v2H7zM36 18.1c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5c0 2.7 2.3 5 5 5zm0-9.4c2.4 0 4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3-4.3-1.9-4.3-4.3c0-2.3 1.9-4.3 4.3-4.3z",
        "M34.6 13.5l-.3 1.6c0 .1.1.2.2.2h.1l1.4-.8 1.4.8h.2c.1 0 .1-.1.1-.2l-.3-1.6 1.2-1.1c.1-.1.1-.1.1-.2s-.1-.1-.2-.1l-1.6-.2-.7-1.5c0-.1-.1-.1-.2-.1l-.1.1-.7 1.5-1.7.1c-.1 0-.2.1-.2.2 0 0 0 .1.1.1l1.2 1.2zM36 19c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5c0-2.7-2.2-5-5-5zm0 9.4c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3c.1 2.3-1.9 4.3-4.3 4.3z",
        "M38.5 23l-1.6-.2-.7-1.5c0-.1-.1-.1-.2-.1l-.1.1-.7 1.5-1.7.2c-.1 0-.2.1-.2.2 0 0 0 .1.1.1l1.2 1.1-.3 1.6c0 .1.1.2.2.2h.1l1.4-.8 1.4.8h.2c.1 0 .1-.1.1-.2l-.3-1.6 1.2-1.1c.1-.1.1-.1.1-.2s-.1-.1-.2-.1zM36 30c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 9.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3c.1 2.3-1.9 4.3-4.3 4.3z",
        "M38.5 33.9l-1.6-.2-.7-1.5c0-.1-.1-.1-.2-.1l-.1.1-.7 1.5-1.6.2c-.1 0-.2.1-.2.2 0 0 0 .1.1.1l1.2 1.1-.4 1.7c0 .1.1.2.2.2h.1l1.4-.8 1.4.8h.2c.1 0 .1-.1.1-.2l-.3-1.6 1.2-1.1c.1-.1.1-.1.1-.2s-.1-.2-.2-.2z",
        ""
      ],
      tags: ["icon-list"],
      viewBox: ["0 0 48 48"]
    },
    {
      paths: [
        "M21.5 8.6L13.4.5c-.4-.3-.8-.5-1.3-.5H5.8C4.8 0 4 .8 4 1.8v6.3c0 .5.2.9.5 1.3l8.1 8.1c.3.3.8.5 1.3.5s.9-.2 1.3-.5l6.3-6.3c.3-.3.5-.8.5-1.3s-.2-.9-.5-1.3zM7.2 4.5c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3z",
        "M12.6 17.5L4.5 9.4c-.3-.3-.5-.8-.5-1.2-.2.2-.5.3-.8.3-.7 0-1.4-.6-1.4-1.3s.6-1.4 1.4-1.4c.3 0 .6.1.8.3V4H1.8C.8 4 0 4.8 0 5.8v6.3c0 .5.2.9.5 1.3l8.1 8.1c.4.3.8.5 1.3.5s.9-.2 1.3-.5l4-4c-.3.3-.8.5-1.3.5s-.9-.2-1.3-.5z"
      ],
      tags: ["tags-attributes"],
      viewBox: ["0 0 22 22"]
    },
    {
      paths: [
        "M7.4 11.2c1.8.5 3.2 2 3.7 3.6.5-.4 1.1-.9 1.7-1.4l-4-4c-.5.7-1 1.3-1.4 1.8zM19.4 0c-3.1.3-7.7 5.8-9.7 8.3l4.2 4.2c2.3-2 7.9-7 8-10.1.2-1.4-1-2.5-2.5-2.4zM2.2 14.1c-1.8 2.3-.3 4.4-2 6.3-.3.3-.2.8.2 1 2.9 1.2 6.6.4 8.3-1.4 1.6-1.7 2.1-4.6.1-6.5-1.8-1.9-5-1.4-6.6.6z"
      ],
      tags: ["brush"],
      viewBox: ["0 0 22 22"]
    },
    {
      paths: [
        "M8 4c0 2.2-1.8 4-4 4S0 6.2 0 4s1.8-4 4-4 4 1.8 4 4zM4 32c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0-16c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
      ],
      tags: ["three-dots"],
      viewBox: ["0 0 8 40"]
    },
    {
      paths: ["M40 18v8H4v-8h36m4-4H0v16h44V14z", "M44 34H0v10h4v-6h36v6h4V34z", "M44 0h-4v6H4V0H0v10h44V0z"],
      tags: ["templates-body"],
      viewBox: ["0 0 44 44"]
    },
    {
      paths: ["M40 32v8H4v-8h36m4-4H0v16h44V28z", "M44 0h-4v20H4V0H0v24h44V0z"],
      tags: ["templates-footer"],
      viewBox: ["0 0 44 44"]
    },
    {
      paths: ["M40 4v8H4V4h36m4-4H0v16h44V0z", "M42 24v-2 20z", "M44 20H0v24h4V24h36v20h4V20z"],
      tags: ["templates-header"],
      viewBox: ["0 0 44 44"]
    },
    {
      paths: [
        "M23 14.29c-.63-.19-1.3-.29-2-.29s-1.37.1-2 .29A7.018 7.018 0 0014.29 19H11c-1.1 0-2-.9-2-2v-3.29A7.018 7.018 0 0013.71 9c.19-.63.29-1.3.29-2s-.1-1.37-.29-2C12.85 2.11 10.17 0 7 0 3.13 0 0 3.13 0 7c0 3.17 2.11 5.85 5 6.71V17c0 3.31 2.69 6 6 6h3.29c.86 2.89 3.54 5 6.71 5 3.87 0 7-3.13 7-7 0-3.17-2.11-5.85-5-6.71zM4 7c0-1.65 1.35-3 3-3 .99 0 1.86.49 2.4 1.22.37.5.6 1.11.6 1.78 0 1.65-1.35 3-3 3-.67 0-1.28-.23-1.78-.6A2.986 2.986 0 014 7zm17 17c-.99 0-1.86-.49-2.4-1.22-.37-.5-.6-1.11-.6-1.78 0-1.65 1.35-3 3-3 .67 0 1.28.23 1.78.6.73.54 1.22 1.41 1.22 2.4 0 1.65-1.35 3-3 3z"
      ],
      tags: ["child"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M23 14.29c-.63-.19-1.3-.29-2-.29s-1.37.1-2 .29A7.018 7.018 0 0014.29 19H11c-1.1 0-2-.9-2-2v-3.29A7.018 7.018 0 0013.71 9c.19-.63.29-1.3.29-2s-.1-1.37-.29-2C12.85 2.11 10.17 0 7 0 3.13 0 0 3.13 0 7c0 3.17 2.11 5.85 5 6.71V17c0 3.31 2.69 6 6 6h3.29c.86 2.89 3.54 5 6.71 5 3.87 0 7-3.13 7-7 0-3.17-2.11-5.85-5-6.71zM4 7c0-1.65 1.35-3 3-3 .99 0 1.86.49 2.4 1.22.37.5.6 1.11.6 1.78 0 1.65-1.35 3-3 3-.67 0-1.28-.23-1.78-.6A2.986 2.986 0 014 7zm17 17c-.99 0-1.86-.49-2.4-1.22-.37-.5-.6-1.11-.6-1.78 0-1.65 1.35-3 3-3 .67 0 1.28.23 1.78.6.73.54 1.22 1.41 1.22 2.4 0 1.65-1.35 3-3 3zm7-16h-4v4h-4V8h-4V4h4V0h4v4h4v4z"
      ],
      tags: ["child-add"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["m2.8 11.2 8.4-8.4L14 0l2.8 2.8 8.4 8.4-2.8 2.8L16 7.6V28h-4V7.6L5.6 14l-2.8-2.8z"],
      tags: ["long-arrow-up"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: ["m25.2 16.8-8.4 8.4L14 28l-2.8-2.8-8.4-8.4L5.6 14l6.4 6.4V0h4v20.4l6.4-6.4 2.8 2.8z"],
      tags: ["long-arrow-down"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M14 10h3v4h-3v3h-4v-3H7v-4h3V7h4v3zm14 15-2.8 2.8-6.1-6.1c-2 1.4-4.4 2.3-7.1 2.3-6.6 0-12-5.4-12-12S5.4 0 12 0s12 5.4 12 12c0 2.5-.7 4.8-2.1 6.9L28 25zm-8-13c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z"
      ],
      tags: ["zoom"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "m28 5.1-6.2 17.7h-4.1l-2.6-7.7c-.7-2.3-1-3.4-1.1-4.3-.2 1-.5 2-1.2 4.4l-2.6 7.6H5.9L0 5.1h4.7L7 12.7c.4 1.4.8 2.9 1.1 4.3.3-1.4.8-2.9 1.2-4.3l2.4-7.6h4.5l2.4 7.6c.2.7.9 3.4 1.1 4.6.2-1.2 1-3.8 1.2-4.6l2.4-7.6H28z"
      ],
      tags: ["width"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M22 11h-2v-1c0-3.3-2.7-6-6-6s-6 2.7-6 6v1H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm-6 0h-4v-1c0-1.1.9-2 2-2s2 .9 2 2v1z"
      ],
      tags: ["lock"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "m13 11-9 9v-7c0-1.1.9-2 2-2h2v-1c0-3.3 2.7-6 6-6 1.7 0 3.2.7 4.2 1.8l-2.8 2.8c-.8-.8-2-.8-2.8 0-.4.4-.6.9-.6 1.4v1h1zm9 0h-.5l4.8-4.8-2.8-2.8L3.6 23.2 6.4 26l2-2H22c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2z"
      ],
      tags: ["unlock"],
      viewBox: ["0 0 28 28"]
    },
    {
      paths: [
        "M341.6 29.2L240.1 130.8l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4L482.8 170.4c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6v42.4L5.4 462.2c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4L89.7 480h42.4c21.2 0 41.6-8.4 56.6-23.4L309.4 335.9l-45.3-45.3L143.4 411.3c-3 3-7.1 4.7-11.3 4.7H96V379.9c0-4.2 1.7-8.3 4.7-11.3L221.4 247.9l-45.3-45.3L55.4 323.3z"
      ],
      tags: ["eyedropper"],
      viewBox: ["0 0 512 512"]
    }
  ];
  const getSearchIcon = (searchIcon) => SvgIcons.find((icon) => {
    return icon.tags[0] === searchIcon;
  });
  const _hoisted_1$1d = ["viewBox", "preserveAspectRatio", "innerHTML"];
  const __default__$18 = {
    name: "Icon"
  };
  const _sfc_main$1z = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$18), {
    props: {
      icon: {},
      rotate: { type: [Boolean, String, Number], default: false },
      bgSize: {},
      color: {},
      size: {},
      bgColor: {},
      stroke: {},
      rounded: { type: Boolean, default: false },
      preserveAspectRatio: {}
    },
    setup(__props) {
      const props = __props;
      const iconStyles = vue.computed(() => {
        return {
          width: props.bgSize + "px",
          height: props.bgSize + "px",
          color: props.color,
          fontSize: props.size + "px",
          background: props.bgColor,
          stroke: props.stroke,
          transform: elementTransform.value
        };
      });
      const iconClass = vue.computed(() => {
        return {
          "znpb-editor-icon--rounded": props.rounded
        };
      });
      const iconSettings = vue.computed(() => {
        const iconOption = getSearchIcon(props.icon);
        if (!iconOption) {
          return {};
        }
        let pathString = "";
        if (iconOption.circle) {
          for (const circle of iconOption.circle) {
            pathString += `<circle  ${circle} fill="currentColor"></circle>`;
          }
        }
        if (iconOption.rect) {
          for (const rect of iconOption.rect) {
            pathString += `<rect ${rect}></rect>`;
          }
        }
        if (iconOption.polygon) {
          for (const polygon of iconOption.polygon) {
            pathString += `<polygon points='${polygon}' fill="currentColor"></polygon>`;
          }
        }
        for (const path of iconOption.paths) {
          pathString += `<path fill="currentColor" d="${path}"></path>`;
        }
        return {
          viewBox: (iconOption == null ? void 0 : iconOption.viewBox) ? iconOption == null ? void 0 : iconOption.viewBox.join("") : "0 0 50 50 ",
          pathString
        };
      });
      const elementTransform = vue.computed(() => {
        let cssStyles = "";
        if (props.rotate) {
          if (typeof props.rotate === "string" || typeof props.rotate === "number") {
            cssStyles = `rotate(${props.rotate}deg)`;
          } else
            cssStyles = "rotate(90deg)";
        }
        return cssStyles;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("span", {
          class: vue.normalizeClass(["znpb-editor-icon-wrapper", iconClass.value]),
          style: vue.normalizeStyle(iconStyles.value)
        }, [
          iconSettings.value ? (vue.openBlock(), vue.createElementBlock("svg", {
            key: 0,
            class: vue.normalizeClass(["zion-svg-inline znpb-editor-icon zion-icon", {
              [`zion-${_ctx.icon}`]: _ctx.icon
            }]),
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            viewBox: iconSettings.value.viewBox,
            preserveAspectRatio: props.preserveAspectRatio || "",
            innerHTML: iconSettings.value.pathString
          }, null, 10, _hoisted_1$1d)) : vue.createCommentVNode("", true)
        ], 6);
      };
    }
  }));
  const Icon_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$1c = {
    key: 0,
    class: "znpb-accordion__content"
  };
  const __default__$17 = {
    name: "Accordion"
  };
  const _sfc_main$1y = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$17), {
    props: {
      collapsed: { type: Boolean, default: false },
      header: {}
    },
    setup(__props) {
      const props = __props;
      const localCollapsed = vue.ref(props.collapsed);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-accordion", { "znpb-accordion--collapsed": localCollapsed.value }])
        }, [
          vue.createElementVNode("div", {
            class: "znpb-accordion__header",
            onClick: _cache[0] || (_cache[0] = ($event) => localCollapsed.value = !localCollapsed.value)
          }, [
            vue.renderSlot(_ctx.$slots, "header", {}, () => [
              vue.createTextVNode(vue.toDisplayString(_ctx.header), 1)
            ]),
            vue.createVNode(_sfc_main$1z, {
              icon: "select",
              class: "znpb-accordion-title-icon"
            })
          ]),
          localCollapsed.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1c, [
            vue.renderSlot(_ctx.$slots, "default")
          ])) : vue.createCommentVNode("", true)
        ], 2);
      };
    }
  }));
  const Accordion_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$1b = { class: "znpb-actions-overlay__wrapper" };
  const _hoisted_2$O = {
    key: 0,
    class: "znpb-actions-overlay__actions-wrapper"
  };
  const _hoisted_3$u = { class: "znpb-actions-overlay__actions" };
  const __default__$16 = {
    name: "ActionsOverlay"
  };
  const _sfc_main$1x = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$16), {
    props: {
      showOverlay: { type: Boolean, default: true }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1b, [
          vue.renderSlot(_ctx.$slots, "default"),
          _ctx.showOverlay ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$O, [
            vue.createElementVNode("div", _hoisted_3$u, [
              vue.renderSlot(_ctx.$slots, "actions")
            ])
          ])) : vue.createCommentVNode("", true)
        ]);
      };
    }
  }));
  const ActionsOverlay_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$1a = {
    key: 0,
    class: "zion-input__prefix"
  };
  const _hoisted_2$N = {
    key: 0,
    class: "zion-input__prepend"
  };
  const _hoisted_3$t = ["type", "value"];
  const _hoisted_4$h = ["value"];
  const _hoisted_5$d = { class: "zion-input__suffix" };
  const _hoisted_6$8 = { class: "zion-input__append" };
  const __default__$15 = {
    name: "BaseInput",
    inheritAttrs: false
  };
  const _sfc_main$1w = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$15), {
    props: {
      modelValue: { default: "" },
      error: { type: Boolean, default: false },
      type: { default: "text" },
      icon: {},
      clearable: { type: Boolean, default: false },
      size: {},
      fontFamily: {},
      class: { default: "" }
    },
    emits: ["update:modelValue"],
    setup(__props, { expose: __expose, emit }) {
      const props = __props;
      const input = vue.ref(null);
      const showClear = vue.computed(() => {
        return props.clearable && props.modelValue ? true : false;
      });
      const hasSuffixContent = vue.computed(() => {
        return props.icon || showClear.value;
      });
      const getStyle = vue.computed(() => {
        return {
          fontFamily: props.fontFamily || ""
        };
      });
      const cssClass = vue.computed(() => {
        return props.class;
      });
      function onKeyDown(e) {
        if (e.shiftKey) {
          e.stopPropagation();
        }
      }
      function focus() {
        var _a2;
        (_a2 = input.value) == null ? void 0 : _a2.focus();
      }
      function blur() {
        var _a2;
        (_a2 = input.value) == null ? void 0 : _a2.blur();
      }
      function onInput(e) {
        if (props.type === "number" && e.target.validity.badInput) {
          return;
        }
        emit("update:modelValue", e.target.value);
      }
      __expose({
        input,
        focus,
        blur
      });
      return (_ctx, _cache) => {
        const _component_Injection = vue.resolveComponent("Injection");
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["zion-input", {
            "zion-input--has-prepend": _ctx.$slots.prepend,
            "zion-input--has-append": _ctx.$slots.append,
            "zion-input--has-suffix": hasSuffixContent.value,
            "zion-input--error": _ctx.error,
            [`zion-input--size-${_ctx.size}`]: _ctx.size,
            [cssClass.value]: cssClass.value
          }]),
          onKeydown: onKeyDown
        }, [
          _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1a, [
            _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$N, [
              vue.renderSlot(_ctx.$slots, "prepend")
            ])) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true),
          _ctx.type !== "textarea" ? (vue.openBlock(), vue.createElementBlock("input", vue.mergeProps({
            key: 1,
            ref_key: "input",
            ref: input,
            type: _ctx.type,
            value: _ctx.modelValue,
            style: getStyle.value
          }, _ctx.$attrs, { onInput }), null, 16, _hoisted_3$t)) : (vue.openBlock(), vue.createElementBlock("textarea", vue.mergeProps({
            key: 2,
            ref_key: "input",
            ref: input,
            class: "znpb-fancy-scrollbar",
            value: _ctx.modelValue
          }, _ctx.$attrs, {
            onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value))
          }), "\n		", 16, _hoisted_4$h)),
          vue.renderSlot(_ctx.$slots, "after-input"),
          showClear.value ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
            key: 3,
            class: "zion-input__suffix-icon zion-input__clear-text",
            icon: "close",
            onMousedown: _cache[1] || (_cache[1] = vue.withModifiers(($event) => _ctx.$emit("update:modelValue", ""), ["stop", "prevent"]))
          })) : vue.createCommentVNode("", true),
          vue.createElementVNode("div", _hoisted_5$d, [
            vue.renderSlot(_ctx.$slots, "suffix"),
            _ctx.icon ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
              key: 0,
              class: "zion-input__suffix-icon",
              icon: _ctx.icon,
              onClick: _cache[2] || (_cache[2] = vue.withModifiers(($event) => _ctx.$emit("update:modelValue", ""), ["stop", "prevent"]))
            }, null, 8, ["icon"])) : vue.createCommentVNode("", true),
            vue.createElementVNode("div", _hoisted_6$8, [
              vue.renderSlot(_ctx.$slots, "append"),
              vue.createVNode(_component_Injection, {
                location: "base_input/append",
                class: "znpb-options-injection--after-title"
              })
            ])
          ])
        ], 34);
      };
    }
  }));
  const BaseInput_vue_vue_type_style_index_0_lang = "";
  const __default__$14 = {
    name: "Button"
  };
  const _sfc_main$1v = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$14), {
    props: {
      type: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-button", { ["znpb-button--" + _ctx.type]: _ctx.type }])
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  }));
  const Button_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$19 = { class: "znpb-options-has-changes-wrapper" };
  const _hoisted_2$M = { key: 0 };
  const __default__$13 = {
    name: "ChangesBullet"
  };
  const _sfc_main$1u = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$13), {
    props: {
      discardChangesTitle: { default: () => i18n__namespace.__("Discard changes", "zionbuilder") }
    },
    emits: ["remove-styles"],
    setup(__props) {
      const showIcon = vue.ref(false);
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", _hoisted_1$19, [
          vue.createElementVNode("span", {
            class: "znpb-options__has-changes",
            onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => _ctx.$emit("remove-styles"), ["stop"])),
            onMouseover: _cache[1] || (_cache[1] = ($event) => showIcon.value = true),
            onMouseleave: _cache[2] || (_cache[2] = ($event) => showIcon.value = false)
          }, [
            !showIcon.value ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$M)) : (vue.openBlock(), vue.createBlock(_component_Icon, {
              key: 1,
              class: "znpb-options-has-changes-wrapper__delete",
              icon: "close",
              size: 6
            }))
          ], 32)
        ])), [
          [_directive_znpb_tooltip, _ctx.discardChangesTitle]
        ]);
      };
    }
  }));
  const ChangesBullet_vue_vue_type_style_index_0_lang = "";
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  var trimLeft = /^\s+/;
  var trimRight = /\s+$/;
  function tinycolor(color, opts) {
    color = color ? color : "";
    opts = opts || {};
    if (color instanceof tinycolor) {
      return color;
    }
    if (!(this instanceof tinycolor)) {
      return new tinycolor(color, opts);
    }
    var rgb = inputToRGB(color);
    this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;
    if (this._r < 1)
      this._r = Math.round(this._r);
    if (this._g < 1)
      this._g = Math.round(this._g);
    if (this._b < 1)
      this._b = Math.round(this._b);
    this._ok = rgb.ok;
  }
  tinycolor.prototype = {
    isDark: function isDark() {
      return this.getBrightness() < 128;
    },
    isLight: function isLight() {
      return !this.isDark();
    },
    isValid: function isValid() {
      return this._ok;
    },
    getOriginalInput: function getOriginalInput() {
      return this._originalInput;
    },
    getFormat: function getFormat() {
      return this._format;
    },
    getAlpha: function getAlpha() {
      return this._a;
    },
    getBrightness: function getBrightness() {
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
    },
    getLuminance: function getLuminance() {
      var rgb = this.toRgb();
      var RsRGB, GsRGB, BsRGB, R, G, B;
      RsRGB = rgb.r / 255;
      GsRGB = rgb.g / 255;
      BsRGB = rgb.b / 255;
      if (RsRGB <= 0.03928)
        R = RsRGB / 12.92;
      else
        R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      if (GsRGB <= 0.03928)
        G = GsRGB / 12.92;
      else
        G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      if (BsRGB <= 0.03928)
        B = BsRGB / 12.92;
      else
        B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    },
    setAlpha: function setAlpha(value) {
      this._a = boundAlpha(value);
      this._roundA = Math.round(100 * this._a) / 100;
      return this;
    },
    toHsv: function toHsv() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v,
        a: this._a
      };
    },
    toHsvString: function toHsvString() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      var h = Math.round(hsv.h * 360), s = Math.round(hsv.s * 100), v = Math.round(hsv.v * 100);
      return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
    },
    toHsl: function toHsl() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      return {
        h: hsl.h * 360,
        s: hsl.s,
        l: hsl.l,
        a: this._a
      };
    },
    toHslString: function toHslString() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      var h = Math.round(hsl.h * 360), s = Math.round(hsl.s * 100), l = Math.round(hsl.l * 100);
      return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
    },
    toHex: function toHex(allow3Char) {
      return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function toHexString(allow3Char) {
      return "#" + this.toHex(allow3Char);
    },
    toHex8: function toHex8(allow4Char) {
      return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function toHex8String(allow4Char) {
      return "#" + this.toHex8(allow4Char);
    },
    toRgb: function toRgb() {
      return {
        r: Math.round(this._r),
        g: Math.round(this._g),
        b: Math.round(this._b),
        a: this._a
      };
    },
    toRgbString: function toRgbString() {
      return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function toPercentageRgb() {
      return {
        r: Math.round(bound01(this._r, 255) * 100) + "%",
        g: Math.round(bound01(this._g, 255) * 100) + "%",
        b: Math.round(bound01(this._b, 255) * 100) + "%",
        a: this._a
      };
    },
    toPercentageRgbString: function toPercentageRgbString() {
      return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function toName() {
      if (this._a === 0) {
        return "transparent";
      }
      if (this._a < 1) {
        return false;
      }
      return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function toFilter(secondColor) {
      var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
      var secondHex8String = hex8String;
      var gradientType = this._gradientType ? "GradientType = 1, " : "";
      if (secondColor) {
        var s = tinycolor(secondColor);
        secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
      }
      return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
    },
    toString: function toString2(format) {
      var formatSet = !!format;
      format = format || this._format;
      var formattedString = false;
      var hasAlpha = this._a < 1 && this._a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
      if (needsAlphaFormat) {
        if (format === "name" && this._a === 0) {
          return this.toName();
        }
        return this.toRgbString();
      }
      if (format === "rgb") {
        formattedString = this.toRgbString();
      }
      if (format === "prgb") {
        formattedString = this.toPercentageRgbString();
      }
      if (format === "hex" || format === "hex6") {
        formattedString = this.toHexString();
      }
      if (format === "hex3") {
        formattedString = this.toHexString(true);
      }
      if (format === "hex4") {
        formattedString = this.toHex8String(true);
      }
      if (format === "hex8") {
        formattedString = this.toHex8String();
      }
      if (format === "name") {
        formattedString = this.toName();
      }
      if (format === "hsl") {
        formattedString = this.toHslString();
      }
      if (format === "hsv") {
        formattedString = this.toHsvString();
      }
      return formattedString || this.toHexString();
    },
    clone: function clone() {
      return tinycolor(this.toString());
    },
    _applyModification: function _applyModification(fn, args) {
      var color = fn.apply(null, [this].concat([].slice.call(args)));
      this._r = color._r;
      this._g = color._g;
      this._b = color._b;
      this.setAlpha(color._a);
      return this;
    },
    lighten: function lighten() {
      return this._applyModification(_lighten, arguments);
    },
    brighten: function brighten() {
      return this._applyModification(_brighten, arguments);
    },
    darken: function darken() {
      return this._applyModification(_darken, arguments);
    },
    desaturate: function desaturate() {
      return this._applyModification(_desaturate, arguments);
    },
    saturate: function saturate() {
      return this._applyModification(_saturate, arguments);
    },
    greyscale: function greyscale() {
      return this._applyModification(_greyscale, arguments);
    },
    spin: function spin() {
      return this._applyModification(_spin, arguments);
    },
    _applyCombination: function _applyCombination(fn, args) {
      return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function analogous() {
      return this._applyCombination(_analogous, arguments);
    },
    complement: function complement() {
      return this._applyCombination(_complement, arguments);
    },
    monochromatic: function monochromatic() {
      return this._applyCombination(_monochromatic, arguments);
    },
    splitcomplement: function splitcomplement() {
      return this._applyCombination(_splitcomplement, arguments);
    },
    // Disabled until https://github.com/bgrins/TinyColor/issues/254
    // polyad: function (number) {
    //   return this._applyCombination(polyad, [number]);
    // },
    triad: function triad() {
      return this._applyCombination(polyad, [3]);
    },
    tetrad: function tetrad() {
      return this._applyCombination(polyad, [4]);
    }
  };
  tinycolor.fromRatio = function(color, opts) {
    if (_typeof(color) == "object") {
      var newColor = {};
      for (var i in color) {
        if (color.hasOwnProperty(i)) {
          if (i === "a") {
            newColor[i] = color[i];
          } else {
            newColor[i] = convertToPercentage(color[i]);
          }
        }
      }
      color = newColor;
    }
    return tinycolor(color, opts);
  };
  function inputToRGB(color) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color == "string") {
      color = stringInputToObject(color);
    }
    if (_typeof(color) == "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s = convertToPercentage(color.s);
        v = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s, v);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s = convertToPercentage(color.s);
        l = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s, l);
        ok = true;
        format = "hsl";
      }
      if (color.hasOwnProperty("a")) {
        a = color.a;
      }
    }
    a = boundAlpha(a);
    return {
      ok,
      format: color.format || format,
      r: Math.min(255, Math.max(rgb.r, 0)),
      g: Math.min(255, Math.max(rgb.g, 0)),
      b: Math.min(255, Math.max(rgb.b, 0)),
      a
    };
  }
  function rgbToRgb(r, g, b) {
    return {
      r: bound01(r, 255) * 255,
      g: bound01(g, 255) * 255,
      b: bound01(b, 255) * 255
    };
  }
  function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max2 = Math.max(r, g, b), min2 = Math.min(r, g, b);
    var h, s, l = (max2 + min2) / 2;
    if (max2 == min2) {
      h = s = 0;
    } else {
      var d = max2 - min2;
      s = l > 0.5 ? d / (2 - max2 - min2) : d / (max2 + min2);
      switch (max2) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h,
      s,
      l
    };
  }
  function hslToRgb(h, s, l) {
    var r, g, b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    function hue2rgb(p2, q2, t) {
      if (t < 0)
        t += 1;
      if (t > 1)
        t -= 1;
      if (t < 1 / 6)
        return p2 + (q2 - p2) * 6 * t;
      if (t < 1 / 2)
        return q2;
      if (t < 2 / 3)
        return p2 + (q2 - p2) * (2 / 3 - t) * 6;
      return p2;
    }
    if (s === 0) {
      r = g = b = l;
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  }
  function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max2 = Math.max(r, g, b), min2 = Math.min(r, g, b);
    var h, s, v = max2;
    var d = max2 - min2;
    s = max2 === 0 ? 0 : d / max2;
    if (max2 == min2) {
      h = 0;
    } else {
      switch (max2) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h,
      s,
      v
    };
  }
  function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r = [v, q, p, p, t, v][mod], g = [t, v, v, q, p, p][mod], b = [p, p, t, v, v, q][mod];
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  }
  function rgbToHex(r, g, b, allow3Char) {
    var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join("");
  }
  function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join("");
  }
  function rgbaToArgbHex(r, g, b, a) {
    var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
    return hex.join("");
  }
  tinycolor.equals = function(color1, color2) {
    if (!color1 || !color2)
      return false;
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
  };
  tinycolor.random = function() {
    return tinycolor.fromRatio({
      r: Math.random(),
      g: Math.random(),
      b: Math.random()
    });
  };
  function _desaturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }
  function _saturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }
  function _greyscale(color) {
    return tinycolor(color).desaturate(100);
  }
  function _lighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }
  function _brighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var rgb = tinycolor(color).toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return tinycolor(rgb);
  }
  function _darken(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }
  function _spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
  }
  function _complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
  }
  function polyad(color, number) {
    if (isNaN(number) || number <= 0) {
      throw new Error("Argument to polyad must be a positive number");
    }
    var hsl = tinycolor(color).toHsl();
    var result = [tinycolor(color)];
    var step = 360 / number;
    for (var i = 1; i < number; i++) {
      result.push(tinycolor({
        h: (hsl.h + i * step) % 360,
        s: hsl.s,
        l: hsl.l
      }));
    }
    return result;
  }
  function _splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }
  function _analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;
    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(tinycolor(hsl));
    }
    return ret;
  }
  function _monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;
    while (results--) {
      ret.push(tinycolor({
        h,
        s,
        v
      }));
      v = (v + modification) % 1;
    }
    return ret;
  }
  tinycolor.mix = function(color1, color2, amount) {
    amount = amount === 0 ? 0 : amount || 50;
    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return tinycolor(rgba);
  };
  tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
  };
  tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;
    out = false;
    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
      case "AAsmall":
      case "AAAlarge":
        out = readability >= 4.5;
        break;
      case "AAlarge":
        out = readability >= 3;
        break;
      case "AAAsmall":
        out = readability >= 7;
        break;
    }
    return out;
  };
  tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors;
    level = args.level;
    size = args.size;
    for (var i = 0; i < colorList.length; i++) {
      readability = tinycolor.readability(baseColor, colorList[i]);
      if (readability > bestScore) {
        bestScore = readability;
        bestColor = tinycolor(colorList[i]);
      }
    }
    if (tinycolor.isReadable(baseColor, bestColor, {
      level,
      size
    }) || !includeFallbackColors) {
      return bestColor;
    } else {
      args.includeFallbackColors = false;
      return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
    }
  };
  var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  };
  var hexNames = tinycolor.hexNames = flip$2(names);
  function flip$2(o) {
    var flipped = {};
    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        flipped[o[i]] = i;
      }
    }
    return flipped;
  }
  function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
      a = 1;
    }
    return a;
  }
  function bound01(n, max2) {
    if (isOnePointZero(n))
      n = "100%";
    var processPercent = isPercentage(n);
    n = Math.min(max2, Math.max(0, parseFloat(n)));
    if (processPercent) {
      n = parseInt(n * max2, 10) / 100;
    }
    if (Math.abs(n - max2) < 1e-6) {
      return 1;
    }
    return n % max2 / parseFloat(max2);
  }
  function clamp01(val) {
    return Math.min(1, Math.max(0, val));
  }
  function parseIntFromHex(val) {
    return parseInt(val, 16);
  }
  function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
  }
  function isPercentage(n) {
    return typeof n === "string" && n.indexOf("%") != -1;
  }
  function pad2(c) {
    return c.length == 1 ? "0" + c : "" + c;
  }
  function convertToPercentage(n) {
    if (n <= 1) {
      n = n * 100 + "%";
    }
    return n;
  }
  function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
  }
  function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
  }
  var matchers = function() {
    var CSS_INTEGER = "[-\\+]?\\d+%?";
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    return {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
      rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
      hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
      hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
      hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
      hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
  }();
  function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
  }
  function stringInputToObject(color) {
    color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
    var named = false;
    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color == "transparent") {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
      };
    }
    var match;
    if (match = matchers.rgb.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3]
      };
    }
    if (match = matchers.rgba.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hsl.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3]
      };
    }
    if (match = matchers.hsla.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hsv.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3]
      };
    }
    if (match = matchers.hsva.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hex8.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }
    if (match = matchers.hex6.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }
    if (match = matchers.hex4.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + "" + match[1]),
        g: parseIntFromHex(match[2] + "" + match[2]),
        b: parseIntFromHex(match[3] + "" + match[3]),
        a: convertHexToDecimal(match[4] + "" + match[4]),
        format: named ? "name" : "hex8"
      };
    }
    if (match = matchers.hex3.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + "" + match[1]),
        g: parseIntFromHex(match[2] + "" + match[2]),
        b: parseIntFromHex(match[3] + "" + match[3]),
        format: named ? "name" : "hex"
      };
    }
    return false;
  }
  function validateWCAG2Parms(parms) {
    var level, size;
    parms = parms || {
      level: "AA",
      size: "small"
    };
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
      level = "AA";
    }
    if (size !== "small" && size !== "large") {
      size = "small";
    }
    return {
      level,
      size
    };
  }
  function useMounted() {
    const isMounted = vue.ref(false);
    if (vue.getCurrentInstance()) {
      vue.onMounted(() => {
        isMounted.value = true;
      });
    }
    return isMounted;
  }
  function useSupported(callback) {
    const isMounted = useMounted();
    return vue.computed(() => {
      isMounted.value;
      return Boolean(callback());
    });
  }
  function useEyeDropper(options2 = {}) {
    const { initialValue = "" } = options2;
    const isSupported = useSupported(() => typeof window !== "undefined" && "EyeDropper" in window);
    const sRGBHex = vue.ref(initialValue);
    function open2(openOptions) {
      return __async(this, null, function* () {
        if (!isSupported.value)
          return;
        const eyeDropper = new window.EyeDropper();
        const result = yield eyeDropper.open(openOptions);
        sRGBHex.value = result.sRGBHex;
        return result;
      });
    }
    return { isSupported, sRGBHex, open: open2 };
  }
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
  const _hoisted_1$18 = { class: "znpb-colorpicker-inner-editor__hue" };
  const __default__$12 = {
    name: "HueStrip"
  };
  const _sfc_main$1t = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$12), {
    props: {
      modelValue: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      var _a2;
      const props = __props;
      const direction = vue.ref("right");
      const oldHue = vue.ref((_a2 = props.modelValue) == null ? void 0 : _a2.h);
      const lastHue = vue.ref(null);
      const root2 = vue.ref(null);
      let ownerWindow;
      const hueStyles = vue.computed(() => {
        const { h } = props.modelValue;
        let positionValue = props.modelValue.h / 360 * 100;
        if (h === 0 && direction.value === "right") {
          positionValue = 100;
        }
        return {
          left: positionValue + "%"
        };
      });
      vue.watch(
        () => props.modelValue,
        () => {
          const { h } = props.modelValue;
          if (h !== 0 && h > oldHue.value) {
            direction.value = "right";
          }
          if (h !== 0 && h < oldHue.value) {
            direction.value = "left";
          }
          oldHue.value = h;
        }
      );
      const rafDragCircle = rafSchd$1(dragHueCircle);
      function actHueCircleDrag() {
        ownerWindow.addEventListener("mousemove", rafDragCircle);
        ownerWindow.addEventListener("mouseup", deactivatedragHueCircle);
      }
      function deactivatedragHueCircle() {
        ownerWindow.removeEventListener("mousemove", rafDragCircle);
        ownerWindow.removeEventListener("mouseup", deactivatedragHueCircle);
        function preventClicks(e) {
          e.stopPropagation();
        }
        ownerWindow.addEventListener("click", preventClicks, true);
        setTimeout(() => {
          ownerWindow.removeEventListener("click", preventClicks, true);
        }, 100);
      }
      function dragHueCircle(event2) {
        if (!event2.which) {
          deactivatedragHueCircle();
          return false;
        }
        let h;
        const mouseLeftPosition = event2.clientX;
        const stripOffset = root2.value.getBoundingClientRect();
        const startX = stripOffset.left;
        const newLeft = mouseLeftPosition - startX;
        if (newLeft > stripOffset.width) {
          h = 360;
        } else if (newLeft < 0) {
          h = 0;
        } else {
          const percent = newLeft * 100 / stripOffset.width;
          h = 360 * percent / 100;
        }
        let newColor = __spreadProps(__spreadValues({}, props.modelValue), {
          h
        });
        if (lastHue.value !== h) {
          emit("update:modelValue", newColor);
        }
        lastHue.value = h;
      }
      vue.onMounted(() => {
        ownerWindow = root2.value.ownerDocument.defaultView;
      });
      vue.onBeforeUnmount(() => {
        deactivatedragHueCircle();
      });
      vue.onUnmounted(() => {
        ownerWindow.removeEventListener("mousemove", dragHueCircle);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "root",
          ref: root2,
          class: "znpb-colorpicker-inner-editor__hue-wrapper",
          onClick: dragHueCircle
        }, [
          vue.createElementVNode("div", _hoisted_1$18, [
            vue.createElementVNode("span", {
              style: vue.normalizeStyle(hueStyles.value),
              class: "znpb-colorpicker-inner-editor__hue-indicator",
              onMousedown: actHueCircleDrag
            }, null, 36)
          ])
        ], 512);
      };
    }
  }));
  const HueStrip_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$1s = /* @__PURE__ */ vue.defineComponent({
    __name: "OpacityStrip",
    props: {
      modelValue: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const root2 = vue.ref(null);
      const opacityStrip = vue.ref(null);
      const rafDragCircle = rafSchd$1(dragCircle);
      let lastA;
      let ownerWindow;
      const opacityStyles = vue.computed(() => {
        return {
          left: props.modelValue.a * 100 + "%"
        };
      });
      const barStyles = vue.computed(() => {
        const color = tinycolor(props.modelValue);
        return {
          "background-image": "linear-gradient(to right, rgba(255, 0, 0, 0)," + color.toHexString() + ")"
        };
      });
      function actCircleDrag() {
        ownerWindow.addEventListener("mousemove", rafDragCircle);
        ownerWindow.addEventListener("mouseup", deactivateDragCircle);
      }
      function deactivateDragCircle() {
        ownerWindow.removeEventListener("mousemove", rafDragCircle);
        ownerWindow.removeEventListener("mouseup", deactivateDragCircle);
        function preventClicks(e) {
          e.stopPropagation();
        }
        ownerWindow.addEventListener("click", preventClicks, true);
        setTimeout(() => {
          ownerWindow.removeEventListener("click", preventClicks, true);
        }, 100);
      }
      function dragCircle(event2) {
        if (!event2.which) {
          deactivateDragCircle();
          return false;
        }
        let a;
        const mouseLeftPosition = event2.clientX;
        const stripOffset = opacityStrip.value.getBoundingClientRect();
        const startX = stripOffset.left;
        const newLeft = mouseLeftPosition - startX;
        if (newLeft > stripOffset.width) {
          a = 1;
        } else if (newLeft < 0) {
          a = 0;
        } else {
          a = newLeft / stripOffset.width;
          a = Number(a.toFixed(2));
        }
        const newColor = __spreadProps(__spreadValues({}, props.modelValue), {
          a
        });
        if (lastA !== a) {
          emit("update:modelValue", newColor);
        }
        lastA = a;
      }
      vue.onMounted(() => {
        var _a2;
        ownerWindow = (_a2 = root2.value) == null ? void 0 : _a2.ownerDocument.defaultView;
      });
      vue.onBeforeUnmount(() => {
        deactivateDragCircle();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "root",
          ref: root2,
          class: "znpb-colorpicker-inner-editor__opacity-wrapper",
          onMousedown: actCircleDrag
        }, [
          vue.createElementVNode("div", {
            class: "znpb-colorpicker-inner-editor__opacity",
            onClick: dragCircle
          }, [
            vue.createElementVNode("div", {
              ref_key: "opacityStrip",
              ref: opacityStrip,
              style: vue.normalizeStyle(barStyles.value),
              class: "znpb-colorpicker-inner-editor__opacity-strip"
            }, null, 4),
            vue.createElementVNode("span", {
              style: vue.normalizeStyle(opacityStyles.value),
              class: "znpb-colorpicker-inner-editor__opacity-indicator",
              onMousedown: actCircleDrag
            }, null, 36)
          ])
        ], 544);
      };
    }
  });
  const OpacityStrip_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$17 = { class: "znpb-input-number" };
  const __default__$11 = {
    name: "InputNumber",
    inheritAttrs: false
  };
  const _sfc_main$1r = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$11), {
    props: {
      modelValue: { default: null },
      min: {},
      max: {},
      step: { default: 1 },
      shiftStep: { default: 5 },
      suffix: {},
      placeholder: { default: null }
    },
    emits: ["update:modelValue", "linked-value"],
    setup(__props, { emit }) {
      const props = __props;
      const shiftKey = vue.ref(false);
      let initialPosition = 0;
      let lastPosition = 0;
      const dragTreshold = 3;
      let canChangeValue = false;
      const model = vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          if (props.min !== void 0 && newValue < props.min) {
            newValue = props.min;
          }
          if (props.max !== void 0 && newValue > props.max) {
            newValue = props.max;
          }
          if (newValue !== props.modelValue) {
            emit("update:modelValue", +newValue);
          }
        }
      });
      function reset() {
        initialPosition = 0;
        lastPosition = 0;
        canChangeValue = false;
      }
      function actNumberDrag(event2) {
        if (event2 instanceof MouseEvent) {
          initialPosition = event2.clientY;
        }
        document.body.style.userSelect = "none";
        window.addEventListener("mousemove", dragNumber);
        window.addEventListener("mouseup", deactivatedragNumber);
        window.addEventListener("keyup", onKeyUp);
      }
      function onKeyDown(event2) {
        if (event2.altKey) {
          emit("linked-value");
        }
        shiftKey.value = event2.shiftKey;
      }
      function onKeyUp(event2) {
        emit("linked-value");
      }
      function deactivatedragNumber() {
        document.body.style.userSelect = "";
        document.body.style.pointerEvents = "";
        window.removeEventListener("mousemove", dragNumber);
        window.removeEventListener("mouseup", deactivatedragNumber);
        window.removeEventListener("keyup", onKeyUp);
        function preventClicks(e) {
          e.stopPropagation();
        }
        window.addEventListener("click", preventClicks, true);
        setTimeout(() => {
          window.removeEventListener("click", preventClicks, true);
        }, 100);
        reset();
      }
      function dragNumber(event2) {
        var _a2, _b;
        const distance = initialPosition - event2.clientY;
        const directionUp = event2.pageY < lastPosition;
        const initialValue = (_b = (_a2 = model.value) != null ? _a2 : props.min) != null ? _b : 0;
        if (Math.abs(distance) > dragTreshold) {
          canChangeValue = true;
        }
        if (canChangeValue && distance % 2 === 0) {
          document.body.style.pointerEvents = "none";
          const increment = event2.shiftKey ? props.shiftStep : props.step;
          model.value = directionUp ? +(initialValue + increment).toFixed(12) : +(initialValue - increment).toFixed(12);
          event2.preventDefault();
        }
        lastPosition = event2.clientY;
      }
      vue.onBeforeUnmount(() => {
        deactivatedragNumber();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$17, [
          vue.createVNode(_sfc_main$1w, {
            modelValue: model.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
            type: "number",
            class: "znpb-input-number__input",
            min: _ctx.min,
            max: _ctx.max,
            step: shiftKey.value ? _ctx.shiftStep : _ctx.step,
            placeholder: _ctx.placeholder,
            onKeydown: onKeyDown,
            onMousedown: actNumberDrag,
            onTouchstartPassive: vue.withModifiers(actNumberDrag, ["prevent"]),
            onMouseup: deactivatedragNumber
          }, {
            suffix: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "default"),
              vue.createTextVNode(" " + vue.toDisplayString(_ctx.suffix), 1)
            ]),
            _: 3
          }, 8, ["modelValue", "min", "max", "step", "placeholder", "onTouchstartPassive"])
        ]);
      };
    }
  }));
  const InputNumber_vue_vue_type_style_index_0_lang = "";
  const DEFAULT_UNIT_TYPES = ["px", "%", "em", "rem", "vw", "vh"];
  const ALL_NUMBER_UNITS_TYPES = [
    "px",
    "%",
    "em",
    "rem",
    "vw",
    "vh",
    "cm",
    "mm",
    "in",
    "pt",
    "pc",
    "ex",
    "ch",
    "vmin",
    "vmax"
  ];
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property2) {
          style2[property2] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  const applyStyles$1 = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect$2,
    requires: ["computeStyles"]
  };
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }
  function contains(parent2, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent2.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent2.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }
  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }
  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min2, value, max2) {
    var v = within(min2, value, max2);
    return v > max2 ? max2 : v;
  }
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }
  function expandToHashMap(value, keys2) {
    return keys2.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options2 = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options2.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect$1(_ref2) {
    var state = _ref2.state, options2 = _ref2.options;
    var _options$element = options2.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  const arrow$1 = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect$1,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function getVariation(placement) {
    return placement.split("-")[1];
  }
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options2 = _ref5.options;
    var _options$gpuAccelerat = options2.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options2.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options2.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  const computeStyles$1 = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };
  var passive = {
    passive: true
  };
  function effect(_ref) {
    var state = _ref.state, instance2 = _ref.instance, options2 = _ref.options;
    var _options$scroll = options2.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options2.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance2.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance2.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance2.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance2.update, passive);
      }
    };
  }
  const eventListeners = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect,
    data: {}
  };
  var hash$1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash$1[matched];
    });
  }
  var hash = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash[matched];
    });
  }
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element),
      y
    };
  }
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
      }
    }
    return offsets;
  }
  function detectOverflow(state, options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    var _options = options2, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }
  function computeAutoPlacement(state, options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    var _options = options2, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options2 = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options2.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options2.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options2.fallbackPlacements, padding = options2.padding, boundary = options2.boundary, rootBoundary = options2.rootBoundary, altBoundary = options2.altBoundary, _options$flipVariatio = options2.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options2.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
      var placement = placements2[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break")
          break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  const flip$1 = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  const hide$1 = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options2 = _ref2.options, name = _ref2.name;
    var _options$offset = options2.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  }
  const offset$1 = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  const popperOffsets$1 = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function preventOverflow(_ref) {
    var state = _ref.state, options2 = _ref.options, name = _ref.name;
    var _options$mainAxis = options2.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options2.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options2.boundary, rootBoundary = options2.rootBoundary, altBoundary = options2.altBoundary, padding = options2.padding, _options$tether = options2.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options2.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min$1 = offset2 + overflow[mainSide];
      var max$1 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  const preventOverflow$1 = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }
  function debounce(fn) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn());
          });
        });
      }
      return pending;
    };
  }
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference2, popper2, options2) {
      if (options2 === void 0) {
        options2 = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance2 = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options3 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options3);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance2.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
            if (state.reset === true) {
              state.reset = false;
              index2 = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index2], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn === "function") {
              state = fn({
                state,
                options: _options,
                name,
                instance: instance2
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance2.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance2;
      }
      instance2.setOptions(options2).then(function(state2) {
        if (!isDestroyed && options2.onFirstUpdate) {
          options2.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref3) {
          var name = _ref3.name, _ref3$options = _ref3.options, options3 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
          if (typeof effect2 === "function") {
            var cleanupFn = effect2({
              state,
              name,
              instance: instance2,
              options: options3
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn) {
          return fn();
        });
        effectCleanupFns = [];
      }
      return instance2;
    };
  }
  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });
  const getManager = () => {
    let zIndex = 1e4;
    const getZIndex2 = () => {
      zIndex++;
      return zIndex;
    };
    const removeZIndex2 = () => {
      zIndex--;
    };
    return {
      getZIndex: getZIndex2,
      removeZIndex: removeZIndex2
    };
  };
  const instance = getManager();
  const { getZIndex, removeZIndex } = instance;
  const _hoisted_1$16 = {
    key: 0,
    "data-popper-arrow": "true",
    class: "hg-popper--with-arrows"
  };
  let preventOutsideClickPropagation = false;
  const _sfc_main$1q = /* @__PURE__ */ vue.defineComponent({
    __name: "Tooltip",
    props: {
      modifiers: { default: () => [] },
      tag: { default: "div" },
      content: { default: null },
      show: { type: Boolean, default: false },
      openDelay: { default: 10 },
      closeDelay: { default: 10 },
      enterable: { type: Boolean, default: true },
      hideAfter: { default: null },
      showArrows: { type: Boolean, default: true },
      appendTo: { default: "body" },
      trigger: { default: "hover" },
      closeOnOutsideClick: { type: Boolean, default: false },
      closeOnEscape: { type: Boolean, default: false },
      popperRef: { default: null },
      tooltipClass: { default: "" },
      tooltipStyle: { default: () => ({}) },
      placement: { default: "top" },
      strategy: { default: "absolute" }
    },
    emits: ["show", "hide", "update:show"],
    setup(__props, { expose: __expose, emit }) {
      const props = __props;
      const root2 = vue.ref(null);
      const popperContentRef = vue.ref(null);
      const popperSelector = vue.ref(null);
      const ownerDocument = vue.ref(null);
      const isVisible = vue.ref(!!props.show);
      const zIndex = vue.ref(9);
      let popperInstance = null;
      let timeout = null;
      const getStyle = vue.computed(() => {
        return __spreadProps(__spreadValues({}, props.tooltipStyle), {
          "z-index": zIndex.value
        });
      });
      const popperOptions = vue.computed(() => {
        const options2 = {};
        const instanceOptions = JSON.parse(JSON.stringify(props));
        instanceOptions.modifiers = props.modifiers || [];
        if (props.showArrows) {
          const hasOffsetModifier = instanceOptions.modifiers.find((modifier) => modifier.name === "offset");
          if (!hasOffsetModifier) {
            instanceOptions.modifiers.push({
              name: "offset",
              options: {
                offset: [0, 10]
              }
            });
          }
        }
        return merge$1(options2, instanceOptions);
      });
      vue.watch(
        () => props.closeOnOutsideClick,
        (newValue) => {
          if (newValue) {
            ownerDocument.value.addEventListener("click", onOutsideClick, true);
          } else {
            ownerDocument.value.removeEventListener("click", onOutsideClick, true);
          }
        }
      );
      vue.watch(
        () => props.hideAfter,
        (newValue) => {
          if (newValue) {
            onHideAfter();
          }
        }
      );
      vue.watch(
        () => props.show,
        (newValue) => {
          isVisible.value = !!newValue;
        }
      );
      vue.watch(isVisible, (newValue, oldValue) => {
        if (!!newValue !== !!oldValue) {
          if (newValue) {
            vue.nextTick(() => {
              onTransitionEnter();
            });
          } else {
            onTransitionLeave();
          }
        }
      });
      vue.onBeforeUnmount(() => {
        if (ownerDocument.value) {
          ownerDocument.value.removeEventListener("click", onOutsideClick, true);
          ownerDocument.value.removeEventListener("keyup", onKeyUp);
        }
        destroyPopper();
        if (isVisible.value) {
          emit("hide");
        }
        if (zIndex.value) {
          zIndex.value = null;
        }
      });
      vue.onMounted(() => {
        if (props.show) {
          onTransitionEnter();
        }
      });
      function onTransitionEnter() {
        instantiatePopper();
        emit("show");
        emit("update:show", true);
        zIndex.value = getZIndex();
      }
      function onTransitionLeave() {
        destroyPopper();
        emit("hide");
        emit("update:show", false);
        removeZIndex();
      }
      function getAppendToElement() {
        if (props.appendTo !== "element") {
          return ownerDocument.value.querySelector(props.appendTo);
        }
        return root2.value;
      }
      function showPopper() {
        isVisible.value = true;
      }
      function hidePopper() {
        isVisible.value = false;
      }
      function destroyPopper() {
        if (popperInstance) {
          popperInstance.destroy();
          popperInstance = null;
        }
        removePopperEvents();
        preventOutsideClickPropagation = false;
      }
      function instantiatePopper() {
        popperSelector.value = props.popperRef || root2.value;
        ownerDocument.value = popperSelector.value.ownerDocument || root2.value.ownerDocument;
        if (popperInstance && popperInstance.destroy) {
          popperInstance.destroy();
          popperInstance = null;
        }
        if (popperSelector.value) {
          vue.nextTick(() => {
            popperInstance = createPopper(popperSelector.value, popperContentRef.value, popperOptions.value);
          });
        }
        onHideAfter();
        addPopperEvents();
      }
      function onMouseEnter() {
        if (props.trigger !== "hover") {
          return;
        }
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          showPopper();
        }, props.openDelay);
      }
      function onMouseLeave() {
        if (props.trigger !== "hover") {
          return;
        }
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          hidePopper();
        }, props.closeDelay);
      }
      function onHideAfter() {
        if (props.hideAfter) {
          if (timeout) {
            clearTimeout(timeout);
          }
          timeout = setTimeout(() => {
            hidePopper();
          }, props.hideAfter);
        }
      }
      function onClick(event2) {
        if (props.trigger !== "click") {
          return;
        }
        if (popperContentRef.value && popperContentRef.value.contains(event2.target)) {
          return;
        }
        isVisible.value = !isVisible.value;
      }
      function onOutsideClick(event2) {
        if (!isVisible.value || preventOutsideClickPropagation) {
          return;
        }
        preventOutsideClickPropagation = true;
        if (popperSelector.value && typeof popperSelector.value.contains === "function" && popperSelector.value.contains(event2.target)) {
          preventOutsideClickPropagation = false;
          return;
        }
        if (popperContentRef.value && popperContentRef.value.contains(event2.target)) {
          preventOutsideClickPropagation = false;
          return;
        }
        hidePopper();
        emit("update:show", false);
        preventOutsideClickPropagation = false;
      }
      function onKeyUp(event2) {
        if (event2.which === 27) {
          hidePopper();
          event2.stopPropagation();
          event2.stopImmediatePropagation();
        }
      }
      function scheduleUpdate() {
        if (popperInstance) {
          popperInstance.update();
        }
      }
      function addPopperEvents() {
        if (props.closeOnOutsideClick) {
          ownerDocument.value.addEventListener("click", onOutsideClick, true);
        }
        if (props.closeOnEscape) {
          ownerDocument.value.addEventListener("keyup", onKeyUp);
        }
      }
      function removePopperEvents() {
        if (ownerDocument.value) {
          ownerDocument.value.removeEventListener("click", onOutsideClick, true);
        }
        if (props.closeOnEscape && ownerDocument.value) {
          ownerDocument.value.removeEventListener("keyup", onKeyUp);
        }
      }
      const api2 = {
        showPopper,
        hidePopper,
        destroyPopper,
        scheduleUpdate
      };
      __expose(api2);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
          ref_key: "root",
          ref: root2,
          onClick,
          onMouseenter: onMouseEnter,
          onMouseleave: onMouseLeave
        }, {
          default: vue.withCtx(() => [
            getAppendToElement ? (vue.openBlock(), vue.createBlock(vue.Teleport, {
              key: 0,
              disabled: _ctx.appendTo === "element",
              to: "body"
            }, [
              isVisible.value ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                ref_key: "popperContentRef",
                ref: popperContentRef,
                class: vue.normalizeClass(["hg-popper", _ctx.tooltipClass]),
                style: vue.normalizeStyle(getStyle.value)
              }, [
                vue.createTextVNode(vue.toDisplayString(_ctx.content) + " ", 1),
                vue.renderSlot(_ctx.$slots, "content"),
                _ctx.showArrows ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$16)) : vue.createCommentVNode("", true)
              ], 6)) : vue.createCommentVNode("", true)
            ], 8, ["disabled"])) : vue.createCommentVNode("", true),
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 544);
      };
    }
  });
  const Tooltip_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$15 = { class: "znpb-number-unit-list hg-popper-list" };
  const _hoisted_2$L = ["onClick"];
  const dragThreshold = 3;
  const _sfc_main$1p = /* @__PURE__ */ vue.defineComponent({
    __name: "InputNumberUnit",
    props: {
      modelValue: { default: "" },
      min: { default: -Infinity },
      max: { default: Infinity },
      step: { default: 1 },
      shift_step: { default: 5 },
      placeholder: { default: "" },
      default_unit: { default: "" },
      units: { default: function() {
        return DEFAULT_UNIT_TYPES;
      } }
    },
    emits: ["update:modelValue", "linked-value"],
    setup(__props, { emit }) {
      const props = __props;
      const root2 = vue.ref(null);
      const numberUnitInput = vue.ref(null);
      const localRawValue = vue.ref("");
      const localValue = vue.ref(0);
      const localUnit = vue.ref("");
      const showUnits = vue.ref(false);
      let preventWatcher = false;
      const defaultUnit = vue.computed(() => {
        return props.default_unit.length ? props.default_unit : props.units[0];
      });
      const computedPlaceholder = vue.computed(() => {
        const { value, rawValue } = getValuesFromString(props.placeholder);
        return value != null ? value : rawValue;
      });
      const activeUnit = vue.computed(() => {
        if (props.units.includes(localUnit.value)) {
          return localUnit.value;
        } else if (props.units.includes(localRawValue.value)) {
          return localRawValue.value;
        }
        return defaultUnit.value;
      });
      vue.watch(
        () => props.modelValue,
        (newValue) => {
          if (preventWatcher) {
            return;
          }
          const { unit, value, rawValue, unitIsValid } = getValuesFromString(newValue);
          localRawValue.value = rawValue;
          localValue.value = null !== value ? value : getValueInRange(0);
          if (localRawValue.value && localRawValue.value.length) {
            localUnit.value = unitIsValid && unit ? unit : "";
          } else {
            const { unit: unit2 } = getValuesFromString(props.placeholder);
            localUnit.value = unit2 && unit2.length ? unit2 : defaultUnit.value ? defaultUnit.value : "";
          }
          preventWatcher = false;
        },
        {
          immediate: true
        }
      );
      function isNumeric(value) {
        return !isNaN(value) && !isNaN(parseFloat(value));
      }
      function getValuesFromString(string) {
        let unit = null;
        let value = null;
        let rawValue = "";
        let unitIsValid = false;
        if (isNumeric(string)) {
          value = parseFloat(string);
          rawValue = string;
        } else {
          const { value: parsedValue, unit: parsedUnit } = getIntegerAndUnit(string);
          unitIsValid = parsedUnit !== null && props.units.includes(parsedUnit);
          if (parsedValue !== null && parsedUnit !== null) {
            rawValue = unitIsValid ? `${parsedValue}` : `${parsedValue}${parsedUnit}`;
            value = parsedValue;
            unit = parsedUnit;
          } else {
            rawValue = string != null ? string : "";
            unit = parsedUnit;
          }
        }
        return {
          unit,
          value,
          rawValue,
          unitIsValid
        };
      }
      function changeUnit(newUnit) {
        showUnits.value = false;
        localUnit.value = newUnit;
        vue.nextTick(() => {
          if (numberUnitInput.value !== null) {
            numberUnitInput.value.focus();
          }
        });
        if (props.units && props.units.includes(newUnit) || ALL_NUMBER_UNITS_TYPES.includes(newUnit)) {
          if (localValue.value) {
            onTextValueChange(`${localValue.value}${newUnit}`);
          } else {
            onTextValueChange("", {
              shouldPreventWatcher: true
            });
          }
        } else if (newUnit === "") {
          onTextValueChange("", {
            shouldPreventWatcher: true
          });
        } else {
          localUnit.value = "";
          onTextValueChange(newUnit, {
            shouldPreventWatcher: true
          });
        }
      }
      function onTextValueChange(newValue, flags = {
        shouldPreventWatcher: false,
        updateLocalRawValue: true
      }) {
        const { unit, value, rawValue } = getValuesFromString(newValue);
        const validUnit = unit && unit.length ? unit : localUnit.value;
        const { shouldPreventWatcher = false, updateLocalRawValue = true } = flags;
        preventWatcher = shouldPreventWatcher;
        if (updateLocalRawValue) {
          localRawValue.value = newValue;
        }
        if (newValue.length === 0) {
          preventWatcher = true;
        }
        if (value !== null && validUnit) {
          const validValue = getValueInRange(value);
          emit("update:modelValue", `${validValue}${validUnit}`);
        } else {
          emit("update:modelValue", rawValue);
        }
      }
      function getValueInRange(value) {
        return Math.max(props.min, Math.min(props.max, value));
      }
      function getIntegerAndUnit(string) {
        const match = typeof string === "string" && string ? string.match(/^([+-]?[0-9]+(?:[.][0-9]+)?)(\D+)?$/) : null;
        const value = match && match[1] ? parseFloat(match[1]) : null;
        const unit = match && match[2] ? match[2] : null;
        return {
          value,
          unit
        };
      }
      let mouseDownPositionTop = 0;
      let draggingPositionTop = 0;
      let shiftDrag = false;
      let toTop = false;
      let directionReset = 0;
      let draggingCached = 0;
      let dragging = false;
      const dragNumberThrottle = rafSchd$1(dragNumber);
      function actNumberDrag(event2) {
        dragging = true;
        draggingCached = localValue.value;
        mouseDownPositionTop = event2.clientY;
        if (!canUpdateNumber()) {
          return;
        }
        if (root2.value) {
          root2.value.ownerDocument.body.style.userSelect = "none";
          if (root2.value.ownerDocument.defaultView) {
            root2.value.ownerDocument.defaultView.addEventListener("mousemove", dragNumberThrottle);
            root2.value.ownerDocument.defaultView.addEventListener("mouseup", deactivateDragNumber);
          }
        }
      }
      function canUpdateNumber() {
        return localRawValue.value === "" || isNumeric(localRawValue.value);
      }
      function onKeyDown(event2) {
        if (event2.altKey) {
          event2.preventDefault();
          emit("linked-value");
        }
        shiftDrag = event2.shiftKey;
        if (!canUpdateNumber()) {
          return;
        }
        if (event2.key === "ArrowUp" || event2.key === "ArrowDown") {
          toTop = event2.key === "ArrowUp";
          setDraggingValue();
          event2.preventDefault();
        }
      }
      function deactivateDragNumber() {
        dragNumberThrottle.cancel();
        dragging = false;
        if (root2.value) {
          root2.value.ownerDocument.body.style.userSelect = "";
          root2.value.ownerDocument.body.style.pointerEvents = "";
          root2.value.ownerDocument.defaultView.removeEventListener("mousemove", dragNumberThrottle);
        }
      }
      function removeEvents() {
        deactivateDragNumber();
        if (root2.value) {
          root2.value.ownerDocument.defaultView.removeEventListener("mouseup", deactivateDragNumber);
        }
      }
      function dragNumber(event2) {
        const pageY = event2.pageY;
        shiftDrag = event2.shiftKey;
        draggingPositionTop = event2.clientY;
        if (Math.abs(mouseDownPositionTop - draggingPositionTop) > dragThreshold) {
          if (pageY < directionReset) {
            toTop = true;
          } else {
            toTop = false;
          }
          if (root2.value) {
            root2.value.ownerDocument.body.style.pointerEvents = "none";
          }
          if (pageY !== directionReset) {
            setDraggingValue();
          }
        }
        directionReset = event2.pageY;
      }
      function setDraggingValue() {
        let newValue;
        if (dragging) {
          const dragged = mouseDownPositionTop - dragThreshold - draggingPositionTop;
          newValue = draggingCached + dragged;
          if (shiftDrag) {
            newValue = newValue % props.shift_step ? Math.ceil(newValue / props.shift_step) * props.shift_step : newValue;
          }
        } else {
          let increment = 1;
          if (shiftDrag) {
            increment = toTop ? props.shift_step : -props.shift_step;
          } else {
            increment = toTop ? props.step : -props.step;
          }
          newValue = localValue.value + increment;
          if (shiftDrag) {
            newValue = newValue % props.shift_step ? Math.ceil(newValue / props.shift_step) * props.shift_step : newValue;
            if (toTop && localValue.value % props.shift_step !== 0) {
              newValue -= props.shift_step;
            }
          }
        }
        const unit = localUnit.value && ALL_NUMBER_UNITS_TYPES.includes(localUnit.value) ? localUnit.value : "";
        onTextValueChange(`${newValue}${unit}`, {
          updateLocalRawValue: false
        });
      }
      vue.onBeforeUnmount(() => {
        removeEvents();
      });
      vue.onMounted(() => {
        if (root2.value) {
          root2.value.ownerDocument.defaultView.removeEventListener("mousemove", dragNumberThrottle);
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "root",
          ref: root2,
          class: "znpb-input-number-unit"
        }, [
          vue.createVNode(_sfc_main$1w, {
            ref_key: "numberUnitInput",
            ref: numberUnitInput,
            "model-value": localRawValue.value,
            class: "znpb-input-number--has-units",
            size: "narrow",
            placeholder: computedPlaceholder.value,
            "onUpdate:modelValue": onTextValueChange,
            onMousedown: vue.withModifiers(actNumberDrag, ["stop"]),
            onTouchstartPassive: vue.withModifiers(actNumberDrag, ["prevent"]),
            onMouseup: deactivateDragNumber,
            onKeydown: onKeyDown
          }, {
            suffix: vue.withCtx(() => [
              vue.createVNode(_sfc_main$1q, {
                show: showUnits.value,
                "onUpdate:show": _cache[2] || (_cache[2] = ($event) => showUnits.value = $event),
                trigger: "click",
                placement: "bottom",
                "append-to": "element",
                "show-arrows": false,
                strategy: "fixed",
                "tooltip-class": "hg-popper--no-padding",
                "close-on-outside-click": true,
                class: "znpb-input-number__units-tooltip-wrapper"
              }, {
                content: vue.withCtx(() => [
                  vue.createElementVNode("div", _hoisted_1$15, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.units, (unit, i) => {
                      return vue.openBlock(), vue.createElementBlock("div", {
                        key: i,
                        class: vue.normalizeClass(["znpb-number-unit-list__option hg-popper-list__item", {
                          [`znpb-number-unit-list__option--selected`]: activeUnit.value === unit
                        }]),
                        onClick: vue.withModifiers(($event) => changeUnit(unit), ["stop"])
                      }, vue.toDisplayString(unit.length ? unit : "-"), 11, _hoisted_2$L);
                    }), 128)),
                    vue.createElementVNode("div", {
                      class: vue.normalizeClass(["znpb-number-unit-list__option hg-popper-list__item", {
                        [`znpb-number-unit-list__option--selected`]: activeUnit.value === ""
                      }]),
                      onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => changeUnit(""), ["stop"]))
                    }, vue.toDisplayString(i18n__namespace.__("custom", "zionbuilder")), 3)
                  ])
                ]),
                default: vue.withCtx(() => [
                  vue.createElementVNode("span", {
                    class: "znpb-input-number__unitValue",
                    onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => showUnits.value = !showUnits.value, ["stop"]))
                  }, vue.toDisplayString(localUnit.value.length ? localUnit.value : "-"), 1)
                ]),
                _: 1
              }, 8, ["show"])
            ]),
            _: 1
          }, 8, ["model-value", "placeholder", "onMousedown", "onTouchstartPassive"])
        ], 512);
      };
    }
  });
  const InputNumberUnit_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$14 = {
    key: 0,
    class: "znpb-form-label-content"
  };
  const _hoisted_2$K = { key: 1 };
  const __default__$10 = {
    name: "InputLabel"
  };
  const _sfc_main$1o = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$10), {
    props: {
      label: {},
      align: { default: "center" },
      position: { default: "bottom" },
      icon: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("label", {
          class: vue.normalizeClass(["znpb-form-label", {
            [`znpb-form-label--${_ctx.align}`]: _ctx.align,
            [`znpb-form-label--position-${_ctx.position}`]: _ctx.position
          }])
        }, [
          vue.renderSlot(_ctx.$slots, "default"),
          _ctx.$slots.label || _ctx.label || _ctx.icon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$14, [
            _ctx.icon ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
              key: 0,
              icon: _ctx.icon
            }, null, 8, ["icon"])) : vue.createCommentVNode("", true),
            !_ctx.$slots.label ? (vue.openBlock(), vue.createElementBlock("h4", _hoisted_2$K, vue.toDisplayString(_ctx.label), 1)) : vue.createCommentVNode("", true),
            vue.renderSlot(_ctx.$slots, "label")
          ])) : vue.createCommentVNode("", true)
        ], 2);
      };
    }
  }));
  const InputLabel_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$13 = { class: "znpb-colorpicker-inner-editor-rgba" };
  const _sfc_main$1n = /* @__PURE__ */ vue.defineComponent({
    __name: "RgbaElement",
    props: {
      modelValue: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      function updateValue(property2, newValue) {
        emit("update:modelValue", __spreadProps(__spreadValues({}, props.modelValue), {
          [property2]: newValue
        }));
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$13, [
          vue.createVNode(vue.unref(_sfc_main$1o), null, {
            default: vue.withCtx(() => {
              var _a2;
              return [
                vue.createVNode(vue.unref(_sfc_main$1r), {
                  modelValue: (_a2 = _ctx.modelValue) == null ? void 0 : _a2.r,
                  min: 0,
                  max: 255,
                  step: 1,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => updateValue("r", $event))
                }, null, 8, ["modelValue"]),
                vue.createTextVNode(" R ")
              ];
            }),
            _: 1
          }),
          vue.createVNode(vue.unref(_sfc_main$1o), null, {
            default: vue.withCtx(() => {
              var _a2;
              return [
                vue.createVNode(vue.unref(_sfc_main$1r), {
                  modelValue: (_a2 = _ctx.modelValue) == null ? void 0 : _a2.g,
                  min: 0,
                  max: 255,
                  step: 1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => updateValue("g", $event))
                }, null, 8, ["modelValue"]),
                vue.createTextVNode(" G ")
              ];
            }),
            _: 1
          }),
          vue.createVNode(vue.unref(_sfc_main$1o), null, {
            default: vue.withCtx(() => {
              var _a2;
              return [
                vue.createVNode(vue.unref(_sfc_main$1r), {
                  modelValue: (_a2 = _ctx.modelValue) == null ? void 0 : _a2.b,
                  min: 0,
                  max: 255,
                  step: 1,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => updateValue("b", $event))
                }, null, 8, ["modelValue"]),
                vue.createTextVNode(" B ")
              ];
            }),
            _: 1
          }),
          vue.createVNode(vue.unref(_sfc_main$1o), null, {
            default: vue.withCtx(() => {
              var _a2;
              return [
                vue.createVNode(vue.unref(_sfc_main$1r), {
                  modelValue: (_a2 = _ctx.modelValue) == null ? void 0 : _a2.a,
                  min: 0,
                  max: 1,
                  step: 0.01,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => updateValue("a", $event))
                }, null, 8, ["modelValue"]),
                vue.createTextVNode(" A ")
              ];
            }),
            _: 1
          })
        ]);
      };
    }
  });
  const RgbaElement_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$12 = { class: "znpb-colorpicker-inner-editor-hsla" };
  const _hoisted_2$J = /* @__PURE__ */ vue.createElementVNode("span", { class: "znpb-colorpicker-inner-editor__number-unit" }, "%", -1);
  const _hoisted_3$s = /* @__PURE__ */ vue.createElementVNode("span", { class: "znpb-colorpicker-inner-editor__number-unit" }, "%", -1);
  const _sfc_main$1m = /* @__PURE__ */ vue.defineComponent({
    __name: "HslaElement",
    props: {
      modelValue: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const hsla = vue.computed(() => {
        const { h, s, l, a } = props.modelValue;
        return {
          h: Number(h.toFixed()),
          s: Number((s * 100).toFixed()),
          l: Number((l * 100).toFixed()),
          a
        };
      });
      function updateHex(property2, newValue) {
        const value = property2 === "s" || property2 === "l" ? newValue / 100 : newValue;
        emit("update:modelValue", __spreadProps(__spreadValues({}, props.modelValue), {
          [property2]: value
        }));
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$12, [
          vue.createVNode(vue.unref(_sfc_main$1o), null, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(_sfc_main$1r), {
                modelValue: hsla.value.h,
                min: 0,
                max: 360,
                step: 1,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => updateHex("h", $event))
              }, null, 8, ["modelValue"]),
              vue.createTextVNode(" H ")
            ]),
            _: 1
          }),
          vue.createVNode(vue.unref(_sfc_main$1o), { class: "znpb-colorpicker-inner-editor__number--has-percentage" }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(_sfc_main$1r), {
                modelValue: hsla.value.s,
                "onUpdate:modelValue": [
                  _cache[1] || (_cache[1] = ($event) => hsla.value.s = $event),
                  _cache[2] || (_cache[2] = ($event) => updateHex("s", $event))
                ],
                min: 0,
                max: 100,
                step: 1
              }, {
                default: vue.withCtx(() => [
                  _hoisted_2$J
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.createTextVNode(" S ")
            ]),
            _: 1
          }),
          vue.createVNode(vue.unref(_sfc_main$1o), { class: "znpb-colorpicker-inner-editor__number--has-percentage" }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(_sfc_main$1r), {
                modelValue: hsla.value.l,
                "onUpdate:modelValue": [
                  _cache[3] || (_cache[3] = ($event) => hsla.value.l = $event),
                  _cache[4] || (_cache[4] = ($event) => updateHex("l", $event))
                ],
                min: 0,
                max: 100,
                step: 1
              }, {
                default: vue.withCtx(() => [
                  _hoisted_3$s
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.createTextVNode(" L ")
            ]),
            _: 1
          }),
          vue.createVNode(vue.unref(_sfc_main$1o), null, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(_sfc_main$1r), {
                modelValue: hsla.value.a,
                "onUpdate:modelValue": [
                  _cache[5] || (_cache[5] = ($event) => hsla.value.a = $event),
                  _cache[6] || (_cache[6] = ($event) => updateHex("a", $event))
                ],
                min: 0,
                max: 1,
                step: 0.01
              }, null, 8, ["modelValue"]),
              vue.createTextVNode(" A ")
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  const HslaElement_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$11 = { class: "znpb-colorpicker-inner-editor-hex" };
  const _sfc_main$1l = /* @__PURE__ */ vue.defineComponent({
    __name: "HexElement",
    props: {
      modelValue: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const hexValue = vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$11, [
          vue.createVNode(vue.unref(_sfc_main$1o), null, {
            default: vue.withCtx(() => [
              vue.createVNode(_sfc_main$1w, {
                modelValue: hexValue.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => hexValue.value = $event),
                class: "znpb-form-colorpicker__input-text"
              }, null, 8, ["modelValue"]),
              vue.createTextVNode(" HEX ")
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  const HexElement_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$10 = { class: "znpb-colorpicker-inner-editor" };
  const _hoisted_2$I = { class: "znpb-colorpicker-inner-editor__colors" };
  const _hoisted_3$r = { class: "znpb-colorpicker-inner-editor__current-color" };
  const _hoisted_4$g = { class: "znpb-colorpicker-circle znpb-colorpicker-circle--opacity" };
  const _hoisted_5$c = { class: "znpb-colorpicker-inner-editor__stripes" };
  const _hoisted_6$7 = { class: "znpb-colorpicker-inner-editor__rgba" };
  const _hoisted_7$5 = { class: "znpb-color-picker-change-color znpb-input-number-arrow-wrapper" };
  const _sfc_main$1k = /* @__PURE__ */ vue.defineComponent({
    __name: "PanelHex",
    props: {
      modelValue: {}
    },
    emits: ["update:modelValue", "update:format"],
    setup(__props, { emit }) {
      const props = __props;
      const { isSupported, open: open2, sRGBHex } = useEyeDropper();
      function openEyeDropper() {
        return __async(this, null, function* () {
          let result;
          try {
            result = yield open2();
          } catch (error) {
          }
          if (result) {
            emit("update:modelValue", result.sRGBHex);
          }
        });
      }
      const hexValue = vue.computed({
        get() {
          return props.modelValue.format === "hex8" ? props.modelValue.hex8 : props.modelValue.hex;
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      const hslaValue = vue.computed({
        get() {
          return props.modelValue.hsla;
        },
        set(hsla) {
          emit("update:modelValue", hsla);
        }
      });
      const rgbaValue = vue.computed({
        get() {
          return props.modelValue.rgba;
        },
        set(rgba) {
          emit("update:modelValue", rgba);
        }
      });
      function changeHex() {
        if (props.modelValue.format === "hex" || props.modelValue.format === "hex8" || props.modelValue.format === "name") {
          emit("update:modelValue", props.modelValue.hsla);
        } else if (props.modelValue.format === "hsl") {
          emit("update:modelValue", props.modelValue.rgba);
        } else if (props.modelValue.format === "rgb") {
          emit("update:modelValue", props.modelValue.hex);
        }
      }
      function changeHexback() {
        if (props.modelValue.format === "hsl") {
          emit("update:modelValue", props.modelValue.hex);
        } else if (props.modelValue.format === "rgb") {
          emit("update:modelValue", props.modelValue.hsla);
        } else if (props.modelValue.format === "hex" || props.modelValue.format === "hex8" || props.modelValue.format === "name") {
          emit("update:modelValue", props.modelValue.rgba);
        }
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$10, [
          vue.createElementVNode("div", _hoisted_2$I, [
            vue.createElementVNode("div", _hoisted_3$r, [
              vue.createElementVNode("span", _hoisted_4$g, [
                vue.createElementVNode("span", {
                  style: vue.normalizeStyle({ backgroundColor: _ctx.modelValue.hex8 }),
                  class: "znpb-colorpicker-circle znpb-colorpicker-circle-color"
                }, null, 4)
              ])
            ]),
            vue.createElementVNode("div", _hoisted_5$c, [
              vue.createVNode(_sfc_main$1t, {
                modelValue: hslaValue.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => hslaValue.value = $event)
              }, null, 8, ["modelValue"]),
              vue.createVNode(_sfc_main$1s, {
                modelValue: hslaValue.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => hslaValue.value = $event)
              }, null, 8, ["modelValue"])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_6$7, [
            vue.unref(isSupported) ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
              key: 0,
              icon: "eyedropper",
              class: "znpb-eyedropper",
              onClick: openEyeDropper
            })) : vue.createCommentVNode("", true),
            _ctx.modelValue.format === "rgb" ? (vue.openBlock(), vue.createBlock(_sfc_main$1n, {
              key: 1,
              modelValue: rgbaValue.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => rgbaValue.value = $event)
            }, null, 8, ["modelValue"])) : vue.createCommentVNode("", true),
            _ctx.modelValue.format === "hsl" ? (vue.openBlock(), vue.createBlock(_sfc_main$1m, {
              key: 2,
              modelValue: hslaValue.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => hslaValue.value = $event)
            }, null, 8, ["modelValue"])) : vue.createCommentVNode("", true),
            _ctx.modelValue.format === "hex" || _ctx.modelValue.format === "hex8" || _ctx.modelValue.format === "name" ? (vue.openBlock(), vue.createBlock(_sfc_main$1l, {
              key: 3,
              modelValue: hexValue.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => hexValue.value = $event)
            }, null, 8, ["modelValue"])) : vue.createCommentVNode("", true),
            vue.createElementVNode("div", _hoisted_7$5, [
              vue.createVNode(vue.unref(_sfc_main$1z), {
                icon: "select",
                rotate: 180,
                class: "znpb-arrow-increment",
                onClick: changeHex
              }),
              vue.createVNode(vue.unref(_sfc_main$1z), {
                icon: "select",
                class: "znpb-arrow-decrement",
                onClick: changeHexback
              })
            ])
          ])
        ]);
      };
    }
  });
  const PanelHex_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$$ = { class: "znpb-form-colorPicker-saturation__white" };
  const _hoisted_2$H = { class: "znpb-form-colorPicker-saturation__black" };
  const _sfc_main$1j = /* @__PURE__ */ vue.defineComponent({
    __name: "ColorBoard",
    props: {
      colorObject: {}
    },
    emits: ["update:color-object"],
    setup(__props, { emit }) {
      const props = __props;
      const isDragging = vue.ref(false);
      const root2 = vue.ref(null);
      const boardContent = vue.ref(null);
      let ownerWindow;
      const computedColorObject = vue.computed({
        get() {
          return props.colorObject;
        },
        set(newValue) {
          emit("update:color-object", newValue);
        }
      });
      const pointStyles = vue.computed(() => {
        const { v, s } = props.colorObject.hsva;
        const cssStyles = {
          top: 100 - v * 100 + "%",
          left: s * 100 + "%"
        };
        return cssStyles;
      });
      const bgColor = vue.computed(() => {
        const { h } = props.colorObject.hsva;
        return `hsl(${h}, 100%, 50%)`;
      });
      const boardRect = vue.computed(() => {
        return boardContent.value.getBoundingClientRect();
      });
      const rafDragCircle = rafSchd$1(dragCircle);
      function initiateDrag(event2) {
        isDragging.value = true;
        let { clientX, clientY } = event2;
        ownerWindow.addEventListener("mousemove", rafDragCircle);
        ownerWindow.addEventListener("mouseup", deactivateDragCircle, true);
        const newTop = clientY - boardRect.value.top;
        const newLeft = clientX - boardRect.value.left;
        let bright = 100 - newTop / boardRect.value.height * 100;
        let saturation = newLeft * 100 / boardRect.value.width;
        let newColor = __spreadProps(__spreadValues({}, props.colorObject.hsva), {
          v: bright / 100,
          s: saturation / 100
        });
        computedColorObject.value = newColor;
      }
      function deactivateDragCircle() {
        ownerWindow.removeEventListener("mousemove", rafDragCircle);
        ownerWindow.removeEventListener("mouseup", deactivateDragCircle, true);
        function preventClicks(e) {
          e.stopPropagation();
        }
        ownerWindow.addEventListener("click", preventClicks, true);
        setTimeout(() => {
          ownerWindow.removeEventListener("click", preventClicks, true);
        }, 100);
      }
      function dragCircle(event2) {
        if (!event2.which) {
          deactivateDragCircle();
          return false;
        }
        let { clientX, clientY } = event2;
        let newLeft = clientX - boardRect.value.left;
        if (newLeft > boardRect.value.width) {
          newLeft = boardRect.value.width;
        } else if (newLeft < 0) {
          newLeft = 0;
        }
        let newTop = clientY - boardRect.value.top;
        if (newTop >= boardRect.value.height) {
          newTop = boardRect.value.height;
        } else if (newTop < 0) {
          newTop = 0;
        }
        const bright = 100 - newTop / boardRect.value.height * 100;
        const saturation = newLeft * 100 / boardRect.value.width;
        let newColor = __spreadProps(__spreadValues({}, props.colorObject.hsva), {
          v: bright / 100,
          s: saturation / 100
        });
        computedColorObject.value = newColor;
      }
      vue.onMounted(() => {
        ownerWindow = root2.value.ownerDocument.defaultView;
        root2.value.ownerDocument.body.classList.add("znpb-color-picker--backdrop");
      });
      vue.onBeforeUnmount(() => {
        root2.value.ownerDocument.body.classList.remove("znpb-color-picker--backdrop");
        deactivateDragCircle();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "root",
          ref: root2,
          class: "znpb-form-colorPicker-saturation"
        }, [
          vue.createElementVNode("div", {
            ref_key: "boardContent",
            ref: boardContent,
            style: vue.normalizeStyle({ background: bgColor.value }),
            class: "znpb-form-colorPicker-saturation__color",
            onMousedown: initiateDrag,
            onMouseup: deactivateDragCircle
          }, [
            vue.createElementVNode("div", _hoisted_1$$, [
              vue.createElementVNode("div", _hoisted_2$H, [
                vue.createElementVNode("div", {
                  style: vue.normalizeStyle(pointStyles.value),
                  class: "znpb-color-picker-pointer"
                }, null, 4)
              ])
            ])
          ], 36)
        ], 512);
      };
    }
  });
  const ColorBoard_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$_ = { class: "znpb-form-colorpicker-inner__panel" };
  const __default__$$ = {
    name: "ColorPicker",
    inheritAttrs: false
  };
  const _sfc_main$1i = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$$), {
    props: {
      model: { default: "" },
      showLibrary: { type: Boolean, default: true },
      zIndex: {}
    },
    emits: ["color-changed"],
    setup(__props, { emit }) {
      const props = __props;
      const computedModelValue = vue.computed({
        get() {
          return props.model;
        },
        set(newValue) {
          if (newValue) {
            emit("color-changed", newValue);
          } else {
            emit("color-changed", "");
          }
        }
      });
      const computedColorObject = vue.computed({
        get() {
          return getColorObject(props.model);
        },
        set(newValue) {
          const colorObject = tinycolor(newValue);
          const format = colorObject.getFormat();
          let emittedColor;
          if (colorObject.isValid()) {
            if (format === "hsl") {
              emittedColor = colorObject.toHslString();
            } else if (format === "rgb" || format === "hsv") {
              emittedColor = colorObject.toRgbString();
            } else if (format === "hex" || format === "hex8") {
              emittedColor = colorObject.getAlpha() < 1 ? colorObject.toHex8String() : colorObject.toHexString();
            } else if (format === "name") {
              emittedColor = newValue;
            }
          } else {
            emittedColor = newValue;
          }
          computedModelValue.value = emittedColor;
        }
      });
      const pickerStyle = vue.computed(() => {
        if (props.appendTo) {
          return {
            zIndex: props.zIndex
          };
        }
        return {};
      });
      function getColorObject(model) {
        const colorObject = tinycolor(model);
        let hsva = {
          h: 0,
          s: 0,
          v: 0,
          a: 1
        };
        let hsla = {
          h: 0,
          s: 0,
          l: 0,
          a: 1
        };
        let hex8 = "";
        let rgba = "";
        let hex = model ? model : "";
        let format = "hex";
        if (colorObject.isValid()) {
          format = colorObject.getFormat();
          hsva = colorObject.toHsv();
          hsla = colorObject.toHsl();
          hex = format === "name" ? model : colorObject.toHexString();
          hex8 = colorObject.toHex8String();
          rgba = colorObject.toRgb();
        }
        return {
          hex,
          hex8,
          rgba,
          hsla,
          hsva,
          format
        };
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref: "colorPicker",
          class: vue.normalizeClass(["znpb-form-colorpicker__color-picker-holder", { ["color-picker-holder--has-library"]: _ctx.showLibrary }]),
          style: vue.normalizeStyle(pickerStyle.value)
        }, [
          vue.createVNode(_sfc_main$1j, {
            "color-object": computedColorObject.value,
            "onUpdate:colorObject": _cache[0] || (_cache[0] = ($event) => computedColorObject.value = $event)
          }, null, 8, ["color-object"]),
          vue.createElementVNode("div", _hoisted_1$_, [
            vue.createVNode(_sfc_main$1k, {
              "model-value": computedColorObject.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => computedColorObject.value = $event)
            }, null, 8, ["model-value"]),
            vue.renderSlot(_ctx.$slots, "end")
          ])
        ], 6);
      };
    }
  }));
  const Colorpicker_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$Z = /* @__PURE__ */ vue.createElementVNode("div", { class: "znpb-empty-list__border-top-bottom" }, null, -1);
  const _hoisted_2$G = /* @__PURE__ */ vue.createElementVNode("div", { class: "znpb-empty-list__border-left-right" }, null, -1);
  const _hoisted_3$q = { class: "znpb-empty-list__content" };
  const __default__$_ = {
    name: "EmptyList"
  };
  const _sfc_main$1h = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$_), {
    props: {
      noMargin: { type: Boolean, default: false }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-empty-list__container", { "znpb-empty-list__container--no-margin": _ctx.noMargin }])
        }, [
          _hoisted_1$Z,
          _hoisted_2$G,
          vue.createElementVNode("div", _hoisted_3$q, [
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ], 2);
      };
    }
  }));
  const EmptyList_vue_vue_type_style_index_0_lang = "";
  const __default__$Z = {
    name: "GradientPreview"
  };
  const _sfc_main$1g = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$Z), {
    props: {
      config: {},
      round: { type: Boolean }
    },
    setup(__props) {
      const props = __props;
      const filteredConfig = vue.computed(() => {
        const { applyFilters: applyFilters2 } = window.zb.hooks;
        return applyFilters2("zionbuilder/options/model", JSON.parse(JSON.stringify(props.config)));
      });
      const getGradientPreviewStyle = vue.computed(() => {
        const style = {};
        const gradient = [];
        filteredConfig.value.forEach((element) => {
          const colors = [];
          let position = "90deg";
          const colorsCopy = [...element.colors].sort((a, b) => {
            return a.position > b.position ? 1 : -1;
          });
          colorsCopy.forEach((color) => {
            colors.push(`${color.color} ${color.position}%`);
          });
          if (element.type === "radial") {
            const { x, y } = element.position || { x: 50, y: 50 };
            position = `circle at ${x}% ${y}%`;
          } else {
            position = `${element.angle}deg`;
          }
          gradient.push(`${element.type}-gradient(${position}, ${colors.join(", ")})`);
        });
        gradient.reverse();
        style["background-image"] = gradient.join(", ");
        return style;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-gradient-preview-transparent", { "gradient-type-rounded": _ctx.round }])
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["znpb-gradient-preview", { "gradient-type-rounded": _ctx.round }]),
            style: vue.normalizeStyle(getGradientPreviewStyle.value)
          }, null, 6)
        ], 2);
      };
    }
  }));
  const GradientPreview_vue_vue_type_style_index_0_lang = "";
  const __default__$Y = {
    name: "GradientRadialDragger"
  };
  const _sfc_main$1f = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$Y), {
    props: {
      position: {},
      active: { type: Boolean }
    },
    setup(__props) {
      const props = __props;
      const radialPosition = vue.computed(() => {
        const { x, y } = props.position || { x: 50, y: 50 };
        const cssStyles = {
          left: x + "%",
          top: y + "%"
        };
        return cssStyles;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("span", {
          class: vue.normalizeClass(["znpb-color-picker-pointer", { "znpb-color-picker-pointer--active": _ctx.active }]),
          style: vue.normalizeStyle(radialPosition.value)
        }, null, 6);
      };
    }
  }));
  const GradientRadialDragger_vue_vue_type_style_index_0_scoped_8d8b88dd_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const GradientRadialDragger = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["__scopeId", "data-v-8d8b88dd"]]);
  const _hoisted_1$Y = {
    key: 0,
    class: "znpb-gradient-radial-wrapper"
  };
  const __default__$X = {
    name: "GradientBoard"
  };
  const _sfc_main$1e = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$X), {
    props: {
      config: {},
      activegrad: {}
    },
    emits: ["change-active-gradient", "position-changed"],
    setup(__props, { emit }) {
      const props = __props;
      const gradboard = vue.ref(null);
      const rafMovePosition = rafSchd$1(onCircleDrag);
      const rafEndDragging = rafSchd$1(disableDragging);
      const radialArr = vue.computed({
        get() {
          return props.config.filter((gradient) => gradient.type === "radial");
        },
        set(newArr) {
          radialArr.value = newArr;
        }
      });
      function enableDragging(gradient) {
        document.addEventListener("mousemove", rafMovePosition);
        document.addEventListener("mouseup", rafEndDragging);
        document.body.style.userSelect = "none";
        const activeGradientIndex = props.config.indexOf(gradient);
        emit("change-active-gradient", activeGradientIndex);
      }
      function disableDragging() {
        document.removeEventListener("mousemove", rafMovePosition);
        document.removeEventListener("mouseup", rafEndDragging);
        document.body.style.userSelect = "";
      }
      function onCircleDrag(event2) {
        const gradBoard = gradboard.value.getBoundingClientRect();
        const newLeft = clamp((event2.clientX - gradBoard.left) * 100 / gradBoard.width, 0, 100);
        const newTop = clamp((event2.clientY - gradBoard.top) * 100 / gradBoard.height, 0, 100);
        emit("position-changed", {
          x: Math.round(newLeft),
          y: Math.round(newTop)
        });
      }
      vue.onBeforeUnmount(() => {
        disableDragging();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "gradboard",
          ref: gradboard,
          class: "znpb-gradient-wrapper__board"
        }, [
          vue.createVNode(_sfc_main$1g, { config: _ctx.config }, null, 8, ["config"]),
          radialArr.value != null ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$Y, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(radialArr.value, (gradient, index2) => {
              return vue.openBlock(), vue.createBlock(GradientRadialDragger, {
                key: gradient.type + index2,
                position: gradient.position,
                active: _ctx.activegrad === gradient,
                onMousedown: ($event) => enableDragging(gradient)
              }, null, 8, ["position", "active", "onMousedown"]);
            }), 128))
          ])) : vue.createCommentVNode("", true)
        ], 512);
      };
    }
  }));
  const GradientBoard_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$X = ["title"];
  const _hoisted_2$F = { class: "znpb-gradient-preview-transparent" };
  const __default__$W = {
    name: "GradientBarPreview"
  };
  const _sfc_main$1d = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$W), {
    props: {
      config: {}
    },
    setup(__props) {
      const props = __props;
      const getGradientPreviewStyle = vue.computed(() => {
        const style = {};
        const gradient = [];
        const colors = [];
        const colorsCopy = [...props.config.colors];
        colorsCopy.sort((a, b) => {
          return a.position > b.position ? 1 : -1;
        });
        colorsCopy.forEach((color) => {
          colors.push(`${color.color} ${color.position}%`);
        });
        gradient.push(`linear-gradient(90deg, ${colors.join(", ")})`);
        style["background"] = gradient.join(", ");
        return style;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "znpb-gradient-preview-transparent-container",
          title: i18n__namespace.__("Click to add gradient point", "zionbuilder")
        }, [
          vue.createElementVNode("div", _hoisted_2$F, [
            vue.createElementVNode("div", {
              class: "znpb-gradient-preview",
              style: vue.normalizeStyle(getGradientPreviewStyle.value)
            }, null, 4)
          ])
        ], 8, _hoisted_1$X);
      };
    }
  }));
  const GradientBarPreview_vue_vue_type_style_index_0_lang = "";
  const PopperDirective = {
    mounted(el, { value, arg }, vnode) {
      if (value) {
        el.__ZnPbTooltip__ = initTooltip(el, value, arg);
      }
    },
    beforeUnmount(el) {
      if (el.__ZnPbTooltip__) {
        el.__ZnPbTooltip__.destroy();
      }
    },
    updated(el, { value, arg }) {
      if (el.__ZnPbTooltip__) {
        el.__ZnPbTooltip__.setContent(value);
        const popperPosition = arg || "top";
        el.__ZnPbTooltip__.updatePosition(popperPosition);
      }
    },
    unmounted(el) {
      if (el.__ZnPbTooltip__ && el.__ZnPbTooltip__.popper) {
        el.__ZnPbTooltip__.popper.destroy();
      }
    }
  };
  function initTooltip(element, content, arg) {
    const tooltipObject = {};
    const doc = element.ownerDocument;
    const popperContent = doc.createElement("span");
    popperContent.classList.add("hg-popper", "hg-popper-tooltip");
    popperContent.innerHTML = content;
    popperContent.setAttribute("show-popper", "true");
    const arrow2 = doc.createElement("span");
    arrow2.classList.add("hg-popper--with-arrows");
    arrow2.setAttribute("data-popper-arrow", "true");
    popperContent.appendChild(arrow2);
    tooltipObject.element = element;
    tooltipObject.content = popperContent;
    let popperPosition = arg || "top";
    function showPopper() {
      doc.body.appendChild(popperContent);
      tooltipObject.popper = createPopper(element, popperContent, {
        placement: popperPosition,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 10]
            }
          }
        ]
      });
    }
    function updatePosition(placement) {
      popperPosition = placement;
    }
    function hidePopper() {
      if (popperContent.parentNode) {
        popperContent.parentNode.removeChild(popperContent);
      }
      if (tooltipObject.popper) {
        tooltipObject.popper.destroy();
      }
    }
    function setContent(content2) {
      if (popperContent.innerHTML !== content2) {
        popperContent.innerHTML = content2;
        popperContent.appendChild(arrow2);
      }
    }
    element.addEventListener("mouseenter", showPopper);
    element.addEventListener("mouseleave", hidePopper);
    function destroy() {
      hidePopper();
      element.removeEventListener("mouseenter", showPopper);
      element.removeEventListener("mouseleave", hidePopper);
    }
    return __spreadProps(__spreadValues({}, tooltipObject), {
      showPopper,
      hidePopper,
      destroy,
      setContent,
      updatePosition
    });
  }
  const _hoisted_1$W = { class: "znpb-gradient-dragger-wrapper" };
  const __default__$V = {
    name: "GradientDragger"
  };
  const _sfc_main$1c = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$V), {
    props: {
      modelValue: {}
    },
    emits: ["update:modelValue", "color-picker-open"],
    setup(__props, { emit }) {
      const props = __props;
      const gradientCircle = vue.ref(null);
      const colorpickerHolder = vue.ref(null);
      const showPicker = vue.ref(false);
      const circlePos = vue.ref(null);
      const computedValue = vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      const colorValue = vue.computed({
        get() {
          return computedValue.value.color;
        },
        set(newValue) {
          computedValue.value = __spreadProps(__spreadValues({}, computedValue.value), {
            color: newValue
          });
        }
      });
      const colorPosition = vue.computed(() => {
        const cssStyles = {
          left: computedValue.value.position + "%",
          background: computedValue.value.color
        };
        return cssStyles;
      });
      const parentPosition = vue.computed(() => {
        return {
          left: circlePos.value.left,
          top: circlePos.value.top
        };
      });
      function openColorPicker() {
        showPicker.value = true;
        emit("color-picker-open", true);
        document.addEventListener("mousedown", closePanelOnOutsideClick);
      }
      function closePanelOnOutsideClick(event2) {
        const colorPicker = colorpickerHolder.value.$refs.colorPicker;
        if (!colorPicker.contains(event2.target)) {
          showPicker.value = false;
          document.removeEventListener("mousedown", closePanelOnOutsideClick);
          emit("color-picker-open", false);
        }
      }
      vue.onMounted(() => {
        vue.nextTick(() => {
          circlePos.value = gradientCircle.value.getBoundingClientRect();
        });
      });
      vue.onUnmounted(() => {
        document.removeEventListener("mousedown", closePanelOnOutsideClick);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$W, [
          vue.createVNode(vue.unref(_sfc_main$1q), {
            show: showPicker.value,
            trigger: null,
            placement: "top"
          }, {
            content: vue.withCtx(() => [
              showPicker.value ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1i), {
                key: 0,
                ref_key: "colorpickerHolder",
                ref: colorpickerHolder,
                "parent-position": parentPosition.value,
                model: computedValue.value.color,
                "show-library": false,
                onColorChanged: _cache[0] || (_cache[0] = ($event) => colorValue.value = $event)
              }, null, 8, ["parent-position", "model"])) : vue.createCommentVNode("", true)
            ]),
            default: vue.withCtx(() => [
              vue.createElementVNode("span", {
                ref_key: "gradientCircle",
                ref: gradientCircle,
                class: "znpb-gradient-dragger",
                style: vue.normalizeStyle(colorPosition.value),
                onDblclick: openColorPicker
              }, null, 36)
            ]),
            _: 1
          }, 8, ["show"])
        ]);
      };
    }
  }));
  const GradientDragger_vue_vue_type_style_index_0_scoped_fb33dcca_lang = "";
  const GradientDragger = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["__scopeId", "data-v-fb33dcca"]]);
  const _hoisted_1$V = { class: "znpb-gradient-actions" };
  const _hoisted_2$E = {
    key: 0,
    class: "znpb-gradient-actions__delete"
  };
  const __default__$U = {
    name: "GradientColorConfig"
  };
  const _sfc_main$1b = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$U), {
    props: {
      config: {},
      showDelete: { type: Boolean, default: true }
    },
    emits: ["delete-color", "update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const schema = {
        color: {
          type: "colorpicker",
          id: "color",
          width: "50"
        },
        position: {
          type: "number",
          id: "position",
          content: "%",
          width: "50",
          min: 0,
          max: 100
        }
      };
      const valueModel = vue.computed({
        get() {
          const value = cloneDeep(props.config);
          if (Array.isArray(value.__dynamic_content__)) {
            value.__dynamic_content__ = {};
          }
          return value;
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      return (_ctx, _cache) => {
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$V, [
          vue.createVNode(_component_OptionsForm, {
            modelValue: valueModel.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => valueModel.value = $event),
            schema,
            class: "znpb-gradient-color-form"
          }, null, 8, ["modelValue"]),
          _ctx.showDelete ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$E, [
            vue.createVNode(_sfc_main$1z, {
              icon: "close",
              class: "znpb-gradient-actions-delete",
              onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => _ctx.$emit("delete-color", _ctx.config), ["stop"]))
            })
          ])) : vue.createCommentVNode("", true)
        ]);
      };
    }
  }));
  const GradientColorConfig_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$U = { class: "znpb-gradient-colors-legend" };
  const _hoisted_2$D = { class: "znpb-form__input-title znpb-gradient-colors-legend-item" };
  const _hoisted_3$p = { class: "znpb-form__input-title znpb-gradient-colors-legend-item" };
  const __default__$T = {
    name: "GradientBar"
  };
  const _sfc_main$1a = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$T), {
    props: {
      modelValue: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const root2 = vue.ref(null);
      const gradientBar = vue.ref(null);
      const gradRef = vue.ref(null);
      const colorPickerOpen = vue.ref(false);
      const deletedColorConfig = vue.ref(null);
      const rafMovePosition = rafSchd$1(onCircleDrag);
      const rafEndDragging = rafSchd$1(disableDragging);
      let draggedCircleIndex;
      let draggedItem;
      const computedValue = vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      const sortedColors = vue.computed(() => {
        const colorsCopy = [...computedValue.value.colors].sort((a, b) => {
          return a.position > b.position ? 1 : -1;
        });
        return colorsCopy;
      });
      const activeDraggedItem = vue.computed(() => {
        return computedValue.value.colors[draggedCircleIndex];
      });
      function onColorConfigUpdate(colorConfig, newValues) {
        const index2 = computedValue.value.colors.indexOf(colorConfig);
        const updatedValues = computedValue.value.colors.slice(0);
        updatedValues.splice(index2, 1, newValues);
        computedValue.value = __spreadProps(__spreadValues({}, computedValue.value), {
          colors: updatedValues
        });
      }
      function onDeleteColor(colorConfig) {
        const index2 = computedValue.value.colors.indexOf(colorConfig);
        const colorsClone = computedValue.value.colors.slice(0);
        deletedColorConfig.value = colorConfig;
        colorsClone.splice(index2, 1);
        computedValue.value = __spreadProps(__spreadValues({}, computedValue.value), {
          colors: colorsClone
        });
      }
      function reAddColor() {
        computedValue.value = __spreadProps(__spreadValues({}, computedValue.value), {
          colors: [...computedValue.value.colors, deletedColorConfig.value]
        });
        deletedColorConfig.value = null;
      }
      function addColor(event2) {
        const defaultColor = {
          color: "white",
          position: 0
        };
        const mouseLeftPosition = event2.clientX;
        const barOffset = root2.value.getBoundingClientRect();
        const startX = barOffset.left;
        const newLeft = mouseLeftPosition - startX;
        defaultColor.position = Math.round(newLeft / barOffset.width * 100);
        const updatedValues = __spreadProps(__spreadValues({}, computedValue.value), {
          colors: [...computedValue.value.colors, defaultColor]
        });
        computedValue.value = updatedValues;
      }
      function enableDragging(colorConfigIndex) {
        if (colorPickerOpen.value === false) {
          document.body.classList.add("znpb-color-gradient--backdrop");
          document.addEventListener("mousemove", rafMovePosition);
          document.addEventListener("mouseup", rafEndDragging);
          document.body.style.userSelect = "none";
          draggedCircleIndex = colorConfigIndex;
          draggedItem = computedValue.value.colors[colorConfigIndex];
          deletedColorConfig.value = null;
        }
      }
      function disableDragging() {
        rafMovePosition.cancel();
        document.body.classList.remove("znpb-color-gradient--backdrop");
        document.removeEventListener("mousemove", rafMovePosition);
        document.removeEventListener("mouseup", rafEndDragging);
        document.body.style.userSelect = "";
        deletedColorConfig.value = null;
        draggedCircleIndex = null;
      }
      function updateActiveConfigPosition(newPosition) {
        const newConfig = __spreadProps(__spreadValues({}, activeDraggedItem.value), {
          position: newPosition
        });
        onColorConfigUpdate(activeDraggedItem.value, newConfig);
      }
      function onCircleDrag(event2) {
        const newLeft = (event2.clientX - gradRef.value.left) * 100 / gradRef.value.width;
        const position = Math.min(Math.max(newLeft, 0), 100);
        if (newLeft > 100 || newLeft < 0) {
          if (sortedColors.value.length > 2 && deletedColorConfig.value === null) {
            onDeleteColor(draggedItem);
          }
        } else {
          if (deletedColorConfig.value !== null) {
            reAddColor();
          }
          updateActiveConfigPosition(Math.round(position));
        }
      }
      vue.onMounted(() => {
        vue.nextTick(() => {
          gradRef.value = gradientBar.value.getBoundingClientRect();
        });
      });
      vue.onBeforeUnmount(() => {
        document.body.classList.remove("znpb-color-gradient--backdrop");
        disableDragging();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "root",
          ref: root2,
          class: "znpb-gradient-bar-colors-wrapper"
        }, [
          vue.createElementVNode("div", {
            ref_key: "gradientBar",
            ref: gradientBar,
            class: "znpb-gradient-bar-wrapper"
          }, [
            vue.createVNode(_sfc_main$1d, {
              config: computedValue.value,
              onClick: addColor
            }, null, 8, ["config"]),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(computedValue.value.colors, (colorConfig, i) => {
              return vue.openBlock(), vue.createBlock(GradientDragger, {
                key: i,
                modelValue: colorConfig,
                "onUpdate:modelValue": ($event) => onColorConfigUpdate(colorConfig, $event),
                onColorPickerOpen: _cache[0] || (_cache[0] = ($event) => colorPickerOpen.value = $event),
                onMousedown: ($event) => enableDragging(i)
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onMousedown"]);
            }), 128))
          ], 512),
          vue.createElementVNode("div", _hoisted_1$U, [
            vue.createElementVNode("span", _hoisted_2$D, vue.toDisplayString(i18n__namespace.__("Color", "zionbuilder")), 1),
            vue.createElementVNode("span", _hoisted_3$p, vue.toDisplayString(i18n__namespace.__("Location", "zionbuilder")), 1)
          ]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(sortedColors.value, (colorConfig, i) => {
            return vue.openBlock(), vue.createBlock(_sfc_main$1b, {
              key: i,
              config: colorConfig,
              "show-delete": sortedColors.value.length > 2,
              "onUpdate:modelValue": ($event) => onColorConfigUpdate(colorConfig, $event),
              onDeleteColor: ($event) => onDeleteColor(colorConfig)
            }, null, 8, ["config", "show-delete", "onUpdate:modelValue", "onDeleteColor"]);
          }), 128))
        ], 512);
      };
    }
  }));
  const GradientBar_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$T = { class: "znpb-forms-input-content" };
  const __default__$S = {
    name: "InputWrapper"
  };
  const _sfc_main$19 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$S), {
    props: {
      title: { default: "" },
      description: { default: "" },
      layout: { default: "full" },
      fakeLabel: { type: Boolean },
      schema: {}
    },
    setup(__props) {
      const props = __props;
      const computedWrapperStyle = vue.computed(() => {
        const styles = {};
        if (props.schema !== void 0) {
          if (props.schema.grow) {
            styles.flex = props.schema.grow;
          }
          if (props.schema.width) {
            styles.width = `${props.schema.width}%`;
          }
        }
        return styles;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-input-wrapper", {
            [`znpb-input-wrapper--${_ctx.layout}`]: true
          }]),
          style: vue.normalizeStyle(computedWrapperStyle.value)
        }, [
          _ctx.title ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(["znpb-form__input-title", { "znpb-form__input-title--fake-label": _ctx.fakeLabel }])
          }, [
            vue.createElementVNode("span", null, vue.toDisplayString(_ctx.title), 1),
            _ctx.description ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1q), {
              key: 0,
              enterable: false
            }, {
              content: vue.withCtx(() => [
                vue.createElementVNode("div", null, vue.toDisplayString(_ctx.description), 1)
              ]),
              default: vue.withCtx(() => [
                vue.createVNode(vue.unref(_sfc_main$1z), { icon: "question-mark" })
              ]),
              _: 1
            })) : vue.createCommentVNode("", true)
          ], 2)) : vue.createCommentVNode("", true),
          vue.createElementVNode("div", _hoisted_1$T, [
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ], 6);
      };
    }
  }));
  const InputWrapper_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$S = { class: "znpb-input-range" };
  const _hoisted_2$C = { class: "znpb-input-range__label" };
  const __default__$R = {
    name: "InputRange",
    inheritAttrs: false
  };
  const _sfc_main$18 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$R), {
    props: {
      modelValue: { default: 0 },
      shift_step: { default: 10 },
      min: { default: 0 },
      max: { default: 100 },
      step: { default: 1 }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const localStep = vue.ref(props.step);
      const optionValue = vue.computed({
        get() {
          var _a2;
          return (_a2 = props.modelValue) != null ? _a2 : props.min;
        },
        set(newValue) {
          emit("update:modelValue", +newValue);
        }
      });
      const trackWidth = vue.computed(() => {
        const thumbSize = 14 * width.value / 100;
        return {
          width: `calc(${width.value}% - ${thumbSize}px)`
        };
      });
      const width = vue.computed(() => {
        const minmax = props.max - props.min;
        return Math.round((props.modelValue - props.min) * 100 / minmax);
      });
      function onKeydown(event2) {
        if (event2.shiftKey) {
          localStep.value = props.shift_step;
        }
      }
      function onKeyUp(event2) {
        if (event2.key === "Shift") {
          localStep.value = props.step;
        }
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$S, [
          vue.createVNode(_sfc_main$1w, {
            modelValue: optionValue.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => optionValue.value = $event),
            type: "range",
            min: _ctx.min,
            max: _ctx.max,
            step: localStep.value,
            onKeydown,
            onKeyup: onKeyUp
          }, {
            suffix: vue.withCtx(() => [
              vue.createElementVNode("div", {
                class: "znpb-input-range__trackwidth",
                style: vue.normalizeStyle(trackWidth.value)
              }, null, 4)
            ]),
            _: 1
          }, 8, ["modelValue", "min", "max", "step"]),
          vue.createElementVNode("label", _hoisted_2$C, [
            vue.createVNode(vue.unref(_sfc_main$1r), {
              modelValue: optionValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => optionValue.value = $event),
              class: "znpb-input-range-number",
              min: _ctx.min,
              max: _ctx.max,
              step: _ctx.step,
              shift_step: _ctx.shift_step,
              onKeydown,
              onKeyup: onKeyUp
            }, {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["modelValue", "min", "max", "step", "shift_step"])
          ])
        ]);
      };
    }
  }));
  const InputRange_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$R = { class: "znpb-input-range__label" };
  const __default__$Q = {
    name: "InputRangeDynamic",
    inheritAttrs: false
  };
  const _sfc_main$17 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$Q), {
    props: {
      modelValue: { default: null },
      options: {},
      default_step: { default: 1 },
      default_shift_step: { default: 1 },
      min: {},
      max: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { expose: __expose, emit }) {
      const props = __props;
      const root2 = vue.ref(null);
      const inputNumberUnit = vue.ref(null);
      const step = vue.ref(1);
      const unit = vue.ref("");
      const customUnit = vue.ref(false);
      const rafUpdateValue = rafSchd$1(updateValue);
      const activeOption = vue.computed(() => {
        let activeOption2 = null;
        props.options.forEach((option) => {
          if (valueUnit.value && option.unit === valueUnit.value.unit) {
            activeOption2 = option;
          }
        });
        return activeOption2 || props.options[0];
      });
      const valueUnit = vue.computed({
        get() {
          const match = typeof props.modelValue === "string" ? props.modelValue.match(/^([+-]?[0-9]+([.][0-9]*)?|[.][0-9]+)(\D+)$/) : null;
          const value = match && match[1] ? +match[1] : null;
          const unit2 = match ? match[3] : null;
          return {
            value,
            unit: unit2
          };
        },
        set(newValue) {
          if (newValue.value && newValue.unit) {
            if (Number(newValue.value) > activeOption.value.max) {
              computedValue.value = `${activeOption.value.max}${newValue.unit}`;
            } else if (Number(newValue.value) < activeOption.value.min) {
              computedValue.value = `${activeOption.value.min}${newValue.unit}`;
            }
          }
        }
      });
      const computedValue = vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          rafUpdateValue(newValue);
        }
      });
      const rangeModel = vue.computed({
        get() {
          return disabled.value ? 0 : valueUnit.value.value || props.min || 0;
        },
        set(newValue) {
          if (getUnit.value) {
            computedValue.value = `${newValue}${getUnit.value}`;
          }
        }
      });
      const getUnit = vue.computed(() => {
        var _a2, _b, _c;
        return (_c = (_b = (_a2 = activeOption.value.unit) != null ? _a2 : valueUnit.value.unit) != null ? _b : unit.value) != null ? _c : null;
      });
      const getUnits = vue.computed(() => props.options.map((option) => option.unit));
      const baseStep = vue.computed(() => activeOption.value.step || props.default_step);
      const shiftStep = vue.computed(() => activeOption.value.shiftStep || props.default_shift_step);
      const trackWidth = vue.computed(() => {
        const thumbSize = 14 * width.value / 100;
        return {
          width: `calc(${width.value}% - ${thumbSize}px)`
        };
      });
      const width = vue.computed(() => {
        const minmax = activeOption.value.max - activeOption.value.min;
        return Math.round((activeOption.value.value - activeOption.value.min) * 100 / minmax);
      });
      const disabled = vue.computed(() => {
        const transformOriginUnits = ["left", "right", "top", "bottom", "center"];
        return transformOriginUnits.includes(unit.value) || customUnit.value;
      });
      function updateValue(newValue) {
        emit("update:modelValue", newValue);
      }
      function onUnitUpdate(event2) {
        unit.value = event2;
      }
      function onCustomUnit(event2) {
        customUnit.value = event2;
      }
      function onRangeKeydown(event2) {
        if (event2.shiftKey) {
          step.value = shiftStep.value;
        }
      }
      function onRangeKeyUp(event2) {
        if (event2.key === "Shift") {
          step.value = baseStep.value;
        }
      }
      __expose({
        inputNumberUnit
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "root",
          ref: root2,
          class: vue.normalizeClass(["znpb-input-range znpb-input-range--has-multiple-units", { ["znpb-input-range--disabled"]: disabled.value }])
        }, [
          vue.createVNode(_sfc_main$1w, {
            modelValue: rangeModel.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => rangeModel.value = $event),
            type: "range",
            min: activeOption.value.min,
            max: activeOption.value.max,
            step: step.value,
            disabled: disabled.value,
            onKeydown: onRangeKeydown,
            onKeyup: onRangeKeyUp
          }, {
            suffix: vue.withCtx(() => [
              vue.createElementVNode("div", {
                class: "znpb-input-range__trackwidth",
                style: vue.normalizeStyle(trackWidth.value)
              }, null, 4)
            ]),
            _: 1
          }, 8, ["modelValue", "min", "max", "step", "disabled"]),
          vue.createElementVNode("label", _hoisted_1$R, [
            vue.createVNode(_sfc_main$1p, {
              ref_key: "inputNumberUnit",
              ref: inputNumberUnit,
              modelValue: computedValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => computedValue.value = $event),
              class: "znpb-input-range-number",
              min: activeOption.value.min,
              max: activeOption.value.max,
              units: getUnits.value,
              step: step.value,
              shift_step: shiftStep.value,
              onIsCustomUnit: onCustomUnit,
              onUnitUpdate
            }, null, 8, ["modelValue", "min", "max", "units", "step", "shift_step"])
          ])
        ], 2);
      };
    }
  }));
  const InputRangeDynamic_vue_vue_type_style_index_0_lang = "";
  const __default__$P = {
    name: "Tab"
  };
  const _sfc_main$16 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$P), {
    props: {
      name: {},
      icon: {},
      id: {},
      active: { type: Boolean }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.renderSlot(_ctx.$slots, "title"),
          vue.renderSlot(_ctx.$slots, "default")
        ], 64);
      };
    }
  }));
  const _hoisted_1$Q = ["onClick"];
  const __default__$O = {
    name: "Tabs"
  };
  const _sfc_main$15 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$O), {
    props: {
      tabStyle: { default: "card" },
      titlePosition: { default: "start" },
      activeTab: { default: null },
      hasScroll: { default: () => [] }
    },
    emits: ["update:activeTab", "changed-tab"],
    setup(__props, { emit }) {
      var _a2;
      const props = __props;
      const tabs = vue.ref();
      const activeTab = vue.ref(props.activeTab);
      vue.watch(
        () => props.activeTab,
        (newValue) => {
          activeTab.value = newValue;
        }
      );
      function RenderComponent(props2) {
        return typeof props2["render-slot"] === "string" ? props2["render-slot"] : props2["render-slot"]();
      }
      function getIdForTab(tab) {
        var _a3;
        if (!tab) {
          return;
        }
        const props2 = tab.props;
        return (_a3 = props2 == null ? void 0 : props2.id) != null ? _a3 : kebabCase$1(props2.name);
      }
      const slots = vue.useSlots();
      if (slots.default) {
        tabs.value = getTabs(slots.default()).filter((child) => child.type.name === "Tab");
        activeTab.value = (_a2 = activeTab.value) != null ? _a2 : getIdForTab(tabs.value[0]);
      }
      function getTabs(vNodes) {
        let tabs2 = [];
        vNodes.forEach((tab) => {
          if (tab.type === vue.Fragment) {
            tabs2 = [...tabs2, ...getTabs(tab.children)];
          } else {
            tabs2.push(tab);
          }
        });
        return tabs2;
      }
      function selectTab(tab) {
        const tabId = getIdForTab(tab);
        activeTab.value = tabId;
        emit("changed-tab", tabId);
        emit("update:activeTab", tabId);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-tabs", { [`znpb-tabs--${_ctx.tabStyle}`]: _ctx.tabStyle }])
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["znpb-tabs__header", { [`znpb-tabs__header--${_ctx.titlePosition}`]: _ctx.titlePosition }])
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(tabs.value, (tab, index2) => {
              var _a3, _b;
              return vue.openBlock(), vue.createElementBlock("div", {
                key: index2,
                class: vue.normalizeClass(["znpb-tabs__header-item", {
                  "znpb-tabs__header-item--active": getIdForTab(tab) === activeTab.value,
                  [`znpb-tabs__header-item--${getIdForTab(tab)}`]: true
                }]),
                onClick: ($event) => selectTab(tab)
              }, [
                vue.createVNode(RenderComponent, {
                  "render-slot": (_b = (_a3 = tab == null ? void 0 : tab.children) == null ? void 0 : _a3.title) != null ? _b : tab.props.name
                }, null, 8, ["render-slot"])
              ], 10, _hoisted_1$Q);
            }), 128))
          ], 2),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["znpb-tabs__content", { "znpb-fancy-scrollbar": _ctx.hasScroll }])
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(tabs.value, (tab, index2) => {
              var _a3;
              return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
                key: index2,
                class: "znpb-tab__wrapper"
              }, [
                getIdForTab(tab) === activeTab.value ? (vue.openBlock(), vue.createBlock(RenderComponent, {
                  key: 0,
                  "render-slot": (_a3 = tab == null ? void 0 : tab.children) == null ? void 0 : _a3.default
                }, null, 8, ["render-slot"])) : vue.createCommentVNode("", true)
              ])), [
                [vue.vShow, getIdForTab(tab) === activeTab.value]
              ]);
            }), 128))
          ], 2)
        ], 2);
      };
    }
  }));
  const Tabs_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$P = { class: "znpb-gradient-options-wrapper" };
  const _hoisted_2$B = { class: "znpb-radial-postion-wrapper" };
  const __default__$N = {
    name: "GradientOptions"
  };
  const _sfc_main$14 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$N), {
    props: {
      modelValue: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const computedValue = vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      const computedAngle = vue.computed({
        get() {
          return computedValue.value.angle;
        },
        set(newValue) {
          computedValue.value = __spreadProps(__spreadValues({}, computedValue.value), {
            angle: newValue
          });
        }
      });
      const computedPosition = vue.computed({
        get() {
          return computedValue.value.position || {};
        },
        set(newValue) {
          computedValue.value = __spreadProps(__spreadValues({}, computedValue.value), {
            position: newValue
          });
        }
      });
      const computedPositionX = vue.computed({
        get() {
          var _a2;
          return ((_a2 = computedValue.value.position) == null ? void 0 : _a2.x) || 50;
        },
        set(newValue) {
          computedPosition.value = __spreadProps(__spreadValues({}, computedPosition.value), {
            x: newValue
          });
        }
      });
      const computedPositionY = vue.computed({
        get() {
          var _a2;
          return ((_a2 = computedValue.value.position) == null ? void 0 : _a2.y) || 50;
        },
        set(newValue) {
          computedPosition.value = __spreadProps(__spreadValues({}, computedPosition.value), {
            y: newValue
          });
        }
      });
      function onTabChange(tabId) {
        computedValue.value = __spreadProps(__spreadValues({}, computedValue.value), {
          type: tabId
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$P, [
          vue.createVNode(vue.unref(_sfc_main$19), {
            title: i18n__namespace.__("Gradient type", "zionbuilder"),
            class: "znpb-gradient__type"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(_sfc_main$15), {
                "tab-style": "minimal",
                "active-tab": computedValue.value.type,
                onChangedTab: onTabChange
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(_sfc_main$16), { name: "Linear" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(_sfc_main$19), {
                        title: i18n__namespace.__("Gradient angle", "zionbuilder"),
                        class: "znpb-gradient__angle"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(_sfc_main$18), {
                            modelValue: computedAngle.value,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedAngle.value = $event),
                            min: 0,
                            max: 360,
                            step: 1
                          }, {
                            default: vue.withCtx(() => [
                              vue.createTextVNode("deg")
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["title"])
                    ]),
                    _: 1
                  }),
                  vue.createVNode(vue.unref(_sfc_main$16), { name: "Radial" }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("div", _hoisted_2$B, [
                        vue.createVNode(vue.unref(_sfc_main$19), {
                          title: "Position X",
                          layout: "inline"
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(vue.unref(_sfc_main$1r), {
                              modelValue: computedPositionX.value,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => computedPositionX.value = $event),
                              min: 0,
                              max: 100,
                              step: 1
                            }, {
                              default: vue.withCtx(() => [
                                vue.createTextVNode(" % ")
                              ]),
                              _: 1
                            }, 8, ["modelValue"])
                          ]),
                          _: 1
                        }),
                        vue.createVNode(vue.unref(_sfc_main$19), {
                          title: "Position Y",
                          layout: "inline"
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(vue.unref(_sfc_main$1r), {
                              modelValue: computedPositionY.value,
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => computedPositionY.value = $event),
                              min: 0,
                              max: 100,
                              step: 1
                            }, {
                              default: vue.withCtx(() => [
                                vue.createTextVNode(" % ")
                              ]),
                              _: 1
                            }, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["active-tab"])
            ]),
            _: 1
          }, 8, ["title"]),
          vue.createVNode(vue.unref(_sfc_main$19), {
            title: i18n__namespace.__("Gradient bar", "zionbuilder")
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_sfc_main$1a, {
                modelValue: computedValue.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => computedValue.value = $event),
                class: "znpb-gradient__bar"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["title"])
        ]);
      };
    }
  }));
  const GradientOptions_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$O = { class: "znpb-gradient-preview-transparent" };
  const __default__$M = {
    name: "OneGradient"
  };
  const _sfc_main$13 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$M), {
    props: {
      config: {},
      round: { type: Boolean }
    },
    setup(__props) {
      const props = __props;
      const getGradientPreviewStyle = vue.computed(() => {
        const style = {};
        const gradient = [];
        const colors = [];
        let position = "90deg";
        const colorsCopy = [...props.config.colors].sort((a, b) => {
          return a.position > b.position ? 1 : -1;
        });
        colorsCopy.forEach((color) => {
          colors.push(`${color.color} ${color.position}%`);
        });
        if (props.config.type === "radial") {
          const { x, y } = props.config.position || { x: 50, y: 50 };
          position = `circle at ${x}% ${y}%`;
        } else {
          position = `${props.config.angle}deg`;
        }
        gradient.push(`${props.config.type}-gradient(${position}, ${colors.join(", ")})`);
        style["background"] = gradient.join(", ");
        return style;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$O, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["znpb-gradient-preview", { "gradient-type-rounded": _ctx.round }]),
            style: vue.normalizeStyle(getGradientPreviewStyle.value)
          }, null, 6)
        ]);
      };
    }
  }));
  const OneGradient_vue_vue_type_style_index_0_scoped_37c661dc_lang = "";
  const OneGradient = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-37c661dc"]]);
  const __default__$L = {
    name: "GradientElement"
  };
  const _sfc_main$12 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$L), {
    props: {
      config: {},
      showRemove: { type: Boolean, default: true },
      isActive: { type: Boolean }
    },
    emits: ["change-active-gradient", "delete-gradient"],
    setup(__props) {
      const props = __props;
      const localConfig = vue.computed({
        get() {
          return props.config;
        },
        set(newConfig) {
          localConfig.value = newConfig;
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-gradient-element", { "znpb-gradient-element--active": _ctx.isActive }])
        }, [
          vue.createVNode(OneGradient, {
            round: true,
            config: localConfig.value,
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("change-active-gradient", _ctx.config))
          }, null, 8, ["config"]),
          _ctx.showRemove ? (vue.openBlock(), vue.createBlock(_sfc_main$1z, {
            key: 0,
            icon: "close",
            onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => _ctx.$emit("delete-gradient"), ["stop"]))
          })) : vue.createCommentVNode("", true)
        ], 2);
      };
    }
  }));
  const GradientElement_vue_vue_type_style_index_0_lang = "";
  const cache = vue.ref({});
  function useSelectServerData() {
    let requester = vue.inject("serverRequester", null);
    const items = vue.ref([]);
    if (!requester) {
      if (window.zb.admin) {
        requester = window.zb.admin.serverRequest;
      }
    }
    function fetch2(config) {
      if (!requester) {
        return Promise.reject("Server requester not provided");
      }
      const cacheKey = generateCacheKey(vue.toRaw(config));
      const saveItemsCache = generateItemsCacheKey(vue.toRaw(config));
      if (cache[cacheKey]) {
        saveItems(saveItemsCache, cache[cacheKey]);
        return Promise.resolve(cache[cacheKey]);
      } else {
        return new Promise((resolve, reject) => {
          config.useCache = true;
          requester.request(
            {
              type: "get_input_select_options",
              config
            },
            (response) => {
              saveItems(saveItemsCache, response.data);
              resolve(response.data);
            },
            function(message) {
              reject(message);
            }
          );
        });
      }
    }
    function getItems(config) {
      const saveItemsCache = generateItemsCacheKey(vue.toRaw(config));
      return get(items.value, saveItemsCache, []);
    }
    function getItem(config, id) {
      const saveItemsCache = generateItemsCacheKey(vue.toRaw(config));
      const cachedItems = get(items.value, saveItemsCache, []);
      return cachedItems.find((item) => item.id === id);
    }
    function generateItemsCacheKey(config) {
      const { server_callback_method, server_callback_args } = config;
      return hash$2({
        server_callback_method,
        server_callback_args
      });
    }
    function generateCacheKey(data) {
      const { server_callback_method, server_callback_args, page, searchKeyword } = data;
      return hash$2({
        server_callback_method,
        server_callback_args,
        page,
        searchKeyword
      });
    }
    function saveItems(key, newItems) {
      const existingItems = get(items.value, key, []);
      items.value[key] = unionBy$1(existingItems, newItems, "id");
    }
    return {
      fetch: fetch2,
      getItem,
      getItems
    };
  }
  const _hoisted_1$N = {
    key: 1,
    class: "znpb-option-selectOptionPlaceholderText"
  };
  const _hoisted_2$A = { class: "znpb-inputDropdownIcon-wrapper" };
  const _hoisted_3$o = { class: "znpb-option-selectOptionListWrapper" };
  const _hoisted_4$f = ["onClick"];
  const _hoisted_5$b = {
    key: 1,
    class: "znpb-option-selectOptionListNoMoreText"
  };
  const _sfc_main$11 = /* @__PURE__ */ vue.defineComponent({
    __name: "InputSelect",
    props: {
      modelValue: { type: [String, Number, Array, Boolean], default: void 0 },
      options: { default: () => [] },
      filterable: { type: Boolean },
      server_callback_method: { default: "" },
      server_callback_args: { default: () => ({}) },
      server_callback_per_page: { default: 25 },
      placeholder: { default: "" },
      addable: { type: Boolean, default: false },
      placement: { default: "bottom" },
      style_type: { default: "" },
      multiple: { type: Boolean, default: false },
      local_callback_method: { default: "" },
      filter_id: { default: "" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const optionWrapper = vue.ref(null);
      const searchInput = vue.ref(null);
      const searchKeyword = vue.ref("");
      const showDropdown = vue.ref(false);
      const loading = vue.ref(false);
      const loadingTitle = vue.ref(false);
      const stopSearch = vue.ref(false);
      const tooltipWidth = vue.ref(null);
      const elementInfo = vue.inject("elementInfo", null);
      let page = 1;
      const { fetch: fetch2, getItems } = useSelectServerData();
      const computedModelValue = vue.computed(() => {
        if (props.modelValue && props.multiple && !Array.isArray(props.modelValue)) {
          return [props.modelValue];
        }
        if (!props.modelValue && props.multiple) {
          return [];
        }
        return props.modelValue;
      });
      const items = vue.computed(() => {
        let options2 = [...props.options];
        if (props.server_callback_method) {
          const serverOptions = getItems({
            server_callback_method: props.server_callback_method,
            server_callback_args: props.server_callback_args
          });
          if (serverOptions.length > 0) {
            options2.push(...serverOptions);
          }
        }
        if (props.addable && props.modelValue) {
          if (props.multiple) {
            computedModelValue.value.forEach((savedValue) => {
              if (!options2.find((option) => option.id === savedValue)) {
                options2.push({
                  name: savedValue,
                  id: savedValue
                });
              }
            });
          } else if (!options2.find((option) => option.id === computedModelValue.value)) {
            options2.push({
              name: props.modelValue,
              id: props.modelValue
            });
          }
        }
        if (props.local_callback_method) {
          const localOptions = window[props.local_callback_method];
          if (typeof localOptions === "function") {
            options2.push(...localOptions(options2, elementInfo));
          }
        }
        if (props.filter_id) {
          const { applyFilters: applyFilters2 } = window.zb.hooks;
          options2 = applyFilters2(props.filter_id, options2, vue.unref(elementInfo));
        }
        options2 = options2.map((option) => {
          let isSelected = false;
          if (props.multiple) {
            isSelected = computedModelValue.value.includes(option.id);
          } else {
            isSelected = computedModelValue.value === option.id;
          }
          return __spreadProps(__spreadValues({}, option), {
            isSelected
          });
        });
        return options2;
      });
      const visibleItems = vue.computed(() => {
        let options2 = items.value;
        if (props.filterable || props.addable) {
          if (searchKeyword.value.length > 0) {
            options2 = options2.filter((optionConfig) => {
              return optionConfig.name.toLowerCase().indexOf(searchKeyword.value.toLowerCase()) !== -1;
            });
          }
        }
        if (props.multiple) {
          options2.sort((item) => item.isSelected ? -1 : 1);
        }
        return options2;
      });
      vue.watch(searchKeyword, () => {
        stopSearch.value = false;
        debouncedGetItems();
      });
      vue.watch(showDropdown, (newValue) => {
        if (!newValue) {
          searchKeyword.value = "";
        }
      });
      const debouncedGetItems = debounce$1(() => {
        loadNext();
      }, 300);
      function loadNext() {
        if (!props.server_callback_method) {
          return;
        }
        if (loading.value) {
          return;
        }
        loading.value = true;
        const include = props.modelValue;
        fetch2({
          server_callback_method: props.server_callback_method,
          server_callback_args: props.server_callback_args,
          page,
          searchKeyword: searchKeyword.value,
          include
        }).then((response) => {
          if (props.server_callback_per_page === -1) {
            stopSearch.value = true;
          } else if (response.length < props.server_callback_per_page) {
            stopSearch.value = true;
          }
          loading.value = false;
          loadingTitle.value = false;
        });
      }
      function onScrollEnd() {
        if (!props.server_callback_method) {
          return;
        }
        if (props.server_callback_per_page === -1) {
          return;
        }
        if (!stopSearch.value) {
          page++;
          loadNext();
        }
      }
      if (props.server_callback_method) {
        loadNext();
      }
      const showPlaceholder = vue.computed(() => {
        return typeof props.modelValue === "undefined" || props.multiple && computedModelValue.value.length === 0;
      });
      const dropdownPlaceholder = vue.computed(() => {
        if (showPlaceholder.value) {
          return props.placeholder;
        } else {
          if (props.multiple) {
            const activeTitles = items.value.filter((option) => computedModelValue.value.includes(option.id));
            if (activeTitles) {
              return activeTitles.map((item) => item.name).join(", ");
            } else if (props.addable) {
              return computedModelValue.value.join(",");
            }
          } else {
            const activeTitle = items.value.find((option) => option.id === computedModelValue.value);
            if (activeTitle) {
              return activeTitle.name;
            } else if (props.addable) {
              return props.modelValue;
            }
          }
          return null;
        }
      });
      vue.watchEffect(() => {
        if (dropdownPlaceholder.value === null && props.server_callback_method) {
          loadingTitle.value = true;
        }
      });
      function onOptionSelect(option) {
        if (props.multiple) {
          const oldValues = [...computedModelValue.value];
          if (option.isSelected) {
            const selectedOptionIndex = oldValues.indexOf(option.id);
            oldValues.splice(selectedOptionIndex, 1);
            emit("update:modelValue", oldValues);
          } else {
            oldValues.push(option.id);
            emit("update:modelValue", oldValues);
          }
        } else {
          emit("update:modelValue", option.id);
          showDropdown.value = false;
        }
      }
      function onModalShow() {
        if (optionWrapper.value) {
          tooltipWidth.value = optionWrapper.value.getBoundingClientRect().width;
        }
        if ((props.filterable || props.addable) && searchInput.value) {
          searchInput.value.focus();
        }
      }
      function getStyle(font) {
        if (props.style_type === "font-select") {
          return {
            fontFamily: font
          };
        } else
          return null;
      }
      function addItem() {
        onOptionSelect({
          name: searchKeyword.value,
          id: searchKeyword.value
        });
        showDropdown.value = false;
      }
      function onInputKeydown(event2) {
        if (props.addable && event2.keyCode === 13) {
          addItem();
        }
      }
      return (_ctx, _cache) => {
        const _component_Loader = vue.resolveComponent("Loader");
        const _component_Icon = vue.resolveComponent("Icon");
        const _component_BaseInput = vue.resolveComponent("BaseInput");
        const _component_ListScroll = vue.resolveComponent("ListScroll");
        const _component_Tooltip = vue.resolveComponent("Tooltip");
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.openBlock(), vue.createBlock(_component_Tooltip, {
          show: showDropdown.value,
          "onUpdate:show": _cache[2] || (_cache[2] = ($event) => showDropdown.value = $event),
          "append-to": "element",
          placement: _ctx.placement,
          trigger: "click",
          "close-on-outside-click": true,
          "close-on-escape": true,
          "tooltip-class": "znpb-option-selectTooltip hg-popper--no-padding",
          class: "znpb-option-selectWrapper",
          "tooltip-style": { width: tooltipWidth.value + "px" },
          "show-arrows": false,
          strategy: "fixed",
          modifiers: [
            {
              name: "preventOverflow",
              enabled: true
            },
            {
              name: "hide",
              enabled: true
            },
            {
              name: "flip",
              options: {
                fallbackPlacements: ["bottom", "top", "right", "left"]
              }
            }
          ],
          onShow: onModalShow
        }, {
          content: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_3$o, [
              _ctx.filterable || _ctx.addable ? (vue.openBlock(), vue.createBlock(_component_BaseInput, {
                key: 0,
                ref_key: "searchInput",
                ref: searchInput,
                modelValue: searchKeyword.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchKeyword.value = $event),
                class: "znpb-option-selectOptionListSearchInput",
                placeholder: _ctx.addable ? i18n__namespace.__("Search or add new", "zionbuilder") : i18n__namespace.__("Search", "zionbuilder"),
                clearable: true,
                icon: "search",
                autocomplete: "off",
                onKeydown: onInputKeydown
              }, vue.createSlots({ _: 2 }, [
                _ctx.addable && searchKeyword.value.length > 0 ? {
                  name: "after-input",
                  fn: vue.withCtx(() => [
                    vue.withDirectives(vue.createVNode(_component_Icon, {
                      icon: "plus",
                      class: "znpb-inputAddableIcon",
                      onClick: vue.withModifiers(addItem, ["stop", "prevent"])
                    }, null, 8, ["onClick"]), [
                      [_directive_znpb_tooltip, i18n__namespace.__("Add new item", "zionbuilder")]
                    ])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["modelValue", "placeholder"])) : vue.createCommentVNode("", true),
              vue.createVNode(_component_ListScroll, {
                loading: loading.value,
                "onUpdate:loading": _cache[1] || (_cache[1] = ($event) => loading.value = $event),
                class: "znpb-menuList znpb-mh-200",
                onScrollEnd
              }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(visibleItems.value, (option) => {
                    return vue.openBlock(), vue.createElementBlock("div", {
                      key: option.id,
                      class: vue.normalizeClass(["znpb-menuListItem", {
                        "znpb-menuListItem--selected": !option.is_label && option.isSelected,
                        "znpb-menuListItem--is-label": option.is_label,
                        "znpb-menuListItem--is-group_item": option.is_group_item
                      }]),
                      style: vue.normalizeStyle(getStyle(option.name)),
                      onClick: vue.withModifiers(($event) => onOptionSelect(option), ["stop"])
                    }, vue.toDisplayString(option.name), 15, _hoisted_4$f);
                  }), 128))
                ]),
                _: 1
              }, 8, ["loading"]),
              stopSearch.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$b, vue.toDisplayString(i18n__namespace.__("no more items", "zionbuilder")), 1)) : vue.createCommentVNode("", true)
            ])
          ]),
          default: vue.withCtx(() => [
            vue.createElementVNode("div", {
              ref_key: "optionWrapper",
              ref: optionWrapper,
              class: vue.normalizeClass(["znpb-option-selectOptionPlaceholder", {
                [`znpb-option-selectOptionPlaceholder--real`]: showPlaceholder.value
              }])
            }, [
              loadingTitle.value ? (vue.openBlock(), vue.createBlock(_component_Loader, {
                key: 0,
                size: 14
              })) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$N, vue.toDisplayString(dropdownPlaceholder.value), 1)),
              vue.createElementVNode("span", _hoisted_2$A, [
                vue.createVNode(_component_Icon, {
                  icon: "select",
                  class: "znpb-inputDropdownIcon",
                  rotate: showDropdown.value ? "180" : false
                }, null, 8, ["rotate"])
              ])
            ], 2)
          ]),
          _: 1
        }, 8, ["show", "placement", "tooltip-style"]);
      };
    }
  });
  const InputSelect_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$M = { class: "znpb-preset-input-wrapper" };
  const __default__$K = {
    name: "PresetInput"
  };
  const _sfc_main$10 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$K), {
    props: {
      isGradient: { type: Boolean, default: true }
    },
    emits: ["save-preset", "cancel"],
    setup(__props, { emit }) {
      const props = __props;
      const presetName = vue.ref("");
      const gradientType = vue.ref("local");
      const hasError = vue.ref(false);
      const gradientTypes = vue.ref([
        {
          id: "local",
          name: i18n__namespace.__("Local", "zionbuilder")
        },
        {
          id: "global",
          name: i18n__namespace.__("Global", "zionbuilder")
        }
      ]);
      function savePreset() {
        if (presetName.value.length === 0) {
          hasError.value = true;
          return;
        }
        if (props.isGradient) {
          emit("save-preset", presetName.value, gradientType.value);
        } else {
          emit("save-preset", presetName.value);
        }
      }
      vue.watch(hasError, (newValue) => {
        if (newValue) {
          setTimeout(() => {
            hasError.value = false;
          }, 500);
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$M, [
          vue.createVNode(vue.unref(_sfc_main$1w), {
            modelValue: presetName.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => presetName.value = $event),
            placeholder: _ctx.isGradient ? i18n__namespace.__("name", "zionbuilder") : i18n__namespace.__("Global color name", "zionbuilder"),
            class: vue.normalizeClass({ "znpb-backgroundGradient__nameInput": _ctx.isGradient }),
            error: hasError.value
          }, vue.createSlots({ _: 2 }, [
            _ctx.isGradient ? {
              name: "prepend",
              fn: vue.withCtx(() => [
                vue.createVNode(vue.unref(_sfc_main$11), {
                  modelValue: gradientType.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => gradientType.value = $event),
                  class: "znpb-backgroundGradient__typeDropdown",
                  options: gradientTypes.value,
                  placeholder: "Type"
                }, null, 8, ["modelValue", "options"])
              ]),
              key: "0"
            } : {
              name: "append",
              fn: vue.withCtx(() => [
                vue.createVNode(vue.unref(_sfc_main$1z), {
                  icon: "check",
                  onMousedown: vue.withModifiers(savePreset, ["stop"])
                }, null, 8, ["onMousedown"]),
                vue.createVNode(vue.unref(_sfc_main$1z), {
                  icon: "close",
                  onMousedown: _cache[1] || (_cache[1] = vue.withModifiers(($event) => _ctx.$emit("cancel", true), ["prevent"]))
                })
              ]),
              key: "1"
            }
          ]), 1032, ["modelValue", "placeholder", "class", "error"]),
          _ctx.isGradient ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            vue.createVNode(vue.unref(_sfc_main$1z), {
              icon: "check",
              class: "znpb-backgroundGradient__action",
              onClick: vue.withModifiers(savePreset, ["stop"])
            }, null, 8, ["onClick"]),
            vue.createVNode(vue.unref(_sfc_main$1z), {
              icon: "close",
              class: "znpb-backgroundGradient__action",
              onClick: _cache[3] || (_cache[3] = vue.withModifiers(($event) => _ctx.$emit("cancel", true), ["stop"]))
            })
          ], 64)) : vue.createCommentVNode("", true)
        ]);
      };
    }
  }));
  const PresetInput_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$$ = /* @__PURE__ */ vue.defineComponent({
    __name: "Draggable",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, vue.toDisplayString(i18n__namespace.__("Draggable", "zionbuilder")), 1);
      };
    }
  });
  const HostsManager = () => {
    let hosts2 = [];
    let iframes = [];
    const getHosts = () => {
      return hosts2;
    };
    const getIframes = () => {
      return iframes;
    };
    const resetHosts = () => {
      hosts2 = [document];
      iframes = [];
    };
    const fetchHosts = () => {
      resetHosts();
      const DOMIframes = document.querySelectorAll("iframe");
      DOMIframes.forEach((iframe) => {
        if (iframe.contentDocument) {
          hosts2.push(iframe.contentDocument);
          iframes.push(iframe);
        }
      });
      return globalThis;
    };
    return {
      getHosts,
      getIframes,
      fetchHosts
    };
  };
  const EventsManager = () => {
    let handled = false;
    const handle = () => {
      handled = true;
    };
    const isHandled = () => {
      return handled;
    };
    const reset = () => {
      handled = false;
    };
    return {
      handle,
      isHandled,
      reset
    };
  };
  function matches(element, value, context = null) {
    if (!value) {
      return false;
    } else if (value === "> *") {
      return matches(element.parentElement, context);
    } else if (value instanceof HTMLElement && value.nodeType > 0) {
      return element === value;
    } else if (typeof value === "string") {
      return element.matches(value);
    } else if (value instanceof NodeList || value instanceof Array) {
      return [...value].includes(element);
    } else if (typeof value === "function") {
      return value(element);
    }
    return false;
  }
  function closest(element, target, context = null) {
    let current = element;
    do {
      if (current && matches(current, target, context)) {
        return current;
      }
      if (current === context) {
        return false;
      }
      current = current.parentElement;
    } while (current && current !== document.body);
    return null;
  }
  var safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === "number" && value !== value;
  };
  function isEqual(first, second) {
    if (first === second) {
      return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
      return true;
    }
    return false;
  }
  function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
      return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
      if (!isEqual(newInputs[i], lastInputs[i])) {
        return false;
      }
    }
    return true;
  }
  function memoizeOne(resultFn, isEqual2) {
    if (isEqual2 === void 0) {
      isEqual2 = areInputsEqual;
    }
    var cache2 = null;
    function memoized() {
      var newArgs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        newArgs[_i] = arguments[_i];
      }
      if (cache2 && cache2.lastThis === this && isEqual2(newArgs, cache2.lastArgs)) {
        return cache2.lastResult;
      }
      var lastResult = resultFn.apply(this, newArgs);
      cache2 = {
        lastResult,
        lastArgs: newArgs,
        lastThis: this
      };
      return lastResult;
    }
    memoized.clear = function clear() {
      cache2 = null;
    };
    return memoized;
  }
  const EventScheduler = (callbacks) => {
    const memoizedMove = memoizeOne((event2) => {
      callbacks.onMove(event2);
    });
    const move = rafSchd$1(memoizedMove);
    const cancel = () => {
      move.cancel();
    };
    return {
      move,
      cancel
    };
  };
  const _AbstractEvent = class _AbstractEvent {
    constructor(data) {
      __publicField(this, "cancelled");
      __publicField(this, "data");
      this.cancelled = false;
      this.data = data;
    }
    isCanceled() {
      return this.cancelled;
    }
    cancel() {
      if (this.isCancelable) {
        this.cancelled = true;
      }
    }
    get type() {
      return _AbstractEvent.type;
    }
    get isCancelable() {
      return _AbstractEvent.cancelable;
    }
  };
  __publicField(_AbstractEvent, "type", "Event");
  __publicField(_AbstractEvent, "cancelable", false);
  let AbstractEvent = _AbstractEvent;
  class MoveEvent extends AbstractEvent {
  }
  __publicField(MoveEvent, "type", "sortable:move");
  __publicField(MoveEvent, "cancelable", true);
  class Start extends AbstractEvent {
  }
  __publicField(Start, "type", "sortable:start");
  __publicField(Start, "cancelable", true);
  class End extends AbstractEvent {
  }
  __publicField(End, "type", "sortable:end");
  class ChangeEvent extends AbstractEvent {
  }
  __publicField(ChangeEvent, "type", "sortable:change");
  __publicField(ChangeEvent, "cancelable", true);
  class Drop extends AbstractEvent {
  }
  __publicField(Drop, "type", "sortable:drop");
  const hosts = HostsManager();
  const eventsManager = EventsManager();
  const getOffset = (currentDocument) => {
    const frameElement = hosts.getIframes().find((iframe) => {
      return iframe.contentDocument === currentDocument;
    });
    if (void 0 !== frameElement) {
      const { left: left2, top: top2 } = frameElement.getBoundingClientRect();
      return {
        left: left2,
        top: top2
      };
    }
    return {
      left: 0,
      top: 0
    };
  };
  memoizeOne(getOffset);
  const _sfc_main$_ = {
    name: "Sortable",
    props: {
      modelValue: {
        required: false,
        type: Array,
        default() {
          return [];
        }
      },
      allowDuplicate: {
        type: Boolean,
        default: false
      },
      duplicateCallback: {
        type: Function
      },
      tag: {
        type: String,
        required: false,
        default: "div"
      },
      dragTreshold: {
        type: Number,
        required: false,
        default: 5
      },
      dragDelay: {
        type: Number,
        required: false,
        default: 0
      },
      handle: {
        type: String,
        required: false,
        default: null
      },
      draggable: {
        type: String,
        required: false,
        default: "> *"
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      },
      group: {
        type: [String, Object, Array],
        required: false,
        default: null
      },
      sort: {
        type: Boolean,
        required: false,
        default: true
      },
      placeholder: {
        type: Boolean,
        required: false,
        default: true
      },
      cssClasses: {
        type: Object,
        required: false,
        default() {
          return {};
        }
      },
      revert: {
        type: Boolean,
        required: false,
        default: true
      },
      axis: {
        type: String,
        required: false,
        default: null
      },
      preserveLastLocation: {
        type: Boolean,
        required: false,
        default: true
      }
    },
    setup(props, { slots, emit }) {
      let duplicateValue = false;
      let draggedItem = null;
      let dragItemInfo = null;
      let dragDelayCompleted = null;
      let dimensions = null;
      let initialX = null;
      let initialY = null;
      let currentDocument = null;
      let helperNode = null;
      let placeholderNode = null;
      let dragTimeout = null;
      let eventScheduler = null;
      let hasHelperSlot = false;
      let childItems = [];
      let hasPlaceholderSlot = false;
      let lastEvent = null;
      const sortableContainer = vue.ref(null);
      const dragging = vue.ref(null);
      const sortableItems = vue.ref([]);
      const helper = vue.ref(null);
      const placeholder = vue.ref(null);
      const computedCssClasses = vue.computed(() => {
        const defaultClasses = {
          // Body when dragging
          body: "vuebdnd-draggable--active",
          // Element that initialised dragging
          source: "vuebdnd__source--dragging",
          // Container from which the draggable started
          "source:container": "vuebdnd__source-container--dragging",
          // Helper that follows the mouse
          helper: "vuebdnd__helper",
          // Placeholder that displays the position of dragged element
          placeholder: "vuebdnd__placeholder",
          // Container that the mouse is currently hovering
          "placeholder:container": "vuebdnd__placeholder-container"
        };
        return __spreadValues(__spreadValues({}, defaultClasses), props.cssClasses);
      });
      const groupInfo = vue.computed(() => {
        let group = props.group;
        if (!group || typeof group !== "object") {
          group = {
            name: group
          };
        }
        return group;
      });
      const getCssClass = (cssClass) => {
        return computedCssClasses.value[cssClass] || null;
      };
      const canPut = (dragItemInfo2) => {
        const dragGroupInfo = dragItemInfo2.group;
        const sameGroup = dragGroupInfo.value.name === groupInfo.value.name;
        const put = dragGroupInfo.put || null;
        if (put === null && sameGroup) {
          return true;
        } else if (put === null || put === false) {
          return false;
        } else if (typeof put === "function") {
          return put(dragItemInfo2, groupInfo);
        } else {
          if (put === true) {
            return true;
          } else if (typeof put === "string") {
            return put === dragGroupInfo.value.name;
          } else if (Array.isArray(put)) {
            return put.indexOf(dragGroupInfo.value.name) > -1;
          }
        }
        return false;
      };
      const movePlaceholder = (container, element, before) => {
        if (before === null) {
          if (dragItemInfo.lastContainer !== container) {
            removeCssClass("placeholder:container");
            if (props.placeholder) {
              placeholderNode.remove();
            }
            dragItemInfo.lastContainer = null;
          }
        } else {
          if (dragItemInfo.lastContainer !== container) {
            removeCssClass("placeholder:container");
          }
          if (props.placeholder) {
            container.insertBefore(placeholderNode, element);
          }
          if (dragItemInfo.lastContainer !== container) {
            addCssClass("placeholder:container");
          }
          const { container: from, item, index: startIndex, to, newIndex, toItem } = dragItemInfo;
          const changeEvent = new ChangeEvent({
            from,
            item,
            startIndex,
            to,
            newIndex,
            toItem,
            before
          });
          dragItemInfo.lastContainer = container;
          emit("change", changeEvent);
        }
      };
      const onDragStart = (event2) => {
        event2.preventDefault();
      };
      const getEvents = () => {
        return {
          onStart: [onDragStart],
          onMove: onMouseMove
        };
      };
      function onMouseDown(event2) {
        if (eventsManager.isHandled()) {
          return;
        }
        if (event2.button !== 0 || event2.ctrlKey || event2.metaKey) {
          return;
        }
        if (event2.target.isContentEditable) {
          return;
        }
        draggedItem = closest(event2.target, props.draggable, sortableContainer.value);
        const sortableDomElements = getDomElementsFromSortableItems();
        if (!draggedItem || !sortableDomElements.includes(draggedItem)) {
          return;
        }
        if (props.handle && !closest(event2.target, props.handle)) {
          return;
        }
        dragItemInfo = getInfoFromTarget(draggedItem);
        if (!canPull()) {
          return;
        }
        eventsManager.handle();
        dragDelayCompleted = !props.dragDelay;
        if (props.dragDelay) {
          clearTimeout(dragTimeout);
          dragTimeout = setTimeout(() => {
            dragDelayCompleted = true;
          }, props.dragDelay);
        }
        dimensions = draggedItem.getBoundingClientRect();
        const { clientX, clientY } = event2;
        initialX = clientX;
        initialY = clientY;
        currentDocument = event2.view.document;
        hosts.fetchHosts();
        hosts.getHosts().forEach((host) => {
          host.addEventListener("mousemove", onDraggableMouseMove);
          host.addEventListener("mouseup", finishDrag);
        });
      }
      const detachEvents = () => {
        hosts.getHosts().forEach((host) => {
          host.removeEventListener("mousemove", onDraggableMouseMove);
          host.removeEventListener("mouseup", finishDrag);
        });
        eventsManager.reset();
      };
      const startDrag = (event2) => {
        const startEvent = new Start(dragItemInfo);
        emit("start", startEvent);
        if (startEvent.isCanceled()) {
          finishDrag();
          return;
        }
        currentDocument.body.style.userSelect = "none";
        attachPlaceholder();
        attachHelper();
        addCssClass("body");
        addCssClass("source");
        addCssClass("source:container");
        addCssClass("placeholder:container");
        helperNode.style.willChange = "transform";
        helperNode.style.zIndex = 99999;
        helperNode.style.pointerEvents = "none";
        helperNode.style.position = "fixed";
        if (hasHelperSlot) {
          draggedItem.style.display = "none";
          const { width, height } = helperNode.getBoundingClientRect();
          helperNode.style.left = `${initialX - width / 2}px`;
          helperNode.style.top = `${initialY - height / 2}px`;
        } else {
          const { width, height, top: top2, left: left2 } = dimensions;
          if (groupInfo.value.pull !== "clone") {
            helperNode.style.left = `${left2}px`;
          }
          helperNode.style.top = `${top2}px`;
          helperNode.style.width = `${width}px`;
          helperNode.style.height = `${height}px`;
        }
      };
      const applyCssClass = (type, action) => {
        const cssClass = getCssClass(type);
        let node = null;
        if (!cssClass) {
          return;
        }
        if (type === "body") {
          node = currentDocument.body;
        } else if (type === "helper") {
          node = helperNode;
        } else if (type === "placeholder") {
          node = placeholderNode;
        } else if (type === "source") {
          node = draggedItem;
        } else if (type === "source:container") {
          node = draggedItem.parentNode;
        } else if (type === "placeholder:container") {
          node = placeholderNode.parentNode;
        }
        if (node) {
          node.classList[action](cssClass);
        }
      };
      const addCssClass = (type) => {
        applyCssClass(type, "add");
      };
      const removeCssClass = (type) => {
        applyCssClass(type, "remove");
      };
      const attachHelper = () => {
        if (hasHelperSlot) {
          helperNode = helper.value;
          sortableContainer.value.insertBefore(helperNode, draggedItem);
          draggedItem.insertAdjacentElement("afterend", helperNode);
        } else if (groupInfo.value.pull === "clone") {
          const clone = draggedItem.cloneNode(true);
          sortableContainer.value.insertBefore(clone, draggedItem);
          helperNode = clone;
        } else {
          helperNode = draggedItem;
        }
        addCssClass("helper");
      };
      function detachHelper() {
        if (helperNode) {
          removeCssClass("helper");
          if (hasHelperSlot || groupInfo.value.pull === "clone") {
            const helperContainer = helperNode.parentNode;
            if (helperContainer) {
              helperContainer.removeChild(helperNode);
            }
          }
        }
      }
      const attachPlaceholder = () => {
        if (!props.placeholder) {
          return;
        }
        if (hasPlaceholderSlot) {
          placeholderNode = placeholder.value;
        } else {
          placeholderNode = draggedItem.cloneNode(true);
          placeholderNode.style.visibility = "hidden";
        }
        if (placeholderNode && groupInfo.value.pull !== "clone") {
          sortableContainer.value.insertBefore(placeholderNode, draggedItem);
        }
        addCssClass("placeholder");
      };
      function detachPlaceholder() {
        if (placeholderNode) {
          removeCssClass("placeholder");
          const placeholderContainer = placeholderNode.parentNode;
          if (placeholderContainer) {
            placeholderContainer.removeChild(placeholderNode);
          }
        }
      }
      const finishDrag = () => {
        clearTimeout(dragTimeout);
        detachEvents();
        if (dragging.value) {
          dragging.value = false;
          currentDocument.body.style.userSelect = null;
          removeCssClass("body");
          removeCssClass("source");
          removeCssClass("source:container");
          removeCssClass("placeholder:container");
          detachPlaceholder();
          detachHelper();
          if (helperNode) {
            if (props.revert) {
              helperNode.style.position = null;
              helperNode.style.left = null;
              helperNode.style.top = null;
              helperNode.style.width = null;
              helperNode.style.height = null;
              helperNode.style.zIndex = null;
              helperNode.style.transform = null;
            }
            if (props.allowDuplicate && duplicateValue) {
              draggedItem.style.display = null;
              draggedItem.style.opacity = null;
            }
            helperNode.style.willChange = null;
            helperNode.style.pointerEvents = null;
            helperNode.style.zIndex = null;
          }
          if (hasHelperSlot) {
            draggedItem.style.display = null;
          }
          const { from, to, startIndex, newIndex, placeBefore } = lastEvent.data;
          let draggedValueModel = null;
          if (from && to && newIndex !== -1) {
            const toVm = to.__SORTABLE_INFO__;
            if (props.modelValue !== null) {
              let updatedNewIndex = placeBefore ? newIndex : newIndex + 1;
              draggedValueModel = props.duplicateCallback && duplicateValue ? props.duplicateCallback(props.modelValue[startIndex]) : props.modelValue[startIndex];
              if (from === to && startIndex !== newIndex && !duplicateValue) {
                updatePositionInList(startIndex, updatedNewIndex);
              } else if (from === to && startIndex === newIndex && !duplicateValue)
                ;
              else {
                if (!duplicateValue) {
                  removeItemFromList(startIndex);
                }
                toVm.addItemToList(draggedValueModel, updatedNewIndex);
              }
            }
            const dropEvent = new Drop(__spreadProps(__spreadValues({}, lastEvent.data), {
              toVm,
              draggedValueModel,
              fromDraggedValueModel: props.modelValue,
              newIndex,
              duplicateItem: duplicateValue
            }));
            toVm.emit("drop", dropEvent);
          }
          const endEvent = new End();
          emit("end", endEvent);
          eventScheduler.cancel();
          currentDocument = null;
          initialX = null;
          initialY = null;
          dimensions = null;
          draggedItem = null;
          dragDelayCompleted = null;
          dragItemInfo = null;
        }
      };
      const updatePositionInList = (oldIndex, newIndex) => {
        if (props.modelValue) {
          const list = [...props.modelValue];
          if (oldIndex >= newIndex) {
            list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
          } else {
            list.splice(newIndex - 1, 0, list.splice(oldIndex, 1)[0]);
          }
          emit("update:modelValue", list);
        }
      };
      const addItemToList = (item, index2) => {
        if (props.modelValue) {
          const list = [...props.modelValue];
          list.splice(index2, 0, item);
          emit("update:modelValue", list);
        }
      };
      const removeItemFromList = (index2) => {
        if (props.modelValue) {
          const list = [...props.modelValue];
          list.splice(index2, 1);
          emit("update:modelValue", list);
        }
      };
      const onDraggableMouseMove = (event2) => {
        if (dragging.value) {
          eventScheduler.move(event2);
        } else {
          const { clientX, clientY } = event2;
          const xDistance = Math.abs(clientX - initialX);
          const yDistance = Math.abs(clientY - initialY);
          if (dragDelayCompleted && (xDistance >= props.dragTreshold || yDistance >= props.dragTreshold)) {
            dragging.value = true;
            vue.nextTick(() => {
              startDrag();
            });
          }
        }
      };
      const getInfoFromTarget = (target) => {
        const validItem = closest(target, props.draggable, sortableContainer.value);
        const sortableDomElements = getDomElementsFromSortableItems();
        const item = sortableDomElements.includes(validItem) ? validItem : false;
        const index2 = sortableDomElements.indexOf(item);
        return {
          container: sortableContainer.value,
          item,
          index: index2,
          newIndex: index2,
          group: groupInfo
        };
      };
      const canPull = () => {
        if (groupInfo.value.pull === false) {
          return false;
        }
        return true;
      };
      const onMouseMove = (event2) => {
        let { clientX, clientY } = event2;
        let offset2 = {
          left: 0,
          top: 0
        };
        if (props.allowDuplicate && event2.ctrlKey) {
          draggedItem.style.display = null;
          draggedItem.style.opacity = 0.2;
          duplicateValue = true;
        } else {
          draggedItem.style.opacity = null;
          duplicateValue = false;
        }
        const movedX = clientX + offset2.left - initialX;
        const movedY = clientY + offset2.top - initialY;
        helperNode.style.transform = `translate3d(${movedX}px, ${movedY}px, 0)`;
        let overItem = {
          container: null,
          item: null,
          index: -1
        };
        const target = currentDocument.elementFromPoint(clientX, clientY);
        if (target) {
          const to2 = closest(target, getSortableContainer);
          const sameContainer = to2 === sortableContainer.value;
          if (sameContainer && !props.sort)
            ;
          else if (to2) {
            const targetVM = to2.__SORTABLE_INFO__;
            const overItemInfo = targetVM.getInfoFromTarget(target);
            overItem = __spreadValues(__spreadValues({}, overItem), overItemInfo);
            dragItemInfo.to = overItem.container;
            dragItemInfo.toItem = overItem.item;
            if (overItem.container) {
              if (overItem.item) {
                const collisionInfoData = collisionInfo(event2, overItem.item, targetVM);
                dragItemInfo.placeBefore = collisionInfoData.before;
                const whereToPutPlaceholder = targetVM.getItemFromList(overItem.index);
                const nextSibling = whereToPutPlaceholder.nextElementSibling;
                const insertBeforeElement = dragItemInfo.placeBefore ? whereToPutPlaceholder : nextSibling;
                movePlaceholderMemoized(overItem.container, insertBeforeElement, dragItemInfo.placeBefore);
                dragItemInfo.newIndex = overItem.index;
              } else {
                if (targetVM.modelValue && targetVM.modelValue.length === 0) {
                  dragItemInfo.newIndex = 0;
                  movePlaceholderMemoized(overItem.container, null, dragItemInfo.placeBefore);
                } else if (sameContainer && props.modelValue.length === 1) {
                  movePlaceholderMemoized(overItem.container, null, dragItemInfo.placeBefore);
                }
              }
            }
          } else if (!props.preserveLastLocation) {
            dragItemInfo.to = null;
            dragItemInfo.newIndex = null;
            dragItemInfo.toItem = null;
            dragItemInfo.placeBefore = null;
            movePlaceholderMemoized(null, null, null);
          }
        }
        const { container: from, item, index: startIndex, to, newIndex, toItem, placeBefore } = dragItemInfo;
        const moveEvent = new MoveEvent({
          from,
          item,
          startIndex,
          to,
          newIndex,
          toItem,
          nativeEvent: event2,
          placeBefore
        });
        emit("move", moveEvent);
        if (moveEvent.isCanceled()) {
          finishDrag();
        }
        lastEvent = moveEvent;
      };
      const collisionInfo = (event2, overItem, targetVm) => {
        const { clientX, clientY } = event2;
        const itemRect = overItem.getBoundingClientRect();
        const orientation = detectOrientation(targetVm);
        const center = orientation === "horizontal" ? itemRect.width / 2 : itemRect.height / 2;
        const before = orientation === "horizontal" ? clientX < itemRect.left + center : clientY < itemRect.top + center;
        return {
          before
        };
      };
      const detectOrientation = (targetVm) => {
        return targetVm.axis || "vertical";
      };
      const getDomElementsFromSortableItems = () => {
        return childItems.filter((el) => el).map((el) => {
          return el.el;
        });
      };
      const getItemFromList = (index2) => {
        const sortableDomElements = getDomElementsFromSortableItems();
        return sortableDomElements[index2];
      };
      const getSortableContainer = (target) => {
        return target && target.__SORTABLE_INFO__ && target.__SORTABLE_INFO__.canPut(dragItemInfo);
      };
      vue.onMounted(() => {
        eventScheduler = EventScheduler(getEvents());
        sortableContainer.value.__SORTABLE_INFO__ = sortableInfo;
        collectChildren();
      });
      vue.onUpdated(() => {
        collectChildren();
      });
      function collectChildren() {
        sortableItems.value = fetchChildren(childItems);
      }
      function fetchChildren(items) {
        let children = [];
        if (Array.isArray(items)) {
          items.forEach((child) => {
            if (child.type === vue.Fragment) {
              children = [...children, ...fetchChildren(child.children)];
            } else {
              children.push(child);
            }
          });
        }
        return children;
      }
      const movePlaceholderMemoized = memoizeOne(movePlaceholder);
      const sortableInfo = {
        group: props.group,
        axis: props.axis,
        getInfoFromTarget,
        canPut,
        getItemFromList,
        addItemToList,
        modelValue: props.modelValue,
        emit
      };
      return () => {
        const childElements = [];
        if (slots.start) {
          childElements.push(slots.start());
        }
        const draggableItems = slots.default();
        childItems = fetchChildren(draggableItems);
        childElements.push(draggableItems);
        if (dragging.value) {
          if (slots.helper) {
            hasHelperSlot = true;
            childElements.push(
              vue.h(
                "div",
                {
                  class: "zion-editor__sortable-helper",
                  ref: helper
                },
                slots.helper()
              )
            );
          }
          if (slots.placeholder) {
            hasPlaceholderSlot = true;
            childElements.push(
              vue.h(
                "div",
                {
                  class: "znpb-sortable__placeholder",
                  ref: placeholder
                },
                slots.placeholder()
              )
            );
          }
        }
        if (slots.end) {
          childElements.push(slots.end());
        }
        return vue.h(
          props.tag,
          {
            onMousedown: props.disabled ? null : onMouseDown,
            onDragstart: onDragStart,
            ref: sortableContainer,
            class: {
              [`vuebdnd__placeholder-empty-container`]: childItems.length === 0 || dragging.value && childItems.length === 1
            }
          },
          [childElements]
        );
      };
    }
  };
  const _hoisted_1$L = { class: "znpb-gradient-wrapper" };
  const _hoisted_2$z = { class: "znpb-gradient-elements-wrapper" };
  const __default__$J = {
    name: "GradientGenerator"
  };
  const _sfc_main$Z = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$J), {
    props: {
      modelValue: {},
      saveToLibrary: { type: Boolean, default: true }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const showPresetInput = vue.ref(false);
      const activeGradientIndex = vue.ref(0);
      const { addLocalGradient, addGlobalGradient } = useBuilderOptionsStore();
      const computedValue = vue.computed({
        get() {
          var _a2;
          const clonedValue = JSON.parse(JSON.stringify((_a2 = props.modelValue) != null ? _a2 : getDefaultGradient()));
          const { applyFilters: applyFilters2 } = window.zb.hooks;
          return applyFilters2("zionbuilder/options/model", clonedValue);
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      const activeGradient = vue.computed({
        get() {
          return computedValue.value[activeGradientIndex.value];
        },
        set(newValue) {
          const valueToSend = [...computedValue.value];
          valueToSend[activeGradientIndex.value] = newValue;
          computedValue.value = valueToSend;
        }
      });
      function addGlobalPattern(name, type) {
        showPresetInput.value = false;
        const defaultGradient = {
          id: generateUID(),
          name,
          config: computedValue.value
        };
        type === "local" ? addLocalGradient(defaultGradient) : addGlobalGradient(defaultGradient);
      }
      function deleteGradient(gradientConfig) {
        const deletedGradientIndex = computedValue.value.indexOf(gradientConfig);
        if (activeGradient.value === gradientConfig) {
          if (deletedGradientIndex > 0) {
            activeGradientIndex.value = deletedGradientIndex - 1;
          } else {
            activeGradientIndex.value = deletedGradientIndex + 1;
          }
        } else {
          if (deletedGradientIndex < activeGradientIndex.value) {
            activeGradientIndex.value = activeGradientIndex.value - 1;
          }
        }
        const updatedValues = computedValue.value.slice(0);
        updatedValues.splice(deletedGradientIndex, 1);
        computedValue.value = updatedValues;
      }
      function addGradientConfig() {
        const defaultConfig = getDefaultGradient();
        computedValue.value = [...computedValue.value, defaultConfig[0]];
        vue.nextTick(() => {
          const newGradientIndex = computedValue.value.length - 1;
          changeActive(newGradientIndex);
        });
      }
      function changeActive(index2) {
        activeGradientIndex.value = index2;
      }
      function changePosition(position) {
        activeGradient.value = __spreadProps(__spreadValues({}, activeGradient.value), {
          position
        });
      }
      function deleteGradientValue() {
        emit("update:modelValue", null);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$L, [
          !_ctx.saveToLibrary ? (vue.openBlock(), vue.createBlock(_sfc_main$1e, {
            key: 0,
            config: computedValue.value,
            activegrad: activeGradient.value,
            onChangeActiveGradient: _cache[0] || (_cache[0] = ($event) => changeActive($event)),
            onPositionChanged: _cache[1] || (_cache[1] = ($event) => changePosition($event))
          }, null, 8, ["config", "activegrad"])) : (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1x), { key: 1 }, {
            actions: vue.withCtx(() => [
              !showPresetInput.value ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 0,
                class: "znpb-gradient__show-preset",
                onClick: _cache[4] || (_cache[4] = ($event) => showPresetInput.value = true)
              }, vue.toDisplayString(i18n__namespace.__("Save to library", "zionbuilder")), 1)) : (vue.openBlock(), vue.createBlock(_sfc_main$10, {
                key: 1,
                onSavePreset: addGlobalPattern,
                onCancel: _cache[5] || (_cache[5] = ($event) => showPresetInput.value = false)
              })),
              !showPresetInput.value ? (vue.openBlock(), vue.createBlock(_sfc_main$1z, {
                key: 2,
                icon: "delete",
                "bg-size": 30,
                class: "znpb-gradient-wrapper__delete-gradient",
                onClick: vue.withModifiers(deleteGradientValue, ["stop"])
              }, null, 8, ["onClick"])) : vue.createCommentVNode("", true)
            ]),
            default: vue.withCtx(() => [
              vue.createVNode(_sfc_main$1e, {
                config: computedValue.value,
                activegrad: activeGradient.value,
                onChangeActiveGradient: _cache[2] || (_cache[2] = ($event) => changeActive($event)),
                onPositionChanged: _cache[3] || (_cache[3] = ($event) => changePosition($event))
              }, null, 8, ["config", "activegrad"])
            ]),
            _: 1
          })),
          vue.createElementVNode("div", _hoisted_2$z, [
            vue.createVNode(vue.unref(_sfc_main$_), {
              modelValue: computedValue.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => computedValue.value = $event),
              class: "znpb-admin-colors__container",
              handle: null,
              "drag-delay": 0,
              "drag-treshold": 10,
              disabled: false,
              revert: true,
              axis: "horizontal"
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(computedValue.value, (gradient, i) => {
                  return vue.openBlock(), vue.createBlock(_sfc_main$12, {
                    key: i,
                    class: "znpb-gradient-elements__delete-button",
                    config: gradient,
                    "show-remove": computedValue.value.length > 1,
                    "is-active": activeGradientIndex.value === i,
                    onChangeActiveGradient: ($event) => changeActive(i),
                    onDeleteGradient: ($event) => deleteGradient(gradient)
                  }, null, 8, ["config", "show-remove", "is-active", "onChangeActiveGradient", "onDeleteGradient"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["modelValue"]),
            vue.createVNode(_sfc_main$1z, {
              icon: "plus",
              class: "znpb-colorpicker-add-grad",
              onClick: addGradientConfig
            })
          ]),
          vue.createVNode(_sfc_main$14, {
            modelValue: activeGradient.value,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => activeGradient.value = $event)
          }, null, 8, ["modelValue"])
        ]);
      };
    }
  }));
  const GradientGenerator_vue_vue_type_style_index_0_lang = "";
  const __default__$I = {
    name: "LibraryElement"
  };
  const _sfc_main$Y = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$I), {
    props: {
      animation: { type: Boolean, default: true },
      icon: {},
      hasInput: { type: Boolean }
    },
    emits: ["close-library"],
    setup(__props, { emit }) {
      const onstart = vue.ref(true);
      const expand = vue.ref(false);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-form-library-inner-pattern-wrapper", {
            "znpb-form-library-inner-pattern-wrapper--start": onstart.value,
            "znpb-form-library-inner-pattern-wrapper--stretch": !expand.value,
            "znpb-form-library-inner-pattern-wrapper--expand": expand.value,
            "znpb-form-library-inner-pattern-wrapper--hasInput": _ctx.hasInput
          }])
        }, [
          !_ctx.hasInput ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            _ctx.animation ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
              key: 0,
              icon: "more",
              class: "znpb-form-library-inner-action-icon",
              onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => (expand.value = !expand.value, onstart.value = false), ["stop"]))
            })) : vue.createCommentVNode("", true),
            _ctx.icon ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
              key: 1,
              icon: _ctx.icon,
              class: "znpb-form-library-inner-action-icon",
              onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => emit("close-library"), ["stop"]))
            }, null, 8, ["icon"])) : vue.createCommentVNode("", true)
          ], 64)) : vue.createCommentVNode("", true),
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  }));
  const LibraryElement_vue_vue_type_style_index_0_lang = "";
  const __default__$H = {
    name: "Label"
  };
  const _sfc_main$X = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$H), {
    props: {
      text: {},
      type: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("span", {
          class: vue.normalizeClass(["znpb-label", { [`znpb-label--${_ctx.type}`]: _ctx.type }])
        }, vue.toDisplayString(_ctx.text), 3);
      };
    }
  }));
  const Label_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$K = {
    key: 0,
    class: "znpb-form-library-grid__panel-content-message"
  };
  const _hoisted_2$y = {
    key: 1,
    class: "znpb-form-library-grid__panel-content znpb-form-library-grid__panel-content--no-pd znpb-fancy-scrollbar"
  };
  const _hoisted_3$n = {
    key: 0,
    class: "znpb-colorpicker-global-wrapper--pro"
  };
  const _hoisted_4$e = {
    key: 0,
    class: "znpb-form-library-grid__panel-content-message"
  };
  const _hoisted_5$a = {
    key: 1,
    class: "znpb-form-library-grid__panel-content znpb-form-library-grid__panel-content--no-pd znpb-fancy-scrollbar"
  };
  const __default__$G = {
    name: "GradientLibrary"
  };
  const _sfc_main$W = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$G), {
    props: {
      model: {}
    },
    emits: ["activate-gradient", "close-library"],
    setup(__props, { emit }) {
      const updateValueByPath = vue.inject("updateValueByPath");
      function getPro() {
        if (window.ZBCommonData !== void 0) {
          return window.ZBCommonData.environment.plugin_pro.is_active;
        }
        return false;
      }
      const isPro = getPro();
      const schema = vue.inject("schema");
      const { getOptionValue } = useBuilderOptionsStore();
      const getGlobalGradients = vue.computed(() => {
        return getOptionValue("global_gradients");
      });
      const getLocalGradients = vue.computed(() => {
        return getOptionValue("local_gradients");
      });
      function onGlobalGradientSelected(gradient) {
        const { id } = schema;
        updateValueByPath(`__dynamic_content__.${id}`, {
          type: "global-gradient",
          options: {
            gradient_id: gradient.id
          }
        });
        vue.nextTick(() => {
          emit("activate-gradient", null);
        });
      }
      return (_ctx, _cache) => {
        const _component_Tab = vue.resolveComponent("Tab");
        const _component_Tabs = vue.resolveComponent("Tabs");
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.openBlock(), vue.createBlock(_sfc_main$Y, {
          animation: false,
          icon: "close",
          onCloseLibrary: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close-library"))
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_Tabs, { "tab-style": "minimal" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_Tab, { name: "Local" }, {
                  default: vue.withCtx(() => [
                    getLocalGradients.value.length === 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$K, vue.toDisplayString(i18n__namespace.__("No local gradients were found", "zionbuilder")), 1)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$y, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(getLocalGradients.value, (gradient, i) => {
                        return vue.openBlock(), vue.createBlock(_sfc_main$1g, {
                          key: i,
                          config: gradient.config,
                          round: true,
                          onClick: ($event) => _ctx.$emit("activate-gradient", gradient.config)
                        }, null, 8, ["config", "onClick"]);
                      }), 128))
                    ]))
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_Tab, { name: "Global" }, {
                  default: vue.withCtx(() => [
                    !vue.unref(isPro) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$n, [
                      vue.createTextVNode(vue.toDisplayString(i18n__namespace.__("Global colors are available in", "zionbuilder")) + " ", 1),
                      vue.createVNode(vue.unref(_sfc_main$X), {
                        text: i18n__namespace.__("pro", "zionbuilder"),
                        type: "pro"
                      }, null, 8, ["text"])
                    ])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                      getGlobalGradients.value.length === 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$e, vue.toDisplayString(i18n__namespace.__("No global gradients were found", "zionbuilder")), 1)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$a, [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(getGlobalGradients.value, (gradient, i) => {
                          return vue.withDirectives((vue.openBlock(), vue.createBlock(_sfc_main$1g, {
                            key: i,
                            config: gradient.config,
                            round: true,
                            onClick: ($event) => onGlobalGradientSelected(gradient)
                          }, null, 8, ["config", "onClick"])), [
                            [_directive_znpb_tooltip, gradient.name]
                          ]);
                        }), 128))
                      ]))
                    ], 64))
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
  }));
  const GradientLibrary_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$J = { class: "znpb-options-breadcrumbs" };
  const _hoisted_2$x = ["innerHTML"];
  const __default__$F = {
    name: "OptionBreadcrumbs"
  };
  const _sfc_main$V = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$F), {
    props: {
      breadcrumbs: {},
      showBackButton: { type: Boolean }
    },
    setup(__props) {
      const props = __props;
      const previousItem = vue.computed(() => {
        var _a2;
        return (_a2 = props.breadcrumbs) == null ? void 0 : _a2[props.breadcrumbs.length - 2];
      });
      const computedBreadcrumbs = vue.computed(() => {
        var _a2;
        return (_a2 = props.breadcrumbs) == null ? void 0 : _a2.slice(Math.max(props.breadcrumbs.length - 2, 1));
      });
      function onItemClicked(breadcrumbItem) {
        if (breadcrumbItem.callback !== void 0) {
          breadcrumbItem.callback();
        }
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$J, [
          _ctx.showBackButton ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
            key: 0,
            class: "znpb-back-icon-breadcrumbs",
            icon: "select",
            onClick: _cache[0] || (_cache[0] = ($event) => onItemClicked(previousItem.value))
          })) : vue.createCommentVNode("", true),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(computedBreadcrumbs.value, (breadcrumb, i) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: i,
              class: vue.normalizeClass(["znpb-options-breadcrumbs-path", { ["znpb-options-breadcrumbs-path--current"]: i === computedBreadcrumbs.value.length - 1 }]),
              onClick: _cache[1] || (_cache[1] = ($event) => onItemClicked(previousItem.value))
            }, [
              vue.createElementVNode("span", {
                innerHTML: breadcrumb.title
              }, null, 8, _hoisted_2$x),
              i + 1 < computedBreadcrumbs.value.length ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
                key: 0,
                icon: "select",
                class: "znpb-options-breadcrumbs-path-icon"
              })) : vue.createCommentVNode("", true)
            ], 2);
          }), 128))
        ]);
      };
    }
  }));
  const OptionBreadcrumbs_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$I = {
    key: 0,
    class: "znpb-horizontal-accordion__title"
  };
  const _hoisted_2$w = { class: "znpb-horizontal-accordion__header-actions" };
  const _hoisted_3$m = {
    key: 0,
    class: "znpb-horizontal-accordion__content"
  };
  const __default__$E = {
    name: "HorizontalAccordion"
  };
  const _sfc_main$U = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$E), {
    props: {
      hasBreadcrumbs: { type: Boolean, default: true },
      collapsed: { type: Boolean, default: false },
      title: {},
      icon: {},
      level: {},
      showTriggerArrow: { type: Boolean, default: true },
      showBackButton: { type: Boolean },
      showHomeButton: { type: Boolean },
      homeButtonText: {},
      combineBreadcrumbs: { type: Boolean }
    },
    emits: ["collapse", "expand"],
    setup(__props, { expose: __expose, emit }) {
      const props = __props;
      const parentAccordion = vue.inject("parentAccordion", null);
      vue.provide(
        "parentAccordion",
        parentAccordion || {
          addBreadcrumb,
          removeBreadcrumb
        }
      );
      __expose({
        closeAccordion
      });
      const root2 = vue.ref(null);
      const localCollapsed = vue.ref(props.collapsed);
      const breadcrumbs = vue.ref([
        {
          title: props.homeButtonText,
          callback: closeAccordion
        },
        {
          title: props.title
        }
      ]);
      const breadCrumbConfig = vue.ref(null);
      const firstChildOpen = vue.ref(false);
      const slots = vue.useSlots();
      const hasHeaderSlot = vue.computed(() => !!slots.header);
      const hasTitleSlot = vue.computed(() => !!slots.title);
      vue.watch(
        () => props.collapsed,
        (newValue) => {
          localCollapsed.value = newValue;
        }
      );
      const wrapperStyles = vue.computed(() => {
        const cssStyles = {};
        if (!props.combineBreadcrumbs && parentAccordion === null && localCollapsed.value && firstChildOpen.value) {
          cssStyles["overflow"] = "hidden";
        }
        return cssStyles;
      });
      function addBreadcrumb(breadcrumb) {
        if (typeof breadcrumb.previousCallback === "function") {
          const lastItem = breadcrumbs.value[breadcrumbs.value.length - 1];
          lastItem.callback = breadcrumb.previousCallback;
        }
        breadcrumbs.value.push(breadcrumb);
        firstChildOpen.value = true;
      }
      function removeBreadcrumb(breadcrumb) {
        const breadCrumbIndex = breadcrumbs.value.indexOf(breadcrumb);
        if (breadCrumbIndex !== -1) {
          breadcrumbs.value.splice(breadCrumbIndex, 1);
          firstChildOpen.value = false;
        }
      }
      function closeAccordion() {
        localCollapsed.value = false;
        if (parentAccordion && breadCrumbConfig.value) {
          removeBreadcrumb(breadCrumbConfig.value);
        }
        emit("collapse", true);
      }
      function openAccordion() {
        var _a2, _b;
        localCollapsed.value = true;
        (_b = (_a2 = root2.value) == null ? void 0 : _a2.closest(".znpb-horizontal-accordion-wrapper")) == null ? void 0 : _b.scrollTo(0, 0);
        if (props.combineBreadcrumbs && parentAccordion) {
          injectBreadcrumbs();
        }
        emit("expand", false);
      }
      function injectBreadcrumbs() {
        breadCrumbConfig.value = {
          title: props.title || "",
          previousCallback: closeAccordion
        };
        addBreadcrumb(breadCrumbConfig.value);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "root",
          ref: root2,
          class: "znpb-horizontal-accordion"
        }, [
          vue.createVNode(vue.Transition, { name: "slide-title" }, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("div", {
                class: vue.normalizeClass(["znpb-horizontal-accordion__header", { "znpb-horizontal-accordion__header--has-slots": hasHeaderSlot.value }]),
                onClick: openAccordion
              }, [
                !hasHeaderSlot.value ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$I, [
                  !hasTitleSlot.value ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                    _ctx.icon ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
                      key: 0,
                      icon: _ctx.icon
                    }, null, 8, ["icon"])) : vue.createCommentVNode("", true),
                    vue.createElementVNode("span", null, vue.toDisplayString(_ctx.title), 1)
                  ], 64)) : vue.createCommentVNode("", true),
                  vue.renderSlot(_ctx.$slots, "title")
                ])) : vue.createCommentVNode("", true),
                vue.renderSlot(_ctx.$slots, "header"),
                vue.createElementVNode("div", _hoisted_2$w, [
                  vue.renderSlot(_ctx.$slots, "actions"),
                  _ctx.showTriggerArrow ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
                    key: 0,
                    icon: "right-arrow"
                  })) : vue.createCommentVNode("", true)
                ])
              ], 2), [
                [vue.vShow, !localCollapsed.value]
              ])
            ]),
            _: 3
          }),
          vue.createVNode(vue.Transition, { name: "slide-body" }, {
            default: vue.withCtx(() => [
              localCollapsed.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$m, [
                _ctx.hasBreadcrumbs && !(_ctx.combineBreadcrumbs && vue.unref(parentAccordion)) ? (vue.openBlock(), vue.createBlock(_sfc_main$V, {
                  key: 0,
                  "show-back-button": _ctx.showBackButton,
                  breadcrumbs: breadcrumbs.value
                }, null, 8, ["show-back-button", "breadcrumbs"])) : vue.createCommentVNode("", true),
                vue.createElementVNode("div", {
                  class: "znpb-horizontal-accordion-wrapper znpb-fancy-scrollbar",
                  style: vue.normalizeStyle(wrapperStyles.value)
                }, [
                  vue.renderSlot(_ctx.$slots, "default")
                ], 4)
              ])) : vue.createCommentVNode("", true)
            ]),
            _: 3
          })
        ], 512);
      };
    }
  }));
  const HorizontalAccordion_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$H = { class: "znpb-icon-pack-modal__search" };
  const _hoisted_2$v = { class: "znpb-icon-pack-modal-scroll znpb-fancy-scrollbar" };
  const __default__$D = {
    name: "IconsLibraryModalContent"
  };
  const _sfc_main$T = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$D), {
    props: {
      modelValue: {},
      specialFilterPack: {}
    },
    emits: ["update:modelValue", "selected"],
    setup(__props, { emit }) {
      const props = __props;
      const { dataSets } = pinia.storeToRefs(useDataSetsStore());
      const keyword = vue.ref("");
      const activeIcon = vue.ref(null);
      const activeCategory = vue.ref("all");
      const getPacks = vue.computed(() => {
        var _a2;
        return (_a2 = dataSets.value.icons) != null ? _a2 : [];
      });
      const searchModel = vue.computed({
        get() {
          return keyword.value;
        },
        set(newVal) {
          keyword.value = newVal;
        }
      });
      const filteredList = vue.computed(() => {
        if (keyword.value.length > 0) {
          const filtered = [];
          for (const pack of packList.value) {
            const copyPack = __spreadValues({}, pack);
            const b = copyPack.icons.filter((icon) => icon.name.includes(keyword.value.toLowerCase()));
            copyPack.icons = [...b];
            filtered.push(copyPack);
          }
          return filtered;
        } else
          return packList.value;
      });
      const getPlaceholder = vue.computed(() => {
        return `${i18n__namespace.__("Search through", "zionbuilder")} ${getIconNumber.value} ${i18n__namespace.__("icons", "zionbuilder")}`;
      });
      const getIconNumber = vue.computed(() => {
        let iconNumber = 0;
        for (const pack of packList.value) {
          let packNumber = pack.icons.length;
          iconNumber = iconNumber + packNumber;
        }
        return iconNumber;
      });
      const packList = vue.computed(() => {
        if (props.specialFilterPack !== void 0 && props.specialFilterPack.length) {
          return props.specialFilterPack;
        }
        if (activeCategory.value === "all") {
          return getPacks.value;
        } else {
          let newArray = [];
          for (const pack of getPacks.value) {
            if (pack.id === activeCategory.value) {
              newArray.push(pack);
            }
          }
          return newArray;
        }
      });
      const packsOptions = vue.computed(() => {
        const options2 = [
          {
            name: "All",
            id: "all"
          }
        ];
        if (props.specialFilterPack === void 0 || !props.specialFilterPack.length) {
          getPacks.value.forEach((pack) => {
            let a = {
              name: pack.name,
              id: pack.id
            };
            options2.push(a);
          });
        }
        return options2;
      });
      function selectIcon(event2, name) {
        activeIcon.value = event2;
        const icon = {
          family: name,
          name: activeIcon.value.name,
          unicode: activeIcon.value.unicode
        };
        emit("update:modelValue", icon);
      }
      function insertIcon(event2, name) {
        activeIcon.value = event2;
        const icon = {
          family: name,
          name: activeIcon.value.name,
          unicode: activeIcon.value.unicode
        };
        emit("selected", icon);
      }
      return (_ctx, _cache) => {
        const _component_InputSelect = vue.resolveComponent("InputSelect");
        const _component_BaseInput = vue.resolveComponent("BaseInput");
        const _component_IconPackGrid = vue.resolveComponent("IconPackGrid");
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-icon-pack-modal", { ["znpb-icon-pack-modal--has-special-filter"]: _ctx.specialFilterPack }])
        }, [
          vue.createElementVNode("div", _hoisted_1$H, [
            vue.createVNode(_component_InputSelect, {
              modelValue: activeCategory.value,
              options: packsOptions.value,
              class: "znpb-icons-category-select",
              placement: "bottom-start",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeCategory.value = $event)
            }, null, 8, ["modelValue", "options"]),
            vue.createVNode(_component_BaseInput, {
              modelValue: searchModel.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchModel.value = $event),
              placeholder: getPlaceholder.value,
              clearable: true,
              icon: "search"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          vue.createElementVNode("div", _hoisted_2$v, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(filteredList.value, (pack, i) => {
              var _a2, _b;
              return vue.openBlock(), vue.createBlock(_component_IconPackGrid, {
                key: i,
                "icon-list": pack.icons,
                family: pack.name,
                "active-icon": (_a2 = _ctx.modelValue) == null ? void 0 : _a2.name,
                "active-family": (_b = _ctx.modelValue) == null ? void 0 : _b.family,
                onIconSelected: ($event) => selectIcon($event, pack.name),
                "onUpdate:modelValue": ($event) => insertIcon($event, pack.name)
              }, null, 8, ["icon-list", "family", "active-icon", "active-family", "onIconSelected", "onUpdate:modelValue"]);
            }), 128))
          ])
        ], 2);
      };
    }
  }));
  const IconsLibraryModalContent_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$G = { class: "znpb-icon-options" };
  const _hoisted_2$u = ["onClick"];
  const _hoisted_3$l = {
    key: 0,
    class: "znpb-icon-options__delete"
  };
  const _hoisted_4$d = ["data-znpbiconfam", "data-znpbicon"];
  const __default__$C = {
    name: "IconLibrary"
  };
  const _sfc_main$S = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$C), {
    props: {
      specialFilterPack: {},
      title: {},
      modelValue: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const showModal = vue.ref(false);
      const valueModel = vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      function unicode(unicode2) {
        return JSON.parse('"\\' + unicode2 + '"');
      }
      function open2() {
        showModal.value = true;
      }
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        const _component_Modal = vue.resolveComponent("Modal");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$G, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["znpb-icon-trigger", { ["znpb-icon-trigger--no-icon"]: !_ctx.modelValue }]),
            onClick: vue.withModifiers(open2, ["self"])
          }, [
            _ctx.modelValue ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$l, [
              vue.createElementVNode("span", {
                class: "znpb-icon-preview",
                "data-znpbiconfam": _ctx.modelValue.family,
                "data-znpbicon": unicode(_ctx.modelValue.unicode),
                onClickPassive: _cache[0] || (_cache[0] = vue.withModifiers(($event) => showModal.value = true, ["stop"]))
              }, null, 40, _hoisted_4$d),
              vue.createVNode(_component_Icon, {
                icon: "delete",
                rounded: true,
                onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => _ctx.$emit("update:modelValue", null), ["stop"]))
              })
            ])) : (vue.openBlock(), vue.createElementBlock("span", {
              key: 1,
              onClick: _cache[2] || (_cache[2] = ($event) => showModal.value = true)
            }, vue.toDisplayString(i18n__namespace.__("Select an icon", "zionbuilder")), 1))
          ], 10, _hoisted_2$u),
          vue.createVNode(_component_Modal, {
            show: showModal.value,
            "onUpdate:show": _cache[5] || (_cache[5] = ($event) => showModal.value = $event),
            width: 590,
            fullscreen: false,
            "append-to": ".znpb-center-area",
            "show-maximize": false,
            class: "znpb-icon-library-modal",
            title: i18n__namespace.__("Icon Library", "zionbuilder")
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_sfc_main$T, {
                modelValue: valueModel.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => valueModel.value = $event),
                "special-filter-pack": _ctx.specialFilterPack,
                onSelected: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("update:modelValue", valueModel.value))
              }, null, 8, ["modelValue", "special-filter-pack"])
            ]),
            _: 1
          }, 8, ["show", "title"])
        ]);
      };
    }
  }));
  const InputIcon_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$F = ["readonly", "onKeydown"];
  const __default__$B = {
    name: "InlineEdit"
  };
  const _sfc_main$R = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$B), {
    props: {
      modelValue: { default: "" },
      enabled: { type: Boolean, default: false },
      tag: { default: "div" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const root2 = vue.ref(null);
      const isEnabled = vue.ref(props.enabled);
      const computedModelValue = vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      vue.watch(isEnabled, (newValue) => {
        if (newValue) {
          document.addEventListener("click", disableOnOutsideClick, true);
        } else {
          document.removeEventListener("click", disableOnOutsideClick, true);
        }
      });
      vue.onBeforeUnmount(() => {
        document.removeEventListener("click", disableOnOutsideClick, true);
      });
      function disableOnOutsideClick(event2) {
        if (event2.target !== root2.value) {
          disableEdit();
        }
      }
      function disableEdit() {
        var _a2;
        isEnabled.value = false;
        (_a2 = window.getSelection()) == null ? void 0 : _a2.removeAllRanges();
      }
      return (_ctx, _cache) => {
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
          ref_key: "root",
          ref: root2,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedModelValue.value = $event),
          readonly: !isEnabled.value,
          class: vue.normalizeClass(["znpb-inlineEditInput", { "znpb-inlineEditInput--readonly": !isEnabled.value }]),
          onDblclick: _cache[1] || (_cache[1] = ($event) => isEnabled.value = true),
          onKeydown: vue.withKeys(vue.withModifiers(disableEdit, ["stop"]), ["escape"])
        }, null, 42, _hoisted_1$F)), [
          [vue.vModelText, computedModelValue.value]
        ]);
      };
    }
  }));
  const InlineEdit_vue_vue_type_style_index_0_lang = "";
  function createHooksInstance() {
    const filters = {};
    const actions = {};
    const addAction2 = (event2, callback) => {
      if (typeof actions[event2] === "undefined") {
        actions[event2] = [];
      }
      actions[event2].push(callback);
    };
    function on2(event2, callback) {
      console.warn("zb.hooks.on was deprecated in favour of window.zb.addAction");
      return addAction2(event2, callback);
    }
    const removeAction2 = (event2, callback) => {
      if (typeof actions[event2] !== "undefined") {
        const callbackIndex = actions[event2].indexOf(callback);
        if (callbackIndex !== -1) {
          actions[event2].splice(callbackIndex);
        }
      }
    };
    function off2(event2, callback) {
      console.warn("zb.hooks.off was deprecated in favour of window.zb.addAction");
      return addAction2(event2, callback);
    }
    const doAction2 = (event2, ...data) => {
      if (typeof actions[event2] !== "undefined") {
        actions[event2].forEach((callbackFunction) => {
          callbackFunction(...data);
        });
      }
    };
    function trigger2(event2, ...data) {
      console.warn("zb.hooks.trigger was deprecated in favour of window.zb.addAction");
      return doAction2(event2, ...data);
    }
    const addFilter2 = (id, callback) => {
      if (typeof filters[id] === "undefined") {
        filters[id] = [];
      }
      filters[id].push(callback);
    };
    const applyFilters2 = (id, value, ...params) => {
      if (typeof filters[id] !== "undefined") {
        filters[id].forEach((callback) => {
          value = callback(value, ...params);
        });
      }
      return value;
    };
    return {
      addAction: addAction2,
      removeAction: removeAction2,
      doAction: doAction2,
      addFilter: addFilter2,
      applyFilters: applyFilters2,
      // Deprecated
      on: on2,
      off: off2,
      trigger: trigger2
    };
  }
  const { addAction, removeAction, doAction, addFilter, applyFilters, on, off, trigger } = createHooksInstance();
  const hooks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    addAction,
    addFilter,
    applyFilters,
    createHooksInstance,
    doAction,
    off,
    on,
    removeAction,
    trigger
  }, Symbol.toStringTag, { value: "Module" }));
  const _hoisted_1$E = { class: "znpb-forms-image-custom-size__wrapper" };
  const _hoisted_2$t = { class: "znpb-forms-image-custom-size__option-separator" };
  const _hoisted_3$k = { class: "znpb-forms-image-custom-size__option-wrapper" };
  const __default__$A = {
    name: "CustomSize",
    data() {
      return {};
    },
    methods: {}
  };
  const _sfc_main$Q = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$A), {
    props: {
      modelValue: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      var _a2, _b;
      const props = __props;
      const width = vue.ref((_a2 = props.modelValue) == null ? void 0 : _a2.width);
      const height = vue.ref((_b = props.modelValue) == null ? void 0 : _b.height);
      function onCustomSizeClick() {
        if (width.value || height.value) {
          emit("update:modelValue", {
            width: width.value || "",
            height: height.value || ""
          });
        }
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$E, [
          vue.createVNode(_sfc_main$19, {
            title: i18n__namespace.__("Custom Width", "zionbuilder"),
            align: "center",
            class: "znpb-forms-image-custom-size__option-wrapper"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_sfc_main$1w, {
                modelValue: width.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => width.value = $event)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["title"]),
          vue.createElementVNode("div", _hoisted_2$t, [
            vue.createVNode(vue.unref(_sfc_main$1z), {
              icon: "close",
              size: 10
            })
          ]),
          vue.createVNode(_sfc_main$19, {
            title: i18n__namespace.__("Custom Height", "zionbuilder"),
            align: "center",
            class: "znpb-forms-image-custom-size__option-wrapper"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_sfc_main$1w, {
                modelValue: height.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => height.value = $event)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["title"]),
          vue.createElementVNode("div", _hoisted_3$k, [
            vue.createElementVNode("button", {
              class: "znpb-button znpb-button--line znpb-forms-image-custom-size__apply-button",
              onClick: onCustomSizeClick
            }, vue.toDisplayString(i18n__namespace.__("Apply", "zionbuilder")), 1)
          ])
        ]);
      };
    }
  }));
  const CustomSize_vue_vue_type_style_index_0_lang = "";
  const registeredLocations = {};
  const useInjections = () => {
    const registerComponent = (location2, component) => {
      if (!location2 && !component) {
        console.warn("You need to specify a location and a component in order to register an injection component.", {
          location: location2,
          component
        });
        return false;
      }
      if (!Array.isArray(registeredLocations[location2])) {
        registeredLocations[location2] = [];
      }
      registeredLocations[location2].push(component);
    };
    const getComponentsForLocation = (location2) => {
      if (!location2) {
        console.warn("You need to specify a location and a component in order to get injection components.", {
          location: location2
        });
        return false;
      }
      if (!Array.isArray(registeredLocations[location2])) {
        return [];
      }
      return registeredLocations[location2];
    };
    return {
      registerComponent,
      getComponentsForLocation,
      registeredLocations
    };
  };
  const __default__$z = {
    name: "Injection",
    inheritAttrs: false
  };
  const _sfc_main$P = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$z), {
    props: {
      location: {},
      htmlTag: { default: "div" }
    },
    setup(__props) {
      const props = __props;
      const { getComponentsForLocation } = useInjections();
      const computedComponents = vue.computed(() => getComponentsForLocation(props.location));
      return (_ctx, _cache) => {
        return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(computedComponents.value, (customComponent, i) => {
          return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(customComponent), { key: i });
        }), 128);
      };
    }
  }));
  const _hoisted_1$D = { class: "znpb-input-image__wrapper" };
  const _hoisted_2$s = { class: "znpb-input-image-holder__image-actions" };
  const _hoisted_3$j = ["onMousedown"];
  const _hoisted_4$c = /* @__PURE__ */ vue.createElementVNode("span", { class: "znpb-input-image-holder__drag-button" }, null, -1);
  const _hoisted_5$9 = [
    _hoisted_4$c
  ];
  const _hoisted_6$6 = ["onClick"];
  const _hoisted_7$4 = { class: "znpb-actions-overlay__expander-text" };
  const _hoisted_8$4 = {
    key: 2,
    class: "znpb-input-image__custom-size-wrapper"
  };
  const wp2 = window.wp;
  const __default__$y = {
    name: "InputImage"
  };
  const _sfc_main$O = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$y), {
    props: {
      modelValue: {},
      emptyText: { default: "No Image Selected" },
      shouldDragImage: { type: Boolean },
      positionLeft: { default: "50%" },
      positionTop: { default: "50%" },
      show_size: { type: Boolean }
    },
    emits: ["background-position-change", "update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const inputWrapper = vue.inject("inputWrapper");
      const optionsForm = vue.inject("OptionsForm");
      const imageComponent = vue.computed(() => {
        return applyFilters("zionbuilder/options/image/image_component", "img", props.modelValue);
      });
      const imageHolder = vue.ref(null);
      const image = vue.ref(null);
      const dragButton = vue.ref(null);
      const attachmentId = vue.ref(null);
      const isDragging = vue.ref(false);
      const imageContainerPosition = vue.ref({
        left: null,
        top: null
      });
      const imageHolderWidth = vue.ref(null);
      const imageHolderHeight = vue.ref(null);
      const previewExpanded = vue.ref(false);
      const minHeight = vue.ref(200);
      const imageHeight = vue.ref(null);
      const initialX = vue.ref(null);
      const initialY = vue.ref(null);
      const attachmentModel = vue.ref(null);
      const loading = vue.ref(true);
      const dynamicImageSrc = vue.ref(null);
      let mediaModal;
      vue.watch(
        () => props.modelValue,
        (newValue, oldValue) => {
          if (newValue !== oldValue) {
            vue.nextTick(() => {
              getImageHeight();
              if (previewExpanded.value) {
                toggleExpand();
              }
            });
          }
        }
      );
      const customComponent = vue.computed(() => {
        const { applyFilters: applyFilters2 } = window.zb.hooks;
        return applyFilters2("zionbuilder/options/image/display_component", null, props.modelValue, inputWrapper, optionsForm);
      });
      const isSVG = vue.computed(() => {
        if (imageSrc.value) {
          return imageSrc.value.endsWith(".svg");
        }
        return imageSrc.value;
      });
      const imageSizes = vue.computed(() => {
        var _a2, _b, _c, _d;
        const options2 = [];
        const imageSizes2 = (_b = (_a2 = attachmentModel.value) == null ? void 0 : _a2.attributes) == null ? void 0 : _b.sizes;
        const customSizes = (_d = (_c = attachmentModel.value) == null ? void 0 : _c.attributes) == null ? void 0 : _d.zion_custom_sizes;
        const allSizes = __spreadValues(__spreadValues({}, imageSizes2), customSizes);
        Object.keys(allSizes).forEach((sizeKey) => {
          const name = startCase$1(sizeKey);
          const width = allSizes[sizeKey].width;
          const height = allSizes[sizeKey].height;
          const optionName = `${name} ( ${width} x ${height} )`;
          options2.push({
            name: optionName,
            id: sizeKey
          });
        });
        options2.push({
          name: "Custom",
          id: "custom"
        });
        return options2;
      });
      const sizeValue = vue.computed({
        get() {
          var _a2;
          return typeof props.modelValue === "object" && ((_a2 = props.modelValue) == null ? void 0 : _a2.image_size) || "full";
        },
        set(newValue) {
          const value = typeof props.modelValue === "object" ? props.modelValue : {};
          emit("update:modelValue", __spreadProps(__spreadValues({}, value), {
            image_size: newValue
          }));
        }
      });
      const customSizeValue = vue.computed({
        get() {
          var _a2;
          return typeof props.modelValue === "object" && ((_a2 = props.modelValue) == null ? void 0 : _a2.custom_size) || {};
        },
        set(newValue) {
          emit("update:modelValue", __spreadProps(__spreadValues({}, typeof props.modelValue === "object" && props.modelValue || {}), {
            custom_size: newValue
          }));
        }
      });
      const positionCircleStyle = vue.computed(() => {
        return {
          left: props.positionLeft.includes("%") ? props.positionLeft : "",
          top: props.positionTop.includes("%") ? props.positionTop : ""
        };
      });
      const wrapperStyles = vue.computed(() => {
        if (imageSrc.value && imageHolderHeight.value) {
          return {
            height: imageHolderHeight.value + "px"
          };
        }
        return {};
      });
      const imageValue = vue.computed({
        get() {
          if (props.show_size) {
            return props.modelValue || {};
          } else {
            return props.modelValue || null;
          }
        },
        set(newValue) {
          if (props.show_size) {
            emit("update:modelValue", __spreadValues(__spreadValues({}, typeof props.modelValue === "object" && props.modelValue || {}), newValue));
          } else {
            emit("update:modelValue", newValue);
          }
        }
      });
      const imageSrc = vue.computed(() => {
        var _a2;
        return dynamicImageSrc.value ? dynamicImageSrc.value : typeof props.modelValue === "object" ? ((_a2 = props.modelValue) == null ? void 0 : _a2.image) || null : props.modelValue || null;
      });
      const element = vue.inject("ZionElement", null);
      vue.watchEffect(() => {
        doAction("zionbuilder/input/image/src_url", dynamicImageSrc, props.modelValue, element);
      });
      const shouldDisplayExpander = vue.computed(() => {
        return imageHolderHeight.value >= minHeight.value;
      });
      function getImageHeight() {
        if (!image.value) {
          return;
        }
        image.value.addEventListener("load", () => {
          const localImageHeight = image.value.getBoundingClientRect().height;
          imageHeight.value = localImageHeight;
          imageHolderHeight.value = localImageHeight < minHeight.value ? localImageHeight : minHeight.value;
        });
      }
      function toggleExpand() {
        previewExpanded.value = !previewExpanded.value;
        if (previewExpanded.value) {
          imageHolderHeight.value = imageHeight.value;
        } else {
          imageHolderHeight.value = minHeight.value;
        }
      }
      function startDrag(event2) {
        if (props.shouldDragImage) {
          window.addEventListener("mousemove", doDrag);
          window.addEventListener("mouseup", stopDrag);
          isDragging.value = true;
          const { height, width, left: left2, top: top2 } = imageHolder.value.getBoundingClientRect();
          imageHolderWidth.value = width;
          imageHolderHeight.value = height;
          imageContainerPosition.value.left = left2;
          imageContainerPosition.value.top = top2;
          initialX.value = event2.pageX;
          initialY.value = event2.pageY;
        }
      }
      function doDrag(event2) {
        window.document.body.style.userSelect = "none";
        const movedX = event2.clientX - imageContainerPosition.value.left;
        const movedY = event2.clientY - imageContainerPosition.value.top;
        let xToSend = clamp(Math.round(movedX / imageHolderWidth.value * 100), 0, 100);
        let yToSend = clamp(Math.round(movedY / imageHolderHeight.value * 100), 0, 100);
        if (event2.shiftKey) {
          xToSend = Math.round(xToSend / 5) * 5;
          yToSend = Math.round(yToSend / 5) * 5;
        }
        emit("background-position-change", { x: xToSend, y: yToSend });
      }
      function stopDrag(event2) {
        initialX.value = event2.pageX;
        initialY.value = event2.pageY;
        window.removeEventListener("mousemove", doDrag);
        window.removeEventListener("mouseup", stopDrag);
        window.document.body.style.userSelect = "";
        setTimeout(() => {
          isDragging.value = false;
        }, 100);
      }
      function openMediaModal() {
        if (isDragging.value) {
          return;
        }
        if (!mediaModal) {
          const args = {
            frame: "select",
            state: "zion-media",
            library: {
              type: "image"
            },
            button: {
              text: "Add Image"
            }
          };
          mediaModal = new window.wp.media.view.MediaFrame.ZionBuilderFrame(args);
          mediaModal.on("select update insert", selectMedia);
          mediaModal.on("open", setMediaModalSelection);
        }
        mediaModal.open();
      }
      function selectMedia() {
        const selection = mediaModal.state().get("selection").first();
        if (props.show_size) {
          emit("update:modelValue", {
            image: selection.get("url")
          });
        } else {
          imageValue.value = selection.get("url");
        }
        attachmentId.value = selection.get("id");
        attachmentModel.value = selection;
        loading.value = false;
      }
      function setMediaModalSelection() {
        const selection = mediaModal.state().get("selection");
        if (imageSrc.value && !attachmentId.value) {
          const attachment = wp2.media.model.Attachment.get(imageSrc.value);
          attachment.fetch({
            data: {
              is_media_image: true,
              image_url: imageSrc.value
            }
          }).done((event2) => {
            if (event2 && event2.id) {
              attachmentId.value = event2.id;
              const attachment2 = wp2.media.model.Attachment.get(attachmentId.value);
              selection.reset(attachment2 ? [attachment2] : []);
            }
          });
        } else if (imageSrc.value && attachmentId.value) {
          const attachment = wp2.media.model.Attachment.get(attachmentId.value);
          selection.reset(attachment ? [attachment] : []);
        }
      }
      function deleteImage() {
        emit("update:modelValue", null);
        attachmentId.value = null;
        if (mediaModal) {
          const selection = mediaModal.state().get("selection");
          selection.reset([]);
        }
      }
      function getAttachmentModel() {
        if (imageSrc.value && !attachmentModel.value) {
          const attachment = wp2.media.model.Attachment.get(imageSrc.value);
          attachment.fetch({
            data: {
              is_media_image: true,
              image_url: imageSrc.value
            }
          }).done((event2) => {
            if (event2 == null ? void 0 : event2.id) {
              attachmentId.value = event2.id;
              attachmentModel.value = wp2.media.model.Attachment.get(attachmentId.value);
            }
            loading.value = false;
          });
        }
      }
      vue.onMounted(() => {
        if (props.show_size) {
          getAttachmentModel();
        } else {
          loading.value = false;
        }
        getImageHeight();
      });
      vue.watch(dynamicImageSrc, () => {
        getAttachmentModel();
      });
      vue.onBeforeUnmount(() => {
        window.removeEventListener("mousemove", doDrag);
        window.removeEventListener("mouseup", stopDrag);
        window.document.body.style.userSelect = "";
        if (mediaModal) {
          mediaModal.detach();
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$D, [
          customComponent.value ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(customComponent.value), { key: 0 })) : (vue.openBlock(), vue.createElementBlock("div", {
            key: 1,
            ref_key: "imageHolder",
            ref: imageHolder,
            class: "znpb-input-image-holder",
            style: vue.normalizeStyle(wrapperStyles.value),
            onClick: openMediaModal
          }, [
            vue.createVNode(vue.unref(_sfc_main$1x), {
              "show-overlay": !isDragging.value
            }, {
              actions: vue.withCtx(() => [
                vue.createElementVNode("div", _hoisted_2$s, [
                  vue.createVNode(_sfc_main$1z, {
                    rounded: true,
                    icon: "delete",
                    "bg-size": 30,
                    onClick: vue.withModifiers(deleteImage, ["stop"])
                  }, null, 8, ["onClick"]),
                  vue.createVNode(vue.unref(_sfc_main$P), { location: "options/image/actions" })
                ])
              ]),
              default: vue.withCtx(() => [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(imageComponent.value), {
                  src: imageSrc.value,
                  class: "znpb-input-image-holder__image"
                }, null, 8, ["src"]))
              ]),
              _: 1
            }, 8, ["show-overlay"]),
            imageSrc.value && _ctx.shouldDragImage && (previewExpanded.value || !shouldDisplayExpander.value) ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              ref_key: "dragButton",
              ref: dragButton,
              class: "znpb-drag-icon-wrapper",
              style: vue.normalizeStyle(positionCircleStyle.value),
              onMousedown: vue.withModifiers(startDrag, ["stop"])
            }, _hoisted_5$9, 44, _hoisted_3$j)) : vue.createCommentVNode("", true),
            !isDragging.value && _ctx.shouldDragImage && shouldDisplayExpander.value && imageSrc.value ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 1,
              class: vue.normalizeClass(["znpb-actions-overlay__expander", { "znpb-actions-overlay__expander--icon-rotated": previewExpanded.value }]),
              onClick: vue.withModifiers(toggleExpand, ["stop"])
            }, [
              vue.createElementVNode("strong", _hoisted_7$4, vue.toDisplayString(previewExpanded.value ? "CONTRACT" : "EXPAND"), 1),
              vue.createVNode(_sfc_main$1z, {
                icon: "select",
                "bg-size": 12
              })
            ], 10, _hoisted_6$6)) : vue.createCommentVNode("", true),
            !imageSrc.value && !customComponent.value ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1h), {
              key: 2,
              class: "znpb-input-image-holder__empty",
              "no-margin": true
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(_ctx.emptyText) + " ", 1),
                vue.createVNode(vue.unref(_sfc_main$P), { location: "options/image/actions" })
              ]),
              _: 1
            })) : vue.createCommentVNode("", true)
          ], 4)),
          _ctx.show_size && imageSrc.value && !isSVG.value && !loading.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8$4, [
            vue.createVNode(vue.unref(_sfc_main$19), { title: "Image size" }, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.unref(_sfc_main$11), {
                  modelValue: sizeValue.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sizeValue.value = $event),
                  options: imageSizes.value
                }, null, 8, ["modelValue", "options"])
              ]),
              _: 1
            }),
            sizeValue.value === "custom" ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$19), { key: 0 }, {
              default: vue.withCtx(() => [
                vue.createVNode(_sfc_main$Q, {
                  modelValue: customSizeValue.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => customSizeValue.value = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true)
        ]);
      };
    }
  }));
  const InputImage_vue_vue_type_style_index_0_lang = "";
  const schemas = vue.ref({
    element_advanced: window.ZBCommonData.schemas.element_advanced,
    element_styles: window.ZBCommonData.schemas.styles,
    typography: window.ZBCommonData.schemas.typography,
    videoOptionSchema: window.ZBCommonData.schemas.video,
    backgroundImageSchema: window.ZBCommonData.schemas.background_image,
    shadowSchema: window.ZBCommonData.schemas.shadow,
    styles: window.ZBCommonData.schemas.styles
  });
  const useOptionsSchemas = () => {
    const getSchema = (schemaId) => {
      return cloneDeep(schemas.value[schemaId]) || {};
    };
    const registerSchema = (schemaId, schema) => {
      schemas.value[schemaId] = schema;
    };
    return {
      schemas,
      getSchema,
      registerSchema
    };
  };
  const _hoisted_1$C = { class: "znpb-input-background-image" };
  const __default__$x = {
    name: "InputBackgroundImage"
  };
  const _sfc_main$N = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$x), {
    props: {
      modelValue: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const { getSchema } = useOptionsSchemas();
      const backgroundImageSchema = getSchema("backgroundImageSchema");
      const computedValue = vue.computed({
        get() {
          return props.modelValue || {};
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      const backgroundPositionXModel = vue.computed(() => computedValue.value["background-position-x"]);
      const backgroundPositionYModel = vue.computed(() => computedValue.value["background-position-y"]);
      function changeBackgroundPosition(position) {
        emit("update:modelValue", __spreadProps(__spreadValues({}, computedValue.value), {
          "background-position-x": `${position.x}%`,
          "background-position-y": `${position.y}%`
        }));
      }
      function onOptionUpdated(optionId, newValue) {
        const newValues = __spreadValues({}, props.modelValue);
        newValues[optionId] = newValue;
        computedValue.value = newValues;
      }
      return (_ctx, _cache) => {
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$C, [
          vue.createVNode(_sfc_main$O, {
            modelValue: computedValue.value["background-image"],
            "should-drag-image": true,
            "position-top": backgroundPositionYModel.value,
            "position-left": backgroundPositionXModel.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => onOptionUpdated("background-image", $event)),
            onBackgroundPositionChange: changeBackgroundPosition
          }, null, 8, ["modelValue", "position-top", "position-left"]),
          vue.createVNode(_component_OptionsForm, {
            modelValue: computedValue.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => computedValue.value = $event),
            schema: vue.unref(backgroundImageSchema)
          }, null, 8, ["modelValue", "schema"])
        ]);
      };
    }
  }));
  const BackgroundImage_vue_vue_type_style_index_0_lang = "";
  class Video {
    constructor(domNode, options2 = {}) {
      __publicField(this, "options");
      __publicField(this, "domNode");
      __publicField(this, "youtubePlayer");
      __publicField(this, "vimeoPlayer");
      __publicField(this, "html5Player");
      __publicField(this, "isInit", false);
      __publicField(this, "videoElement");
      __publicField(this, "muted", false);
      __publicField(this, "playing", false);
      var _a2, _b, _c, _d, _e;
      this.domNode = domNode;
      this.options = __spreadValues({
        autoplay: true,
        muted: true,
        loop: true,
        controls: true,
        videoSource: "local",
        isBackgroundVideo: false,
        controlsPosition: "bottom-left",
        playsInline: true
      }, options2);
      if (this.options.isBackgroundVideo) {
        (_a2 = this.domNode) == null ? void 0 : _a2.appendChild(this.getControlsHTML());
        (_b = this.domNode) == null ? void 0 : _b.classList.add("hg-video-bg__wrapper");
        this.options.controls = false;
      }
      this.muted = this.options.muted;
      this.playing = this.options.autoplay;
      if (this.options.isBackgroundVideo) {
        if (this.options.muted) {
          (_c = this.domNode) == null ? void 0 : _c.classList.add("hg-video-bg--muted");
        }
        if (this.options.autoplay) {
          (_d = this.domNode) == null ? void 0 : _d.classList.add("hg-video-bg--playing");
        }
      }
      const lazyLoadEnabled = ((_e = window.ZionBuilderVideo) == null ? void 0 : _e.lazy_load) || false;
      if (lazyLoadEnabled) {
        this.intersectionObserer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.enableVideo();
            }
          });
        });
        this.intersectionObserer.observe(this.domNode);
      } else {
        this.enableVideo();
      }
    }
    enableVideo() {
      const modalParent = this.domNode.closest(".zb-modal");
      if (modalParent) {
        modalParent.addEventListener("openModal", () => {
          if (this.isInit) {
            this.play();
          } else {
            this.init();
          }
        });
        modalParent.addEventListener("closeModal", () => {
          this.pause();
        });
      } else {
        this.init();
      }
    }
    initResponsive(iframe) {
      if (!this.options.isBackgroundVideo || !this.domNode || !iframe) {
        return;
      }
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          let width = 0;
          if (entry.contentBoxSize) {
            width = entry.contentBoxSize[0].inlineSize;
          } else {
            width = entry.contentRect.width;
          }
          const elementHeight = this.domNode.clientHeight;
          let height = width * 9 / 16;
          if (height < elementHeight) {
            width = elementHeight * 16 / 9;
            height = elementHeight;
          }
          iframe.style.width = `${width}px`;
          iframe.style.height = `${height}px`;
        }
      });
      resizeObserver.observe(this.domNode);
    }
    destroy() {
      var _a2;
      const element = (_a2 = this.domNode) == null ? void 0 : _a2.querySelector(".zb-el-video-element");
      if (element && element.parentElement) {
        element.parentElement.removeChild(element);
      }
    }
    // Plays the video
    play() {
      var _a2;
      if (this.youtubePlayer) {
        this.youtubePlayer.playVideo();
      } else if (this.html5Player) {
        this.html5Player.play();
      } else if (this.vimeoPlayer) {
        this.vimeoPlayer.play();
      }
      this.playing = true;
      if (this.options.isBackgroundVideo) {
        (_a2 = this.domNode) == null ? void 0 : _a2.classList.add("hg-video-bg--playing");
      }
    }
    // Pause the video
    pause() {
      var _a2;
      if (this.youtubePlayer) {
        this.youtubePlayer.pauseVideo();
      } else if (this.html5Player) {
        this.html5Player.pause();
      } else if (this.vimeoPlayer) {
        this.vimeoPlayer.pause();
      }
      this.playing = false;
      if (this.options.isBackgroundVideo) {
        (_a2 = this.domNode) == null ? void 0 : _a2.classList.remove("hg-video-bg--playing");
      }
    }
    togglePlay() {
      if (this.playing) {
        this.pause();
      } else {
        this.play();
      }
    }
    mute() {
      var _a2;
      if (this.youtubePlayer) {
        this.youtubePlayer.mute();
      } else if (this.html5Player) {
        this.html5Player.muted = true;
      } else if (this.vimeoPlayer) {
        this.vimeoPlayer.getVolume().then((volume) => {
          vimeoVolume = volume;
        });
        this.vimeoPlayer.setVolume(0);
      }
      this.muted = true;
      if (this.options.isBackgroundVideo) {
        (_a2 = this.domNode) == null ? void 0 : _a2.classList.add("hg-video-bg--muted");
      }
    }
    unMute() {
      var _a2;
      if (this.youtubePlayer) {
        this.youtubePlayer.unMute();
      } else if (this.html5Player) {
        this.html5Player.muted = false;
      } else if (this.vimeoPlayer) {
        this.vimeoPlayer.setVolume(vimeoVolume);
      }
      this.muted = false;
      if (this.options.isBackgroundVideo) {
        (_a2 = this.domNode) == null ? void 0 : _a2.classList.remove("hg-video-bg--muted");
      }
    }
    toggleMute() {
      if (this.muted) {
        this.unMute();
      } else {
        this.mute();
      }
    }
    init() {
      if (this.options.use_image_overlay) {
        this.initBackdrop();
      } else {
        this.initVideo();
      }
    }
    initBackdrop() {
      var _a2;
      const backdrop = (_a2 = this.domNode) == null ? void 0 : _a2.querySelector(".zb-el-zionVideo-overlay");
      backdrop == null ? void 0 : backdrop.addEventListener("click", () => {
        var _a3;
        this.initVideo();
        (_a3 = backdrop.parentElement) == null ? void 0 : _a3.removeChild(backdrop);
      });
    }
    // Initialize the video
    initVideo() {
      var _a2, _b, _c;
      if (this.isInit) {
        return;
      }
      if (((_a2 = this.options) == null ? void 0 : _a2.videoSource) === "youtube") {
        this.initYoutube();
      } else if (((_b = this.options) == null ? void 0 : _b.videoSource) === "local") {
        this.initHTML5();
      } else if (((_c = this.options) == null ? void 0 : _c.videoSource) === "vimeo") {
        this.initVimeo();
      }
      this.isInit = true;
    }
    getYoutubeVideoID(url) {
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[7].length === 11 ? match[7] : void 0;
    }
    onYoutubeAPIReady(callback) {
      if (window.YT && window.YT.Player) {
        callback();
        return;
      } else if (!window.ZbAttachedYoutubeScript) {
        this.attachYoutubeScript();
      }
      setTimeout(() => {
        this.onYoutubeAPIReady(callback);
      }, 200);
    }
    attachYoutubeScript() {
      var _a2;
      if (window.ZbAttachedYoutubeScript) {
        return;
      }
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      (_a2 = firstScriptTag == null ? void 0 : firstScriptTag.parentNode) == null ? void 0 : _a2.insertBefore(tag, firstScriptTag);
      window.ZbAttachedYoutubeScript = true;
    }
    initYoutube() {
      var _a2;
      if (!this.options.youtubeURL) {
        return;
      }
      const videoID = this.getYoutubeVideoID(this.options.youtubeURL);
      const videoElement = document.createElement("div");
      videoElement.classList.add("zb-el-video-element");
      (_a2 = this.domNode) == null ? void 0 : _a2.appendChild(videoElement);
      const paramsString = this.options.youtubeURL.split("?")[1];
      const playerParams = new URLSearchParams(paramsString);
      const playerVarsFromURL = {};
      for (const entry of playerParams.entries()) {
        playerVarsFromURL[entry[0]] = entry[1];
      }
      if (playerVarsFromURL.v) {
        delete playerVarsFromURL.v;
      }
      if (!videoID) {
        return;
      }
      const playerVars = __spreadProps(__spreadValues({}, playerVarsFromURL), {
        autoplay: this.options.autoplay ? 1 : 0,
        controls: this.options.controls ? 1 : 0,
        mute: this.options.muted ? 1 : 0,
        playsinline: 1,
        modestbranding: 1,
        origin: window.location.host,
        loop: this.options.loop ? 1 : 0
      });
      if (this.options.loop) {
        playerVars.playlist = videoID;
      }
      this.onYoutubeAPIReady(() => {
        this.youtubePlayer = new window.YT.Player(videoElement, {
          videoId: videoID,
          playerVars,
          host: "https://www.youtube-nocookie.com"
        });
        this.initResponsive(this.youtubePlayer.h);
      });
    }
    onVimeoApiReady(callback) {
      if (window.Vimeo && window.Vimeo.Player) {
        callback();
        return;
      } else if (!window.ZbAttachedVimeoScript) {
        this.attachVimeoScript();
      }
      setTimeout(() => {
        this.onVimeoApiReady(callback);
      }, 200);
    }
    attachVimeoScript() {
      var _a2;
      if (window.ZbAttachedVimeoScript) {
        return;
      }
      const tag = document.createElement("script");
      tag.src = "https://player.vimeo.com/api/player.js";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      (_a2 = firstScriptTag == null ? void 0 : firstScriptTag.parentNode) == null ? void 0 : _a2.insertBefore(tag, firstScriptTag);
      window.ZbAttachedVimeoScript = true;
    }
    initVimeo() {
      var _a2, _b;
      if (!this.options.vimeoURL) {
        return;
      }
      const videoElement = document.createElement("div");
      videoElement.classList.add("zb-el-video-element");
      (_a2 = this.domNode) == null ? void 0 : _a2.appendChild(videoElement);
      const playerVars = {
        id: (_b = this.options) == null ? void 0 : _b.vimeoURL,
        background: false,
        muted: this.options.muted,
        transparent: true,
        autoplay: this.options.autoplay,
        controls: this.options.controls
      };
      if (this.options.loop) {
        playerVars.loop = 1;
      }
      this.onVimeoApiReady(() => {
        this.vimeoPlayer = new window.Vimeo.Player(videoElement, playerVars);
        this.vimeoPlayer.on("loaded", () => {
          this.initResponsive(this.vimeoPlayer.element);
        });
      });
    }
    // Init HTML5 Video
    initHTML5() {
      var _a2;
      const videoElement = document.createElement("video");
      if (!this.options.mp4) {
        return;
      }
      if (this.options.autoplay) {
        videoElement.setAttribute("autoplay", "");
      }
      videoElement.muted = this.options.muted;
      if (this.options.muted) {
        videoElement.setAttribute("muted", "");
      }
      if (this.options.loop) {
        videoElement.setAttribute("loop", "");
      }
      if (this.options.controls) {
        videoElement.controls = true;
      }
      if (this.options.playsInline) {
        videoElement.playsInline = true;
      }
      videoElement.src = this.options.mp4;
      videoElement.classList.add("zb-el-video-element");
      (_a2 = this.domNode) == null ? void 0 : _a2.appendChild(videoElement);
      this.html5Player = videoElement;
    }
    getControlsHTML() {
      const videoControlsWrapper = document.createElement("div");
      videoControlsWrapper.className = "hg-video-bg__controls";
      videoControlsWrapper.dataset.position = this.options.controlsPosition;
      const playButton = document.createElement("span");
      playButton.className = "hg-video-bg__controls-button hg-video-bg__controls-button--play";
      playButton.innerHTML = `
			<svg class="zb-icon hg-video-bg__controls-button--svg-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M15.1 16.3 42.5 32 15.1 47.7V16.3M8.7 5.1v53.8L55.3 32 8.7 5.1z"/></svg>
			<svg class="zb-icon hg-video-bg__controls-button--svg-pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M11.5 10.9h10.2v42.2H11.5V10.9zm30.7 0h10.2v42.2H42.2V10.9z"/></svg>
		`;
      const muteButton = document.createElement("span");
      muteButton.className = "hg-video-bg__controls-button hg-video-bg__controls-button--mute";
      muteButton.innerHTML = `
			<svg class="zb-icon hg-video-bg__controls-button--svg-mute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M24.7 16.3v31.6l-10.1-5.8-1.5-.9H6.4V22.9h6.7l1.5-.9 10.1-5.7m6.4-11.2L11.4 16.5H0v31h11.4l19.7 11.4V5.1zM64 23.8l-4.5-4.5-8.2 8.2-8.2-8.2-4.5 4.5 8.1 8.2-8.1 8.2 4.5 4.5 8.2-8.2 8.2 8.2 4.5-4.5-8.2-8.2 8.2-8.2z"/></svg>
			<svg class="zb-icon hg-video-bg__controls-button--svg-unmute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M24.7 16.3v31.6l-10.1-5.8-1.6-.9H6.4V22.9H13l1.5-.9 10.2-5.7m6.4-11.2L11.4 16.5H0v31h11.4l19.7 11.4V5.1zM53 58.6l-4.5-4.5c12.2-12.2 12.2-32 0-44.1L53 5.5c14.7 14.6 14.7 38.4 0 53.1zm-10.5-8.7L38 45.4c7.4-7.4 7.4-19.3 0-26.7l4.5-4.5c9.8 9.7 9.8 25.9 0 35.7z"/></svg>
		`;
      videoControlsWrapper.appendChild(playButton);
      videoControlsWrapper.appendChild(muteButton);
      muteButton.addEventListener("click", this.toggleMute.bind(this));
      playButton.addEventListener("click", this.togglePlay.bind(this));
      return videoControlsWrapper;
    }
  }
  window.zbVideo = Video;
  document.querySelectorAll(".zb-el-zionVideo, .zbjs_video_background").forEach(
    (domNode) => {
      const configAttr = domNode.dataset.zionVideo;
      const options2 = configAttr ? JSON.parse(configAttr) : {};
      new Video(domNode, options2);
    }
  );
  window.zbScripts = window.zbScripts || {};
  window.zbScripts.video = Video;
  const _hoisted_1$B = { class: "znpb-input-background-video" };
  const _hoisted_2$r = { class: "znpb-input-background-video__holder" };
  const __default__$w = {
    name: "InputBackgroundVideo"
  };
  const _sfc_main$M = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$w), {
    props: {
      modelValue: {},
      options: {},
      exclude_options: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const videoInstance = vue.ref(null);
      let mediaModal = null;
      const videoPreview = vue.ref(null);
      const { getSchema } = useOptionsSchemas();
      const schema = vue.computed(() => {
        const schema2 = __spreadValues({}, getSchema("videoOptionSchema"));
        if (props.exclude_options) {
          props.exclude_options.forEach((optionToRemove) => {
            if (schema2[optionToRemove]) {
              delete schema2[optionToRemove];
            }
          });
        }
        return schema2;
      });
      const computedValue = vue.computed({
        get() {
          return props.modelValue || {};
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      const hasVideo = vue.computed(() => {
        if (videoSourceModel.value === "local" && computedValue.value.mp4) {
          return true;
        }
        if (videoSourceModel.value === "youtube" && computedValue.value.youtubeURL) {
          return true;
        }
        if (videoSourceModel.value === "vimeo" && computedValue.value.vimeoURL) {
          return true;
        }
        return false;
      });
      const videoSourceModel = vue.computed({
        get() {
          return computedValue.value["videoSource"] || "local";
        },
        set(newValue) {
          emit("update:modelValue", __spreadProps(__spreadValues({}, props.modelValue), {
            videoSource: newValue
          }));
        }
      });
      vue.watch(computedValue, () => {
        if (videoInstance.value) {
          videoInstance.value.destroy();
        }
        if (hasVideo.value) {
          initVideo();
        }
      });
      function initVideo() {
        vue.nextTick(() => {
          videoInstance.value = new Video(videoPreview.value, computedValue.value);
        });
      }
      function openMediaModal() {
        if (mediaModal === null) {
          const args = {
            frame: "select",
            state: "library",
            library: { type: "video" },
            button: { text: "Add video" },
            selection: computedValue.value
          };
          mediaModal = window.wp.media(args);
          mediaModal.on("select update insert", selectMedia);
        }
        mediaModal.open();
      }
      function selectMedia() {
        const selection = mediaModal.state().get("selection").toJSON();
        emit("update:modelValue", __spreadProps(__spreadValues({}, computedValue.value), {
          mp4: selection[0].url
        }));
      }
      function deleteVideo() {
        const _a2 = computedValue.value, { mp4 } = _a2, rest = __objRest(_a2, ["mp4"]);
        emit("update:modelValue", __spreadValues({}, rest));
      }
      vue.onMounted(() => {
        if (hasVideo.value) {
          initVideo();
        }
      });
      return (_ctx, _cache) => {
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$B, [
          vue.createElementVNode("div", _hoisted_2$r, [
            hasVideo.value ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              ref_key: "videoPreview",
              ref: videoPreview,
              class: "znpb-input-background-video__source"
            }, null, 512)) : (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1h), {
              key: 1,
              class: "znpb-input-background-video__empty znpb-input-background-video__source",
              "no-margin": true,
              onClick: openMediaModal
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(i18n__namespace.__("No video Selected", "zionbuilder")), 1)
              ]),
              _: 1
            })),
            videoSourceModel.value == "local" && hasVideo.value ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
              key: 2,
              class: "znpb-input-background-video__delete",
              icon: "delete",
              "bg-size": 30,
              "bg-color": "#fff",
              onClick: vue.withModifiers(deleteVideo, ["stop"])
            }, null, 8, ["onClick"])) : vue.createCommentVNode("", true)
          ]),
          vue.createVNode(_component_OptionsForm, {
            modelValue: computedValue.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedValue.value = $event),
            schema: schema.value,
            class: "znpb-input-background-video__holder"
          }, null, 8, ["modelValue", "schema"])
        ]);
      };
    }
  }));
  const InputBackgroundVideo_vue_vue_type_style_index_0_lang = "";
  const __default__$v = {
    name: "InputBorderControl"
  };
  const _sfc_main$L = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$v), {
    props: {
      modelValue: {},
      title: {},
      placeholder: { default: () => {
        return {};
      } }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const schema = vue.computed(() => {
        return {
          color: {
            id: "color",
            type: "colorpicker",
            css_class: "znpb-border-control-group-item",
            title: "Color",
            width: 100,
            placeholder: props.placeholder ? props.placeholder["color"] : null
          },
          width: {
            id: "width",
            type: "number_unit",
            title: "Width",
            min: 0,
            max: 999,
            step: 1,
            css_class: "znpb-border-control-group-item",
            width: 50,
            placeholder: props.placeholder ? props.placeholder["width"] : null
          },
          style: {
            id: "style",
            type: "select",
            title: "Style",
            options: ["solid", "dashed", "dotted", "double", "groove", "ridge", "inset", "outset"].map((style) => {
              return { name: style, id: style };
            }),
            css_class: "znpb-border-control-group-item",
            width: 50,
            placeholder: props.placeholder ? props.placeholder["style"] : "solid"
          }
        };
      });
      const computedValue = vue.computed({
        get() {
          return props.modelValue || {};
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      return (_ctx, _cache) => {
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        return vue.openBlock(), vue.createBlock(_component_OptionsForm, {
          modelValue: computedValue.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedValue.value = $event),
          schema: schema.value,
          class: "znpb-border-control-group"
        }, null, 8, ["modelValue", "schema"]);
      };
    }
  }));
  const InputBorderControl_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$A = { class: "znpb-input-border-tabs-wrapper" };
  const __default__$u = {
    name: "InputBorderTabs"
  };
  const _sfc_main$K = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$u), {
    props: {
      modelValue: {},
      placeholder: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const positions = [
        {
          name: "all",
          icon: "all-sides",
          id: "all"
        },
        {
          name: "Top",
          icon: "border-top",
          id: "top"
        },
        {
          name: "right",
          icon: "border-right",
          id: "right"
        },
        {
          name: "bottom",
          icon: "border-bottom",
          id: "bottom"
        },
        {
          name: "left",
          icon: "border-left",
          id: "left"
        }
      ];
      const computedValue = vue.computed(() => props.modelValue || {});
      function onValueUpdated(position, newValue) {
        const clonedValue = cloneDeep(props.modelValue || {});
        if (newValue === null) {
          unset(clonedValue, position);
        } else {
          set(clonedValue, position, newValue);
        }
        if (Object.keys(clonedValue).length > 0) {
          emit("update:modelValue", clonedValue);
        } else {
          emit("update:modelValue", null);
        }
      }
      return (_ctx, _cache) => {
        const _component_Tab = vue.resolveComponent("Tab");
        const _component_Tabs = vue.resolveComponent("Tabs");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$A, [
          vue.createVNode(_component_Tabs, {
            "tab-style": "group",
            class: "znpb-input-border-tabs"
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(positions, (tab) => {
                return vue.createVNode(_component_Tab, {
                  key: tab.id,
                  name: tab.name,
                  class: "znpb-input-border-tabs__tab"
                }, {
                  title: vue.withCtx(() => [
                    vue.createElementVNode("div", null, [
                      vue.createVNode(vue.unref(_sfc_main$1z), {
                        icon: tab.icon
                      }, null, 8, ["icon"])
                    ])
                  ]),
                  default: vue.withCtx(() => [
                    vue.createVNode(_sfc_main$L, {
                      modelValue: computedValue.value[tab.id] || {},
                      placeholder: _ctx.placeholder ? _ctx.placeholder[tab.id] : null,
                      "onUpdate:modelValue": ($event) => onValueUpdated(tab.id, $event)
                    }, null, 8, ["modelValue", "placeholder", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["name"]);
              }), 64))
            ]),
            _: 1
          })
        ]);
      };
    }
  }));
  const InputBorderTabs_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$z = { class: "znpb-input-border-radius-wrapper" };
  const __default__$t = {
    name: "InputBorderRadius"
  };
  const _sfc_main$J = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$t), {
    props: {
      modelValue: { default: "" },
      title: { default: "" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const computedValue = vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      return (_ctx, _cache) => {
        const _component_InputLabel = vue.resolveComponent("InputLabel");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$z, [
          _ctx.title.length ? (vue.openBlock(), vue.createBlock(_component_InputLabel, {
            key: 0,
            label: _ctx.title,
            class: "znpb-typography-group-item znpb-typography-group-item-font-weight"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(_sfc_main$1p), {
                modelValue: computedValue.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedValue.value = $event),
                min: 0,
                max: 999,
                step: 1,
                "default-unit": "px"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["label"])) : vue.createCommentVNode("", true)
        ]);
      };
    }
  }));
  const InputBorderRadius_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$y = { class: "znpb-input-border-radius-tabs-wrapper" };
  const _hoisted_2$q = /* @__PURE__ */ vue.createElementVNode("div", null, null, -1);
  const _sfc_main$I = /* @__PURE__ */ vue.defineComponent({
    __name: "InputBorderRadiusTabs",
    props: {
      modelValue: { default: () => ({}) }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const borderRadiusTabs = {
        all: {
          name: "all borders",
          icon: "all-corners",
          id: "all-borders-radius",
          description: "All borders"
        },
        topLeft: {
          name: "top left",
          icon: "t-l-corner",
          id: "border-top-left-radius",
          description: "Top Left Border"
        },
        topRight: {
          name: "top right",
          icon: "t-r-corner",
          id: "border-top-right-radius",
          description: "Top Right Border"
        },
        bottomRight: {
          name: "bottom right",
          icon: "b-r-corner",
          id: "border-bottom-right-radius",
          description: "Bottom Right Border"
        },
        bottomLeft: {
          name: "bottom left",
          icon: "t-l-corner",
          id: "border-bottom-left-radius",
          description: "Bottom Left Border"
        }
      };
      const computedValue = vue.computed(() => props.modelValue || {});
      function onValueUpdated(position, newValue) {
        emit("update:modelValue", __spreadProps(__spreadValues({}, props.modelValue), {
          [position]: newValue
        }));
      }
      return (_ctx, _cache) => {
        const _component_Tab = vue.resolveComponent("Tab");
        const _component_Tabs = vue.resolveComponent("Tabs");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$y, [
          vue.createVNode(_component_Tabs, {
            "tab-style": "group",
            class: "znpb-input-border-radius-tabs"
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(borderRadiusTabs, (tab, index2) => {
                return vue.createVNode(_component_Tab, {
                  key: index2,
                  name: tab.name
                }, {
                  title: vue.withCtx(() => [
                    _hoisted_2$q
                  ]),
                  default: vue.withCtx(() => [
                    vue.createVNode(_sfc_main$J, {
                      title: tab.name,
                      modelValue: computedValue.value[tab.id] || null,
                      "onUpdate:modelValue": ($event) => onValueUpdated(tab.id, $event)
                    }, null, 8, ["title", "modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["name"]);
              }), 64))
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  const InputBorderRadiusTabs_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$x = { class: "znpb-optSpacingInputWrapper" };
  const _hoisted_2$p = { class: "znpb-optSpacingInput" };
  const _hoisted_3$i = { class: "znpb-optSpacingInputWrapper znpb-optSpacingInputWrapper--middle" };
  const _hoisted_4$b = { class: "znpb-optSpacingInput" };
  const _hoisted_5$8 = { class: "znpb-optSpacingInput" };
  const _hoisted_6$5 = { class: "znpb-optSpacingInputWrapper" };
  const _hoisted_7$3 = { class: "znpb-optSpacingInput" };
  const _hoisted_8$3 = /* @__PURE__ */ vue.createElementVNode("span", { class: "znpb-optSpacing-label" }, "Link values", -1);
  const _sfc_main$H = /* @__PURE__ */ vue.defineComponent({
    __name: "InputBoxModel",
    props: {
      modelValue: { default: () => {
        return {};
      } },
      placeholder: { default: () => {
        return {};
      } },
      positionType: {},
      positionTitle: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const positionValues = [
        `${props.positionType}-top`,
        `${props.positionType}-right`,
        `${props.positionType}-bottom`,
        `${props.positionType}-left`
      ];
      const oppositeChange = vue.ref(false);
      vue.ref(null);
      const lastChanged = vue.ref(null);
      const computedValues = vue.computed({
        get() {
          return props.modelValue || {};
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      function checkLinkedValues() {
        return positionValues.every((position) => {
          return computedValues.value[position] && computedValues.value[position] === computedValues.value[`${props.positionType}-top`];
        });
      }
      function onDiscardChanges(position) {
        const clonedModelValue = __spreadValues({}, props.modelValue);
        delete clonedModelValue[position];
        emit("update:modelValue", clonedModelValue);
      }
      function onValueUpdated(sizePosition, newValue) {
        lastChanged.value = sizePosition;
        if (valuesAreLinked.value) {
          const updatedValues = {};
          positionValues.forEach((position) => updatedValues[position] = newValue);
          computedValues.value = __spreadValues(__spreadValues({}, props.modelValue), updatedValues);
        } else {
          const oppositePosition = getReversedPosition(sizePosition);
          const newValues = __spreadProps(__spreadValues({}, props.modelValue), {
            [sizePosition]: newValue
          });
          if (oppositeChange.value) {
            newValues[oppositePosition] = newValue;
          }
          computedValues.value = newValues;
        }
      }
      function getReversedPosition(position) {
        const typeAndPosition = position.split(/-/);
        const positionLocation = typeAndPosition[1];
        let reversePositionLocation;
        switch (positionLocation) {
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
        return `${typeAndPosition[0]}-${reversePositionLocation}`;
      }
      const valuesAreLinked = vue.ref(checkLinkedValues());
      function linkValues() {
        valuesAreLinked.value = !valuesAreLinked.value;
        if (valuesAreLinked.value) {
          if (lastChanged.value) {
            onValueUpdated(lastChanged.value, computedValues.value[lastChanged.value]);
          } else {
            const savedValueConfig = positionValues.find((position) => computedValues.value[position] !== "undefined");
            if (savedValueConfig) {
              onValueUpdated(savedValueConfig, computedValues.value[savedValueConfig]);
            }
          }
        }
      }
      function checkForOppositeChange(e) {
        const controlKey = window.navigator.userAgent.indexOf("Macintosh") >= 0 ? "metaKey" : "ctrlKey";
        if (e[controlKey]) {
          oppositeChange.value = true;
        }
      }
      return (_ctx, _cache) => {
        const _component_ChangesBullet = vue.resolveComponent("ChangesBullet");
        const _component_Icon = vue.resolveComponent("Icon");
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "znpb-optSpacingContainer",
          onKeydown: checkForOppositeChange,
          onKeyup: _cache[8] || (_cache[8] = ($event) => oppositeChange.value = false)
        }, [
          vue.createElementVNode("div", null, [
            vue.createElementVNode("div", _hoisted_1$x, [
              vue.createElementVNode("div", _hoisted_2$p, [
                vue.withDirectives(vue.createVNode(vue.unref(_sfc_main$1p), {
                  class: "znpb-optSpacingInputField",
                  "model-value": computedValues.value[`${_ctx.positionType}-top`],
                  units: ["px", "rem", "pt", "vh", "%"],
                  step: 1,
                  placeholder: _ctx.placeholder && typeof _ctx.placeholder[`${_ctx.positionType}-top`] !== "undefined" ? _ctx.placeholder[`${_ctx.positionType}-top`] : "-",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => onValueUpdated(`${_ctx.positionType}-top`, $event))
                }, null, 8, ["model-value", "placeholder"]), [
                  [_directive_znpb_tooltip, _ctx.positionTitle + " " + i18n__namespace.__("top", "zionbuilder")]
                ]),
                computedValues.value[`${_ctx.positionType}-top`] ? (vue.openBlock(), vue.createBlock(_component_ChangesBullet, {
                  key: 0,
                  content: i18n__namespace.__("Discard changes", "zionbuilder"),
                  onRemoveStyles: _cache[1] || (_cache[1] = ($event) => onDiscardChanges(`${_ctx.positionType}-top`))
                }, null, 8, ["content"])) : vue.createCommentVNode("", true)
              ])
            ]),
            vue.createElementVNode("div", _hoisted_3$i, [
              vue.createElementVNode("div", _hoisted_4$b, [
                vue.withDirectives(vue.createVNode(vue.unref(_sfc_main$1p), {
                  class: "znpb-optSpacingInputField",
                  "model-value": computedValues.value[`${_ctx.positionType}-left`],
                  units: ["px", "rem", "pt", "vh", "%"],
                  step: 1,
                  placeholder: _ctx.placeholder && typeof _ctx.placeholder[`${_ctx.positionType}-left`] !== "undefined" ? _ctx.placeholder[`${_ctx.positionType}-left`] : "-",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => onValueUpdated(`${_ctx.positionType}-left`, $event))
                }, null, 8, ["model-value", "placeholder"]), [
                  [_directive_znpb_tooltip, _ctx.positionTitle + " " + i18n__namespace.__("left", "zionbuilder")]
                ]),
                computedValues.value[`${_ctx.positionType}-left`] ? (vue.openBlock(), vue.createBlock(_component_ChangesBullet, {
                  key: 0,
                  content: i18n__namespace.__("Discard changes", "zionbuilder"),
                  onRemoveStyles: _cache[3] || (_cache[3] = ($event) => onDiscardChanges(`${_ctx.positionType}-left`))
                }, null, 8, ["content"])) : vue.createCommentVNode("", true)
              ]),
              vue.createElementVNode("div", _hoisted_5$8, [
                vue.withDirectives(vue.createVNode(vue.unref(_sfc_main$1p), {
                  class: "znpb-optSpacingInputField",
                  "model-value": computedValues.value[`${_ctx.positionType}-right`],
                  units: ["px", "rem", "pt", "vh", "%"],
                  step: 1,
                  placeholder: _ctx.placeholder && typeof _ctx.placeholder[`${_ctx.positionType}-right`] !== "undefined" ? _ctx.placeholder[`${_ctx.positionType}-right`] : "-",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => onValueUpdated(`${_ctx.positionType}-right`, $event))
                }, null, 8, ["model-value", "placeholder"]), [
                  [_directive_znpb_tooltip, _ctx.positionTitle + " " + i18n__namespace.__("right", "zionbuilder")]
                ]),
                computedValues.value[`${_ctx.positionType}-right`] ? (vue.openBlock(), vue.createBlock(_component_ChangesBullet, {
                  key: 0,
                  content: i18n__namespace.__("Discard changes", "zionbuilder"),
                  onRemoveStyles: _cache[5] || (_cache[5] = ($event) => onDiscardChanges(`${_ctx.positionType}-right`))
                }, null, 8, ["content"])) : vue.createCommentVNode("", true)
              ])
            ]),
            vue.createElementVNode("div", _hoisted_6$5, [
              vue.createElementVNode("div", _hoisted_7$3, [
                vue.withDirectives(vue.createVNode(vue.unref(_sfc_main$1p), {
                  class: "znpb-optSpacingInputField",
                  "model-value": computedValues.value[`${_ctx.positionType}-bottom`],
                  units: ["px", "rem", "pt", "vh", "%"],
                  step: 1,
                  placeholder: _ctx.placeholder && typeof _ctx.placeholder[`${_ctx.positionType}-bottom`] !== "undefined" ? _ctx.placeholder[`${_ctx.positionType}-bottom`] : "-",
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => onValueUpdated(`${_ctx.positionType}-bottom`, $event))
                }, null, 8, ["model-value", "placeholder"]), [
                  [_directive_znpb_tooltip, _ctx.positionTitle + " " + i18n__namespace.__("bottom", "zionbuilder")]
                ]),
                computedValues.value[`${_ctx.positionType}-bottom`] ? (vue.openBlock(), vue.createBlock(_component_ChangesBullet, {
                  key: 0,
                  content: i18n__namespace.__("Discard changes", "zionbuilder"),
                  onRemoveStyles: _cache[7] || (_cache[7] = ($event) => onDiscardChanges(`${_ctx.positionType}-bottom`))
                }, null, 8, ["content"])) : vue.createCommentVNode("", true)
              ])
            ]),
            vue.createElementVNode("div", {
              class: "znpb-optSpacing-labelWrapper",
              onClick: linkValues
            }, [
              _hoisted_8$3,
              vue.createVNode(_component_Icon, {
                icon: valuesAreLinked.value ? "link" : "unlink",
                title: valuesAreLinked.value ? i18n__namespace.__("Unlink", "zionbuilder") : i18n__namespace.__("Link", "zionbuilder"),
                size: 12,
                class: vue.normalizeClass(["znpb-optSpacing-link", {
                  "znpb-optSpacing-link--linked": valuesAreLinked.value
                }])
              }, null, 8, ["icon", "title", "class"])
            ])
          ])
        ], 32);
      };
    }
  });
  const InputBoxModel_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$w = ["aria-disabled"];
  const _hoisted_2$o = ["disabled", "value"];
  const _hoisted_3$h = {
    key: 0,
    class: "znpb-checkmark-option"
  };
  const __default__$s = {
    name: "InputCheckbox"
  };
  const _sfc_main$G = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$s), {
    props: {
      label: {},
      showLabel: { type: Boolean, default: true },
      modelValue: { type: [Boolean, String, Array, Number], default: true },
      optionValue: { type: [Boolean, String, Array, Number] },
      disabled: { type: Boolean },
      checked: { type: Boolean },
      rounded: { type: Boolean },
      placeholder: { type: [Boolean, Array], default: () => {
        return [];
      } }
    },
    emits: ["update:modelValue", "change"],
    setup(__props, { emit }) {
      const props = __props;
      const isLimitExceeded = vue.ref(false);
      const slots = vue.useSlots();
      const model = vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          var _a2, _b, _c, _d, _e;
          isLimitExceeded.value = false;
          const allowUnselect = (_a2 = parentGroup.value) == null ? void 0 : _a2.allowUnselect;
          if (Array.isArray(newValue)) {
            isLimitExceeded.value = false;
            if (((_b = parentGroup.value) == null ? void 0 : _b.min) !== void 0 && newValue.length < ((_c = parentGroup.value) == null ? void 0 : _c.min)) {
              isLimitExceeded.value = true;
            }
            if (((_d = parentGroup.value) == null ? void 0 : _d.max) && newValue.length > ((_e = parentGroup.value) == null ? void 0 : _e.max)) {
              isLimitExceeded.value = true;
            }
            if (isLimitExceeded.value === false) {
              emit("update:modelValue", newValue);
            } else if (allowUnselect && isLimitExceeded.value === true) {
              const clonedValues = [...newValue];
              clonedValues.shift();
              isLimitExceeded.value = false;
              emit("update:modelValue", clonedValues);
            }
          } else {
            emit("update:modelValue", newValue);
          }
        }
      });
      const instance2 = vue.getCurrentInstance();
      const parentGroup = vue.computed(() => {
        var _a2, _b;
        const isInGroup = ((_a2 = instance2 == null ? void 0 : instance2.parent) == null ? void 0 : _a2.type.name) === "InputCheckboxGroup";
        return isInGroup ? (_b = instance2 == null ? void 0 : instance2.parent) == null ? void 0 : _b.ctx : null;
      });
      const hasSlots = vue.computed(() => {
        if (!slots.default) {
          return false;
        }
        const defaultSlot = slots.default();
        const normalNodes = [];
        if (Array.isArray(defaultSlot)) {
          defaultSlot.forEach((vNode) => {
            if (vNode.type !== vue.Comment) {
              normalNodes.push(vNode);
            }
          });
        }
        return normalNodes.length > 0;
      });
      function onChange(event2) {
        const checkbox = event2.target;
        if (isLimitExceeded.value) {
          vue.nextTick(() => {
            checkbox.checked = !checkbox.checked;
          });
          return;
        }
        emit("change", !!checkbox.checked);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("label", {
          class: "znpb-checkbox-wrapper",
          "aria-disabled": _ctx.disabled
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
            type: "checkbox",
            "aria-hidden": "true",
            disabled: _ctx.disabled,
            value: _ctx.optionValue,
            class: "znpb-form__input-checkbox",
            onChange
          }, null, 40, _hoisted_2$o), [
            [vue.vModelCheckbox, model.value]
          ]),
          vue.createElementVNode("span", {
            class: vue.normalizeClass(["znpb-checkmark", { "znpb-checkmark--rounded": _ctx.rounded }])
          }, null, 2),
          hasSlots.value || _ctx.label ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$h, [
            vue.renderSlot(_ctx.$slots, "default"),
            _ctx.showLabel && _ctx.label ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
            ], 64)) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true)
        ], 8, _hoisted_1$w);
      };
    }
  }));
  const InputCheckbox_vue_vue_type_style_index_0_lang = "";
  const __default__$r = {
    name: "InputCheckboxGroup"
  };
  const _sfc_main$F = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$r), {
    props: {
      modelValue: { default: () => {
        return [];
      } },
      min: {},
      max: {},
      allowUnselect: { type: Boolean },
      direction: { default: "vertical" },
      options: {},
      disabled: { type: Boolean },
      displayStyle: {},
      placeholder: { default: () => {
        return [];
      } }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const slots = vue.useSlots();
      const model = vue.computed({
        get() {
          return props.modelValue ? props.modelValue : [];
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      const wrapperClasses = vue.computed(() => {
        return {
          [`znpb-checkbox-list--${props.direction}`]: props.direction,
          [`znpb-checkbox-list-style--${props.displayStyle}`]: props.displayStyle
        };
      });
      const hasSlots = vue.computed(() => {
        if (!slots.default) {
          return false;
        }
        const defaultSlot = slots.default();
        const normalNodes = [];
        if (Array.isArray(defaultSlot)) {
          defaultSlot.forEach((vNode) => {
            if (vNode.type !== vue.Comment) {
              normalNodes.push(vNode);
            }
          });
        }
        return normalNodes.length > 0;
      });
      vue.provide("checkboxGroup", {
        model,
        props
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-checkbox-list", wrapperClasses.value])
        }, [
          vue.renderSlot(_ctx.$slots, "default"),
          !hasSlots.value ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(_ctx.options, (option, i) => {
            return vue.openBlock(), vue.createBlock(_sfc_main$G, {
              key: i,
              modelValue: model.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
              "option-value": option.id,
              label: option.name,
              disabled: _ctx.disabled,
              placeholder: _ctx.placeholder,
              title: option.icon ? option.name : false,
              class: vue.normalizeClass({
                [`znpb-checkbox-list--isPlaceholder`]: model.value.length === 0 && _ctx.placeholder && _ctx.placeholder.includes(option.id)
              })
            }, {
              default: vue.withCtx(() => [
                option.icon ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
                  key: 0,
                  icon: option.icon
                }, null, 8, ["icon"])) : vue.createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["modelValue", "option-value", "label", "disabled", "placeholder", "title", "class"]);
          }), 128)) : vue.createCommentVNode("", true)
        ], 2);
      };
    }
  }));
  const InputCheckboxGroup_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$v = { class: "znpb-checkbox-switch-wrapper" };
  const _hoisted_2$n = ["content"];
  const _hoisted_3$g = ["disabled", "modelValue"];
  const _hoisted_4$a = /* @__PURE__ */ vue.createElementVNode("span", { class: "znpb-checkbox-switch-wrapper__button" }, null, -1);
  const _sfc_main$E = /* @__PURE__ */ vue.defineComponent({
    __name: "InputCheckboxSwitch",
    props: {
      label: { default: "" },
      showLabel: { type: Boolean, default: true },
      modelValue: { type: [String, Array, Boolean], default: "" },
      optionValue: { type: [String, Boolean], default: "" },
      disabled: { type: Boolean, default: false },
      checked: { type: Boolean, default: false },
      rounded: { type: Boolean, default: false }
    },
    emits: ["update:modelValue", "change"],
    setup(__props, { emit }) {
      const props = __props;
      const checkboxGroup = vue.inject("checkboxGroup", null);
      const isLimitExceeded = vue.ref(false);
      const model = vue.computed({
        get() {
          return props.modelValue !== void 0 ? props.modelValue : false;
        },
        set(newValue) {
          if (checkboxGroup) {
            isLimitExceeded.value = false;
            const allowUnselect = checkboxGroup.props.allowUnselect;
            isLimitExceeded.value = false;
            if (checkboxGroup.props.min !== void 0 && newValue.length < checkboxGroup.props.min) {
              isLimitExceeded.value = true;
            }
            if (checkboxGroup.props.max !== void 0 && newValue.length > checkboxGroup.props.max) {
              isLimitExceeded.value = true;
            }
            if (isLimitExceeded.value === false) {
              emit("update:modelValue", newValue);
            } else if (allowUnselect && isLimitExceeded.value === true) {
              const clonedValues = [...newValue];
              clonedValues.shift();
              isLimitExceeded.value = false;
              emit("update:modelValue", clonedValues);
            }
          } else {
            emit("update:modelValue", newValue);
          }
        }
      });
      if (props.checked) {
        setInitialValue();
      }
      function setInitialValue() {
        model.value = props.modelValue || true;
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$v, [
          vue.createElementVNode("label", {
            class: vue.normalizeClass(["znpb-checkbox-switch-wrapper__label", { [`znpb-checkbox-switch--${model.value ? "checked" : "unchecked"}`]: true }]),
            content: model.value ? i18n__namespace.__("yes", "zionbuilder") : i18n__namespace.__("no", "zionbuilder")
          }, [
            vue.withDirectives(vue.createElementVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
              type: "checkbox",
              disabled: _ctx.disabled,
              class: "znpb-checkbox-switch-wrapper__checkbox",
              modelValue: _ctx.optionValue
            }, null, 8, _hoisted_3$g), [
              [vue.vModelCheckbox, model.value]
            ]),
            _hoisted_4$a
          ], 10, _hoisted_2$n)
        ]);
      };
    }
  });
  const InputCheckboxSwitch_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$u = { class: "znpb-custom-code" };
  const _hoisted_2$m = ["placeholder"];
  const __default__$q = {
    name: "InputCode"
  };
  const _sfc_main$D = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$q), {
    props: {
      placeholder: {},
      mode: {},
      modelValue: { default: "" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      let editor;
      const codeMirrorTextarea = vue.ref(null);
      let ignoreChange = false;
      vue.watch(
        () => props.modelValue,
        (newValue) => {
          if (editor && (editor == null ? void 0 : editor.getValue()) !== newValue) {
            const textValue = null === newValue ? "" : newValue;
            ignoreChange = true;
            editor.setValue(textValue);
          }
        }
      );
      function onEditorChange(instance2) {
        if (!ignoreChange) {
          emit("update:modelValue", instance2.getValue());
        }
        ignoreChange = false;
      }
      [
        "text/css",
        "text/javascript",
        "application/json",
        "application/ld+json",
        "text/typescript",
        "application/typescript",
        "htmlmixed"
      ].includes(props.mode || "");
      vue.onMounted(() => {
        editor = window.wp.CodeMirror.fromTextArea(codeMirrorTextarea.value, {
          mode: props.mode,
          lineNumbers: true,
          lineWrapping: true,
          lint: false,
          autoCloseBrackets: true,
          matchBrackets: true,
          autoRefresh: true,
          autoCloseTags: true,
          continueComments: true,
          indentUnit: 2,
          indentWithTabs: true,
          styleActiveLine: true,
          tabSize: 2,
          matchTags: {
            bothTags: true
          },
          showHint: true,
          csslint: {
            "box-model": true,
            "display-property-grouping": true,
            "duplicate-properties": true,
            errors: true,
            "known-properties": true,
            "outline-none": true
          },
          jshint: {
            boss: true,
            curly: true,
            eqeqeq: true,
            eqnull: true,
            es3: true,
            expr: true,
            immed: true,
            noarg: true,
            nonbsp: true,
            onevar: true,
            quotmark: "single",
            trailing: true,
            undef: true,
            unused: true,
            browser: true,
            globals: {
              _: false,
              Backbone: false,
              jQuery: false,
              JSON: false,
              wp: false
            }
          },
          htmlhint: {
            "tagname-lowercase": true,
            "attr-lowercase": true,
            "attr-value-double-quotes": false,
            "doctype-first": false,
            "tag-pair": true,
            "spec-char-escape": true,
            "id-unique": true,
            "src-not-empty": true,
            "attr-no-duplication": true,
            "alt-require": true,
            "space-tab-mixed-disabled": "tab",
            "attr-unsafe-chars": true
          },
          // Show lint error numbers
          gutters: ["CodeMirror-lint-markers"]
        });
        editor.on("keyup", function(editor2, event2) {
          let shouldAutocomplete, isAlphaKey = /^[a-zA-Z]$/.test(event2.key), lineBeforeCursor, innerMode, token;
          if (editor2.state.completionActive && isAlphaKey) {
            return;
          }
          token = editor2.getTokenAt(editor2.getCursor());
          if ("string" === token.type || "comment" === token.type) {
            return;
          }
          innerMode = window.wp.CodeMirror.innerMode(editor2.getMode(), token.state).mode.name;
          lineBeforeCursor = editor2.doc.getLine(editor2.doc.getCursor().line).substr(0, editor2.doc.getCursor().ch);
          if ("html" === innerMode || "xml" === innerMode) {
            shouldAutocomplete = "<" === event2.key || "/" === event2.key && "tag" === token.type || isAlphaKey && "tag" === token.type || isAlphaKey && "attribute" === token.type || "=" === token.string && token.state.htmlState && token.state.htmlState.tagName;
          } else if ("css" === innerMode) {
            shouldAutocomplete = isAlphaKey || ":" === event2.key || " " === event2.key && /:\s+$/.test(lineBeforeCursor);
          } else if ("javascript" === innerMode) {
            shouldAutocomplete = isAlphaKey || "." === event2.key;
          } else if ("clike" === innerMode && "php" === editor2.options.mode) {
            shouldAutocomplete = "keyword" === token.type || "variable" === token.type;
          }
          if (shouldAutocomplete) {
            editor2.showHint({ completeSingle: false });
          }
        });
        if (props.modelValue) {
          editor.setValue(props.modelValue);
        }
        editor.on("change", onEditorChange);
      });
      vue.onBeforeUnmount(() => {
        if (editor) {
          editor.toTextArea();
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$u, [
          vue.createElementVNode("textarea", {
            ref_key: "codeMirrorTextarea",
            ref: codeMirrorTextarea,
            class: "znpb-custom-code__text-area",
            placeholder: _ctx.placeholder
          }, null, 8, _hoisted_2$m)
        ]);
      };
    }
  }));
  const InputCode_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$t = { class: "znpb-form-library-grid__panel-content znpb-fancy-scrollbar" };
  const _sfc_main$C = /* @__PURE__ */ vue.defineComponent({
    __name: "GridColor",
    emits: ["add-new-color"],
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$t, [
          vue.createVNode(vue.unref(_sfc_main$1z), {
            icon: "plus",
            class: "znpb-colorpicker-circle znpb-colorpicker-add-color",
            onMousedown: _cache[0] || (_cache[0] = vue.withModifiers(($event) => _ctx.$emit("add-new-color"), ["stop"]))
          }),
          vue.renderSlot(_ctx.$slots, "default")
        ]);
      };
    }
  });
  const GridColor_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$s = { key: 0 };
  const _hoisted_2$l = ["onClick"];
  const _hoisted_3$f = {
    key: 0,
    class: "znpb-colorpicker-global-wrapper--pro"
  };
  const _hoisted_4$9 = ["onClick"];
  const _hoisted_5$7 = {
    key: 0,
    class: "znpb-colorpicker-circle__active-bg"
  };
  const __default__$p = {
    name: "PatternContainer"
  };
  const _sfc_main$B = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$p), {
    props: {
      model: { default: "#000" }
    },
    emits: ["color-updated"],
    setup(__props, { emit }) {
      const props = __props;
      const formApi = vue.inject("OptionsForm");
      const getValueByPath = vue.inject("getValueByPath");
      const schema = vue.inject("schema", {});
      const { addLocalColor, getOptionValue, addGlobalColor } = useBuilderOptionsStore();
      const localColors = getOptionValue("local_colors", []);
      const globalColors = getOptionValue("global_colors", []);
      const showPresetInput = vue.ref(false);
      const isPro = vue.computed(() => {
        if (window.ZBCommonData !== void 0) {
          return window.ZBCommonData.environment.plugin_pro.is_active;
        }
        return false;
      });
      const localColorPatterns = vue.computed(() => {
        return [...localColors].reverse();
      });
      const globalColorPatterns = vue.computed(() => {
        return [...globalColors].reverse();
      });
      const selectedGlobalColor = vue.computed(() => {
        const { id = "" } = schema;
        const { options: options2 = {} } = getValueByPath(`__dynamic_content__.${id}`, {});
        return options2.color_id;
      });
      const activeTab = vue.computed(() => {
        return selectedGlobalColor.value ? "global" : "local";
      });
      function addGlobal(name) {
        const globalColor = {
          id: name.split(" ").join("_"),
          color: props.model,
          name
        };
        showPresetInput.value = false;
        addGlobalColor(globalColor);
      }
      function onGlobalColorSelected(colorConfig) {
        const { id } = schema;
        formApi.updateValueByPath(`__dynamic_content__.${id}`, {
          type: "global-color",
          options: {
            color_id: colorConfig.id
          }
        });
      }
      return (_ctx, _cache) => {
        const _component_Tab = vue.resolveComponent("Tab");
        const _component_Tabs = vue.resolveComponent("Tabs");
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.openBlock(), vue.createBlock(_sfc_main$Y, { "has-input": showPresetInput.value }, {
          default: vue.withCtx(() => [
            !showPresetInput.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$s, [
              vue.createVNode(_component_Tabs, {
                "tab-style": "minimal",
                "active-tab": activeTab.value
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_Tab, { name: "Local" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_sfc_main$C, {
                        onAddNewColor: _cache[0] || (_cache[0] = ($event) => vue.unref(addLocalColor)(_ctx.model))
                      }, {
                        default: vue.withCtx(() => [
                          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(localColorPatterns.value, (color, i) => {
                            return vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", {
                              key: i,
                              class: "znpb-colorpicker-circle znpb-colorpicker-circle-color",
                              style: vue.normalizeStyle({ "background-color": color }),
                              onClick: ($event) => emit("color-updated", color)
                            }, null, 12, _hoisted_2$l)), [
                              [_directive_znpb_tooltip, `${color})`]
                            ]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_Tab, { name: "Global" }, {
                    default: vue.withCtx(() => [
                      !isPro.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$f, [
                        vue.createTextVNode(" Global colors are available in "),
                        vue.createVNode(vue.unref(_sfc_main$X), {
                          text: "PRO",
                          type: "pro"
                        })
                      ])) : (vue.openBlock(), vue.createBlock(_sfc_main$C, {
                        key: 1,
                        onAddNewColor: _cache[1] || (_cache[1] = ($event) => showPresetInput.value = !showPresetInput.value)
                      }, {
                        default: vue.withCtx(() => [
                          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(globalColorPatterns.value, (colorConfig, i) => {
                            return vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", {
                              key: i,
                              class: vue.normalizeClass(["znpb-colorpicker-circle znpb-colorpicker-circle-color", { "znpb-colorpicker-circle--active": colorConfig.id === selectedGlobalColor.value }]),
                              style: vue.normalizeStyle({ backgroundColor: colorConfig.id === selectedGlobalColor.value ? "" : colorConfig.color }),
                              onClick: vue.withModifiers(($event) => onGlobalColorSelected(colorConfig), ["stop"])
                            }, [
                              colorConfig.id === selectedGlobalColor.value ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5$7, [
                                vue.createElementVNode("span", {
                                  style: vue.normalizeStyle({ "background-color": colorConfig.color })
                                }, null, 4)
                              ])) : vue.createCommentVNode("", true)
                            ], 14, _hoisted_4$9)), [
                              [_directive_znpb_tooltip, `${colorConfig.name} (${colorConfig.color})`]
                            ]);
                          }), 128))
                        ]),
                        _: 1
                      }))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["active-tab"])
            ])) : vue.createCommentVNode("", true),
            showPresetInput.value ? (vue.openBlock(), vue.createBlock(_sfc_main$10, {
              key: 1,
              "is-gradient": false,
              onSavePreset: _cache[2] || (_cache[2] = ($event) => addGlobal($event)),
              onCancel: _cache[3] || (_cache[3] = ($event) => showPresetInput.value = false)
            })) : vue.createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["has-input"]);
      };
    }
  }));
  const PatternContainer_vue_vue_type_style_index_0_lang = "";
  const __default__$o = {
    name: "Color"
  };
  const _sfc_main$A = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$o), {
    props: {
      modelValue: { default: "" },
      showLibrary: { type: Boolean, default: true },
      dynamicContentConfig: {},
      placeholder: {}
    },
    emits: ["update:modelValue", "option-updated", "open", "close"],
    setup(__props, { emit }) {
      const popper2 = vue.ref(null);
      const colorPickerHolder = vue.ref(null);
      const isDragging = vue.ref(false);
      let backdrop;
      function onLibraryUpdate(newValue) {
        emit("update:modelValue", newValue);
      }
      function onColorPickerClick() {
        isDragging.value = false;
      }
      function onColorPickerMousedown() {
        isDragging.value = true;
      }
      function updateColor(color) {
        emit("option-updated", color);
        emit("update:modelValue", color);
      }
      function openColorPicker() {
        emit("open");
        document.addEventListener("click", closePanelOnOutsideClick, true);
        if (popper2.value) {
          backdrop = document.createElement("div");
          backdrop.classList.add("znpb-tooltip-backdrop");
          const parent2 = popper2.value.$el.parentNode;
          parent2.insertBefore(backdrop, popper2.value.$el);
        }
      }
      function closeColorPicker() {
        var _a2;
        emit("close");
        document.removeEventListener("click", closePanelOnOutsideClick);
        if (backdrop) {
          (_a2 = backdrop.parentNode) == null ? void 0 : _a2.removeChild(backdrop);
        }
      }
      function closePanelOnOutsideClick(event2) {
        var _a2, _b;
        if (((_a2 = popper2.value) == null ? void 0 : _a2.$el.contains(event2.target)) || ((_b = colorPickerHolder.value) == null ? void 0 : _b.$refs.colorPicker.contains(event2.target))) {
          return;
        }
        if (!isDragging.value && popper2.value)
          ;
        isDragging.value = false;
      }
      vue.onBeforeUnmount(() => {
        var _a2;
        document.removeEventListener("click", closePanelOnOutsideClick);
        if (backdrop) {
          (_a2 = backdrop.parentNode) == null ? void 0 : _a2.removeChild(backdrop);
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1q), {
          ref_key: "popper",
          ref: popper2,
          "tooltip-class": "hg-popper--no-padding",
          trigger: "click",
          "close-on-outside-click": true,
          "append-to": "body",
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                rootBoundary: "viewport"
              }
            },
            {
              name: "offset",
              options: {
                offset: [0, 15]
              }
            },
            {
              name: "flip",
              options: {
                fallbackPlacements: ["left", "right", "bottom", "top"]
              }
            }
          ],
          strategy: "fixed",
          onShow: openColorPicker,
          onHide: closeColorPicker
        }, {
          content: vue.withCtx(() => [
            vue.createVNode(vue.unref(_sfc_main$1i), {
              ref_key: "colorPickerHolder",
              ref: colorPickerHolder,
              model: _ctx.modelValue && _ctx.modelValue.length > 0 ? _ctx.modelValue : _ctx.placeholder,
              onColorChanged: updateColor,
              onClick: vue.withModifiers(onColorPickerClick, ["stop"]),
              onMousedown: vue.withModifiers(onColorPickerMousedown, ["stop"])
            }, {
              end: vue.withCtx(() => [
                _ctx.showLibrary ? (vue.openBlock(), vue.createBlock(_sfc_main$B, {
                  key: 0,
                  model: _ctx.modelValue,
                  "active-tab": _ctx.dynamicContentConfig ? "global" : "local",
                  onColorUpdated: onLibraryUpdate
                }, null, 8, ["model", "active-tab"])) : vue.createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["model", "onClick", "onMousedown"])
          ]),
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "trigger")
          ]),
          _: 3
        }, 512);
      };
    }
  }));
  const Color_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$r = {
    key: 1,
    class: "znpb-form-colorpicker__color-trigger znpb-colorpicker-circle znpb-colorpicker-circle--no-color"
  };
  const _hoisted_2$k = { key: 0 };
  const __default__$n = {
    name: "InputColorPicker",
    inheritAttrs: true
  };
  const _sfc_main$z = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$n), {
    props: {
      modelValue: {},
      display: {},
      dynamicContentConfig: {},
      showLibrary: { type: Boolean, default: true },
      placeholder: { default: null }
    },
    emits: ["update:modelValue", "open", "close"],
    setup(__props, { emit }) {
      const props = __props;
      const color = vue.ref(null);
      const computedPlaceholder = vue.computed(() => {
        return props.placeholder || i18n__namespace.__("Color", "zionbuilder");
      });
      const colorModel = vue.computed({
        get() {
          return props.modelValue || "";
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      return (_ctx, _cache) => {
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-form-colorpicker", {
            [`znpb-form-colorPicker--${_ctx.display}`]: _ctx.display
          }])
        }, [
          _ctx.display === "simple" ? (vue.openBlock(), vue.createBlock(_sfc_main$A, {
            key: 0,
            ref_key: "color",
            ref: color,
            modelValue: colorModel.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => colorModel.value = $event),
            "show-library": _ctx.showLibrary,
            placeholder: _ctx.placeholder,
            class: "znpb-colorpicker-circle znpb-colorpicker-circle--trigger znpb-colorpicker-circle--opacity",
            onOpen: _cache[1] || (_cache[1] = ($event) => emit("open")),
            onClose: _cache[2] || (_cache[2] = ($event) => emit("close"))
          }, {
            trigger: vue.withCtx(() => [
              vue.createElementVNode("span", {
                style: vue.normalizeStyle({ backgroundColor: _ctx.modelValue }),
                class: "znpb-form-colorpicker__color-trigger znpb-colorpicker-circle"
              }, null, 4),
              _ctx.dynamicContentConfig ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
                key: 0,
                icon: "globe",
                rounded: true,
                "bg-color": "#fff",
                "bg-size": 16,
                size: 12,
                class: "znpb-colorpicker-circle__global-icon"
              })) : vue.createCommentVNode("", true),
              !_ctx.modelValue ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", _hoisted_1$r, null, 512)), [
                [_directive_znpb_tooltip, i18n__namespace.__("No color chosen", "zionbuilder")]
              ]) : vue.createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["modelValue", "show-library", "placeholder"])) : (vue.openBlock(), vue.createBlock(_sfc_main$1w, {
            key: 1,
            modelValue: colorModel.value,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => colorModel.value = $event),
            placeholder: computedPlaceholder.value
          }, {
            prepend: vue.withCtx(() => [
              vue.createVNode(_sfc_main$A, {
                modelValue: colorModel.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => colorModel.value = $event),
                "show-library": _ctx.showLibrary,
                class: "znpb-colorpicker-circle znpb-colorpicker-circle--trigger znpb-colorpicker-circle--opacity",
                placeholder: _ctx.placeholder,
                onOpen: _cache[4] || (_cache[4] = ($event) => emit("open")),
                onClose: _cache[5] || (_cache[5] = ($event) => emit("close"))
              }, {
                trigger: vue.withCtx(() => [
                  vue.createElementVNode("span", null, [
                    !_ctx.modelValue || _ctx.modelValue === void 0 ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", _hoisted_2$k, [
                      vue.createElementVNode("span", {
                        style: vue.normalizeStyle({ backgroundColor: _ctx.modelValue || _ctx.placeholder }),
                        class: "znpb-form-colorpicker__color-trigger znpb-colorpicker-circle"
                      }, null, 4)
                    ])), [
                      [_directive_znpb_tooltip, i18n__namespace.__("No color chosen", "zionbuilder")]
                    ]) : (vue.openBlock(), vue.createElementBlock("span", {
                      key: 1,
                      style: vue.normalizeStyle({ backgroundColor: _ctx.modelValue || _ctx.placeholder }),
                      class: "znpb-form-colorpicker__color-trigger znpb-colorpicker-circle"
                    }, null, 4)),
                    _ctx.dynamicContentConfig ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
                      key: 2,
                      icon: "globe",
                      rounded: true,
                      "bg-color": "#fff",
                      "bg-size": 16,
                      size: 12,
                      class: "znpb-colorpicker-circle__global-icon"
                    })) : vue.createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "show-library", "placeholder"])
            ]),
            _: 1
          }, 8, ["modelValue", "placeholder"]))
        ], 2);
      };
    }
  }));
  const InputColorPicker_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$q = { class: "znpb-custom-selector" };
  const _hoisted_2$j = { class: "znpb-custom-selector__list-wrapper" };
  const _hoisted_3$e = ["onClick"];
  const _hoisted_4$8 = {
    key: 0,
    class: "znpb-custom-selector__item-name"
  };
  const _hoisted_5$6 = {
    key: 2,
    class: "znpb-custom-selector__icon-text-content"
  };
  const _hoisted_6$4 = {
    key: 1,
    class: "znpb-custom-selector__item-name"
  };
  const __default__$m = {
    name: "InputCustomSelector"
  };
  const _sfc_main$y = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$m), {
    props: {
      options: {},
      columns: {},
      modelValue: { type: [String, Number, Boolean, null] },
      textIcon: { type: Boolean },
      placeholder: { type: [String, Number, Boolean, null] }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      function changeValue(newValue) {
        let valueToSend = newValue;
        if (props.modelValue === newValue) {
          valueToSend = null;
        }
        emit("update:modelValue", valueToSend);
      }
      return (_ctx, _cache) => {
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$q, [
          vue.createElementVNode("ul", _hoisted_2$j, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.options, (option, index2) => {
              return vue.withDirectives((vue.openBlock(), vue.createElementBlock("li", {
                key: index2,
                class: vue.normalizeClass(["znpb-custom-selector__item", {
                  ["znpb-custom-selector__item--activePlaceholder"]: typeof _ctx.modelValue === "undefined" && typeof _ctx.placeholder !== "undefined" && _ctx.placeholder === option.id,
                  ["znpb-custom-selector__item--active"]: _ctx.modelValue === option.id,
                  [`znpb-custom-selector__columns-${_ctx.columns}`]: _ctx.columns
                }]),
                onClick: ($event) => changeValue(option.id)
              }, [
                !option.icon ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$8, vue.toDisplayString(option.name), 1)) : vue.createCommentVNode("", true),
                !_ctx.textIcon && option.icon ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
                  key: 1,
                  icon: option.icon
                }, null, 8, ["icon"])) : vue.createCommentVNode("", true),
                _ctx.textIcon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$6, [
                  option.icon ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
                    key: 0,
                    icon: option.icon
                  }, null, 8, ["icon"])) : vue.createCommentVNode("", true),
                  option.name ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6$4, vue.toDisplayString(option.name), 1)) : vue.createCommentVNode("", true)
                ])) : vue.createCommentVNode("", true)
              ], 10, _hoisted_3$e)), [
                [_directive_znpb_tooltip, option.icon ? option.name : ""]
              ]);
            }), 128))
          ])
        ]);
      };
    }
  }));
  const InputCustomSelector_vue_vue_type_style_index_0_lang = "";
  const vueDatePick_vue_vue_type_style_index_0_lang = "";
  const formatRE = /,|\.|-| |:|\/|\\/;
  const dayRE = /D+/;
  const monthRE = /M+/;
  const yearRE = /Y+/;
  const hoursRE = /h+/i;
  const minutesRE = /m+/;
  const secondsRE = /s+/;
  const AMPMClockRE = /A/;
  const _sfc_main$x = {
    props: {
      modelValue: {
        type: String,
        default: ""
      },
      format: {
        type: String,
        default: "YYYY-MM-DD"
      },
      displayFormat: {
        type: String
      },
      editable: {
        type: Boolean,
        default: true
      },
      hasInputElement: {
        type: Boolean,
        default: true
      },
      inputAttributes: {
        type: Object
      },
      selectableYearRange: {
        type: [Number, Object, Function],
        default: 40
      },
      startPeriod: {
        type: Object
      },
      parseDate: {
        type: Function
      },
      formatDate: {
        type: Function
      },
      pickTime: {
        type: Boolean,
        default: false
      },
      pickMinutes: {
        type: Boolean,
        default: true
      },
      pickSeconds: {
        type: Boolean,
        default: false
      },
      use12HourClock: {
        type: Boolean,
        default: false
      },
      isDateDisabled: {
        type: Function,
        default: () => false
      },
      nextMonthCaption: {
        type: String,
        default: "Next month"
      },
      prevMonthCaption: {
        type: String,
        default: "Previous month"
      },
      setTimeCaption: {
        type: String,
        default: "Set time:"
      },
      mobileBreakpointWidth: {
        type: Number,
        default: 500
      },
      weekdays: {
        type: Array,
        default: () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      months: {
        type: Array,
        default: () => [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ]
      },
      startWeekOnSunday: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        inputValue: this.valueToInputFormat(this.modelValue),
        direction: void 0,
        positionClass: void 0,
        opened: !this.hasInputElement,
        currentPeriod: this.startPeriod || this.getPeriodFromValue(this.modelValue, this.format)
      };
    },
    computed: {
      valueDate() {
        const value = this.modelValue;
        const format = this.format;
        return value ? this.parseDateString(value, format) : void 0;
      },
      isReadOnly() {
        return !this.editable || this.inputAttributes && this.inputAttributes.readonly;
      },
      isValidValue() {
        const valueDate = this.valueDate;
        return this.modelValue ? Boolean(valueDate) : true;
      },
      currentPeriodDates() {
        const { year, month } = this.currentPeriod;
        const days = [];
        const date = new Date(year, month, 1);
        const today = /* @__PURE__ */ new Date();
        const offset2 = this.startWeekOnSunday ? 1 : 0;
        const startDay = date.getDay() || 7;
        if (startDay > 1 - offset2) {
          for (let i = startDay - (2 - offset2); i >= 0; i--) {
            const prevDate = new Date(date);
            prevDate.setDate(-i);
            days.push({ outOfRange: true, date: prevDate });
          }
        }
        while (date.getMonth() === month) {
          days.push({ date: new Date(date) });
          date.setDate(date.getDate() + 1);
        }
        const daysLeft = 7 - days.length % 7;
        for (let i = 1; i <= daysLeft; i++) {
          const nextDate = new Date(date);
          nextDate.setDate(i);
          days.push({ outOfRange: true, date: nextDate });
        }
        days.forEach((day) => {
          day.disabled = this.isDateDisabled(day.date);
          day.today = areSameDates(day.date, today);
          day.dateKey = [day.date.getFullYear(), day.date.getMonth() + 1, day.date.getDate()].join("-");
          day.selected = this.valueDate ? areSameDates(day.date, this.valueDate) : false;
        });
        return chunkArray(days, 7);
      },
      yearRange() {
        const currentYear = this.currentPeriod.year;
        const userRange = this.selectableYearRange;
        const userRangeType = typeof userRange;
        let yearsRange = [];
        if (userRangeType === "number") {
          yearsRange = range(currentYear - userRange, currentYear + userRange);
        } else if (userRangeType === "object") {
          yearsRange = range(userRange.from, userRange.to);
        } else if (userRangeType === "function") {
          yearsRange = userRange(this);
        }
        if (yearsRange.indexOf(currentYear) < 0) {
          yearsRange.push(currentYear);
          yearsRange = yearsRange.sort();
        }
        return yearsRange;
      },
      currentTime() {
        const currentDate = this.valueDate;
        if (!currentDate) {
          return void 0;
        }
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        return {
          hours,
          minutes,
          seconds,
          isPM: isPM(hours),
          hoursFormatted: (this.use12HourClock ? to12HourClock(hours) : hours).toString(),
          minutesFormatted: paddNum(minutes, 2),
          secondsFormatted: paddNum(seconds, 2)
        };
      },
      directionClass() {
        return this.direction ? `vdp${this.direction}Direction` : void 0;
      },
      weekdaysSorted() {
        if (this.startWeekOnSunday) {
          const weekdays = this.weekdays.slice();
          weekdays.unshift(weekdays.pop());
          return weekdays;
        } else {
          return this.weekdays;
        }
      }
    },
    watch: {
      modelValue(value) {
        if (this.isValidValue) {
          this.inputValue = this.valueToInputFormat(value);
          this.currentPeriod = this.getPeriodFromValue(value, this.format);
        }
      },
      currentPeriod(currentPeriod, oldPeriod) {
        const currentDate = new Date(currentPeriod.year, currentPeriod.month).getTime();
        const oldDate = new Date(oldPeriod.year, oldPeriod.month).getTime();
        this.direction = currentDate !== oldDate ? currentDate > oldDate ? "Next" : "Prev" : void 0;
        if (currentDate !== oldDate) {
          this.$emit("periodChange", {
            year: currentPeriod.year,
            month: currentPeriod.month
          });
        }
      }
    },
    beforeUnmount() {
      this.removeCloseEvents();
      this.teardownPosition();
    },
    methods: {
      valueToInputFormat(value) {
        return !this.displayFormat ? value : this.formatDateToString(this.parseDateString(value, this.format), this.displayFormat) || value;
      },
      getPeriodFromValue(dateString, format) {
        const date = this.parseDateString(dateString, format) || /* @__PURE__ */ new Date();
        return { month: date.getMonth(), year: date.getFullYear() };
      },
      parseDateString(dateString, dateFormat) {
        return !dateString ? void 0 : this.parseDate ? this.parseDate(dateString, dateFormat) : this.parseSimpleDateString(dateString, dateFormat);
      },
      formatDateToString(date, dateFormat) {
        return !date ? "" : this.formatDate ? this.formatDate(date, dateFormat) : this.formatSimpleDateToString(date, dateFormat);
      },
      parseSimpleDateString(dateString, dateFormat) {
        let day, month, year, hours, minutes, seconds;
        const dateParts = dateString.split(formatRE);
        const formatParts = dateFormat.split(formatRE);
        const partsSize = formatParts.length;
        for (let i = 0; i < partsSize; i++) {
          if (formatParts[i].match(dayRE)) {
            day = parseInt(dateParts[i], 10);
          } else if (formatParts[i].match(monthRE)) {
            month = parseInt(dateParts[i], 10);
          } else if (formatParts[i].match(yearRE)) {
            year = parseInt(dateParts[i], 10);
          } else if (formatParts[i].match(hoursRE)) {
            hours = parseInt(dateParts[i], 10);
          } else if (formatParts[i].match(minutesRE)) {
            minutes = parseInt(dateParts[i], 10);
          } else if (formatParts[i].match(secondsRE)) {
            seconds = parseInt(dateParts[i], 10);
          }
        }
        const resolvedDate = new Date([paddNum(year, 4), paddNum(month, 2), paddNum(day, 2)].join("-"));
        if (isNaN(resolvedDate)) {
          return void 0;
        } else {
          const date = new Date(year, month - 1, day);
          [
            [year, "setFullYear"],
            [hours, "setHours"],
            [minutes, "setMinutes"],
            [seconds, "setSeconds"]
          ].forEach(([value, method]) => {
            typeof value !== "undefined" && date[method](value);
          });
          return date;
        }
      },
      formatSimpleDateToString(date, dateFormat) {
        return dateFormat.replace(yearRE, (match) => Number(date.getFullYear().toString().slice(-match.length))).replace(monthRE, (match) => paddNum(date.getMonth() + 1, match.length)).replace(dayRE, (match) => paddNum(date.getDate(), match.length)).replace(
          hoursRE,
          (match) => paddNum(AMPMClockRE.test(dateFormat) ? to12HourClock(date.getHours()) : date.getHours(), match.length)
        ).replace(minutesRE, (match) => paddNum(date.getMinutes(), match.length)).replace(secondsRE, (match) => paddNum(date.getSeconds(), match.length)).replace(AMPMClockRE, (match) => isPM(date.getHours()) ? "PM" : "AM");
      },
      incrementMonth(increment = 1) {
        const refDate = new Date(this.currentPeriod.year, this.currentPeriod.month);
        const incrementDate = new Date(refDate.getFullYear(), refDate.getMonth() + increment);
        this.currentPeriod = {
          month: incrementDate.getMonth(),
          year: incrementDate.getFullYear()
        };
      },
      processUserInput(userText) {
        const userDate = this.parseDateString(userText, this.displayFormat || this.format);
        this.inputValue = userText;
        this.$emit("update:modelValue", userDate ? this.formatDateToString(userDate, this.format) : userText);
      },
      toggle() {
        return this.opened ? this.close() : this.open();
      },
      open() {
        if (!this.opened) {
          this.opened = true;
          this.currentPeriod = this.startPeriod || this.getPeriodFromValue(this.modelValue, this.format);
          this.addCloseEvents();
          this.setupPosition();
        }
        this.direction = void 0;
      },
      close() {
        if (this.opened) {
          this.opened = false;
          this.direction = void 0;
          this.removeCloseEvents();
          this.teardownPosition();
        }
      },
      closeViaOverlay(e) {
        if (this.hasInputElement && e.target === this.$refs.outerWrap) {
          this.close();
        }
      },
      addCloseEvents() {
        if (!this.closeEventListener) {
          this.closeEventListener = (e) => this.inspectCloseEvent(e);
          ["click", "keyup", "focusin"].forEach(
            (eventName) => document.addEventListener(eventName, this.closeEventListener)
          );
        }
      },
      inspectCloseEvent(event2) {
        if (event2.keyCode) {
          event2.keyCode === 27 && this.close();
        } else if (!(event2.target === this.$el) && !this.$el.contains(event2.target)) {
          this.close();
        }
      },
      removeCloseEvents() {
        if (this.closeEventListener) {
          ["click", "keyup", "focusin"].forEach(
            (eventName) => document.removeEventListener(eventName, this.closeEventListener)
          );
          delete this.closeEventListener;
        }
      },
      setupPosition() {
        if (!this.positionEventListener) {
          this.positionEventListener = () => this.positionFloater();
          window.addEventListener("resize", this.positionEventListener);
        }
        this.positionFloater();
      },
      positionFloater() {
        const inputRect = this.$el.getBoundingClientRect();
        let verticalClass = "vdpPositionTop";
        let horizontalClass = "vdpPositionLeft";
        const calculate = () => {
          const rect = this.$refs.outerWrap.getBoundingClientRect();
          const floaterHeight = rect.height;
          const floaterWidth = rect.width;
          if (window.innerWidth > this.mobileBreakpointWidth) {
            if (inputRect.top + inputRect.height + floaterHeight > window.innerHeight && inputRect.top - floaterHeight > 0) {
              verticalClass = "vdpPositionBottom";
            }
            if (inputRect.left + floaterWidth > window.innerWidth) {
              horizontalClass = "vdpPositionRight";
            }
            this.positionClass = ["vdpPositionReady", verticalClass, horizontalClass].join(" ");
          } else {
            this.positionClass = "vdpPositionFixed";
          }
        };
        this.$refs.outerWrap ? calculate() : this.$nextTick(calculate);
      },
      teardownPosition() {
        if (this.positionEventListener) {
          this.positionClass = void 0;
          window.removeEventListener("resize", this.positionEventListener);
          delete this.positionEventListener;
        }
      },
      clear() {
        this.$emit("update:modelValue", "");
      },
      selectDateItem(item) {
        if (!item.disabled) {
          const newDate = new Date(item.date);
          if (this.currentTime) {
            newDate.setHours(this.currentTime.hours);
            newDate.setMinutes(this.currentTime.minutes);
            newDate.setSeconds(this.currentTime.seconds);
          }
          this.$emit("update:modelValue", this.formatDateToString(newDate, this.format));
          if (this.hasInputElement && !this.pickTime) {
            this.close();
          }
        }
      },
      set12HourClock(value) {
        const currentDate = new Date(this.valueDate);
        const currentHours = currentDate.getHours();
        currentDate.setHours(value === "PM" ? currentHours + 12 : currentHours - 12);
        this.$emit("update:modelValue", this.formatDateToString(currentDate, this.format));
      },
      inputHours(event2) {
        const currentDate = new Date(this.valueDate);
        const currentHours = currentDate.getHours();
        const targetValue = parseInt(event2.target.value, 10) || 0;
        const minHours = this.use12HourClock ? 1 : 0;
        const maxHours = this.use12HourClock ? 12 : 23;
        const numValue = boundNumber(targetValue, minHours, maxHours);
        currentDate.setHours(this.use12HourClock ? to24HourClock(numValue, isPM(currentHours)) : numValue);
        event2.target.value = paddNum(numValue, 1);
        this.$emit("update:modelValue", this.formatDateToString(currentDate, this.format));
      },
      inputTime(method, event2) {
        const currentDate = new Date(this.valueDate);
        const targetValue = parseInt(event2.target.value) || 0;
        const numValue = boundNumber(targetValue, 0, 59);
        event2.target.value = paddNum(numValue, 2);
        currentDate[method](numValue);
        this.$emit("update:modelValue", this.formatDateToString(currentDate, this.format));
      },
      onTimeInputFocus(event2) {
        event2.target.select && event2.target.select();
      }
    }
  };
  function paddNum(num, padsize) {
    return typeof num !== "undefined" ? num.toString().length > padsize ? num : new Array(padsize - num.toString().length + 1).join("0") + num : void 0;
  }
  function chunkArray(inputArray, chunkSize) {
    const results = [];
    while (inputArray.length) {
      results.push(inputArray.splice(0, chunkSize));
    }
    return results;
  }
  function areSameDates(date1, date2) {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  }
  function range(start2, end2) {
    const results = [];
    for (let i = start2; i <= end2; i++) {
      results.push(i);
    }
    return results;
  }
  function to12HourClock(hours) {
    const remainder = hours % 12;
    return remainder === 0 ? 12 : remainder;
  }
  function to24HourClock(hours, PM) {
    return PM ? hours === 12 ? hours : hours + 12 : hours === 12 ? 0 : hours;
  }
  function isPM(hours) {
    return hours >= 12;
  }
  function boundNumber(value, min2, max2) {
    return Math.min(Math.max(value, min2), max2);
  }
  const _hoisted_1$p = ["readonly", "value"];
  const _hoisted_2$i = { class: "vdpInnerWrap" };
  const _hoisted_3$d = { class: "vdpHeader" };
  const _hoisted_4$7 = ["title"];
  const _hoisted_5$5 = ["title"];
  const _hoisted_6$3 = { class: "vdpPeriodControls" };
  const _hoisted_7$2 = { class: "vdpPeriodControl" };
  const _hoisted_8$2 = ["value"];
  const _hoisted_9$2 = { class: "vdpPeriodControl" };
  const _hoisted_10 = ["value"];
  const _hoisted_11 = { class: "vdpTable" };
  const _hoisted_12 = { class: "vdpHeadCellContent" };
  const _hoisted_13 = ["data-id", "onClick"];
  const _hoisted_14 = { class: "vdpCellContent" };
  const _hoisted_15 = {
    key: 0,
    class: "vdpTimeControls"
  };
  const _hoisted_16 = { class: "vdpTimeCaption" };
  const _hoisted_17 = { class: "vdpTimeUnit" };
  const _hoisted_18 = /* @__PURE__ */ vue.createElementVNode("br", null, null, -1);
  const _hoisted_19 = ["disabled", "value"];
  const _hoisted_20 = {
    key: 0,
    class: "vdpTimeSeparator"
  };
  const _hoisted_21 = {
    key: 1,
    class: "vdpTimeUnit"
  };
  const _hoisted_22 = /* @__PURE__ */ vue.createElementVNode("br", null, null, -1);
  const _hoisted_23 = ["disabled", "value"];
  const _hoisted_24 = {
    key: 2,
    class: "vdpTimeSeparator"
  };
  const _hoisted_25 = {
    key: 3,
    class: "vdpTimeUnit"
  };
  const _hoisted_26 = /* @__PURE__ */ vue.createElementVNode("br", null, null, -1);
  const _hoisted_27 = ["disabled", "value"];
  const _hoisted_28 = ["disabled"];
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["vdpComponent", { vdpWithInput: $props.hasInputElement }])
    }, [
      vue.renderSlot(_ctx.$slots, "default", {
        open: $options.open,
        close: $options.close,
        toggle: $options.toggle,
        inputValue: $data.inputValue,
        processUserInput: $options.processUserInput,
        valueToInputFormat: $options.valueToInputFormat
      }, () => [
        $props.hasInputElement ? (vue.openBlock(), vue.createElementBlock("input", vue.mergeProps({
          key: 0,
          type: "text"
        }, $props.inputAttributes, {
          readonly: $options.isReadOnly,
          value: $data.inputValue,
          onInput: _cache[0] || (_cache[0] = ($event) => $props.editable && $options.processUserInput($event.target.value)),
          onFocus: _cache[1] || (_cache[1] = ($event) => $props.editable && $options.open()),
          onClick: _cache[2] || (_cache[2] = ($event) => $props.editable && $options.open())
        }), null, 16, _hoisted_1$p)) : vue.createCommentVNode("", true),
        $props.editable && $props.hasInputElement && $data.inputValue ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 1,
          class: "vdpClearInput",
          type: "button",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.clear && $options.clear(...args))
        })) : vue.createCommentVNode("", true)
      ]),
      vue.createVNode(vue.Transition, { name: "vdp-toggle-calendar" }, {
        default: vue.withCtx(() => [
          $data.opened ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            ref: "outerWrap",
            class: vue.normalizeClass(["vdpOuterWrap", [$data.positionClass, { vdpFloating: $props.hasInputElement }]]),
            onClick: _cache[15] || (_cache[15] = (...args) => $options.closeViaOverlay && $options.closeViaOverlay(...args))
          }, [
            vue.createElementVNode("div", _hoisted_2$i, [
              vue.createElementVNode("header", _hoisted_3$d, [
                vue.createElementVNode("button", {
                  class: "vdpArrow vdpArrowPrev",
                  title: $props.prevMonthCaption,
                  type: "button",
                  onClick: _cache[4] || (_cache[4] = ($event) => $options.incrementMonth(-1))
                }, vue.toDisplayString($props.prevMonthCaption), 9, _hoisted_4$7),
                vue.createElementVNode("button", {
                  class: "vdpArrow vdpArrowNext",
                  type: "button",
                  title: $props.nextMonthCaption,
                  onClick: _cache[5] || (_cache[5] = ($event) => $options.incrementMonth(1))
                }, vue.toDisplayString($props.nextMonthCaption), 9, _hoisted_5$5),
                vue.createElementVNode("div", _hoisted_6$3, [
                  vue.createElementVNode("div", _hoisted_7$2, [
                    (vue.openBlock(), vue.createElementBlock("button", {
                      key: $data.currentPeriod.month,
                      class: vue.normalizeClass($options.directionClass),
                      type: "button"
                    }, vue.toDisplayString($props.months[$data.currentPeriod.month]), 3)),
                    vue.withDirectives(vue.createElementVNode("select", {
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.currentPeriod.month = $event)
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.months, (month, index2) => {
                        return vue.openBlock(), vue.createElementBlock("option", {
                          key: month,
                          value: index2
                        }, vue.toDisplayString(month), 9, _hoisted_8$2);
                      }), 128))
                    ], 512), [
                      [vue.vModelSelect, $data.currentPeriod.month]
                    ])
                  ]),
                  vue.createElementVNode("div", _hoisted_9$2, [
                    (vue.openBlock(), vue.createElementBlock("button", {
                      key: $data.currentPeriod.year,
                      class: vue.normalizeClass($options.directionClass),
                      type: "button"
                    }, vue.toDisplayString($data.currentPeriod.year), 3)),
                    vue.withDirectives(vue.createElementVNode("select", {
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.currentPeriod.year = $event)
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.yearRange, (year) => {
                        return vue.openBlock(), vue.createElementBlock("option", {
                          key: year,
                          value: year
                        }, vue.toDisplayString(year), 9, _hoisted_10);
                      }), 128))
                    ], 512), [
                      [vue.vModelSelect, $data.currentPeriod.year]
                    ])
                  ])
                ])
              ]),
              vue.createElementVNode("table", _hoisted_11, [
                vue.createElementVNode("thead", null, [
                  vue.createElementVNode("tr", null, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.weekdaysSorted, (weekday, weekdayIndex) => {
                      return vue.openBlock(), vue.createElementBlock("th", {
                        key: weekdayIndex,
                        class: "vdpHeadCell"
                      }, [
                        vue.createElementVNode("span", _hoisted_12, vue.toDisplayString(weekday), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                (vue.openBlock(), vue.createElementBlock("tbody", {
                  key: $data.currentPeriod.year + "-" + $data.currentPeriod.month,
                  class: vue.normalizeClass($options.directionClass)
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.currentPeriodDates, (week, weekIndex) => {
                    return vue.openBlock(), vue.createElementBlock("tr", {
                      key: weekIndex,
                      class: "vdpRow"
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(week, (item) => {
                        return vue.openBlock(), vue.createElementBlock("td", {
                          key: item.dateKey,
                          class: vue.normalizeClass(["vdpCell", {
                            selectable: $props.editable && !item.disabled,
                            selected: item.selected,
                            disabled: item.disabled,
                            today: item.today,
                            outOfRange: item.outOfRange
                          }]),
                          "data-id": item.dateKey,
                          onClick: ($event) => $props.editable && $options.selectDateItem(item)
                        }, [
                          vue.createElementVNode("div", _hoisted_14, vue.toDisplayString(item.date.getDate()), 1)
                        ], 10, _hoisted_13);
                      }), 128))
                    ]);
                  }), 128))
                ], 2))
              ]),
              $props.pickTime && $options.currentTime ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_15, [
                vue.createElementVNode("span", _hoisted_16, vue.toDisplayString($props.setTimeCaption), 1),
                vue.createElementVNode("div", _hoisted_17, [
                  vue.createElementVNode("pre", null, [
                    vue.createElementVNode("span", null, vue.toDisplayString($options.currentTime.hoursFormatted), 1),
                    _hoisted_18
                  ]),
                  vue.createElementVNode("input", {
                    type: "number",
                    pattern: "\\d*",
                    class: "vdpHoursInput",
                    disabled: !$props.editable,
                    value: $options.currentTime.hoursFormatted,
                    onInput: _cache[8] || (_cache[8] = vue.withModifiers((...args) => $options.inputHours && $options.inputHours(...args), ["prevent"])),
                    onFocusin: _cache[9] || (_cache[9] = (...args) => $options.onTimeInputFocus && $options.onTimeInputFocus(...args))
                  }, null, 40, _hoisted_19)
                ]),
                $props.pickMinutes ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_20, ":")) : vue.createCommentVNode("", true),
                $props.pickMinutes ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_21, [
                  vue.createElementVNode("pre", null, [
                    vue.createElementVNode("span", null, vue.toDisplayString($options.currentTime.minutesFormatted), 1),
                    _hoisted_22
                  ]),
                  $props.pickMinutes ? (vue.openBlock(), vue.createElementBlock("input", {
                    key: 0,
                    type: "number",
                    pattern: "\\d*",
                    class: "vdpMinutesInput",
                    disabled: !$props.editable,
                    value: $options.currentTime.minutesFormatted,
                    onInput: _cache[10] || (_cache[10] = ($event) => $options.inputTime("setMinutes", $event)),
                    onFocusin: _cache[11] || (_cache[11] = (...args) => $options.onTimeInputFocus && $options.onTimeInputFocus(...args))
                  }, null, 40, _hoisted_23)) : vue.createCommentVNode("", true)
                ])) : vue.createCommentVNode("", true),
                $props.pickSeconds ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_24, ":")) : vue.createCommentVNode("", true),
                $props.pickSeconds ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_25, [
                  vue.createElementVNode("pre", null, [
                    vue.createElementVNode("span", null, vue.toDisplayString($options.currentTime.secondsFormatted), 1),
                    _hoisted_26
                  ]),
                  $props.pickSeconds ? (vue.openBlock(), vue.createElementBlock("input", {
                    key: 0,
                    type: "number",
                    pattern: "\\d*",
                    class: "vdpSecondsInput",
                    disabled: !$props.editable,
                    value: $options.currentTime.secondsFormatted,
                    onInput: _cache[12] || (_cache[12] = ($event) => $options.inputTime("setSeconds", $event)),
                    onFocusin: _cache[13] || (_cache[13] = (...args) => $options.onTimeInputFocus && $options.onTimeInputFocus(...args))
                  }, null, 40, _hoisted_27)) : vue.createCommentVNode("", true)
                ])) : vue.createCommentVNode("", true),
                $props.use12HourClock ? (vue.openBlock(), vue.createElementBlock("button", {
                  key: 4,
                  type: "button",
                  class: "vdp12HourToggleBtn",
                  disabled: !$props.editable,
                  onClick: _cache[14] || (_cache[14] = ($event) => $options.set12HourClock($options.currentTime.isPM ? "AM" : "PM"))
                }, vue.toDisplayString($options.currentTime.isPM ? "PM" : "AM"), 9, _hoisted_28)) : vue.createCommentVNode("", true)
              ])) : vue.createCommentVNode("", true)
            ])
          ], 2)) : vue.createCommentVNode("", true)
        ]),
        _: 1
      })
    ], 2);
  }
  const vueDatePick = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$4]]);
  const _sfc_main$w = /* @__PURE__ */ vue.defineComponent({
    __name: "InputDatePicker",
    props: {
      modelValue: {},
      readonly: { type: Boolean, default: false },
      pickTime: { type: Boolean, default: false },
      format: { default: "YYYY-MM-DD" },
      use12HourClock: { type: Boolean, default: false },
      pastDisabled: { type: Boolean, default: false },
      futureDisabled: { type: Boolean, default: false }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const weekdaysStrings = [
        i18n__namespace.__("Mon", "zionbuilder"),
        i18n__namespace.__("Tue", "zionbuilder"),
        i18n__namespace.__("Wed", "zionbuilder"),
        i18n__namespace.__("Thu", "zionbuilder"),
        i18n__namespace.__("Fri", "zionbuilder"),
        i18n__namespace.__("Sat", "zionbuilder"),
        i18n__namespace.__("Sun", "zionbuilder")
      ];
      const monthsStrings = [
        i18n__namespace.__("January", "zionbuilder"),
        i18n__namespace.__("February", "zionbuilder"),
        i18n__namespace.__("March", "zionbuilder"),
        i18n__namespace.__("April", "zionbuilder"),
        i18n__namespace.__("May", "zionbuilder"),
        i18n__namespace.__("June", "zionbuilder"),
        i18n__namespace.__("July", "zionbuilder"),
        i18n__namespace.__("August", "zionbuilder"),
        i18n__namespace.__("September", "zionbuilder"),
        i18n__namespace.__("October", "zionbuilder"),
        i18n__namespace.__("November", "zionbuilder"),
        i18n__namespace.__("December", "zionbuilder")
      ];
      const valueModel = vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      function disableDate(date) {
        const currentDate = /* @__PURE__ */ new Date();
        currentDate.setHours(0, 0, 0, 0);
        if (props.pastDisabled) {
          return date < currentDate;
        } else if (props.futureDisabled) {
          return date > currentDate;
        } else
          return false;
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vueDatePick, {
          modelValue: valueModel.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => valueModel.value = $event),
          class: "znpb-input-date",
          "next-month-caption": i18n__namespace.__("Next Month", "zionbuilder"),
          "previous-month-caption": i18n__namespace.__("Previous month", "zionbuilder"),
          "set-time-caption": i18n__namespace.__("Set time", "zionbuilder"),
          weekdays: weekdaysStrings,
          months: monthsStrings,
          "pick-time": _ctx.pickTime,
          "use-12-hour-clock": _ctx.use12HourClock,
          format: _ctx.format,
          "is-date-disabled": disableDate
        }, {
          default: vue.withCtx(({ toggle }) => [
            vue.createVNode(_sfc_main$1w, vue.mergeProps({
              modelValue: valueModel.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => valueModel.value = $event),
              readonly: _ctx.readonly,
              class: "znpb-input-number__input"
            }, _ctx.$attrs, {
              onKeydown: toggle,
              onMouseup: toggle
            }), null, 16, ["modelValue", "readonly", "onKeydown", "onMouseup"])
          ]),
          _: 1
        }, 8, ["modelValue", "next-month-caption", "previous-month-caption", "set-time-caption", "pick-time", "use-12-hour-clock", "format"]);
      };
    }
  });
  const __default__$l = {
    name: "InputEditor"
  };
  const _sfc_main$v = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$l), {
    props: {
      modelValue: { default: "" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      let editorTextarea;
      const root2 = vue.ref(null);
      let editor;
      const randomNumber = Math.floor(Math.random() * 100 + 1);
      const editorID = `znpbwpeditor${randomNumber}`;
      const content = vue.computed({
        get() {
          return props.modelValue || "";
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      vue.onBeforeUnmount(() => {
        editorTextarea.removeEventListener("keyup", onTextChanged);
        if (window.tinyMCE !== void 0 && editor) {
          window.tinyMCE.remove(editor);
        }
        editor = null;
      });
      vue.onMounted(() => {
        root2.value.innerHTML = window.ZBCommonData.wp_editor.replace(/znpbwpeditorid/g, editorID).replace("%%ZNPB_EDITOR_CONTENT%%", content.value);
        editorTextarea = document.querySelectorAll(".wp-editor-area")[0];
        editorTextarea.addEventListener("keyup", onTextChanged);
        window.quicktags({
          buttons: "strong,em,del,link,img,close",
          id: editorID
        });
        const config = {
          id: editorID,
          selector: `#${editorID}`,
          extended_valid_elements: "span[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title|class]",
          setup: onEditorSetup,
          content_style: "body { background-color: #fff; }"
        };
        window.tinyMCEPreInit.mceInit[editorID] = Object.assign({}, window.tinyMCEPreInit.mceInit.znpbwpeditorid, config);
        window.switchEditors.go(editorID, "tmce");
      });
      vue.watch(
        () => props.modelValue,
        (newValue) => {
          const currentValue = editor == null ? void 0 : editor.getContent();
          if (editor && currentValue !== newValue) {
            const value = newValue || "";
            editor.setContent(value);
            debouncedAddToHistory();
            editorTextarea.value = newValue;
          }
        }
      );
      const debouncedAddToHistory = debounce$1(() => {
        if (editor) {
          editor.undoManager.add();
        }
      }, 500);
      function onEditorSetup(editorInstance) {
        editor = editorInstance;
        editor.on("change KeyUp Undo Redo", onEditorContentChange);
      }
      function onEditorContentChange() {
        const currentValue = props.modelValue;
        const newValue = editor == null ? void 0 : editor.getContent();
        if (currentValue !== newValue) {
          emit("update:modelValue", newValue);
        }
      }
      function onTextChanged() {
        emit("update:modelValue", editorTextarea.value);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "root",
          ref: root2,
          class: "znpb-wp-editor__wrapper znpb-wp-editor-custom"
        }, null, 512);
      };
    }
  }));
  const InputEditor_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$o = { class: "znpb-input-media-wrapper" };
  const __default__$k = {
    name: "InputMedia"
  };
  const _sfc_main$u = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$k), {
    props: {
      modelValue: {},
      media_type: { default: "image" },
      selectButtonText: { default: "select" },
      mediaConfig: { default: () => {
        return {
          insertTitle: "Add File",
          multiple: false
        };
      } }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const { applyFilters: applyFilters2 } = window.zb.hooks;
      const inputComponent = vue.computed(() => {
        return applyFilters2("zionbuilder/options/media/input_component", "BaseInput", props.modelValue);
      });
      let mediaModal = null;
      const inputValue = vue.computed({
        get() {
          return props.modelValue || "";
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      function openMediaModal() {
        if (mediaModal === null) {
          const selection = getSelection();
          const args = {
            frame: "select",
            state: "library",
            library: { type: props.media_type },
            button: { text: props.mediaConfig.insertTitle },
            selection
          };
          mediaModal = window.wp.media(args);
          mediaModal.on("select update insert", selectMedia);
        }
        mediaModal.open();
      }
      function selectMedia(e) {
        let selection = mediaModal.state().get("selection").toJSON();
        if (e !== void 0) {
          selection = e;
        }
        if (props.mediaConfig.multiple) {
          inputValue.value = selection.map((selectedItem) => selectedItem.url).join(",");
        } else {
          inputValue.value = selection[0].url;
        }
      }
      function getSelection() {
        if (typeof props.modelValue === "undefined")
          return;
        const idArray = props.modelValue.split(",");
        const args = { orderby: "post__in", order: "ASC", type: "image", perPage: -1, post__in: idArray };
        const attachments = window.wp.media.query(args);
        const selection = new window.wp.media.model.Selection(attachments.models, {
          props: attachments.props.toJSON(),
          multiple: true
        });
        return selection;
      }
      return (_ctx, _cache) => {
        const _component_Injection = vue.resolveComponent("Injection");
        const _component_Button = vue.resolveComponent("Button");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$o, [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(inputComponent.value), {
            modelValue: inputValue.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputValue.value = $event),
            class: "znpb-form__input-text",
            placeholder: "Type your text here",
            onClick: openMediaModal
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_Injection, { location: "options/media/append" })
            ]),
            _: 1
          }, 8, ["modelValue"])),
          vue.createVNode(_component_Button, {
            type: "line",
            onClick: openMediaModal
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(vue.toDisplayString(_ctx.selectButtonText), 1)
            ]),
            _: 1
          })
        ]);
      };
    }
  }));
  const InputMedia_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$n = { class: "znpb-input-media-wrapper" };
  const _hoisted_2$h = ["accept"];
  const _hoisted_3$c = { key: 1 };
  const __default__$j = {
    name: "InputFile"
  };
  const _sfc_main$t = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$j), {
    props: {
      modelValue: {},
      type: { default: "image" },
      selectButtonText: { default: "select" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const fileInput = vue.ref(null);
      const loading = vue.ref(false);
      const inputValue = vue.computed({
        get() {
          return props.modelValue || "";
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      function onButtonClick() {
        if (fileInput.value) {
          fileInput.value.click();
        }
      }
      function uploadFiles(fieldName, fileList) {
        return __async(this, null, function* () {
          const formData = new FormData();
          if (!fileList || !fileList.length)
            return;
          Array.from(fileList).forEach((file) => {
            formData.append(fieldName, file, file.name);
          });
          loading.value = true;
          try {
            const response = yield uploadFile(formData);
            const responseData = response.data;
            inputValue.value = responseData.file_url;
          } catch (err) {
            console.error(err);
          }
          loading.value = false;
        });
      }
      return (_ctx, _cache) => {
        const _component_Loader = vue.resolveComponent("Loader");
        const _component_Button = vue.resolveComponent("Button");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$n, [
          vue.createVNode(_sfc_main$1w, {
            modelValue: inputValue.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputValue.value = $event),
            class: "znpb-form__input-text",
            placeholder: "Type your text here",
            onClick: onButtonClick
          }, null, 8, ["modelValue"]),
          vue.createElementVNode("input", {
            ref_key: "fileInput",
            ref: fileInput,
            type: "file",
            style: { "display": "none" },
            accept: _ctx.type,
            name: "file",
            onChange: _cache[1] || (_cache[1] = ($event) => uploadFiles($event.target.name, $event.target.files))
          }, null, 40, _hoisted_2$h),
          vue.createVNode(_component_Button, {
            type: "line",
            onClick: onButtonClick
          }, {
            default: vue.withCtx(() => [
              loading.value ? (vue.openBlock(), vue.createBlock(_component_Loader, {
                key: 0,
                size: 14
              })) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$c, vue.toDisplayString(_ctx.selectButtonText), 1))
            ]),
            _: 1
          })
        ]);
      };
    }
  }));
  const InputFile_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$s = /* @__PURE__ */ vue.defineComponent({
    __name: "InputRadioGroup",
    props: {
      layout: { default: "row" }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["zion-radio-group", {
            [`zion-radio-group--${_ctx.layout}`]: _ctx.layout
          }])
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  });
  const InputRadioGroup_vue_vue_type_style_index_0_lang = "";
  const InputRadio_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$r = {
    name: "InputRadio",
    props: {
      /**
       * modelValue
       */
      modelValue: {
        type: String,
        required: false
      },
      /**
       * Label
       */
      label: {
        type: String,
        required: false
      },
      /**
       * Initial option
       */
      optionValue: {
        type: String,
        required: true
      },
      /**
       * If input should be hidden
       */
      hideInput: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data() {
      return {
        checked: ""
      };
    },
    computed: {
      radioButtonValue: {
        get: function() {
          return this.modelValue;
        },
        set: function() {
          this.$emit("update:modelValue", this.optionValue);
        }
      },
      isSelected() {
        return this.modelValue === this.optionValue;
      }
    },
    methods: {}
  };
  const _hoisted_1$m = ["modelValue"];
  const _hoisted_2$g = /* @__PURE__ */ vue.createElementVNode("span", { class: "znpb-radio-item-input" }, null, -1);
  const _hoisted_3$b = {
    key: 0,
    class: "znpb-radio-item-label"
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("label", {
      class: vue.normalizeClass(["znpb-radio-item", {
        "znpb-radio-item--active": $options.isSelected,
        "znpb-radio-item--hidden-input": $props.hideInput
      }])
    }, [
      vue.withDirectives(vue.createElementVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.radioButtonValue = $event),
        modelValue: $props.optionValue,
        type: "radio",
        class: "znpb-form__input-toggle"
      }, null, 8, _hoisted_1$m), [
        [vue.vModelRadio, $options.radioButtonValue]
      ]),
      _hoisted_2$g,
      vue.renderSlot(_ctx.$slots, "default"),
      $props.label ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$b, vue.toDisplayString($props.label), 1)) : vue.createCommentVNode("", true)
    ], 2);
  }
  const InputRadio = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$3]]);
  const InputRadioIcon_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$q = {
    name: "InputRadioIcon",
    components: {
      Icon: _sfc_main$1z
    },
    props: {
      /**
       * Value of the radio input
       */
      modelValue: {
        type: String,
        required: false
      },
      /**
       * Label for each radio
       */
      label: {
        type: String,
        required: false
      },
      /**
       * Value received
       */
      optionValue: {
        type: String,
        required: true
      },
      /**
       * Icon name
       */
      icon: {
        type: String,
        required: false
      },
      bgSize: {
        type: Number,
        required: false,
        default: 32
      }
    },
    data() {
      return {
        checked: ""
      };
    },
    computed: {
      radioButtonValue: {
        get: function() {
          return this.modelValue;
        },
        set: function() {
          this.$emit("update:modelValue", this.optionValue);
        }
      },
      isSelected() {
        return this.modelValue === this.optionValue;
      }
    },
    methods: {}
  };
  const _hoisted_1$l = ["modelValue"];
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Icon = vue.resolveComponent("Icon");
    return vue.openBlock(), vue.createElementBlock("label", {
      class: vue.normalizeClass(["znpb-radio-icon-item", {
        "znpb-radio-icon-item--active": $options.isSelected
      }])
    }, [
      vue.withDirectives(vue.createElementVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.radioButtonValue = $event),
        modelValue: $props.optionValue,
        type: "radio",
        class: "znpb-form__input-toggle"
      }, null, 8, _hoisted_1$l), [
        [vue.vModelRadio, $options.radioButtonValue]
      ]),
      $props.icon ? (vue.openBlock(), vue.createBlock(_component_Icon, {
        key: 0,
        icon: $props.icon,
        "bg-size": $props.bgSize,
        class: "znpb-radio-icon-item__icon"
      }, null, 8, ["icon", "bg-size"])) : vue.createCommentVNode("", true),
      vue.createTextVNode(" " + vue.toDisplayString($props.label), 1)
    ], 2);
  }
  const InputRadioIcon = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$2]]);
  const _hoisted_1$k = ["innerHTML"];
  const __default__$i = {
    name: "SvgMask"
  };
  const _sfc_main$p = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$i), {
    props: {
      shapePath: {},
      position: {},
      color: {},
      flip: { type: Boolean }
    },
    setup(__props) {
      const props = __props;
      const masks = vue.inject("masks");
      const svgData = vue.ref("");
      const getSvgIcon = vue.computed(() => svgData.value);
      vue.watch(
        () => props.shapePath,
        (newValue) => {
          getFile(newValue);
        }
      );
      function getFile(shapePath) {
        let url;
        if (shapePath.includes(".svg")) {
          url = shapePath;
        } else {
          const shapeConfig = masks[shapePath];
          url = shapeConfig.url;
        }
        fetch(url).then((response) => response.text()).then((svgFile) => {
          svgData.value = svgFile;
        }).catch((error) => {
          console.error(error);
        });
      }
      vue.onMounted(() => {
        if (props.shapePath !== void 0 && props.shapePath.length) {
          getFile(props.shapePath);
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-shape-divider-icon zb-mask", [_ctx.position === "top" ? "zb-mask-pos--top" : "zb-mask-pos--bottom", _ctx.flip ? "zb-mask-pos--flip" : ""]]),
          style: vue.normalizeStyle({ color: _ctx.color }),
          innerHTML: getSvgIcon.value
        }, null, 14, _hoisted_1$k);
      };
    }
  }));
  const __default__$h = {
    name: "InputShapeDividers"
  };
  const _sfc_main$o = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$h), {
    props: {
      modelValue: { default: () => {
        return {};
      } }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const maskPosOptions = vue.ref([
        {
          id: "top",
          name: i18n__namespace.__("Top masks", "zionbuilder")
        },
        {
          id: "bottom",
          name: i18n__namespace.__("Bottom masks", "zionbuilder")
        }
      ]);
      const activeMaskPosition = vue.ref("top");
      const computedTitle = vue.computed(() => {
        return activeMaskPosition.value === "top" ? i18n__namespace.__("Selected top mask", "zionbuilder") : i18n__namespace.__("Selected bottom mask", "zionbuilder");
      });
      const schema = vue.computed(() => {
        return {
          shape: {
            type: "shape_component",
            id: "shape",
            width: "100",
            title: computedTitle.value,
            position: activeMaskPosition.value
          },
          color: {
            type: "colorpicker",
            id: "color",
            width: "100",
            title: i18n__namespace.__("Add a color to mask", "zionbuilder")
          },
          height: {
            type: "dynamic_slider",
            id: "height",
            title: i18n__namespace.__("Add mask height", "zionbuilder"),
            width: "100",
            responsive_options: true,
            options: [
              { unit: "px", min: 0, max: 4999, step: 1 },
              { unit: "%", min: 0, max: 100, step: 1 },
              { unit: "vh", min: 0, max: 100, step: 10 },
              { unit: "auto" }
            ]
          },
          flip: {
            type: "checkbox_switch",
            id: "flip",
            title: i18n__namespace.__("Flip mask horizontally", "zionbuilder"),
            width: "100",
            layout: "inline"
          }
        };
      });
      const computedValue = vue.computed({
        get() {
          var _a2, _b;
          return (_b = (_a2 = props.modelValue) == null ? void 0 : _a2[activeMaskPosition.value]) != null ? _b : {};
        },
        set(newValue) {
          if (newValue === null) {
            emit("update:modelValue", null);
            return;
          }
          const shape = get(props.modelValue, `${activeMaskPosition.value}.shape`);
          if (shape !== newValue["shape"] && newValue["height"]) {
            newValue["height"] = "auto";
          }
          emit("update:modelValue", __spreadProps(__spreadValues({}, props.modelValue), {
            [activeMaskPosition.value]: newValue
          }));
        }
      });
      return (_ctx, _cache) => {
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createVNode(vue.unref(_sfc_main$y), {
            modelValue: activeMaskPosition.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeMaskPosition.value = $event),
            options: maskPosOptions.value,
            columns: 2
          }, null, 8, ["modelValue", "options"]),
          vue.createVNode(_component_OptionsForm, {
            modelValue: computedValue.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => computedValue.value = $event),
            schema: schema.value
          }, null, 8, ["modelValue", "schema"])
        ]);
      };
    }
  }));
  const InputShapeDividers_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$j = { class: "znpb-editor-shapeWrapper" };
  const __default__$g = {
    name: "Shape"
  };
  const _sfc_main$n = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$g), {
    props: {
      shapePath: {},
      position: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$j, [
          vue.renderSlot(_ctx.$slots, "default"),
          _ctx.shapePath ? (vue.openBlock(), vue.createBlock(_sfc_main$p, {
            key: 0,
            "shape-path": _ctx.shapePath,
            position: _ctx.position
          }, null, 8, ["shape-path", "position"])) : vue.createCommentVNode("", true)
        ]);
      };
    }
  }));
  const Shape_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$i = { class: "znpb-option__upgrade-to-pro" };
  const _hoisted_2$f = { class: "znpb-option__upgrade-to-pro-container" };
  const _hoisted_3$a = ["href"];
  const _hoisted_4$6 = {
    href: "https://zionbuilder.io/",
    target: "_blank",
    class: "znpb-button znpb-get-pro__cta znpb-button--secondary znpb-option__upgrade-to-pro-button"
  };
  const __default__$f = {
    name: "UpgradeToPro"
  };
  const _sfc_main$m = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$f), {
    props: {
      message_title: { default: "" },
      message_description: { default: "" },
      info_text: { default: "" },
      info_link: { default: "https://zionbuilder.io/documentation/pro-version/" }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$i, [
          vue.createElementVNode("div", _hoisted_2$f, [
            vue.createVNode(_sfc_main$X, {
              text: i18n__namespace.__("pro", "zionbuilder"),
              type: "warning",
              class: "znpb-option__upgrade-to-pro-label"
            }, null, 8, ["text"]),
            vue.createElementVNode("h4", null, vue.toDisplayString(_ctx.message_title), 1),
            vue.createElementVNode("p", null, vue.toDisplayString(_ctx.message_description), 1),
            _ctx.info_text ? (vue.openBlock(), vue.createElementBlock("a", {
              key: 0,
              href: _ctx.info_link,
              target: "_blank"
            }, vue.toDisplayString(_ctx.info_text), 9, _hoisted_3$a)) : vue.createCommentVNode("", true),
            vue.createElementVNode("div", null, [
              vue.createElementVNode("a", _hoisted_4$6, vue.toDisplayString(i18n__namespace.__("Upgrade to PRO", "zionbuilder")), 1)
            ])
          ])
        ]);
      };
    }
  }));
  const UpgradeToPro_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$h = { class: "znpb-shape-list znpb-fancy-scrollbar" };
  const __default__$e = {
    name: "ShapeDividerComponent"
  };
  const _sfc_main$l = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$e), {
    props: {
      position: {},
      modelValue: {}
    },
    emits: ["update:modelValue"],
    setup(__props) {
      const showDelete = vue.ref(false);
      const masks = vue.inject("masks");
      const isPro = window.ZBCommonData.environment.plugin_pro.is_active;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createVNode(_sfc_main$n, {
            class: vue.normalizeClass(["znpb-active-shape-preview", [{ "mask-active": _ctx.modelValue }]]),
            "shape-path": _ctx.modelValue,
            position: _ctx.position
          }, {
            default: vue.withCtx(() => [
              !_ctx.modelValue ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1h), {
                key: 0,
                class: "znpb-style-shape__empty",
                "no-margin": true
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(i18n__namespace.__("Select shape divider", "zionbuilder")), 1)
                ]),
                _: 1
              })) : (vue.openBlock(), vue.createElementBlock("span", {
                key: 1,
                class: "znpb-active-shape-preview__action",
                onMouseover: _cache[1] || (_cache[1] = ($event) => showDelete.value = true),
                onMouseleave: _cache[2] || (_cache[2] = ($event) => showDelete.value = false)
              }, [
                vue.createVNode(vue.Transition, {
                  name: "slide-fade",
                  mode: "out-in"
                }, {
                  default: vue.withCtx(() => [
                    !showDelete.value ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
                      key: "1",
                      icon: "check",
                      size: 10
                    })) : (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1z), {
                      key: "2",
                      icon: "close",
                      size: 10,
                      onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => (_ctx.$emit("update:modelValue", null), showDelete.value = false), ["stop"]))
                    }))
                  ]),
                  _: 1
                })
              ], 32))
            ]),
            _: 1
          }, 8, ["shape-path", "class", "position"]),
          vue.createElementVNode("div", _hoisted_1$h, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(masks), (shape, shapeID) => {
              return vue.openBlock(), vue.createBlock(_sfc_main$n, {
                key: shapeID,
                "shape-path": shapeID,
                position: _ctx.position,
                onClick: ($event) => _ctx.$emit("update:modelValue", shapeID)
              }, null, 8, ["shape-path", "position", "onClick"]);
            }), 128)),
            !vue.unref(isPro) ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$m), {
              key: 0,
              message_title: i18n__namespace.__("More shape dividers", "zionbuilder"),
              message_description: i18n__namespace.__("The shape you were looking for is not listed above ?", "zionbuilder"),
              info_text: i18n__namespace.__("Click here to learn more about PRO.", "zionbuilder")
            }, null, 8, ["message_title", "message_description", "info_text"])) : vue.createCommentVNode("", true)
          ])
        ]);
      };
    }
  }));
  const ShapeDividerComponent_vue_vue_type_style_index_0_lang = "";
  const __default__$d = {
    name: "InputTextAlign"
  };
  const _sfc_main$k = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$d), {
    props: {
      modelValue: {},
      placeholder: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const textAlignOptions = [
        {
          icon: "align--left",
          id: "left",
          name: i18n__namespace.__("Align left", "zionbuilder")
        },
        {
          icon: "align--center",
          id: "center",
          name: i18n__namespace.__("Align center", "zionbuilder")
        },
        {
          icon: "align--right",
          id: "right",
          name: i18n__namespace.__("Align right", "zionbuilder")
        },
        {
          icon: "align--justify",
          id: "justify",
          name: i18n__namespace.__("Justify", "zionbuilder")
        }
      ];
      const textAlignModel = vue.computed({
        get() {
          return props.modelValue || "";
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createVNode(vue.unref(_sfc_main$y), {
            modelValue: textAlignModel.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => textAlignModel.value = $event),
            placeholder: _ctx.placeholder,
            options: textAlignOptions,
            columns: 4
          }, null, 8, ["modelValue", "placeholder"])
        ]);
      };
    }
  }));
  const __default__$c = {
    name: "InputTextShadow"
  };
  const _sfc_main$j = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$c), {
    props: {
      modelValue: { default: () => {
        return {};
      } },
      inset: { type: Boolean },
      shadow_type: { default: "text-shadow" },
      placeholder: { default: () => {
        return {};
      } }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const { getSchema } = useOptionsSchemas();
      const schema = vue.computed(() => {
        let schema2 = getSchema("shadowSchema");
        if (props.shadow_type === "text-shadow") {
          schema2 = omit$1(schema2, ["inset", "spread"]);
        }
        if (Object.keys(props.placeholder).length > 0) {
          Object.keys(schema2).forEach((singleSchemaID) => {
            const singleSchema = schema2[singleSchemaID];
            if (typeof props.placeholder[singleSchemaID] !== "undefined") {
              singleSchema.placeholder = props.placeholder[singleSchemaID];
            }
          });
        }
        return schema2;
      });
      const valueModel = vue.computed({
        get() {
          return props.modelValue || {};
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      return (_ctx, _cache) => {
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-shadow-option-wrapper__outer", `znpb-shadow-option--${_ctx.shadow_type}`])
        }, [
          vue.createVNode(_component_OptionsForm, {
            modelValue: valueModel.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => valueModel.value = $event),
            schema: schema.value,
            class: "znpb-shadow-option"
          }, null, 8, ["modelValue", "schema"])
        ], 2);
      };
    }
  }));
  const InputTextShadow_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$g = { class: "znpb-radio-image-container" };
  const _hoisted_2$e = { class: "znpb-radio-image-wrapper znpb-fancy-scrollbar" };
  const _hoisted_3$9 = ["onClick"];
  const _hoisted_4$5 = ["src"];
  const _hoisted_5$4 = {
    key: 0,
    class: "znpb-radio-image-list__item-name"
  };
  const _hoisted_6$2 = {
    key: 0,
    class: "znpb-radio-image-search--noItems"
  };
  const _hoisted_7$1 = { class: "znpb-radio-image-preview" };
  const _hoisted_8$1 = ["src"];
  const _hoisted_9$1 = {
    key: 1,
    class: "znpb-radio-image-noImage"
  };
  const __default__$b = {
    name: "InputRadioImage"
  };
  const _sfc_main$i = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$b), {
    props: {
      modelValue: {},
      options: {},
      columns: { default: 3 },
      useSearch: { type: Boolean, default: true },
      searchText: { default: () => {
        return i18n__namespace.__("Search", "zionbuilder");
      } }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const searchKeyword = vue.ref("");
      const selectedOptionData = vue.computed(() => {
        return props.options.find((option) => option.value === props.modelValue);
      });
      const visibleItems = vue.computed(() => {
        if (searchKeyword.value.length > 0) {
          return props.options.filter(
            (option) => option.name && option.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
          );
        }
        return props.options;
      });
      function changeValue(newValue) {
        emit("update:modelValue", newValue);
      }
      return (_ctx, _cache) => {
        const _component_BaseInput = vue.resolveComponent("BaseInput");
        const _component_Tooltip = vue.resolveComponent("Tooltip");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$g, [
          vue.createVNode(_component_Tooltip, {
            "close-on-outside-click": true,
            trigger: "click",
            placement: "bottom",
            "show-arrows": true
          }, {
            content: vue.withCtx(() => [
              _ctx.useSearch ? (vue.openBlock(), vue.createBlock(_component_BaseInput, {
                key: 0,
                modelValue: searchKeyword.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchKeyword.value = $event),
                placeholder: _ctx.searchText,
                clearable: true,
                class: "znpb-radio-image-search"
              }, null, 8, ["modelValue", "placeholder"])) : vue.createCommentVNode("", true),
              vue.createElementVNode("div", _hoisted_2$e, [
                vue.createElementVNode("ul", {
                  class: vue.normalizeClass(["znpb-radio-image-list", [`znpb-radio-image-list--columns-${_ctx.columns}`]])
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(visibleItems.value, (option, index2) => {
                    return vue.openBlock(), vue.createElementBlock("li", {
                      key: index2,
                      class: "znpb-radio-image-list__item-wrapper",
                      onClick: ($event) => changeValue(option.value)
                    }, [
                      vue.createElementVNode("div", {
                        class: vue.normalizeClass(["znpb-radio-image-list__item", { ["znpb-radio-image-list__item--active"]: _ctx.modelValue === option.value }])
                      }, [
                        option.image ? (vue.openBlock(), vue.createElementBlock("img", {
                          key: 0,
                          src: option.image,
                          class: "znpb-image-wrapper"
                        }, null, 8, _hoisted_4$5)) : vue.createCommentVNode("", true),
                        option.class ? (vue.openBlock(), vue.createElementBlock("span", {
                          key: 1,
                          class: vue.normalizeClass(["znpb-radio-image-list__preview-element animated", option.value])
                        }, null, 2)) : vue.createCommentVNode("", true),
                        option.icon ? (vue.openBlock(), vue.createBlock(_sfc_main$1z, {
                          key: 2,
                          class: "znpb-radio-image-list__icon",
                          icon: option.icon
                        }, null, 8, ["icon"])) : vue.createCommentVNode("", true)
                      ], 2),
                      option.name ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5$4, vue.toDisplayString(option.name), 1)) : vue.createCommentVNode("", true)
                    ], 8, _hoisted_3$9);
                  }), 128)),
                  _ctx.useSearch && visibleItems.value.length === 0 ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_6$2, vue.toDisplayString(i18n__namespace.__("No items found", "zionbuilder")), 1)) : vue.createCommentVNode("", true)
                ], 2)
              ])
            ]),
            default: vue.withCtx(() => [
              vue.createElementVNode("div", _hoisted_7$1, [
                selectedOptionData.value ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                  vue.createElementVNode("img", {
                    src: selectedOptionData.value.image,
                    class: "znpb-image-wrapper"
                  }, null, 8, _hoisted_8$1),
                  selectedOptionData.value.class ? (vue.openBlock(), vue.createElementBlock("span", {
                    key: 0,
                    class: vue.normalizeClass(["znpb-radio-image-list__preview-element animated", selectedOptionData.value.value])
                  }, null, 2)) : vue.createCommentVNode("", true),
                  selectedOptionData.value.icon ? (vue.openBlock(), vue.createBlock(_sfc_main$1z, {
                    key: 1,
                    class: "znpb-radio-image-list__icon",
                    icon: selectedOptionData.value.icon
                  }, null, 8, ["icon"])) : vue.createCommentVNode("", true)
                ], 64)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_9$1))
              ])
            ]),
            _: 1
          })
        ]);
      };
    }
  }));
  const InputRadioImage_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$f = { class: "znpb-repeaterOptionTitle" };
  const _hoisted_2$d = { class: "znpb-repeaterOptionActions" };
  const __default__$a = {
    name: "RepeaterOption"
  };
  const _sfc_main$h = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$a), {
    props: {
      modelValue: { default: () => {
        return {};
      } },
      schema: {},
      propertyIndex: { default: 0 },
      item_title: {},
      default_item_title: { default: i18n__namespace.__("Item %s", "zionbuilder") },
      deletable: { type: Boolean, default: true },
      clonable: { type: Boolean, default: true }
    },
    emits: ["update:modelValue", "clone-option", "delete-option"],
    setup(__props, { emit }) {
      const props = __props;
      const expanded = vue.ref(false);
      const selectedOptionModel = vue.computed({
        get() {
          return props.modelValue;
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      const title = vue.computed(() => {
        if (props.item_title && selectedOptionModel.value && selectedOptionModel.value[props.item_title]) {
          return selectedOptionModel.value[props.item_title];
        }
        return props.default_item_title.replace("%s", props.propertyIndex + 1);
      });
      function cloneOption() {
        const clone = JSON.parse(JSON.stringify(props.modelValue));
        emit("clone-option", clone);
      }
      function deleteOption(propertyIndex) {
        emit("delete-option", propertyIndex);
      }
      function onItemChange(newValues, index2) {
        emit("update:modelValue", { newValues, index: index2 });
      }
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["znpb-repeaterOptionWrapper", { "znpb-repeaterOptionWrapper--expanded": expanded.value }])
        }, [
          vue.createElementVNode("div", {
            class: "znpb-repeaterOptionHeader",
            onClick: _cache[1] || (_cache[1] = ($event) => expanded.value = !expanded.value)
          }, [
            vue.createElementVNode("div", _hoisted_1$f, vue.toDisplayString(title.value), 1),
            vue.createElementVNode("div", _hoisted_2$d, [
              _ctx.clonable ? vue.withDirectives((vue.openBlock(), vue.createBlock(_component_Icon, {
                key: 0,
                class: "znpb-option-repeater-selector__clone-icon",
                icon: "copy",
                onClick: vue.withModifiers(cloneOption, ["stop"])
              }, null, 8, ["onClick"])), [
                [_directive_znpb_tooltip, i18n__namespace.__("Clone", "zionbuilder")]
              ]) : vue.createCommentVNode("", true),
              _ctx.deletable ? vue.withDirectives((vue.openBlock(), vue.createBlock(_component_Icon, {
                key: 1,
                class: "znpb-option-repeater-selector__delete-icon",
                icon: "delete",
                onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => deleteOption(_ctx.propertyIndex), ["stop"]))
              }, null, 512)), [
                [_directive_znpb_tooltip, i18n__namespace.__("Delete", "zionbuilder")]
              ]) : vue.createCommentVNode("", true),
              vue.createVNode(_component_Icon, {
                icon: "right-arrow",
                rotate: expanded.value ? 90 : 0
              }, null, 8, ["rotate"])
            ])
          ]),
          vue.createVNode(_component_OptionsForm, {
            schema: _ctx.schema,
            modelValue: selectedOptionModel.value,
            class: "znpb-repeaterOptionContent",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => onItemChange($event, _ctx.propertyIndex))
          }, null, 8, ["schema", "modelValue"])
        ], 2);
      };
    }
  }));
  const RepeaterOption_vue_vue_type_style_index_0_lang = "";
  const __default__$9 = {
    name: "Repeater"
  };
  const _sfc_main$g = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$9), {
    props: {
      modelValue: {},
      addable: { type: Boolean, default: true },
      deletable: { type: Boolean, default: true },
      clonable: { type: Boolean, default: true },
      maxItems: {},
      add_button_text: { default: () => {
        return i18n__namespace.__("Add new", "zionbuilder");
      } },
      child_options: {},
      item_title: {},
      default_item_title: {},
      add_template: {}
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const sortableItems = vue.computed({
        get() {
          return props.modelValue || [];
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      const showButton = vue.computed(() => {
        return props.maxItems ? props.addable && sortableItems.value.length < props.maxItems : props.addable;
      });
      const checkClonable = vue.computed(() => {
        return !props.addable ? false : !props.maxItems ? props.clonable : sortableItems.value.length < props.maxItems;
      });
      function onItemChange(payload) {
        const { index: index2, newValues } = payload;
        let copiedValues = [...sortableItems.value];
        let clonedNewValue = newValues;
        if (newValues === null) {
          clonedNewValue = [];
        }
        copiedValues[index2] = clonedNewValue;
        emit("update:modelValue", copiedValues);
      }
      function addProperty() {
        var _a2;
        const clone = [...sortableItems.value];
        const newItem = (_a2 = props.add_template) != null ? _a2 : {};
        clone.push(newItem);
        emit("update:modelValue", clone);
      }
      function cloneOption(event2, index2) {
        if (props.maxItems && props.addable && sortableItems.value.length < props.maxItems || props.maxItems === void 0) {
          const repeaterClone = [...sortableItems.value];
          repeaterClone.splice(index2, 0, event2);
          emit("update:modelValue", repeaterClone);
        }
      }
      function deleteOption(optionIndex) {
        let copiedValues = [...sortableItems.value];
        copiedValues.splice(optionIndex, 1);
        emit("update:modelValue", copiedValues);
      }
      return (_ctx, _cache) => {
        const _component_Button = vue.resolveComponent("Button");
        const _component_Sortable = vue.resolveComponent("Sortable");
        return vue.openBlock(), vue.createBlock(_component_Sortable, {
          modelValue: sortableItems.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sortableItems.value = $event),
          class: "znpb-option-repeater",
          handle: ".znpb-horizontal-accordion > .znpb-horizontal-accordion__header"
        }, {
          end: vue.withCtx(() => [
            showButton.value ? (vue.openBlock(), vue.createBlock(_component_Button, {
              key: 0,
              class: "znpb-option-repeater__add-button",
              type: "line",
              onClick: addProperty
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(_ctx.add_button_text), 1)
              ]),
              _: 1
            })) : vue.createCommentVNode("", true)
          ]),
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(sortableItems.value, (item, index2) => {
              return vue.openBlock(), vue.createBlock(_sfc_main$h, {
                key: index2,
                ref_for: true,
                ref: "repeaterItem",
                schema: _ctx.child_options,
                modelValue: item,
                "property-index": index2,
                item_title: _ctx.item_title,
                default_item_title: _ctx.default_item_title,
                deletable: !_ctx.addable ? false : _ctx.deletable,
                clonable: checkClonable.value,
                onCloneOption: ($event) => cloneOption($event, index2),
                onDeleteOption: deleteOption,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => onItemChange($event))
              }, null, 8, ["schema", "modelValue", "property-index", "item_title", "default_item_title", "deletable", "clonable", "onCloneOption"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]);
      };
    }
  }));
  const Repeater_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$e = { class: "znpb-loader-wrapper" };
  const __default__$8 = {
    name: "Loader"
  };
  const _sfc_main$f = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$8), {
    props: {
      size: { default: 24 }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$e, [
          vue.createElementVNode("div", {
            class: "znpb-loader",
            style: vue.normalizeStyle({
              height: `${_ctx.size}px`,
              width: `${_ctx.size}px`
            })
          }, null, 4)
        ]);
      };
    }
  }));
  const Loader_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$d = { class: "znpb-cornerLoaderWrapper" };
  const _hoisted_2$c = {
    key: 0,
    class: "znpb-admin__options-save-loader"
  };
  const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
    __name: "CornerLoader",
    props: {
      isLoading: { type: Boolean }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$d, [
          vue.createVNode(vue.Transition, { name: "save" }, {
            default: vue.withCtx(() => [
              _ctx.isLoading ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$c, [
                vue.createVNode(_component_Icon, { icon: "check" })
              ])) : vue.createCommentVNode("", true)
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  const CornerLoader_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$c = { class: "znpb-notices-wrapper" };
  const _hoisted_2$b = {
    key: 0,
    class: "znpb-notice__title"
  };
  const _hoisted_3$8 = { class: "znpb-notice__message" };
  const __default__$7 = {
    name: "Notice"
  };
  const _sfc_main$d = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$7), {
    props: {
      error: {}
    },
    emits: ["close-notice"],
    setup(__props, { emit }) {
      const props = __props;
      function hideOnEscape(event2) {
        if (event2.key === "Escape") {
          emit("close-notice");
          event2.preventDefault();
          document.removeEventListener("keydown", hideOnEscape);
        }
      }
      vue.onMounted(() => {
        var _a2;
        const delay = (_a2 = props.error.delayClose) != null ? _a2 : 5e3;
        if (delay !== 0) {
          setTimeout(() => {
            emit("close-notice");
          }, delay);
        }
        document.addEventListener("keydown", hideOnEscape);
      });
      vue.onBeforeUnmount(() => {
        document.removeEventListener("keydown", hideOnEscape);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.Transition, {
          appear: "",
          name: "move"
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_1$c, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass(["znpb-notice", `znpb-notice--${_ctx.error.type || "success"}`])
              }, [
                vue.createVNode(vue.unref(_sfc_main$1z), {
                  class: "znpb-notice__close",
                  icon: "close",
                  size: 12,
                  onClick: _cache[0] || (_cache[0] = ($event) => emit("close-notice"))
                }),
                _ctx.error.title ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$b, vue.toDisplayString(_ctx.error.title), 1)) : vue.createCommentVNode("", true),
                vue.createElementVNode("div", _hoisted_3$8, vue.toDisplayString(_ctx.error.message), 1)
              ], 2)
            ])
          ]),
          _: 1
        });
      };
    }
  }));
  const Notice_vue_vue_type_style_index_0_lang = "";
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
  class LibraryItem {
    constructor(item, librarySource) {
      __publicField(this, "id", "");
      __publicField(this, "name", "");
      __publicField(this, "category", []);
      __publicField(this, "thumbnail", "");
      __publicField(this, "data", "");
      __publicField(this, "tags", []);
      __publicField(this, "urls", {});
      __publicField(this, "type", "");
      __publicField(this, "source", "");
      __publicField(this, "url", "");
      __publicField(this, "pro", false);
      __publicField(this, "loadingThumbnail", false);
      __publicField(this, "loading", false);
      // Source related
      __publicField(this, "librarySource");
      Object.assign(this, item);
      this.librarySource = librarySource;
    }
    delete() {
      this.loading = true;
      return this.librarySource.removeItem(this).finally(() => {
        this.loading = false;
      });
    }
    export() {
      this.loading = true;
      return exportLibraryItem(this.librarySource.id, this.id).then((response) => {
        const blob = new Blob([response.data], { type: "application/zip" });
        FileSaver_minExports.saveAs(blob, `${this.name}.zip`);
      }).finally(() => {
        this.loading = false;
      });
    }
    saveThumbnailData(data) {
      saveLibraryItemThumbnail(this.librarySource.id, this.id, data).finally(() => {
        this.librarySource.deleteCache();
      });
    }
    getBuilderData() {
      return getLibraryItemBuilderConfig(this.librarySource.id, this.id);
    }
    toJSON() {
      return {
        id: this.id,
        name: this.name,
        category: this.category,
        thumbnail: this.thumbnail,
        data: this.data,
        tags: this.tags,
        urls: this.urls,
        type: this.type,
        pro: this.pro,
        url: this.url
      };
    }
  }
  var ls = {
    set: function(variable, value, ttl_ms) {
      var data = { value, expires_at: (/* @__PURE__ */ new Date()).getTime() + ttl_ms / 1 };
      localStorage.setItem(variable.toString(), JSON.stringify(data));
    },
    get: function(variable) {
      var data = JSON.parse(localStorage.getItem(variable.toString()));
      if (data !== null) {
        if (data.expires_at !== null && data.expires_at < (/* @__PURE__ */ new Date()).getTime()) {
          localStorage.removeItem(variable.toString());
        } else {
          return data.value;
        }
      }
      return null;
    }
  };
  var localstorageTtl = ls;
  const localSt = /* @__PURE__ */ getDefaultExportFromCjs(localstorageTtl);
  class LibrarySource {
    constructor(librarySource) {
      __publicField(this, "name", "");
      __publicField(this, "id", "");
      __publicField(this, "url", "");
      __publicField(this, "request_headers", []);
      __publicField(this, "use_cache", false);
      __publicField(this, "items", []);
      __publicField(this, "categories", []);
      __publicField(this, "loading", false);
      __publicField(this, "loaded", false);
      __publicField(this, "type", "remote");
      Object.assign(this, librarySource);
    }
    /**
     * Fetches the data from the server or from local cache
     *
     * @param useCache boolean True in case you want to use the local cache or not
     * @returns void
     */
    getData(useCache = true) {
      if (this.loaded && useCache) {
        return;
      } else if (useCache && this.use_cache && localSt.get(`znpbLibraryCache_${this.id}`)) {
        const savedData = localSt.get(`znpbLibraryCache_${this.id}`);
        if (savedData) {
          const { items, categories } = savedData;
          this.categories = categories;
          this.setItems(items);
          this.loaded = true;
        }
      } else {
        this.loading = true;
        fetch(this.url, {
          headers: this.request_headers
        }).then((response) => {
          return response.json().then((data) => {
            if (!response.ok) {
              const { add } = useNotificationsStore();
              if (data == null ? void 0 : data.message) {
                add({
                  message: data.message,
                  type: "error",
                  delayClose: 5e3
                });
              }
              return;
            }
            const { categories = {}, items = [] } = data;
            this.categories = Object.values(categories);
            this.setItems(items);
            this.loaded = true;
            if (this.use_cache) {
              this.saveToCache(Object.values(categories), items);
            }
          });
        }).finally(() => {
          this.loading = false;
        });
      }
    }
    setItems(items) {
      this.items = items.map((item) => new LibraryItem(item, this));
    }
    removeItem(item) {
      const index2 = this.items.indexOf(item);
      this.items.splice(index2, 1);
      this.deleteCache();
    }
    /**
     * Adds a new item to this source
     *
     * @param item The Object containing item data
     * @returns {LibraryItem} The library item instance
     */
    addItem(item) {
      this.items.push(new LibraryItem(item, this));
      this.deleteCache();
    }
    saveToCache(categories, items) {
      localSt.set(
        `znpbLibraryCache_${this.id}`,
        {
          categories,
          items
        },
        6048e5
      );
    }
    deleteCache() {
      localStorage.removeItem(`znpbLibraryCache_${this.id}`.toString());
    }
  }
  class LocalLibrary extends LibrarySource {
    importItem(templateData) {
      this.loading = true;
      return importLibraryItem(this.id, templateData).then((response) => {
        this.addItem(response.data);
        return Promise.resolve(response);
      }).finally(() => {
        this.loading = false;
      });
    }
    removeItem(item) {
      return deleteLibraryItem(this.id, item.id).then((response) => {
        super.removeItem(item);
        return Promise.resolve(response);
      });
    }
    createItem(item) {
      this.loading = true;
      return addLibraryItem(this.id, item).then((response) => {
        if (response.data) {
          this.addItem(response.data);
        }
        return Promise.resolve(response);
      }).finally(() => {
        this.loading = false;
      });
    }
  }
  const activeElement = vue.ref(null);
  const librarySources = vue.ref({});
  const useLibrary = () => {
    function getElementForInsert() {
      const { element, config } = activeElement.value;
      const { placement = "inside" } = config;
      if (placement === "inside" && (element.isWrapper || element.element_type === "contentRoot")) {
        return {
          element
        };
      } else {
        const index2 = element.getIndexInParent() + 1;
        return {
          element: element.parent,
          index: index2
        };
      }
    }
    function insertElement(newElement) {
      const { element, index: index2 = -1 } = getElementForInsert();
      newElement = Array.isArray(newElement) ? newElement : [newElement];
      element.addChildren(newElement, index2);
    }
    function addSources(sources) {
      Object.keys(sources).forEach((sourceID) => {
        addSource(sources[sourceID]);
      });
    }
    function getSourceType(sourceType) {
      const { applyFilters: applyFilters2 } = window.zb.hooks;
      const sourceTypes = applyFilters2("zionbuilder/library/sourceTypes", {
        local: LocalLibrary
      });
      return typeof sourceTypes[sourceType] !== "undefined" ? sourceTypes[sourceType] : LibrarySource;
    }
    function addSource(source) {
      const sourceType = getSourceType(source.type);
      librarySources.value[source.id] = new sourceType(source);
    }
    function getSource(sourceID) {
      return librarySources.value[sourceID];
    }
    return {
      activeElement,
      insertElement,
      // Methods
      addSources,
      addSource,
      getSource,
      // Refs
      librarySources
    };
  };
  const units = [
    "auto",
    "fit-content",
    "inherit",
    "initial",
    "max-content",
    "min-content",
    "unset",
    "normal",
    "left",
    "right",
    "top",
    "bottom",
    "center"
  ];
  const _hoisted_1$b = { class: "znpb-optSpacing-margin" };
  const _hoisted_2$a = ["onMouseenter"];
  const _hoisted_3$7 = { class: "znpb-optSpacing-labelWrapper" };
  const _hoisted_4$4 = /* @__PURE__ */ vue.createElementVNode("span", { class: "znpb-optSpacing-label" }, "Margin", -1);
  const _hoisted_5$3 = { class: "znpb-optSpacing-padding" };
  const _hoisted_6$1 = ["onMouseenter"];
  const _hoisted_7 = { class: "znpb-optSpacing-labelWrapper" };
  const _hoisted_8 = /* @__PURE__ */ vue.createElementVNode("span", { class: "znpb-optSpacing-label" }, "Padding", -1);
  const _hoisted_9 = { class: "znpb-optSpacing-info" };
  const __default__$6 = {
    name: "InputSpacing"
  };
  const _sfc_main$c = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$6), {
    props: {
      modelValue: { default: () => {
        return {};
      } },
      placeholder: { default: () => {
        return {};
      } }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const marginPositionId = [
        {
          position: "margin-top",
          type: "margin",
          title: i18n__namespace.__("Margin top", "zionbuilder"),
          svg: {
            cursor: "n-resize",
            d: "M0 0h320l-50 36H50L0 0Z"
          },
          dragDirection: "vertical"
        },
        {
          position: "margin-right",
          type: "margin",
          title: i18n__namespace.__("Margin right", "zionbuilder"),
          svg: {
            cursor: "e-resize",
            d: "m320 183-50-36V39l50-36v180Z"
          },
          dragDirection: "horizontal"
        },
        {
          position: "margin-bottom",
          type: "margin",
          title: i18n__namespace.__("Margin bottom", "zionbuilder"),
          svg: {
            cursor: "s-resize",
            d: "M50 150h220l50 36H0l50-36Z"
          },
          dragDirection: "vertical"
        },
        {
          position: "margin-left",
          type: "margin",
          title: i18n__namespace.__("Margin left", "zionbuilder"),
          svg: {
            cursor: "w-resize",
            d: "m0 3 50 36v108L0 183V3Z"
          },
          dragDirection: "horizontal"
        }
      ];
      const paddingPositionId = [
        {
          position: "padding-top",
          type: "padding",
          title: i18n__namespace.__("Padding top", "zionbuilder"),
          svg: {
            cursor: "n-resize",
            d: "M0 0h214l-50 36H50L0 0Z"
          },
          dragDirection: "vertical"
        },
        {
          position: "padding-right",
          type: "padding",
          title: i18n__namespace.__("Padding right", "zionbuilder"),
          svg: {
            cursor: "e-resize",
            d: "m214 105-50-36V39l50-36v102Z"
          },
          dragDirection: "horizontal"
        },
        {
          position: "padding-bottom",
          type: "padding",
          title: i18n__namespace.__("Padding bottom", "zionbuilder"),
          svg: {
            cursor: "s-resize",
            d: "M214 108H0l50-36h114l50 36Z"
          },
          dragDirection: "vertical"
        },
        {
          position: "padding-left",
          type: "padding",
          title: i18n__namespace.__("Padding left", "zionbuilder"),
          svg: {
            cursor: "w-resize",
            d: "m0 3 50 36v30L0 105V3Z"
          },
          dragDirection: "horizontal"
        }
      ];
      const allowedValues = [...marginPositionId, ...paddingPositionId].map((position) => position.position);
      const oppositeChange = vue.ref(false);
      const activeHover = vue.ref(null);
      const lastChanged = vue.ref(null);
      function onDiscardChanges(position) {
        const clonedModelValue = __spreadValues({}, props.modelValue);
        delete clonedModelValue[position];
        emit("update:modelValue", clonedModelValue);
      }
      const computedValues = vue.computed({
        get() {
          const values = {};
          Object.keys(props.modelValue).forEach((optionId) => {
            if (allowedValues.includes(optionId)) {
              values[optionId] = props.modelValue[optionId];
            }
          });
          return values;
        },
        set(newValues) {
          emit("update:modelValue", newValues);
        }
      });
      function onValueUpdated(sizePosition, type, newValue) {
        const isLinked2 = type === "margin" ? linkedMargin : linkedPadding;
        lastChanged.value = {
          position: sizePosition,
          type
        };
        if (isLinked2.value) {
          const valuesToUpdate = type === "margin" ? marginPositionId : paddingPositionId;
          const updatedValues = {};
          valuesToUpdate.forEach((position) => updatedValues[position.position] = newValue);
          computedValues.value = __spreadValues(__spreadValues({}, props.modelValue), updatedValues);
        } else {
          const oppositePosition = getReversedPosition(sizePosition);
          const newValues = __spreadProps(__spreadValues({}, props.modelValue), {
            [sizePosition]: newValue
          });
          if (oppositeChange.value) {
            newValues[oppositePosition] = newValue;
          }
          computedValues.value = newValues;
        }
      }
      function getReversedPosition(position) {
        const typeAndPosition = position.split(/-/);
        const positionLocation = typeAndPosition[1];
        let reversePositionLocation;
        switch (positionLocation) {
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
        return `${typeAndPosition[0]}-${reversePositionLocation}`;
      }
      const linkedMargin = vue.ref(isLinked("margin"));
      const linkedPadding = vue.ref(isLinked("padding"));
      function linkValues(type) {
        const valueToChange = type === "margin" ? linkedMargin : linkedPadding;
        valueToChange.value = !valueToChange.value;
        if (valueToChange.value) {
          if (lastChanged.value && lastChanged.value.type === type) {
            onValueUpdated(lastChanged.value.position, type, computedValues.value[lastChanged.value.position]);
          } else {
            const valuesToCheck = type === "margin" ? marginPositionId : paddingPositionId;
            const savedValueConfig = valuesToCheck.find(
              (positionConfig) => computedValues.value[positionConfig.position] !== "undefined"
            );
            if (savedValueConfig) {
              onValueUpdated(savedValueConfig.position, type, computedValues.value[savedValueConfig.position]);
            }
          }
        }
      }
      function isLinked(type) {
        const valuesToCheck = type === "margin" ? marginPositionId : paddingPositionId;
        return valuesToCheck.every((position) => {
          return computedValues.value[position.position] && computedValues.value[position.position] === computedValues.value[`${type}-top`];
        });
      }
      function checkForOppositeChange(e) {
        const controlKey = window.navigator.userAgent.indexOf("Macintosh") >= 0 ? "metaKey" : "ctrlKey";
        if (e[controlKey]) {
          oppositeChange.value = true;
        }
      }
      return (_ctx, _cache) => {
        const _component_ChangesBullet = vue.resolveComponent("ChangesBullet");
        const _component_Icon = vue.resolveComponent("Icon");
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "znpb-optSpacing",
          onKeydown: checkForOppositeChange,
          onKeyup: _cache[4] || (_cache[4] = ($event) => oppositeChange.value = false)
        }, [
          vue.createElementVNode("div", _hoisted_1$b, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(marginPositionId, (position) => {
              return vue.createElementVNode("div", {
                key: position.position,
                class: vue.normalizeClass([{
                  [`znpb-optSpacing-${position.position}`]: true
                }, "znpb-optSpacing-value znpb-optSpacing-value--margin"]),
                onMouseenter: ($event) => activeHover.value = position,
                onMouseleave: _cache[0] || (_cache[0] = ($event) => activeHover.value = null)
              }, [
                vue.createVNode(vue.unref(_sfc_main$1p), {
                  "model-value": computedValues.value[position.position],
                  units: ["px", "rem", "pt", "vh", "%"],
                  step: 1,
                  "default-unit": "px",
                  placeholder: _ctx.placeholder && typeof _ctx.placeholder[position.position] !== "undefined" ? _ctx.placeholder[position.position] : "-",
                  "onUpdate:modelValue": ($event) => onValueUpdated(position.position, "margin", $event)
                }, null, 8, ["model-value", "placeholder", "onUpdate:modelValue"]),
                computedValues.value[position.position] ? (vue.openBlock(), vue.createBlock(_component_ChangesBullet, {
                  key: 0,
                  content: i18n__namespace.__("Discard changes", "zionbuilder"),
                  onRemoveStyles: ($event) => onDiscardChanges(position.position)
                }, null, 8, ["content", "onRemoveStyles"])) : vue.createCommentVNode("", true)
              ], 42, _hoisted_2$a);
            }), 64)),
            vue.createElementVNode("div", _hoisted_3$7, [
              _hoisted_4$4,
              vue.createVNode(_component_Icon, {
                icon: linkedMargin.value ? "link" : "unlink",
                title: linkedMargin.value ? i18n__namespace.__("Unlink", "zionbuilder") : i18n__namespace.__("Link", "zionbuilder"),
                size: 12,
                class: vue.normalizeClass(["znpb-optSpacing-link", {
                  "znpb-optSpacing-link--linked": linkedMargin.value
                }]),
                onClick: _cache[1] || (_cache[1] = ($event) => linkValues("margin"))
              }, null, 8, ["icon", "title", "class"])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_5$3, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(paddingPositionId, (position) => {
              return vue.createElementVNode("div", {
                key: position.position,
                class: vue.normalizeClass([{
                  [`znpb-optSpacing-${position.position}`]: true
                }, "znpb-optSpacing-value znpb-optSpacing-value--padding"]),
                onMouseenter: ($event) => activeHover.value = position,
                onMouseleave: _cache[2] || (_cache[2] = ($event) => activeHover.value = null)
              }, [
                vue.createVNode(vue.unref(_sfc_main$1p), {
                  "model-value": computedValues.value[position.position],
                  units: ["px", "rem", "pt", "vh", "%"],
                  step: 1,
                  "default-unit": "px",
                  min: 0,
                  placeholder: _ctx.placeholder && typeof _ctx.placeholder[position.position] !== "undefined" ? _ctx.placeholder[position.position] : "-",
                  "onUpdate:modelValue": ($event) => onValueUpdated(position.position, "padding", $event)
                }, null, 8, ["model-value", "placeholder", "onUpdate:modelValue"]),
                computedValues.value[position.position] ? (vue.openBlock(), vue.createBlock(_component_ChangesBullet, {
                  key: 0,
                  content: i18n__namespace.__("Discard changes", "zionbuilder"),
                  onRemoveStyles: ($event) => onDiscardChanges(position.position)
                }, null, 8, ["content", "onRemoveStyles"])) : vue.createCommentVNode("", true)
              ], 42, _hoisted_6$1);
            }), 64)),
            vue.createElementVNode("div", _hoisted_7, [
              _hoisted_8,
              vue.createVNode(_component_Icon, {
                icon: linkedPadding.value ? "link" : "unlink",
                title: linkedPadding.value ? i18n__namespace.__("Unlink", "zionbuilder") : i18n__namespace.__("Link", "zionbuilder"),
                size: 12,
                class: vue.normalizeClass(["znpb-optSpacing-link", {
                  "znpb-optSpacing-link--linked": linkedPadding.value
                }]),
                onClick: _cache[3] || (_cache[3] = ($event) => linkValues("padding"))
              }, null, 8, ["icon", "title", "class"])
            ])
          ]),
          vue.createElementVNode("span", _hoisted_9, vue.toDisplayString(activeHover.value ? activeHover.value.title : ""), 1)
        ], 32);
      };
    }
  }));
  const InputSpacing_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$a = { class: "znpb-dimensions-wrapper" };
  const _hoisted_2$9 = {
    key: 0,
    class: "znpb-dimensions_icon"
  };
  const _hoisted_3$6 = {
    key: 2,
    class: "znpb-dimensions__center"
  };
  const __default__$5 = {
    name: "InputDimensions"
  };
  const _sfc_main$b = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$5), {
    props: {
      modelValue: { default() {
        return {};
      } },
      dimensions: {},
      min: { default: 0 },
      max: { default: Infinity },
      placeholder: { default() {
        return {};
      } }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const linked = vue.ref(false);
      const computedDimensions = vue.computed(() => {
        return [
          ...props.dimensions,
          {
            name: "link",
            id: "link"
          }
        ];
      });
      function handleLinkValues() {
        linked.value = !linked.value;
        if (linked.value) {
          const dimensionsIDs = props.dimensions.map((dimension) => dimension.id);
          const savedPositionValue = Object.keys(props.modelValue).find(
            (position) => dimensionsIDs.includes(position) && typeof props.modelValue[position] !== "undefined"
          );
          if (savedPositionValue) {
            onValueUpdated("", props.modelValue[savedPositionValue]);
          }
        }
      }
      function onValueUpdated(position, newValue) {
        if (linked.value) {
          const valuesToUpdate = props.dimensions.filter((dimension) => {
            return dimension.id !== "link";
          });
          let values = {};
          valuesToUpdate.forEach((value) => {
            values[value.id] = newValue;
          });
          emit("update:modelValue", __spreadValues(__spreadValues({}, props.modelValue), values));
        } else {
          emit("update:modelValue", __spreadProps(__spreadValues({}, props.modelValue), {
            [position]: newValue
          }));
        }
      }
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$a, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(computedDimensions.value, (dimension, i) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: i,
              class: vue.normalizeClass(["znpb-dimension", `znpb-dimension--${i}`])
            }, [
              dimension.name !== "link" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$9, [
                vue.createVNode(_component_Icon, {
                  icon: dimension.icon
                }, null, 8, ["icon"])
              ])) : vue.createCommentVNode("", true),
              dimension.name !== "link" ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1p), {
                key: 1,
                "model-value": _ctx.modelValue[dimension.id],
                title: dimension.id,
                min: _ctx.min,
                max: _ctx.max,
                step: 1,
                placeholder: _ctx.placeholder ? _ctx.placeholder[dimension.id] : "",
                "onUpdate:modelValue": ($event) => onValueUpdated(dimension.id, $event),
                onLinkedValue: handleLinkValues
              }, null, 8, ["model-value", "title", "min", "max", "placeholder", "onUpdate:modelValue"])) : vue.createCommentVNode("", true),
              dimension.name === "link" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$6, [
                vue.createVNode(_component_Icon, {
                  icon: linked.value ? "link" : "unlink",
                  title: linked.value ? "Unlink" : "Link",
                  class: vue.normalizeClass(["znpb-dimensions__link", { ["znpb-dimensions__link--linked"]: linked.value }]),
                  onClick: handleLinkValues
                }, null, 8, ["icon", "title", "class"])
              ])) : vue.createCommentVNode("", true)
            ], 2);
          }), 128))
        ]);
      };
    }
  }));
  const InputDimensions_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$9 = ["innerHTML"];
  const __default__$4 = {
    name: "HTML"
  };
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$4), {
    props: {
      content: { default: "" }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "znpb-option__html",
          innerHTML: _ctx.content
        }, null, 8, _hoisted_1$9);
      };
    }
  }));
  const _hoisted_1$8 = { class: "znpb-link-optionsAttribute" };
  const _hoisted_2$8 = { class: "znpb-link-optionsAttributeDelete znpb-link-optionsAttributeField" };
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    __name: "LinkAttributeForm",
    props: {
      attributeConfig: {},
      canDelete: { type: Boolean, default: true }
    },
    emits: ["update-attribute", "delete"],
    setup(__props, { emit }) {
      const props = __props;
      const computedModel = vue.computed({
        get() {
          return props.attributeConfig;
        },
        set(newValue) {
          emit("update-attribute", newValue);
        }
      });
      const schema = {
        key: {
          type: "text",
          placeholder: i18n__namespace.__("Attribute key", "zionbuilder"),
          width: 50,
          id: "key"
        },
        value: {
          type: "text",
          placeholder: i18n__namespace.__("Attribute value", "zionbuilder"),
          width: 50,
          id: "value"
        }
      };
      return (_ctx, _cache) => {
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        const _component_Icon = vue.resolveComponent("Icon");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$8, [
          vue.createVNode(_component_OptionsForm, {
            modelValue: computedModel.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => computedModel.value = $event),
            class: "znpb-link--optionsForm",
            schema,
            "enable-dynamic-data": true,
            "no-space": true
          }, null, 8, ["modelValue"]),
          vue.createElementVNode("div", _hoisted_2$8, [
            vue.createVNode(_component_Icon, {
              icon: "delete",
              class: vue.normalizeClass({ "znpb-link-optionsAttributeDelete--disabled": !_ctx.canDelete }),
              onClick: _cache[1] || (_cache[1] = ($event) => emit("delete", _ctx.attributeConfig))
            }, null, 8, ["class"])
          ])
        ]);
      };
    }
  });
  const LinkAttributeForm_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$7 = {
    key: 1,
    class: "znpb-menuList znpb-mh-200 znpb-fancy-scrollbar"
  };
  const _hoisted_2$7 = ["onClick"];
  const _hoisted_3$5 = { class: "znpb-link-options" };
  const _hoisted_4$3 = { class: "znpb-link-options-title" };
  const _hoisted_5$2 = { class: "znpb-link-optionsAttributes" };
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    __name: "InputLink",
    props: {
      modelValue: { default: () => {
        return {};
      } },
      title: { default: "" },
      show_title: { type: Boolean, default: true },
      show_target: { type: Boolean, default: true }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const { applyFilters: applyFilters2 } = window.zb.hooks;
      const targetOptions = [
        {
          id: "_blank",
          name: i18n__namespace.__("New Window", "zionbuilder")
        },
        {
          id: "_self",
          name: i18n__namespace.__("Same Window", "zionbuilder")
        }
      ];
      const rootRef = vue.ref(null);
      const urlInput = vue.ref(null);
      const canShowSearchTooltip = vue.ref(false);
      const popperRef = vue.ref(false);
      const isSearchLoading = vue.ref(false);
      const showResults = vue.ref(false);
      const searchResults = vue.ref([]);
      const linkURLComponent = vue.computed(() => {
        return applyFilters2("zionbuilder/options/link/url_component", "BaseInput", props.modelValue);
      });
      const computedModel = vue.computed({
        get() {
          return props.modelValue || {};
        },
        set(newValue) {
          emit("update:modelValue", newValue);
        }
      });
      const targetTitleSchema = {
        target: {
          type: "select",
          label: i18n__namespace.__("Target", "zionbuilder"),
          options: targetOptions,
          width: 50,
          default: "_self",
          id: "target"
        },
        title: {
          type: "text",
          label: i18n__namespace.__("Title", "zionbuilder"),
          width: 50,
          id: "title"
        }
      };
      const linkModel = vue.computed({
        get() {
          return props.modelValue && props.modelValue.link ? props.modelValue.link : "";
        },
        set(newValue) {
          emit("update:modelValue", __spreadProps(__spreadValues({}, props.modelValue), {
            link: newValue
          }));
        }
      });
      vue.computed({
        get() {
          return props.modelValue && props.modelValue["target"] ? props.modelValue["target"] : "_self";
        },
        set(newValue) {
          emit("update:modelValue", __spreadProps(__spreadValues({}, props.modelValue), {
            target: newValue
          }));
        }
      });
      vue.computed({
        get() {
          return props.modelValue && props.modelValue["title"] ? props.modelValue["title"] : "";
        },
        set(newValue) {
          emit("update:modelValue", __spreadProps(__spreadValues({}, props.modelValue), {
            title: newValue
          }));
        }
      });
      const linkAttributes = vue.computed({
        get() {
          const attributes = get(props.modelValue, "attributes");
          if (Array.isArray(attributes) && attributes.length > 0) {
            return attributes;
          } else {
            return [
              {
                key: "",
                value: ""
              }
            ];
          }
        },
        set(newValue) {
          emit("update:modelValue", __spreadProps(__spreadValues({}, props.modelValue), {
            attributes: newValue
          }));
        }
      });
      function addLinkAttribute() {
        linkAttributes.value = [
          ...linkAttributes.value,
          {
            key: "",
            value: ""
          }
        ];
      }
      function deleteAttribute(index2) {
        const clone = [...linkAttributes.value];
        clone.splice(index2, 1);
        linkAttributes.value = clone;
      }
      function onAttributeUpdate(index2, attribute) {
        const clone = [...linkAttributes.value];
        clone.splice(index2, 1, attribute);
        linkAttributes.value = clone;
      }
      vue.watchEffect(
        () => {
          canShowSearchTooltip.value = linkURLComponent.value === "BaseInput";
          if (urlInput.value) {
            popperRef.value = urlInput.value.input;
          }
        },
        {
          flush: "post"
        }
      );
      vue.watch(linkModel, (newValue) => {
        if (newValue.length > 2 && newValue.indexOf("htt") === -1 && newValue.indexOf("#") !== 0) {
          searchPostDebounced();
        }
        if (newValue.length === 0) {
          showResults.value = false;
        }
      });
      const searchPostDebounced = debounce$1(() => {
        searchPost();
      }, 300);
      function searchPost() {
        const keyword = linkModel.value;
        const requester = window.zb.editor.serverRequest;
        isSearchLoading.value = true;
        requester.request(
          {
            type: "search_posts",
            config: {
              keyword
            }
          },
          (response) => {
            isSearchLoading.value = false;
            showResults.value = true;
            searchResults.value = response.data;
          },
          function(message) {
            console.error(message);
          }
        );
      }
      function onSearchItemClick(url) {
        linkModel.value = url;
        showResults.value = false;
      }
      return (_ctx, _cache) => {
        const _component_Loader = vue.resolveComponent("Loader");
        const _component_Icon = vue.resolveComponent("Icon");
        const _component_Tooltip = vue.resolveComponent("Tooltip");
        const _component_Injection = vue.resolveComponent("Injection");
        const _component_InputWrapper = vue.resolveComponent("InputWrapper");
        const _component_OptionsForm = vue.resolveComponent("OptionsForm");
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return vue.openBlock(), vue.createElementBlock("div", {
          ref_key: "rootRef",
          ref: rootRef,
          class: "znpb-link-wrapper"
        }, [
          vue.createVNode(_component_InputWrapper, { layout: "full" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_Tooltip, {
                show: showResults.value,
                "onUpdate:show": _cache[1] || (_cache[1] = ($event) => showResults.value = $event),
                placement: "bottom",
                "append-to": "element",
                strategy: "fixed",
                "show-arrows": false,
                trigger: null,
                "close-on-outside-click": true,
                "tooltip-class": "hg-popper--no-padding",
                class: "znpb-optionLinkTooltip"
              }, {
                content: vue.withCtx(() => [
                  isSearchLoading.value ? (vue.openBlock(), vue.createBlock(_component_Loader, {
                    key: 0,
                    size: 14
                  })) : (vue.openBlock(), vue.createElementBlock("ul", _hoisted_1$7, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(searchResults.value, (post, index2) => {
                      return vue.openBlock(), vue.createElementBlock("li", {
                        key: index2,
                        class: "znpb-menuListItem",
                        onClick: ($event) => onSearchItemClick(post.url)
                      }, vue.toDisplayString(post.post_title), 9, _hoisted_2$7);
                    }), 128))
                  ]))
                ]),
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(linkURLComponent.value), {
                    ref_key: "urlInput",
                    ref: urlInput,
                    modelValue: linkModel.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => linkModel.value = $event),
                    placeholder: i18n__namespace.__("Type to search or enter URL", "zionbuilder"),
                    spellcheck: "false"
                  }, {
                    prepend: vue.withCtx(() => [
                      isSearchLoading.value ? (vue.openBlock(), vue.createBlock(_component_Loader, {
                        key: 0,
                        size: 14
                      })) : (vue.openBlock(), vue.createBlock(_component_Icon, {
                        key: 1,
                        icon: "link"
                      }))
                    ]),
                    append: vue.withCtx(() => [
                      vue.createVNode(_component_Tooltip, {
                        trigger: "click",
                        "close-on-outside-click": true,
                        "tooltip-class": "znpb-link-optionsTooltip",
                        placement: "bottom",
                        class: "znpb-flex znpb-flex--vcenter"
                      }, {
                        content: vue.withCtx(() => [
                          vue.createElementVNode("div", _hoisted_3$5, [
                            vue.createElementVNode("div", _hoisted_4$3, vue.toDisplayString(i18n__namespace.__("Link attributes", "zionbuilder")), 1),
                            vue.createElementVNode("div", _hoisted_5$2, [
                              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(linkAttributes.value, (attribute, index2) => {
                                return vue.openBlock(), vue.createBlock(_sfc_main$9, {
                                  key: index2,
                                  "attribute-config": attribute,
                                  onUpdateAttribute: ($event) => onAttributeUpdate(index2, $event),
                                  onDelete: ($event) => deleteAttribute(index2)
                                }, null, 8, ["attribute-config", "onUpdateAttribute", "onDelete"]);
                              }), 128)),
                              vue.createElementVNode("div", {
                                class: "znpb-link-optionsAttributesAdd",
                                onClick: addLinkAttribute
                              }, [
                                vue.createVNode(_component_Icon, { icon: "plus" }),
                                vue.createTextVNode(),
                                vue.createElementVNode("span", null, vue.toDisplayString(i18n__namespace.__("Add custom link attribute", "zionbuilder")), 1)
                              ])
                            ])
                          ])
                        ]),
                        default: vue.withCtx(() => [
                          vue.withDirectives(vue.createVNode(_component_Icon, { icon: "tags-attributes" }, null, 512), [
                            [_directive_znpb_tooltip, i18n__namespace.__("Edit link attributes", "zionbuilder")]
                          ])
                        ]),
                        _: 1
                      }),
                      vue.createVNode(_component_Injection, { location: "options/link/append" })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"]))
                ]),
                _: 1
              }, 8, ["show"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_OptionsForm, {
            modelValue: computedModel.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => computedModel.value = $event),
            class: "znpb-link--optionsForm",
            schema: targetTitleSchema,
            "enable-dynamic-data": true,
            "no-space": true
          }, null, 8, ["modelValue"])
        ], 512);
      };
    }
  });
  const InputLink_vue_vue_type_style_index_0_lang = "";
  const options = [
    {
      id: "text",
      component: _sfc_main$1w,
      dynamic: {
        type: "TEXT"
      }
    },
    {
      id: "textarea",
      component: _sfc_main$1w,
      componentProps: {
        type: "textarea"
      },
      dynamic: {
        type: "TEXT"
      }
    },
    {
      id: "editor",
      component: _sfc_main$v,
      dynamic: {
        type: "TEXT"
      }
    },
    {
      id: "number",
      component: _sfc_main$1r,
      dynamic: {
        type: "TEXT"
      }
    },
    {
      id: "box_model",
      component: _sfc_main$H
    },
    {
      id: "colorpicker",
      component: _sfc_main$z,
      dynamic: {
        type: "TYPE_HIDDEN"
      }
    },
    {
      id: "link",
      component: _sfc_main$8
    },
    {
      id: "icon_library",
      component: _sfc_main$S,
      config: {
        // Can be one of the following
        barebone: true
      }
    },
    {
      id: "password",
      componentProps: {
        type: "password"
      },
      component: _sfc_main$1w
    },
    {
      id: "select",
      component: _sfc_main$11
    },
    {
      id: "slider",
      component: _sfc_main$18
    },
    {
      id: "dynamic_slider",
      component: _sfc_main$17
    },
    {
      id: "media",
      component: _sfc_main$u,
      dynamic: {
        type: "TEXT"
      }
    },
    {
      id: "file",
      component: _sfc_main$t
    },
    {
      id: "image",
      component: _sfc_main$O
    },
    {
      id: "number_unit",
      component: _sfc_main$1p
    },
    {
      id: "code",
      component: _sfc_main$D
    },
    {
      id: "custom_selector",
      component: _sfc_main$y
    },
    {
      id: "checkbox",
      component: _sfc_main$G
    },
    {
      id: "radio_image",
      component: _sfc_main$i
    },
    {
      id: "checkbox_group",
      component: _sfc_main$F
    },
    {
      id: "checkbox_switch",
      component: _sfc_main$E
    },
    {
      id: "text_align",
      component: _sfc_main$k
    },
    {
      id: "borders",
      component: _sfc_main$K
    },
    {
      id: "shadow",
      component: _sfc_main$j
    },
    {
      id: "video",
      component: _sfc_main$M
    },
    {
      id: "date_input",
      component: _sfc_main$w
    },
    {
      id: "shape_dividers",
      component: _sfc_main$o
    },
    {
      id: "shape_component",
      component: _sfc_main$l
    },
    {
      id: "spacing",
      component: _sfc_main$c
    },
    {
      id: "repeater",
      component: _sfc_main$g
    },
    {
      id: "upgrade_to_pro",
      component: _sfc_main$m
    },
    {
      id: "dimensions",
      component: _sfc_main$b
    },
    {
      id: "html",
      component: _sfc_main$a
    }
  ];
  const useOptions = () => {
    const { applyFilters: applyFilters2 } = window.zb.hooks;
    const getOption = (schema, model = null, formModel = {}) => {
      let optionConfig = options.find((option) => option.id === schema.type);
      optionConfig = applyFilters2("zionbuilder/getOptionConfig", optionConfig, schema, model, formModel);
      if (!optionConfig) {
        console.warn(
          `Option type ${schema.type} not found. Please register the option type using ZionBuilderApi.options.registerOption!`
        );
        return null;
      }
      return optionConfig;
    };
    const getOptionComponent = (schema, model = null, formModel = {}) => {
      const optionConfig = getOption(schema.type);
      return applyFilters2("zionbuilder/getOption", optionConfig == null ? void 0 : optionConfig.component, schema, model, formModel);
    };
    const registerOption = (optionConfig) => {
      if (!Object.prototype.hasOwnProperty.call(optionConfig, "id")) {
        console.warn("You need to specify the option type id.", optionConfig);
      }
      if (!Object.prototype.hasOwnProperty.call(optionConfig, "component")) {
        console.warn("You need to specify the option type id.", optionConfig);
      }
      options.push(optionConfig);
    };
    return {
      registerOption,
      getOptionComponent,
      getOption
    };
  };
  const deviceSizesConfig = [
    {
      width: 992,
      icon: "laptop"
    },
    {
      width: 768,
      icon: "tablet"
    },
    {
      width: 575,
      icon: "mobile"
    }
  ];
  const activeResponsiveDeviceId = vue.ref("default");
  const responsiveDevices = vue.ref(window.ZBCommonData.breakpoints);
  const activeResponsiveOptions = vue.ref(null);
  const iframeWidth = vue.ref(0);
  const autoScaleActive = vue.ref(true);
  const scaleValue = vue.ref(100);
  const ignoreWidthChangeFlag = vue.ref(false);
  const orderedResponsiveDevices = vue.computed(() => {
    return orderBy(responsiveDevices.value, ["width"], ["desc"]);
  });
  const responsiveDevicesAsIdWidth = vue.computed(() => {
    const devices = {};
    orderedResponsiveDevices.value.forEach((deviceConfig) => {
      devices[deviceConfig.id] = deviceConfig.width;
    });
    return devices;
  });
  const activeResponsiveDeviceInfo = vue.computed(
    () => responsiveDevices.value.find((device) => device.id === activeResponsiveDeviceId.value) || responsiveDevices.value[0]
  );
  const builtInResponsiveDevices = vue.computed(
    () => responsiveDevices.value.filter((deviceConfig) => deviceConfig.builtIn === true)
  );
  const mobileFirstResponsiveDevices = vue.computed(() => {
    const newDevices = {};
    let lastDeviceWidth = 0;
    const sortedDevices = Object.entries(responsiveDevicesAsIdWidth.value).sort((a, b) => a[1] > b[1] ? 1 : -1).reduce((acc, pair) => {
      acc[pair[0]] = pair[1];
      return acc;
    }, {});
    for (const [deviceId, deviceWidth] of Object.entries(sortedDevices)) {
      if (deviceId === "mobile") {
        newDevices[deviceId] = 0;
      } else {
        newDevices[deviceId] = lastDeviceWidth + 1;
      }
      if (deviceWidth) {
        lastDeviceWidth = deviceWidth;
      }
    }
    return newDevices;
  });
  const useResponsiveDevices = () => {
    function setActiveResponsiveDeviceId(device) {
      activeResponsiveDeviceId.value = device;
    }
    function setAutoScale(scaleEnabled) {
      autoScaleActive.value = scaleEnabled;
      if (scaleEnabled) {
        scaleValue.value = 100;
      }
    }
    function setCustomScale(newValue) {
      scaleValue.value = newValue;
    }
    function setActiveResponsiveOptions(instanceConfig) {
      activeResponsiveOptions.value = instanceConfig;
    }
    function getActiveResponsiveOptions() {
      return activeResponsiveOptions.value;
    }
    function removeActiveResponsiveOptions() {
      activeResponsiveOptions.value = null;
    }
    function updateBreakpoint(device, newWidth) {
      return __async(this, null, function* () {
        const editedDevice = responsiveDevices.value.find((deviceData) => deviceData === device);
        if (editedDevice && editedDevice.width !== newWidth) {
          editedDevice.width = newWidth;
          yield saveDevices();
          const AssetsStore = useAssetsStore();
          yield AssetsStore.regenerateCache();
        }
      });
    }
    function saveDevices() {
      return saveBreakpoints(responsiveDevices.value);
    }
    function setCustomIframeWidth(newWidth, changeDevice = false) {
      const actualWidth = newWidth < 240 ? 240 : newWidth;
      if (newWidth && changeDevice) {
        let activeDevice = "default";
        responsiveDevices.value.forEach((device) => {
          if (device.width && device.width >= actualWidth) {
            activeDevice = device.id;
          }
        });
        if (activeDevice && activeDevice !== activeResponsiveDeviceId.value) {
          ignoreWidthChangeFlag.value = true;
          setActiveResponsiveDeviceId(activeDevice);
        }
      }
      iframeWidth.value = actualWidth;
    }
    function addCustomBreakpoint(breakPoint) {
      return __async(this, null, function* () {
        const { width, icon = "desktop" } = breakPoint;
        const newDeviceData = {
          width,
          icon,
          isCustom: true,
          id: generateUID()
        };
        responsiveDevices.value.push(newDeviceData);
        yield saveDevices();
        return newDeviceData;
      });
    }
    function deleteBreakpoint(breakpointID) {
      return __async(this, null, function* () {
        const deviceConfig = responsiveDevices.value.find((deviceConfig2) => deviceConfig2.id === breakpointID);
        if (deviceConfig) {
          const index2 = responsiveDevices.value.indexOf(deviceConfig);
          responsiveDevices.value.splice(index2, 1);
          yield saveDevices();
          const AssetsStore = useAssetsStore();
          yield AssetsStore.regenerateCache();
        }
      });
    }
    return {
      ignoreWidthChangeFlag,
      activeResponsiveDeviceId,
      activeResponsiveDeviceInfo,
      responsiveDevices,
      iframeWidth,
      autoScaleActive,
      scaleValue: vue.readonly(scaleValue),
      setActiveResponsiveDeviceId,
      removeActiveResponsiveOptions,
      getActiveResponsiveOptions,
      setActiveResponsiveOptions,
      setCustomIframeWidth,
      setCustomScale,
      setAutoScale,
      addCustomBreakpoint,
      deleteBreakpoint,
      updateBreakpoint,
      saveDevices,
      mobileFirstResponsiveDevices,
      deviceSizesConfig,
      // Computed
      responsiveDevicesAsIdWidth,
      orderedResponsiveDevices,
      builtInResponsiveDevices
    };
  };
  const pseudoSelectors = vue.ref([
    {
      name: "default",
      id: "default"
    },
    {
      name: ":hover",
      id: ":hover"
    },
    {
      name: ":before",
      id: ":before"
    },
    {
      name: ":after",
      id: ":after"
    },
    {
      name: ":active",
      id: ":active"
    },
    {
      name: ":focus",
      id: ":focus"
    },
    {
      name: ":custom",
      id: "custom"
    }
  ]);
  const activePseudoSelector = vue.ref(pseudoSelectors.value[0]);
  const usePseudoSelectors = () => {
    function setActivePseudoSelector(value) {
      activePseudoSelector.value = value || pseudoSelectors.value[0];
    }
    function deleteCustomSelector(selector) {
      const selectorIndex = pseudoSelectors.value.indexOf(selector);
      if (selectorIndex !== -1) {
        pseudoSelectors.value.splice(selectorIndex, 1);
        activePseudoSelector.value = pseudoSelectors.value[0];
      }
    }
    function addCustomSelector(selector) {
      pseudoSelectors.value.push(selector);
    }
    return {
      activePseudoSelector,
      pseudoSelectors,
      // Methods
      addCustomSelector,
      setActivePseudoSelector,
      deleteCustomSelector
    };
  };
  const composables = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    units,
    useInjections,
    useLibrary,
    useOptions,
    useOptionsSchemas,
    usePseudoSelectors,
    useResponsiveDevices
  }, Symbol.toStringTag, { value: "Module" }));
  const _hoisted_1$6 = {
    key: 0,
    class: "znpb-form__input-title"
  };
  const _hoisted_2$6 = ["innerHTML"];
  const _hoisted_3$4 = ["onClick"];
  const _hoisted_4$2 = ["onClick"];
  const _hoisted_5$1 = { class: "znpb-input-content" };
  const __default__$3 = {
    name: "OptionWrapper"
  };
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$3), {
    props: {
      modelValue: {},
      schema: {},
      optionId: {},
      search_tags: { default: () => [] },
      label: { default: void 0 },
      compilePlaceholder: { type: Function, default: (placeholder) => {
        return placeholder;
      } },
      width: { default: void 0 }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      const props = __props;
      const { getOption } = useOptions();
      const {
        deleteValueByPath,
        getTopModelValueByPath,
        updateTopModelValueByPath,
        deleteTopModelValueByPath,
        deleteValues,
        modelValue: allModelValue
      } = vue.inject("OptionsForm");
      const showChanges = vue.inject("showChanges");
      const { getSchema } = useOptionsSchemas();
      const { activeResponsiveDeviceInfo: activeResponsiveDeviceInfo2, builtInResponsiveDevices: builtInResponsiveDevices2, setActiveResponsiveDeviceId } = useResponsiveDevices();
      const activePseudo = vue.ref(null);
      const showDevices = vue.ref(false);
      const showPseudo = vue.ref(false);
      const optionTypeConfig = vue.ref({});
      const localSchema = vue.toRef(props, "schema");
      vue.provide("schema", vue.readonly(localSchema.value));
      const computedWrapperStyle = vue.computed(() => {
        const styles = {};
        if (props.schema.grow) {
          styles.flex = props.schema.grow;
        }
        if (props.schema.width) {
          styles.width = `${props.schema.width}%`;
        }
        return styles;
      });
      const computedShowTitle = vue.computed(() => {
        if (typeof props.schema.show_title !== "undefined") {
          return props.schema.show_title;
        }
        return true;
      });
      const activeResponsiveMedia = vue.computed(() => {
        return activeResponsiveDeviceInfo2.value.id;
      });
      const compiledSchema = vue.computed(() => {
        const _a2 = props.schema, {
          description,
          type,
          is_layout: isLayout,
          title,
          search_tags: searchTags,
          id,
          css_class: cssClass
        } = _a2, schema = __objRest(_a2, [
          "description",
          "type",
          "is_layout",
          "title",
          "search_tags",
          "id",
          "css_class"
        ]);
        const optionValueBind = {};
        if (optionValue.value !== void 0) {
          optionValueBind.modelValue = optionValue.value;
        }
        return __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, optionTypeConfig.value.componentProps || {}), schema), {
          hasChanges: !!hasChanges.value
        }), optionValueBind);
      });
      const savedOptionValue = vue.computed(() => {
        return props.schema.sync ? getTopModelValueByPath(props.compilePlaceholder(props.schema.sync)) : props.modelValue;
      });
      const hasChanges = vue.computed(() => {
        if (props.schema.is_layout) {
          const childOptionsIds = getChildOptionsIds(props.schema);
          const savedValues = childOptionsIds.find((optionId) => {
            const hasDynamicValue = get(props.modelValue, `__dynamic_content__[${optionId}]`);
            return (typeof savedOptionValue.value !== "undefined" && typeof savedOptionValue.value[optionId]) !== "undefined" || hasDynamicValue !== void 0;
          });
          return savedValues !== void 0 && savedValues.length > 0;
        } else {
          return typeof savedOptionValue.value !== "undefined" && savedOptionValue.value !== null;
        }
      });
      const optionValue = vue.computed({
        get() {
          let value = typeof savedOptionValue.value !== "undefined" ? savedOptionValue.value : props.schema.default;
          if (props.schema.responsive_options === true) {
            let schemaDefault = props.schema.default;
            if (typeof props.schema.default === "object") {
              schemaDefault = (props.schema.default || {})[activeResponsiveMedia.value];
            }
            if (value && typeof value !== "object") {
              value = {
                default: value
              };
            }
            value = typeof (value || {})[activeResponsiveMedia.value] !== "undefined" ? (value || {})[activeResponsiveMedia.value] : schemaDefault;
          }
          if (Array.isArray(props.schema.pseudo_options)) {
            const activePseudoValue = activePseudo.value || props.schema.pseudo_options[0];
            value = typeof (value || {})[activePseudoValue] !== "undefined" ? (value || {})[activePseudoValue] : void 0;
          }
          return value;
        },
        set(newValue) {
          let valueToUpdate = newValue;
          let newValues = newValue;
          if (Array.isArray(props.schema.pseudo_options)) {
            const activePseudoState = activePseudo.value || props.schema.pseudo_options[0];
            let oldValues = props.modelValue;
            if (props.schema.responsive_options === true) {
              oldValues = typeof (props.modelValue || {})[activeResponsiveMedia.value] !== "undefined" ? (props.modelValue || {})[activeResponsiveMedia.value] : void 0;
              newValues = __spreadProps(__spreadValues({}, oldValues), {
                [activePseudoState]: newValue
              });
            } else {
              valueToUpdate = __spreadProps(__spreadValues({}, props.modelValue), {
                [activePseudoState]: newValues
              });
            }
          }
          if (props.schema.responsive_options === true) {
            valueToUpdate = __spreadProps(__spreadValues({}, props.modelValue), {
              [activeResponsiveMedia.value]: newValues
            });
          }
          if (props.schema.sync) {
            const syncValuePath = props.compilePlaceholder(props.schema.sync);
            if (valueToUpdate === null) {
              deleteTopModelValueByPath(syncValuePath);
            } else {
              updateTopModelValueByPath(syncValuePath, valueToUpdate);
            }
          } else {
            if (valueToUpdate === null) {
              onDeleteOption();
            } else {
              const optionId = props.schema.is_layout ? false : props.optionId;
              emit("update:modelValue", [optionId, valueToUpdate]);
            }
          }
          if (props.schema.on_change) {
            if (props.schema.on_change === "refresh_iframe") {
              const { doAction: doAction2 } = window.zb.hooks;
              doAction2("refreshIframe");
            } else {
              window[props.schema.on_change].apply(null, [newValue]);
            }
          }
        }
      });
      const isValidInput = vue.computed(() => {
        return optionTypeConfig.value;
      });
      vue.watchEffect(() => {
        optionTypeConfig.value = vue.markRaw(getOption(props.schema, optionValue.value, allModelValue.value));
      });
      function openResponsive() {
        showDevices.value = true;
      }
      function closeResponsive() {
        showDevices.value = false;
      }
      function closePseudo() {
        showPseudo.value = false;
      }
      function openPseudo() {
        showPseudo.value = true;
      }
      function activateDevice(device) {
        setActiveResponsiveDeviceId(device.id);
        setTimeout(() => {
          showDevices.value = false;
        }, 50);
      }
      function activatePseudo(selector) {
        activePseudo.value = selector;
        setTimeout(() => {
          showPseudo.value = false;
        }, 50);
      }
      function getPseudoIcon(pseudo) {
        return pseudo === "hover" ? "hover-state" : "default-state";
      }
      function onDeleteOption(optionId = props.optionId) {
        if (props.schema.sync) {
          const fullOptionIds = [];
          const childOptionsIds = getChildOptionsIds(props.schema, false);
          const compiledSync = props.compilePlaceholder(props.schema.sync);
          if (childOptionsIds.length > 0) {
            childOptionsIds.forEach((id) => {
              fullOptionIds.push(`${compiledSync}.${id}`);
            });
          } else {
            fullOptionIds.push(compiledSync);
          }
          deleteValues(fullOptionIds);
          if (!props.schema.is_layout) {
            deleteTopModelValueByPath(compiledSync);
          }
        } else {
          if (props.schema.is_layout) {
            const childOptionsIds = getChildOptionsIds(props.schema);
            deleteValues(childOptionsIds);
          } else {
            deleteValueByPath(optionId);
          }
        }
      }
      function getChildOptionsIds(schema, includeSchemaId = true) {
        let ids = [];
        if (schema.type === "background") {
          const backgroundSchema = getSchema("backgroundImageSchema");
          Object.keys(backgroundSchema).forEach((optionId) => {
            const childIds = getChildOptionsIds(backgroundSchema[optionId]);
            if (childIds) {
              ids = [...ids, ...childIds, "background-color", "background-gradient", "background-video", "background-image"];
            }
          });
        } else if (schema.type === "dimensions" && typeof schema.dimensions === "object") {
          schema.dimensions.forEach((item) => {
            ids.push(item.id);
          });
        } else if (schema.type === "spacing") {
          const spacingPositions = [
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left"
          ];
          ids.push(...spacingPositions);
        } else if (schema.type === "box_model") {
          const { "position-type": positionType } = schema;
          const spacingPositions = [
            `${positionType}-top`,
            `${positionType}-right`,
            `${positionType}-bottom`,
            `${positionType}-left`
          ];
          ids.push(...spacingPositions);
        } else if (schema.type === "typography") {
          const typographySchema = getSchema("typography");
          Object.keys(typographySchema).forEach((optionId) => {
            const childIds = getChildOptionsIds(typographySchema[optionId]);
            if (childIds) {
              ids = [...ids, ...childIds];
            }
          });
        } else if (schema.type === "responsive_group") {
          ids.push(activeResponsiveMedia.value);
        } else if (schema.type === "pseudo_group") {
          ids.push(activePseudo.value);
        }
        if (schema.is_layout && schema.child_options) {
          Object.keys(schema.child_options).forEach((optionId) => {
            const childIds = getChildOptionsIds(schema.child_options[optionId]);
            if (childIds) {
              ids = [...ids, ...childIds];
            }
          });
        } else if (includeSchemaId) {
          ids.push(schema.id);
        }
        return ids;
      }
      vue.provide("inputWrapper", {
        schema: props.schema,
        hasChanges,
        optionId: props.optionId,
        optionTypeConfig
      });
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        const _directive_znpb_tooltip = vue.resolveDirective("znpb-tooltip");
        return isValidInput.value && (_ctx.schema.barebone || optionTypeConfig.value.config && optionTypeConfig.value.config.barebone) ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(optionTypeConfig.value.component), vue.mergeProps({ key: 0 }, compiledSchema.value, {
          title: _ctx.schema.title,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = (newValue) => optionValue.value = newValue),
          onDiscardChanges: onDeleteOption
        }), {
          default: vue.withCtx(() => [
            _ctx.schema.content ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              vue.createTextVNode(vue.toDisplayString(_ctx.schema.content), 1)
            ], 64)) : vue.createCommentVNode("", true)
          ]),
          _: 1
        }, 16, ["title"])) : isValidInput.value ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          class: vue.normalizeClass(["znpb-input-wrapper", {
            [`znpb-input-type--${_ctx.schema.type}`]: true,
            [`${_ctx.schema.css_class}`]: _ctx.schema.css_class,
            [`znpb-forms-input-wrapper--${_ctx.schema.layout}`]: _ctx.schema.layout
          }]),
          style: vue.normalizeStyle(computedWrapperStyle.value)
        }, [
          _ctx.schema.title && computedShowTitle.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [
            vue.createElementVNode("span", {
              innerHTML: _ctx.schema.title
            }, null, 8, _hoisted_2$6),
            vue.unref(showChanges) && hasChanges.value ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1u), {
              key: 0,
              content: i18n__namespace.__("Discard changes", "zionbuilder"),
              onRemoveStyles: onDeleteOption
            }, null, 8, ["content"])) : vue.createCommentVNode("", true),
            _ctx.schema.description ? vue.withDirectives((vue.openBlock(), vue.createBlock(_component_Icon, {
              key: 1,
              icon: "question-mark",
              class: "znpb-popper-trigger znpb-popper-trigger--circle"
            }, null, 512)), [
              [_directive_znpb_tooltip, _ctx.schema.description]
            ]) : vue.createCommentVNode("", true),
            _ctx.schema.pseudo_options ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1q), {
              key: 2,
              show: showPseudo.value,
              "close-on-outside-click": true,
              "show-arrows": false,
              "append-to": "element",
              trigger: null,
              onShow: openPseudo,
              onHide: closePseudo
            }, {
              content: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.schema.pseudo_options, (pseudo_selector, index2) => {
                  return vue.openBlock(), vue.createElementBlock("div", {
                    key: index2,
                    class: "znpb-has-pseudo-options__icon-button znpb-options-devices-buttons",
                    onClick: ($event) => activatePseudo(pseudo_selector)
                  }, [
                    vue.createVNode(_component_Icon, {
                      icon: getPseudoIcon(pseudo_selector)
                    }, null, 8, ["icon"])
                  ], 8, _hoisted_3$4);
                }), 128))
              ]),
              default: vue.withCtx(() => [
                vue.createElementVNode("div", {
                  class: "znpb-has-pseudo-options__icon-button znpb-options-devices-buttons znpb-has-responsive-options__icon-button--trigger",
                  onClick: _cache[1] || (_cache[1] = ($event) => showPseudo.value = !showPseudo.value)
                }, [
                  vue.createVNode(_component_Icon, {
                    icon: getPseudoIcon(activePseudo.value)
                  }, null, 8, ["icon"])
                ])
              ]),
              _: 1
            }, 8, ["show"])) : vue.createCommentVNode("", true),
            _ctx.schema.responsive_options || _ctx.schema.show_responsive_buttons ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1q), {
              key: 3,
              show: showDevices.value,
              "show-arrows": false,
              "append-to": "element",
              trigger: null,
              placement: "bottom",
              "tooltip-class": "znpb-has-responsive-options",
              "close-on-outside-click": true,
              onShow: openResponsive,
              onHide: closeResponsive
            }, {
              content: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(builtInResponsiveDevices2), (device, index2) => {
                  return vue.openBlock(), vue.createElementBlock("div", {
                    key: index2,
                    ref_for: true,
                    ref: "dropdown",
                    class: "znpb-options-devices-buttons znpb-has-responsive-options__icon-button",
                    onClick: ($event) => activateDevice(device)
                  }, [
                    vue.createVNode(_component_Icon, {
                      icon: device.icon
                    }, null, 8, ["icon"])
                  ], 8, _hoisted_4$2);
                }), 128))
              ]),
              default: vue.withCtx(() => [
                vue.createElementVNode("div", {
                  class: "znpb-has-responsive-options__icon-button--trigger",
                  onClick: _cache[2] || (_cache[2] = ($event) => showDevices.value = !showDevices.value)
                }, [
                  vue.createVNode(_component_Icon, {
                    icon: vue.unref(activeResponsiveDeviceInfo2).icon
                  }, null, 8, ["icon"])
                ])
              ]),
              _: 1
            }, 8, ["show"])) : vue.createCommentVNode("", true),
            vue.createVNode(vue.unref(_sfc_main$P), {
              location: "input_wrapper/end",
              class: "znpb-options-injection--after-title"
            }),
            vue.createVNode(vue.unref(_sfc_main$P), {
              location: `input_wrapper/end/${_ctx.schema.type}`,
              class: "znpb-options-injection--after-title"
            }, null, 8, ["location"])
          ])) : vue.createCommentVNode("", true),
          vue.createElementVNode("div", _hoisted_5$1, [
            _ctx.schema.itemIcon ? (vue.openBlock(), vue.createBlock(_component_Icon, {
              key: 0,
              icon: _ctx.schema.itemIcon
            }, null, 8, ["icon"])) : vue.createCommentVNode("", true),
            _ctx.schema.label || _ctx.schema["label-icon"] ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1o), {
              key: 1,
              label: _ctx.schema.label,
              align: _ctx.schema["label-align"],
              position: _ctx.schema["label-position"],
              title: _ctx.schema["label-title"],
              icon: _ctx.schema["label-icon"]
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(optionTypeConfig.value.component), vue.mergeProps(compiledSchema.value, {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = (newValue) => optionValue.value = newValue)
                }), {
                  default: vue.withCtx(() => [
                    _ctx.schema.content ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                      vue.createTextVNode(vue.toDisplayString(_ctx.schema.content), 1)
                    ], 64)) : vue.createCommentVNode("", true)
                  ]),
                  _: 1
                }, 16))
              ]),
              _: 1
            }, 8, ["label", "align", "position", "title", "icon"])) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(optionTypeConfig.value.component), vue.mergeProps({ key: 2 }, compiledSchema.value, {
              "onUpdate:modelValue": _cache[4] || (_cache[4] = (newValue) => optionValue.value = newValue)
            }), {
              default: vue.withCtx(() => [
                _ctx.schema.content ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                  vue.createTextVNode(vue.toDisplayString(_ctx.schema.content), 1)
                ], 64)) : vue.createCommentVNode("", true)
              ]),
              _: 1
            }, 16))
          ])
        ], 6)) : vue.createCommentVNode("", true);
      };
    }
  }));
  const OptionWrapper_vue_vue_type_style_index_0_lang = "";
  const OptionsForm_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$6 = {
    name: "OptionsForm",
    components: {
      OptionWrapper: _sfc_main$7
    },
    provide() {
      return {
        showChanges: this.showChanges,
        optionsForm: this
      };
    },
    props: {
      modelValue: {},
      schema: {
        type: Object,
        required: true
      },
      showChanges: {
        required: false,
        default: true
      },
      replacements: {
        type: Array,
        required: false,
        default: () => []
      },
      enableDynamicData: {
        type: Boolean,
        required: false,
        default: null
      },
      noSpace: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    setup(props, { emit }) {
      const parentOptionsForm = vue.inject("OptionsForm", null);
      const dynamicDataEnabled = vue.computed(() => {
        let enabled = false;
        if (null !== parentOptionsForm) {
          enabled = parentOptionsForm.dynamicDataEnabled.value;
        }
        if (null !== props.enableDynamicData) {
          enabled = props.enableDynamicData;
        }
        return enabled;
      });
      let topModelValue = vue.inject("OptionsFormTopModelValue", null);
      if (null === topModelValue) {
        topModelValue = vue.computed(() => props.modelValue);
        vue.provide("OptionsFormTopModelValue", () => topModelValue);
      }
      const { activeResponsiveDeviceInfo: activeResponsiveDeviceInfo2 } = useResponsiveDevices();
      const { activePseudoSelector: activePseudoSelector2 } = usePseudoSelectors();
      function updateTopModelValueByPath(path, newValue) {
        set(topModelValue.value, path, newValue);
      }
      function deleteTopModelValueByPath(path) {
        unset(topModelValue.value, path);
        deleteNested(path, topModelValue.value);
      }
      function getTopModelValueByPath(path, defaultValue = void 0) {
        return get(topModelValue.value, path, defaultValue);
      }
      const getValueByPath = (path, defaultValue = null) => {
        return get(props.modelValue, path, defaultValue);
      };
      const updateValueByPath = (path, newValue) => {
        const clonedValue = cloneDeep(props.modelValue);
        set(clonedValue, path, newValue);
        emit("update:modelValue", clonedValue);
      };
      function deleteNestedEmptyObjects(paths, object) {
        paths.forEach((path) => {
          const remainingPaths = paths.slice(1, paths.length);
          if (typeof object[path] === "object") {
            object[path] = deleteNestedEmptyObjects(remainingPaths, object[path]);
            if (Object.keys(object[path]).length === 0) {
              delete object[path];
            }
          }
        });
        return object;
      }
      function deleteNested(path, model) {
        const paths = path.split(".");
        paths.pop();
        deleteNestedEmptyObjects(paths, model);
      }
      const deleteValueByPath = (path) => {
        const clonedValue = cloneDeep(props.modelValue);
        unset(clonedValue, path);
        deleteNested(path, clonedValue);
        if (Object.keys(clonedValue).length > 0) {
          emit("update:modelValue", clonedValue);
        } else {
          emit("update:modelValue", null);
        }
      };
      function deleteValues(allPaths) {
        const newValues = __spreadValues({}, props.modelValue);
        allPaths.forEach((path) => {
          const paths = path.split(".");
          paths.reduce((acc, key, index2) => {
            if (index2 === paths.length - 1) {
              const dynamicValue = get(acc, `__dynamic_content__[${key}]`);
              dynamicValue !== void 0 ? delete acc.__dynamic_content__ : delete acc[key];
              return true;
            }
            acc[key] = acc[key] ? __spreadValues({}, acc[key]) : {};
            return acc[key];
          }, newValues);
        });
        if (Object.keys(newValues).length > 0) {
          emit("update:modelValue", newValues);
        } else {
          emit("update:modelValue", null);
        }
      }
      vue.provide("OptionsForm", {
        getValueByPath,
        updateValueByPath,
        deleteValueByPath,
        getTopModelValueByPath,
        updateTopModelValueByPath,
        deleteTopModelValueByPath,
        modelValue: vue.computed(() => props.modelValue),
        deleteValues,
        dynamicDataEnabled
      });
      const topOptionsForm = vue.inject("topOptionsForm", null);
      if (!topOptionsForm) {
        vue.provide(topOptionsForm, props.modelValue);
      }
      vue.provide("updateValueByPath", updateValueByPath);
      vue.provide("getValueByPath", getValueByPath);
      vue.provide("deleteValueByPath", deleteValueByPath);
      return {
        activeResponsiveDeviceInfo: activeResponsiveDeviceInfo2,
        updateValueByPath,
        getValueByPath,
        activePseudoSelector: activePseudoSelector2,
        deleteValues,
        getTopModelValueByPath
      };
    },
    computed: {
      optionsSchema() {
        const schema = {};
        Object.keys(this.schema).forEach((optionId) => {
          const optionConfig = this.getProperSchema(this.schema[optionId]);
          const { dependency } = optionConfig;
          if (!dependency) {
            schema[optionId] = optionConfig;
            return;
          }
          let conditionsMet = true;
          dependency.forEach((element) => {
            const { option, value, type, option_path: optionPath } = element;
            let optionSchema;
            let savedValue;
            if (optionPath) {
              optionSchema = this.getOptionSchemaFromPath(optionPath);
            } else {
              optionSchema = this.getOptionConfigFromId(option);
            }
            if (optionPath) {
              const defaultValue = optionSchema ? optionSchema.default : false;
              savedValue = this.getTopModelValueByPath(optionPath, defaultValue);
            } else {
              savedValue = typeof this.modelValue[option] !== "undefined" ? this.modelValue[option] : optionSchema.default;
              if (optionSchema.sync) {
                const syncValue = this.compilePlaceholder(optionSchema.sync);
                savedValue = this.getTopModelValueByPath(syncValue, savedValue);
              }
            }
            const validationType = type || "includes";
            if (conditionsMet && validationType === "includes" && value.includes(savedValue)) {
              conditionsMet = true;
            } else if (conditionsMet && validationType === "not_in" && !value.includes(savedValue)) {
              conditionsMet = true;
            } else if (conditionsMet && validationType === "value_set" && typeof savedValue !== "undefined") {
              conditionsMet = true;
            } else {
              conditionsMet = false;
            }
          });
          if (conditionsMet) {
            schema[optionId] = optionConfig;
          }
        });
        return schema;
      }
    },
    methods: {
      setValue(optionId, newValue) {
        if (optionId) {
          if (newValue === null) {
            const clonedValue = __spreadValues({}, this.modelValue);
            delete clonedValue[optionId];
            if (Object.keys(clonedValue).length === 0) {
              this.$emit("update:modelValue", null);
            } else {
              this.$emit("update:modelValue", clonedValue);
            }
          } else {
            this.$emit("update:modelValue", __spreadProps(__spreadValues({}, this.modelValue), {
              [optionId]: newValue
            }));
          }
        } else {
          if (newValue === null || Object.keys(newValue).length === 0) {
            this.$emit("update:modelValue", null);
          } else {
            const clonedValue = __spreadValues({}, this.modelValue);
            Object.keys(clonedValue).reduce((acc, key, index2) => {
              if (typeof newValue[key] === "undefined") {
                delete acc[key];
              }
              return acc;
            }, clonedValue);
            this.$emit("update:modelValue", __spreadValues(__spreadValues({}, clonedValue), newValue));
          }
        }
      },
      getValue(optionSchema) {
        if (optionSchema.is_layout) {
          return this.modelValue;
        } else {
          return this.modelValue[optionSchema.id];
        }
      },
      getOptionConfigFromId(optionId) {
        if (this.schema[optionId] && !this.schema[optionId].is_layout) {
          return this.schema[optionId];
        } else {
          return this.findOptionConfig(this.schema, optionId);
        }
      },
      findOptionConfig(schema, searchId) {
        let optionConfig;
        for (let [optionId, optionConfig2] of Object.entries(schema)) {
          if (optionConfig2.is_layout && optionConfig2.child_options) {
            optionConfig2 = this.findOptionConfig(optionConfig2.child_options, searchId);
          }
          if (optionConfig2 && optionConfig2.id === searchId) {
            return optionConfig2;
          }
        }
        return optionConfig;
      },
      getOptionSchemaFromPath(optionPath) {
        const pathArray = optionPath.split(".");
        return pathArray.reduce((acc, path, index2) => {
          if (acc[path]) {
            return acc[path];
          } else {
            return false;
          }
        }, this.schema);
      },
      onOptionChange(changed) {
        this.$emit("change", changed);
      },
      getProperSchema(schema) {
        const dataSetsStore = useDataSetsStore();
        if (typeof schema.data_source !== "undefined") {
          if (schema.data_source === "fonts") {
            schema.options = dataSetsStore.fontsListForOption;
            delete schema.data_source;
          } else if (schema.data_source === "taxonomies") {
            schema.options = dataSetsStore.dataSets.taxonomies;
            delete schema.data_source;
          }
        }
        if (schema.type === "textarea") {
          schema.type = "textarea";
        }
        schema = this.compilePlaceholders(schema);
        return schema;
      },
      isIterable(schema) {
        return Array.isArray(schema) || schema === Object(schema) && typeof schema !== "function";
      },
      compilePlaceholders(schema) {
        if (!this.isIterable(schema)) {
          return this.compilePlaceholder(schema);
        } else {
          for (const prop in schema) {
            if (prop !== "sync") {
              if (schema.hasOwnProperty(prop)) {
                schema[prop] = this.compilePlaceholders(schema[prop]);
              }
            }
          }
        }
        return schema;
      },
      compilePlaceholder(value) {
        if (typeof value !== "string") {
          return value;
        }
        const replacements = [
          {
            search: /%%RESPONSIVE_DEVICE%%/g,
            replacement: this.replaceResponsiveDevice
          },
          {
            search: /%%PSEUDO_SELECTOR%%/g,
            replacement: this.replacePseudoSelector
          },
          ...this.replacements
        ];
        replacements.forEach((replacementConfig) => {
          value = value.replace(replacementConfig.search, replacementConfig.replacement);
        });
        return value;
      },
      /**
       * Replace %%RESPONSIVE_DEVICE%% constant with the element UID
       */
      replaceResponsiveDevice(match) {
        return this.activeResponsiveDeviceInfo.id;
      },
      /**
       * Replace %%PSEUDO_SELECTOR%% constant with the element UID
       */
      replacePseudoSelector(match) {
        return this.activePseudoSelector.id;
      }
    }
  };
  const _hoisted_1$5 = {
    key: 0,
    class: "znpb-options-breadcrumbs-path znpb-options-breadcrumbs-path--search"
  };
  const _hoisted_2$5 = ["innerHTML"];
  const _hoisted_3$3 = ["innerHTML"];
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Icon = vue.resolveComponent("Icon");
    const _component_OptionWrapper = vue.resolveComponent("OptionWrapper");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["znpb-options-form-wrapper", { "znpb-options-form-wrapper--noSpace": $props.noSpace }])
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.optionsSchema, (optionConfig, optionId) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: optionId }, [
          optionConfig.breadcrumbs ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(optionConfig.breadcrumbs, (breadcrumb, i) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                key: i,
                class: "znpb-options-breadcrumbs-path"
              }, [
                vue.createElementVNode("span", {
                  innerHTML: optionConfig.breadcrumbs[i]
                }, null, 8, _hoisted_2$5),
                i <= optionConfig.breadcrumbs.length ? (vue.openBlock(), vue.createBlock(_component_Icon, {
                  key: 0,
                  icon: "select",
                  class: "znpb-options-breadcrumbs-path-icon"
                })) : vue.createCommentVNode("", true)
              ]);
            }), 128)),
            vue.createElementVNode("span", {
              innerHTML: optionConfig.title
            }, null, 8, _hoisted_3$3)
          ])) : vue.createCommentVNode("", true),
          vue.createVNode(_component_OptionWrapper, {
            schema: optionConfig,
            "option-id": optionId,
            modelValue: optionConfig.is_layout ? $props.modelValue : $props.modelValue[optionId],
            "compile-placeholder": $options.compilePlaceholder,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.setValue(...$event)),
            onChange: $options.onOptionChange
          }, null, 8, ["schema", "option-id", "modelValue", "compile-placeholder", "onChange"])
        ], 64);
      }), 128))
    ], 2);
  }
  const OptionsForm = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$1]]);
  const _hoisted_1$4 = { class: "znpb-menu" };
  const _hoisted_2$4 = ["onClick"];
  const _hoisted_3$2 = { class: "znpb-menu-itemTitle" };
  const _hoisted_4$1 = {
    key: 1,
    class: "znpb-menu-itemAppend"
  };
  const __default__$2 = {
    name: "Menu"
  };
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$2), {
    props: {
      actions: {}
    },
    emits: ["action"],
    setup(__props, { emit }) {
      const props = __props;
      function performAction(action) {
        action.action();
        emit("action");
      }
      const availableActions = vue.computed(() => {
        return props.actions.filter((action) => action.disabled !== false);
      });
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(availableActions.value, (action) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: action.title,
              class: vue.normalizeClass(["znpb-menu-item", [{ "znpb-menu-item--disabled": action.show === false }, action.cssClasses]]),
              onClick: vue.withModifiers(($event) => performAction(action), ["stop"])
            }, [
              action.icon ? (vue.openBlock(), vue.createBlock(_component_Icon, {
                key: 0,
                class: "znpb-menu-itemIcon",
                icon: action.icon
              }, null, 8, ["icon"])) : vue.createCommentVNode("", true),
              vue.createElementVNode("span", _hoisted_3$2, vue.toDisplayString(action.title), 1),
              action.append ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$1, vue.toDisplayString(action.append), 1)) : vue.createCommentVNode("", true)
            ], 10, _hoisted_2$4);
          }), 128))
        ]);
      };
    }
  }));
  const Menu_vue_vue_type_style_index_0_lang = "";
  const __default__$1 = {
    name: "HiddenMenu"
  };
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
    props: {
      actions: {}
    },
    setup(__props) {
      const expanded = vue.ref(false);
      return (_ctx, _cache) => {
        const _component_Icon = vue.resolveComponent("Icon");
        const _component_Tooltip = vue.resolveComponent("Tooltip");
        return vue.openBlock(), vue.createBlock(_component_Tooltip, {
          show: expanded.value,
          "onUpdate:show": _cache[2] || (_cache[2] = ($event) => expanded.value = $event),
          "tooltip-class": "hg-popper--no-padding",
          trigger: "null",
          placement: "right",
          "close-on-outside-click": true,
          "close-on-escape": true,
          class: "znpb-hiddenMenuWrapper"
        }, {
          content: vue.withCtx(() => [
            vue.createVNode(_sfc_main$5, {
              actions: _ctx.actions,
              onAction: _cache[0] || (_cache[0] = ($event) => expanded.value = !expanded.value)
            }, null, 8, ["actions"])
          ]),
          default: vue.withCtx(() => [
            vue.createVNode(_component_Icon, {
              icon: "more",
              "bg-size": 14,
              onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => expanded.value = !expanded.value, ["stop"]))
            })
          ]),
          _: 1
        }, 8, ["show"]);
      };
    }
  }));
  const Modal_vue_vue_type_style_index_0_lang = "";
  const _sfc_main$3 = {
    name: "Modal",
    components: {
      Icon: _sfc_main$1z
    },
    props: {
      show: {
        type: Boolean,
        required: false,
        default: false
      },
      title: {
        type: String,
        required: false,
        default: ""
      },
      width: {
        type: Number,
        required: false
      },
      fullscreen: {
        type: Boolean,
        required: false,
        default: false
      },
      appendTo: {
        type: String,
        required: false
      },
      closeOnClick: {
        type: Boolean,
        required: false,
        default: true
      },
      closeOnEscape: {
        type: Boolean,
        required: false,
        default: true
      },
      showClose: {
        type: Boolean,
        required: false,
        default: true
      },
      showMaximize: {
        type: Boolean,
        required: false,
        default: true
      },
      showBackdrop: {
        type: Boolean,
        required: false,
        default: true
      },
      position: {
        type: Object,
        required: false,
        default: null
      },
      enableDrag: {
        type: Boolean,
        required: false,
        default: true
      }
    },
    data: function() {
      return {
        fullSize: this.fullscreen,
        bg: this.showBackdrop,
        hasHeader: false,
        zIndex: null,
        initialPosition: {}
      };
    },
    computed: {
      modalStyle() {
        return {
          zIndex: this.zIndex,
          left: this.position === null || this.position.left + 60 > window.innerWidth || this.topPos === null ? null : "30px",
          top: this.position === null || this.leftPos === null || this.topPos === null ? null : "0",
          transform: this.position === null || this.leftPos === null || this.topPos === null ? null : `translate(${Math.round(this.leftPos)}px,${Math.round(this.topPos)}px)`
        };
      },
      leftPos() {
        return this.position === null || this.position.left + 60 > window.innerWidth ? null : this.position.left;
      },
      topPos() {
        let top2 = 0;
        if (this.position === null) {
          top2 = null;
        } else if (this.position.top - 30 < 0) {
          top2 = 0;
        } else if (this.position.top > window.innerHeight / 2) {
          top2 = this.position.top - 90;
        } else
          top2 = this.position.top;
        return top2;
      },
      hasHeaderSlot() {
        return !!this.$slots["header"];
      },
      maximizeIcon() {
        return this.fullSize ? "minimize" : "maximize";
      },
      modalContentStyle() {
        const modalStyle = {};
        if (this.width) {
          modalStyle["max-width"] = this.width + "px";
        }
        if (this.enableDrag) {
          modalStyle["position"] = "absolute";
        }
        if (this.fullSize) {
          modalStyle["max-height"] = "100%";
        }
        return modalStyle;
      },
      appendToElement() {
        return document.querySelector(this.appendTo);
      }
    },
    watch: {
      show(newValue) {
        if (newValue) {
          this.zIndex = getZIndex();
          this.$nextTick(() => {
            if (this.$el.ownerDocument.getElementById("znpb-editor-iframe") !== void 0 && this.$el.ownerDocument.getElementById("znpb-editor-iframe") !== null) {
              document.getElementById("znpb-editor-iframe").contentWindow.document.body.style.overflow = "hidden";
            } else {
              this.$el.ownerDocument.body.style.overflow = "hidden";
            }
          });
        } else {
          this.$nextTick(() => {
            if (this.zIndex) {
              removeZIndex();
              this.zIndex = null;
            }
            if (document.getElementById("znpb-editor-iframe") !== void 0 && document.getElementById("znpb-editor-iframe") !== null) {
              document.getElementById("znpb-editor-iframe").contentWindow.document.body.style.overflow = null;
            } else {
              this.$el.ownerDocument.body.style.overflow = null;
            }
          });
        }
      },
      fullscreen(newValue) {
        if (newValue) {
          this.fullSize = newValue;
        } else
          this.fullSize = this.fullscreen;
      },
      showBackdrop(newValue) {
        this.bg = newValue;
      }
    },
    mounted() {
      if (this.appendTo) {
        this.appendModal();
      }
      if (this.closeOnEscape) {
        document.addEventListener("keyup", this.onEscapeKeyPress);
      }
      if (this.show) {
        this.zIndex = getZIndex();
      }
    },
    beforeUnmount() {
      window.removeEventListener("mousemove", this.drag);
      window.removeEventListener("mouseup", this.unDrag);
      document.removeEventListener("keyup", this.onEscapeKeyPress);
      if (this.$el.parentNode === this.appendToElement) {
        this.appendToElement.removeChild(this.$el);
      }
      if (this.zIndex) {
        removeZIndex();
        this.zIndex = null;
      }
    },
    methods: {
      activateDrag() {
        if (this.enableDrag) {
          this.$refs.modalContent.style.transition = "none";
          const { left: left2, top: top2 } = this.$refs.modalContent.getBoundingClientRect();
          this.initialPosition = {
            clientX: event.clientX,
            clientY: event.clientY,
            left: left2,
            top: top2
          };
          window.addEventListener("mousemove", this.drag);
          window.addEventListener("mouseup", this.unDrag);
        }
      },
      drag(event2) {
        const left2 = event2.clientX - this.initialPosition.clientX + this.initialPosition.left;
        const top2 = event2.clientY - this.initialPosition.clientY + this.initialPosition.top;
        const procentualLeft = left2 * 100 / window.innerWidth + "%";
        const procentualTop = top2 * 100 / window.innerHeight + "%";
        this.$refs.modalContent.style.left = procentualLeft;
        this.$refs.modalContent.style.top = procentualTop;
      },
      unDrag() {
        if (this.$refs.modalContent) {
          this.$refs.modalContent.style.transition = "all .2s";
        }
        window.removeEventListener("mousemove", this.drag);
      },
      closeOnBackdropClick(event2) {
        if (this.closeOnClick) {
          if (this.$refs.modalContent && !this.$refs.modalContent.contains(event2.target)) {
            this.closeModal();
          }
        }
      },
      closeModal() {
        this.$emit("update:show", false);
        this.$emit("close-modal", true);
      },
      appendModal() {
        if (!this.appendToElement) {
          console.warn(`No HTMLElement was found matching ${this.appendTo}`);
          return;
        }
        this.appendToElement.appendChild(this.$el);
      },
      onEscapeKeyPress(event2) {
        if (event2.which === 27) {
          this.closeModal();
          event2.stopPropagation();
        }
      }
    }
  };
  const _hoisted_1$3 = {
    key: 0,
    class: "znpb-modal__header"
  };
  const _hoisted_2$3 = { class: "znpb-modal__content" };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Icon = vue.resolveComponent("Icon");
    return vue.openBlock(), vue.createBlock(vue.Transition, { name: "modal-fade" }, {
      default: vue.withCtx(() => [
        $props.show ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(["znpb-modal__backdrop", { "znpb-modal__backdrop--nobg": !_ctx.bg }]),
          style: vue.normalizeStyle($options.modalStyle),
          onClick: _cache[3] || (_cache[3] = (...args) => $options.closeOnBackdropClick && $options.closeOnBackdropClick(...args))
        }, [
          vue.createElementVNode("div", {
            ref: "modalContent",
            style: vue.normalizeStyle($options.modalContentStyle),
            class: vue.normalizeClass(["znpb-modal__wrapper", { "znpb-modal__wrapper--full-size": _ctx.fullSize }])
          }, [
            ($props.title || $props.showClose || $props.showMaximize) && !$options.hasHeaderSlot ? (vue.openBlock(), vue.createElementBlock("header", _hoisted_1$3, [
              vue.createElementVNode("div", {
                class: "znpb-modal__header-title",
                style: vue.normalizeStyle(
                  $props.enableDrag ? {
                    cursor: "pointer",
                    "user-select": "none"
                  } : null
                ),
                onMousedown: _cache[0] || (_cache[0] = (...args) => $options.activateDrag && $options.activateDrag(...args))
              }, [
                vue.createTextVNode(vue.toDisplayString($props.title) + " ", 1),
                vue.renderSlot(_ctx.$slots, "title")
              ], 36),
              $props.showMaximize ? (vue.openBlock(), vue.createBlock(_component_Icon, {
                key: 0,
                icon: _ctx.fullSize ? "shrink" : "maximize",
                class: "znpb-modal__header-button",
                onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => (_ctx.fullSize = !_ctx.fullSize, _ctx.$emit("update:fullscreen", _ctx.fullSize)), ["stop"]))
              }, null, 8, ["icon"])) : vue.createCommentVNode("", true),
              $props.showClose ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 1,
                class: "znpb-modal__header-button",
                onClick: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.closeModal && $options.closeModal(...args), ["stop"]))
              }, [
                vue.renderSlot(_ctx.$slots, "close"),
                vue.createVNode(_component_Icon, { icon: "close" })
              ])) : vue.createCommentVNode("", true)
            ])) : vue.createCommentVNode("", true),
            vue.renderSlot(_ctx.$slots, "header"),
            vue.createElementVNode("div", _hoisted_2$3, [
              vue.renderSlot(_ctx.$slots, "default")
            ]),
            vue.renderSlot(_ctx.$slots, "footer")
          ], 6)
        ], 6)) : vue.createCommentVNode("", true)
      ]),
      _: 3
    });
  }
  const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
  const _hoisted_1$2 = { class: "znpb-modal__confirm" };
  const _hoisted_2$2 = { class: "znpb-modal__confirm-buttons-wrapper" };
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "ModalConfirm",
    props: {
      confirmText: { default: "confirm" },
      cancelText: { default: "cancel" },
      width: { default: 470 }
    },
    emits: ["confirm", "cancel"],
    setup(__props, { emit }) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(Modal, {
          "show-close": false,
          "show-maximize": false,
          show: true,
          "append-to": "body",
          width: _ctx.width
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_1$2, [
              vue.renderSlot(_ctx.$slots, "default")
            ]),
            vue.createElementVNode("div", _hoisted_2$2, [
              _ctx.confirmText ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1v), {
                key: 0,
                type: "danger",
                onClick: _cache[0] || (_cache[0] = ($event) => emit("confirm"))
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.confirmText), 1)
                ]),
                _: 1
              })) : vue.createCommentVNode("", true),
              _ctx.cancelText ? (vue.openBlock(), vue.createBlock(vue.unref(_sfc_main$1v), {
                key: 1,
                type: "gray",
                onClick: _cache[1] || (_cache[1] = ($event) => emit("cancel"))
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.cancelText), 1)
                ]),
                _: 1
              })) : vue.createCommentVNode("", true)
            ])
          ]),
          _: 3
        }, 8, ["width"]);
      };
    }
  });
  const ModalConfirm_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1$1 = { class: "znpb-modal-content-save-button" };
  const _hoisted_2$1 = { class: "znpb-modal-content-wrapper znpb-fancy-scrollbar" };
  const _hoisted_3$1 = { class: "znpb-modal-content-save-button__button" };
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "ModalTemplateSaveButton",
    props: {
      disabled: { type: Boolean, default: false }
    },
    emits: ["save-modal"],
    setup(__props, { emit }) {
      const props = __props;
      const buttonType = vue.computed(() => {
        return props.disabled ? "gray" : "secondary";
      });
      function onButtonClick() {
        if (!props.disabled) {
          emit("save-modal");
        }
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          vue.createElementVNode("div", _hoisted_2$1, [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          vue.createElementVNode("div", _hoisted_3$1, [
            vue.createVNode(vue.unref(_sfc_main$1v), {
              type: buttonType.value,
              onClick: onButtonClick
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(i18n__namespace.__("Save", "zionbuilder")), 1)
              ]),
              _: 1
            }, 8, ["type"])
          ])
        ]);
      };
    }
  });
  const ModalTemplateSaveButton_vue_vue_type_style_index_0_lang = "";
  const _hoisted_1 = { class: "znpb-icon-pack-modal__icons" };
  const _hoisted_2 = {
    key: 0,
    class: "znpb-icon-pack-modal__grid"
  };
  const _hoisted_3 = ["onClick", "onDblclick"];
  const _hoisted_4 = ["data-znpbiconfam", "data-znpbicon"];
  const _hoisted_5 = { class: "znpb-modal-icon-wrapper__title" };
  const _hoisted_6 = { key: 1 };
  const __default__ = {
    name: "IconPackGrid"
  };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
    props: {
      iconList: {},
      family: {},
      activeIcon: {},
      activeFamily: {}
    },
    emits: ["icon-selected", "update:modelValue"],
    setup(__props) {
      function unicode(unicode2) {
        return JSON.parse('"\\' + unicode2 + '"');
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          _ctx.iconList.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.iconList, (icon, i) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                key: i,
                class: "znpb-icon-pack-modal-icon"
              }, [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass(["znpb-modal-icon-wrapper", { "znpb-modal-icon-wrapper--active": _ctx.activeIcon === icon.name && _ctx.activeFamily === _ctx.family }]),
                  onClick: ($event) => _ctx.$emit("icon-selected", icon),
                  onDblclick: ($event) => _ctx.$emit("update:modelValue", icon)
                }, [
                  vue.createElementVNode("span", {
                    "data-znpbiconfam": _ctx.family,
                    "data-znpbicon": unicode(icon.unicode)
                  }, null, 8, _hoisted_4)
                ], 42, _hoisted_3),
                vue.createElementVNode("h4", _hoisted_5, vue.toDisplayString(icon.name), 1)
              ]);
            }), 128))
          ])) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_6, vue.toDisplayString(i18n__namespace.__("No icons were found in package", "zionbuilder")) + " " + vue.toDisplayString(_ctx.family), 1))
        ]);
      };
    }
  }));
  const IconPackGrid_vue_vue_type_style_index_0_lang = "";
  const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    Accordion: _sfc_main$1y,
    ActionsOverlay: _sfc_main$1x,
    BaseInput: _sfc_main$1w,
    Button: _sfc_main$1v,
    ChangesBullet: _sfc_main$1u,
    Color: _sfc_main$A,
    ColorPicker: _sfc_main$1i,
    CornerLoader: _sfc_main$e,
    Draggable: _sfc_main$$,
    EmptyList: _sfc_main$1h,
    GradientGenerator: _sfc_main$Z,
    GradientLibrary: _sfc_main$W,
    GradientPreview: _sfc_main$1g,
    HiddenMenu: _sfc_main$4,
    HorizontalAccordion: _sfc_main$U,
    Icon: _sfc_main$1z,
    IconPackGrid: _sfc_main,
    Injection: _sfc_main$P,
    InlineEdit: _sfc_main$R,
    InputBackgroundImage: _sfc_main$N,
    InputBackgroundVideo: _sfc_main$M,
    InputBorderControl: _sfc_main$L,
    InputBorderRadius: _sfc_main$J,
    InputBorderRadiusTabs: _sfc_main$I,
    InputBorderTabs: _sfc_main$K,
    InputBoxModel: _sfc_main$H,
    InputCheckbox: _sfc_main$G,
    InputCheckboxGroup: _sfc_main$F,
    InputCheckboxSwitch: _sfc_main$E,
    InputCode: _sfc_main$D,
    InputColorPicker: _sfc_main$z,
    InputCustomSelector: _sfc_main$y,
    InputDatePicker: _sfc_main$w,
    InputDimensions: _sfc_main$b,
    InputEditor: _sfc_main$v,
    InputFile: _sfc_main$t,
    InputHTML: _sfc_main$a,
    InputIcon: _sfc_main$S,
    InputImage: _sfc_main$O,
    InputLabel: _sfc_main$1o,
    InputMedia: _sfc_main$u,
    InputNumber: _sfc_main$1r,
    InputNumberUnit: _sfc_main$1p,
    InputRadio,
    InputRadioGroup: _sfc_main$s,
    InputRadioIcon,
    InputRadioImage: _sfc_main$i,
    InputRange: _sfc_main$18,
    InputRangeDynamic: _sfc_main$17,
    InputRepeater: _sfc_main$g,
    InputSelect: _sfc_main$11,
    InputShapeDividers: _sfc_main$o,
    InputSpacing: _sfc_main$c,
    InputTextAlign: _sfc_main$k,
    InputTextShadow: _sfc_main$j,
    InputWrapper: _sfc_main$19,
    Label: _sfc_main$X,
    ListScroll: _sfc_main$1A,
    Loader: _sfc_main$f,
    Menu: _sfc_main$5,
    Modal,
    ModalConfirm: _sfc_main$2,
    ModalTemplateSaveButton: _sfc_main$1,
    Notice: _sfc_main$d,
    OptionBreadcrumbs: _sfc_main$V,
    OptionWrapper: _sfc_main$7,
    OptionsForm,
    PopperDirective,
    ShapeDividerComponent: _sfc_main$l,
    Sortable: _sfc_main$_,
    SvgMask: _sfc_main$p,
    Tab: _sfc_main$16,
    Tabs: _sfc_main$15,
    Tooltip: _sfc_main$1q,
    UpgradeToPro: _sfc_main$m
  }, Symbol.toStringTag, { value: "Module" }));
  const installCommonAPP = (app) => {
    app.use(pinia.createPinia());
    for (const componentName in components) {
      app.component(componentName, components[componentName]);
    }
    app.directive("znpb-tooltip", PopperDirective);
    errorInterceptor(useNotificationsStore());
    const { addSources } = useLibrary();
    addSources(window.ZBCommonData.library.sources);
  };
  window.zb = window.zb || {};
  Object.assign(window.zb, {
    hooks,
    api,
    utils,
    composables,
    components,
    installCommonAPP,
    store
  });
})(zb.pinia, zb.vue, wp.i18n);
