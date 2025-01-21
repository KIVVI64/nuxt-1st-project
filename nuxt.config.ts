// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icon", "@vueuse/nuxt"],
  app: {
    head: {
      htmlAttrs: {
        lang: "pl",
      },
      title: "Nuxt 1st project",
      meta: [
        {
          name: "description",
          content:
            "This is my first nuxt project. Here I discover basic concepts.",
        },
      ],
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
    geminiKey: process.env.GEMINI_API_KEY
  },
});