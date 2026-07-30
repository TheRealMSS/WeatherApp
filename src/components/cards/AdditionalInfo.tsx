import React from 'react'
import Card from './Card'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getWeather } from '../../api'
import { formatLocalTime } from '../../weather'
import cloud from '../../assets/cloud.svg?react'
import wind from '../../assets/wind.svg?react'
import pressure from '../../assets/pressure.svg?react'
import { Icon, Sunrise, Sunset } from 'lucide-react'
import type { Coords } from '../../types'

type Props = {
    coords: Coords
}

export default function AdditionalInfo({coords}: Props){

 const { data } = useSuspenseQuery({
  queryKey: ['weather', coords],
  queryFn: () => getWeather({lat: coords.lat, lon: coords.lon})
})

    return(
        <Card title='Additional Weather Info' childrenClassName='flex flex-col gap-8'>
    {rows.map(({label, value, Icon}) => (
        <div className='flex justify-between items-center' key={value}>
            <div className="flex items-center gap-2">
                <span className='text-gray-500'>{label}</span>
                <Icon className="size-5 [&_path]:fill-white [&_path]:stroke-white" /> 
            </div>
            <span>{data.current[value as keyof typeof data.current]}</span>
        </div>
    ))}


            <div className='flex justify-between items-center'>
            <div className="flex items-center gap-2">
                <p className='text-gray-500'>Sunrise</p>
                <Sunrise className="size-5 [&_path]:fill-white"/>
            </div>
            <p>{formatLocalTime(data.daily.sunrise[0])}</p>
            </div>
            <div className='flex justify-between items-center'>
            <div className="flex items-center gap-2">
                <p className='text-gray-500'>Sunset</p>
                <Sunset className="size-5 text-white"/>
            </div>
            <p>{formatLocalTime(data.daily.sunset[0])}</p>
            </div>


        </Card>
    )

}

const rows = [
   
    {label: "Wind Direction (°)", value: "wind_direction_10m", Icon: wind},
    {label: "Pressure (hPa)", value: "pressure_msl", Icon: pressure},
]