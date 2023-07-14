import { Trip } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface TripItemProps {
  trip: Trip;
}
const TripItem = ({ trip }: TripItemProps) => {
  return (
    <div className="flex flex-col">
      <Image
        src={trip.coverImage}
        width={280}
        height={280}
        className="rounded-lg"
        alt={trip.name}
      />

      <h3 className="text-primaryDarker font-medium text-sm">{trip.name}</h3>
    </div>
  );
};

export default TripItem;
