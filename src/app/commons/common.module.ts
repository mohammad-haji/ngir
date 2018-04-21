import {NgModule} from "@angular/core";
import {CommonComponentsModule} from "./components/common.components.module";
import {CommonPipesModule} from "./pipes/common.pipes.module";


@NgModule({
    imports: [
        CommonComponentsModule,
        CommonPipesModule
    ],
    exports: [
        CommonComponentsModule,
        CommonPipesModule
    ]
})

export class AppCommonsModule {
}
