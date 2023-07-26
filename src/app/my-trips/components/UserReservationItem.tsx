import { Prisma } from "@prisma/client";
import Image from "next/image";
import React from "react";
import ReactCountryFlag from "react-country-flag";

interface UserReservationItemProps {
  reservation: Prisma.TripReservationGetPayload<{
    include: { trip: true };
  }>;
}

const UserReservationItem = ({ reservation }: UserReservationItemProps) => {
  const { trip } = reservation;
  return (
    <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">
      <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid">
        <div className="relative h-[106px] w-[124px]">
          <Image
            src={trip.coverImage}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
            alt={trip.name}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-primaryDarker font-semibold">
            {trip.name}
          </h2>

          <div className="flex items-center gap-1">
            <ReactCountryFlag countryCode={trip.countryCode} svg />
            <p className="text-xs text-grayPrimary underline">
              {trip.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReservationItem;
