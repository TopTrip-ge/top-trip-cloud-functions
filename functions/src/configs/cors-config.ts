import { CorsOptions } from "cors";

const whitelistOrigins = [
  "http://localhost:3000",
  "https://top-trip-dev.web.app",
  "https://top-trip-prod.web.app",
];

export const corsConfig: CorsOptions = {
  origin: (origin, callback) => {
    if (whitelistOrigins.includes(origin ?? "")) {
      callback(null, true);

      return;
    }

    callback(new Error("Not allowed by CORS"));
  },
};
