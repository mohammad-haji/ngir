import { TranslateModule } from '@ngx-translate/core';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {FormElementComponent} from './formelement.component';
import {FormComponent} from './form.component';
import {WidgetChooserComponent} from './widgetchooser.component';
import {ArrayWidget} from './defaultwidgets/array/array.widget';
import {ButtonWidget} from './defaultwidgets/button/button.widget';
import {ObjectWidget} from './defaultwidgets/object/object.widget';
import {CheckboxWidget} from './defaultwidgets/checkbox/checkbox.widget';
import {FileWidget} from './defaultwidgets/file/file.widget';
import {IntegerWidget} from './defaultwidgets/integer/integer.widget';
import {TextAreaWidget} from './defaultwidgets/textarea/textarea.widget';
import {RadioWidget} from './defaultwidgets/radio/radio.widget';
import {RangeWidget} from './defaultwidgets/range/range.widget';
import {SelectWidget} from './defaultwidgets/select/select.widget';
import {StringWidget} from './defaultwidgets/string/string.widget';
import {DefaultWidgetRegistry} from './defaultwidgets/defaultwidgetregistry';
import {
  DefaultWidget
} from './default.widget';

import {WidgetRegistry} from './widgetregistry';
import {SchemaValidatorFactory, ZSchemaValidatorFactory} from './schemavalidatorfactory';
import {FormElementComponentAction} from './formelement.action.component';

const moduleProviders = [
  {
    provide: WidgetRegistry,
    useClass: DefaultWidgetRegistry
  },
  {
    provide: SchemaValidatorFactory,
    useClass: ZSchemaValidatorFactory
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  declarations: [
    FormElementComponent,
    FormElementComponentAction,
    FormComponent,
    WidgetChooserComponent,
    DefaultWidget,
    ArrayWidget,
    ButtonWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget,
  ],
  entryComponents: [
    FormElementComponent,
    FormElementComponentAction,
    FormComponent,
    WidgetChooserComponent,
    ArrayWidget,
    ButtonWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget,
  ],
  exports: [
    FormComponent,
    FormElementComponent,
    FormElementComponentAction,
    WidgetChooserComponent,
    ArrayWidget,
    ButtonWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget
  ]
})
export class SchemaFormModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SchemaFormModule,
      providers: [...moduleProviders]
    };
  }

}
