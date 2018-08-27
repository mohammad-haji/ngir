import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ns-datatable-widget',
  template: `
  <div class="row">
    <div class="col-sm-12">
    <nb-card>
    <nb-card-body>
    <ngx-data-table [config]="pageProp.data.config" (onAction)="onActionClick($event);">
    </ngx-data-table>
    </nb-card-body>
    </nb-card>
    </div>
  </div>
  `
})
export class DataTableWidget {
  @Input() pageProp: any;
  @Output() onAction: EventEmitter<any> = new EventEmitter();


  onActionClick(evt): void{
    this.onAction.next(evt);
  }
}
