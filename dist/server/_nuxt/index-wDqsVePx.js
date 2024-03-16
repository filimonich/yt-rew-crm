import { defineComponent, createVNode, resolveDynamicComponent, mergeProps, unref, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderVNode, ssrRenderSlot } from "vue/server-renderer";
import { c as cn } from "./index-BAqAp-tE.js";
import { cva } from "class-variance-authority";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: {},
    size: {},
    as: { default: "button" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
        class: unref(cn)(unref(buttonVariants)({ variant: _ctx.variant, size: _ctx.size }), _ctx.$attrs.class ?? "")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/button/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-[#2E4157]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "secondary",
      size: "default"
    }
  }
);
export {
  _sfc_main as _
};
//# sourceMappingURL=index-wDqsVePx.js.map
