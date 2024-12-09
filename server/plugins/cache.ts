import redisDriver from 'unstorage/drivers/redis'

export default defineNitroPlugin(() => {
  const storage = useStorage()

  // Dynamically pass in credentials from runtime configuration
  const driver = redisDriver({
    base: 'redis',
    host: useRuntimeConfig().redis.host,
    port: useRuntimeConfig().redis.port,
  })

  // Mount driver
  storage.mount('redis', driver)
})
