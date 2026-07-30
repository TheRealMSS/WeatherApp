import {  useSuspenseQuery } from '@tanstack/react-query'
import  Card  from './Card'
import { getWeather } from '../../api'
import { weatherEmoji } from '../../weather'
import type { Coords } from '../../types'

type Props = {
  coords: Coords
}

export default function DailyForecast({coords}: Props) {

 const { data } = useSuspenseQuery({
    queryKey: ['weather', coords],
    queryFn: () => getWeather({lat: coords.lat, lon: coords.lon})
  })


return (
<Card title='Daily Forecast' childrenClassName='flex flex-col gap-4'>

{data?.daily.time.map((date, i) => {
const avgFeelsLike = (data.daily.apparent_temperature_max[i] + data.daily.apparent_temperature_min[i]) / 2

return (
<div key={date} className="flex justify-between mt-0.5">
<p className='w-9'>{new Date(date).toLocaleDateString(undefined, {
weekday: "short",
      })}</p>
<img src={weatherEmoji(data.daily.weather_code[i], 1)} alt="weather icon" className='w-6 h-6' />
<p>{Math.round(avgFeelsLike)}°C</p>
<p className='text-gray-500/75'>{Math.round(data.daily.apparent_temperature_min[i])}°C</p>
<p className='text-gray-500/75'>{Math.round(data.daily.apparent_temperature_max[i])}°C</p>
</div>
  )
})}
</Card>
  )
}