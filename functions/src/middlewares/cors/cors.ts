import * as functions from "firebase-functions";
import { preflightHeaders } from "../../configs";

export const cloudFunctionsPreflight = (
  req: functions.https.Request,
  res: functions.Response<any>
) => {
  const origin = req.get("Origin") ?? "";
  res.set(preflightHeaders(origin));

  res.status(204).send("");
};
