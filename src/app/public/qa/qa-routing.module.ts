import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {QAComponent} from "./qa.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: QAComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QARoutingModule {
}
