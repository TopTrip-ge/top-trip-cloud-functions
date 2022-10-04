import { Router } from "express";
import { isAdmin, isAuthorized } from "../../middlewares";
import {
  addRole,
  banUser,
  createUser,
  getAllUsers,
  getBannedUsers,
  getUserById,
  updateUser,
} from "./controllers";

export const userRouter = Router();

// Gets
userRouter.get("/", isAdmin, isAuthorized, getAllUsers);
userRouter.get("/:uid", isAuthorized, getUserById);
userRouter.get("/banned", isAdmin, isAuthorized, getBannedUsers);

// Posts
userRouter.post("/create", isAuthorized, isAdmin, createUser);
userRouter.post("/role/add", isAuthorized, isAdmin, addRole);
userRouter.post("/ban/:uid", isAuthorized, isAdmin, banUser);

// Puts
userRouter.put("/update/:uid", isAuthorized, isAdmin, updateUser);
