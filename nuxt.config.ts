// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/fonts', '@nuxt/test-utils/module'],

  $development: {
    devtools: { enabled: true },

  },

  $production: {
    routeRules: {
      '/': { isr: true },
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
    },
  },

  css: ['~/assets/scss/main.scss'],

  runtimeConfig: {
    hackerNewsUrl: 'https://hacker-news.firebaseio.com/v0',
    redis: {
      url: '',
    },
    public: {
      hackerNewsProxyUrl: '/api/hacker-news',
    },
  },

  compatibilityDate: '2024-11-01',

  vite: {
    css: {
      devSourcemap: false,
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/scss/variables.scss";`,
        },
      },
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

})
