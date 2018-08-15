import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {isPlatformServer} from "@angular/common";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isServer: boolean;

  constructor(@Inject(PLATFORM_ID) platformId,) {
    this.isServer = isPlatformServer(platformId);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = '';
    if (!this.isServer) {
      token = localStorage.getItem('token');
    }
    // @TODO: prod uncomment this on production
    // if (token) {
    //   request = request.clone({
    //     setHeaders: {
    //       'x-access-token': token,
    //     },
    //   });
    // }
    return next.handle(request);
  }
}
