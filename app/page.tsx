import Header from '~/app/ui/components/Header/Header'
import LocationInput from '~/app/ui/components/LocationInput/LocationInput'
import CurrentWeather from '~/app/ui/weather/CurrentWeather/CurrentWeather'
import ForecastWeather from '~/app/ui/weather/ForecastWeather/ForecastWeather'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata = {
  title: 'WeatherApp',
  description: 'A simple weather app.',
}

export default function Page({ searchParams }: Props) {
  const defaultLocation = 'tokyo'
  const location = searchParams.location
    ? (searchParams.location as string)
    : defaultLocation

  return (
    <>
      <Header />
      <main>
        <LocationInput />
        <CurrentWeather location={location} />
        <ForecastWeather location={location} />
      </main>
    </>
  )
}
