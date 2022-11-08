import { Request, Response } from "express";
import { Order } from "../../../../interfaces";
import { handleApiError } from "../../../../utils";
import { DBCollections } from "../../../../enums";

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const firestore = req.firebase.firestoreInstance;
    const ordersRef = firestore.collection(DBCollections.ORDERS);
    const docs = await ordersRef.get();
    const orders: Order[] = [];
    docs.forEach( (doc) => {
      const order = doc.data() as Order;
      order.id = doc.id;
      orders.push(order);
    });
    // const ordersResponseData = orders
    //   .filter( (order) => (order.status != ORDER_STATUSES.DECLINED
    //                      && order.status != ORDER_STATUSES.CANCELED));

    return res.json({ orders });
  } catch (err) {
    return handleApiError(res, err);
  }
};
