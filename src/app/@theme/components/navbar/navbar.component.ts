import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {NbMenuService, NbSidebarService} from '@nebular/theme';
import {UserService} from '../../../@core/data/users.service';
import {AnalyticsService} from '../../../@core/utils/analytics.service';
import {MENU_CONFIG} from "../../../config/menu/menu-config.const";

@Component({
  selector: 'ngx-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  isNavbarCollapsed: boolean = false;
  navItems: any = MENU_CONFIG;

  constructor() {
  }
}
