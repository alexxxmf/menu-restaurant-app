import { Prisma, Venue } from "@prisma/client";
import { prisma } from "../db";
import { logger } from "../utils";
import { CreateVenuePayload, UpdateVenuePayload } from "../types/requests";
import { Requests } from "../types";

export const listVenues = async (): Promise<
  Prisma.Prisma__UserClient<Venue[]>
> => {
  logger.info(":::VenueService|listVenues:::");
  try {
    const venues = await prisma.venue.findMany({
      include: { owner: { include: {} } },
    });

    return venues;
  } catch (e) {
    throw new Error(e);
  }
};

export const getVenue = async ({
  id,
}: {
  id: string;
}): Promise<Prisma.Prisma__UserClient<Venue>> => {
  logger.info(":::VenueService|getVenue:::");
  try {
    const venue = prisma.venue.findFirstOrThrow({ where: { id } });

    return venue;
  } catch (e) {
    throw new Error(e);
  }
};

export const createVenue = async (
  payload: CreateVenuePayload
): Promise<Prisma.Prisma__UserClient<Venue>> => {
  logger.info(":::VenueService|createVenue:::");
  try {
    const venue = await prisma.venue.create({ data: payload });
    return venue;
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteVenue = async ({
  id,
}: {
  id: string;
}): Promise<Prisma.Prisma__UserClient<Venue>> => {
  logger.info(":::VenueService|deleteVenue:::");
  try {
    const venue = await prisma.venue.delete({ where: { id } });
    return venue;
  } catch (e) {
    throw new Error(e);
  }
};

export const updateVenue = async (
  id: Requests.UpdateVenueRequestParams["id"],
  payload: Requests.UpdateVenuePayload
): Promise<Prisma.Prisma__UserClient<Venue>> => {
  logger.info(":::VenueService|updateVenue:::");
  try {
    const venue = await prisma.venue.update({ where: { id }, data: payload });
    return venue;
  } catch (e) {
    throw new Error(e);
  }
};
