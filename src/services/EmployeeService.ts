import { BaseEmployee } from '../classes/BaseEmployee';
import { Developer } from '../classes/Developer';
import { Manager } from '../classes/Manager';
import { ApiService } from './ApiService';
import { User, Department } from '../interfaces/types';

export class EmployeeService {
  private employees: BaseEmployee[] = [];

  constructor(private apiService: ApiService) {
    // Inyección de dependencias: ApiService se inyecta en el constructor
  }

  async loadEmployeesFromApi(): Promise<void> {
    try {
      const users = await this.apiService.getUsers();
      
      // Tomar los primeros 3 usuarios para crear empleados
      const selectedUsers = users.slice(0, 3);
      
      // Crear 2 developers y 1 manager
      if (selectedUsers.length >= 3) {
        // Developer 1
        const dev1 = new Developer(selectedUsers[0], 1, ['JavaScript', 'TypeScript']);
        this.addEmployee(dev1);
        
        // Developer 2  
        const dev2 = new Developer(selectedUsers[1], 2, ['Python', 'Java', 'C++']);
        this.addEmployee(dev2);
        
        // Manager
        const manager = new Manager(selectedUsers[2], 3, Department.HR, 5);
        this.addEmployee(manager);
      }
      
      console.log(`Loaded ${this.employees.length} employees from API`);
    } catch (error) {
      console.error('Error loading employees from API:', error);
      throw error;
    }
  }

  getEmployeeById(id: number): BaseEmployee | undefined {
    return this.employees.find(emp => (emp as any).id === id);
  }

  getAllEmployees(): BaseEmployee[] {
    return this.employees;
  }

  addEmployee(employee: BaseEmployee): void {
    this.employees.push(employee);
  }

  // Método adicional útil
  getEmployeesCount(): number {
    return this.employees.length;
  }
}