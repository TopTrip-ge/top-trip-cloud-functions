import { Response } from "express";
import * as admin from "firebase-admin";
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

    const user = await authInstance.updateUser(uid, {
      displayName: `${firstName} ${lastName}`,
    });

    await authInstance.setCustomUserClaims(uid, {
      ...user.customClaims,
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
