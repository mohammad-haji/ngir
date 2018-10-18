import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgxAuthComponent, NgxLoginComponent} from "./@theme/components/auth";

const routes: Routes = [
  {path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule'},
  {path: '', loadChildren: 'app/public/public.module#PublicModule'},
  {
    path: 'auth',
    component: NgxAuthComponent,
    children: [
      {
        path: '',
        component: NgxLoginComponent,
      },
      {
        path: 'login',
        component: NgxLoginComponent,
      },
    ]
  },
  {path: '**', redirectTo: ''},
  // {path: '', redirectTo: 'pages', pathMatch: 'full'},
  // {path: '**', redirectTo: 'pages'},
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
