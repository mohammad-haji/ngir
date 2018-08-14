import {Component, OnInit} from '@angular/core';

import {NbLayoutDirection, NbLayoutDirectionService} from "@nebular/theme";
import {TranslateService} from "@ngx-translate/core";
import {takeWhile} from "rxjs/operators/takeWhile";
import {ActivatedRoute} from "@angular/router";
import {MenuLoaderService} from "../@core/services/menu-loader.service";

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {
  directions = NbLayoutDirection;
  currentDirection: NbLayoutDirection;
  alive = true;
  menu: any;
  menus: any = {
    side_bar: {
      fa: '',
      en: ''
    }
  };
  isFirstCheck: boolean = true;

  constructor(private directionService: NbLayoutDirectionService,
              private activatedRoute: ActivatedRoute,
              public translate: TranslateService,
              private menuLoaderService: MenuLoaderService) {

    translate.addLangs(['en', 'fa']);
    translate.setDefaultLang('fa');

    const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fa/) ? browserLang : 'fa');

    this.currentDirection = this.directionService.getDirection();


    this.directionService.onDirectionChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(newDirection => {
        if (this.isFirstCheck) {
          this.isFirstCheck = false;
          return;
        }
        if (this.menus.side_bar.menuItems[this.translate.currentLang]) {
          this.menu = this.menus.side_bar.menuItems[this.translate.currentLang];
        } else {
          this.menuLoaderService.loadFormByLang(this.translate.currentLang, 'side_bar').subscribe(_menu => {
            this.menus.side_bar.menuItems[this.translate.currentLang] = _menu;
            console.log(_menu);
            this.menu = this.menus.side_bar.menuItems[this.translate.currentLang];
          });
        }
        return this.currentDirection = newDirection
      });
  }

  ngOnInit() {
    let selectedMenu = this.activatedRoute.snapshot.data.menus['side_bar'];
    this.menu = selectedMenu.menuItems[this.translate.currentLang];
    this.menus.side_bar = selectedMenu;
  }
}
