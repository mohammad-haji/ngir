import { SPService } from './../../../sp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgxSchemaPageService } from '../../../@core/ngx-schema-page/ngx-schema-page.service';
import { ConfirmModalService } from '../../../common/modals/confirm/confirm.modal.service';
import { ApiDataProviderService } from '../../../@core/services/api/api-data-provider.service';

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
    private confirmModalService: ConfirmModalService,
    private apiDataProviderService: ApiDataProviderService){
    this.initActionMap();
    this.activatedRoute.params.subscribe((res: any)=>{
      this.entity = res.entity;
      this.listPageSchema = undefined;
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
        if(this.entity === 'groupContacts' || this.entity === 'privateGroupContacts'){
          this.router.navigateByUrl(`/pages/crud/add/${this.entity}?parent=${this.entity}&datatable=${
            JSON.stringify({id: data.id, init: false})
          }`);
        }else{
          this.router.navigateByUrl(`/pages/crud/add/${this.entity}`);
        }
      },
      'DATATABLE_DETAIL': (data)=>{
        if(this.entity === 'groupContacts' || this.entity === 'privateGroupContacts'){
          this.router.navigateByUrl(`/pages/crud/detail/${this.entity}/${data.id}?parent=${this.entity}&datatable=${
            JSON.stringify({id: data.id, init: false})
          }`);
        }else{
          this.router.navigateByUrl(`/pages/crud/detail/${this.entity}/${data.id}`);
        }
      },
      'DATATABLE_EDIT': (data)=>{
        if(this.entity === 'groupContacts' || this.entity === 'privateGroupContacts'){
          this.router.navigateByUrl(`/pages/crud/edit/${this.entity}/${data.id}?parent=${this.entity}&datatable=${
            JSON.stringify({id: data.id, init: false})
          }`);
        }else{
          this.router.navigateByUrl(`/pages/crud/edit/${this.entity}/${data.id}`);
        }
      },
      'DATATABLE_REMOVE': (data)=>{
        this.confirmModalService.open({}).result.then((actionKey)=>{
          if(actionKey === 'onDelete'){
            this.apiDataProviderService.createApi(this.entity).delete(data.id)
            .subscribe((res:any)=>{
              this.listPageSchema = undefined;
              this.spService.getPageSchema('crud','list',this.entity).subscribe((res: any)=>{
                this.listPageSchema = res;
              });
            });
          }
        });
      },
      'DATATABLE_CLONE': (data)=>{

      },
      'DATATABLE_CUSTOM': (data)=>{

      },
      'DATATABLE_CONTACTS': (data)=>{
        this.router.navigateByUrl(`/pages/crud/list/groupContacts?parent=${this.entity}&datatable=${
          JSON.stringify({id: data.id, init: false})
        }`);
      },
      'DATATABLE_CONTACTS_PERSONAL': (data)=>{
        this.router.navigateByUrl(`/pages/crud/list/privateGroupContacts?parent=${this.entity}&datatable=${
          JSON.stringify({id: data.id, init: false})
        }`);
      }
    };
  }

  ngOnDestroy(){
    this.ngxSchemaPageActionObservable.unsubscribe();
  }
}
