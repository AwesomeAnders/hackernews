import redisDriver from 'unstorage/drivers/redis'

export default defineNitroPlugin(() => {
  // Use nitro default storage driver for dev env
  if (import.meta.dev) {
    return
  }

  const storage = useStorage()

  // Dynamically pass in credentials from runtime configuration
  const driver = redisDriver({
    url: useRuntimeConfig().redis.url,
  })

  // Mount driver
  storage.mount('cache', driver)
})
