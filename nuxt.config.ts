// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    'nuxt-viewport',
    '@nuxt/eslint',
    '@nuxt/fonts',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-05-15',
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: 'single',
      },
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
});
