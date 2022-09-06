import { Request, Response } from "express";
import * as admin from "firebase-admin";
import { handleApiError } from "../../../../utils/handle-api-error";

export const getAllUsers = async (_: Request, res: Response) => {
  try {
    const { users } = await admin.auth().listUsers();
    const usersResponseData = users.map((user) => ({
      uid: user.uid,
      email: user.email,
      roles: user.customClaims?.role ?? "",
    }));

    return res.json({ users: usersResponseData });
  } catch (err) {
    return handleApiError(res, err);
  }
};
