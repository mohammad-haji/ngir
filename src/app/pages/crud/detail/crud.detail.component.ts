import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'crud-detail-component',
  template: `
    <h1>Detail component</h1>
  `
})
export class CrudDetailComponent{
  constructor(
    private router: Router
  ){}
}
