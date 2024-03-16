import { _ as _sfc_main$1 } from "./Input-CIIX-yRI.js";
import { _ as _sfc_main$2 } from "./index-wDqsVePx.js";
import { u as useSeoMeta } from "./index-BAqAp-tE.js";
import { a as useRoute, _ as _export_sfc } from "../server.mjs";
import { u as useForm } from "./vee-validate.esm-Bm2eTJGs.js";
import { D as DB, a as DB_ID, C as COLLECTION_CUSTOMERS, s as storage, S as STORAGE_ID } from "./appwrite-C1LWICvB.js";
import { defineComponent, watch, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { useQuery, useMutation } from "@tanstack/vue-query";
import { v4 } from "uuid";
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
import "appwrite";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Редактирование компании | CRM System"
    });
    const route = useRoute();
    const customerId = route.params.id;
    const { handleSubmit, defineField, setFieldValue, setValues, values } = useForm({});
    const { data, isSuccess } = useQuery({
      queryKey: ["get customer", customerId],
      queryFn: () => DB.getDocument(DB_ID, COLLECTION_CUSTOMERS, customerId)
    });
    watch(
      () => {
        var _a;
        return (_a = data.value) == null ? void 0 : _a.avatar_url;
      },
      (newAvatarUrl) => {
        if (newAvatarUrl) {
          setFieldValue("avatar_url", newAvatarUrl);
        }
      },
      { immediate: true }
    );
    const [name, nameAttrs] = defineField("name");
    const [email, emailAttrs] = defineField("email");
    const [fromSource, fromSourceAttrs] = defineField("from_source");
    const { mutate, isPending } = useMutation({
      mutationKey: ["update customer", customerId],
      mutationFn: (data2) => DB.updateDocument(DB_ID, COLLECTION_CUSTOMERS, customerId, data2)
    });
    const { mutate: uploadImage, isPending: isUploadImagePending } = useMutation({
      mutationKey: ["upload image"],
      mutationFn: (file) => storage.createFile(STORAGE_ID, v4(), file),
      onSuccess(data2) {
        const response = storage.getFileDownload(STORAGE_ID, data2.$id);
        setFieldValue("avatar_url", response.href);
      }
    });
    handleSubmit((values2) => {
      mutate(values2);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UiInput = _sfc_main$1;
      const _component_UiButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-10" }, _attrs))} data-v-cc996cc9><h1 class="font-bold text-2xl mb-10" data-v-cc996cc9> Редактирование компании ${ssrInterpolate((_a = unref(data)) == null ? void 0 : _a.name)}</h1><form class="form" data-v-cc996cc9>`);
      _push(ssrRenderComponent(_component_UiInput, mergeProps({
        placeholder: "Название компании",
        modelValue: unref(name),
        "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null
      }, unref(nameAttrs), {
        type: "text",
        class: "input"
      }), null, _parent));
      _push(ssrRenderComponent(_component_UiInput, mergeProps({
        placeholder: "Почта",
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null
      }, unref(emailAttrs), {
        type: "text",
        class: "input"
      }), null, _parent));
      _push(ssrRenderComponent(_component_UiInput, mergeProps({
        placeholder: "Откуда пришла",
        modelValue: unref(fromSource),
        "onUpdate:modelValue": ($event) => isRef(fromSource) ? fromSource.value = $event : null
      }, unref(fromSourceAttrs), {
        type: "text",
        class: "input"
      }), null, _parent));
      if (unref(values).avatar_url || unref(isUploadImagePending)) {
        _push(`<img${ssrRenderAttr("src", unref(values).avatar_url)} alt="" width="50" height="50" class="rounded-full my-4" data-v-cc996cc9>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid w-full max-w-sm items-center gap-1.5 input" data-v-cc996cc9><label data-v-cc996cc9><div class="text-sm mb-6" data-v-cc996cc9>Логотип</div>`);
      _push(ssrRenderComponent(_component_UiInput, {
        type: "file",
        onchange: (e) => {
          var _a2, _b;
          return ((_b = (_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.files) == null ? void 0 : _b.length) && unref(uploadImage)(e.target.files[0]);
        },
        disabled: unref(isUploadImagePending)
      }, null, _parent));
      _push(`</label></div>`);
      _push(ssrRenderComponent(_component_UiButton, {
        disabled: unref(isPending),
        variant: "secondary",
        class: "mt-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(isPending) ? "Загрузка..." : "Сохранить")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(isPending) ? "Загрузка..." : "Сохранить"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customers/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cc996cc9"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-mjziCHNz.js.map
