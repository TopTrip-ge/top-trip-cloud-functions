import { Response } from "express";
import { DBCollections } from "../../../../enums";
import { handleApiError } from "../../../../utils";
import { RequestWithUserId } from "./users-interfaces";

export const banUser = async (req: RequestWithUserId, res: Response) => {
  try {
    const {
      params: { uid },
    } = req;
    const auth = req.firebase.authInstance;
    const firestore = req.firebase.firestoreInstance;

    await auth.updateUser(uid, {
      disabled: true,
    });

    await firestore.collection(DBCollections.USERS).doc(uid).update({
      isBanned: true,
    });

    return res.json({ message: `The user with UID=${uid} has been banned` });
  } catch (err) {
    return handleApiError(res, err);
  }
};
