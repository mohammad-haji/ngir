import {NgModule} from "@angular/core";
import {NavigationComponent} from "./navigation.component";
import {SharedModule} from "../../../config/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})

export class NavigationModule {}
