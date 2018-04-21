import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Homepage} from "./homepage";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {path: 'home', component: Homepage},
    {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}