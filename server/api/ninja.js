export default defineEventHandler(async (event) => {
  const { code } = event.context.params
  const { currencyKey } = useRuntimeConfig()

  // handle query params
  // const { name } = useQuery(event)

  // handle post data
  // const { age } = await useBody(event)

  // api call with pkey
  const {data} = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)
  return data
})