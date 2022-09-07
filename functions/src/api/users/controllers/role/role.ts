import { Response } from "express";
import * as admin from "firebase-admin";
import { handleApiError } from "../../../../utils";
import { Request } from "./role-interfaces";

export const addRole = async (req: Request, res: Response) => {
  try {
    const { role, email } = req.body;
    const authInstance = admin.auth();
    const { uid } = await authInstance.getUserByEmail(email);

    await authInstance.setCustomUserClaims(uid, { role });

    return res.json({ uid, role });
  } catch (err) {
    return handleApiError(res, err);
  }
};
