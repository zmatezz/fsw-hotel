"use client";

import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import React from "react";

interface TripReservationProps {
  trip: Trip
}

const TripReservation = ({ trip }: TripReservationProps) => {
  return (
    <div>
      <div className="flex flex-col px-5">
        <div className="flex gap-4">
          <DatePicker
            placeholderText="Data de Início"
            onChange={() => {}}
            className="w-full"
          />
          <DatePicker
            placeholderText="Data Final"
            onChange={() => {}}
            className="w-full"
          />
        </div>

        <Input placeholder={`Número de Hóspedes (max: ${trip.maxGuests})`} className="mt-4" />
      </div>
    </div>
  );
};

export default TripReservation;
