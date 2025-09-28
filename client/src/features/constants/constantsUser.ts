import type { UserCredentials } from "../model";

export const constantsUser: UserCredentials = {
  email: import.meta.env.VITE_EMAIL,
  password: import.meta.env.VITE_PASSWORD,
};

export const constantsErrorEmail = import.meta.env.VITE_ERROR_EMAIL;
