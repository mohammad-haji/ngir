import { CrudComponent } from './crud.component';
import {NgModule} from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';
import {CrudRoutingModule} from './crud-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CrudService} from './crud.service';
import { CoreModule } from '../../@core/core.module';
import { CrudListComponent } from './list/crud-list.component';
import { CrudAddComponent } from './add/crud-add.component';
import { CrudDetailComponent } from './detail/crud.detail.component';
import { CrudEditComponent } from './edit/crud.edit.component';

const components = [
  CrudComponent,
  CrudListComponent,
  CrudAddComponent,
  CrudDetailComponent,
  CrudEditComponent
];

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    CrudRoutingModule,
    CoreModule
  ],
  declarations: [
    ...components,
  ],
  providers: [
    CrudService,
  ],
  entryComponents: [],
})
export class CrudModule {
}
