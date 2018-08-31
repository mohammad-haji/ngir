import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BodyOutputType, Toast, ToasterService} from "angular2-toaster";

const exceptionList: Array<any> = ['/assets/'];

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
  constructor(private toasterService: ToasterService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url} = request;
    return next.handle(request).map((event: any) => {
      if (event && event.body) {
        let isUrlException: boolean = false;
        exceptionList.forEach((exception) => {
          if (url.includes(exception)) {
            isUrlException = true;
          }
        });
        if (!isUrlException && request.method !== 'GET') {
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
