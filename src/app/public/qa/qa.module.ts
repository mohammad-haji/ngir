/**
 * Created by Asus on 9/6/2018.
 */

import {NgModule} from "@angular/core";
import {QAComponent} from "./qa.component";
import {QARoutingModule} from "./qa-routing.module";
import {ThemeModule} from "../../@theme/theme.module";
import {NgxCommon} from "../../common/common.module";
import {QAService} from "./qa.service";
@NgModule({
  imports:[
    QARoutingModule,
    ThemeModule,
    NgxCommon,
  ],
  declarations: [
    QAComponent
  ],
  providers:[
    QAService
  ]
})
export class QAModule {
}
