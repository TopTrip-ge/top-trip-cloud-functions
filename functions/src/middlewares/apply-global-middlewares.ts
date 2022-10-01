import { Express } from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import { addFirestoreInstance, createFirebaseObject } from "./firebase";
import { corsConfig } from "../configs";

export const applyGlobalMiddlewares = (app: Express) => {
  app.use(createFirebaseObject);
  app.use(addFirestoreInstance);

  app.use(cors(corsConfig));
  app.use(bodyParser.json());
};
