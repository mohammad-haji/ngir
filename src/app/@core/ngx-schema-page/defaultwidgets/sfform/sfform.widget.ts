import { EventEmitter, OnInit, DoCheck } from '@angular/core';
import {Component, Input, Output} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'ns-sf-form-widget',
  template: `
  <div class="row">
    <div class="col-sm-12">
    <nb-card>
    <nb-card-body>
    <div class="row">
      <div *ngFor="let form of objectKeys(pageProp.data.formList)" class="{{pageProp.data.formList[form].containerClass}}">
        <nb-card>
          <nb-card-header *ngIf="pageProp.data.formList[form].title">{{pageProp.data.formList[form].title}}</nb-card-header>
          <nb-card-body>
            <sf-form [schema]="pageProp.data.formList[form].schema"
            [actions]="sfFormActions" [model]="model">
            </sf-form>
          </nb-card-body>
          </nb-card>
        </div>
      </div>
    </nb-card-body>
    </nb-card>
    </div>
  </div>
  `
})
export class SFFormWidget implements DoCheck {
  @Input() pageProp: any;
  @Output() onAction: EventEmitter<any> = new EventEmitter();

  model: any = {};
  oldModel: any = {};

  sfFormActions = {
    "submit": (property, btnParams, button) => {
      console.log(property)
      this.onAction.next({form:property, ...button});
    },
    "reset": (property, btnParams, button) => {
      this.onAction.next({form:property,...button});
    },
    "save": (property, btnParams, button) => {
      this.onAction.next({form:property,...button});
    },
    "cancel": (property, btnParams, button) => {
      this.onAction.next({form:property,...button});
    },
    "add": (property, btnParams, button) => {
      this.onAction.next({form:property,...button});
    }
  };
  objectKeys = Object.keys;


  ngDoCheck() {
    if(this.pageProp.data.formList['0'].mode && this.pageProp.data.formList['0'].mode === 'EDIT'){
      if(!_.isEqual(this.oldModel, this.pageProp.data.formList['0'].model)) {
        this.model = this.pageProp.data.formList['0'].model;
        this.oldModel = _.cloneDeep(this.model);
      }
    }
  }
}
