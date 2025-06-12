// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    'nuxt-viewport',
    '@nuxt/eslint'
  ],
  tailwindcss: {
    exposeConfig: true
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: 'single'
      }
    }
  }
})
