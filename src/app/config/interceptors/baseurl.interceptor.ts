import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CONFIG} from '../config'

const exceptionList: Array<any> = ['/assets/i18n/en.json', '/assets/i18n/fa.json'];

@Injectable()
export class BaseurlInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url} = request;
    if (exceptionList.indexOf(url) === -1) {
      request = request.clone({
        url: CONFIG.server.serverBaseURL + url,
      });
    }
    return next.handle(request);
  }
}
