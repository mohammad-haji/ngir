import { SPService } from './../../../sp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy } from "@angular/core";
import { NgxSchemaPageService } from '../../../@core/ngx-schema-page/ngx-schema-page.service';
import { ApiDataProviderService } from '../../../@core/services/api/api-data-provider.service';

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
  parentParams: any;
  constructor(private activatedRoute: ActivatedRoute,
    private spService: SPService,
    private ngxSchemaPageService:NgxSchemaPageService,
    private router: Router,
    private apiDataProviderService: ApiDataProviderService){

    this.initActionMap();
    this.activatedRoute.params.subscribe((params: any)=>{
      this.entity = params.entity;
      this.addPageSchema = undefined;
      this.spService.getPageSchema('crud','add',this.entity).subscribe((res: any)=>{
        this.addPageSchema = res;
      });
    });
    this.activatedRoute.queryParams.subscribe((queryParams: any)=>{
      if(queryParams && queryParams.parent){
        this.parentParams = JSON.parse(queryParams.parent);
      }
    });
    this.ngxSchemaPageActionObservable = this.ngxSchemaPageService.onAction$.subscribe((evt: any)=>{
      this.ngxSchemaPageActionMap[evt.actionKey](evt);
    });
  }

  ngOnDestroy(){
    this.ngxSchemaPageActionObservable.unsubscribe();
  }

  private goBack(data): void{
    if(this.entity === 'groupContacts' || this.entity === 'privateGroupContacts'){
      this.router.navigateByUrl(`/pages/crud/list/${this.entity}?parent=${
        JSON.stringify({entity:this.entity, id: this.parentParams.id})
      }&datatable=${
        JSON.stringify({id: data.id, init: false})
      }`);
    }else{
      this.router.navigateByUrl(`/pages/crud/list/${this.entity}`);
    }
  }

  private initActionMap(){
    this.ngxSchemaPageActionMap = {
      'SFFORM_SUBMIT': (data)=>{
        if(data.form.valid){
          if(this.entity === 'groupContacts' || this.entity === 'privateGroupContacts'){
            this.apiDataProviderService.createApi(data.btnAction.options.entity)
            .createById(data.form.value, this.parentParams.id)
            .subscribe((res: any)=>{
              this.goBack(data);
            });
          }else{
            this.apiDataProviderService.createApi(data.btnAction.options.entity)
            .create(data.form.value)
            .subscribe((res: any)=>{
              this.goBack(data);
            });
          }
        }
      },
      'SFFORM_RESET': (data)=>{
        data.form.reset();
      },
      'SFFORM_SAVE': (data)=>{
        console.log('onsave', data);
      },
      'SFFORM_CANCEL': (data)=>{
         this.goBack(data);
      },
      'SFFORM_ADD': (data)=>{
        console.log('onAdd', data);
      },
      'DATATABLE_CUSTOM': (data)=>{

      },
    };
  }
}
