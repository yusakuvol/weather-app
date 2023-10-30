import Image from 'next/image'

import { fetchCurrentWeatherByWord } from '~/app/lib/data'
import { styles } from '~/app/ui/weather/CurrentWeather/CurrentWeather.css'

type Props = {
  location: string
}

export default async function CurrentWeather({ location }: Props) {
  const currentWeather = await fetchCurrentWeatherByWord(location)

  const iconSplit = currentWeather.current.condition.icon.split('/')
  const iconSrc = `/weather/${iconSplit[iconSplit.length - 2]}/${
    iconSplit[iconSplit.length - 1]
  }`

  console.log(currentWeather.current.temp_c)

  return (
    !currentWeather.error && (
      <article className={styles?.container}>
        <h2 className={styles?.h2}>Current Weather</h2>
        <div className={styles?.content}>
          <p>{currentWeather.location.name}</p>
          <Image src={iconSrc} width={50} height={50} alt="Weather icon" />
          <p>{currentWeather.current.condition.text}</p>
          <p>{currentWeather.current.temp_c}°C</p>
        </div>
      </article>
    )
  )
}
