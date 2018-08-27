import { SPService } from './../../../sp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgxSchemaPageService } from '../../../@core/ngx-schema-page/ngx-schema-page.service';
import { ConfirmModalService } from '../../../common/modals/confirm/confirm.modal.service';

@Component({
  selector: 'crud-list-component',
  template: `
  <ngx-schema-page *ngIf="listPageSchema" [schema]="listPageSchema"></ngx-schema-page>
  `
})
export class CrudListComponent implements OnDestroy{
  listPageSchema: any;
  entity: string;
  ngxSchemaPageActionMap: {[type: string]: any} = {};
  ngxSchemaPageActionObservable: any;
  constructor(private activatedRoute: ActivatedRoute,
    private spService: SPService,
    private ngxSchemaPageService: NgxSchemaPageService,
    private router: Router,
    private confirmModalService: ConfirmModalService){
    this.initActionMap();
    this.activatedRoute.params.subscribe((res: any)=>{
      this.entity = res.entity;
      this.spService.getPageSchema('crud','list',this.entity).subscribe((res: any)=>{
        this.listPageSchema = res;
      });
    });
    this.ngxSchemaPageActionObservable = this.ngxSchemaPageService.onAction$.subscribe((evt: any)=>{
       this.ngxSchemaPageActionMap[evt.actionKey](evt);
    });
  }


  private initActionMap(){
    this.ngxSchemaPageActionMap = {
      'DATATABLE_ADD': (data)=>{
        this.router.navigateByUrl(`/pages/crud/add/${this.entity}`);
      },
      'DATATABLE_DETAIL': (data)=>{
        this.router.navigateByUrl(`/pages/crud/detail/${this.entity}/${data.id}`);
      },
      'DATATABLE_EDIT': (data)=>{
        this.router.navigateByUrl(`/pages/crud/edit/${this.entity}/${data.id}`);
      },
      'DATATABLE_REMOVE': (data)=>{
        this.confirmModalService.open({}).result.then((evt)=>{
          console.log(evt);
        });
      },
      'DATATABLE_CLONE': (data)=>{

      },
      'DATATABLE_CUSTOM': (data)=>{

      },
    };
  }

  ngOnDestroy(){
    this.ngxSchemaPageActionObservable.unsubscribe();
  }
}
