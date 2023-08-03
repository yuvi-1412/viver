import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-resources-color',
  templateUrl: './list-resources-color.component.html',
  styleUrls: ['./list-resources-color.component.css']
})
export class ListResourcesColorComponent implements OnInit {
  resources!: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.apiService.getResourcesWithColor().subscribe(
    //   (response: any) => {
    //     this.resources = response; // response format from the API
    //   },
    //   (error) => {
    //     console.error('Failed to fetch resources!', error);
    //   }
    // );
  }
}
