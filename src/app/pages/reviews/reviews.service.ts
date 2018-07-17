import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ReviewsService {
  constructor(public http: HttpClient) {

  }

  /**
   * get Reviews list
   * @returns {Observable<any>}
   */
  getReviewsList(): Observable<any> {
    return this.http.get('/reviews')
  }
}
