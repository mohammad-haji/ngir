import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CrudComponent} from './crud.component';
import { FormLoaderService } from '../../@core/dynamic-form/service/form-loader.service';
import { CrudListComponent } from './list/crud-list.component';
import { CrudAddComponent } from './add/crud-add.component';
import { CrudDetailComponent } from './detail/crud.detail.component';
import { CrudEditComponent } from './edit/crud.edit.component';

const routes: Routes = [{
  path: '',
  component: CrudComponent,
  children: [{
      path: 'list/:entity',
      component: CrudListComponent,
      data: {
        TITLE_TAG_KEY: 'discounts.list'
      }
    },
    {
      path: 'add/:entity',
      component: CrudAddComponent,
      data: {
        TITLE_TAG_KEY: 'discounts.add'
      }
    },
    {
      path: 'detail/:entity/:id',
      component: CrudDetailComponent,
      data: {
        TITLE_TAG_KEY: 'discounts.detail'
      }
    },
    {
      path: 'edit/:entity/:id',
      component: CrudEditComponent,
      data: {
        TITLE_TAG_KEY: 'discounts.edit'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {
}
