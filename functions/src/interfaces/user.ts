import { AVAILABLE_LANGUAGES, USER_ROLES } from "../enums";
import { UserRecord as FirebaseUserRecord } from "firebase-functions/v1/auth";
import { Car } from "./car";

export interface UserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  salary?: number; // в Лари!
  role: USER_ROLES;
  availableLanguages?: AVAILABLE_LANGUAGES[];
  hasWifi?: boolean;
  withAnimal?: boolean;
  car?: Car;
}

export type UserRecordInFirestore = Omit<
  UserPayload,
  "firstName" | "lastName" | "password" | "role"
>;

export interface UserRecord {
  role: USER_ROLES;
  displayName: FirebaseUserRecord["displayName"];
  email: FirebaseUserRecord["email"];
}

export type MapUserToRecord = UserRecord & {
  additionalInfo: UserRecordInFirestore | null;
};
