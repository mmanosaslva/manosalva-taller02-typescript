import { ApiService } from './services/ApiService';
import { EmployeeService } from './services/EmployeeService';

async function main(): Promise<void> {
  try {
    // Crear instancias de los servicios (inyección de dependencias)
    const apiService = new ApiService();
    const employeeService = new EmployeeService(apiService);

    // Cargar empleados desde la API
    console.log('Loading employees from API...');
    await employeeService.loadEmployeesFromApi();

    // Mostrar información de todos los empleados
    const employees = employeeService.getAllEmployees();

    console.log('\n=== SISTEMA DE EMPLEADOS ===');
    console.log(`Total employees: ${employees.length}\n`);
    
    employees.forEach((employee, index) => {
      console.log(`--- Employee ${index + 1} ---`);
      console.log(`Details: ${employee.getDetails()}`);
      console.log(`Salary: $${employee.calculateSalary()}`);
      console.log(''); // línea en blanco para separar
    });

  } catch (error) {
    console.error('Error in main application:', error);
  }
}

main();