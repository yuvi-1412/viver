import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-single-resource',
  templateUrl: './view-single-resource.component.html',
  styleUrls: ['./view-single-resource.component.css']
})
export class ViewSingleResourceComponent implements OnInit {
  resourceId = 1; // resource ID want to view
  resource: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  //   this.apiService.getResourceWithColor(this.resourceId).subscribe(
  //     (response: any) => {
  //       this.resource = response; // response format from the API
  //     },
  //     (error) => {
  //       console.error('Failed to fetch resource!', error);
  //     }
  //   );
  }
}
