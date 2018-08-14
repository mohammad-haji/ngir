/**
 * Created by Mohammad.hajiaghazadeh on 8/14/2018
 */
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {HttpClient} from "@angular/common/http";
import {NbLayoutDirection, NbLayoutDirectionService} from "@nebular/theme";
import {TranslateService} from "@ngx-translate/core";
import * as _ from 'lodash';

@Injectable()
export class MenuLoaderService implements Resolve<Observable<any>> {
  private JSON_DIR = '/assets/data/menus';
  currentDirection: NbLayoutDirection;
  currentLang: string = 'fa';
  requestList: any[] = [];
  ngxMenuConfig: any = {};

  constructor(private httpClient: HttpClient,
              private directionService: NbLayoutDirectionService,
              public translate: TranslateService) {
    this.currentDirection = this.directionService.getDirection();
    // @FIXME: get current lang better ex: from browser lang
    this.currentLang = this.translate.currentLang || 'fa';
  }


  loadFormByLang(lang: string, menuType: string) {
    return this.httpClient.get(`${this.JSON_DIR}/${this.ngxMenuConfig[menuType][lang]}`);
  }

  resolve(route: ActivatedRouteSnapshot) {
    this.requestList.push(this.httpClient.get('/assets/config/menu/menu.config.json'));
    return Observable.forkJoin(this.requestList)
      .map(results => {
        return results;
      })
      .flatMap((formConfig) => {
        this.requestList = [];
        let appMenuConfig = _.first(formConfig);
        for (let menu_key of Object.keys(appMenuConfig)) {
          route.data.menus.forEach(_menuKey => {
            if (menu_key === _menuKey) {
              this.requestList.push(this.httpClient.get(`${this.JSON_DIR}/${appMenuConfig[menu_key][this.currentLang]}`).map(res => res));
            }
          });
        }
        return Observable.forkJoin(this.requestList).map(menusResult => {
          let obj = {};
          Object.keys(appMenuConfig).forEach((menu_key, index) => {
            route.data.menus.forEach(_menuKey => {
              if (menu_key === _menuKey) {
                obj[menu_key] = appMenuConfig[menu_key];
                obj[menu_key].menuItems = {};
                obj[menu_key].menuItems[this.currentLang] = menusResult[index];
              }
            });
          });
          this.ngxMenuConfig = obj;
          return obj;
        });
      })
      .catch(error => {
        return Observable.throw(error);
      })
  }
}
