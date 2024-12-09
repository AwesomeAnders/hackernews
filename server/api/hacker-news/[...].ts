import { joinURL } from 'ufo'

/**
 * A catch-all proxy route for forwarding requests to the Hacker News API.
 *
 * - Dynamically maps incoming requests to the appropriate Hacker News API endpoint.
 * - Uses the base `hackerNewsUrl` from the runtime configuration to construct the target URL.
 * - Ensures all requests end with `.json`, as required by the Hacker News API.
 *
 * Example:
 * - Incoming request: `/api/hacker-news/item/123`
 * - Forwarded to: `<hackerNewsUrl>/item/123.json`
 */

export default defineEventHandler(async (event) => {
  const { hackerNewsUrl } = useRuntimeConfig(event)
  const path = event.path.replace(/^\/api\/hacker-news\//, '')
  const target = joinURL(hackerNewsUrl, path, '.json')

  return $fetch(target)
})
