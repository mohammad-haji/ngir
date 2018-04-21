import {NgModule} from "@angular/core";
import {LoadingComponent} from "./loading.component";
import {LoadingService} from "./loading.service";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [LoadingComponent],
    providers: [LoadingService],
    exports: [LoadingComponent]
})

export class LoadingModule {}
