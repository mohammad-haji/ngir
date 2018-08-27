import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Injectable } from "@angular/core";
import { ConfirmModal } from "./confirm.modal";

@Injectable()
export class ConfirmModalService{
  constructor(private modalService: NgbModal){}

  open(data, config: any = {size: 'sm'}){
    const modalRef = this.modalService.open(ConfirmModal, config);
    return modalRef;
  }
}
