import React from 'react'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import  Card  from './Card'
import { getWeather } from '../../api'

type Props = {}

export default function DailyForecast({}: Props) {
     const {data, error, isError, isLoading} = useSuspenseQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 51.5074, lon: -0.1278})
  })
  return (
    <div>
 <div className='flex flex-col gap-4'>
    {data?.daily.time.map((date, i) => (
  <div key={date} className="flex justify-between">
    <p>{date}</p>
    <p>{data.daily.weather_code[i]}</p>
  </div>
))}
 </div>
</div>
  )
}

