import { Router } from "express";
import { isAdmin, isAuthorized } from "../../middlewares";
import { addRole, getAllUsers } from "./controllers";

export const userRouter = Router();

// Gets
userRouter.get("/", isAuthorized, isAdmin, getAllUsers);

// Posts
userRouter.post("/role/add", isAuthorized, isAdmin, addRole);
