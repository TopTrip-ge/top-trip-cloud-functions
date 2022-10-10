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
import { unbanUser } from "./controllers/users/unban-user";

export const userRouter = Router();

// Gets
userRouter.get("/", isAuthorized, isAdmin, getAllUsers);
userRouter.get("/banned", isAuthorized, isAdmin, getBannedUsers);
userRouter.get("/user/:uid", isAuthorized, getUserById);

// Posts
userRouter.post("/create", isAuthorized, isAdmin, createUser);
userRouter.post("/role/add", isAuthorized, isAdmin, addRole);

// Puts
userRouter.put("/update/:uid", isAuthorized, isAdmin, updateUser);
userRouter.put("/ban/:uid", isAuthorized, isAdmin, banUser);
userRouter.put("/unban/:uid", isAuthorized, isAdmin, unbanUser);
