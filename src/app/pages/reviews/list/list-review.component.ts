import {Component, OnInit} from '@angular/core';
import {SmartTableService} from '../../../@core/data/smart-table.service';
import {LocalDataSource} from 'ng2-smart-table';
import {TABLE_CONFIG} from './table.config';
import {ReviewsService} from '../reviews.service';
import {ApiDataProviderService} from "../../../@core/services/api/api-data-provider.service";

@Component({
  selector: 'ngx-list-review-component',
  styleUrls: ['./list-review.component.scss'],
  templateUrl: './list-review.component.html',
})
export class ListReviewComponent implements OnInit {
  settings = TABLE_CONFIG;
  source: LocalDataSource = new LocalDataSource();

  constructor(private apiDataProviderService: ApiDataProviderService) {
  }

  ngOnInit() {
    this.apiDataProviderService.createApi('comments').getAll().subscribe(res => {
      this.source = res;
    })
  }

  // onDeleteConfirm(event): void {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     event.confirm.resolve();
  //   } else {
  //     event.confirm.reject();
  //   }
  // }
}
