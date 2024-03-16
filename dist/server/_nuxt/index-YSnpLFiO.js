import __nuxt_component_2 from "./Icon-BsES4zWO.js";
import { _ as _sfc_main$g } from "./Input-CIIX-yRI.js";
import { getCurrentInstance, defineComponent, ref, unref, mergeProps, isRef, useSSRContext, provide, inject, watchEffect, computed, cloneVNode, h as h$1, Fragment, onMounted, onUnmounted, watch, shallowRef, Teleport, reactive, nextTick, normalizeClass, useAttrs, toValue, toRef, resolveComponent, withCtx, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, resolveDynamicComponent, toDisplayString, createTextVNode } from "vue";
import { u as useForm } from "./vee-validate.esm-Bm2eTJGs.js";
import { D as DB, a as DB_ID, b as COLLECTION_DEALS, c as COLLECTION_COMMENTS } from "./appwrite-C1LWICvB.js";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderVNode, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { v4 } from "uuid";
import { b as useNuxtApp, _ as _export_sfc, d as useAppConfig, m as mergeConfig, e as appConfig, f as defineStore } from "../server.mjs";
import { c as cn, u as useSeoMeta } from "./index-BAqAp-tE.js";
import { twMerge, twJoin } from "tailwind-merge";
import { cva } from "class-variance-authority";
import dayjs from "dayjs";
import "hookable";
import "devalue";
import "./index-C91WxrSi.js";
import "@vueuse/core";
import "appwrite";
import "#internal/nitro";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "node:fs";
import "node:path";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "clsx";
const ATTR_KEY = "data-n-ids";
function useId(key) {
  var _a;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [useId] key must be a string.");
  }
  key = key.slice(1);
  const nuxtApp = useNuxtApp();
  const instance = getCurrentInstance();
  if (!instance) {
    throw new TypeError("[nuxt] `useId` must be called within a component setup function.");
  }
  nuxtApp._id || (nuxtApp._id = 0);
  instance._nuxtIdIndex || (instance._nuxtIdIndex = {});
  (_a = instance._nuxtIdIndex)[key] || (_a[key] = 0);
  const instanceIndex = key + ":" + instance._nuxtIdIndex[key]++;
  {
    const ids = JSON.parse(instance.attrs[ATTR_KEY] || "{}");
    ids[instanceIndex] = key + ":" + nuxtApp._id++;
    instance.attrs[ATTR_KEY] = JSON.stringify(ids);
    return ids[instanceIndex];
  }
}
function omit(object, keysToOmit) {
  const result = { ...object };
  for (const key of keysToOmit) {
    delete result[key];
  }
  return result;
}
function get(object, path, defaultValue2) {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return isNaN(numKey) ? key : numKey;
    });
  }
  let result = object;
  for (const key of path) {
    if (result === void 0 || result === null) {
      return defaultValue2;
    }
    result = result[key];
  }
  return result !== void 0 ? result : defaultValue2;
}
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "CreateDeal",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String,
      default: ""
    },
    refetch: {
      type: Function
    }
  },
  setup(__props) {
    const isOpenForm = ref(false);
    const props = __props;
    const { handleSubmit, defineField, handleReset } = useForm({
      initialValues: {
        status: props.status
      }
    });
    const [name, nameAttrs] = defineField("name");
    const [price, priceAttrs] = defineField("price");
    const [customerEmail, customerEmailAttrs] = defineField("customer.email");
    const [customerName, customerNameAttrs] = defineField("customer.name");
    const { mutate, isPending } = useMutation({
      mutationKey: ["create a new deal"],
      mutationFn: (data) => DB.createDocument(DB_ID, COLLECTION_DEALS, v4(), data),
      onSuccess() {
        props.refetch && props.refetch();
        handleReset();
      }
    });
    handleSubmit((values) => {
      mutate(values);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_UiInput = _sfc_main$g;
      _push(`<!--[--><div class="text-center mb-2" data-v-198ffd65><button class="transition-all opacity-5 hover:opacity-100 hover:text-[#a252c8]" data-v-198ffd65>`);
      if (unref(isOpenForm)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "radix-icons:arrow-up",
          class: "fade-in-100 fade-out-0",
          size: "35"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "radix-icons:plus-circled",
          class: "fade-in-100 fade-out-0",
          size: "35"
        }, null, _parent));
      }
      _push(`</button></div>`);
      if (unref(isOpenForm)) {
        _push(`<form class="form" data-v-198ffd65>`);
        _push(ssrRenderComponent(_component_UiInput, mergeProps({
          placeholder: "Наименование",
          modelValue: unref(name),
          "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null
        }, unref(nameAttrs), {
          type: "text",
          class: "input"
        }), null, _parent));
        _push(ssrRenderComponent(_component_UiInput, mergeProps({
          placeholder: "Сумма",
          modelValue: unref(price),
          "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : null
        }, unref(priceAttrs), {
          type: "text",
          class: "input"
        }), null, _parent));
        _push(ssrRenderComponent(_component_UiInput, mergeProps({
          placeholder: "Email",
          modelValue: unref(customerEmail),
          "onUpdate:modelValue": ($event) => isRef(customerEmail) ? customerEmail.value = $event : null
        }, unref(customerEmailAttrs), {
          type: "text",
          class: "input"
        }), null, _parent));
        _push(ssrRenderComponent(_component_UiInput, mergeProps({
          placeholder: "Компания",
          modelValue: unref(customerName),
          "onUpdate:modelValue": ($event) => isRef(customerName) ? customerName.value = $event : null
        }, unref(customerNameAttrs), {
          type: "text",
          class: "input"
        }), null, _parent));
        _push(`<button class="btn"${ssrIncludeBooleanAttr(unref(isPending)) ? " disabled" : ""} data-v-198ffd65>${ssrInterpolate(unref(isPending) ? "Загрузка..." : "Добавить")}</button></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/kanban/CreateDeal.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-198ffd65"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "rounded-lg border bg-card text-card-foreground animation border-transparent transition-colors hover:border-[#464827]",
          props.class
        )
      }, _attrs))} data-v-65f51896>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/Card.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-65f51896"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "CardHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex flex-col space-y-1.5 p-3", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardHeader.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "CardTitle",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({
        class: unref(cn)("text-xl font-semibold leading-none tracking-tighter", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</h3>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardTitle.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "CardDescription",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        class: unref(cn)("text-sm text-muted-foreground p-3", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardDescription.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "CardContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("p-3 pt-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardContent.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CardFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("p-3 pt-0 text-xs opacity-60 italic", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardFooter.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
let t$5 = Symbol("headlessui.useid"), i$5 = 0;
function I$1() {
  return inject(t$5, () => `${++i$5}`)();
}
function l$3(e2) {
  provide(t$5, e2);
}
function o$2(e2) {
  var l2;
  if (e2 == null || e2.value == null)
    return null;
  let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u$4(r, n2, ...a2) {
  if (r in n2) {
    let e2 = n2[r];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$4), t2;
}
var i$4 = Object.defineProperty;
var d$3 = (t2, e2, r) => e2 in t2 ? i$4(t2, e2, { enumerable: true, configurable: true, writable: true, value: r }) : t2[e2] = r;
var n$3 = (t2, e2, r) => (d$3(t2, typeof e2 != "symbol" ? e2 + "" : e2, r), r);
let s$4 = class s {
  constructor() {
    n$3(this, "current", this.detect());
    n$3(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
};
let c$2 = new s$4();
function i$3(r) {
  if (c$2.isServer)
    return null;
  if (r instanceof Node)
    return r.ownerDocument;
  if (r != null && r.hasOwnProperty("value")) {
    let n2 = o$2(r);
    if (n2)
      return n2.ownerDocument;
  }
  return void 0;
}
let c$1 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$5 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$5 || {}), T$2 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$2 || {}), F$1 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F$1 || {});
function E$2(e2 = (void 0).body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c$1)).sort((r, t2) => Math.sign((r.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w$4(e2, r = 0) {
  var t2;
  return e2 === ((t2 = i$3(e2)) == null ? void 0 : t2.body) ? false : u$4(r, { [0]() {
    return e2.matches(c$1);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(c$1))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
var y$2 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$2 || {});
function S$1(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let H$1 = ["textarea", "input"].join(",");
function I(e2) {
  var r, t2;
  return (t2 = (r = e2 == null ? void 0 : e2.matches) == null ? void 0 : r.call(e2, H$1)) != null ? t2 : false;
}
function O(e2, r = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o2 = r(t2), i2 = r(l2);
    if (o2 === null || i2 === null)
      return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P(e2, r, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
  var m2;
  let i2 = (m2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : void 0 : e2 == null ? void 0 : e2.ownerDocument) != null ? m2 : void 0, n2 = Array.isArray(e2) ? t2 ? O(e2) : e2 : E$2(e2);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s3) => !o2.includes(s3))), l2 = l2 != null ? l2 : i2.activeElement;
  let x2 = (() => {
    if (r & 5)
      return 1;
    if (r & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = (() => {
    if (r & 1)
      return 0;
    if (r & 2)
      return Math.max(0, n2.indexOf(l2)) - 1;
    if (r & 4)
      return Math.max(0, n2.indexOf(l2)) + 1;
    if (r & 8)
      return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L2 = r & 32 ? { preventScroll: true } : {}, a2 = 0, d2 = n2.length, u2;
  do {
    if (a2 >= d2 || a2 + d2 <= 0)
      return 0;
    let s3 = p + a2;
    if (r & 16)
      s3 = (s3 + d2) % d2;
    else {
      if (s3 < 0)
        return 3;
      if (s3 >= d2)
        return 1;
    }
    u2 = n2[s3], u2 == null || u2.focus(L2), a2 += x2;
  } while (u2 !== i2.activeElement);
  return r & 6 && I(u2) && u2.select(), 2;
}
function t$4() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function i$2() {
  return /Android/gi.test((void 0).navigator.userAgent);
}
function n$2() {
  return t$4() || i$2();
}
function u$3(e2, t2, n2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, t2, n2), o2(() => (void 0).removeEventListener(e2, t2, n2));
  });
}
function w$3(e2, n2, t2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, n2, t2), o2(() => (void 0).removeEventListener(e2, n2, t2));
  });
}
function w$2(f2, m2, l2 = computed(() => true)) {
  function a2(e2, r) {
    if (!l2.value || e2.defaultPrevented)
      return;
    let t2 = r(e2);
    if (t2 === null || !t2.getRootNode().contains(t2))
      return;
    let c2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f2);
    for (let o2 of c2) {
      if (o2 === null)
        continue;
      let n2 = o2 instanceof HTMLElement ? o2 : o$2(o2);
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2))
        return;
    }
    return !w$4(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m2(e2, t2);
  }
  let u2 = ref(null);
  u$3("pointerdown", (e2) => {
    var r, t2;
    l2.value && (u2.value = ((t2 = (r = e2.composedPath) == null ? void 0 : r.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$3("mousedown", (e2) => {
    var r, t2;
    l2.value && (u2.value = ((t2 = (r = e2.composedPath) == null ? void 0 : r.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$3("click", (e2) => {
    n$2() || u2.value && (a2(e2, () => u2.value), u2.value = null);
  }, true), u$3("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$3("blur", (e2) => a2(e2, () => (void 0).document.activeElement instanceof HTMLIFrameElement ? (void 0).document.activeElement : null), true);
}
var N$4 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$4 || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A$3({ visible: r = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
  if (r || t2 & 2 && n2.static)
    return y$1(l2);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$4(d2, { [0]() {
      return null;
    }, [1]() {
      return y$1({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y$1(l2);
}
function y$1({ props: r, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m2, h2;
  let { as: n2, ...l2 } = T$1(r, ["unmount", "static"]), a2 = (m2 = e2.default) == null ? void 0 : m2.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p, f2] of Object.entries(o2))
      typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a2 != null ? a2 : [];
      if (!v(u2) || c2.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g2, R2) => R2.indexOf(s3) === g2).sort((s3, g2) => s3.localeCompare(g2)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = cloneVNode(u2, p, true);
      for (let s3 in p)
        s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p[s3]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h$1(n2, Object.assign({}, l2, d2), { default: () => a2 });
}
function b(r) {
  return r.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r) {
  if (r.length === 0)
    return {};
  if (r.length === 1)
    return r[0];
  let t2 = {}, e2 = {};
  for (let i2 of r)
    for (let n2 in i2)
      n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2)
    Object.assign(t2, { [i2](n2, ...l2) {
      let a2 = e2[i2];
      for (let d2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l2);
      }
    } });
  return t2;
}
function T$1(r, t2 = []) {
  let e2 = Object.assign({}, r);
  for (let o2 of t2)
    o2 in e2 && delete e2[o2];
  return e2;
}
function v(r) {
  return r == null ? false : typeof r.type == "string" || typeof r.type == "object" || typeof r.type == "function";
}
var s$3 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(s$3 || {});
let f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(d2, { slots: o2, attrs: i2 }) {
  return () => {
    var t2;
    let { features: e2, ...r } = d2, n2 = { "aria-hidden": (e2 & 2) === 2 ? true : (t2 = r["aria-hidden"]) != null ? t2 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A$3({ ourProps: n2, theirProps: r, slot: {}, attrs: i2, slots: o2, name: "Hidden" });
  };
} });
let n$1 = Symbol("Context");
var i$1 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i$1 || {});
function s$2() {
  return l$2() !== null;
}
function l$2() {
  return inject(n$1, null);
}
function t$3(o2) {
  provide(n$1, o2);
}
var o$1 = ((r) => (r.Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r))(o$1 || {});
let t$2 = [];
function t$1(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o() {
  let a2 = [], s3 = { addEventListener(e2, t2, r, i2) {
    return e2.addEventListener(t2, r, i2), s3.add(() => e2.removeEventListener(t2, r, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s3.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s3.requestAnimationFrame(() => {
      s3.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s3.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$1(() => {
      t2.current && e2[0]();
    }), s3.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, r) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0)
        for (let r of a2.splice(t2, 1))
          r();
    };
  }, dispose() {
    for (let e2 of a2.splice(0))
      e2();
  } };
  return s3;
}
function E$1(n2, e2, o2, r) {
  c$2.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r), t2(() => n2.removeEventListener(e2, o2, r));
  });
}
var d$2 = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d$2 || {});
function n() {
  let o2 = ref(0);
  return w$3("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function B(t2) {
  if (!t2)
    return /* @__PURE__ */ new Set();
  if (typeof t2 == "function")
    return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r of t2.value) {
    let l2 = o$2(r);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$2 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(A$2 || {});
let ue = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$12, slots: r, expose: l2 }) {
  let o2 = ref(null);
  l2({ el: o2, $el: o2 });
  let i2 = computed(() => i$3(o2)), e2 = ref(false);
  onMounted(() => e2.value = true), onUnmounted(() => e2.value = false), $({ ownerDocument: i2 }, computed(() => e2.value && Boolean(t2.features & 16)));
  let m2 = z({ ownerDocument: i2, container: o2, initialFocus: computed(() => t2.initialFocus) }, computed(() => e2.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o2, containers: t2.containers, previousActiveElement: m2 }, computed(() => e2.value && Boolean(t2.features & 8)));
  let f$1 = n();
  function a2(u2) {
    let T2 = o$2(o2);
    if (!T2)
      return;
    ((w2) => w2())(() => {
      u$4(f$1.value, { [d$2.Forwards]: () => {
        P(T2, N$5.First, { skipElements: [u2.relatedTarget] });
      }, [d$2.Backwards]: () => {
        P(T2, N$5.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s3 = ref(false);
  function F2(u2) {
    u2.key === "Tab" && (s3.value = true, requestAnimationFrame(() => {
      s3.value = false;
    }));
  }
  function H2(u2) {
    if (!e2.value)
      return;
    let T2 = B(t2.containers);
    o$2(o2) instanceof HTMLElement && T2.add(o$2(o2));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$3(T2, d2) || (s3.value ? P(o$2(o2), u$4(f$1.value, { [d$2.Forwards]: () => N$5.Next, [d$2.Backwards]: () => N$5.Previous }) | N$5.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S$1(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o2, onKeydown: F2, onFocusout: H2 }, { features: d2, initialFocus: w2, containers: Q2, ...O2 } = t2;
    return h$1(Fragment, [Boolean(d2 & 4) && h$1(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: s$3.Focusable }), A$3({ ourProps: T2, theirProps: { ...n$12, ...O2 }, slot: u2, attrs: n$12, slots: r, name: "FocusTrap" }), Boolean(d2 & 4) && h$1(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: s$3.Focusable })]);
  };
} }), { features: A$2 });
function W$1(t2) {
  let n2 = ref(t$2.slice());
  return watch([t2], ([r], [l2]) => {
    l2 === true && r === false ? t$1(() => {
      n2.value.splice(0);
    }) : l2 === false && r === true && (n2.value = t$2.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r : null;
  };
}
function $({ ownerDocument: t2 }, n2) {
  let r = W$1(n2);
  onMounted(() => {
    watchEffect(() => {
      var l2, o2;
      n2.value || ((l2 = t2.value) == null ? void 0 : l2.activeElement) === ((o2 = t2.value) == null ? void 0 : o2.body) && S$1(r());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n2.value && S$1(r());
  });
}
function z({ ownerDocument: t2, container: n2, initialFocus: r }, l2) {
  let o2 = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([n2, r, l2], (e2, m2) => {
      if (e2.every((a2, s3) => (m2 == null ? void 0 : m2[s3]) === a2) || !l2.value)
        return;
      let f2 = o$2(n2);
      f2 && t$1(() => {
        var F2, H2;
        if (!i2.value)
          return;
        let a2 = o$2(r), s3 = (F2 = t2.value) == null ? void 0 : F2.activeElement;
        if (a2) {
          if (a2 === s3) {
            o2.value = s3;
            return;
          }
        } else if (f2.contains(s3)) {
          o2.value = s3;
          return;
        }
        a2 ? S$1(a2) : P(f2, N$5.First | N$5.NoScroll) === T$2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o2.value = (H2 = t2.value) == null ? void 0 : H2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o2;
}
function J({ ownerDocument: t2, container: n2, containers: r, previousActiveElement: l2 }, o2) {
  var i2;
  E$1((i2 = t2.value) == null ? void 0 : i2.defaultView, "focus", (e2) => {
    if (!o2.value)
      return;
    let m2 = B(r);
    o$2(n2) instanceof HTMLElement && m2.add(o$2(n2));
    let f2 = l2.value;
    if (!f2)
      return;
    let a2 = e2.target;
    a2 && a2 instanceof HTMLElement ? N$3(m2, a2) ? (l2.value = a2, S$1(a2)) : (e2.preventDefault(), e2.stopPropagation(), S$1(f2)) : S$1(l2.value);
  }, true);
}
function N$3(t2, n2) {
  for (let r of t2)
    if (r.contains(n2))
      return true;
  return false;
}
function m$3(t2) {
  let e2 = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e2.value = t2.getSnapshot();
  })), e2;
}
function a$1(o2, r) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s3) {
    let i2 = r[e2].call(t2, ...s3);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o2 = ((l2 = e2.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r = o2 - l2;
    n2.style(t2, "paddingRight", `${r}px`);
  } };
}
function w$1() {
  return t$4() ? { before({ doc: r, d: n2, meta: c2 }) {
    function o$12(a2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(a2));
    }
    n2.microTask(() => {
      var s3;
      if ((void 0).getComputedStyle(r.documentElement).scrollBehavior !== "auto") {
        let t2 = o();
        t2.style(r.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let a2 = (s3 = (void 0).scrollY) != null ? s3 : (void 0).pageYOffset, l2 = null;
      n2.addEventListener(r, "click", (t2) => {
        if (t2.target instanceof HTMLElement)
          try {
            let e2 = t2.target.closest("a");
            if (!e2)
              return;
            let { hash: f2 } = new URL(e2.href), i2 = r.querySelector(f2);
            i2 && !o$12(i2) && (l2 = i2);
          } catch {
          }
      }, true), n2.addEventListener(r, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement)
          if (o$12(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && o$12(e2.parentElement); )
              e2 = e2.parentElement;
            n2.style(e2, "overscrollBehavior", "contain");
          } else
            n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement)
          if (o$12(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); )
              e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else
            t2.preventDefault();
      }, { passive: false }), n2.add(() => {
        var e2;
        let t2 = (e2 = (void 0).scrollY) != null ? e2 : (void 0).pageYOffset;
        a2 !== t2 && (void 0).scrollTo(0, a2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l$1() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$2(e2) {
  let n2 = {};
  for (let t2 of e2)
    Object.assign(n2, t2(n2));
  return n2;
}
let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o$12;
  let t2 = (o$12 = this.get(e2)) != null ? o$12 : { doc: e2, count: 0, d: o(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o2 = { doc: e2, d: n2, meta: m$2(t2) }, c$12 = [w$1(), c(), l$1()];
  c$12.forEach(({ before: r }) => r == null ? void 0 : r(o2)), c$12.forEach(({ after: r }) => r == null ? void 0 : r(o2));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a.subscribe(() => {
  let e2 = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2)
    n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function d$1(t2, a$12, n2) {
  let i2 = m$3(a), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : void 0;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a$12], ([e2, m2], [r], o2) => {
    if (!e2 || !m2)
      return;
    a.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a.dispatch("POP", r != null ? r : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value)
      return;
    let e2 = o$2(d2);
    if (!e2)
      return;
    o2(function() {
      var u2;
      if (!e2)
        return;
      let r = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r === 1 ? t.delete(e2) : t.set(e2, r - 1), r !== 1)
        return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
function N$2({ defaultContainers: o2 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
  let t2 = ref(null), r = i$3(t2);
  function u2() {
    var l2, f2, a2;
    let n2 = [];
    for (let e2 of o2)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i2 != null && i2.value)
      for (let e2 of i2.value)
        n2.push(e2);
    for (let e2 of (l2 = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l2 : [])
      e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$2(t2)) || e2.contains((a2 = (f2 = o$2(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a2.host) || n2.some((M) => e2.contains(M)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: t2, MainTreeNode() {
    return H2 != null ? null : h$1(f, { features: s$3.Hidden, ref: t2 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function s$1() {
  return inject(e, false);
}
let u$2 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$3({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r, name: "ForcePortalRoot" });
  };
} });
let u$1 = Symbol("StackContext");
var s2 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s2 || {});
function y() {
  return inject(u$1, () => {
  });
}
function R$1({ type: o2, enabled: r, element: e2, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r, (n2, d2) => {
      n2 ? t2(0, o2, e2) : d2 === true && t2(1, o2, e2);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r.value && t2(1, o2, e2);
  }), provide(u$1, t2);
}
let u = Symbol("DescriptionContext");
function w() {
  let t2 = inject(u, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function k({ slot: t2 = ref({}), name: o2 = "Description", props: s3 = {} } = {}) {
  let e2 = ref([]);
  function r(n2) {
    return e2.value.push(n2), () => {
      let i2 = e2.value.indexOf(n2);
      i2 !== -1 && e2.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r, slot: t2, name: o2, props: s3 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s3 }) {
  var n2;
  let e2 = (n2 = t2.id) != null ? n2 : `headlessui-description-${I$1()}`, r = w();
  return onMounted(() => onUnmounted(r.register(e2))), () => {
    let { name: i2 = "Description", slot: l2 = ref({}), props: d2 = {} } = r, { ...c2 } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g2, m2]) => Object.assign(a2, { [g2]: unref(m2) }), {}), id: e2 };
    return A$3({ ourProps: f2, theirProps: c2, slot: l2.value, attrs: o2, slots: s3, name: i2 });
  };
} });
function x(r) {
  let e2 = i$3(r);
  if (!e2) {
    if (r === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${r}`);
  }
  let u2 = e2.getElementById("headlessui-portal-root");
  if (u2)
    return u2;
  let t2 = e2.createElement("div");
  return t2.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(t2);
}
let _ = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(r, { slots: e2, attrs: u2 }) {
  let t2 = ref(null), i2 = computed(() => i$3(t2)), l2 = s$1(), n2 = inject(C, null), o2 = ref(l2 === true || n2 == null ? x(t2.value) : n2.resolveTarget()), d2 = ref(false);
  onMounted(() => {
    d2.value = true;
  }), watchEffect(() => {
    l2 || n2 != null && (o2.value = n2.resolveTarget());
  });
  let c2 = inject(m$1, null), v2 = false, H2 = getCurrentInstance();
  return watch(t2, () => {
    if (v2 || !c2)
      return;
    let a2 = o$2(t2);
    a2 && (onUnmounted(c2.register(a2), H2), v2 = true);
  }), onUnmounted(() => {
    var g2, P2;
    let a2 = (g2 = i2.value) == null ? void 0 : g2.getElementById("headlessui-portal-root");
    a2 && o2.value === a2 && o2.value.children.length <= 0 && ((P2 = o2.value.parentElement) == null || P2.removeChild(o2.value));
  }), () => {
    if (!d2.value || o2.value === null)
      return null;
    let a2 = { ref: t2, "data-headlessui-portal": "" };
    return h$1(Teleport, { to: o2.value }, A$3({ ourProps: a2, theirProps: r, slot: {}, attrs: u2, slots: e2, name: "Portal" }));
  };
} }), m$1 = Symbol("PortalParentContext");
function A$1() {
  let r = inject(m$1, null), e2 = ref([]);
  function u2(l2) {
    return e2.value.push(l2), r && r.register(l2), () => t2(l2);
  }
  function t2(l2) {
    let n2 = e2.value.indexOf(l2);
    n2 !== -1 && e2.value.splice(n2, 1), r && r.unregister(l2);
  }
  let i2 = { register: u2, unregister: t2, portals: e2 };
  return [e2, defineComponent({ name: "PortalWrapper", setup(l2, { slots: n2 }) {
    return provide(m$1, i2), () => {
      var o2;
      return (o2 = n2.default) == null ? void 0 : o2.call(n2);
    };
  } })];
}
let C = Symbol("PortalGroupContext"), N$1 = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(r, { attrs: e2, slots: u2 }) {
  let t2 = reactive({ resolveTarget() {
    return r.target;
  } });
  return provide(C, t2), () => {
    let { target: i2, ...l2 } = r;
    return A$3({ theirProps: l2, ourProps: {}, slot: {}, attrs: e2, slots: u2, name: "PortalGroup" });
  };
} });
var Te$1 = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te$1 || {});
let H = Symbol("DialogContext");
function T(e2) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = new Error(`<${e2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return i2;
}
let A = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", We = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e2) => true }, setup(e2, { emit: i2, attrs: l2, slots: d2, expose: s$12 }) {
  var _$1, q;
  let n2 = (_$1 = e2.id) != null ? _$1 : `headlessui-dialog-${I$1()}`, u2 = ref(false);
  onMounted(() => {
    u2.value = true;
  });
  let r = false, g2 = computed(() => e2.role === "dialog" || e2.role === "alertdialog" ? e2.role : (r || (r = true, console.warn(`Invalid role [${g2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$2(), R2 = computed(() => e2.open === A && S2 !== null ? (S2.value & i$1.Open) === i$1.Open : e2.open), m2 = ref(null), E$22 = computed(() => i$3(m2));
  if (s$12({ el: m2, $el: m2 }), !(e2.open !== A || S2 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R2.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R2.value === A ? void 0 : e2.open}`);
  let c2 = computed(() => u2.value && R2.value ? 0 : 1), k$1 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N2 = inject(H, null) !== null, [Q2, X] = A$1(), { resolveContainers: B2, mainTreeNodeRef: K, MainTreeNode: Z } = N$2({ portals: Q2, defaultContainers: [computed(() => {
    var t2;
    return (t2 = h2.panelRef.value) != null ? t2 : m2.value;
  })] }), ee = computed(() => w2.value ? "parent" : "leaf"), U = computed(() => S2 !== null ? (S2.value & i$1.Closing) === i$1.Closing : false), te = computed(() => N2 || U.value ? false : k$1.value), le = computed(() => {
    var t2, a2, p;
    return (p = Array.from((a2 = (t2 = E$22.value) == null ? void 0 : t2.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o$2(K)) && f2 instanceof HTMLElement)) != null ? p : null;
  });
  E(le, te);
  let ae = computed(() => w2.value ? true : k$1.value), oe = computed(() => {
    var t2, a2, p;
    return (p = Array.from((a2 = (t2 = E$22.value) == null ? void 0 : t2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o$2(K)) && f2 instanceof HTMLElement)) != null ? p : null;
  });
  E(oe, ae), R$1({ type: "Dialog", enabled: computed(() => c2.value === 0), element: m2, onUpdate: (t2, a2) => {
    if (a2 === "Dialog")
      return u$4(t2, { [s2.Add]: () => D.value += 1, [s2.Remove]: () => D.value -= 1 });
  } });
  let re = k({ name: "DialogDescription", slot: computed(() => ({ open: R2.value })) }), M = ref(null), h2 = { titleId: M, panelRef: ref(null), dialogState: c2, setTitleId(t2) {
    M.value !== t2 && (M.value = t2);
  }, close() {
    i2("close", false);
  } };
  provide(H, h2);
  let ne = computed(() => !(!k$1.value || w2.value));
  w$2(B2, (t2, a2) => {
    h2.close(), nextTick(() => a2 == null ? void 0 : a2.focus());
  }, ne);
  let ie = computed(() => !(w2.value || c2.value !== 0));
  E$1((q = E$22.value) == null ? void 0 : q.defaultView, "keydown", (t2) => {
    ie.value && (t2.defaultPrevented || t2.key === o$1.Escape && (t2.preventDefault(), t2.stopPropagation(), h2.close()));
  });
  let ue$1 = computed(() => !(U.value || c2.value !== 0 || N2));
  return d$1(E$22, ue$1, (t2) => {
    var a2;
    return { containers: [...(a2 = t2.containers) != null ? a2 : [], B2] };
  }), watchEffect((t2) => {
    if (c2.value !== 0)
      return;
    let a2 = o$2(m2);
    if (!a2)
      return;
    let p = new ResizeObserver((f2) => {
      for (let L2 of f2) {
        let x2 = L2.target.getBoundingClientRect();
        x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && h2.close();
      }
    });
    p.observe(a2), t2(() => p.disconnect());
  }), () => {
    let { open: t2, initialFocus: a2, ...p } = e2, f2 = { ...l2, ref: m2, id: n2, role: g2.value, "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": M.value, "aria-describedby": re.value }, L2 = { open: c2.value === 0 };
    return h$1(u$2, { force: true }, () => [h$1(_, () => h$1(N$1, { target: m2.value }, () => h$1(u$2, { force: false }, () => h$1(ue, { initialFocus: a2, containers: B2, features: k$1.value ? u$4(ee.value, { parent: ue.features.RestoreFocus, leaf: ue.features.All & ~ue.features.FocusLock }) : ue.features.None }, () => h$1(X, {}, () => A$3({ ourProps: f2, theirProps: { ...p, ...l2 }, slot: L2, attrs: l2, slots: d2, visible: c2.value === 0, features: N$4.RenderStrategy | N$4.Static, name: "Dialog" })))))), h$1(Z)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e2, { attrs: i2, slots: l2 }) {
  var u2;
  let d2 = (u2 = e2.id) != null ? u2 : `headlessui-dialog-overlay-${I$1()}`, s3 = T("DialogOverlay");
  function n2(r) {
    r.target === r.currentTarget && (r.preventDefault(), r.stopPropagation(), s3.close());
  }
  return () => {
    let { ...r } = e2;
    return A$3({ ourProps: { id: d2, "aria-hidden": true, onClick: n2 }, theirProps: r, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(e2, { attrs: i2, slots: l2, expose: d2 }) {
  var r;
  let s3 = (r = e2.id) != null ? r : `headlessui-dialog-backdrop-${I$1()}`, n2 = T("DialogBackdrop"), u2 = ref(null);
  return d2({ el: u2, $el: u2 }), onMounted(() => {
    if (n2.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...g2 } = e2, D = { id: s3, ref: u2, "aria-hidden": true };
    return h$1(u$2, { force: true }, () => h$1(_, () => A$3({ ourProps: D, theirProps: { ...i2, ...g2 }, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogBackdrop" })));
  };
} });
let Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e2, { attrs: i2, slots: l2, expose: d2 }) {
  var r;
  let s3 = (r = e2.id) != null ? r : `headlessui-dialog-panel-${I$1()}`, n2 = T("DialogPanel");
  d2({ el: n2.panelRef, $el: n2.panelRef });
  function u2(g2) {
    g2.stopPropagation();
  }
  return () => {
    let { ...g2 } = e2, D = { id: s3, ref: n2.panelRef, onClick: u2 };
    return A$3({ ourProps: D, theirProps: g2, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e2, { attrs: i2, slots: l2 }) {
  var n2;
  let d2 = (n2 = e2.id) != null ? n2 : `headlessui-dialog-title-${I$1()}`, s3 = T("DialogTitle");
  return onMounted(() => {
    s3.setTitleId(d2), onUnmounted(() => s3.setTitleId(null));
  }), () => {
    let { ...u2 } = e2;
    return A$3({ ourProps: { id: d2 }, theirProps: u2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogTitle" });
  };
} });
function l(r) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called)
      return e2.called = true, r(...t2);
  };
}
function m(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.add(...t2);
}
function d(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e2, t2) {
  let i2 = o();
  if (!e2)
    return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s3] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r) => r.includes("ms") ? parseFloat(r) : parseFloat(r) * 1e3).sort((r, c2) => c2 - r);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s3) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e2, t2, i2, n2, a2, l$12) {
  let s3 = o(), o$12 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e2, ...a2), m(e2, ...t2, ...i2), s3.nextFrame(() => {
    d(e2, ...i2), m(e2, ...n2), s3.add(F(e2, (u2) => (d(e2, ...n2, ...t2), m(e2, ...a2), o$12(u2))));
  }), s3.add(() => d(e2, ...t2, ...i2, ...n2, ...a2)), s3.add(() => o$12("cancelled")), s3.dispose;
}
function g(e2 = "") {
  return e2.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e2 = inject(R, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function ge() {
  let e2 = inject(N, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let N = Symbol("NestingContext");
function L(e2) {
  return "children" in e2 ? L(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e2) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s3(n2, r = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$4(r, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r = t2.value.find(({ id: l2 }) => l2 === n2);
    return r ? r.state !== "visible" && (r.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s3(n2, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s3 };
}
let W = N$4.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3, expose: h2 }) {
  let n2 = ref(0);
  function r() {
    n2.value |= i$1.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~i$1.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= i$1.Closing, t2("beforeLeave");
  }
  function S$12() {
    n2.value &= ~i$1.Closing, t2("afterLeave");
  }
  if (!me() && s$2())
    return () => h$1(Se, { ...e2, onBeforeEnter: r, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S$12 }, s3);
  let d2 = ref(null), y2 = computed(() => e2.unmount ? S.Unmount : S.Hidden);
  h2({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H2 } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), I2 = { value: true }, c2 = I$1(), b2 = { value: false }, P2 = Q(() => {
    !b2.value && i2.value !== "hidden" && (i2.value = "hidden", H2(c2), S$12());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y2.value === S.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$4(i2.value, { ["hidden"]: () => H2(c2), ["visible"]: () => D(c2) });
    }
  });
  let j2 = g(e2.enter), M = g(e2.enterFrom), X = g(e2.enterTo), _2 = g(e2.entered), Y = g(e2.leave), Z = g(e2.leaveFrom), ee = g(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o2 = o$2(d2);
        if (o2 instanceof Comment && o2.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o2) {
    let E2 = I2.value && !A2.value, p = o$2(d2);
    !p || !(p instanceof HTMLElement) || E2 || (b2.value = true, v2.value && r(), v2.value || f2(), o2(v2.value ? L$1(p, j2, M, X, _2, (V) => {
      b2.value = false, V === g$1.Finished && l2();
    }) : L$1(p, Y, Z, ee, _2, (V) => {
      b2.value = false, V === g$1.Finished && (L(P2) || (i2.value = "hidden", H2(c2), S$12()));
    })));
  }
  return onMounted(() => {
    watch([v2], (o2, E2, p) => {
      te(p), I2.value = false;
    }, { immediate: true });
  }), provide(N, P2), t$3(computed(() => u$4(i2.value, { ["visible"]: i$1.Open, ["hidden"]: i$1.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p, enterFrom: V, enterTo: Ce, entered: ye, leave: be, leaveFrom: Ee, leaveTo: Ve, ...U } = e2, ne = { ref: d2 }, re = { ...U, ...A2.value && v2.value && c$2.isServer ? { class: normalizeClass([a2.class, U.class, ...j2, ...M]) } : {} };
    return A$3({ theirProps: re, ourProps: ne, slot: {}, slots: s3, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3 }) {
  let h2 = l$2(), n2 = computed(() => e2.show === null && h2 !== null ? (h2.value & i$1.Open) === i$1.Open : e2.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e2.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r.value = "visible" : L(l2) || (r.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$1(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y2 = { unmount: e2.unmount };
    return A$3({ ourProps: { ...y2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s3, default: () => [h$1(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...y2, ...d2 }, s3.default)] }, attrs: {}, features: W, visible: r.value === "visible", name: "Transition" });
  };
} });
const useUI = (key, $ui, $config, $wrapperClass, withAppConfig = false) => {
  const $attrs = useAttrs();
  const appConfig2 = useAppConfig();
  const ui = computed(() => {
    var _a;
    const _ui = toValue($ui);
    const _config = toValue($config);
    const _wrapperClass = toValue($wrapperClass);
    return mergeConfig(
      (_ui == null ? void 0 : _ui.strategy) || ((_a = appConfig2.ui) == null ? void 0 : _a.strategy),
      _wrapperClass ? { wrapper: _wrapperClass } : {},
      _ui || {},
      withAppConfig ? get(appConfig2.ui, key, {}) : {},
      _config || {}
    );
  });
  const attrs = computed(() => omit($attrs, ["class"]));
  return {
    ui,
    attrs
  };
};
const arrow = {
  base: "invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",
  ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",
  rounded: "before:rounded-sm",
  background: "before:bg-gray-200 dark:before:bg-gray-800",
  shadow: "before:shadow",
  // eslint-disable-next-line quotes
  placement: `group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1`
};
const inputMenu = {
  container: "z-20 group",
  trigger: "inline-flex w-full",
  width: "w-full",
  height: "max-h-60",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  background: "bg-white dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  padding: "p-1",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
  option: {
    base: "cursor-default select-none relative flex items-center justify-between gap-1",
    rounded: "rounded-md",
    padding: "px-1.5 py-1.5",
    size: "text-sm",
    color: "text-gray-900 dark:text-white",
    container: "flex items-center gap-1.5 min-w-0",
    active: "bg-gray-100 dark:bg-gray-900",
    inactive: "",
    selected: "pe-7",
    disabled: "cursor-not-allowed opacity-50",
    empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
    icon: {
      base: "flex-shrink-0 h-5 w-5",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    selectedIcon: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      padding: "pe-2",
      base: "h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "2xs"
    },
    chip: {
      base: "flex-shrink-0 w-2 h-2 mx-1 rounded-full"
    }
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid"
  },
  arrow: {
    ...arrow,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
({
  ...inputMenu,
  select: "inline-flex items-center text-left cursor-default",
  input: "block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",
  required: "absolute inset-0 w-px opacity-0 cursor-default",
  label: "block truncate",
  option: {
    ...inputMenu.option,
    create: "block truncate"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    clearSearchOnClose: false,
    showCreateOptionWhen: "empty"
  },
  arrow: {
    ...arrow,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
});
const card = {
  base: "",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6"
  },
  header: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:px-6"
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6"
  }
};
const slideover = {
  wrapper: "fixed inset-0 flex z-50",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
    transition: {
      enter: "ease-in-out duration-500",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in-out duration-500",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  base: "relative flex-1 flex flex-col w-full focus:outline-none",
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "",
  padding: "",
  shadow: "shadow-xl",
  width: "w-screen max-w-md",
  translate: {
    base: "translate-x-0",
    left: "-translate-x-full rtl:translate-x-full",
    right: "translate-x-full rtl:-translate-x-full"
  },
  // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
  transition: {
    enter: "transform transition ease-in-out duration-300",
    leave: "transform transition ease-in-out duration-200"
  }
};
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.slideover, slideover);
const _sfc_main$8 = defineComponent({
  components: {
    HDialog: We,
    HDialogPanel: Ge,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: "right",
      validator: (value) => ["left", "right"].includes(value)
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close", "close-prevented"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("slideover", toRef(props, "ui"), config$1, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition,
        enterFrom: props.side === "left" ? ui.value.translate.left : ui.value.translate.right,
        enterTo: ui.value.translate.base,
        leaveFrom: ui.value.translate.base,
        leaveTo: props.side === "left" ? ui.value.translate.left : ui.value.translate.right
      };
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    l$3(() => useId("$spG70MOB6W"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      close
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    as: "template",
    appear: _ctx.appear,
    show: _ctx.isOpen
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }]
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                    }, {
                      default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear"])) : createCommentVNode("", true),
                createVNode(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.transitionClass), {
                  default: withCtx(() => [
                    createVNode(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ]),
                  _: 3
                }, 16, ["appear"])
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }]
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear"])) : createCommentVNode("", true),
              createVNode(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx(() => [
                  createVNode(_component_HDialogPanel, {
                    class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["class"])
                ]),
                _: 3
              }, 16, ["appear"])
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.14.2_nuxt@3.10.3_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/components/overlays/Slideover.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.card, card);
const _sfc_main$7 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("card", toRef(props, "ui"), config);
    const cardClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.divide,
        ui.value.ring,
        ui.value.shadow,
        ui.value.background
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      cardClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.$attrs.onSubmit ? "form" : _ctx.as), mergeProps({ class: _ctx.cardClass }, _ctx.attrs, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$slots.header) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.default) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.footer) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$slots.header ? (openBlock(), createBlock("div", {
            key: 0,
            class: [_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background]
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.default ? (openBlock(), createBlock("div", {
            key: 1,
            class: [_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background]
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.footer ? (openBlock(), createBlock("div", {
            key: 2,
            class: [_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background]
          }, [
            renderSlot(_ctx.$slots, "footer")
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.14.2_nuxt@3.10.3_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/components/layout/Card.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Label",
  __ssrInlineRender: true,
  props: {
    labelText: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-3" }, _attrs))}>`);
      if (__props.labelText) {
        _push(`<label class="opacity-75 mb-0.5 block text-xs">${ssrInterpolate(__props.labelText)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-base">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/kanban/slideover/Label.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    variant: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(unref(badgeVariants)({ variant: _ctx.variant }), props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/badge/Badge.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const convertCurrency = (amount) => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB"
  }).format(+amount);
};
const defaultValue = {
  card: null,
  isOpen: false
};
const useDealSlideStore = defineStore("deal-slide", {
  state: () => defaultValue,
  actions: {
    clear() {
      this.$patch(defaultValue);
    },
    set(card2) {
      this.$patch({ card: card2, isOpen: true });
    },
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Top",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDealSlideStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_KanbanSlideoverLabel = _sfc_main$6;
      const _component_UiBadge = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-border bg-black/20 rounded p-3" }, _attrs))}><div class="uppercase bold text-xl mb-4">О сделке</div>`);
      _push(ssrRenderComponent(_component_KanbanSlideoverLabel, { "label-text": "Наименование" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<h2${_scopeId}>${ssrInterpolate((_a = unref(store).card) == null ? void 0 : _a.name)}</h2>`);
          } else {
            return [
              createVNode("h2", null, toDisplayString((_b = unref(store).card) == null ? void 0 : _b.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_KanbanSlideoverLabel, { "label-text": "Сумма" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`${ssrInterpolate(("convertCurrency" in _ctx ? _ctx.convertCurrency : unref(convertCurrency))(((_a = unref(store).card) == null ? void 0 : _a.price) || 0))}`);
          } else {
            return [
              createTextVNode(toDisplayString(("convertCurrency" in _ctx ? _ctx.convertCurrency : unref(convertCurrency))(((_b = unref(store).card) == null ? void 0 : _b.price) || 0)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_KanbanSlideoverLabel, { "label-text": "Статус" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiBadge, { variant: "outline" }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`${ssrInterpolate((_a = unref(store).card) == null ? void 0 : _a.status)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString((_b = unref(store).card) == null ? void 0 : _b.status), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiBadge, { variant: "outline" }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createTextVNode(toDisplayString((_a = unref(store).card) == null ? void 0 : _a.status), 1)
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_KanbanSlideoverLabel, { "label-text": "Клиент" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`${ssrInterpolate((_a = unref(store).card) == null ? void 0 : _a.companyName)}`);
          } else {
            return [
              createTextVNode(toDisplayString((_b = unref(store).card) == null ? void 0 : _b.companyName), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_KanbanSlideoverLabel, { "label-text": "Дата создания" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`${ssrInterpolate(unref(dayjs)((_a = unref(store).card) == null ? void 0 : _a.$createdAt).format("DD MMMM YYYY"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(dayjs)((_b = unref(store).card) == null ? void 0 : _b.$createdAt).format("DD MMMM YYYY")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/kanban/slideover/Top.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Skeleton",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("animate-pulse rounded-md bg-primary/10", props.class)
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/skeleton/Skeleton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function useComments() {
  var _a;
  const store = useDealSlideStore();
  const cardId = ((_a = store.card) == null ? void 0 : _a.id) || "";
  return useQuery({
    queryKey: ["deal", cardId],
    queryFn: () => DB.getDocument(DB_ID, COLLECTION_DEALS, cardId)
  });
}
function useCreateComment({ refetch }) {
  const store = useDealSlideStore();
  const commentRef = ref();
  const { mutate } = useMutation({
    mutationKey: ["add comments", commentRef.value],
    mutationFn: () => {
      var _a;
      return DB.createDocument(DB_ID, COLLECTION_COMMENTS, v4(), {
        text: commentRef.value,
        deal: (_a = store.card) == null ? void 0 : _a.id
      });
    },
    onSuccess: () => {
      refetch();
      commentRef.value = "";
    }
  });
  const writeComment = () => {
    if (!commentRef.value)
      return;
    mutate();
  };
  return {
    writeComment,
    commentRef
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Comments",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, refetch, isLoading } = useComments();
    const { commentRef, writeComment } = useCreateComment({ refetch });
    const card2 = data;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UiInput = _sfc_main$g;
      const _component_UiSkeleton = _sfc_main$3;
      const _component_Icon = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UiInput, {
        placeholder: "Оставте комментарий",
        modelValue: unref(commentRef),
        "onUpdate:modelValue": ($event) => isRef(commentRef) ? commentRef.value = $event : null,
        onKeyup: unref(writeComment)
      }, null, _parent));
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_UiSkeleton, { class: "w-full h-[76px] rounded mt-5" }, null, _parent));
      } else if (unref(card2)) {
        _push(`<div><!--[-->`);
        ssrRenderList((_a = unref(card2)) == null ? void 0 : _a.comments, (comment) => {
          _push(`<div class="flex items-start mt-5">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "radix-icons:chat-bubble",
            class: "mr-3 mt-1",
            size: "16"
          }, null, _parent));
          _push(`<div class="border-border bg-black/20 rounded p-3 w-full"><div class="mb-2 text-sm"> Комментарий ${ssrInterpolate(unref(dayjs)(comment.$createdAt).format("HH:mm"))}</div><p>${ssrInterpolate(comment.text)}</p></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/kanban/slideover/Comments.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Slideover",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useDealSlideStore();
    const isLocalOpen = computed({
      get: () => store.isOpen,
      set: (value) => {
        store.isOpen = value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USlideover = __nuxt_component_0;
      const _component_UCard = __nuxt_component_1;
      const _component_KanbanSlideoverTop = _sfc_main$4;
      const _component_KanbanSlideoverComments = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isLocalOpen),
        "onUpdate:modelValue": ($event) => isRef(isLocalOpen) ? isLocalOpen.value = $event : null
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, {
              class: "flex flex-col flex-1 overflow-y-auto",
              ui: {
                body: { base: "flex-1" },
                ring: "",
                divide: "divide-y divide-border"
              }
            }, {
              header: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_KanbanSlideoverTop, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_KanbanSlideoverTop)
                  ];
                }
              }),
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_KanbanSlideoverComments, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_KanbanSlideoverComments)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, {
                class: "flex flex-col flex-1 overflow-y-auto",
                ui: {
                  body: { base: "flex-1" },
                  ring: "",
                  divide: "divide-y divide-border"
                }
              }, {
                header: withCtx(() => [
                  createVNode(_component_KanbanSlideoverTop)
                ]),
                default: withCtx(() => [
                  createVNode(_component_KanbanSlideoverComments)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/kanban/slideover/Slideover.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const generateColumnStyle = (index, total = 1) => {
  const intensity = 100 - index / (total - 1) * 50;
  return { backgroundColor: `hsla(280, 52%, ${intensity}%, 30%)` };
};
var EnumStatus = /* @__PURE__ */ ((EnumStatus2) => {
  EnumStatus2["todo"] = "todo";
  EnumStatus2["to-be-agreed"] = "to-be-agreed";
  EnumStatus2["in-progress"] = "in-progress";
  EnumStatus2["produced"] = "produced";
  EnumStatus2["done"] = "done";
  return EnumStatus2;
})(EnumStatus || {});
const KANBAN_DATA = [
  {
    id: EnumStatus.todo,
    name: "Входящие",
    items: []
  },
  {
    id: EnumStatus["to-be-agreed"],
    name: "На согласовании",
    items: []
  },
  {
    id: EnumStatus["in-progress"],
    name: "В производстве",
    items: []
  },
  {
    id: EnumStatus.produced,
    name: "Произведено",
    items: []
  },
  {
    id: EnumStatus.done,
    name: "К отгрузке",
    items: []
  }
];
function useKanbanQuery() {
  return useQuery({
    queryKey: ["deals"],
    queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
    select(data) {
      const newBoard = KANBAN_DATA.map((col) => ({
        ...col,
        items: []
      }));
      const deals = data.documents;
      for (const deal of deals) {
        const col = newBoard.find((col2) => col2.id === deal.status);
        if (col) {
          col.items.push({
            $createdAt: deal.$createdAt,
            id: deal.$id,
            name: deal.name,
            price: deal.price,
            companyName: deal.customer.name,
            status: col.name
          });
        }
      }
      return newBoard;
    }
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Home | CRM System"
    });
    const dragCardRef = ref(null);
    const sourceColumnRef = ref(null);
    const { data, isLoading, refetch } = useKanbanQuery();
    const store = useDealSlideStore();
    useMutation({
      mutationKey: ["move card"],
      mutationFn: ({ docId, status }) => DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, {
        status
      }),
      onSuccess: () => {
        refetch();
      }
    });
    function handleDragStart(card2, column) {
      dragCardRef.value = card2;
      sourceColumnRef.value = column;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_KanbanCreateDeal = __nuxt_component_0$1;
      const _component_UiCard = __nuxt_component_1$1;
      const _component_UiCardHeader = _sfc_main$d;
      const _component_UiCardTitle = _sfc_main$c;
      const _component_UiCardDescription = _sfc_main$b;
      const _component_UiCardContent = _sfc_main$a;
      const _component_UiCardFooter = _sfc_main$9;
      const _component_KanbanSlideover = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-10" }, _attrs))}><h1 class="font-bold text-2xl mb-10">YT CRMS</h1>`);
      if (unref(isLoading)) {
        _push(`<div>Загрузка...</div>`);
      } else {
        _push(`<div><div class="grid grid-cols-5 gap-16"><!--[-->`);
        ssrRenderList(unref(data), (column, index) => {
          var _a;
          _push(`<div class="min-h-screen"><div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center" style="${ssrRenderStyle(unref(generateColumnStyle)(index, (_a = unref(data)) == null ? void 0 : _a.length))}">${ssrInterpolate(column.name)}</div><div>`);
          _push(ssrRenderComponent(_component_KanbanCreateDeal, {
            refetch: unref(refetch),
            status: column.id
          }, null, _parent));
          _push(`<!--[-->`);
          ssrRenderList(column.items, (card2) => {
            _push(ssrRenderComponent(_component_UiCard, {
              key: card2.id,
              class: "mb-5",
              draggable: "true",
              onDragstart: () => handleDragStart(card2, column)
            }, {
              default: withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UiCardHeader, {
                    role: "button",
                    onClick: ($event) => unref(store).set(card2)
                  }, {
                    default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(card2.name)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(card2.name), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(_component_UiCardDescription, { class: "mt-2 block" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(unref(convertCurrency)(card2.price))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(convertCurrency)(card2.price)), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_UiCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(card2.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiCardDescription, { class: "mt-2 block" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(convertCurrency)(card2.price)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_UiCardContent, { class: "text-xs" }, {
                    default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div${_scopeId2}>Компания</div> ${ssrInterpolate(card2.companyName)}`);
                      } else {
                        return [
                          createVNode("div", null, "Компания"),
                          createTextVNode(" " + toDisplayString(card2.companyName), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_UiCardFooter, null, {
                    default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(dayjs)(card2.$createdAt).format("DD MMMM YYYY"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(dayjs)(card2.$createdAt).format("DD MMMM YYYY")), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_UiCardHeader, {
                      role: "button",
                      onClick: ($event) => unref(store).set(card2)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(card2.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiCardDescription, { class: "mt-2 block" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(convertCurrency)(card2.price)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_UiCardContent, { class: "text-xs" }, {
                      default: withCtx(() => [
                        createVNode("div", null, "Компания"),
                        createTextVNode(" " + toDisplayString(card2.companyName), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiCardFooter, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(dayjs)(card2.$createdAt).format("DD MMMM YYYY")), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(_component_KanbanSlideover, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-YSnpLFiO.js.map
