export async function fetchCurrentWeatherByWord(word: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WEATHER_API_URL}/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_TOKEN}&q=${word}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
    throw new Error('Error fetching current weather')
  }
}

export async function fetchForecastWeatherByWord(word: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WEATHER_API_URL}/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_TOKEN}&q=${word}&days=14`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
    throw new Error('Error fetching forecast weather')
  }
}

export async function fetchLocationByWord(word: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WEATHER_API_URL}/search.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_TOKEN}&q=${word}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
    throw new Error('Error fetching forecast weather')
  }
}
