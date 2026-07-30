import React, { type ReactNode } from 'react'

type Props = {
    children: ReactNode,
    title: string,
    childrenClassName?: string
}

export default function Card({children, title, childrenClassName}: Props) {
  return (
    <div className='p-3 sm:p-4 rounded-xl bg-gradient-to-br from-card to-card/60 bg-card shadow-md overflow-hidden'>
        <h2 className='text-xl sm:text-2xl font-semibold mb-3'>{title}</h2>
    <div className={childrenClassName}>{children}</div>
    </div>
  )
}