import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ReviewsComponent} from './reviews.component';
import {AddReviewComponent} from './add/add-review.component';
import {DetailReviewComponent} from './detail/detail-review.component';
import {EditReviewComponent} from './edit/edit-review.component';
import {ListReviewComponent} from './list/list-review.component';

const routes: Routes = [{
    path: '',
    component: ReviewsComponent,
    children: [{
      path: 'add',
      component: AddReviewComponent,
    }, {
      path: 'detail',
      component: DetailReviewComponent,
    }, {
      path: 'edit',
      component: EditReviewComponent,
    }, {
      path: 'list',
      component: ListReviewComponent,
    },
    ],
  },
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsRoutingModule {
}
