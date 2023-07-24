import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();

  const { startDate, endDate, userId, tripId, totalPaid, guests } = req;

  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });

  if (!trip) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "TRIP_NOT_FOUND",
        },
      }),
      {
        status: 400,
      }
    );
  }

  await prisma.tripReservation.create({
    data: {
      userId,
      tripId,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      totalPaid,
      guests,
    },
  });

  return new NextResponse(
    JSON.stringify({
      success: true,
    }),
    {
      status: 201,
    }
  );
}
