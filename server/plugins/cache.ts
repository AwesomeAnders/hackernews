import redisDriver from 'unstorage/drivers/redis'

export default defineNitroPlugin(() => {
  const storage = useStorage()

  // Dynamically pass in credentials from runtime configuration
  const driver = redisDriver({
    base: 'redis',
    url: useRuntimeConfig().redis.url,
  })

  // Mount driver
  storage.mount('redis', driver)
})
