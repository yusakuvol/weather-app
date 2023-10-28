import { fetchForecastWeatherByWord } from 'lib/data'

type Props = {
  location: string
}

export default async function ForecastWeather({ location }: Props) {
  const forecastWeather = await fetchForecastWeatherByWord(location)

  console.log()

  return (
    <div>
      <h2>Forecast Weather</h2>
      <p>{forecastWeather.location.name}</p>
      <p>{forecastWeather.forecast.forecastday[0].day.condition.text}</p>
    </div>
  )
}
