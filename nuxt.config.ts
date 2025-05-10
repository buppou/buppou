// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  vite: {
    server: {
      allowedHosts: ["3000.coder.buppou.com"]
    }
  },

  modules: ["@nuxtjs/tailwindcss"]
})