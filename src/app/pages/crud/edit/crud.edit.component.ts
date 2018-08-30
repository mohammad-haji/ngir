import { Component } from '@angular/core';
import { SPService } from './../../../sp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSchemaPageService } from '../../../@core/ngx-schema-page/ngx-schema-page.service';

@Component({
  selector: 'crud-edit-component',
  template: `
    <ngx-schema-page *ngIf="editPageSchema" [schema]="editPageSchema"></ngx-schema-page>
  `
})
export class CrudEditComponent{
  editPageSchema: any;
  entity: string;
  ngxSchemaPageActionMap: {[type: string]: any} = {};
  ngxSchemaPageActionObservable: any;
  constructor(private activatedRoute: ActivatedRoute,
    private spService: SPService,
    private ngxSchemaPageService:NgxSchemaPageService,
    private router: Router){
      this.initActionMap();
      this.activatedRoute.params.subscribe((res: any)=>{
        this.entity = res.entity;
        this.editPageSchema = undefined;
        this.spService.getPageSchema('crud','edit',this.entity).subscribe((res: any)=>{
          this.editPageSchema = res;
        });
      });
      this.ngxSchemaPageActionObservable = this.ngxSchemaPageService.onAction$.subscribe((evt: any)=>{
        this.ngxSchemaPageActionMap[evt.actionKey](evt);
      });
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
        if(this.entity === 'groupContacts' || this.entity === 'privateGroupContacts'){
          this.router.navigateByUrl(`/pages/crud/list/${this.entity}?parent=${this.entity}&datatable=${
            JSON.stringify({id: data.id, init: false})
          }`);
        }else{
          this.router.navigateByUrl(`/pages/crud/list/${this.entity}`);
        }
      },
      'SFFORM_ADD': (data)=>{
        console.log('onAdd', data);
      },
      'DATATABLE_CUSTOM': (data)=>{

      },
    };
  }
}
