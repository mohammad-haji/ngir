import {Component} from "@angular/core";

@Component({
  selector: 'sf-button-widget',
  template: `<button type="button" class="btn btn-light" [ngClass]="button.class"
    *ngIf="!button.isHidden"
  (click)="button.action($event)">{{button.label|translate}}</button>`,
  styles:[
    `
    button{
      margin-left: 5px;
    }

    `
  ]
})
export class ButtonWidget {
  public button
  public formProperty
}
