import { User } from '../interfaces/types';

// Interface para la respuesta de la API
interface ApiUserResponse {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  gender: string;
  // ... otras propiedades que pueda tener la API
}

export class ApiService {
  private apiUrl = "https://dummyjson.com/users";

  async getUsers(): Promise<User[]> {
    try {
      const response = await fetch(this.apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Mapear los usuarios de la API a nuestra interfaz User
      const users: User[] = data.users.map((apiUser: ApiUserResponse) => ({
        name: `${apiUser.firstName} ${apiUser.lastName}`,
        age: apiUser.age,
        email: apiUser.email,
        gender: apiUser.gender
      }));
      
      return users;
    } catch (error) {
      console.error('Error fetching users from API:', error);
      throw error;
    }
  }

  async getUserById(id: number): Promise<User | null> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          return null; // Usuario no encontrado
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const apiUser: ApiUserResponse = await response.json();
      
      return {
        name: `${apiUser.firstName} ${apiUser.lastName}`,
        age: apiUser.age,
        email: apiUser.email,
        gender: apiUser.gender
      };
    } catch (error) {
      console.error(`Error fetching user with id ${id}:`, error);
      throw error;
    }
  }
}