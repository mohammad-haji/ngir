import { SPService } from './../../../sp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ChangeDetectorRef, OnChanges, ApplicationRef } from "@angular/core";
import { NgxSchemaPageService } from '../../../@core/ngx-schema-page/ngx-schema-page.service';
import { ConfirmModalService } from '../../../common/modals/confirm/confirm.modal.service';
import { ApiDataProviderService } from '../../../@core/services/api/api-data-provider.service';

@Component({
  selector: 'crud-detail-component',
  template: `
    <ngx-schema-page *ngIf="detailPageSchema" [schema]="detailPageSchema"></ngx-schema-page>
  `
})
export class CrudDetailComponent implements OnDestroy{
  detailPageSchema: any;
  entity: string;
  entityId: string;
  ngxSchemaPageActionMap: {[type: string]: any} = {};
  ngxSchemaPageActionObservable: any;
  constructor(private activatedRoute: ActivatedRoute,
    private spService: SPService,
    private ngxSchemaPageService: NgxSchemaPageService,
    private router: Router,
    private confirmModalService: ConfirmModalService,
    private apiDataProviderService: ApiDataProviderService){
    this.initActionMap();
    this.activatedRoute.params.subscribe((params: any)=>{
      this.entity = params.entity;
      this.entityId = params.id;
      this.detailPageSchema = undefined;
      this.spService.getPageSchema('crud','detail',this.entity).subscribe((res: any)=>{
        this.detailPageSchema = res;
        const widget: any = this.spService.getWidgetById('discountDetailView');
        this.apiDataProviderService.createApi('discounts').getById(this.entityId).subscribe((res)=>{
          widget.data.model = res;
        });
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
          this.router.navigateByUrl(`/pages/crud/detail/${this.entity}`);
        },
        'DATATABLE_EDIT': (data)=>{
          this.router.navigateByUrl(`/pages/crud/edit/${this.entity}`);
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
        'DETAIL_VIEW_BACK': (data)=>{
          if(this.entity === 'groupContacts' || this.entity === 'privateGroupContacts'){
            this.router.navigateByUrl(`/pages/crud/list/${this.entity}?parent=${this.entity}&datatable=${
              JSON.stringify({id: data.id, init: false})
            }`);
          }else{
            this.router.navigateByUrl(`/pages/crud/list/${this.entity}`);
          }
        }
      };
    }

    ngOnDestroy(){
      this.ngxSchemaPageActionObservable.unsubscribe();
    }
}
