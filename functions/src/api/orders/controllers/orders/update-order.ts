import { Response } from "express";
// import * as admin from "firebase-admin";
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
    // const authInstance = admin.auth();
    const firestore = req.firebase.firestoreInstance;

    await firestore.collection(DBCollections.ORDERS).doc(uid).update({
      name,
      // date,
      // time,
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
