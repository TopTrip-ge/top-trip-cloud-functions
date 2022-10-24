import { Router } from "express";
import * as multer from "multer";
import { isAdmin, isAuthorized } from "../../middlewares";
import {
  addRole,
  banUser,
  createUser,
  getAllUsers,
  getBannedUsers,
  getUserById,
  updateUser,
  unbanUser,
} from "./controllers";
import { MULTER_CREATE_USER_IMAGES } from "./users-constants";

export const userRouter = Router();
const upload = multer();

// Gets
userRouter.get("/", isAuthorized, isAdmin, getAllUsers);
userRouter.get("/banned", isAuthorized, isAdmin, getBannedUsers);
userRouter.get("/user/:uid", isAuthorized, getUserById);

// Posts
userRouter.post(
  "/create",
  isAuthorized,
  isAdmin,
  upload.fields(MULTER_CREATE_USER_IMAGES),
  createUser
);
userRouter.post("/role/add", isAuthorized, isAdmin, addRole);

// Puts
userRouter.put("/update/:uid", isAuthorized, isAdmin, updateUser);
userRouter.put("/ban/:uid", isAuthorized, isAdmin, banUser);
userRouter.put("/unban/:uid", isAuthorized, isAdmin, unbanUser);
