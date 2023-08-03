import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  userId = 1; // user ID want to edit
  userName!: string;
  userJob!: string;

  constructor(private apiService: ApiService) { }

  editUser() {
    const newData = {
      name: this.userName,
      job: this.userJob
    };

    this.apiService.updateUser(this.userId, newData).subscribe(
      (response) => {
        console.log('User updated successfully!', response);
      },
      (error) => {
        console.error('Failed to update user!', error);
      }
    );
  }
}
