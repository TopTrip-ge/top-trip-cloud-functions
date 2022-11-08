import { Application } from "express";
import { userRouter } from "./users";
import { orderRouter } from "./orders";

export const applyRoutes = (app: Application) => {
  app.use("/users", userRouter);
  app.use("/orders", orderRouter);
};
