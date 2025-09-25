import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@pinia/nuxt"],
  app: {
    head: {
      title: "Code Editor",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/assets/css/main.css"],

  icon: {
    mode: "svg",
    cssLayer: "base",
  },
});
