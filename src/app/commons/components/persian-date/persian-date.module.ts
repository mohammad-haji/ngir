import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PersianDateComponent} from "./persian-date.component";

@NgModule({
    imports: [CommonModule],
    declarations: [PersianDateComponent],
    exports: [PersianDateComponent]
})

export class PersianDateModule {
}