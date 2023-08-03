import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-single-user',
  templateUrl: './view-single-user.component.html',
  styleUrls: ['./view-single-user.component.css']
})
export class ViewSingleUserComponent implements OnInit {
  userId = 1; // user ID want to view
  user: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUser(this.userId).subscribe(
      (response: any) => {
        this.user = response.data;
      },
      (error) => {
        console.error('Failed to fetch user!', error);
      }
    );
  }
}
