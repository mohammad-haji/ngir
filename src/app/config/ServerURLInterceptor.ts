// import {Interceptor, InterceptedRequest, InterceptedResponse} from 'ng2-interceptors';
// import {Router} from '@angular/router';
// import {Injectable} from '@angular/core';
// import {APP_CONFIG_CONST} from './app-config.const';
// import {SharedService} from './shared.service';
// // import {ToasterService} from 'angular2-toaster';
// import * as _ from 'lodash';
// // import {AppService} from "../app.service";
// // import {SlimLoadingBarService} from "ng2-slim-loading-bar";
//
// declare var document: any;
//
// @Injectable()
// export class ServerURLInterceptor implements Interceptor {
//   baseUrl: string = '';
//
//   constructor(private sharedService: SharedService,
//               // private toasterService: ToasterService,
//               private router: Router,
//               // private slimLoadingBarService: SlimLoadingBarService,
//               // private appService: AppService) {
//               ) {
//     this.baseUrl = (APP_CONFIG_CONST.api_prod_base_url ? APP_CONFIG_CONST.api_prod_base_url : APP_CONFIG_CONST.api_dev_base_url);
//   }
//
//   public interceptBefore(request: InterceptedRequest): InterceptedRequest {
//     // Do whatever with request: get info or edit it
//     this.sharedService.showLoading();
//     // this.slimLoadingBarService.start();
//     request.options.url = this.baseUrl + request.url;
//     const currentUser: any = localStorage.getItem('currentUser');
//     // let checkAccessToken: boolean = false;
//     // let shouldRedirect: boolean = false;
//     // if (request.url.indexOf('login') === -1
//     //   && request.url.indexOf('register') === -1
//     //   && request.url.indexOf('activate') === -1
//     //   && request.url.indexOf('activate/retry-sms/') === -1
//     //   && request.url.indexOf('reset_password/sms/init/') === -1
//     //   && request.url.indexOf('reset_password/finish') === -1) {
//     //   checkAccessToken = true;
//     //   shouldRedirect = true;
//     // }
//
//     // if (currentUser && checkAccessToken) {
//     //   const currentuserObj = JSON.parse(currentUser);
//     //   request.options.headers.append('X-AUTH-TOKEN', currentuserObj.tokenType + ' ' + currentuserObj.token);
//     // } else {
//     //   if (shouldRedirect) {
//     //     this.router.navigateByUrl('/account/login');
//     //   }
//     // }
//     return request;
//     /*
//      You can return:
//      - Request: The modified request
//      - Nothing: For convenience: It's just like returning the request
//      - <any>(Observable.throw('cancelled')): Cancels the request, interrupting it from the pipeline, and calling back 'interceptAfter' in backwards order of those interceptors that got called up to this point.
//      */
//   }
//
//   public interceptAfter(response): any {
//     // Do whatever with add-ideation: get info or edit it
//     this.sharedService.hideLoading();
//     // this.slimLoadingBarService.complete();
//
//     if (response && response.response) {
//       response.response._body = response.response._body ? response.response._body : '{}';
//       response.response.data = (response.response.data ? response.response.data :
//         (_.isObject(response.response._body) ? response.response._body : JSON.parse(response.response._body)));
//       this.messageShower(response.response);
//       this.errorInterceptor(response.response.data);
//     } else {
//       return response = {data: {}};
//     }
//     return response;
//     /*
//      You can return:
//      - Response: The modified add-ideation
//      - Nothing: For convenience: It's just like returning the add-ideation
//      */
//   }
//
//   private messageShower(response) {
//     const errorType = (response.data.result !== 100) ? 'error' : 'success';
//     if (response.data && response.data.desc && response.data.desc == 'پاسخی یافت نشد') {
//       return;
//     }
//     if (errorType !== 'success') {
//       if (!response.ok && !response.status) {
//         // this.toasterService.pop('error', 'خطا', 'در ارتباط با سرور خطایی رخ داده است');
//       }
//       if (response.data && response.data.desc && response.data.status !== 401) {
//         // this.toasterService.pop(errorType, '', response.data.desc);
//       }
//       if (response.data.data && response.data.data.errors && response.data.data.errors.length) {
//         response.data.data.errors.forEach((err) => {
//           // this.toasterService.pop(errorType, '', err.desc);
//         });
//       }
//     } else {
//       if (response.url.indexOf('CreateComment') !== -1) {
//         // this.toasterService.pop(errorType, '', response.data.desc);
//       }
//     }
//   }
//
//   private errorInterceptor(body: any) {
//     switch (body.status) {
//       case 403:
//         // document.location = '/forbiden';
//         // uiRouter.stateService.go('static/error-403.html');
//         break;
//       case 401:
//         // this.toasterService.pop('error', '', 'لطفا مجددا وارد شوید');
//         this.router.navigateByUrl('/account/login');
//         // this.checkAccessTokenExipreTime();
//         // document.location = '/account/notFound';
//         // uiRouter.stateService.go('app.account.login');
//         // this.location.go('static/login.html');
//         break;
//       case 419:
//         // this.location.go('#/change_password');
//         break;
//       default:
//         break;
//     }
//     return true;
//   }
//
//   // private checkAccessTokenExipreTime() {
//   //   const {token} = JSON.parse(localStorage.getItem('currentUser'));
//   //   this.appService.getRefreshToken().subscribe(res => {
//   //       if (!JSON.parse(res._body).refreshtokenExpireTime) {
//   //         this.toasterService.pop('error', '', 'لطفا مجددا وارد شوید');
//   //         this.router.navigateByUrl('/account/login');
//   //       }
//   //       localStorage.setItem('currentUser', res._body);
//   //     },
//   //     err => {
//   //       this.toasterService.pop('error', '', 'لطفا مجددا وارد شوید');
//   //       this.router.navigateByUrl('/account/login');
//   //     });
//   // }
// }
//
