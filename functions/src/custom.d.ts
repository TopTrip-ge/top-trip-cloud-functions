import * as admin from "firebase-admin";
import { Auth } from "firebase-admin/lib/auth/auth";

declare global {
  namespace Express {
    export interface Request {
      firebase: {
        firestoreInstance: admin.firestore.Firestore;
        authInstance: Auth;
      };
    }
  }
}
