import { Request, Response, NextFunction } from "express";
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
  try {
    const { email, password } = req.body;
    await userService.register({ email, password });
  } catch (e) {
    next(e);
  }
};
