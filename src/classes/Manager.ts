import { BaseEmployee } from './BaseEmployee';
import { User, Department } from '../interfaces/types';

export class Manager extends BaseEmployee {
  private teamSize: number;

  constructor(user: User, id: number, department: Department, teamSize: number) {
    super(user, id, department);
    this.teamSize = teamSize;
  }

  getDetails(): string {
    return `${this.getBasicInfo()}, Position: Manager, Team Size: ${this.teamSize}`;
  }

  calculateSalary(): number {
    // Salario base 4000 + 300 por cada miembro del equipo
    return 4000 + (this.teamSize * 300);
  }

  // Método específico para Manager
  getTeamSize(): number {
    return this.teamSize;
  }
}