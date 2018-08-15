import {Component, OnInit} from '@angular/core';
import {ApiDataProviderService} from "../../../@core/services/api/api-data-provider.service";
import {ActivatedRoute} from "@angular/router";
import * as _ from "lodash";

@Component({
  selector: 'ngx-edit-user-component',
  styleUrls: ['./edit-user.component.scss'],
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent implements OnInit {
  pageTitle: string = '';
  formList: any = {}; // title
  objectKeys = Object.keys;

  constructor(private activatedRoute: ActivatedRoute) {
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
