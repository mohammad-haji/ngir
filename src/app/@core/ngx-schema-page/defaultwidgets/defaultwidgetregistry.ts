import {WidgetRegistry} from "../widgetregistry";
import {HeadingWidget} from "./heading/heading.widget";
import {DataTableWidget} from "./datatable/datatable.widget";
import {ObjectWidget} from "./object/object.widget";

export class DefaultWidgetRegistry extends WidgetRegistry {
  constructor() {
    super();

    this.register('object', ObjectWidget);
    this.register('datatable', DataTableWidget);
    this.register('heading', HeadingWidget);


    this.setDefaultWidget(HeadingWidget);
  }

}
