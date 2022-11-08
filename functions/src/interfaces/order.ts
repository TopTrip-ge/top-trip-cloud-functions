import { LANGUAGES, ORDER_STATUSES, PAYMENT_METHODS } from "../enums";

export interface Order {
  id: string;
  driver: string;
  name?: string;
  datetime: Date;
  phone: string;
  email: string;
  departure: string;
  destination: string;
  route: string;
  language: LANGUAGES;
  car: string;
  price?: number; // в Лари!
  commission?: number; // в Лари!
  paymentMethod: PAYMENT_METHODS;
  comment?: string;
  status: ORDER_STATUSES;
}
