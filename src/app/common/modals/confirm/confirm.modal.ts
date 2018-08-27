import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'confirm-modal',
  template: `
    <div class="modal-header">
      <button type="button" class="close" aria-label="Close" (click)="onDismiss($event)" style="margin-left:0">
        <span aria-hidden="true">&times;</span>
      </button>
      <h6 class="modal-title">{{'Buttons.Delete'|translate}}</h6>
    </div>
    <div class="modal-body">
      <p style="text-align: right">{{'Messages.ConfirmToDelete'|translate}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger btn-sm" (click)="onClose($event)">{{'Buttons.Delete'|translate}}</button>
    </div>
  `,
  styles: [
    `
      .modal-header{
        text-align: right;
        h6{
          text-alight: right;
        }
        button{
          margin-left: 0 !important;
        }
      }

      .modal-body{
        p{
          text-align: right;
        }
      }


    `
  ]
})
export class ConfirmModal{
  constructor(public activeModal: NgbActiveModal){

  }

  onClose(evt){
    this.activeModal.close('onClose');
  }

  onDismiss(evt){
    this.activeModal.close('onDismiss');
  }
}
