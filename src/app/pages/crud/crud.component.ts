import { AppService } from './../../app.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'ngx-crud',
  template: `
  <router-outlet></router-outlet>
  `,
})
export class CrudComponent implements OnInit {
  public sampleNgxShema: any;
  constructor(private activatedRoute: ActivatedRoute,
    private appService: AppService){
      this.sampleNgxShema = this.appService.getPageData();

    }
    // <ngx-schema-page [schema]="sampleNgxShema"></ngx-schema-page>

  ngOnInit(){
  }
}
