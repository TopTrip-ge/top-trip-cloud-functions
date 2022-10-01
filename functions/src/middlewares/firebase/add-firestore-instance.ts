import { NextFunction, Response, Request } from "express";
import * as admin from "firebase-admin";

export const addFirestoreInstance = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const firestoreInstance = admin.firestore();

  req.firebase.firestoreInstance = firestoreInstance;

  return next();
};
