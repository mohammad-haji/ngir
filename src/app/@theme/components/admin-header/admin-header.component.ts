import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {NbMenuService, NbSidebarService} from '@nebular/theme';
import {UserService} from '../../../@core/data/users.service';
import {AnalyticsService} from '../../../@core/utils/analytics.service';

@Component({
  selector: 'ngx-admin-header',
  styleUrls: ['./admin-header.component.scss'],
  templateUrl: './admin-header.component.html'
})
export class AdminHeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [{title: 'پروفایل', link: '/pages/users/profile'}, {title: 'خروج', url: '/auth/login'}];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
