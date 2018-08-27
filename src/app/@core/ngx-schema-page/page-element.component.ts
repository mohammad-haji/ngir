import { OnDestroy } from '@angular/core';
/**
 * Created by Mohammad.hajiaghazadeh on 8/18/2018
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import { NgxSchemaPageService } from "./ngx-schema-page.service";

@Component({
  selector: 'ns-page-element',
  template: `
    <div>
      <ns-widget-chooser [widgetInfo]="pageProp"
                         (widgetInstanciated)="onWidgetInstanciated($event)" (onWidgetEvent)="onWidgetEvent($event)"></ns-widget-chooser>
    </div>
  `
})
export class PageElementComponent{
  private static counter = 0;
  @Input() pageProp: any;
  // tslint:disable-next-line:no-output-on-prefix
  widget: any = null;
  ngxSchemaPageService$: any;
  constructor(private ngxSchemaPageService:NgxSchemaPageService){

  }

  onWidgetInstanciated(widget: any) {
    this.widget = widget;
    let id = 'widget' + (PageElementComponent.counter++);
    this.widget.formProperty = this.pageProp;
    this.widget.schema = this.pageProp.schema;
    this.widget.name = id;
    this.widget.id = id;
  }

  onWidgetEvent(evt){
    this.ngxSchemaPageService$ = this.ngxSchemaPageService.onAction$.next(evt);
  }
}
