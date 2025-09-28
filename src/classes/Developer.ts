import { BaseEmployee } from './BaseEmployee';
import { User, Department } from '../interfaces/types';

export class Developer extends BaseEmployee {
  private programmingLanguages: string[];

  constructor(user: User, id: number, languages: string[]) {
    super(user, id, Department.IT); // Siempre departamento IT
    this.programmingLanguages = languages;
  }

  getDetails(): string {
    return `${this.getBasicInfo()}, Position: Developer, Languages: ${this.programmingLanguages.join(', ')}`;
  }

  calculateSalary(): number {
    // Salario base 3000 + 200 por cada lenguaje
    return 3000 + (this.programmingLanguages.length * 200);
  }

  // Método específico para Developer
  getLanguages(): string[] {
    return this.programmingLanguages;
  }
}