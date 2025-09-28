import { User, Department } from '../interfaces/types';

export abstract class BaseEmployee {
  protected id: number;
  protected name: string;
  protected age: number;
  protected email: string;
  protected gender: string;
  protected department: Department;

  constructor(user: User, id: number, department: Department) {
    this.id = id;
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
    this.gender = user.gender;
    this.department = department;
  }

  abstract getDetails(): string;
  abstract calculateSalary(): number;

  // Método común para todas las subclases
  protected getBasicInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Department: ${this.department}`;
  }
}