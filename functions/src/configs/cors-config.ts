import { CorsOptions } from "cors";

const whitelistOrigins = [
  "http://localhost:3000",
  "https://top-trip-dev.web.app",
  "https://top-trip-prod.web.app",
];

const pullRequestBranchUrlRegExp = /^https:\/\/top-trip-dev--.+\.web\.app$/g;

export const corsConfig: CorsOptions = {
  origin: (origin, callback) => {
    const originStr = origin ?? "";
    if (
      whitelistOrigins.includes(originStr) ||
      pullRequestBranchUrlRegExp.test(originStr)
    ) {
      callback(null, true);

      return;
    }

    callback(new Error("Not allowed by CORS"));
  },
};
