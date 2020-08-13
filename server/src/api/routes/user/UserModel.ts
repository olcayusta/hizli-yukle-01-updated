export interface User {
  id: string;
  email: string;
  password: string;
  signUpDate: Date;
  token?: string;
}
