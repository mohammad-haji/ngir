import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AboutUsComponent} from "./about-us.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AboutUsComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {
}
