import { Request as RequestExpress } from "express";

export interface Request extends RequestExpress {
  body: {
    role: string;
    email: string;
  }
}
