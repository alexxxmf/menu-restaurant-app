import { Router } from "express";
import { venueController } from "../../controllers";

export const userRouter = Router();

userRouter.get("/", venueController.listVenues);
userRouter.get("/:id", venueController.getVenue);
userRouter.post("/", venueController.createVenue);
userRouter.patch("/:id", venueController.updateVenues);
userRouter.delete("/:id", venueController.deleteVenue);
