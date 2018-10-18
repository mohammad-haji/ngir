import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PolicyComponent} from "./policy.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PolicyComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyRoutingModule {
}
