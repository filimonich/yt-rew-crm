export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "shadcn-nuxt"],
  shadcn: {
    prefix: "Ui",
    componentDir: "./components/ui",
  },
});
