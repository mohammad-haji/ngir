import { EventEmitter } from '@angular/core';
import {Component, Input, Output} from '@angular/core';

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
            <sf-form [schema]="pageProp.data.formList[form].schema" [actions]="sfFormActions">
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
export class SFFormWidget {
  @Input() pageProp: any;
  @Output() onAction: EventEmitter<any> = new EventEmitter();

  sfFormActions = {
    "submit": (property, btnParams, button) => {
      this.onAction.next(button);
    },
    "reset": (property, btnParams, button) => {
      this.onAction.next(button);
    },
    "save": (property, btnParams, button) => {
      this.onAction.next(button);
    },
    "cancel": (property, btnParams, button) => {
      this.onAction.next(button);
    },
    "add": (property, btnParams, button) => {
      this.onAction.next(button);
    }
  };
  objectKeys = Object.keys;
}
