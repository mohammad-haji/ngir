import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {ThemeModule} from "../../@theme/theme.module";
import {NgxCommon} from "../../common/common.module";
import {HomeService} from "./home.service";

@NgModule({
  imports:[
    ThemeModule,
    HomeRoutingModule,
    NgxCommon
  ],
  declarations:[
    HomeComponent
  ],
  providers:[
    HomeService
  ]
})

export class HomeModule{}
