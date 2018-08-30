/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../auth.service";
import {makeStateKey, TransferState} from "@angular/platform-browser";
import {isPlatformServer} from "@angular/common";
// import {getDeepFromObject} from '@nebular/auth/helpers';
// import {NB_AUTH_OPTIONS, NbAuthResult, NbAuthService, NbAuthSocialLink} from '@nebular/auth';

const USER_KEY = makeStateKey<string>('user');

@Component({
  selector: 'ngx-login',
  template: `
    <nb-auth-block>
      <h2 class="title">ورود</h2>
      <small class="form-text sub-title">سلام با نام کاربری یا ایمیل خود وارد شوید</small>

      <form (ngSubmit)="login()" #form="ngForm" autocomplete="nope">

        <div *ngIf="showMessages.error && errors && errors.length > 0 && !submitted"
             class="alert alert-danger" role="alert">
          <div><strong>Oh snap!</strong></div>
          <div *ngFor="let error of errors">{{ error }}</div>
        </div>

        <div *ngIf="showMessages.success && messages && messages.length > 0 && !submitted"
             class="alert alert-success" role="alert">
          <div><strong>Hooray!</strong></div>
          <div *ngFor="let message of messages">{{ message }}</div>
        </div>

        <div class="form-group">
          <label for="input-email" class="sr-only">Email address</label>
          <input name="email" [(ngModel)]="user.usernameOrEmail" id="input-email" pattern=".+@.+\..+"
                 class="form-control" placeholder="آدرس ایمیل" #email="ngModel"
                 [class.form-control-danger]="email.invalid && email.touched" autofocus
                 [required]="true">
          <small class="form-text error" *ngIf="email.invalid && email.touched && email.errors?.required">
            ایمیل ضروری است!
          </small>
          <small class="form-text error"
                 *ngIf="email.invalid && email.touched && email.errors?.pattern">
            Email should be the real one!
          </small>
        </div>

        <div class="form-group">
          <label for="input-password" class="sr-only">Password</label>
          <input name="password" [(ngModel)]="user.password" type="password" id="input-password"
                 class="form-control" placeholder="رمز عبور" #password="ngModel"
                 [class.form-control-danger]="password.invalid && password.touched"
                 [required]="true"
                 [minlength]="4"
                 [maxlength]="50">
          <small class="form-text error" *ngIf="password.invalid && password.touched && password.errors?.required">
            رمز عبور ضروری است!
          </small>
          <small
            class="form-text error"
            *ngIf="password.invalid && password.touched && (password.errors?.minlength || password.errors?.maxlength)">
            Password should contains
            from 4
            to 50
            characters
          </small>
        </div>

        <div class="form-group accept-group col-sm-12">
          <nb-checkbox name="rememberMe" [(ngModel)]="user.rememberMe">مرا به خاطر بسپار</nb-checkbox>
          <!-- <a class="forgot-password" routerLink="../request-password">رمز عبورم را فراموش کرده ام</a>-->
        </div>

        <button [disabled]="submitted || !form.valid" class="btn btn-block btn-hero-success"
                [class.btn-pulse]="submitted">
          ورود
        </button>
      </form>
<!--
      // <div class="links">

      //   // <ng-container *ngIf="socialLinks && socialLinks.length > 0">
      //   //   <small class="form-text">یا با حساب های کاربری خود وارد شوید</small>

      //   //   <div class="socials">
      //   //     <ng-container *ngFor="let socialLink of socialLinks">
      //   //       <a *ngIf="socialLink.link"
      //   //          [routerLink]="socialLink.link"
      //   //          [attr.target]="socialLink.target"
      //   //          [attr.class]="socialLink.icon"
      //   //          [class.with-icon]="socialLink.icon">{{ socialLink.title }}</a>
      //   //       <a *ngIf="socialLink.url"
      //   //          [attr.href]="socialLink.url"
      //   //          [attr.target]="socialLink.target"
      //   //          [attr.class]="socialLink.icon"
      //   //          [class.with-icon]="socialLink.icon">{{ socialLink.title }}</a>
      //   //     </ng-container>
      //   //   </div>
      //   // </ng-container>

      //   // <small class="form-text">
      //   //   حساب کاربری ندارید؟ <a routerLink="../register"><strong>ثبت نام</strong></a>
      //   // </small>
      // </div>
      -->
    </nb-auth-block>
  `,
})
export class NgxLoginComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  provider: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  socialLinks: any[] = [];
  private isServer: boolean;

  constructor(private router: Router,
              private authService: AuthService,
              @Inject(PLATFORM_ID) platformId,
              private transferState: TransferState) {
    this.isServer = isPlatformServer(platformId);
    this.showMessages = {
      success: true,
      error: true,
    };
    this.socialLinks = [
      {
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'socicon-github',
      },
      {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'socicon-facebook',
      },
      {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'socicon-twitter',
      },
    ];
  }

  login(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    this.authService.login(this.user).subscribe((res: any) => {
      this.transferState.set(USER_KEY, res.data);
      if (!this.isServer) {
        localStorage.setItem('user', JSON.stringify(res.data));
        localStorage.setItem('token', res.data.accessToken.token);
      }
      this.authService.setUser(res.data);
      this.submitted = false;
      setTimeout(() => {
        return this.router.navigateByUrl('/pages');
      }, 800);
    })
    // this.service.authenticate(this.provider, this.user).subscribe((result: NbAuthResult) => {
    //   this.submitted = false;
    //   if (result.isSuccess()) {
    //     this.messages = result.getMessages();
    //   } else {
    //     this.errors = result.getErrors();
    //   }
    //
    //   const redirect = result.getRedirect();
    //   if (redirect) {
    //     setTimeout(() => {
    //       return this.router.navigateByUrl(redirect);
    //     }, this.redirectDelay);
    //   }
    // });
  }

  getConfigValue(key: string): any {
    // return getDeepFromObject(this.options, key, null);
  }
}
