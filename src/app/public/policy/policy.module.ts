/**
 * Created by Asus on 9/6/2018.
 */

import {NgModule} from "@angular/core";
import {PolicyComponent} from "./policy.component";
import {PolicyRoutingModule} from "./policy-routing.module";
import {ThemeModule} from "../../@theme/theme.module";
import {NgxCommon} from "../../common/common.module";
@NgModule({
  imports: [
    PolicyRoutingModule,
    ThemeModule,
    NgxCommon,
  ],
  declarations: [
    PolicyComponent
  ],
})
export class PolicyModule {
}
