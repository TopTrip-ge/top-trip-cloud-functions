import { USER_ROLES } from "../enums";

const availableRoles = [USER_ROLES.ADMIN, USER_ROLES.DRIVER];

export const hasRoles = (neededRoles: USER_ROLES[]) => {
  return neededRoles.every((role) => availableRoles.includes(role));
};
