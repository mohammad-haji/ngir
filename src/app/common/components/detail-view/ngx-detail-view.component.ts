import { OnInit, ChangeDetectorRef, OnChanges, DoCheck, Output, EventEmitter } from '@angular/core';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-detail-view-component',
  template: `
    <table class="table">
      <tbody>
      <tr style="border-bottom: 1px solid #dee2e6;">
        <td></td>
        <td style="text-align: left;">
          <button class="btn btn-light btn-sm" style="color:#212529;" (click)="onBackClick($event)">{{'Buttons.Back'|translate}}</button>
        </td>
      </tr>
        <tr *ngFor="let field of fields; trackBy:field" [ngSwitch]="field.type">
          <ng-container *ngSwitchCase="'string'">
            <td>{{field.title|translate}}</td>
            <td>{{field.value}}</td>
          </ng-container>
        </tr>
      </tbody>
    </table>
  `,
  styles:[
    `
      td{
        border-top: unset;
      }
    `
  ]
})
export class NgxDetailViewComponent implements DoCheck{
  private _fields: any = [];
  private _model: any = {};
  private oldFields: any = [];
  private oldModel: any = {};
  @Input() set fields (value: any){
    this._fields = value;
    this.processData(this._fields, (this._model || {}));
  };

  get fields(): any{
    return this._fields;
  }

  @Input() set model(value: any){
     this._model = value;
     this.processData(this._fields, (this._model || []));
  };

  @Output() onAction: EventEmitter<any> = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef){

  }

  get model(): any{
    return this._model
  }

  ngOnInit(){
    this.processData(this._fields, this._model);
  }

  onBackClick(evt){
    this.onAction.next({actionKey: 'DETAIL_VIEW_BACK'});
  }

  getValue(data, _key) {
    let keys = (`data.${_key}`).split('.'),
      nested = keys[0];
    for (let i = 1; i < keys.length; i++) {
      if (eval(nested) == null) {
        nested = null;
        break;
      }
      nested += "." + keys[i];
    }
    if (nested) {
      return eval(`data.${_key}`);
    }
    return data[_key];
  }

  processData(fields, data) {
    fields.forEach(field => {
      field.value = this.getValue(data, field.prop) || '-';
    });
  }

  ngDoCheck() {
    if(!_.isEqual(this.oldFields.sort(), this._fields.sort()) || !_.isEqual(this.oldModel, this._model) {
      this.oldFields = _.cloneDeep(this._fields);
      this.oldModel = _.cloneDeep(this._model);
      this.processData(this._fields, this._model);
    }
  }
}
