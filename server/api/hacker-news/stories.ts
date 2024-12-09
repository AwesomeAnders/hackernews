import { joinURL } from 'ufo'
import type { Item } from '~/shared/Item'
import type { User } from '~/shared/User'

/**
 * Server API route for fetching stories and author data to avoid
 * multiple round-trips from the client to the Hacker News API.
 *
 * Makes use of Nitro's defineCachedFunction in order to cache individual responses
 * from the Hacker News API and reduce the number of network requests
 * to improve response times for repeated or concurrent requests.
 *
 * The route fetches the top stories, selects a random subset of 10 stories,
 * retrieves detailed story data, and enriches it with author information by fetching
 * user details. Responses are cached with swr (stale-while-revalidate) and explicit maxAge.
 * to ensure data is always reasonsable up-to-date and revalidated in the background.
 */

export default defineEventHandler(async (event) => {
  const { hackerNewsUrl } = useRuntimeConfig(event)

  const fetchTopStories = defineCachedFunction(() => $fetch<number[]>(joinURL(hackerNewsUrl, 'topstories.json')), {
    swr: true,
    getKey() {
      return 'top-stories'
    },
  })

  const fetchStory = defineCachedFunction((id: number) => $fetch<Item>(joinURL(hackerNewsUrl, `item/${id}.json`)), {
    swr: true,
    maxAge: 10 * 60,
    getKey(id) {
      return `item-${id}`
    },
  })

  const fetchUser = defineCachedFunction((id: string) => $fetch<User>(joinURL(hackerNewsUrl, `user/${id}.json`)), {
    swr: true,
    maxAge: 5 * 60,
    getKey(id) {
      return `user-${id}`
    },
  })

  const topStories = await fetchTopStories()

  const randomIds = getRandomNumbers(topStories, 10)

  const stories = await Promise.all(randomIds.map(id => fetchStory(id)))

  const sortedStories = stories.sort((a, b) => (a.score ?? 0) - (b.score ?? 0))

  const storiesWithAuthor = await Promise.all(sortedStories.map(async (story) => {
    const author = await fetchUser(story.by)
    return { ...story, author }
  }))

  return storiesWithAuthor
})
