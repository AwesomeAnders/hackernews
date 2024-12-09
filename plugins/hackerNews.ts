import type { FetchOptions } from 'ofetch'

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
