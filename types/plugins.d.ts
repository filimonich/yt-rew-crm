// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type IsAny<T> = 0 extends 1 & T ? true : false
type InjectionType<A extends Plugin> = IsAny<A> extends true ? unknown : A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.3_vite@5.1.6/node_modules/nuxt/dist/app/plugins/payload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.3_vite@5.1.6/node_modules/nuxt/dist/app/plugins/check-outdated-build.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+nuxt@0.5.1_vue@3.4.21/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.3_vite@5.1.6/node_modules/nuxt/dist/app/plugins/revive-payload.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.3_vite@5.1.6/node_modules/nuxt/dist/app/plugins/revive-payload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.3_vite@5.1.6/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.3_vite@5.1.6/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.3_vite@5.1.6/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+ui@2.14.2_nuxt@3.10.3_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/plugins/modals").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+ui@2.14.2_nuxt@3.10.3_vite@5.1.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/plugins/colors").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.3.2/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.3.2/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.10.3_vite@5.1.6/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../plugins/vue-query").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:payload' | 'nuxt:revive-payload:server' | 'nuxt:global-components' | 'nuxt:prefetch' | 'nuxt:chunk-reload'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
