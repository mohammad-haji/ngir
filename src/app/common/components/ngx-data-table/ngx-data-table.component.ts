import { ApiDataProviderService } from './../../../@core/services/api/api-data-provider.service';
/**
 * ngx-persis-datatable
 * @author: Mohammad hajiaghazadeh
 * @todo: add date,bool,enums, ...
 */

import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "ngx-data-table",
  styleUrls: ["./ngx-data-table.component.scss"],
  templateUrl: "./ngx-data-table.component.html"
})
export class NgxDatatableComponent implements OnInit {
  @Input() rows: any[] = [];
  @Input() config: any = undefined;

  @Output() onAction: EventEmitter<any> = new EventEmitter();

  public visibleFields: any[] = [];
  public listItems: any[] = [];
  public loading = true;
  public tableActions: any;
  public objectKeys = Object.keys;

  constructor(private apiDataProviderService: ApiDataProviderService) {}

  ngOnInit() {
    this.tableActions = this.config.actions;
    // this.processListResponse(this.rows);
    this.apiDataProviderService.createApi(this.config.api.entity).getAll().subscribe((res: any)=>{
      this.rows = res;
      this.processListResponse(this.rows);
    });
  }

  onActionClick(actionKey: string, data: any, action: any): void {
    this.onAction.emit({ ...{ actionKey: `datatable_${actionKey}`.toUpperCase() }, ...data, ...action });
  }

  processListResponse(data) {
    this.loading = true;
    data.forEach(listItem => {
      listItem.visibleFields = [];
      this.config.columns.forEach(headerItem => {
        if (!headerItem.hidden) {
          let keys = ("listItem" + "." + headerItem.prop).split("."),
            nested = keys[0];
          for (let i = 1; i < keys.length; i++) {
            if (eval(nested) == null) {
              nested = null;
              break;
            }
            nested += "." + keys[i];
          }
          if (nested) {
            listItem[headerItem.prop] = eval(
              "listItem" + "." + headerItem.prop
            );
            listItem.visibleFields.push(headerItem);
          } else {
            listItem.visibleFields.push(headerItem);
          }
        }
      });
    });
    this.rows = data;
    this.loading = false;
  }
}