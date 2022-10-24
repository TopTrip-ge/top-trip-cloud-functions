import { Response } from "express";
import * as admin from "firebase-admin";
// import { DBCollections, USER_ROLES } from "../../../../enums";
import { handleApiError } from "../../../../utils";
import { CreateUserRequest } from "./users-interfaces";

export const createUser = async (req: CreateUserRequest, res: Response) => {
  try {
    const {
      body: {
        // availableLanguages,
        email,
        firstName,
        // hasWifi,
        lastName,
        password,
        // role,
        // salary,
        // withAnimal,
        // car,
      },
    } = req;
    const authInstance = admin.auth();
    // const firestoreInstance = req.firebase.firestoreInstance;

    const { uid } = await authInstance.createUser({
      email,
      password,
      displayName: `${firstName} ${lastName}`,
    });

    console.log(req);

    // await authInstance.setCustomUserClaims(uid, {
    //   role,
    // });
    // await firestoreInstance.collection(DBCollections.USERS).doc(uid).set({
    //   role,
    // });

    // // Add additional params if driver
    // if (role === USER_ROLES.DRIVER) {
    //   await firestoreInstance.collection(DBCollections.USERS).doc(uid).set({
    //     availableLanguages,
    //     car,
    //     hasWifi,
    //     salary,
    //     withAnimal,
    //     role,
    //   });
    // }

    return res.json({ uid, message: "Success!" });
  } catch (err) {
    console.log("FNLKSNFLKJDNFKLDSNFLK");
    return handleApiError(res, err);
  }
};
