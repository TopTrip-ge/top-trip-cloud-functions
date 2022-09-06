import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import { applyRoutes } from "./api";
import { corsConfig } from "./configs";

admin.initializeApp();

const app = express();
app.use(cors(corsConfig));
app.use(bodyParser.json());

applyRoutes(app);

export const api = functions.region("europe-west3").https.onRequest(app);
