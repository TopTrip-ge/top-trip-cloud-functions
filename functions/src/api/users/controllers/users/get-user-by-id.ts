import { Response } from "express";
import * as admin from "firebase-admin";
import { DBCollections } from "../../../../enums";
import { UserRecordInFirestore } from "../../../../interfaces";
import { handleApiError, mapUserToRecord } from "../../../../utils";
import { GetUserRequest } from "./users-interfaces";

export const getUserById = async (req: GetUserRequest, res: Response) => {
  try {
    const { uid } = req.params;
    const user = await admin.auth().getUser(uid);
    const userInfo = await req.firebase.firestoreInstance
      .collection(DBCollections.USERS)
      .doc(uid)
      .get();

    const mappedUser = mapUserToRecord({
      displayName: user.displayName,
      email: user.email,
      role: user.customClaims!.role,
      additionalInfo: userInfo.exists
        ? (userInfo.data() as UserRecordInFirestore)
        : null,
    });

    return res.json(mappedUser);
  } catch (err) {
    return handleApiError(res, err);
  }
};
