import { CorsOptions } from "cors";
import { X_USER_TOKEN_ID } from "../constants";

export const whitelistOrigins = [
  "http://localhost:3000",
  "https://top-trip-dev.web.app",
  "https://top-trip-prod.web.app",
];

const pullRequestBranchUrlRegExp = /^https:\/\/top-trip-dev--.+\.web\.app$/g;

export const exposedHeaders = `Content-Type, ${X_USER_TOKEN_ID}`;

const isValidOrigin = (origin: string) =>
  whitelistOrigins.includes(origin) || pullRequestBranchUrlRegExp.test(origin);

export const corsConfig: CorsOptions = {
  origin: (origin, callback) => {
    console.log(origin);
    const originStr = origin ?? "";
    if (isValidOrigin(originStr)) {
      callback(null, true);

      return;
    }

    callback(new Error("Not allowed by CORS"));
  },
  exposedHeaders,
};

export const preflightHeaders = (origin: string) => {
  let accessControlAllowOrigin: string | null = origin;

  if (!isValidOrigin(origin)) {
    accessControlAllowOrigin = null;
  }

  return {
    "Access-Control-Allow-Origin": accessControlAllowOrigin,
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
    "Access-Control-Allow-Headers": exposedHeaders,
  };
};
