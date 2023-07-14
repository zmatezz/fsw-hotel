import React from "react";

const RecommendedTrips = async () => {
  const data = await fetch("http://localhost:3000/hello").then((res) =>
    res.json()
  );

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Destinos recomendados
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      {data.map((trip) => (
        <img key={trip.id} src={trip.coverImage} alt="asas" />
      ))}
    </div>
  );
};

export default RecommendedTrips;
