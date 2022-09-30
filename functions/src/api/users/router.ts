import { Router } from "express";
import { isAdmin, isAuthorized } from "../../middlewares";
import { addRole, createUser, getAllUsers, getUserById } from "./controllers";

export const userRouter = Router();

// Gets
userRouter.get("/", isAuthorized, isAdmin, getAllUsers);
userRouter.get("/:uid", isAuthorized, getUserById);

// Posts
userRouter.post("/create", isAuthorized, isAdmin, createUser);
userRouter.post("/role/add", isAuthorized, isAdmin, addRole);
