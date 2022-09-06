import { Router } from "express";
import { addRole } from "./controllers";

export const userRouter = Router();

userRouter.post("/role/add", addRole);
