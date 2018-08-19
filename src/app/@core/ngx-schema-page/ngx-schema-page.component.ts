/**
 * Created by Mohammad.hajiaghazadeh on 8/18/2018
 */
import {Component, Input, OnChanges} from "@angular/core";

@Component({
  selector: 'ngx-schema-page',
  template: `
    <h1>ngx schema page</h1>
    <ns-page-element *ngIf="pageProp" [pageProp]="pageProp"></ns-page-element>
  `
})
export class NgxSchemaPageComponent implements OnChanges {
  @Input() schema: any;

  public pageProp: any;

  constructor() {

  }

  ngOnChanges() {
    //TODO: write SchemaPreprocessor.preprocess(this.schema)
    this.pageProp = this.schema.body;
    console.log('this.pageProp', this.pageProp);
  }
}
