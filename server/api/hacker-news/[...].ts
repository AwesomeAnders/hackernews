import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
  const { hackerNewsUrl } = useRuntimeConfig(event)

  const path = event.path.replace(/^\/api\/hacker-news\//, '')
  const target = joinURL(hackerNewsUrl, path, '.json')

  return $fetch(target)
})
