import { _ as __nuxt_component_1 } from "./nuxt-img-x3gE6Lzb.js";
import { mergeProps, useSSRContext, defineComponent, unref, withCtx, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc, g as useRouter } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-DFrq6KK9.js";
import __nuxt_component_2 from "./Icon-BsES4zWO.js";
import "./appwrite-C1LWICvB.js";
import { u as useIsLoadingStore, a as useAuthStore } from "./auth.store-BtBICFDT.js";
import "h3";
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
import "hookable";
import "unctx";
import "unhead";
import "vue-router";
import "devalue";
import "@vueuse/core";
import "tailwind-merge";
import "@tanstack/vue-query";
import "./index-C91WxrSi.js";
import "appwrite";
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-e82e93ed>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/loader.svg",
    alt: "loader"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Loader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e82e93ed"]]);
const MENU_DATA = [
  {
    icon: "radix-icons:dashboard",
    name: "Home",
    url: "/"
  },
  {
    name: "Products",
    icon: "ep:goods",
    url: "/products"
  },
  {
    name: "Payments",
    icon: "ph:contactless-payment",
    url: "/payments"
  },
  {
    name: "Orders",
    icon: "fluent:receipt-28-regular",
    url: "/orders"
  },
  {
    name: "Customers",
    icon: "mingcute:group-line",
    url: "/customers"
  },
  {
    name: "Feedback",
    icon: "fluent:person-feedback-48-regular",
    url: "/feedback"
  },
  {
    name: "Settings",
    icon: "radix-icons:gear",
    url: "/settings"
  },
  {
    name: "Help center",
    icon: "radix-icons:question-mark",
    url: "/help"
  }
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(unref(MENU_DATA), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "flex items-center py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all mb-2.5",
          key: item.name,
          to: item.url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.icon,
                class: "mr-3"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(item.name)}</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: item.icon,
                  class: "mr-3"
                }, null, 8, ["name"]),
                createVNode("span", null, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Menu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    useIsLoadingStore();
    useAuthStore();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = __nuxt_component_1;
      const _component_Icon = __nuxt_component_2;
      const _component_LayoutMenu = _sfc_main$2;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "px-5 py-8 bg-sidebar h-full relative w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "mb-10 block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/logo.svg",
              alt: "logo",
              width: "140px",
              class: "mx-auto"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/logo.svg",
                alt: "logo",
                width: "140px",
                class: "mx-auto"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="absolute top-2 right-3 transition-colors hover:text-primary">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "line-md:log-out",
        size: "20"
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_LayoutMenu, null, null, _parent));
      _push(`<div></div></aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Default",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoadingStore = useIsLoadingStore();
    const store = useAuthStore();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutLoader = __nuxt_component_0;
      const _component_LayoutSidebar = _sfc_main$1;
      if (unref(isLoadingStore).isLoading) {
        _push(ssrRenderComponent(_component_LayoutLoader, _attrs, null, _parent));
      } else {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: { grid: unref(store).isAuth },
          style: { "min-height": "100vh" }
        }, _attrs))} data-v-59d0c795>`);
        if (unref(store).isAuth) {
          _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-59d0c795>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div></section>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-59d0c795"]]);
export {
  Default as default
};
//# sourceMappingURL=Default-Dw6hsazF.js.map
