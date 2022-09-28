import { Response } from "express";
import * as admin from "firebase-admin";
import { UserRecord } from "../../../../interfaces";
import { handleApiError, mapUserToRecord } from "../../../../utils";
import { GetUserRequest } from "./users-interfaces";

export const getUserById = async (req: GetUserRequest, res: Response) => {
  try {
    const { uid } = req.params;
    const user = (await admin.auth().getUser(uid)) as UserRecord;
    const mappedUser = mapUserToRecord(user);

    return res.json(mappedUser);
  } catch (err) {
    return handleApiError(res, err);
  }
};
