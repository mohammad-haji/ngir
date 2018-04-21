import {NgModule} from "@angular/core";
import {ConstPipe} from "./const/constant.pipe";
import {SplitStringPipe} from "./split-string/split-string.pipe";
import {EnToFaNumberPipe} from "./entofanumber/EnToFaNumber.pipe";
import {PersianDatePipe} from "./persianDate/persian-date.pipe";
import {CheckMarkPipe} from "./checkmark/checkMark.pipe";
import {HideFileTypePipe} from "./hideFileType/hide-file-type.pipe";

let declarations = [
    EnToFaNumberPipe,
    CheckMarkPipe,
    PersianDatePipe,
    HideFileTypePipe,
    SplitStringPipe,
    ConstPipe,
];

let exportedModules = [
    EnToFaNumberPipe,
    CheckMarkPipe,
    PersianDatePipe,
    HideFileTypePipe,
    SplitStringPipe,
    ConstPipe,
];

@NgModule({
    declarations: declarations,
    exports: exportedModules
})

export class CommonPipesModule {
}