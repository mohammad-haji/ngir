import {NgModule} from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';
import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {AddUserComponent} from './add/add-user.component';
import {DetailUserComponent} from './detail/detail-user.component';
import {EditUserComponent} from './edit/edit-user.component';
import {ListUserComponent} from './list/list-user.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {UsersService} from './users.service';
import {ProfileComponent} from "./profile/profile.component";
import {SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry} from "../../@core/schema-form/src/public_api";
import {FormsModule} from "@angular/forms";

const components = [
  UsersComponent,
  AddUserComponent,
  DetailUserComponent,
  EditUserComponent,
  ListUserComponent,
  ProfileComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    UsersRoutingModule,
    FormsModule,
    SchemaFormModule.forRoot(),
  ],
  declarations: [
    ...components,
  ],
  providers: [
    UsersService,
    {provide: WidgetRegistry, useClass: DefaultWidgetRegistry}
  ],
  entryComponents: [],
})
export class UsersModule {
}
