import Image from 'next/image'

import { fetchCurrentWeatherByWord } from '~/app/lib/data'
import { styles } from '~/app/ui/weather/CurrentWeather/CurrentWeather.css'

type Props = {
  location: string
}

export default async function CurrentWeather({ location }: Props) {
  const currentWeather = await fetchCurrentWeatherByWord(location)

  if (currentWeather.error) {
    return (
      <article className={styles?.container}>
        <h2 className={styles?.h2}>Current Weather</h2>
        <p>{currentWeather.error.message}</p>
      </article>
    )
  }

  const iconSplit = currentWeather.current.condition.icon.split('/')
  const iconSrc = `/weather/${iconSplit[iconSplit.length - 2]}/${
    iconSplit[iconSplit.length - 1]
  }`

  return (
    !currentWeather.error && (
      <article className={styles?.container}>
        <h2 className={styles?.h2}>Current Weather</h2>
        <div className={styles?.content}>
          <p className={styles?.locationName}>{currentWeather.location.name}</p>
          <div className={styles?.contentImage}>
            <Image src={iconSrc} width={70} height={70} alt="Weather icon" />
            <p className={styles?.temperature}>
              {currentWeather.current.temp_c}°C
            </p>
          </div>
          <p className={styles?.condition}>
            {currentWeather.current.condition.text}
          </p>
          <hr className={styles?.hr} />
          <div className={styles?.informationContainer}>
            <span>Wind</span>
            <span>{currentWeather.current.wind_kph} km/h</span>
          </div>
          <hr className={styles?.hr} />
          <div className={styles?.informationContainer}>
            <span>Feels like</span>
            <span>{currentWeather.current.feelslike_c}°C</span>
          </div>
          <hr className={styles?.hr} />
          <div className={styles?.informationContainer}>
            <span>Humidity</span>
            <span>{currentWeather.current.humidity}%</span>
          </div>
        </div>
      </article>
    )
  )
}
