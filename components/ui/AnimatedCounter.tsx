'use client'
import React from 'react'
import CountUp from 'react-countup'

export const AnimatedCounter = ({amount} : {amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp
            decimal = "."
            duration = {2.75}
            decimals = {2}
            prefix = "$"
            end = {amount} />
    </div>
  )
}
