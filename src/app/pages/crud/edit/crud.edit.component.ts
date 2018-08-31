import { Component } from '@angular/core';
import { SPService } from './../../../sp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSchemaPageService } from '../../../@core/ngx-schema-page/ngx-schema-page.service';
import { ApiDataProviderService } from '../../../@core/services/api/api-data-provider.service';

@Component({
  selector: 'crud-edit-component',
  template: `
    <ngx-schema-page *ngIf="editPageSchema" [schema]="editPageSchema"></ngx-schema-page>
  `
})
export class CrudEditComponent{
  editPageSchema: any;
  entity: string;
  entityId: string;
  ngxSchemaPageActionMap: {[type: string]: any} = {};
  ngxSchemaPageActionObservable: any;
  constructor(private activatedRoute: ActivatedRoute,
    private spService: SPService,
    private ngxSchemaPageService:NgxSchemaPageService,
    private router: Router,
    private apiDataProviderService: ApiDataProviderService){
      this.initActionMap();
      this.activatedRoute.params.subscribe((params: any)=>{
        this.entity = params.entity;
        this.entityId = params.id;
        this.editPageSchema = undefined;
        this.spService.getPageSchema('crud','edit',this.entity).subscribe((res: any)=>{
          this.editPageSchema = res;
          const widget: any = this.spService.getWidgetById('EDIT_FORM');
          this.apiDataProviderService.createApi(this.entity).getById(this.entityId).subscribe((res)=>{
            widget.data.formList["0"].model = res;
          });
        });
      });
      this.ngxSchemaPageActionObservable = this.ngxSchemaPageService.onAction$.subscribe((evt: any)=>{
        if(this.ngxSchemaPageActionMap[evt.actionKey]){
          this.ngxSchemaPageActionMap[evt.actionKey](evt);
        }
      });
  }

  private goBack(data): void{
    if(this.entity === 'groupContacts' || this.entity === 'privateGroupContacts'){
      this.router.navigateByUrl(`/pages/crud/list/${this.entity}?parent=${this.entity}&datatable=${
        JSON.stringify({id: data.id, init: false})
      }`);
    }else{
      this.router.navigateByUrl(`/pages/crud/list/${this.entity}`);
    }
  }

  private initActionMap(){
    this.ngxSchemaPageActionMap = {
      'SFFORM_RESET': (data)=>{
        data.form.reset();
      },
      'SFFORM_SAVE': (data)=>{
        if(data.form.valid){
          this.apiDataProviderService.createApi(data.btnAction.options.entity)
          .update(data.form.value, this.entityId)
          .subscribe((res: any)=>{
            this.goBack(data);
          });
        }
      },
      'SFFORM_CANCEL': (data)=>{
        this.goBack(data);
      }
    };
  }
}
