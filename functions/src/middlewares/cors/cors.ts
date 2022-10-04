import * as functions from "firebase-functions";
import { preflightHeaders } from "../../configs";

export const cloudFunctionsPreflight = (
  _req: functions.https.Request,
  res: functions.Response<any>
) => {
  res.set(preflightHeaders);

  res.status(204).send("");
};
