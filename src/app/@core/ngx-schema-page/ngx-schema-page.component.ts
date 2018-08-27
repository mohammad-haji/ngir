import { EventEmitter } from '@angular/core';

/**
 * Created by Mohammad.hajiaghazadeh on 8/18/2018
 */
import {Component, Input, OnChanges, Output} from "@angular/core";

@Component({
  selector: 'ngx-schema-page',
  template: `
    <ns-page-element *ngIf="pageProp" [pageProp]="pageProp"></ns-page-element>
  `
})
export class NgxSchemaPageComponent implements OnChanges {
  @Input() schema: any;
  // tslint:disable-next-line:no-output-on-prefix

  public pageProp: any;

  constructor() {
  }

  ngOnChanges() {
    //TODO: write SchemaPreprocessor.preprocess(this.schema)
    this.pageProp = this.schema.body;
  }
}
