import { Request, Response, NextFunction, response } from "express";
import { userService } from "../../services";
import { Responses, Requests } from "../../types";

export const login = (
  req: Request<{}, {}, Requests.UserLoginRequestParams>,
  res: Response<Responses.UserLoginResponse>,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
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
  console.log(":::UserController|register:::");

  try {
    const { email, password } = req.body;
    const user = await userService.register({ email, password });
    return res.status(200).send(user);
  } catch (e) {
    next(e);
  }
};
