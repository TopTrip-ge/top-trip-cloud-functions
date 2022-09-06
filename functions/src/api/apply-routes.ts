import { Application } from "express";
import { userRouter } from "./users";

export const applyRoutes = (app: Application) => {
  app.use("/users", userRouter);
};
