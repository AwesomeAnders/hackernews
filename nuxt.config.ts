// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/fonts'],

  $development: {
    devtools: { enabled: true },
    nitro: {
      devStorage: {
        data: {
          driver: 'memory',
        },

      },
    },
  },

  $production: {
    nitro: {
      storage: {
        redis: {
          driver: 'redis',
        },
      },
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
      host: 'localhost',
      port: 6379,
    },
    public: {
      hackerNewsProxyUrl: '/api/hacker-news',
    },
  },

  routeRules: {
    '/': { swr: true },
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
