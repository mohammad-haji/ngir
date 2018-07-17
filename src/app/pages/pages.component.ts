import {Component} from '@angular/core';

import {MENU_ITEMS} from './pages-menu';
import {MENU_ITEMS_EN} from './pages-menu-en';
import {NbLayoutDirection, NbLayoutDirectionService} from "@nebular/theme";
import {TranslateService} from "@ngx-translate/core";
import {takeWhile} from "rxjs/operators/takeWhile";

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {
  directions = NbLayoutDirection;
  currentDirection: NbLayoutDirection;
  alive = true;

  constructor(private directionService: NbLayoutDirectionService, public translate: TranslateService) {
    translate.addLangs(['en', 'fa']);
    translate.setDefaultLang('fa');

    const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fa/) ? browserLang : 'fa');

    this.currentDirection = this.directionService.getDirection();


    this.directionService.onDirectionChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(newDirection => {
        if (newDirection === 'ltr') {
          this.menu = MENU_ITEMS_EN;
        } else {
          this.menu = MENU_ITEMS;
        }
        return this.currentDirection = newDirection
      });
  }

  menu = MENU_ITEMS;
}
