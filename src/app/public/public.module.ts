import {NgModule} from "@angular/core";
import {PublicComponent} from "./public.component";
import {ThemeModule} from "../@theme/theme.module";
import {PublicRoutingModule} from "./public-routing.module";
import {MiscellaneousModule} from "../pages/miscellaneous/miscellaneous.module";

@NgModule({
  imports: [
    ThemeModule,
    PublicRoutingModule,
    MiscellaneousModule
  ],
  declarations: [
    PublicComponent
  ]
})

export class PublicModule {
}
