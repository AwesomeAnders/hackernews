import type { UseFetchOptions } from '#app'

/**
 * A composable function for fetching data from the Hacker News API using a custom fetch client.
 *
 * - Extends Nuxt's `useFetch` utility to integrate the `$hackerNewsApi` client,
 *   which is configured in the Nuxt plugin for the HackerNews.ts.
 *
 * Parameters:
 * - `url`: The endpoint to fetch data from. Can be a string, a ref, or a computed ref.
 * - `options`: Optional configuration for the fetch request, extending Nuxt's `UseFetchOptions`.
 *
 * Features:
 * - Automatically uses the `$hackerNewsApi` fetch client for consistent request handling.
 * - Accepts reactive `url` values, enabling dynamic API requests.
 * - Merges custom options with default options to allow flexible configurations.
 *
 * Usage:
 * - Simplifies making requests to the Hacker News API in a Nuxt application.
 * - Automatically inherits any custom fetch configurations (e.g., base URL, headers, etc.)
 *   defined in the `$hackerNewsApi` instance.
 *
 * Example:
 * const { data, error } = useHackerNewsFetch('/item/123.json');
 */

export default function useHackerNewsFetch<T>(
  url: ComputedRef<string> | string | Ref<string>,
  options: UseFetchOptions<T> = {},
) {
  const { $hackerNewsApi } = useNuxtApp()
  return useFetch(url, {
    ...options,
    $fetch: $hackerNewsApi,

  })
}
