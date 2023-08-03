import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email!: string;
  password!: string;

  constructor(private apiService: ApiService) { }

  registerUser() {
    this.apiService.registerUser(this.email, this.password).subscribe(
      (response) => {
        console.log('Registration successful!', response);
      },
      (error) => {
        console.error('Registration failed!', error);
      }
    );
  }
}
