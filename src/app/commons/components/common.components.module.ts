import {NgModule} from "@angular/core";
import {FooterModule} from "./footer/footer.module";
import {LoadingModule} from "./loading/loading.module";
import {NavigationModule} from "./navigation/navigation.module";
import {PersianDateModule} from "./persian-date/persian-date.module";
import {NavBarModule} from "./navbar/navbar.module";

@NgModule({
    exports: [
        FooterModule,
        LoadingModule,
        NavigationModule,
        PersianDateModule,
        NavBarModule
    ]
})

export class CommonComponentsModule {
}