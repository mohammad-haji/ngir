import { CheckMarkPipe } from './pipes/checkmark/checkMark.pipe';
import { TranslateModule } from '@ngx-translate/core';
import {NgxImageUploadComponent} from "./components/image-upload/ngx-image-upload.component";
import {NgModule} from "@angular/core";
import {ImageUploadModule} from "angular2-image-upload";
import { NgxDatatableComponent } from "./components/ngx-data-table/ngx-data-table.component";
import { CommonModule } from '@angular/common';
import {NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SplitStringPipe } from './pipes/split-string/split-string.pipe';
import { ConfirmModal } from './modals/confirm/confirm.modal';
import { ConfirmModalService } from './modals/confirm/confirm.modal.service';


const COMPONENTS = [
  NgxDatatableComponent,
  NgxImageUploadComponent
];

const NG_BOOTSTRAP = [
  NgbTooltipModule
];

const PIPES = [
  CheckMarkPipe,
  SplitStringPipe
];

const MODALS = [
  ConfirmModal
];

const PROVIDERS = [
  ConfirmModalService
];


@NgModule({
  imports: [
    ImageUploadModule.forRoot(),

    TranslateModule,
    CommonModule,


    ...NG_BOOTSTRAP
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES,
    ...MODALS
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...MODALS
  ],
  providers:[
    ...PROVIDERS
  ],
  entryComponents:[
    ...MODALS
  ]
})
export class NgxCommon {
}
