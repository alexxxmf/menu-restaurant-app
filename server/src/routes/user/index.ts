import { Router } from "express";
import { userController } from "../../controllers";

export const userRouter = Router();

userRouter.post("/login", userController.login);
userRouter.get("/logout");
userRouter.post("/register", userController.register);
userRouter.get("/profile");
