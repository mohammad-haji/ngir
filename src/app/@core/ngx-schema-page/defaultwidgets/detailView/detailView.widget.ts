import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ns-datatable-widget',
  template: `
  <div class="row">
    <div class="col-sm-12">
    <nb-card>
    <nb-card-body>
      <ngx-detail-view-component [fields]="pageProp.data.fields" [model]="pageProp.data.model" (onAction)="onActionClick($event)">
      </ngx-detail-view-component>
    </nb-card-body>
    </nb-card>
    </div>
  </div>
  `
})
export class DetailViewWidget {
  @Input() pageProp: any;
  @Output() onAction: EventEmitter<any> = new EventEmitter();


  onActionClick(action): void{
    this.onAction.next(action);
  }
}
