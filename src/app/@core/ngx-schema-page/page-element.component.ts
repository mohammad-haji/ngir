/**
 * Created by Mohammad.hajiaghazadeh on 8/18/2018
 */
import {Component, Input} from "@angular/core";

@Component({
  selector: 'ns-page-element',
  template: `
    <div>
      <ns-widget-chooser [widgetInfo]="pageProp"
                         (widgetInstanciated)="onWidgetInstanciated($event)"></ns-widget-chooser>
    </div>
  `
})
export class PageElementComponent {
  private static counter = 0;
  @Input() pageProp: any;

  widget: any = null;

  onWidgetInstanciated(widget: any) {
    this.widget = widget;
    let id = 'widget' + (PageElementComponent.counter++);
    this.widget.formProperty = this.pageProp;
    this.widget.schema = this.pageProp.schema;
    this.widget.name = id;
    this.widget.id = id;
  }
}
