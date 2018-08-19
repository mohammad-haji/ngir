/**
 * Created by Mohammad.hajiaghazadeh on 8/18/2018
 */
import {
  ChangeDetectorRef,
  Component, ComponentRef, EventEmitter, Input, OnChanges, Output, ViewChild,
  ViewContainerRef
} from "@angular/core";
import {WidgetFactory} from "./widgetfactory";

@Component({
  selector: 'ns-widget-chooser',
  template: `
    <div #target></div>
  `
})
export class WidgetChooserComponent implements OnChanges {
  @Input() widgetInfo: any;
  @Output() widgetInstanciated: EventEmitter<any> = new EventEmitter();

  @ViewChild('target', {read: ViewContainerRef}) container: ViewContainerRef;

  private widgetInstance: any;
  private ref: ComponentRef<any>;

  constructor(private cdr: ChangeDetectorRef,
              private widgetFactory: WidgetFactory = null,) {

  }

  ngOnChanges() {
    this.ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.type);
    this.widgetInstanciated.emit(this.ref.instance);
    this.widgetInstance = this.ref.instance;
    this.widgetInstance.pageProp = this.widgetInfo;
    this.cdr.detectChanges();
  }
}
