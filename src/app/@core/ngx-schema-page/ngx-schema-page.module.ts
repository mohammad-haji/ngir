import { NgxCommon } from './../../common/common.module';
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
import { ThemeModule } from '../../@theme/theme.module';
import { SFFormWidget } from './defaultwidgets/sfform/sfform.widget';
import { FormsModule } from '@angular/forms';
import { SchemaFormModule } from '../schema-form/src/lib/schema-form.module';
import { NgxSchemaPageService } from './ngx-schema-page.service';


const WIDGETS = [
  DataTableWidget,
  HeadingWidget,
  ObjectWidget,
  SFFormWidget,

  DefaultWidget
];

const NGX_COMPONENTS = [
  NgxSchemaPageComponent,
  PageElementComponent,
  WidgetChooserComponent
];

@NgModule({
  imports: [
    CommonModule,

    ThemeModule,
    FormsModule,
    SchemaFormModule.forRoot(),

    NgxCommon
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
    NgxSchemaPageService,
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
