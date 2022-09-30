import { Request } from "express";
import { UserPayload } from "../../../../interfaces";

export interface CreateUserRequest extends Request {
  body: UserPayload;
}

export interface GetUserRequest extends Request {
  params: {
    uid: string;
  };
}

export interface UpdateUserRequest extends Request {
  body: Omit<UserPayload, "password">;
  params: {
    uid: string;
  };
}
