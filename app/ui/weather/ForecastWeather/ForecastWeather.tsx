import dayjs from 'dayjs'
import Image from 'next/image'

import { fetchForecastWeatherByWord } from '~/app/lib/data'
import { styles } from '~/app/ui/weather/ForecastWeather/ForecastWeather.css'

type Props = {
  location: string
}

export default async function ForecastWeather({ location }: Props) {
  const forecastWeather = await fetchForecastWeatherByWord(location)

  if (forecastWeather.error) {
    return (
      <article className={styles?.container}>
        <h2 className={styles?.h2}>Current Weather</h2>
        <p>{forecastWeather.error.message}</p>
      </article>
    )
  }

  const { forecastday } = forecastWeather.forecast

  return (
    <article className={styles.container}>
      <h2 className={styles.h2}>Forecast Weather</h2>
      <div className={styles.content}>
        <table className={styles.tableContainer}>
          <thead>
            <tr>
              {forecastday.map((data: { date: string }) => (
                <th key={data.date} className={styles.th}>
                  {dayjs(data.date).format('MM/DD')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {forecastday.map(
                (data: {
                  date: string
                  day: {
                    condition: {
                      icon: string
                    }
                  }
                }) => {
                  const iconSplit = data.day.condition.icon.split('/')
                  const iconSrc = `/weather/${
                    iconSplit[iconSplit.length - 2]
                  }/${iconSplit[iconSplit.length - 1]}`

                  return (
                    <td key={data.date} className={styles.td}>
                      <Image
                        src={iconSrc}
                        width={40}
                        height={40}
                        alt="Weather icon"
                      />
                    </td>
                  )
                }
              )}
            </tr>
            <tr>
              {forecastday.map(
                (data: {
                  date: string
                  day: { mintemp_c: string; maxtemp_c: string }
                }) => (
                  <td key={data.date} className={styles.td}>
                    {data.day.mintemp_c}°C
                  </td>
                )
              )}
            </tr>
            <tr>
              {forecastday.map(
                (data: {
                  date: string
                  day: { mintemp_c: string; maxtemp_c: string }
                }) => (
                  <td key={data.date} className={styles.td}>
                    {data.day.maxtemp_c}°C
                  </td>
                )
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  )
}
