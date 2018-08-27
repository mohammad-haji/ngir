import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as _ from 'lodash';
import { ApiDataProviderService } from "../../../@core/services/api/api-data-provider.service";

@Component({
  selector: 'ngx-add-user-component',
  styleUrls: ['./add-user.component.scss'],
  templateUrl: './add-user.component.html',
})
export class AddUserComponent implements OnInit {
  pageTitle: string = '';
  formList: any = {}; // title
  objectKeys = Object.keys;

  constructor(private activatedRoute: ActivatedRoute,
    private apiDataProviderService: ApiDataProviderService) {
  }

  submit(): void {
    this.apiDataProviderService.createApi('users').getAll().subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
    this.initPageWithConfig(_.cloneDeep(this.activatedRoute.snapshot.data));
  }

  /**
   * get page data from router
   * @param config page router data
   */
  private initPageWithConfig(config): void {
    this.pageTitle = config.pageTitle;
    this.formList = config.forms;
  }
}
