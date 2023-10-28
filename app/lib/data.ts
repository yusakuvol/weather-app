export async function fetchCurrentWeatherByWord(word: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_API_URL}/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_TOKEN}&q=${word}`
  )
  const data = await response.json()
  return data
}

export async function fetchForecastWeatherByWord(word: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_API_URL}/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_TOKEN}&q=${word}`
  )
  const data = await response.json()
  return data
}
