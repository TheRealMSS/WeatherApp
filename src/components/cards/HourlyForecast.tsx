import { useSuspenseQuery } from '@tanstack/react-query'
import Card from './Card'
import { getWeather } from '../../api'
import { weatherEmoji } from '../../weather'
import type { Coords } from '../../types'

type Props = {
    coords: Coords
}

const HourlyForecast = ({coords}: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ['weather', coords],
    queryFn: () => getWeather({lat: coords.lat, lon: coords.lon})
  })

  return (
    <Card title='Hourly Forecast (48 hours)' childrenClassName='flex gap-6 overflow-x-scroll'>
      {data.hourly.time.map((time, i) => (
  <div key={time} className="flex flex-col items-center gap-2 items-center p-2">
    <p className='whitespace-nowrap'>{new Date(time).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
     <img src={weatherEmoji(data.hourly.weather_code[1], data.hourly.is_day[i])} className='w-10 h-10' alt="current-hourly-weather"/>
     <p>{Math.round(data.hourly.temperature_2m[i])}°C</p>

  </div>
))}
    </Card>
  )
}

export default HourlyForecast