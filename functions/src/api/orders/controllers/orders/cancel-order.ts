import { Response } from "express";
import { DBCollections, ORDER_STATUSES } from "../../../../enums";
import { handleApiError } from "../../../../utils";
import { RequestWithOrderId } from "./order-requests";

export const cancelOrder = async (req: RequestWithOrderId, res: Response) => {
  try {
    const {
      params: { uid },
    } = req;
    const firestore = req.firebase.firestoreInstance;

    await firestore.collection(DBCollections.ORDERS).doc(uid).update({
      status: ORDER_STATUSES.CANCELED,
    });

    return res.json({ message: `The order with UID=${uid} has been approved` });
  } catch (err) {
    return handleApiError(res, err);
  }
};
