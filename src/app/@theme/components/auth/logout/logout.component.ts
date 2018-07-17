// /**
//  * @license
//  * Copyright Akveo. All Rights Reserved.
//  * Licensed under the MIT License. See License.txt in the project root for license information.
//  */
// import { Component, Inject, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import {NB_AUTH_OPTIONS, NbAuthResult, NbAuthService} from '@nebular/auth';
// import {getDeepFromObject} from '@nebular/auth/helpers';
//
// @Component({
//   selector: 'ngx-logout',
//   template: `
//     <div>Logging out, please wait...</div>
//   `,
// })
// export class NgxLogoutComponent implements OnInit {
//
//   redirectDelay: number = 0;
//   strategy: string = '';
//
//   constructor(protected service: NbAuthService,
//               @Inject(NB_AUTH_OPTIONS) protected options = {},
//               protected router: Router) {
//     this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
//     this.strategy = this.getConfigValue('forms.logout.strategy');
//   }
//
//   ngOnInit(): void {
//     this.logout(this.strategy);
//   }
//
//   logout(strategy: string): void {
//     this.service.logout(strategy).subscribe((result: NbAuthResult) => {
//
//       const redirect = result.getRedirect();
//       if (redirect) {
//         setTimeout(() => {
//           return this.router.navigateByUrl(redirect);
//         }, this.redirectDelay);
//       }
//     });
//   }
//
//   getConfigValue(key: string): any {
//     return getDeepFromObject(this.options, key, null);
//   }
// }
