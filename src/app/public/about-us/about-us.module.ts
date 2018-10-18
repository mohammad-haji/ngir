/**
 * Created by Asus on 9/6/2018.
 */

import {NgModule} from "@angular/core";
import {AboutUsComponent} from "./about-us.component";
import {AboutUsRoutingModule} from "./about-us-routing.module";
import {ThemeModule} from "../../@theme/theme.module";
import {NgxCommon} from "../../common/common.module";
// import {NguCarouselModule} from "@ngu/carousel";
@NgModule({
  imports: [
    AboutUsRoutingModule,
    ThemeModule,
    NgxCommon,
    // NguCarouselModule
  ],
  declarations: [
    AboutUsComponent
  ],
})
export class AboutUsModule {
}
