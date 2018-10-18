/**
 * Created by Asus on 9/6/2018.
 */

import {NgModule} from "@angular/core";
import {ContactUsComponent} from "./contact-us.component";
import {ContactUsRoutingModule} from "./contact-us-routing.module";
import {ThemeModule} from "../../@theme/theme.module";
import {NgxCommon} from "../../common/common.module";
@NgModule({
  imports:[
    ContactUsRoutingModule,
    ThemeModule,
    NgxCommon,
  ],
  declarations: [
    ContactUsComponent
  ],
})
export class ContactUsModule {
}
