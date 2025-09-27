import type { UserCredentials } from "../model";

export const constantsUser: UserCredentials = {
  email: import.meta.env.VITE_EMAIL,
  password: import.meta.env.VITE_PASSWORD,
};
