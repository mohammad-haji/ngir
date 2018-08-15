import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {TABLE_CONFIG} from './table.config';
import {UsersService} from '../users.service';
import {ApiDataProviderService} from "../../../@core/services/api/api-data-provider.service";

@Component({
  selector: 'ngx-list-user-component',
  styleUrls: ['./list-user.component.scss'],
  templateUrl: './list-user.component.html',
})
export class ListUserComponent implements OnInit {
  settings = TABLE_CONFIG;
  source: LocalDataSource = new LocalDataSource();

  constructor(private userService: UsersService,
              private apiDataProviderService: ApiDataProviderService) {
  }

  ngOnInit() {
    this.apiDataProviderService.createApi('users').getAll().subscribe(res => {
      this.source = res;
    });
  }

  // onDeleteConfirm(event): void {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     event.confirm.resolve();
  //   } else {
  //     event.confirm.reject();
  //   }
  // }
}
