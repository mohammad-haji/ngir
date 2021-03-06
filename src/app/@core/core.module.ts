import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbSecurityModule, NbRoleProvider} from '@nebular/security';
import {of as observableOf} from 'rxjs';

import {throwIfAlreadyLoaded} from './module-import-guard';
import {DataModule} from './data/data.module';
import {AnalyticsService} from './utils/analytics.service';
import {HttpResponse} from '@angular/common/http';
import {PageTitleTagsService} from "./services/page-title-tags.service";
import {FormLoaderService} from "./dynamic-form/service/form-loader.service";
import {MenuLoaderService} from "./services/menu-loader.service";
import {ApiDataProviderService} from "./services/api/api-data-provider.service";
import {ApiConfigReaderService} from "./services/api/api-config-reader.service";
import {ApiDataCleanerService} from "./services/api/api-data-cleaner.service";
import {NgxSchemaPageModule} from "./ngx-schema-page/ngx-schema-page.module";

const socialLinks = [
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

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export function getToken(module: string, res: HttpResponse<any>) {
  return res.body.data.accessToken.token;
  // return getDeepFromObject(res.body.data,
  //   this.getConfigValue('accessToken.token'))
};

const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,
  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
    NgxSchemaPageModule
  ],
  exports: [
    NgxSchemaPageModule
  ],
  declarations: [],
  providers: [
    PageTitleTagsService,
    FormLoaderService,
    MenuLoaderService,
    ApiDataProviderService,
    ApiConfigReaderService,
    ApiDataCleanerService
  ]
})
export class CoreModule {
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  //   throwIfAlreadyLoaded(parentModule, 'CoreModule');
  // }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      exports: [
        NgxSchemaPageModule
      ],
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
