import { Role } from './role.model';

export interface User {
  uid: string;
  displayName: string;
  role: Role;
}
