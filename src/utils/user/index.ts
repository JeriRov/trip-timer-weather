import { UserType } from "api/user/user.types";

export const saveUserToLocalStorage = (user: UserType) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromLocalStorage = (): UserType | null => {
  const user = localStorage.getItem("user");

  if (!user) {
    return null;
  }

  return JSON.parse(user);
};
