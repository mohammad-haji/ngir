import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import * as _ from 'lodash';
import {ApiDataProviderService} from "../../../@core/services/api/api-data-provider.service";

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

  ngOnInit() {
    // this.apiDataProviderService.createApi('users').getAll().subscribe(res => {
    //   console.log('getAll ', res);
    // });
    // this.apiDataProviderService.createApi('users').getById().subscribe(res => {
    //   console.log('getById ', res);
    // });
    // this.apiDataProviderService.createApi('users').create({
    //   firstName: 'mohammad',
    //   lastName: 'haji'
    // }).subscribe(res => {
    //   console.log('getById ', res);
    // });
    this.initPageWithConfig(_.cloneDeep(this.activatedRoute.snapshot.data));
  }


  private initPageWithConfig(config): void {
    this.pageTitle = config.pageTitle;
    Object.keys(config.forms).forEach(FORM_KEY => {
      config.forms[FORM_KEY].schema.subscribe(res => {
        this.formList[FORM_KEY] = config.forms[FORM_KEY];
        this.formList[FORM_KEY].schema = res;
      })
    });
  }
}
