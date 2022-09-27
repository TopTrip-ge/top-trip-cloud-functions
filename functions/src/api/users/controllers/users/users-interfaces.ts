import { Request } from "express";
import { AVAILABLE_LANGUAGES, USER_ROLES } from "../../../../enums";

export interface CreateUserRequest extends Request {
  body: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    salary?: number; // в Лари!
    role: USER_ROLES;
    availableLanguages?: AVAILABLE_LANGUAGES;
    hasWifi?: boolean;
    withAnimal?: boolean;
    car?: {
      name: string;
      literPerOneHundredKilometer: number;
      typeOfFuel: string;
      numberOfPassengers: number;
      numberOfBaggage: number;
    };
  };
}
