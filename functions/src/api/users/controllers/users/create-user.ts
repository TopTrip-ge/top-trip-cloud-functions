import { Response } from "express";
import * as admin from "firebase-admin";
import { USER_ROLES } from "../../../../enums";
import { handleApiError } from "../../../../utils";
import { CreateUserRequest } from "./users-interfaces";

export const createUser = async (req: CreateUserRequest, res: Response) => {
  try {
    const {
      body: {
        availableLanguages,
        email,
        firstName,
        hasWifi,
        lastName,
        password,
        role,
        salary,
        withAnimal,
        car,
      },
    } = req;
    const authInstance = admin.auth();
    const { uid } = await authInstance.createUser({
      email,
      password,
      displayName: `${firstName} ${lastName}`,
    });

    await authInstance.setCustomUserClaims(uid, {
      role,
    });

    // Add additional params if driver
    if (role === USER_ROLES.DRIVER) {
      await authInstance.setCustomUserClaims(uid, {
        availableLanguages,
        car,
        hasWifi,
        salary,
        withAnimal,
        role,
      });
    }

    return res.json({ uid, message: "Success!" });
  } catch (err) {
    return handleApiError(res, err);
  }
};
