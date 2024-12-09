import type { FetchOptions } from 'ofetch'

/**
 * Nuxt plugin to configure and provide a custom `$fetch` instance for interacting
 * with the Hacker News API through a proxy URL.
 *
 * - The plugin retrieves the `hackerNewsProxyUrl` from the runtime configuration's public settings.
 * - A new `$fetch` instance is created using these options and provided globally
 *
 * Usage:
 * Injected into Nuxt's context as `nuxtApp.$hackerNewsApi`.
 * Allows any component or function to make API requests without reconfiguring the fetch client.
 */

export default defineNuxtPlugin((nuxtApp) => {
  const { hackerNewsProxyUrl } = useRuntimeConfig().public

  const defaultOptions: FetchOptions = {
    baseURL: hackerNewsProxyUrl,

    onResponse({ response, options }) {
      if (response.status === 404 && !options.ignoreResponseError) {
        nuxtApp.runWithContext(() => {
          showError({
            statusMessage: response.statusText,
            statusCode: response.status,
          })
        })
      }
    },
  }

  const hackerNewsApi = $fetch.create(defaultOptions)

  return {
    provide: {
      hackerNewsApi,
    },
  }
})
