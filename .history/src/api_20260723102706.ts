import { WeatherSchema } from "./schemas/weatherSchema"

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m",
  })

  const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`)
  const data = await res.json()
  return WeatherSchema.parse(data)
}