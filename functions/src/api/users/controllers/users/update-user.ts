import { Response } from "express";
import * as admin from "firebase-admin";
import { DBCollections } from "../../../../enums";
import { handleApiError } from "../../../../utils";
import { UpdateUserRequest } from "./users-interfaces";

export const updateUser = async (req: UpdateUserRequest, res: Response) => {
  try {
    const {
      body: {
        firstName,
        lastName,
        car,
        availableLanguages,
        hasWifi,
        salary,
        withAnimal,
      },
      params: { uid },
    } = req;
    const authInstance = admin.auth();
    const firestoreInstance = req.firebase.firestoreInstance;
    await authInstance.updateUser(uid, {
      displayName: `${firstName} ${lastName}`,
    });

    await firestoreInstance.collection(DBCollections.USERS).doc(uid).update({
      car,
      availableLanguages,
      hasWifi,
      salary,
      withAnimal,
    });

    return res.json({ message: "success" });
  } catch (err) {
    return handleApiError(res, err);
  }
};
