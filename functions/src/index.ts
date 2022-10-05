import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import { applyRoutes } from "./api";
import { applyGlobalMiddlewares, cloudFunctionsPreflight } from "./middlewares";

const app = express();

applyGlobalMiddlewares(app);
applyRoutes(app);

admin.initializeApp();

export const api = functions
  .region("europe-west3")
  .https.onRequest((req, res) => {
    // Preflight request
    if (req.method === "OPTIONS") {
      cloudFunctionsPreflight(req, res);
    } else {
      app(req, res);
    }
  });
