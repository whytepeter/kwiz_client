export enum UserTypes {
  user = "user",
  admin = "admin",
}

export type SignInRequest = {
  email: string;
  password: string;
};

export type SignUpRequest = {
  name: string;
  email: string;
  password: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  verified: boolean;
  blocked: boolean;
  account_disabled: boolean;
  password_change_required: boolean;
  type: UserTypes;
  createdAt: Date;
  updatedAt: Date;
};
