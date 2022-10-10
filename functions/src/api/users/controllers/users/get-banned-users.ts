import { Request, Response } from "express";
import { handleApiError, prepareAllUsers } from "../../../../utils";

export const getBannedUsers = async (req: Request, res: Response) => {
  try {
    const { firebase } = req;
    const auth = firebase.authInstance;

    const { users } = await auth.listUsers();
    const bannedUsers = users
      .filter((user) => user.disabled)
      .map(prepareAllUsers);
    return res.json({ users: bannedUsers });
  } catch (err) {
    return handleApiError(res, err);
  }
};
