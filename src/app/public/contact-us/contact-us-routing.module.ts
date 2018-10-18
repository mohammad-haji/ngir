import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ContactUsComponent} from "./contact-us.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ContactUsComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUsRoutingModule {
}
