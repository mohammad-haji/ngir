import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from './users.component';
import {AddUserComponent} from './add/add-user.component';
import {DetailUserComponent} from './detail/detail-user.component';
import {EditUserComponent} from './edit/edit-user.component';
import {ListUserComponent} from './list/list-user.component';
import {ProfileComponent} from "./profile/profile.component";
import {FormLoaderService} from "../../@core/dynamic-form/service/form-loader.service";

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [{
    path: 'add',
    component: AddUserComponent,
    data: {
      TITLE_TAG_KEY: 'users.add',
      pageTitle: 'افزودن کاربر',
      forms: {
        basic_info: {
          title: 'اطلاعات اصلی',
          containerClass: 'col-sm-6',
          path: 'users/basic-info-users'
        },
        edit_users: {
          title: 'فرم نقش های کاربر',
          containerClass: 'col-sm-6',
          path: 'users/edit-users'
        },
        add_users: {
          title: 'اطلاعات پایه کاربر',
          containerClass: 'col-sm-6',
          path: 'users/add-users'
        },
      }
    },
    resolve: {
      formLoader: FormLoaderService,
    }
  }, {
    path: 'detail/:id',
    component: DetailUserComponent,
  }, {
    path: 'edit/:id',
    component: EditUserComponent,
    data: {
      TITLE_TAG_KEY: 'users.edit',
      pageTitle: 'ویرایش کاربر',
      forms: {
        basic_info: {
          title: 'اطلاعات اصلی',
          containerClass: 'col-sm-6',
          path: 'users/basic-info-users'
        },
        edit_users: {
          title: 'فرم نقش های کاربر',
          containerClass: 'col-sm-6',
          path: 'users/edit-users'
        },
        add_users: {
          title: 'اطلاعات پایه کاربر',
          containerClass: 'col-sm-6',
          path: 'users/add-users'
        },
      }
    },
    resolve: {
      form: FormLoaderService,
    }
  }, {
    path: 'list',
    component: ListUserComponent,
    data: {
      TITLE_TAG_KEY: 'users.list'
    }
  }, {
    path: 'profile',
    component: ProfileComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
