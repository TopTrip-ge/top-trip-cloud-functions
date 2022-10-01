import * as admin from "firebase-admin";

declare global {
  namespace Express {
    export interface Request {
      firebase: {
        firestoreInstance: admin.firestore.Firestore;
      };
    }
  }
}
