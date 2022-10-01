import { NextFunction, Response, Request } from "express";

export const createFirebaseObject = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  req.firebase = {} as Request["firebase"];

  return next();
};
