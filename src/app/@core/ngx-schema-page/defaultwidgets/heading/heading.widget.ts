import { OnInit } from '@angular/core';
/**
 * Created by Mohammad.hajiaghazadeh on 8/18/2018
 */
import {Component, Input} from "@angular/core";

@Component({
  selector: 'ns-heading-widget',
  template: `
  <div class="row">
  <div class="col-sm-12">
    <nb-card>
      <nb-card-header>{{pageProp.data.title|translate}}</nb-card-header>
      </nb-card>
      </div>
      </div>
  `
})
export class HeadingWidget implements OnInit {
  @Input() pageProp: any;

  ngOnInit(){
  }
}
