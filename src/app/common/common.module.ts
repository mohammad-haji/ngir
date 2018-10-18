import { CheckMarkPipe } from './pipes/checkmark/checkMark.pipe';
import { TranslateModule } from '@ngx-translate/core';
import {NgxImageUploadComponent} from "./components/image-upload/ngx-image-upload.component";
import {NgModule} from "@angular/core";
import {ImageUploadModule} from "angular2-image-upload";
import { NgxDatatableComponent } from "./components/ngx-data-table/ngx-data-table.component";
import {CommonModule, DecimalPipe} from '@angular/common';
import {NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SplitStringPipe } from './pipes/split-string/split-string.pipe';
import { ConfirmModal } from './modals/confirm/confirm.modal';
import { ConfirmModalService } from './modals/confirm/confirm.modal.service';
import {NgxDetailViewComponent} from './components/detail-view/ngx-detail-view.component';
import {PersianDatePipe} from "./pipes/persian-date/persian-date.pipe";
import {PricePipe} from "./pipes/price/price.pipe";
import {LazyCardsComponent} from "./components/lazy-cards/lazy-cards.component";
import {NguCarouselModule} from "@ngu/carousel";
import {RouterModule} from "@angular/router";


const COMPONENTS = [
  NgxDatatableComponent,
  NgxImageUploadComponent,
  NgxDetailViewComponent,
  LazyCardsComponent
];

const NG_BOOTSTRAP = [
  NgbTooltipModule
];

const PIPES = [
  CheckMarkPipe,
  SplitStringPipe,
  PricePipe,
  PersianDatePipe,
];

const MODALS = [
  ConfirmModal
];

const PROVIDERS = [
  ConfirmModalService,
  DecimalPipe
];


@NgModule({
  imports: [
    ImageUploadModule.forRoot(),
    NguCarouselModule,
    TranslateModule,
    RouterModule,
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
