import { Request, Response, NextFunction, response } from "express";
import jwt from "jsonwebtoken";
import { userService } from "../../services";
import { Responses, Requests } from "../../types";
import { config } from "../../config";
import { logger } from "../../utils";

export const login = async (
  req: Request<{}, {}, Requests.UserLoginRequestParams>,
  res: Response<Responses.UserLoginResponse>,
  next: NextFunction
) => {
  // TODO: implement a validation middleware
  logger.info(":::UserController|login:::");
  try {
    const { email, password } = req.body;
    const userId = await userService.login({ email, password });

    const token = jwt.sign({ id: userId }, config.jwtSecret, {
      expiresIn: config.jwtExpirationTimeInSeconds,
    });
    return res.status(200).send({
      authToken: token,
      expiration: {
        time: config.jwtExpirationTimeInSeconds,
        unit: "s",
      },
    });
  } catch (e) {
    next(e);
  }
};

export const register = async (
  req: Request<{}, {}, Requests.UserRegisterRequestParams>,
  res: Response<Responses.UserRegisterResponse>,
  next: NextFunction
) => {
  // TODO: implement a proper logger
  // TODO: implement a validation middleware
  logger.info(":::UserController|register:::");
  try {
    const { email, password } = req.body;
    const user = await userService.register({ email, password });
    return res.status(200).send(user);
  } catch (e) {
    next(e);
  }
};
