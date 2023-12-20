// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icon"],
  app: {
    head: {
      htmlAttrs: {
        lang: 'pl'
      },
      title: "Nuxt 1st project",
      meta: [
        { name: 'description', content: 'This is my first nuxt project. Here I discover basic concepts.' }
      ]
    }
  }
})