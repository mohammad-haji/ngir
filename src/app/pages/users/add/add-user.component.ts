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
