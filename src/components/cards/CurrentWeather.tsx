import { useSuspenseQuery } from '@tanstack/react-query'
import Card from './Card'
import { getWeather } from '../../api'
import { weatherEmoji, weatherDescription } from '../../weather'
import { useState, useEffect } from 'react'
import type { Coords } from '../../types'


type Props = {
    coords : Coords
}

export default function CurrentWeather({coords}: Props) {
    const { data } = useSuspenseQuery({
    queryKey: ['weather', coords],
    queryFn: () => getWeather({lat: coords.lat, lon: coords.lon})
  })

  

  function useLiveTime(timezone: string) {
    const [time , setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()),1000)
        return () => clearInterval(interval)
    }, [])

    return new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: timezone
    }).format(time)
  }

  const livetime = useLiveTime(data.timezone)


  return(<Card title='Current Weather' childrenClassName='flex flex-col items-center gap-6'>


    <img src={weatherEmoji(data.current.weather_code, data.current.is_day)} className='size-12 sm:size-15' alt="current-weather-icon" />
    <h2 className='text-5xl sm:text-6xl font-semibold text-center '>{Math.round(data.current.temperature_2m)}°C</h2>
    <div className='flex flex-col gap-2 items-center'>
    
    <h3 className='capitalize text-lg sm:text-xl'>{weatherDescription(data.current.weather_code)}</h3>
    </div>
    
    <div >
        <p className='text-center'>Local Time:</p>
        <h3 className='text-3xl sm:text-4xl font-semibold text-center'>{livetime}</h3>
    </div>
    <div className='flex justify-between gap-2 w-full '>
        <div className='flex flex-col items-center gap-2'>
            <p className='text-gray-500 text-sm sm:text-lg'>Feels Like: </p>
            <p>{Math.round(data.current.apparent_temperature)}°C</p>
            </div>
        <div className='flex flex-col items-center gap-2'>
            <p className='text-gray-500 text-sm sm:text-lg'>Humidity: </p>
                <p>{data.current.relative_humidity_2m}%</p>
            </div>
        <div className='flex flex-col items-center gap-2'>
            <p className='text-gray-500 text-sm sm:text-lg'>Wind: </p>
            <p>{data.current.wind_speed_10m}mph</p>
            </div>
            

        </div>


  </Card>)

}