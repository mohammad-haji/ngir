import {NgModule} from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';
import {ReviewsRoutingModule} from './reviews-routing.module';

import {ReviewsComponent} from './reviews.component';
import {AddReviewComponent} from './add/add-review.component';
import {DetailReviewComponent} from './detail/detail-review.component';
import {EditReviewComponent} from './edit/edit-review.component';
import {ListReviewComponent} from './list/list-review.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ReviewsService} from './reviews.service';

const components = [
  ReviewsComponent,
  AddReviewComponent,
  DetailReviewComponent,
  EditReviewComponent,
  ListReviewComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    ReviewsRoutingModule,
  ],
  declarations: [
    ...components,
  ],
  providers: [
    ReviewsService
  ],
  entryComponents: [],
})
export class ReviewsModule {
}
