import { Request, Response } from "express";
import * as admin from "firebase-admin";
import { prepareAllUsers, handleApiError } from "../../../../utils";

export const getAllUsers = async (_: Request, res: Response) => {
  try {
    const { users } = await admin.auth().listUsers();
    const usersResponseData = users
      .filter((user) => !user.disabled)
      .map(prepareAllUsers);

    return res.json({ users: usersResponseData });
  } catch (err) {
    return handleApiError(res, err);
  }
};
