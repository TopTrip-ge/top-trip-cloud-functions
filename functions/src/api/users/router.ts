import { Router } from "express";
import { addRole, getAllUsers } from "./controllers";

export const userRouter = Router();

// Gets
userRouter.get("/", getAllUsers);

// Posts
userRouter.post("/role/add", addRole);
