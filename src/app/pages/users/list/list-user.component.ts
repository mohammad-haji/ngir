import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {TABLE_CONFIG} from './table.config';
import {UsersService} from '../users.service';
import {ApiDataProviderService} from "../../../@core/services/api/api-data-provider.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ngx-list-user-component',
  styleUrls: ['./list-user.component.scss'],
  templateUrl: './list-user.component.html',
})
export class ListUserComponent implements OnInit {
  settings = TABLE_CONFIG;
  source: LocalDataSource = new LocalDataSource();

  constructor(private userService: UsersService,
              private apiDataProviderService: ApiDataProviderService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.getList();
  }

  /**
   * edit enitty
   * @param evt
   */
  onEdit(evt: any): void {
    this.router.navigate([`../edit/${evt.data.id}`], {relativeTo: this.activatedRoute})
  }

  /**
   * create entity
   * @param evt
   */
  onCreate(evt: any): void {
    this.router.navigate(['../add'], {relativeTo: this.activatedRoute})
  }

  /**
   * delete entity
   * @param evt
   */
  onDelete(evt: any): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.getList();
      evt.confirm.resolve();
    } else {
      evt.confirm.reject();
    }
  }

  /**
   * get list
   */
  getList(): void {
    this.apiDataProviderService.createApi('users').getAll().subscribe(res => {
      this.source = res;
    });
  }
}
