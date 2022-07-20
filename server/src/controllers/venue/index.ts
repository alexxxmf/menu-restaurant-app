import { Request, Response, NextFunction, response } from "express";
import { venueService } from "../../services";
import { Responses, Requests } from "../../types";
import { logger } from "../../utils";

export const listVenues = async (
  req: Request,
  res: Response<Responses.ListVenuesResponse>,
  next: NextFunction
) => {
  // TODO: implement a validation middleware
  logger.info(":::VenueController|listVenues:::");
  try {
    const venues = await venueService.listVenues();
    return res.status(200).send(venues);
  } catch (e) {
    next(e);
  }
};

export const getVenue = async (
  req: Request<Requests.GetVenueRequestParams>,
  res: Response<Responses.ListVenuesResponse>,
  next: NextFunction
) => {
  // TODO: implement a validation middleware
  logger.info(":::VenueController|getVenue:::");
  const { id } = req.params;
  try {
    const venue = await venueService.getVenue({ id });
    return res.status(200).send(venue);
  } catch (e) {
    next(e);
  }
};

export const createVenue = async (
  req: Request<{}, {}, Requests.CreateVenuePayload>,
  res: Response<Responses.ListVenuesResponse>,
  next: NextFunction
) => {
  // TODO: implement a validation middleware
  logger.info(":::VenueController|createVenue:::");
  const payload = req.body;
  try {
    const venue = await venueService.createVenue(payload);
    return res.status(200).send(venue);
  } catch (e) {
    next(e);
  }
};

export const deleteVenue = async (
  req: Request<Requests.DeleteVenueRequestParams>,
  res: Response,
  next: NextFunction
) => {
  // TODO: implement a validation middleware
  logger.info(":::VenueController|deleteVenue:::");
  const { id } = req.params;
  try {
    const venue = await venueService.deleteVenue({ id });
    return res.status(200).send(venue);
  } catch (e) {
    next(e);
  }
};

export const updateVenues = async (
  req: Request<
    Requests.UpdateVenueRequestParams,
    {},
    Requests.UpdateVenuePayload
  >,
  res: Response<Responses.ListVenuesResponse>,
  next: NextFunction
) => {
  // TODO: implement a validation middleware
  logger.info(":::VenueController|updateVenue:::");
  const { id } = req.params;
  const payload = req.body;
  try {
    const venues = await venueService.updateVenue(id, payload);
    return res.status(200).send(venues);
  } catch (e) {
    next(e);
  }
};
