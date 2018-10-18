import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {isPlatformServer} from "@angular/common";

@Injectable()
export class AuthGuardService implements CanActivate {
  private isServer: boolean;

  constructor(@Inject(PLATFORM_ID) platformId, public router: Router) {
    this.isServer = isPlatformServer(platformId);
  }

  canActivate(): boolean {
    if (!this.isServer) {
      let token = !!(localStorage.getItem('user'));
      if (token) {
        return true;
      } else {
        this.router.navigateByUrl('/auth/login');
        return false;
      }
    }
    return true;
  }
}
