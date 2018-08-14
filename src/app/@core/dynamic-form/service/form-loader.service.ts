/**
 * Created by Mohammad.hajiaghazadeh on 8/13/2018
 */
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FormLoaderService implements Resolve<Observable<any>> {
  private JSON_DIR = '/assets/forms/';

  constructor(private httpClient: HttpClient) {

  }

  /**
   * load form from forms directory
   * @param form
   * @returns {Observable<Object>}
   */
  load(form) {
    return this.httpClient.get(`${this.JSON_DIR}${form.path}.form.schema.json`);
  }

  /**
   * load forms based on form config
   * @param route
   * @returns {any}
   */
  loadForms(route): any {
    return Object.keys(route.data.forms).forEach((formKey) => {
      route.data.forms[formKey].schema = this.load(route.data.forms[formKey]);
      // .subscribe(res => {
      // });
    });
  }

  /**
   * resolve forms
   * @param {ActivatedRouteSnapshot} route
   * @returns {any}
   */
  resolve(route: ActivatedRouteSnapshot) {
    return this.loadForms(route);
  }
}
