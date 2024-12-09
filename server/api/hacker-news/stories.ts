import { joinURL } from 'ufo'
import type { Item } from '~/shared/Item'
import type { User } from '~/shared/User'

export default defineEventHandler(async (event) => {
  const { hackerNewsUrl } = useRuntimeConfig(event)

  const fetchTopStories = defineCachedFunction(() => $fetch<number[]>(joinURL(hackerNewsUrl, 'topstories.json')), {
    swr: true,
    base: 'redis',
    getKey() {
      return 'top-stories'
    },
  })

  const fetchStory = defineCachedFunction((id: number) => $fetch<Item>(joinURL(hackerNewsUrl, `item/${id}.json`)), {
    swr: true,
    maxAge: 10 * 60,
    base: 'redis',
    getKey(id) {
      return `item-${id}`
    },
  })

  const fetchUser = defineCachedFunction((id: string) => $fetch<User>(joinURL(hackerNewsUrl, `user/${id}.json`)), {
    swr: true,
    maxAge: 5 * 60,
    base: 'redis',
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
