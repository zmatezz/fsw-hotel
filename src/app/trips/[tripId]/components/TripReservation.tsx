'use client';

import DatePicker from '@/components/DatePicker'
import React from 'react'

const TripReservation = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex">
          <DatePicker placeholderText='Data de Início' onChange={() => {}} />
          <DatePicker placeholderText='Data Final' onChange={() => {}} />
        </div>
      </div>
    </div>
  )
}

export default TripReservation