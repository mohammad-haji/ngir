import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UsersService {
  constructor(public http: HttpClient) {

  }

  /**
   * get users list
   * @returns {Observable<any>}
   */
  getUsersList(): Observable<any> {
    return this.http.get('/users')
  }
}
