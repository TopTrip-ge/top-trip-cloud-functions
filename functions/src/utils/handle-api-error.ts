import { Response } from "express";

export const handleApiError = (res: Response, err: any) => {
  return res.status(500).send({ message: `${err.code} - ${err.message}` });
};
