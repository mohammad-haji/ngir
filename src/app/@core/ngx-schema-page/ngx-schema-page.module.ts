import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableWidget} from "./defaultwidgets/datatable/datatable.widget";
import {HeadingWidget} from "./defaultwidgets/heading/heading.widget";
import {NgxSchemaPageComponent} from "./ngx-schema-page.component";
import {PageElementComponent} from "./page-element.component";
import {WidgetChooserComponent} from "./widget-chooser.component";
import {DefaultWidget} from "./default.widget";
import {ObjectWidget} from "./defaultwidgets/object/object.widget";
import {WidgetFactory} from "./widgetfactory";
import {WidgetRegistry} from "./widgetregistry";
import {DefaultWidgetRegistry} from "./defaultwidgets/defaultwidgetregistry";


const WIDGETS = [
  DataTableWidget,
  HeadingWidget,
  ObjectWidget,

  DefaultWidget
];

const NGX_COMPONENTS = [
  NgxSchemaPageComponent,
  PageElementComponent,
  WidgetChooserComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...WIDGETS,
    ...NGX_COMPONENTS
  ],
  exports: [
    ...WIDGETS,
    ...NGX_COMPONENTS
  ],
  providers: [
    WidgetFactory,
    {
      provide: WidgetRegistry,
      useClass: DefaultWidgetRegistry
    }
  ],
  entryComponents: [
    ...WIDGETS
  ]
})
export class NgxSchemaPageModule {
}
