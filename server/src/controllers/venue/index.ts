import { Request, Response, NextFunction, response } from "express";
import jwt from "jsonwebtoken";
import { userService } from "../../services";
import { Responses, Requests } from "../../types";
import { config } from "../../config";
import { logger } from "../../utils";

export const list = async (
  req: Request,
  res: Response<Responses.ListVenuesResponse>,
  next: NextFunction
) => {
  // TODO: implement a validation middleware
  logger.info(":::VenueController|list:::");
  try {

    return res.status(200).send({});
  } catch (e) {
    next(e);
  }
};