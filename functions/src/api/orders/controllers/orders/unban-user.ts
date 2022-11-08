import { Response } from "express";
import { DBCollections } from "../../../../enums";
import { handleApiError } from "../../../../utils";
import { RequestWithUserId } from "./users-interfaces";

export const unbanUser = async (req: RequestWithUserId, res: Response) => {
  try {
    const {
      firebase,
      params: { uid },
    } = req;
    const auth = firebase.authInstance;
    const firestore = req.firebase.firestoreInstance;

    await auth.updateUser(uid, {
      disabled: false,
    });

    await firestore.collection(DBCollections.USERS).doc(uid).update({
      isBanned: false,
    });

    return res.json({ message: `The user with UID=${uid} has been unbanned` });
  } catch (err) {
    return handleApiError(res, err);
  }
};
