import React from 'react'
import { useQuery } from '@tanstack/react-query'
import  Card  from './Card'
import { getWeather } from '../../api'

type Props = {}

export default function DailyForecast({}: Props) {
     const {data, error, isError, isLoading} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 51.5074, lon: -0.1278})
  })
  return (
    <div>
 <Card title="Daily Forecast">{JSON.stringify(data.daily).slice(0, 150)}</Card>
</div>
  )
}

