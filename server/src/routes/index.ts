import { Router, Request, Response, NextFunction } from "express";

import { userRouter } from "./user";

export const mainRouter = Router();

mainRouter.use("/user", userRouter);
mainRouter.get("/check", (req: Request, res: Response, next: NextFunction) =>
  res.sendStatus(200)
);
