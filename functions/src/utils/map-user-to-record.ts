import { MapUserToRecord } from "../interfaces";

export const mapUserToRecord = ({
  displayName,
  role,
  email,
  additionalInfo,
}: MapUserToRecord) => {
  const [firstName, lastName] = displayName?.split(" ") ?? [];
  const record = {
    role,
    firstName,
    lastName,
    email: email ?? "",
  };

  if (additionalInfo) {
    return {
      ...record,
      ...additionalInfo,
    };
  }

  return record;
};
