import { fetchForecastWeatherByWord } from '~/app/lib/data'
import { styles } from '~/app/ui/weather/ForecastWeather/ForecastWeather.css'

type Props = {
  location: string
}

export default async function ForecastWeather({ location }: Props) {
  const forecastWeather = await fetchForecastWeatherByWord(location)

  return (
    !forecastWeather.error && (
      <article className={styles.container}>
        <h2 className={styles.h2}>Forecast Weather</h2>
        <div className={styles.content}>
          <p>{forecastWeather.location.name}</p>
          <p>{forecastWeather.forecast.forecastday[0].day.condition.text}</p>
        </div>
      </article>
    )
  )
}
