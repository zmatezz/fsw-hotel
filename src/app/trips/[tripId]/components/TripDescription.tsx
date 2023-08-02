import { Trip } from "@prisma/client";
import React from "react";

interface TripDescriptionProps {
  description: string;
}

const TripDescription = ({ description }: TripDescriptionProps) => {
  return (
    <div className="flex- flex-col p-5 lg:p-0">
      <h2 className="font-semibold text-primaryDarker lg:text-xl">Sobre a viagem</h2>
      <p className="text-xs lg:text-base  lg:leading-7 leading-5 text-primaryDarker mt-1 lg:mt-5">{description}</p>
    </div>
  );
};

export default TripDescription;
