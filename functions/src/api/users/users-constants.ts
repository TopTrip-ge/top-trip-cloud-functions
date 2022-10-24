import * as multer from "multer";

export enum USER_IMAGES_FIELDS {
  CAR = "carImage",
  DRIVER = "driverImage",
}

export const MULTER_CREATE_USER_IMAGES: multer.Field[] = [
  {
    name: USER_IMAGES_FIELDS.CAR,
  },
  {
    name: USER_IMAGES_FIELDS.DRIVER,
  },
];
