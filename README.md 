# DESARROLLO.md 


## Taller #2 TypeScript

## Documentacion



__

## **Descripción del Proyecto**

Sistema de gestión de empleados desarrollado en TypeScript que consume datos de la API DummyJSON, implementando herencia e inyección de dependencias.__

__

## **Arquitectura del Sistema** 
  
### Estructura de Clases

    |---src/
    |   |--- Classes/ 
    |   |        |---BaseEmployee.ts
    |   |        |---Developer.ts
    |   |        |---Manager.ts
    |   |
    |   |
    |   |---interfaces/
    |   |        |---types.ts
    |   |
    |   |
    |   |---services/
    |   |        |---ApiService.ts
    |   |        |---EmployeeService.ts
    |   |        
    |   |
    |   |---main.ts
    |   
    |
    |---package.json
    |
    |
    |---tsconfig.json
    |
    |
    |---README.md


### *src/:* carpeta principal

1. **classes**
    1. BaseEmployee: Clase abstracta que define la estructura base de todos los empleados con sus propiedades (id, nombre, edad, email, género, departamento) y métodos abstractos que las clases hijas deben implementar

    2. Developer: Clase que extiende `BaseEmployee` para empleados del departamento IT. Cuenta con un array de lenguajes de programación, calcula el salario en base a la cantidad de lenguajes que domina el desarrollador e incluye métodos específicos para manejar y mostrar información de lenguajes (getDetails, calculateSalary y getLanguages)

    3.  Manager: Clase para gerentes que pueden pertenecer a cualquier departamento. Su salario depende del tamaño del equipo que supervisa, con bonificaciones por cada miembro del equipo

2. **interfaces**
    1. types: Define User, Employee y el enum Department

3. **services**
    1. ApiService: Se encarga de conectarse con la API externa (DummyJSON), obteniendo y transformando datos

    2. EmployeeService: Administra la lista de empleados, Recibe inyección de dependencias al recibir un ApiService y se encarga de convertir usuarios de la API en empleados del sistema

4. **main** es el archivo de entrada de la aplicación. Desde aquí se inicializan los servicios, se cargan empleados y se muestran los resultados en consola

5. **package.json** Define los scripts de ejecución y las dependencias del proyecto

6. **tsconfig.json** configuración de TypeScript
 
## Herencia en las Clases

En el proyecto se definio una clase abstracta BaseEmployee, que concentra los atributos y métodos comunes de todos los empleados.
A partir de ella se crean las clases Developer y Manager, que heredan su estructura y sobrescriben los métodos abstractos getDetails() y calculateSalary()

La inyección de dependencias se aplicó entre EmployeeService y ApiService, el constructor de EmployeeService recibio un objeto de tipo ApiService como parámetro, la instancia de ApiService se crea en main.ts, y allí mismo se “nyecta dentro de EmployeeService, esto se puede ver en [main.ts](https://github.com/mmanosaslva/manosalva-taller02-typescript/blob/main/src/main.ts).


## Dificultades encontradas y soluciones

**1. Ejecucion con npm run dev:** Al inicio tuve errores, el comando no funcionaba porque me faltaba instalar las dependencias, entonces las instale y luego pude ejecutar el proyecto sin problemas

**2. Problemas en main.ts:** Al ejecutar el proyecto salía el error “Module './services/ApiService' has no exported member 'ApiService'”. Esto sucedió porque en el archivo ApiService.ts había olvidado escribir export al declarar la clase, lo corregui y main.ts funciono