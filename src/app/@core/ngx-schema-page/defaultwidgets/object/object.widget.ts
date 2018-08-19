import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'ns-page-object',
  template: `
    <div *ngFor="let section of pageProp.sections">
      <legend *ngIf="section.title">{{section.title}}</legend>
      <div *ngIf="section.description">{{section.description}}</div>
      <div *ngFor="let item of section.items">
        <div *ngFor="let cmp of item.components">
          <ns-page-element [pageProp]="cmp"></ns-page-element>
        </div>
      </div>
    </div>`
})
export class ObjectWidget implements OnInit {
  @Input() pageProp: any;

  ngOnInit() {
    console.log(this.pageProp);
  }
}
