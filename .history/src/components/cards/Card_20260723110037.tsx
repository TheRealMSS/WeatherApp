import React, { type ReactNode } from 'react'

type Props = {
    children: ReactNode,
    title: string
}

export default function Card({children, title}: Props) {
  return (
    <div className='p-4 rounded-xl bg-zinc-900 shadow-md'>
    <div>{children}</div>
    <h2 className='font-semibold'>{title}</h2>
    </div>
  )
}