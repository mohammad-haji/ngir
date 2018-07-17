import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class AuthService {
  private baseUrl: string = '/auth';
  private user: any;
  public isAuthenticated: Subject<any> = new Subject<any>();

  constructor(public http: HttpClient) {

  }


  /**
   * login user
   * @param userCrediential
   * @returns {Observable<any>}
   */
  login(userCrediential: any): Observable<any> {
    return this.http.post(`${this.baseUrl + '/signin'}`, userCrediential)
  }

  getCurrentUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
    this.isAuthenticated.next(user);
  }

}
