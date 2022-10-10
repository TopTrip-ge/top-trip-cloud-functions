import { UserRecord } from "firebase-functions/v1/auth";

export const prepareAllUsers = (user: UserRecord) => ({
  uid: user.uid,
  email: user.email,
  role: user.customClaims?.role ?? "",
});
