import { SPService } from './../../../sp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy } from "@angular/core";
import { NgxSchemaPageService } from '../../../@core/ngx-schema-page/ngx-schema-page.service';

@Component({
  selector: 'crud-add-component',
  template: `
  <ngx-schema-page *ngIf="addPageSchema" [schema]="addPageSchema"></ngx-schema-page>
  `
})
export class CrudAddComponent implements OnDestroy{
  addPageSchema: any;
  ngxSchemaPageActionObservable: any;
  ngxSchemaPageActionMap: {[type: string]: any} = {};
  entity: string;
  constructor(private activatedRoute: ActivatedRoute,
    private spService: SPService,
    private ngxSchemaPageService:NgxSchemaPageService,
    private router: Router){

    this.initActionMap();
    this.activatedRoute.params.subscribe((res: any)=>{
      this.entity = res.entity;
      this.spService.getPageSchema('crud','add',this.entity).subscribe((res: any)=>{
        this.addPageSchema = res;
      });
    });
    this.ngxSchemaPageActionObservable = this.ngxSchemaPageService.onAction$.subscribe((evt: any)=>{
      this.ngxSchemaPageActionMap[evt.actionKey](evt);
    });
  }

  ngOnDestroy(){
    this.ngxSchemaPageActionObservable.unsubscribe();
  }

  private initActionMap(){
    this.ngxSchemaPageActionMap = {
      'SFFORM_SUBMIT': (data)=>{
        console.log('onSubmit', data);
      },
      'SFFORM_RESET': (data)=>{
        console.log('onReset', data);
      },
      'SFFORM_SAVE': (data)=>{
        console.log('onsave', data);
      },
      'SFFORM_CANCEL': (data)=>{
        this.router.navigateByUrl(`/pages/crud/list/${this.entity}`);
      },
      'SFFORM_ADD': (data)=>{
        console.log('onAdd', data);
      },
      'DATATABLE_CUSTOM': (data)=>{

      },
    };
  }
}
