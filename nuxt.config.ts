// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    API_URL: "http://localhost:8081",
    public: {
      API_URL: "http://localhost:8081",
    },
  },

  colorMode: {
    preference: "light",
  },

  modules: ["@nuxt/ui", "shadcn-nuxt", "nuxt-tiptap-editor", "@nuxt/fonts"],

  ui: {
    icons: ["heroicons", "lucide"],
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  tiptap: {
    prefix: "Tiptap", //prefix for Tiptap imports, composables not included
  },

  compatibilityDate: "2025-02-01",
});