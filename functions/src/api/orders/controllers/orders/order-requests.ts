import { Request } from "express";
import { Order } from "../../../../interfaces";

export interface CreateOrderRequest extends Request {
  body: Order;
}

export interface RequestWithOrderId extends Request {
  params: {
    uid: string;
  };
}

export interface UpdateOrderRequest extends Request {
  body: Omit<Order, "route">;
  params: {
    uid: string;
  };
}
