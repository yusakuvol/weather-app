import axios from 'axios'

const wrappedAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WEATHER_API_URL,
  timeout: 10000,
  params: {
    key: process.env.NEXT_PUBLIC_WEATHER_API_TOKEN,
  },
})

export default wrappedAxios
