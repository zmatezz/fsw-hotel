import Image from "next/image";
import React from "react";

interface TripLocationProps {
  location: string;
}

const TripLocation = ({ location }: TripLocationProps) => {
  return (
    <div className="p-5">
      <h2 className="font-semibold text-primaryDarker mb-2">Localização</h2>
      <div className="relative h-[280px] w-full">
        <Image
          src="/map-mobile.png"
          alt={location}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <p className="text-primaryDarker text-sm font-semibold mt-3">{location}</p>
    </div>
  );
};

export default TripLocation;
