import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    this.router.navigateByUrl('/account/login');
    return false;
  }
}
