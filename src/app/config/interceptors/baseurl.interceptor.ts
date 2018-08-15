import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CONFIG} from '../config'

const exceptionList: Array<any> = ['/assets/', 'http'];

@Injectable()
export class BaseurlInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url} = request;
    let isUrlException: boolean = false;
    exceptionList.forEach((exception) => {
      if (url.includes(exception)) {
        isUrlException = true;
      }
    });
    if (!isUrlException) {
      request = request.clone({
        url: CONFIG.server.serverBaseURL + url,
      });
    }
    return next.handle(request);
  }
}
