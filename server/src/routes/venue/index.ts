import { Router } from "express";
import { venueController } from "../../controllers";

export const userRouter = Router();

userRouter.get("/", venueController.list);
// userRouter.get("/:id", venueController.get);
// userRouter.post("/", venueController.create);
// userRouter.patch("/:id", venueController.update);
// userRouter.delete("/:id");
