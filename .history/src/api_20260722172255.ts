import { WeatherSchema } from "./schemas/weatherSchema"

const API_KEY = import.meta.env.VITE_API_KEY

export async function getWeather({lon, lat}: {lon: number, lat: number}){
    const res = await fetch(`https://api.openweathermap.org/data/4.0/onecall/current?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    const data = await res.json()
    return data
}