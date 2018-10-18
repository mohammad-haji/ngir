import {ChangeDetectionStrategy, Component} from '@angular/core';

// TODO: move layouts into the framework
@Component({
  selector: 'ngx-one-column-width-layout',
  styleUrls: ['./one-column-width.layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nb-layout style="padding: 0">
      <nb-layout-header fixed style="display: none">
        <ngx-admin-header></ngx-admin-header>
      </nb-layout-header>
      <nb-layout-column style="padding: 0">
        <top-head></top-head>
        <ngx-navbar></ngx-navbar>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
      <nb-layout-footer fixed>
        <ngx-new-footer></ngx-new-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnWidthLayout {
}
