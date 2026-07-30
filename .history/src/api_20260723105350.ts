import { WeatherSchema } from "./schemas/weatherSchema"

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,precipitation_probability,weather_code&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code,sunrise,sunset&timezone=auto`

  const res = await fetch(url)
  const data = await res.json()

  return WeatherSchema.parse(data)
}