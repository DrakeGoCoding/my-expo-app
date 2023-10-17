import { BaseModel } from '.';

export type User = BaseModel & {
  firstName: string;
  lastName: string;
  email: string;
};
