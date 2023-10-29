import Header from 'ui/components/Header/Header'
import LocationInput from 'ui/components/LocationInput/LocationInput'
import CurrentWeather from 'ui/weather/CurrentWeather/CurrentWeather'
import ForecastWeather from 'ui/weather/ForecastWeather/ForecastWeather'

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
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
