import { UserPayload, UserRecord } from "../interfaces";

export const mapUserToRecord = ({
  displayName,
  customClaims,
  email,
}: UserRecord): Omit<UserPayload, "password"> => {
  const [firstName, lastName] = displayName?.split(" ") ?? [];

  return {
    ...customClaims,
    firstName,
    lastName,
    email: email ?? "",
  };
};
