import React, { type ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export default function Card({children}: Props) {
  return (
    <div className='p-4 rounded-xl bg-zinc-900 flex-col gap-8'>
    <div>{children}</div>
    </div>
  )
}