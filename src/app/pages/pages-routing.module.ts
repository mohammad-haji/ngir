import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';
import {PAGE_TITLE_TAGS_CONST} from '../config/tags/page-title-tags.const';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      TITLE_TAG_KEY: 'dashboard'
    }
  }, {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
  },
    //   {
    //   path: 'products',
    //   loadChildren: './products/products.module#ProductsModule',
    // }, {
    //   path: 'product-attributes',
    //   loadChildren: './product-attributes/product-attributes.module#ProductAttributesModule',
    // }, {
    //   path: 'tags',
    //   loadChildren: './tags/tags.module#TagsModule',
    // }, {
    //   path: 'categories',
    //   loadChildren: './categories/categories.module#CategoriesModule',
    // }, {
    //   path: 'orders',
    //   loadChildren: './orders/orders.module#OrdersModule',
    // }, {
    //   path: 'transactions',
    //   loadChildren: './transactions/transactions.module#TransactionsModule',
    // },
    {
      path: 'reviews',
      loadChildren: './reviews/reviews.module#ReviewsModule',
    },
    //   {
    //   path: 'components',
    //   loadChildren: './components/components.module#ComponentsModule',
    // }, {
    //   path: 'miscellaneous',
    //   loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
    // },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }, {
      path: '**',
      component: NotFoundComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
