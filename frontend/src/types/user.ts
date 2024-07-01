export interface User {
  id: number;
  name?: string;
  birthdate: string;
  country?: string;
}
export interface UserFormType {
  name?: string;
  birthdate: string;
  country?: string;
}