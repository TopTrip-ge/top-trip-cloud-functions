import { Response } from "express";
import { DBCollections, ORDER_STATUSES } from "../../../../enums";
import { handleApiError } from "../../../../utils";
import { UpdateOrderRequest } from "./order-requests";

export const updateOrder = async (req: UpdateOrderRequest, res: Response) => {
  try {
    const {
      body: {
        name,
        phone,
        email,
        departure,
        destination,
        language,
        car,
        price,
        comment,
      },
      params: { uid },
    } = req;
    const firestore = req.firebase.firestoreInstance;

    await firestore.collection(DBCollections.ORDERS).doc(uid).update({
      name,
      phone,
      email,
      departure,
      destination,
      language,
      car,
      price,
      comment,
      status: ORDER_STATUSES.CREATED,
    });

    return res.json({ message: "success" });
  } catch (err) {
    return handleApiError(res, err);
  }
};
