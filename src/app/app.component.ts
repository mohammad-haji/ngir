/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {AnalyticsService} from './@core/utils/analytics.service';
import {TranslateService} from '@ngx-translate/core';
import {ToasterConfig} from 'angular2-toaster';
import {ActivatedRoute, ActivatedRouteSnapshot, ChildActivationEnd, NavigationEnd, Router} from '@angular/router';
import {makeStateKey, Meta, Title, TransferState} from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {isPlatformServer} from "@angular/common";
import {AuthService} from "./@theme/components/auth/auth.service";
import {PageTitleTagsService} from "./@core/services/page-title-tags.service";
import { AppService } from './app.service';

const TOKEN_KEY = makeStateKey<string>('token');
const USER_KEY = makeStateKey<string>('user');

@Component({
  selector: 'ngx-app',
  template: `
    <toaster-container [toasterconfig]="toasterConfig"></toaster-container>
    <router-outlet></router-outlet>`,
})


export class AppComponent implements OnInit {
  toasterConfig: ToasterConfig;
  position = 'toast-bottom-left';
  animationType = 'fade';
  title = 'HI there!';
  content = `I'm cool toaster!`;
  timeout = 5000;
  toastsLimit = 5;
  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;
  type = 'default';
  private isServer: boolean;
  result: string = '';
  user: string = '';


  constructor(private analytics: AnalyticsService,
              private router: Router,
              private meta: Meta,
              private titleService: Title,
              private tstate: TransferState,
              @Inject(PLATFORM_ID) platformId,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private pageTitleTagsService: PageTitleTagsService,
            private appService: AppService) {
    this.isServer = isPlatformServer(platformId);

// console.log(this.sampleNgxShema.type);

    // if(this.sampleNgxShema.type === 'CRUD'){
    //   this.router.navigate(['/pages/crud']);
    //   this.appService.setPageDate(this.sampleNgxShema);
    // }


  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.makeToasterConfig();
// this.updatePageTitleTags();
// this.checkAccessToken();
    this.pageTitleTagsService.updatePageTitleTags();
  }

  makeToasterConfig() {
    this.toasterConfig = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
  }

// updatePageTitleTags(): void {
//   this.router.events
//     .filter((event) => event instanceof NavigationEnd)
//     .map(() => this.activatedRoute)
//     .map((route) => {
//       while (route.firstChild) {
//         route = route.firstChild;
//       }
//       return route;
//     })
//     .filter((route) => route.outlet === 'primary')
//     .mergeMap((route) => route.data)
//     .subscribe((event) => {
//       if (event['metaTags'] && event['metaTags'].length) {
//         event['metaTags'].forEach((tag: any) => {
//           this.meta.updateTag(tag, `name='${tag.name}'`);
//         });
//       }
//       this.titleService.setTitle(event['title'] || 'ngir')
//     });
// }

  checkAccessToken(): void {
    if (this.tstate.hasKey(TOKEN_KEY)
    ) {
      // We are in the browser
      this.result = this.tstate.get(TOKEN_KEY, '');
      this.user = this.tstate.get(USER_KEY, '');
      console.log('on Browser', this.user);
      console.log('on Browser', this.result);
      console.log('on Browser', this.tstate);
    }
    else if (this.isServer) {
      // We are on the server
      this.authService.isAuthenticated.subscribe(res => {
        this.tstate.set(USER_KEY, res);
        console.log(res);
        console.log(this.authService.getCurrentUser());
        this.tstate.set(USER_KEY, this.authService.getCurrentUser());
      });
      this.tstate.set(TOKEN_KEY, 'Im created on the server!');
      console.log('server', this.tstate);
    } else {
      this.result = 'Im created in the browser!';
      console.log('none', 'lskjdlkjfdf');
      console.log('none', this.tstate);
      // No result received
    }
  }
}
