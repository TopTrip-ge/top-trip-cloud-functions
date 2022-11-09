import { Router } from "express";
import { isAdmin, isAuthorized } from "../../middlewares";
import {
  approveOrder,
  declineOrder,
  cancelOrder,
  completeOrder,
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
} from "./controllers";

export const orderRouter = Router();

// Gets
orderRouter.get("/", isAuthorized, isAdmin, getAllOrders);
orderRouter.get("/order/:uid", isAuthorized, getOrderById);

// Posts
orderRouter.post("/create", isAuthorized, isAdmin, createOrder);
orderRouter.post("/approve/:uid", isAuthorized, isAdmin, approveOrder);
orderRouter.post("/decline/:uid", isAuthorized, isAdmin, declineOrder);
orderRouter.post("/cancel/:uid", isAuthorized, isAdmin, cancelOrder);
orderRouter.post("/complete/:uid", isAuthorized, isAdmin, completeOrder);

// Puts
orderRouter.put("/update/:uid", isAuthorized, isAdmin, updateOrder);

