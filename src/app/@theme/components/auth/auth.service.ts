import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs/Rx';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginModalComponent} from "./modals/login/login.modal.component";
import {SignupModalComponent} from "./modals/signup/signup.modal.component";

@Injectable()
export class AuthService {
  private baseUrl: string = '/auth';
  public user: any;
  public user$: Subject<any> = new Subject<any>();

  constructor(public http: HttpClient, private modalService: NgbModal) {

  }


  openLoginModal() {
    let modalRef = this.modalService.open(LoginModalComponent, {});
    return modalRef;
  }

  openSignupModal() {
    let modalRef = this.modalService.open(SignupModalComponent, {});
    return modalRef;
  }

  /**
   * login user
   * @param userCrediential
   * @returns {Observable<any>}
   */
  login(userCrediential: any): Observable<any> {
    return this.http.post(`${this.baseUrl + '/signin'}`, userCrediential);
  }

  register(userCrediential: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, userCrediential);
  }

  getCurrentUser() {
    return this.user;
  }

  isAuthenticated() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
    this.user$.next(this.user);
  }

}
