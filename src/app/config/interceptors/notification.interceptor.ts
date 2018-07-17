import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CONFIG} from '../config'
import {BodyOutputType, Toast, ToasterService} from "angular2-toaster";

const exceptionList: Array<any> = ['/assets/i18n/en.json', '/assets/i18n/fa.json'];

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
  constructor(private toasterService: ToasterService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).map((event: any) => {
      if (event && event.body) {
        if (event.url.indexOf(exceptionList[0]) === -1 && event.url.indexOf(exceptionList[1]) === -1) {
          this.popNotification('با موفقیت انجام شد', event.body.message);
        }
      }
      return event;
    });
  }

  popNotification(title: string, body: string) {
    const toast: Toast = {
      type: 'success',
      title: title,
      body: body,
      timeout: 3000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }
}
