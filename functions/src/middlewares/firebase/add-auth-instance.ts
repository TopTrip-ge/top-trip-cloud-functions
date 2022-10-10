import { NextFunction, Response, Request } from "express";
import * as admin from "firebase-admin";

export const addAuthInstance = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const authInstance = admin.auth();

  req.firebase.authInstance = authInstance;

  return next();
};
