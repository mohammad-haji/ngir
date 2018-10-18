import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PublicComponent} from "./public.component";
// import {PAGE_TITLE_TAGS_CONST} from "../config/tags/page-title-tags.const";
import {NotFoundComponent} from "../pages/miscellaneous/not-found/not-found.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: PublicComponent,
    // loadChildren: "./home/home.module#HomeModule",
    // data: PAGE_TITLE_TAGS_CONST.home,
    children: [
      {
        path: "home",
        loadChildren: "./home/home.module#HomeModule",
        // data: PAGE_TITLE_TAGS_CONST.home
      },
      {
        path: "contact-us",
        loadChildren: "./contact-us/contact-us.module#ContactUsModule",
        // data: PAGE_TITLE_TAGS_CONST.home
      },
      {
        path: "about-us",
        loadChildren: "./about-us/about-us.module#AboutUsModule",
        // data: PAGE_TITLE_TAGS_CONST.home
      },
      {
        path: "qa",
        loadChildren: "./qa/qa.module#QAModule",
        // data: PAGE_TITLE_TAGS_CONST.home
      },
      {
        path: "policy",
        loadChildren: "./policy/policy.module#PolicyModule",
        // data: PAGE_TITLE_TAGS_CONST.home
      },
      {path: '', redirectTo: 'home'},
      // {path: '**', component: NotFoundComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
