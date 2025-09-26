export interface User {
  name: string;
  age: number;
  email: string;
  gender: string;
}

export interface Employee extends User {
  id: number;
  position: string;
  department: string;
  salary: number;
}

export enum Department {
  IT = "IT",
  HR = "HR",
  SALES = "SALES",
  MARKETING = "MARKETING",
}
