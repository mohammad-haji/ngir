import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from './users.component';
import {AddUserComponent} from './add/add-user.component';
import {DetailUserComponent} from './detail/detail-user.component';
import {EditUserComponent} from './edit/edit-user.component';
import {ListUserComponent} from './list/list-user.component';
import {PAGE_TITLE_TAGS_CONST} from '../../config/tags/page-title-tags.const';
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [{
    path: '',
    component: UsersComponent,
    children: [{
      path: 'add',
      component: AddUserComponent,
      data: PAGE_TITLE_TAGS_CONST.users.add
    }, {
      path: 'detail',
      component: DetailUserComponent,
    }, {
      path: 'edit',
      component: EditUserComponent,
    }, {
      path: 'list',
      component: ListUserComponent,
      data: {
        TITLE_TAG_KEY: 'users.list'
      }
    }, {
      path: 'profile',
      component: ProfileComponent,
    },
    ],
  },
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
