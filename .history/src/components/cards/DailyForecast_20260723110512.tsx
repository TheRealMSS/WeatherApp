import React from 'react'
import  Card  from './Card'

type Props = {}

export default function DailyForecast({}: Props) {
  return (
    <div>
 <Card title="Daily Forecast">{JSON.stringify(data.daily).slice(0, 150)}</Card>
</div>
  )
}