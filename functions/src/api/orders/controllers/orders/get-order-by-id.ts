import { Response } from "express";
// import * as admin from "firebase-admin";
import { DBCollections } from "../../../../enums";
import { Order } from "../../../../interfaces";
import { handleApiError } from "../../../../utils";
import { RequestWithOrderId } from "./order-requests";

export const getOrderById = async (req: RequestWithOrderId, res: Response) => {
  try {
    const { uid } = req.params;
    // const user = await admin.auth().getUser(uid);
    const order = await req.firebase.firestoreInstance
      .collection(DBCollections.ORDERS)
      .doc(uid)
      .get();

    return res.json(order.data() as Order);
  } catch (err) {
    return handleApiError(res, err);
  }
};
