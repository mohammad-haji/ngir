import {NgxImageUploadComponent} from "./components/image-upload/ngx-image-upload.component";
import {NgModule} from "@angular/core";
import {ImageUploadModule} from "angular2-image-upload";

@NgModule({
  imports: [
    ImageUploadModule.forRoot(),
  ],
  exports: [
    NgxImageUploadComponent
  ],
  declarations: [
    NgxImageUploadComponent,
  ],
})
export class NgxCommon {
}
