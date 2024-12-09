import type { UseFetchOptions } from '#app'

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
