import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  // Register a new user
  registerUser(email: string, password: string) {
    const url = `${this.apiUrl}/register`;
    const data = { email, password };
    return this.http.post(url, data);
  }

  // Login a user
  loginUser(email: string, password: string) {
    const url = `${this.apiUrl}/login`;
    const data = { email, password };
    return this.http.post(url, data);
  }

  // Fetch list of users
  getUsers() {
    const url = `${this.apiUrl}/users`;
    return this.http.get(url);
  }

  // Update user details
  updateUser(userId: number, newData: any) {
    const url = `${this.apiUrl}/users/${userId}`;
    return this.http.put(url, newData);
  }

  // Fetch a single user
  getUser(userId: number) {
    const url = `${this.apiUrl}/users/${userId}`;
    return this.http.get(url);
  }

  // Fetch list of resources with color palettes
  getResourcesWithColor() {
    // appropriate API endpoint or mock data if reqres.in doesn't support this feature.
    // For example:
    // const url = 'https://your-resource-api.com/resources';
    // return this.http.get(url);
  }

  // Fetch a single resource with palette
  getResourceWithColor(resourceId: number) {
    // appropriate API endpoint or mock data if reqres.in doesn't support this feature.
    // For example:
    // const url = `https://your-resource-api.com/resources/${resourceId}`;
    // return this.http.get(url);
  }
}
