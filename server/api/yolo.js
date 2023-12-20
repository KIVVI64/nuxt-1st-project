export default defineEventHandler(async (event) => {

  // handle query params
  //const { name } = getQuery(event)

  // handle post data
  //const { age } = await readBody(event)

  //3rd part api "currencyapi"
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_YyYyJHolZE9eeN8dXbX1vDXyj9CvZDqERSGWefpO')

  return data

  /*return {
    message: `Hello, ${name}! You are ${age} years old.`
  }*/
})