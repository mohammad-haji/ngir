import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Homepage, HomepageModule} from "./homepage";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppCommonsModule} from "./commons/common.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppCommonsModule,
        HttpModule,
        // ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        HomepageModule,
        BrowserModule.withServerTransition({appId: 'my-app'}),
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
