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

export interface UserRecord extends FirebaseUserRecord {
  customClaims: {
    availableLanguages: AVAILABLE_LANGUAGES[];
    car: Car;
    hasWifi: boolean;
    role: USER_ROLES;
    salary: number;
    withAnimal: boolean;
  };
}
