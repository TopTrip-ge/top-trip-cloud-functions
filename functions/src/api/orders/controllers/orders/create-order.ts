import { Response } from "express";
import { DBCollections, ORDER_STATUSES } from "../../../../enums";
import { handleApiError } from "../../../../utils";
import { CreateOrderRequest } from "./order-requests";

export const createOrder = async (req: CreateOrderRequest, res: Response) => {
  try {
    const {
      body: {
        driver,
        name,
        datetime,
        phone,
        email,
        departure,
        destination,
        language,
        car,
        price,
        commission,
        comment,
      },
    } = req;
    const firestore = req.firebase.firestoreInstance;

    const { id } = await firestore.collection(DBCollections.ORDERS).add({
      driver,
      name,
      datetime,
      phone,
      email,
      departure,
      destination,
      language,
      car,
      price,
      commission,
      comment,
      status: ORDER_STATUSES.CREATED,
    });

    return res.json({ id, ok: true, message: "Success!" });
  } catch (err) {
    return handleApiError(res, err);
  }
};
