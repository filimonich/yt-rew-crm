import { _ as _sfc_main$1 } from "./Input-CIIX-yRI.js";
import { _ as _sfc_main$2 } from "./index-wDqsVePx.js";
import { u as useSeoMeta } from "./index-BAqAp-tE.js";
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, useSSRContext } from "vue";
import { g as useRouter } from "../server.mjs";
import { d as account } from "./appwrite-C1LWICvB.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { v4 } from "uuid";
import { u as useIsLoadingStore, a as useAuthStore } from "./auth.store-BtBICFDT.js";
import "@vueuse/core";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
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
import "h3";
import "unhead";
import "vue-router";
import "devalue";
import "@tanstack/vue-query";
import "appwrite";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Login | CRM System"
    });
    const emailRef = ref("");
    const passwordRef = ref("");
    const nameRef = ref("");
    const isLoadingStore = useIsLoadingStore();
    const authStore = useAuthStore();
    const router = useRouter();
    const login = async () => {
      try {
        isLoadingStore.set(true);
        await account.createEmailSession(emailRef.value, passwordRef.value);
        const response = await account.get();
        if (response) {
          authStore.set({
            email: response.email,
            name: response.name,
            status: response.status
          });
        }
        emailRef.value = "";
        passwordRef.value = "";
        nameRef.value = "";
        await router.push("/");
      } catch (error) {
        console.error("Error during login:", error);
      } finally {
        isLoadingStore.set(false);
      }
    };
    const register = async () => {
      try {
        await account.create(
          v4(),
          emailRef.value,
          passwordRef.value,
          nameRef.value
        );
        await login();
      } catch (error) {
        console.error("Error during registration:", error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiInput = _sfc_main$1;
      const _component_UiButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center min-h-screen w-full" }, _attrs))}><div class="rounded bg-sidebar w-1/4 p-5"><h1 class="text-2xl font-bold text-center mb-5">Login</h1><form>`);
      _push(ssrRenderComponent(_component_UiInput, {
        placeholder: "Email",
        type: "email",
        class: "mb-3",
        modelValue: unref(emailRef),
        "onUpdate:modelValue": ($event) => isRef(emailRef) ? emailRef.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        placeholder: "Password",
        type: "password",
        class: "mb-3",
        modelValue: unref(passwordRef),
        "onUpdate:modelValue": ($event) => isRef(passwordRef) ? passwordRef.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        placeholder: "Name",
        type: "name",
        class: "mb-3",
        modelValue: unref(nameRef),
        "onUpdate:modelValue": ($event) => isRef(nameRef) ? nameRef.value = $event : null
      }, null, _parent));
      _push(`<div class="flex items-center justify-center gap-5">`);
      _push(ssrRenderComponent(_component_UiButton, {
        type: "button",
        onClick: login
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        type: "button",
        onClick: register
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Register`);
          } else {
            return [
              createTextVNode("Register")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-BBdVzSJQ.js.map
