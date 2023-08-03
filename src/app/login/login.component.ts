import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private apiService: ApiService) { }

  loginUser() {
    this.apiService.loginUser(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful!', response);
      },
      (error) => {
        console.error('Login failed!', error);
      }
    );
  }
}
