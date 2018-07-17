import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FileHolder, UploadMetadata} from "angular2-image-upload";


/**
 * upload images component inspired from https://aberezkin.github.io/ng2-image-upload/#/demo
 */
@Component({
  selector: 'ngx-image-upload',
  templateUrl: './ngx-image-upload.component.html'
})
export class NgxImageUploadComponent {
  @Input() buttonCaption: string;
  @Output() onUpload = new EventEmitter<any>();
  @Output() onRemove = new EventEmitter<any>();

  constructor() {
  }

  onUploadFinished(file: FileHolder): void {
    this.onUpload.next(file);
  }

  onRemoved(file: FileHolder): void {
    this.onRemove.next(file);
  }
}
