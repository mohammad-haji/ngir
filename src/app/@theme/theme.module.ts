import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

// make sure the path is correct for your setup

import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule, NbMenuService, NbLayoutDimensions,
} from '@nebular/theme';

import {NbSecurityModule} from '@nebular/security';

import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  ThemeSettingsComponent,
  SwitcherComponent,
  LayoutDirectionSwitcherComponent,
  ThemeSwitcherComponent,
  TinyMCEComponent,
} from './components';
import {CapitalizePipe, PluralPipe, RoundPipe, TimingPipe} from './pipes';
import {
  OneColumnLayoutComponent,
  SampleLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';
import {DEFAULT_THEME} from './styles/theme.default';
import {COSMIC_THEME} from './styles/theme.cosmic';
import {TranslateModule} from "@ngx-translate/core";
import {NgxAuthBlockComponent, NgxAuthComponent, NgxLoginComponent} from "./components/auth";
import {AuthService} from "./components/auth/auth.service";
import {CORPORATE_THEME} from "./styles/theme.corporate";
import {ThemeSwitcherListComponent} from "./components/theme-switcher/themes-switcher-list/themes-switcher-list.component";
import {NbLayoutDirection} from "@nebular/theme/services/direction.service";
import {NGXNewFooterComponent} from "./components/ngx-new-footer/ngx-new-footer.component";
import {TopHeadComponent} from "./components/top-head/top-head.component";
import {OneColumnWidthLayout} from "./layouts/one-column-width/one-column-width.layout";
import {LoginModalComponent} from "./components/auth/modals/login/login.modal.component";
import {SignupModalComponent} from "./components/auth/modals/signup/signup.modal.component";
import {AdminHeaderComponent} from "./components/admin-header/admin-header.component";
import {NavbarComponent} from "./components/navbar/navbar.component";

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, TranslateModule];

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NgbModule,
  NbSecurityModule, // *nbIsGranted directive
];

const COMPONENTS = [
  SwitcherComponent,
  LayoutDirectionSwitcherComponent,
  ThemeSwitcherComponent,
  ThemeSwitcherListComponent,
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  ThemeSettingsComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
  SampleLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
  OneColumnWidthLayout,


  NgxAuthComponent,
  NgxAuthBlockComponent,
  NgxLoginComponent,
  NGXNewFooterComponent,
  TopHeadComponent,
  LoginModalComponent,
  SignupModalComponent,
  AdminHeaderComponent,
  NavbarComponent

];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
];

const ENTRY_COMPONENTS = [
  ThemeSwitcherListComponent,
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'corporate',
    },
    [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME],
    null, NbLayoutDirection.RTL
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
];

@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
  providers: [
    AuthService,
    NbMenuService
  ],
  entryComponents: [...ENTRY_COMPONENTS],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS, NbMenuService],
    };
  }
}
