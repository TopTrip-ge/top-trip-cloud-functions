import { Request, Response, NextFunction } from "express";
import * as admin from "firebase-admin";
import { RESPONSE_MESSAGES, X_USER_TOKEN_ID } from "../../constants";
import { handleApiError, hasRoles } from "../../utils";

export const isAuthorized = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { query } = req;
    const userTokenId = query[X_USER_TOKEN_ID];

    if (!userTokenId) {
      return res
        .status(401)
        .json({ message: RESPONSE_MESSAGES.NOT_AUTHORIZED });
    }

    return next();
  } catch (err) {
    return handleApiError(res, err);
  }
};

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { query } = req;
    const userTokenId = query[X_USER_TOKEN_ID];

    const user = await admin.auth().verifyIdToken(userTokenId as string);
    const isAdmin = hasRoles([user.role]);

    if (!isAdmin) {
      return res
        .status(403)
        .json({ message: RESPONSE_MESSAGES.HAVE_NO_PERMISSIONS });
    }

    return next();
  } catch (err) {
    return handleApiError(res, err);
  }
};
