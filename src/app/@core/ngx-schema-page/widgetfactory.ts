import {
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  Injectable
} from '@angular/core';

import {WidgetRegistry} from './widgetregistry';

@Injectable()
export class WidgetFactory {

  constructor(private registry: WidgetRegistry, private resolver: ComponentFactoryResolver) {
  }

  createWidget(container: ViewContainerRef, type: string): ComponentRef<any> {
    let componentClass = this.registry.getWidgetType(type);
    let componentFactory = this.resolver.resolveComponentFactory(componentClass);
    return container.createComponent(componentFactory);
  }
}
