import { fetchCurrentWeatherByWord } from '~/app/lib/data'

type Props = {
  location: string
}

export default async function CurrentWeather({ location }: Props) {
  const currentWeather = await fetchCurrentWeatherByWord(location)

  return (
    <div>
      <h2>Current Weather</h2>
      <p>{currentWeather.location.name}</p>
      <p>{currentWeather.current.condition.text}</p>
    </div>
  )
}
