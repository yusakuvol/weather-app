import LocationInput from 'ui/components/LocationInput/LocationInput'
import CurrentWeather from 'ui/weather/CurrentWeather/CurrentWeather'
import ForecastWeather from 'ui/weather/ForecastWeather/ForecastWeather'

export default function Page() {
  return (
    <main>
      <h1>WeatherApp</h1>
      <LocationInput />
      <CurrentWeather location="osaka" />
      <ForecastWeather location="osaka" />
    </main>
  )
}
